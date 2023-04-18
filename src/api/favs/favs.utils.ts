import { FavList } from "./favsTypes";

export const removeUserIdFromFavList = (favList: FavList) => {
  const { user_id: _, ...favListWithoutUserId } = favList;
  return favListWithoutUserId;
}