import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { PrismaService } from '../database/prisma.service';

describe('LocationsController', () => {
  let controller: LocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsController],
      providers: [LocationsService, PrismaService],
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
