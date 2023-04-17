import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
  login,
  signToken
} from '../auth.services';

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const user = await login(email);

    if (!user) {
      throw new Error('Email or password are incorrect');
    }
    const isValid: boolean = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      throw new Error('Email or password are incorrect');
    }

    const { user_id: id } = user;
    const token = signToken({ id });
    res.status(201).send({message : 'User loged in successfully',  email, token});

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}