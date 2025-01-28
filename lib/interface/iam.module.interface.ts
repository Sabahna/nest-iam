export interface AppModuleInterface {
  provider:
    | "postgresql"
    | "mysql"
    | "sqlite"
    | "sqlserver"
    | "mongodb"
    | "cockroachdb";
  url: string;
}
