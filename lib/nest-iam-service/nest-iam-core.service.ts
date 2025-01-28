import { Global, Inject, Injectable } from "@nestjs/common";
import { CreateScopeDto, Scope } from "../type/scope";
import { convertNosqlFormat } from "../utils/convert-to-nosql-format";
import { NestIamDbService } from "./nest-iam.db.service";

@Global()
@Injectable()
export class NestIamCoreService {
  constructor(@Inject() private service: NestIamDbService) {}

  async getScopes(): Promise<Scope[]> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.findMany();
    }
    return this.service.sql.scopeSql.findMany().then((res) => {
      return res.map(convertNosqlFormat);
    });
  }

  async createScope(scope: CreateScopeDto): Promise<Scope | undefined> {
    if (this.service.isNoSql()) {
      return this.service.noSql.scopeNoSql.create({ data: scope });
    }

    return this.service.sql.scopeSql.create({ data: scope }).then((res) => {
      return convertNosqlFormat(res);
    });
  }
}
