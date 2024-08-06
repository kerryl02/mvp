import { Router } from 'express';
import { getListings, getListingById, createListing } from '../controllers/listingsController';

const router = Router();

// Route pour obtenir la liste des annonces
router.get('/', getListings);

// Route pour obtenir une annonce spécifique
router.get('/:id', getListingById);

// Route pour créer une nouvelle annonce
router.post('/', createListing);

export default router;

