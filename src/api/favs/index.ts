import { Router } from "express";
import {
  addItemToListController,
  createFavListController,
  deleteFavListController,
  getAllFavListsController,
  getFavListByIdController,
} from "./favs.controller";
import { isAuthenticated } from "../../middleware/auth";

const router = Router();

router.get("/", isAuthenticated, getAllFavListsController);
router.get("/:id", isAuthenticated, getFavListByIdController);
router.post("/", isAuthenticated, createFavListController);
router.delete("/:id", isAuthenticated, deleteFavListController);
router.post("/add-item", isAuthenticated, addItemToListController);

export default router;
