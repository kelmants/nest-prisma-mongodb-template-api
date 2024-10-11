import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { Profile } from './entities/profile.entities';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
@ApiTags('Profile')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get('/me')
  me(@Req() req: Request, @Res() res: Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const user: User = req.user;
    this.profilesService
      .me(user.id as string)
      .then((result: Profile) => res.status(HttpStatus.OK).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }

  @Post('/me')
  updateMe(@Body() payload: UpdateProfileDto, @Req() req: Request, @Res() res: Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const user: User = req.user;
    this.profilesService
      .updateMe(payload, user.id as string)
      .then((result: Profile) => res.status(HttpStatus.OK).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }

  @Patch('/:id')
  update(@Body() payload: CreateProfileDto, @Param('id') id: string, @Req() res: Response) {
    this.profilesService
      .update(payload, id)
      .then((result) => res.status(HttpStatus.CREATED).json(result))
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(reason));
  }
}
