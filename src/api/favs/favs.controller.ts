import { Request, Response } from "express";
import {
  addItemToList,
  createFavList,
  deleteFavList,
  getAllFavLists,
  getFavListById,
  getListByNameAndId,
} from "./favs.services";
import { AuthUser } from "../../auth/auth.types";
import { removeUserIdFromFavList } from "./favs.utils";
import { item } from "./favsTypes";

// get all favs lists
export const getAllFavListsController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const user_id = req.user as string;
    const favLists = await getAllFavLists(user_id);
    const favListsWithoutUserId = favLists.map(removeUserIdFromFavList);
    res.status(200).json({
      message: "Favs retrieved succesfully",
      data: favListsWithoutUserId,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// create a new favs list
export const createFavListController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const user_id = req.user as string;
    const favList = await createFavList(user_id, req.body);
    const favListWithoutUserId = removeUserIdFromFavList(favList);

    res.status(200).json({
      message: "Favs list created successfully",
      data: favListWithoutUserId,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get single fav list
export const getFavListByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const favList = await getFavListById(id);

    if (favList) {
      const favListWithoutUserId = removeUserIdFromFavList(favList);
      res
        .status(200)
        .json({ message: "Fav list found!", data: favListWithoutUserId });
    } else {
      res.status(404).json({ message: "Fav list not found!" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// delete single fav List

export const deleteFavListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const favList = await deleteFavList(id);

    if (favList) {
      const favListWithoutUserId = removeUserIdFromFavList(favList);
      res.status(200).json({
        message: "Fav list deleted successfully",
        data: favListWithoutUserId,
      });
    } else {
      res.status(404).json({ message: "Fav list not found!" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addItemToListController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const { item, listName }: { item: item; listName: string } = req.body;
    if (!item || !listName) {
      return res.status(400).json({ message: "Missing required fileds" });
    }
    const { user: user_id } = req;
    const list = await getListByNameAndId(user_id as string, listName);
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    const addedItem = await addItemToList(item, list.favList_id);

    res.status(201).json({
      message: `Item added to the list ${listName} siccessfully`,
      data: addedItem,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({
      message: "Failed to add item to the list",
      error: error.message,
    });
  }
};
