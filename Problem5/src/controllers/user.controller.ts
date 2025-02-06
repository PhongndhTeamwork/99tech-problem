import { Request, Response } from 'express';
import prisma from '@database/prisma';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const transformedName = name as string;
    const users = await prisma.user.findMany({
        where: {
            ...(transformedName && transformedName != "" && { name: { contains: transformedName } }), 
        }
    });
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: {
            name,
            email,
            },
        });
        res.json({
            message : "User created successfully",
            user 
        });
    }catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: {
            name,
            email,
            },
        });
        res.json({
            message : "User updated successfully",
            user 
        });
    }catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
      }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
            where: { id: Number(id) },
        });
        res.json({
            message : "User deleted successfully"
        });
    }catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

