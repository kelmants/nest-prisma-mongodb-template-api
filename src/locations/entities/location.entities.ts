import { Location as LocationPrisma } from '@prisma/client';

export class Location implements Omit<LocationPrisma, 'id' | 'createdAt' | 'updatedAt'> {
  lat: number;
  lng: number;
  display_name: string;
  place_id: string;
  city: string;
  country: string;
  code: string;
  addressId: string;
  id?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
