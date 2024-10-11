import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AuthService } from './auth.service';
import { PrismaService } from '../database/prisma.service';
import { UsersService } from '../users/users.service';
import { EventsService } from '../events/events.service';

describe('AuthService', () => {
  let service: AuthService;
  let database: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, UsersService, PrismaService, EventsService, EventEmitter2],
    }).compile();

    service = module.get<AuthService>(AuthService);
    database = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined database service', () => {
    expect(database).toBeDefined();
  });
});
