import {
  BadRequestException,
  Global,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import type { StringValue } from "ms";
import {
  CreatePermissionDto,
  PermissionList,
  PermissionSQL,
  PermissionType,
  RelatedPermissionDto,
  UpdatePermissionDto,
} from "../type/permission";
import {
  CreateResourceDto,
  ResourceType,
  UpdateResourceDto,
} from "../type/resource";
import {
  CreateRoleDto,
  PermissionRoleDto,
  RoleList,
  RoleListWithUser,
  RoleSQL,
  RoleType,
  UpdateRoleDto,
} from "../type/role";
import { CreateScopeDto, ScopeType, UpdateScopeDto } from "../type/scope";
import { CreateSessionDto, UpdateSessionDto } from "../type/session";
import {
  CreateUserDto,
  UpdateUserDto,
  UserList,
  UserRoleDto,
  UserType,
} from "../type/user";
import { convertNosqlFormat } from "../utils/convert-to-nosql-format";
import { generateToken, verifyToken } from "./access.token";
import { NestIamService } from "./nest-iam.service";

type PermissionGetPayload = Array<{
  id: string;
  title: string | null;
  name: string;
  desc: string | null;
  resource: {
    id: string;
    name: string;
    desc: string | null;
  };
  scope: {
    id: string;
    name: string;
    desc: string | null;
  };
  children: {
    child: {
      id: string;
      title: string | null;
      name: string;
      desc: string | null;
      resource: {
        id: string;
        name: string;
        desc: string | null;
      };
      scope: {
        id: string;
        name: string;
        desc: string | null;
      };
    };
  }[];
}>;

type RoleGetPayload = {
  id: string;
  name: string;
  desc: string | null;
  uuid: string;
  created_at: Date;
  updated_at: Date;
  permission_roles: Array<{
    permission: {
      id: string;
      title: string | null;
      name: string;
      desc: string | null;
      resource: {
        id: string;
        name: string;
        desc: string | null;
      };
      scope: {
        id: string;
        name: string;
        desc: string | null;
      };
    };
  }>;
};

@Global()
@Injectable()
export class NestIamCoreService {
  constructor(@Inject() private service: NestIamService) {}

  async createScope(scope: CreateScopeDto): Promise<ScopeType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.create({ data: scope });
    }

    return this.service.sql.scopeSql.create({ data: scope }).then((res) => {
      return convertNosqlFormat(res);
    });
  }

  async getScopes(): Promise<ScopeType[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.findMany();
    }
    return this.service.sql.scopeSql.findMany().then((res) => {
      return res.map((data) => convertNosqlFormat(data));
    });
  }

  async updateScope(id: string, scope: UpdateScopeDto): Promise<ScopeType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.update({
        where: { id: id },
        data: scope,
      });
    }

    return this.service.sql.scopeSql
      .update({ where: { id: Number(id) }, data: scope })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async deleteScope(id: string): Promise<ScopeType> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.delete({ where: { id: id } });
    }
    return this.service.sql.scopeSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async createResource(resource: CreateResourceDto): Promise<ResourceType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.create({ data: resource });
    }

    return this.service.sql.resourceSql
      .create({ data: resource })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async getResources(): Promise<ResourceType[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.findMany();
    }
    return this.service.sql.resourceSql.findMany().then((res) => {
      return res.map((data) => convertNosqlFormat(data));
    });
  }

  async updateResource(
    id: string,
    resource: UpdateResourceDto,
  ): Promise<ResourceType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.update({
        where: { id: id },
        data: resource,
      });
    }
    return this.service.sql.resourceSql
      .update({ where: { id: Number(id) }, data: resource })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async deleteResource(id: string): Promise<ResourceType> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.delete({ where: { id: id } });
    }
    return this.service.sql.resourceSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  private permissionToNoSql(
    permissions: PermissionSQL[],
  ): PermissionGetPayload {
    return permissions.map((data) => {
      return {
        ...data,
        id: data.id.toString(),
        resource: { ...data.resource, id: data.resource.id.toString() },
        scope: { ...data.scope, id: data.scope.id.toString() },
        children: data.children.map((child) => {
          return {
            child: {
              ...child.child,
              id: child.child.id.toString(),
              resource: {
                ...child.child.resource,
                id: child.child.resource.id.toString(),
              },
              scope: {
                ...child.child.scope,
                id: child.child.scope.id.toString(),
              },
            },
          };
        }),
      };
    });
  }

  async createPermission(
    permission: CreatePermissionDto,
  ): Promise<PermissionType> {
    if (!permission.related_permissions) {
      permission.related_permissions = [];
    }

    if (this.service.isNoSql()) {
      return this.service.noSql.permissionNoSql.create({
        data: {
          title: permission.title,
          name: permission.name,
          desc: permission.desc,
          resource_id: permission.resource_id,
          scope_id: permission.scope_id,
          children: {
            create: permission.related_permissions.map((id) => ({
              child_id: id,
            })),
          },
        },
      });
    }
    return this.service.sql.permissionSql
      .create({
        data: {
          title: permission.title,
          name: permission.name,
          desc: permission.desc,
          resource_id: Number(permission.resource_id),
          scope_id: Number(permission.scope_id),
          children: {
            create: permission.related_permissions.map((id) => ({
              child_id: Number(id),
            })),
          },
        },
      })
      .then((res) => {
        return {
          ...res,
          id: res.id.toString(),
          resource_id: res.resource_id.toString(),
          scope_id: res.scope_id.toString(),
        };
      });
  }

  async getPermissions(): Promise<PermissionList> {
    let permissions: PermissionGetPayload = [];

    if (this.service.isNoSql()) {
      permissions = await this.service.noSql.permissionNoSql.findMany({
        select: {
          id: true,
          title: true,
          name: true,
          desc: true,
          scope: true,
          resource: true,
          children: {
            select: {
              child: {
                select: {
                  id: true,
                  title: true,
                  name: true,
                  desc: true,
                  resource: true,
                  scope: true,
                },
              },
            },
          },
        },
      });
    } else {
      permissions = await this.service.sql.permissionSql
        .findMany({
          select: {
            id: true,
            title: true,
            name: true,
            desc: true,
            scope: true,
            resource: true,
            children: {
              select: {
                child: {
                  select: {
                    id: true,
                    title: true,
                    name: true,
                    desc: true,
                    resource: true,
                    scope: true,
                  },
                },
              },
            },
          },
        })
        .then((res) => {
          return this.permissionToNoSql(res);
        });
    }

    return permissions.map((data) => {
      return {
        ...data,
        children: data.children.map((child) => child.child),
      }; // Flattening the children structure
    });
  }

  async updatePermission(
    id: string,
    permission: UpdatePermissionDto,
  ): Promise<PermissionType> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      return this.service.noSql.permissionNoSql.update({
        where: { id: id },
        data: permission,
      });
    }

    return this.service.sql.permissionSql
      .update({
        where: { id: Number(id) },
        data: {
          ...permission,
          resource_id: Number(permission.resource_id),
          scope_id: Number(permission.scope_id),
        },
      })
      .then((res) => {
        return {
          ...res,
          id: res.id.toString(),
          resource_id: res.resource_id.toString(),
          scope_id: res.scope_id.toString(),
        };
      });
  }

  async deletePermission(id: string): Promise<PermissionType> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      return this.service.noSql.permissionNoSql.delete({ where: { id: id } });
    }

    return this.service.sql.permissionSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return {
          ...res,
          id: res.id.toString(),
          resource_id: res.resource_id.toString(),
          scope_id: res.scope_id.toString(),
        };
      });
  }

  async addRelatedPermission(
    relatedPermission: RelatedPermissionDto,
  ): Promise<void> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      await this.service.noSql.relatedPermissionNoSql.create({
        data: {
          parent_id: relatedPermission.parent_id,
          child_id: relatedPermission.child_id,
        },
      });
      return;
    }

    await this.service.sql.relatedPermissionSql.create({
      data: {
        parent_id: Number(relatedPermission.parent_id),
        child_id: Number(relatedPermission.child_id),
      },
    });
  }

  async deleteRelatedPermission(
    relatedPermission: RelatedPermissionDto,
  ): Promise<void> {
    // Remove old session
    await this.deleteAllSession();

    if (this.service.isNoSql()) {
      const related_permission =
        await this.service.noSql.relatedPermissionNoSql.findFirst({
          where: {
            parent_id: relatedPermission.parent_id,
            child_id: relatedPermission.child_id,
          },
        });
      if (related_permission) {
        await this.service.noSql.relatedPermissionNoSql.delete({
          where: { id: related_permission.id },
        });
      }
      return;
    }

    await this.service.sql.relatedPermissionSql.delete({
      where: {
        related_permission_id: {
          parent_id: Number(relatedPermission.parent_id),
          child_id: Number(relatedPermission.child_id),
        },
      },
    });
  }

  private roleToNoSql(roles: RoleSQL[]): {
    id: string;
    name: string;
    desc: string | null;
    uuid: string;
    created_at: Date;
    updated_at: Date;
    permission_roles: any;
  }[] {
    return roles.map((data) => {
      return {
        ...data,
        id: data.id.toString(),
        permission_roles: data.permission_roles.map((permission) => {
          return {
            permission: {
              ...permission.permission,
              id: permission.permission.id.toString(),
              resource: {
                ...permission.permission.resource,
                id: permission.permission.resource.id.toString(),
              },
              scope: {
                ...permission.permission.scope,
                id: permission.permission.scope.id.toString(),
              },
            },
          };
        }),
      };
    });
  }

  private async prepareRolePermissions(permissions: string[]) {
    const allPermissions: string[] = [];
    const parentPermissions = await this.getPermissions().then((res) => {
      return res.filter((permission) => permissions.includes(permission.id));
    });
    parentPermissions.forEach((permission) => {
      allPermissions.push(permission.id);
      permission.children.forEach((child) => {
        allPermissions.push(child.id);
      });
    });
    // Make Unique values (remove duplicates)
    const setAllPermissions = new Set(allPermissions);
    return Array.from(setAllPermissions);
  }

  async createRole(role: CreateRoleDto): Promise<RoleType> {
    if (!role.uuid) {
      role.uuid = "default";
    }
    if (!role.permissions) {
      role.permissions = [];
    }

    role.permissions = await this.prepareRolePermissions(role.permissions);

    if (this.service.isNoSql()) {
      return this.service.noSql.roleNoSql.create({
        data: {
          name: role.name,
          desc: role.desc,
          uuid: role.uuid,
          permission_roles: {
            create: role.permissions.map((id) => ({
              permission_id: id,
            })),
          },
        },
      });
    }

    return this.service.sql.roleSql
      .create({
        data: {
          name: role.name,
          desc: role.desc,
          uuid: role.uuid,
          permission_roles: {
            create: role.permissions.map((id) => ({
              permission_id: Number(id),
            })),
          },
        },
      })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async getRoles(uuid?: string): Promise<RoleList[]> {
    let roles: RoleGetPayload[] = [];
    if (this.service.isNoSql()) {
      roles = await this.service.noSql.roleNoSql.findMany({
        where: { uuid: uuid },
        include: {
          permission_roles: {
            select: {
              permission: {
                select: {
                  id: true,
                  title: true,
                  name: true,
                  desc: true,
                  resource: true,
                  scope: true,
                },
              },
            },
          },
        },
      });
    } else {
      roles = await this.service.sql.roleSql
        .findMany({
          include: {
            permission_roles: {
              select: {
                permission: {
                  select: {
                    id: true,
                    title: true,
                    name: true,
                    desc: true,
                    resource: true,
                    scope: true,
                  },
                },
              },
            },
          },
        })
        .then((res) => {
          return this.roleToNoSql(res);
        });
    }

    return roles.map((data) => {
      return {
        id: data.id,
        name: data.name,
        desc: data.desc,
        uuid: data.uuid,
        permissions: data.permission_roles.map(
          (permission) => permission.permission,
        ),
      }; // Flattening the children structure
    });
  }

  async getRoleById(id?: string, uuid?: string): Promise<RoleListWithUser> {
    let data:
      | (RoleGetPayload & {
          users: Array<{ user: { id: string; username: string } }>;
        })
      | null = null;

    if (!id && !uuid) {
      throw new BadRequestException("Id or uuid is required");
    }

    if (this.service.isNoSql()) {
      data = await this.service.noSql.roleNoSql.findUnique({
        where: { id: id, uuid: uuid },
        include: {
          permission_roles: {
            select: {
              permission: {
                select: {
                  id: true,
                  title: true,
                  name: true,
                  desc: true,
                  resource: true,
                  scope: true,
                },
              },
            },
          },
          users: { select: { user: { select: { id: true, username: true } } } },
        },
      });
    } else {
      data = await this.service.sql.roleSql
        .findUnique({
          where: { id: Number(id), uuid: uuid },
          include: {
            permission_roles: {
              select: {
                permission: {
                  select: {
                    id: true,
                    title: true,
                    name: true,
                    desc: true,
                    resource: true,
                    scope: true,
                  },
                },
              },
            },
            users: {
              select: { user: { select: { id: true, username: true } } },
            },
          },
        })
        .then((res) => {
          if (res) {
            return {
              ...this.roleToNoSql([res])[0],
              users: res.users.map((user) => {
                return {
                  user: {
                    id: user.user.id.toString(),
                    username: user.user.username,
                  },
                };
              }),
            };
          }
          return null;
        });
    }

    if (data === null) {
      throw new NotFoundException("Role not found");
    }

    return {
      id: data.id,
      name: data.name,
      desc: data.desc,
      uuid: data.uuid,
      permissions: data.permission_roles.map(
        (permission) => permission.permission,
      ),
      users: data.users.map((user) => user.user),
    };
  }

  async updateRole(id: string, role: UpdateRoleDto): Promise<RoleType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.roleNoSql.update({
        where: { id: id },
        data: role,
      });
    }

    return this.service.sql.roleSql
      .update({
        where: { id: Number(id) },
        data: role,
      })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async deleteRole(id: string): Promise<RoleType> {
    // Remove old session
    await this.deleteSessionsByRole(id);

    if (this.service.isNoSql()) {
      return this.service.noSql.roleNoSql.delete({ where: { id: id } });
    }

    return this.service.sql.roleSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async addPermissionToRole(permissionRole: PermissionRoleDto): Promise<void> {
    const permissions = await this.prepareRolePermissions([
      permissionRole.permission_id,
    ]);
    const existPermissions = await this.getRoleById(
      permissionRole.role_id,
    ).then((res) => {
      return res.permissions.map((permission) => permission.id);
    });
    const allPermissions: string[] = [];
    permissions.forEach((permission) => {
      allPermissions.push(permission);
    });
    existPermissions.forEach((permission) => {
      allPermissions.push(permission);
    });
    const setAllPermissions = [...new Set(allPermissions)];
    const newPermissions = setAllPermissions.filter(
      (permission) => !existPermissions.includes(permission),
    );

    // Remove old session
    await this.deleteSessionsByRole(permissionRole.role_id);

    if (this.service.isNoSql()) {
      await Promise.all(
        newPermissions.map((permission) => {
          return this.service.noSql.permissionRoleNoSql.create({
            data: {
              role_id: permissionRole.role_id,
              permission_id: permission,
            },
          });
        }),
      );
      return;
    }

    await Promise.all(
      newPermissions.map((permission) => {
        return this.service.sql.permissionRoleSql.create({
          data: {
            role_id: Number(permissionRole.role_id),
            permission_id: Number(permission),
          },
        });
      }),
    );
  }

  /**
   * @param {PermissionRoleDto} permissionRole - `permission_id` must be the parent permission id or the child permission id
   *
   * **Important Note:** The related child permission of this permission may also be linked to other remaining permissions in the role, ensure that you properly verify dependencies before removal.
   *
   * To handle this correctly, use the provided methods in your project to locate and remove each permission individually.
   *
   */
  async deletePermissionFromRole(
    permissionRole: PermissionRoleDto,
  ): Promise<void> {
    // Remove old session
    await this.deleteSessionsByRole(permissionRole.role_id);

    if (this.service.isNoSql()) {
      const role = await this.service.noSql.permissionRoleNoSql.findFirst({
        where: {
          role_id: permissionRole.role_id,
          permission_id: permissionRole.permission_id,
        },
      });
      if (role) {
        await this.service.noSql.permissionRoleNoSql.delete({
          where: { id: role.id },
        });
      }

      return;
    }

    await this.service.sql.permissionRoleSql.delete({
      where: {
        permission_role_id: {
          role_id: Number(permissionRole.role_id),
          permission_id: Number(permissionRole.permission_id),
        },
      },
    });
  }

  async createUser(user: CreateUserDto): Promise<UserType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.userNoSql.create({
        data: {
          username: user.username,
        },
      });
    }

    return this.service.sql.userSql
      .create({
        data: {
          username: user.username,
        },
      })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async isExistUser(username: string) {
    let count: number;
    if (this.service.isNoSql()) {
      count = await this.service.noSql.userNoSql.count({
        where: { username: username },
      });
    } else {
      count = await this.service.sql.userSql.count({
        where: { username: username },
      });
    }

    return count > 0;
  }

  async getUsers(): Promise<UserList[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.userNoSql.findMany({
        include: { roles: { select: { role: true, uuid: true } } },
      });
    }

    return this.service.sql.userSql
      .findMany({
        include: { roles: { select: { role: true, uuid: true } } },
      })
      .then((res) => {
        return res.map((data) => {
          return {
            id: data.id.toString(),
            username: data.username,
            roles: data.roles.map((role) => ({
              role: { ...role.role, id: role.role.id.toString() },
              uuid: role.uuid,
            })),
            created_at: data.created_at,
            updated_at: data.updated_at,
          };
        });
      });
  }

  async getUserRole(id: string, uuid?: string): Promise<UserList | null> {
    if (this.service.isNoSql()) {
      return this.service.noSql.userNoSql.findFirst({
        where: { id: id },
        include: {
          roles: {
            where: { uuid: uuid },
            select: { role: true, uuid: true },
          },
        },
      });
    }

    return this.service.sql.userSql
      .findFirst({
        where: { id: Number(id) },
        include: {
          roles: { where: { uuid: uuid }, select: { role: true, uuid: true } },
        },
      })
      .then((res) => {
        if (res) {
          return {
            id: res.id.toString(),
            username: res.username,
            roles: res.roles.map((role) => ({
              role: { ...role.role, id: role.role.id.toString() },
              uuid: role.uuid,
            })),
            created_at: res.created_at,
            updated_at: res.updated_at,
          };
        } else {
          return null;
        }
      });
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<UserType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.userNoSql.update({
        where: { id: id },
        data: user,
      });
    }

    return this.service.sql.userSql
      .update({
        where: { id: Number(id) },
        data: user,
      })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async deleteUser(id: string): Promise<UserType> {
    if (this.service.isNoSql()) {
      return this.service.noSql.userNoSql.delete({
        where: { id: id },
      });
    }

    return this.service.sql.userSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async addRoleToUser(userRole: UserRoleDto): Promise<void> {
    if (this.service.isNoSql()) {
      const existUserRole = await this.service.noSql.userRoleNoSql.findFirst({
        where: {
          user_id: userRole.user_id,
          uuid: userRole.uuid,
        },
      });
      if (existUserRole) {
        throw new BadRequestException(
          "User doesn't allow duplicate role for each unique uuid. Add role with different uuid.",
        );
      }
      // Remove old session
      await this.deleteSessionsByUser(userRole.user_id);

      await this.service.noSql.userRoleNoSql.create({
        data: userRole,
      });
      return;
    }

    const existUserRole = await this.service.sql.userRoleSql.findFirst({
      where: {
        user_id: Number(userRole.user_id),
        uuid: userRole.uuid,
      },
    });
    if (existUserRole) {
      throw new BadRequestException(
        "User doesn't allow duplicate role for each unique uuid. Add role with different uuid.",
      );
    }
    // Remove old session
    await this.deleteSessionsByUser(userRole.user_id);

    await this.service.sql.userRoleSql.create({
      data: {
        user_id: Number(userRole.user_id),
        role_id: Number(userRole.role_id),
        uuid: userRole.uuid,
      },
    });
  }

  async deleteRoleFromUser(userRole: UserRoleDto): Promise<void> {
    // Remove old session
    await this.deleteSessionsByUser(userRole.user_id);

    if (this.service.isNoSql()) {
      const existUserRole = await this.service.noSql.userRoleNoSql.findFirst({
        where: {
          role_id: userRole.role_id,
          user_id: userRole.user_id,
          uuid: userRole.uuid,
        },
      });
      if (existUserRole) {
        await Promise.allSettled([
          // Remove old session
          await this.deleteSessionsByUser(userRole.user_id),

          await this.service.noSql.userRoleNoSql.delete({
            where: {
              id: existUserRole.id,
            },
          }),
        ]);
        return;
      } else {
        throw new NotFoundException("User role not found");
      }
    }

    await Promise.allSettled([
      // Remove old session
      await this.deleteSessionsByUser(userRole.user_id),

      await this.service.sql.userRoleSql.delete({
        where: {
          role_user_id: {
            user_id: Number(userRole.user_id),
            role_id: Number(userRole.role_id),
            uuid: userRole.uuid,
          },
        },
      }),
    ]);
  }

  private tokenGenerator(sessionId: string, userId: string) {
    const tokenExpiredIn = `${this.service.configMaps.tokenExpiredTime}${this.service.configMaps.timeUnit}`;
    const refreshTokenExpiredIn = `${this.service.configMaps.tokenExpiredTime}${this.service.configMaps.timeUnit}`;

    const token = generateToken(
      this.service.configMaps.secret,
      { sid: sessionId, uid: userId },
      tokenExpiredIn as StringValue,
    );
    const refreshToken = generateToken(
      this.service.configMaps.secret,
      { sid: sessionId, uid: userId },
      refreshTokenExpiredIn as StringValue,
    );

    return { token, refreshToken };
  }

  async requestToken(session: CreateSessionDto) {
    let sessionId: string;
    if (this.service.isNoSql()) {
      sessionId = (
        await this.service.noSql.userSessionNoSql.create({
          data: session,
        })
      ).id;
    }

    sessionId = (
      await this.service.sql.userSessionSql.create({
        data: { user_id: Number(session.user_id) },
      })
    ).id.toString();

    const { token, refreshToken } = this.tokenGenerator(
      sessionId,
      session.user_id,
    );

    if (this.service.isNoSql()) {
      await this.service.noSql.userSessionNoSql.update({
        where: { id: sessionId },
        data: {
          token: token,
          refresh_token: refreshToken,
        },
      });
    } else {
      await this.service.sql.userSessionSql.update({
        where: { id: Number(sessionId) },
        data: {
          token: token,
          refresh_token: refreshToken,
        },
      });
    }

    return { token, refreshToken };
  }

  async refreshToken(session: UpdateSessionDto) {
    const verificationToken = verifyToken({
      jwtSecretKey: this.service.configMaps.secret,
      token: session.refresh_token,
      expiredMessage: this.service.configMaps.tokenExpiredMessage,
      invalidMessage: this.service.configMaps.tokenInvalidMessage,
    }) as { sid: string; uid: string };

    const { token, refreshToken } = this.tokenGenerator(
      verificationToken.sid,
      verificationToken.uid,
    );

    // Remove old session
    await this.deleteSessionsByUser(verificationToken.uid);

    if (this.service.isNoSql()) {
      await this.service.noSql.userSessionNoSql.update({
        where: { id: verificationToken.sid },
        data: {
          token: token,
          refresh_token: refreshToken,
        },
      });
    } else {
      await this.service.sql.userSessionSql.update({
        where: { id: Number(verificationToken.sid) },
        data: {
          token: token,
          refresh_token: refreshToken,
        },
      });
    }

    return { token, refreshToken };
  }

  async checkSession(sessionId: string) {
    let count: number;
    if (this.service.isNoSql()) {
      count = await this.service.noSql.userSessionNoSql.count({
        where: { id: sessionId },
      });
    } else {
      count = await this.service.sql.userSessionSql.count({
        where: { id: Number(sessionId) },
      });
    }

    return count > 0;
  }

  async deleteSession(sessionId: string) {
    if (this.service.isNoSql()) {
      return this.service.noSql.userSessionNoSql.delete({
        where: { id: sessionId },
      });
    }
    return this.service.sql.userSessionSql.delete({
      where: { id: Number(sessionId) },
    });
  }

  async deleteSessionsByUser(userId: string) {
    if (this.service.isNoSql()) {
      return this.service.noSql.userSessionNoSql.deleteMany({
        where: { user_id: userId },
      });
    }
    return this.service.sql.userSessionSql.deleteMany({
      where: { id: Number(userId) },
    });
  }

  async deleteSessionsByRole(roleId: string) {
    const users = (await this.getRoleById(roleId)).users;

    await Promise.allSettled(
      users.map((user) => this.deleteSessionsByUser(user.id)),
    );
  }

  async deleteAllSession() {
    if (this.service.isNoSql()) {
      return this.service.noSql.userSessionNoSql.deleteMany();
    }
    return this.service.sql.userSessionSql.deleteMany();
  }
}
