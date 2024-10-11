import { Profile as ProfilePrisma } from '@prisma/client';

export class Profile implements Omit<ProfilePrisma, 'id' | 'createdAt' | 'updatedAt'> {
  name: string;
  id?: string;
  email: string;
  emailVerified: boolean;
  enabled: boolean;
  phone: string;
  phoneVerified: boolean;
  userId: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
