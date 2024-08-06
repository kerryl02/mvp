import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authController';

const router = Router();

// Route pour l'inscription
router.post('/register', registerUser);

// Route pour la connexion
router.post('/login', loginUser);

export default router;

