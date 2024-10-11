import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateAddressDto } from './dto/create-address.dto';

@ApiTags('Address')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Get('/:id')
  findById(@Param('id') id: string, @Req() req: Request, @Res() res: Response) {
    this.addressesService
      .findById(id)
      .then((result) => res.status(HttpStatus.OK).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }

  @Post('/')
  create(@Body() payload: CreateAddressDto, @Res() res: Response) {
    this.addressesService
      .create(payload)
      .then((result) => res.status(HttpStatus.CREATED).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }

  @Patch('/')
  update(@Body() payload: CreateAddressDto, @Res() res: Response) {
    this.addressesService
      .create(payload)
      .then((result) => res.status(HttpStatus.CREATED).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }
}
