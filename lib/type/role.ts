import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Prisma as PrismaSql } from "../../prisma/generated/client1";
import { Prisma } from "../../prisma/generated/client2";

export class CreateRoleDto {
  constructor() {
    this.uuid = "default";
    this.permissions = [];
  }

  @IsString()
  @ApiProperty({ required: true, type: String, example: "Admin" })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "Admin role for organization",
  })
  desc?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "default",
    default: "default",
    description:
      "Identity for multiple role of like each organization or company etc",
  })
  uuid: string = "default";

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: [String],
    isArray: true,
    example: ["1", "2"],
    description: "List of parent permission id",
  })
  permissions: string[];
}

export class UpdateRoleDto extends PartialType(
  OmitType(CreateRoleDto, ["permissions"]),
) {}

export class PermissionRoleDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  role_id: string;

  @IsString()
  @ApiProperty({
    required: true,
    type: String,
    example: "1",
  })
  permission_id: string;
}

export type RoleType = Prisma.RoleNoSqlGetPayload<Prisma.RoleNoSqlDefaultArgs>;

export type RoleList = {
  id: string;
  name: string;
  desc: string | null;
  uuid: string;
  permissions: Array<{
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
  }>;
};

export type RoleListWithUser = RoleList & {
  users: Array<{ id: string; username: string }>;
};

export type RoleSQL = PrismaSql.RoleSqlGetPayload<{
  include: {
    permission_roles: {
      select: {
        permission: {
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
