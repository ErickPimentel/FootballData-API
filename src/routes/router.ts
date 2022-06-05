import { Router } from 'express';

const router = Router();

//**Healthcheck */
router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

export default router;
