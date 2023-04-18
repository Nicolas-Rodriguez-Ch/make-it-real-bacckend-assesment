import { Router } from 'express';
import {
  getAllFavListController,

} from './favs.controller';
import { isAuthenticated } from '../../middleware/auth';

const router = Router();

router.get('/', isAuthenticated, getAllFavListController);

export default router;