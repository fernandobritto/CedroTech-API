import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateServiceOrderDto {
  @IsString()
  @IsNotEmpty()
  order: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  clientCategoryId: string

  @IsString()
  @IsNotEmpty()
  clientOrderId: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsOptional()
  @IsBoolean()
  flagCedro: boolean
}
