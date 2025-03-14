import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateResourceDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "member" })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "Resource for organization member",
  })
  desc?: string;
}

export class UpdateResourceDto extends PartialType(CreateResourceDto) {}

export type ResourceType =
  Prisma.ResourceNoSqlGetPayload<Prisma.ResourceNoSqlDefaultArgs>;
