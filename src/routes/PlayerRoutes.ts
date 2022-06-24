import express from 'express';
import PlayerController from '../controllers/PlayerController';

const router = express.Router();

router.get('/player/:contractId', PlayerController.getPlayer);
router.get('/players', PlayerController.getAll);

export = router;
