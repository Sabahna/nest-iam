import { ApiProperty, PartialType } from "@nestjs/swagger";
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
    example: "Recource for organization member",
  })
  desc?: string;
}

export class UpdateResourceDto extends PartialType(CreateResourceDto) {}

export type Resource =
  Prisma.ResourceNoSqlGetPayload<Prisma.ResourceNoSqlDefaultArgs>;
