import express from 'express';
import TeamController from '../controllers/TeamController';

const router = express.Router();

router.get('/contract/team/:contractId', TeamController.getTeamByContractId);
router.get('/team/:teamCode', TeamController.getTeamByTeamCode);
router.get('/teams', TeamController.getAll);
//router.get('/allTeamsWithoutDuplicates', TeamController.getAllTeamsWithoutDuplicates);

export = router;
