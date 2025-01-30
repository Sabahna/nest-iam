export class AppModuleInterface {
  provider:
    | "postgresql"
    | "mysql"
    | "sqlite"
    | "sqlserver"
    | "mongodb"
    | "cockroachdb";
  url: string;
  tokenExpiredTime: number;
  refreshTokenExpiredTime: number;
  timeUnit: "s" | "m" | "h" | "d";
  secret: string;
  tokenExpiredMessage?: string;
  tokenInvalidMessage?: string;
}
