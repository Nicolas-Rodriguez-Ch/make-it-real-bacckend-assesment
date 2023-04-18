import { Router } from 'express';
import {
  createFavListController,
  getAllFavListController,

} from './favs.controller';
import { isAuthenticated } from '../../middleware/auth';

const router = Router();

router.get('/', isAuthenticated, getAllFavListController);
router.post('/', isAuthenticated, createFavListController);

export default router;