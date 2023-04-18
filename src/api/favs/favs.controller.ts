import { Request, Response } from 'express';
import {
  getAllFavList
} from './favs.services';
import { AuthUser } from '../../auth/auth.types';

export const getAllFavListController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const user_id = req.user as string;
    const favList = await getAllFavList(user_id);
    res.status(200).json({
      message: 'Favs retrieved succesfully',
      data: favList
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message});
  }
}