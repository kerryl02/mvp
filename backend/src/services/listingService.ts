import prisma from '../config/db';
import { Listing } from '@prisma/client';

// Fonction pour obtenir toutes les annonces
export const getAllListings = async (): Promise<Listing[]> => {
  return prisma.listing.findMany();
};

// Fonction pour obtenir une annonce par ID
export const getListingById = async (id: number): Promise<Listing | null> => {
  return prisma.listing.findUnique({ where: { id } });
};

// Fonction pour créer une nouvelle annonce
export const createNewListing = async (data: Listing): Promise<Listing> => {
  return prisma.listing.create({ data });
};

