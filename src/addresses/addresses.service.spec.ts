import { Test, TestingModule } from '@nestjs/testing';
import { AddressesService } from './addresses.service';
import { PrismaService } from '../database/prisma.service';
import { LocationsService } from '../locations/locations.service';

describe('AddressesService', () => {
  let service: AddressesService;
  let database: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressesService, PrismaService, LocationsService],
    }).compile();

    service = module.get<AddressesService>(AddressesService);
    database = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined database service', () => {
    expect(database).toBeDefined();
  });
});
