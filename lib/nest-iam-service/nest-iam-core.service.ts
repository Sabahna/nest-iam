import { Global, Inject, Injectable } from "@nestjs/common";
import {
  CreatePermissionDto,
  Permission,
  PermissionList,
  UpdatePermissionDto,
} from "../type/permission";
import {
  CreateResourceDto,
  Resource,
  UpdateResourceDto,
} from "../type/resource";
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
    parent_id: string,
    child_id: string,
  ): Promise<void> {
    if (this.service.isNoSql()) {
      await this.service.noSql.relatedPermissionNoSql.create({
        data: { parent_id, child_id },
      });
      return;
    }

    await this.service.sql.relatedPermissionSql.create({
      data: { parent_id: Number(parent_id), child_id: Number(child_id) },
    });
  }

  async deleteRelatedPermission(
    parent_id: string,
    child_id: string,
  ): Promise<void> {
    if (this.service.isNoSql()) {
      const relatedPermission =
        await this.service.noSql.relatedPermissionNoSql.findFirst({
          where: { parent_id, child_id },
        });
      if (relatedPermission) {
        await this.service.noSql.relatedPermissionNoSql.delete({
          where: { id: relatedPermission.id },
        });
      }
    }

    await this.service.sql.relatedPermissionSql.delete({
      where: {
        related_permission_id: {
          parent_id: Number(parent_id),
          child_id: Number(child_id),
        },
      },
    });
  }
}
