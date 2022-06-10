import express from 'express';
import GameController from '../controllers/GameController';

const router = express.Router();

router.get('/game/:gameId', GameController.getGame);
router.get('/games', GameController.getAll);

export = router;
