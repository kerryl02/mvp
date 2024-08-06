import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/db';

// Fonction pour l'inscription
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Utilisateur déjà existant.' });
    }

    // Hash le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crée un nouvel utilisateur
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
  }
};

// Fonction pour la connexion
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Vérifie si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect.' });
    }

    // Vérifie le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Email ou mot de passe incorrect.' });
    }

    // Génère un token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la connexion.' });
  }
};

