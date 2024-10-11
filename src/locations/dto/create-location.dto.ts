import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Location } from '../entities/location.entities';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto implements Location {
  @IsNumber()
  @ApiProperty()
  lat: number;

  @IsNumber()
  @ApiProperty()
  lng: number;

  @IsString()
  @ApiProperty()
  display_name: string;

  @IsString()
  @ApiProperty()
  place_id: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  country: string;

  @IsString()
  @ApiProperty()
  code: string;

  @IsString()
  @ApiProperty()
  addressId: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  id?: string;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty()
  updatedAt?: Date;
}
