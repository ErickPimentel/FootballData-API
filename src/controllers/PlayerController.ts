import { NextFunction, Request, Response } from 'express';
import Contract from '../models/Contract';

const getPlayer = async (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    try {
        const player = await Contract.findById(contractId).select({ _id: 1, codigo_atleta: 1, nome: 1, apelido: 1, sexo: 1, data_nascimento: 1 });
        return player ? res.status(200).json({ player }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const players = await Contract.find().select({ _id: 1, codigo_atleta: 1, nome: 1, apelido: 1, sexo: 1, data_nascimento: 1 });
        return res.status(200).json({ players });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { getPlayer, getAll };
