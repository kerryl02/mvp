import { Request, Response } from 'express';
import prisma from '../config/db';

// Fonction pour créer une réservation
export const createReservation = async (req: Request, res: Response) => {
  const { listingId, userId, startDate, endDate } = req.body;
  try {
    const newReservation = await prisma.reservation.create({
      data: {
        listingId,
        userId,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la réservation.' });
  }
};

