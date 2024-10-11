import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../database/prisma.service';
import { LocationsService } from '../locations/locations.service';

@Injectable()
export class AddressesService {
  constructor(
    private prismaService: PrismaService,
    private locationService: LocationsService,
  ) {}

  async findById(id: string) {
    const result = await this.prismaService.address.findUnique({ where: { id }, include: { location: true } });
    return result;
  }

  async me(id: string) {
    const result = await this.prismaService.address.findFirst({ where: { profile: { user: { id } } }, include: { location: true } });
    return result;
  }

  async create(payload: CreateAddressDto) {
    const addressResult = await this.prismaService.address.create({
      data: {
        profileId: payload.profileId,
        type: payload.type,
      },
    });

    const locationResult = await this.locationService.create({
      addressId: addressResult.id,
      city: payload.city,
      code: payload.code,
      country: payload.country,
      display_name: payload.display_name,
      lat: Number(payload.latitude),
      lng: Number(payload.longitude),
      place_id: payload.place_id,
    });

    const result = await this.prismaService.address.update({ where: { id: addressResult.id }, data: { location: { connect: { id: locationResult.id } } } });

    return result;
  }

  async update(addressId: string, payload: UpdateAddressDto) {
    const addressResult = await this.prismaService.address.update({ where: { id: addressId }, data: { type: payload.type } });

    await this.prismaService.location.update({
      where: { id: addressResult.id },
      data: {
        display_name: payload.display_name,
        lat: Number(payload.latitude),
        lng: Number(payload.longitude),
        city: payload.city,
        code: payload.code,
        country: payload.country,
      },
    });

    return { message: `address ${addressResult.id} has been updated successfully` };
  }
}
