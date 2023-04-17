import { Router } from 'express';
import { loginController } from './local.controller';

const router = Router();

router.post('/login', loginController);

export default router;