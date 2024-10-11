import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(payload: CreateUserDto) {
    const result = await this.prismaService.user.create({
      data: {
        identifier: payload.identifier,
        password: payload.password,
        profile: { create: { email: payload.identifier } },
      },
    });
    return result;
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id, deleted: false },
    });
  }

  async findOneByIdentifier(identifier: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { identifier: identifier, deleted: false },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: {
        identifier: updateUserDto.identifier,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.user.update({
      where: { id },
      data: { deleted: true },
    });
  }
}
