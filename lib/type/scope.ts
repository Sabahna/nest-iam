import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateScopeDto {
  @IsString()
  @ApiProperty({ required: true, type: String, example: "Create" })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, type: String, example: "Scope for creating" })
  desc?: string;
}

const scope = Prisma.validator<Prisma.ScopeNoSqlDefaultArgs>()({});

export type Scope = Prisma.ScopeNoSqlGetPayload<typeof scope>;
