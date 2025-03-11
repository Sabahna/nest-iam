import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateUserDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "jackwill" })
  username: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "default",
    default: "default",
    description:
      "Identity for role of user for like organization or company etc",
  })
  uuid: string = "default";
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UserRoleDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "1" })
  role_id: string;

  @IsString()
  @ApiProperty({
    required: true,
    type: String,
    example: "1",
  })
  user_id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "default",
    default: "default",
  })
  uuid: string = "default";
}

export class DeleteUserRoleDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String, example: "1" })
  role_id?: string;

  @IsString()
  @ApiProperty({
    required: true,
    type: String,
    example: "1",
  })
  user_id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "default",
  })
  uuid?: string;
}

export type UserType = Prisma.UserNoSqlGetPayload<Prisma.UserNoSqlDefaultArgs>;

export type UserList = Prisma.UserNoSqlGetPayload<{
  include: { roles: { select: { role: true; uuid: true } } };
}>;
