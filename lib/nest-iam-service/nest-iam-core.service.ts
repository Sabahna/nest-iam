import { Global, Inject, Injectable } from "@nestjs/common";
import {
  CreatePermissionDto,
  Permission,
  PermissionList,
  RelatedPermissionDto,
  UpdatePermissionDto,
} from "../type/permission";
import {
  CreateResourceDto,
  Resource,
  UpdateResourceDto,
} from "../type/resource";
import {
  CreateRoleDto,
  PermissionRoleDto,
  Role,
  RoleList,
  UpdateRoleDto,
} from "../type/role";
import { CreateScopeDto, Scope, UpdateScopeDto } from "../type/scope";
import { convertNosqlFormat } from "../utils/convert-to-nosql-format";
import { NestIamDbService } from "./nest-iam.db.service";

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

type RoleGetPayload = Array<{
  id: string;
  name: string;
  desc: string | null;
  uuid: string;
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
}>;

@Global()
@Injectable()
export class NestIamCoreService {
  constructor(@Inject() private service: NestIamDbService) {}

  async createScope(scope: CreateScopeDto): Promise<Scope> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.create({ data: scope });
    }

    return this.service.sql.scopeSql.create({ data: scope }).then((res) => {
      return convertNosqlFormat(res);
    });
  }

  async getScopes(): Promise<Scope[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.findMany();
    }
    return this.service.sql.scopeSql.findMany().then((res) => {
      return res.map(convertNosqlFormat);
    });
  }

  async updateScope(id: string, scope: UpdateScopeDto): Promise<Scope> {
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

  async deleteScope(id: string): Promise<Scope> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.delete({ where: { id: id } });
    }
    return this.service.sql.scopeSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async createResource(resource: CreateResourceDto): Promise<Resource> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.create({ data: resource });
    }

    return this.service.sql.resourceSql
      .create({ data: resource })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async getResources(): Promise<Resource[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.findMany();
    }
    return this.service.sql.resourceSql.findMany().then((res) => {
      return res.map(convertNosqlFormat);
    });
  }

  async updateResource(
    id: string,
    resource: UpdateResourceDto,
  ): Promise<Resource> {
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

  async deleteResource(id: string): Promise<Resource> {
    if (this.service.isNoSql()) {
      return this.service.noSql.resourceNoSql.delete({ where: { id: id } });
    }
    return this.service.sql.resourceSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  private async permissionToNoSql(
    permissions: any,
  ): Promise<PermissionGetPayload> {
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

  async createPermission(permission: CreatePermissionDto): Promise<Permission> {
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
        return convertNosqlFormat(res);
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
            select: { child: { include: { resource: true, scope: true } } },
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
              select: { child: { include: { resource: true, scope: true } } },
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
  ): Promise<Permission> {
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
        return convertNosqlFormat(res);
      });
  }

  async deletePermission(id: string): Promise<Permission> {
    if (this.service.isNoSql()) {
      return this.service.noSql.permissionNoSql.delete({ where: { id: id } });
    }

    return this.service.sql.permissionSql
      .delete({ where: { id: Number(id) } })
      .then((res) => {
        return convertNosqlFormat(res);
      });
  }

  async addRelatedPermission(
    relatedPermission: RelatedPermissionDto,
  ): Promise<void> {
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

  private async roleToNoSql(roles: any): Promise<RoleGetPayload> {
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

  async createRole(role: CreateRoleDto): Promise<Role> {
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

  async getRoles(): Promise<RoleList> {
    let roles: RoleGetPayload = [];
    if (this.service.isNoSql()) {
      roles = await this.service.noSql.roleNoSql.findMany({
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

  async updateRole(id: string, role: UpdateRoleDto): Promise<Role> {
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

  async deleteRole(id: string): Promise<Role> {
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
    if (this.service.isNoSql()) {
      await this.service.noSql.permissionRoleNoSql.create({
        data: {
          role_id: permissionRole.role_id,
          permission_id: permissionRole.permission_id,
        },
      });
      return;
    }

    await this.service.sql.permissionRoleSql.create({
      data: {
        role_id: Number(permissionRole.role_id),
        permission_id: Number(permissionRole.permission_id),
      },
    });
  }

  async deletePermissionFromRole(
    permissionRole: PermissionRoleDto,
  ): Promise<void> {
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
}
