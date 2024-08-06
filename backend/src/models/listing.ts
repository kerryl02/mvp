import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Listing = {
  id: number;
  title: string;
  description: string;
  price: string;
};

export default prisma.listing;

