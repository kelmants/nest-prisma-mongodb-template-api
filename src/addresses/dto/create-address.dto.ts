import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { $Enums } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  profileId?: string;

  @IsNumberString()
  @ApiProperty()
  latitude: string;

  @IsNumberString()
  @ApiProperty()
  longitude: string;

  @IsString()
  @ApiProperty()
  display_name: string;

  @IsEnum($Enums.AddressType)
  @ApiProperty({ enum: $Enums.AddressType })
  type: $Enums.AddressType;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  code: string;

  @IsString()
  @ApiProperty()
  place_id: string;

  @IsString()
  @ApiProperty()
  country: string;
}
