export type createFavListInput = {
  name: string;
};

export type favList = {
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

export type item = {
  title: string,
  description: string,
  url: string
}