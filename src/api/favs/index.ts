import { Router } from 'express';
import {
  createFavListController,
  getAllFavListsController,
  getFavListByIdController,

} from './favs.controller';
import { isAuthenticated } from '../../middleware/auth';

const router = Router();

router.get('/', isAuthenticated, getAllFavListsController);
router.get('/:id', isAuthenticated, getFavListByIdController);
router.post('/', isAuthenticated, createFavListController);

export default router;