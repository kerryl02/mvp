import { Request, Response } from 'express';
import prisma from '../config/db';

// Fonction pour obtenir toutes les annonces
export const getListings = async (req: Request, res: Response) => {
  try {
    const listings = await prisma.listing.findMany();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des annonces.' });
  }
};

// Fonction pour obtenir une annonce par ID
export const getListingById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const listing = await prisma.listing.findUnique({ where: { id } });
    if (listing) {
      res.status(200).json(listing);
    } else {
      res.status(404).json({ error: 'Annonce non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'annonce.' });
  }
};

// Fonction pour créer une nouvelle annonce
export const createListing = async (req: Request, res: Response) => {
  const { title, description, price } = req.body;
  try {
    const newListing = await prisma.listing.create({
      data: { title, description, price },
    });
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'annonce.' });
  }
};

