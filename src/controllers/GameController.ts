import { NextFunction, Request, Response } from 'express';
import Game from '../models/Game';

const getGame = async (req: Request, res: Response, next: NextFunction) => {
    const gameId = req.params.gameId;

    try {
        const game = await Game.findById(gameId);
        return game ? res.status(200).json({ game }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const games = await Game.find();
        return res.status(200).json({ games });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { getGame, getAll };
