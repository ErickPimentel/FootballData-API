import express from 'express';
import AthleteController from '../controllers/AthleteController';

const router = express.Router();

router.post('/create', AthleteController.createAthlete);
router.get('/get/:athleteId', AthleteController.getAthlete);
router.get('/get/', AthleteController.getAll);
router.delete('/delete/:athleteId', AthleteController.deleteAthlete);

export = router;
