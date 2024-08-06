import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware pour vérifier le token JWT
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Accès refusé, aucun token fourni.' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token invalide.' });
    }
    req.user = user;
    next();
  });
};

