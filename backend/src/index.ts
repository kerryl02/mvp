import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import listingsRoutes from './routes/listingsRoutes';
import authRoutes from './routes/authRoutes';
import reservationRoutes from './routes/reservationRoutes';
import dotenv from 'dotenv';

// Charge les variables d'environnement depuis .env
dotenv.config();

const app = express();
const port = 5000;

// Configuration de Prisma
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/listings', listingsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

