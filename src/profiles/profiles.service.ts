import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private prismaService: PrismaService) {}

  async me(id: string): Promise<Profile> {
    const result = await this.prismaService.profile.findFirst({
      where: { userId: id },
      include: { address: { include: { location: true } } },
    });

    return result;
  }

  async update(payload: UpdateProfileDto, id: string): Promise<Profile> {
    return this.prismaService.profile.update({
      where: { id },
      data: {
        image: payload.image,
        name: payload.name,
        phone: payload.phone,
      },
    });
  }

  async updateMe(payload: UpdateProfileDto, id: string): Promise<Profile> {
    return this.prismaService.profile.update({
      where: { userId: id },
      data: {
        image: payload.image,
        name: payload.name,
        phone: payload.phone,
      },
    });
  }

  async verifiedPhone(id: string) {
    return this.prismaService.profile.update({ where: { id }, data: { phoneVerified: true } });
  }

  async verifiedEmail(id: string) {
    return this.prismaService.profile.update({ where: { id }, data: { emailVerified: true } });
  }

  async activateProfile(id: string) {
    return this.prismaService.profile.update({ where: { id }, data: { enabled: true } });
  }

  async disabledProfile(id: string) {
    return this.prismaService.profile.update({ where: { id }, data: { enabled: false } });
  }
}
