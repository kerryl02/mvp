import prisma from '../config/db';
import { Reservation } from '@prisma/client';

// Fonction pour créer une nouvelle réservation
export const createReservation = async (data: Reservation): Promise<Reservation> => {
  return prisma.reservation.create({ data });
};

