import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Définit un type personnalisé pour l'objet user dans la requête
    }
  }
}

