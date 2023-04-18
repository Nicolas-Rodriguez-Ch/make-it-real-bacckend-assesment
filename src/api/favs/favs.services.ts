import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const getAllFavList = async ( user_id: string ) => {
  return await prisma.favList.findMany({
    where: {
      user_id
    }
  });
}