export class AppModuleInterface {
  provider: ProviderType;
  url: string;
  tokenExpiredTime: number;
  refreshTokenExpiredTime: number;
  timeUnit: "s" | "m" | "h" | "d";
  secret: string;
  tokenExpiredMessage?: string;
  tokenInvalidMessage?: string;
  allowUndefinedUUID?: boolean;
}

export type ProviderType =
  | "postgresql"
  | "mysql"
  | "sqlite"
  | "sqlserver"
  | "mongodb"
  | "cockroachdb";
