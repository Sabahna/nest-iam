import {
  ApiProperty,
  ApiPropertyOptional,
  OmitType,
  PartialType,
} from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateUserDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "jackwill" })
  username: string;

  @IsString()
  @ApiProperty({
    required: true,
    type: String,
    example: "1",
  })
  role: string;

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

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ["role"]),
) {}

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
  })
  uuid: string = "default";
}

const user = Prisma.validator<Prisma.UserNoSqlDefaultArgs>()({});

export type User = Prisma.UserNoSqlGetPayload<typeof user>;

const userList = Prisma.validator<Prisma.UserNoSqlDefaultArgs>()({
  include: { roles: { select: { role: true, uuid: true } } },
});

export type UserList = Prisma.UserNoSqlGetPayload<typeof userList>;
