import { Router } from 'express';
import {
  signupController
} from './user.controller';
// import { isAuthenticated } from '../../middleware/auth'; 

const router = Router();

router.get('/');
router.post('/signup', signupController)
export default router;