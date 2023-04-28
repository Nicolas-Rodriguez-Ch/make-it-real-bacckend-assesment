import { PrismaClient } from "@prisma/client";
import { createFavListInput, favList, item } from "./favsTypes";
const prisma = new PrismaClient();

export const getAllFavLists = async (user_id: string): Promise<favList[]> => {
  return await prisma.favList.findMany({
    where: {
      user_id,
    },
    include: {
      favs: true,
    },
  });
};

export const createFavList = async (
  user_id: string,
  input: createFavListInput
): Promise<favList> => {
  const { name } = input;
  return await prisma.favList.create({
    data: {
      name,
      user: {
        connect: {
          user_id,
        },
      },
    },
    include: {
      favs: true,
    },
  });
};

export const getFavListById = (favList_id: string) => {
  return prisma.favList.findUnique({
    where: {
      favList_id,
    },
    include: {
      favs: true,
    },
  });
};

export const deleteFavList = (favList_id: string) => {
  return prisma.favList.delete({
    where: {
      favList_id,
    },
  });
};

export const addItemToList = (item: item, favList_id: string) => {
  const { title, description, url } = item;
  return prisma.fav.create({
    data: {
      title,
      description,
      url,
      favList_id,
    },
  });
};

export const getListByNameAndId = (user_id: string, name: string) => {
  return prisma.favList.findFirst({
    where: {
      user_id,
      name
    }
  })
}