import { SetMetadata } from "@nestjs/common";

export const Public = (state: boolean) => SetMetadata("public", state);
