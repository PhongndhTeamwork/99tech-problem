import { Router } from 'express';
import { createUser, updateUser, getUsers, deleteUser } from '@controller/user.controller';

const router = Router();

router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/get', getUsers);

export const userRouter = router;