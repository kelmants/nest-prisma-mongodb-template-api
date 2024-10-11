import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { PrismaService } from '../database/prisma.service';

describe('LocationsService', () => {
  let service: LocationsService;
  let database: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationsService, PrismaService],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
    database = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined database service', () => {
    expect(database).toBeDefined();
  });
});
