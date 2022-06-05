import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Athlete from '../models/Athlete';

const createAthlete = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const athlete = new Athlete({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return athlete
        .save()
        .then((athlete) => res.status(201).json({ athlete }))
        .catch((error) => res.status(500).json({ error }));
};

const getAthlete = (req: Request, res: Response, next: NextFunction) => {
    const athleteId = req.params.athleteId;

    return Athlete.findById(athleteId)
        .then((athlete) => (athlete ? res.status(200).json({ athlete }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json(error));
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
    return Athlete.find()
        .then((athletes) => res.status(200).json({ athletes }))
        .catch((error) => res.status(500).json({ error }));
};

const deleteAthlete = (req: Request, res: Response, next: NextFunction) => {
    const athleteId = req.params.athleteId;

    return Athlete.findByIdAndDelete(athleteId).then((athlete) => (athlete ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })));
};

export default { createAthlete, getAthlete, getAll, deleteAthlete };
