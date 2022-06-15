import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'id',
    type: String,
  })
  readonly id: string;

  @ApiPropertyOptional({
    description: 'Points',
    type: Number,
  })
  score?: number;

  @ApiPropertyOptional({
    description: 'Some field',
    type: String,
  })
  readonly somefield?: string;

  @ApiPropertyOptional({
    description: 'Some field',
    type: Number,
  })
  readonly coins_left?: number;
}
