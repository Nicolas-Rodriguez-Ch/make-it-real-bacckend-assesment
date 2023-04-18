import { Request, Response } from 'express';
import {
  createFavList,
  getAllFavList
} from './favs.services';
import { AuthUser } from '../../auth/auth.types';
import { removeUserIdFromFavList } from './favs.utils';

export const getAllFavListController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const user_id = req.user as string;
    const favList = await getAllFavList(user_id);
    const favListsWithoutUserId = favList.map(removeUserIdFromFavList);
    res.status(200).json({
      message: 'Favs retrieved succesfully',
      data: favListsWithoutUserId
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message});
  }
}

export const createFavListController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const user_id = req.user as string;
    const favList = await createFavList(user_id, req.body);
    const favListWithoutUserId = removeUserIdFromFavList(favList);

    res.status(200).json({ message: 'Favs list created successfully', data: favListWithoutUserId });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}