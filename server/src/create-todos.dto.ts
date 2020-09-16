import { IsNotEmpty } from 'class-validator';

export class CreateTodosDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  complete: boolean;
}
