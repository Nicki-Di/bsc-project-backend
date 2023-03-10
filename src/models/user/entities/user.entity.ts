import { User as prismaUser } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class User implements prismaUser {
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password: string;
  phoneNumber: string;
  fullName: string | null;
  currentPackageLevel: string | null;
  currentBalance: number;
}

export class PartialUser extends PartialType(User) {}
