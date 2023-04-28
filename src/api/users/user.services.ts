import { PrismaClient, Prisma } from '@prisma/client';

interface UserInput {
  email: string;
  password: string;
  favListName?: string;
}

const prisma = new PrismaClient();

export const createUser = async ( input: UserInput ) => {
  const {
    email,
    password,
    favListName
  } = input;
  try {
    return prisma.users.create({
      data: {
        email,
        password,
        favLists : favListName
          ? {
            create: {
              name: favListName,
            },
          }
          : undefined,
      }
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new Error('Email already exists');
    } else {
      throw error;
    }
  }
}