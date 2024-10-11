import { User as UserPrisma } from '@prisma/client';

export class User implements Omit<UserPrisma, 'id' | 'createdAt' | 'updatedAt' | 'deleted'> {
  id?: string;
  identifier: string;
  enabled: boolean;
  password: string;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
