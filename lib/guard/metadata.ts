import { SetMetadata } from "@nestjs/common";
import { Request } from "express";

export type ScopeOptions = {
  name: string;
  uuid?: (req: Request) => string;
  allowAnyRoles?: boolean;
};

export const Public = (state: boolean) => SetMetadata("public", state);

export const Scope = (options: ScopeOptions) => SetMetadata("scope", options);

export const Resource = (resource: string) => SetMetadata("resource", resource);
