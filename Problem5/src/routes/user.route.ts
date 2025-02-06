import { Router } from 'express';
import { createUser, updateUser, getUsers, deleteUser } from '@controller/user.controller';

const router = Router();

router.get('/create', createUser);
router.get('/update/:id', updateUser);
router.get('/delete/:id', deleteUser);
router.get('/get', getUsers);

export const userRouter = router;