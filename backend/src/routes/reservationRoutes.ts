import { Router } from 'express';
import { createReservation } from '../controllers/reservationController';

const router = Router();

// Route pour créer une nouvelle réservation
router.post('/', createReservation);

export default router;

