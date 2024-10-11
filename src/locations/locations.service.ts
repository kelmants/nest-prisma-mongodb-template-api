import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private prismaService: PrismaService) {}

  async findById(id: string) {
    return this.prismaService.location.findUnique({ where: { id } });
  }

  async create(payload: CreateLocationDto) {
    return this.prismaService.location.create({
      data: payload,
    });
  }

  async update(id: string, payload: UpdateLocationDto) {
    return this.prismaService.location.update({ where: { id }, data: payload });
  }

  async delete(id: string) {
    return this.prismaService.location.delete({ where: { id } });
  }
}
