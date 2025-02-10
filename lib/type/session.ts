import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Prisma } from "../../prisma/generated/client2";

export class CreateSessionDto {
  @IsString()
  @ApiProperty({
    required: true,
    type: String,
    example: "1",
  })
  user_id: string;
}

export class UpdateSessionDto {
  @IsString()
  @ApiPropertyOptional({
    type: String,
    example: "ewadfzzmxnswodnxnaowor",
  })
  refresh_token: string;
}

export type Scope = Prisma.ScopeNoSqlGetPayload<Prisma.ScopeNoSqlDefaultArgs>;
