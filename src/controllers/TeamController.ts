import { NextFunction, Request, Response } from 'express';
import Contract from '../models/Contract';

const getTeamByContractId = async (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    try {
        const teams = await Contract.findById(contractId).select({ _id: 1, codigo_clube: 1, clube: 1, uf: 1 });
        return teams ? res.status(200).json({ teams }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getTeamByTeamCode = async (req: Request, res: Response, next: NextFunction) => {
    const teamCodeId = req.params.teamCode;

    try {
        const teams = await Contract.findOne({ codigo_clube: teamCodeId }).select({ _id: 0, codigo_clube: 1, clube: 1, uf: 1 });
        return teams ? res.status(200).json({ teams }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teams = await Contract.find().select({ _id: 1, codigo_clube: 1, clube: 1, uf: 1 });
        return teams ? res.status(200).json({ teams }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllTeamsWithoutDuplicates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teams = await Contract.count();
        return teams ? res.status(200).json({ teams }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getTeamByContractId, getTeamByTeamCode, getAll, getAllTeamsWithoutDuplicates };
