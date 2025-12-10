import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ type: 'string' })
  name: string;
}

export class Todo {}
