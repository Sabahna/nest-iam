import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";
import { Prisma as SqlPrisma } from "../../prisma/generated/client1";

export class CreatePermissionDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "Member Invitation",
  })
  title?: string;

  @IsString()
  @ApiProperty({ required: true, type: String, example: "member:invite" })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "Invitation permission for organization member",
  })
  desc?: string;

  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  resource_id: string;

  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  scope_id: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  @ApiProperty({ required: false, type: [String], example: ["1"], default: [] })
  related_permissions: string[] = [];
}

export class UpdatePermissionDto extends PartialType(
  OmitType(CreatePermissionDto, ["related_permissions"] as const),
) {}

export class RelatedPermissionDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  parent_id: string;

  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  child_id: string;
}

export type Permission =
  Prisma.PermissionNoSqlGetPayload<Prisma.PermissionNoSqlDefaultArgs>;

export type PermissionList = Array<{
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
  }[];
}>;

export type PermissionSQL = SqlPrisma.PermissionSqlGetPayload<{
  select: {
    id: true;
    title: true;
    name: true;
    desc: true;
    scope: true;
    resource: true;
    children: {
      select: {
        child: {
          select: {
            id: true;
            title: true;
            name: true;
            desc: true;
            resource: true;
            scope: true;
          };
        };
      };
    };
  };
}>;
