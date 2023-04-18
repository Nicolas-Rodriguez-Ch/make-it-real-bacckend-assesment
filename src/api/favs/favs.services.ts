import { PrismaClient } from '@prisma/client';
import {
  createFavListInput,
  favList
} from './favsTypes';
const prisma = new PrismaClient();


export const getAllFavLists = async ( user_id: string ): Promise<favList[]> => {
  return await prisma.favList.findMany({
    where: {
      user_id
    },
    include: {
      favs: true
    }
  });
}

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
          user_id
        }
      }
    },
    include: {
      favs: true
    }
  });
}

export const getFavListById = (favList_id: string) => {
  return prisma.favList.findUnique({
    where: {
      favList_id
    },
    include: {
      favs: true
    }
  });
}

export const deleteFavList = (favList_id: string) => {
  return prisma.favList.delete({
    where: {
      favList_id
    }
  });
}