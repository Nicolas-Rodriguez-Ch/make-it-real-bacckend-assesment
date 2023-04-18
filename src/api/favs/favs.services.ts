import { PrismaClient } from '@prisma/client';
import { FavList } from './favsTypes';
export type CreateFavListInput = {
  name: string;
};
const prisma = new PrismaClient();


export const getAllFavList = async ( user_id: string ) : Promise<FavList[]> => {
  return await prisma.favList.findMany({
    where: {
      user_id
    },
    include: {
      favs: true
    }
  });
}

export const createFavList = async (user_id: string, input: CreateFavListInput) : Promise<FavList> => {
  return await prisma.favList.create({
    data: {
      name: input.name,
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