import { $Enums, Address as AddressPrisma } from '@prisma/client';

export class Address implements Omit<AddressPrisma, 'id' | 'createdAt' | 'updatedAt'> {
  locationId: string;
  id?: string;
  profileId: string;
  type: $Enums.AddressType;
  createdAt?: Date;
  updatedAt?: Date;
}
