import { Global, Inject, Injectable } from "@nestjs/common";
import {
  CreateResourceDto,
  Resource,
  UpdateResourceDto,
} from "../type/resource";
import { CreateScopeDto, Scope, UpdateScopeDto } from "../type/scope";
import { convertNosqlFormat } from "../utils/convert-to-nosql-format";
import { NestIamDbService } from "./nest-iam.db.service";

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
}
