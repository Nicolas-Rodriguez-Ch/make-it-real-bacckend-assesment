export type CreateFavListInput = {
  name: string;
};

export type FavList = {
  favList_id: string;
  name: string;
  user_id: string;
  favs?: {
    fav_id: string;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};