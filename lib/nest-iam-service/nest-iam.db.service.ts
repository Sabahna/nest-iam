import { Inject, Injectable } from "@nestjs/common";
import { DefaultArgs } from "@prisma/client/runtime/library";
import {
  Prisma as PrismaSql,
  PrismaClient as PrismaSqlClient,
} from "../../prisma/generated/client1";
import {
  Prisma as PrismaNoSql,
  PrismaClient as PrismaNoSqlClient,
} from "../../prisma/generated/client2";
import { AppModuleInterface } from "../interface";

const globalSqlPrisma = globalThis as unknown as {
  prisma?: PrismaSqlClient;
};
const globalNoSqlPrisma = globalThis as unknown as {
  prisma?: PrismaNoSqlClient;
};

@Injectable()
export class NestIamDbService {
  private appModuleInterface: AppModuleInterface;
  sql: PrismaSqlClient<PrismaSql.PrismaClientOptions, never, DefaultArgs>;
  noSql: PrismaNoSqlClient<PrismaNoSql.PrismaClientOptions, never, DefaultArgs>;

  constructor(@Inject("IAM_OPTIONS") private options: AppModuleInterface) {
    this.appModuleInterface = options;
    this.adapter();
  }

  isNoSql(): boolean {
    return this.appModuleInterface.provider == "mongodb";
  }

  async adapter() {
    console.log("Connecting to db");
    if (this.isNoSql()) {
      if (globalNoSqlPrisma.prisma) {
        this.noSql = globalNoSqlPrisma.prisma;
      } else {
        const nosqlClient = new PrismaNoSqlClient({
          datasourceUrl: this.appModuleInterface.url,
        });
        await nosqlClient.$connect();
        globalNoSqlPrisma.prisma = nosqlClient;
        this.noSql = nosqlClient;
        console.log(`connect nosql`);
      }
    } else {
      if (globalSqlPrisma.prisma) {
        this.sql = globalSqlPrisma.prisma;
      } else {
        const sqlClient = new PrismaSqlClient({
          datasourceUrl: this.appModuleInterface.url,
        });
        await sqlClient.$connect();
        this.sql = sqlClient;
        globalSqlPrisma.prisma = sqlClient;
        this.sql = sqlClient;
        console.log(`connect sql`);
      }
    }
  }
}
