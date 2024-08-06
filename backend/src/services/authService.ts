import bcrypt from 'bcryptjs';
import prisma from '../config/db';
import { User } from '@prisma/client';

// Fonction pour créer un nouvel utilisateur
export const createUser = async (email: string, password: string): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, password: hashedPassword },
  });
};

// Fonction pour vérifier les informations d'identification de l'utilisateur
export const verifyUser = async (email: string, password: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};

