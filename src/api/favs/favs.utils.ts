import { favList } from "./favsTypes";

export const removeUserIdFromFavList = (favList: favList) => {
  const { user_id: _, ...favListWithoutUserId } = favList;
  return favListWithoutUserId;
}