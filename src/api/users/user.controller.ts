import { PrismaClient } from '@prisma/client';
import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import validator from 'validator';
import { createUser } from './user.services';
import { signToken } from '../../auth/auth.services';

const prisma = new PrismaClient;

export const signupController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      email,
      password,
      favListName
    } = req.body;

    if (!validator.isStrongPassword(password)) {
      res.status(400).json({ message: 'Password is not strong enough' });
      return;
    }

    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
      res.status(409).json({ message: 'Email already exists' });
      return;
    }

    const encPass = await bcrypt.hash(req.body.password, 10);
    const { user_id: id } = await createUser({ ...req.body, password: encPass });
    const token = signToken({ id });
    res.status(201).send({message : 'User created successfully', token});

  } catch (error: any) {
    if (error.message === 'Email already exists') {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
}