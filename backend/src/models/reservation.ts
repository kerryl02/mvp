import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Reservation = {
  id: number;
  listingId: number;
  userId: number;
  startDate: Date;
  endDate: Date;
};

export default prisma.reservation;

