import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type User = {
  id: number;
  email: string;
  password: string;
};

export default prisma.user;

