import express from 'express';
import PlayerController from '../controllers/PlayerController';

const router = express.Router();

router.get('/contract/player/:contractId', PlayerController.getPlayerByContractId);
router.get('/player/:playerCode', PlayerController.getPlayerByPlayerCode);
router.get('/players', PlayerController.getAll);

export = router;
