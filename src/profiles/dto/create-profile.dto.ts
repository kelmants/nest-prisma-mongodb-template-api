import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entities';

export class CreateProfileDto implements Profile {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  id?: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsBoolean()
  @ApiProperty()
  emailVerified: boolean;

  @IsBoolean()
  @ApiProperty()
  enabled: boolean;

  @IsPhoneNumber()
  @ApiProperty()
  phone: string;

  @IsBoolean()
  @ApiProperty()
  phoneVerified: boolean;

  @IsString()
  @ApiProperty()
  userId: string;

  @IsString()
  @ApiProperty()
  image: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  createdAt?: Date;

  @IsString()
  @IsOptional()
  @ApiProperty()
  updatedAt?: Date;
}
