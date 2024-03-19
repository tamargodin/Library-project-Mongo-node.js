import express from 'express';
import { registerUser, loginUser, updateUserProfile } from '../controllers/UserController';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.put('/update/:userId', updateUserProfile);

export default userRouter;