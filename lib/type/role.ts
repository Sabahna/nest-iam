import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateRoleDto {
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
      "Identity for multiple role of user, eg: organization id or company id etc",
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

const role = Prisma.validator<Prisma.RoleNoSqlDefaultArgs>()({});

export type Role = Prisma.RoleNoSqlGetPayload<typeof role>;

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
