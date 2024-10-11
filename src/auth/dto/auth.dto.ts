import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  @ApiProperty()
  password: string;
}

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  @ApiProperty()
  password: string;
}
