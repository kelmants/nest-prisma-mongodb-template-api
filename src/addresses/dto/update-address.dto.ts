import { IsEnum, IsNumberString, IsString } from 'class-validator';
import { $Enums } from '@prisma/client';

export class UpdateAddressDto {
  @IsEnum($Enums.AddressType)
  type: $Enums.AddressType;

  @IsString()
  display_name: string;

  @IsNumberString()
  latitude: string;

  @IsNumberString()
  longitude: string;

  @IsString()
  city: string;

  @IsString()
  code: string;

  @IsString()
  place_id: string;

  @IsString()
  country: string;
}
