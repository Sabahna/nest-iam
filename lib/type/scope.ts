import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateScopeDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "invite" })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    example: "Scope for invitation",
  })
  desc?: string;
}

export class UpdateScopeDto extends PartialType(CreateScopeDto) {}

export type ScopeType =
  Prisma.ScopeNoSqlGetPayload<Prisma.ScopeNoSqlDefaultArgs>;
