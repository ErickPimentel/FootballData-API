import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Contract from '../models/Contract';

const createContract = async (req: Request, res: Response, next: NextFunction) => {
    const contract = new Contract({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
    });

    try {
        const contract_1 = await contract.save();
        return res.status(201).json({ contract });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const getContract = async (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    try {
        const contract = await Contract.findById(contractId);
        return contract ? res.status(200).json({ contract }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const contracts = await Contract.find();
        return res.status(200).json({ contracts });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteContract = async (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    const contract = await Contract.findByIdAndDelete(contractId);
    return contract ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' });
};

const updateContract = async (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    try {
        const contract = await Contract.findByIdAndUpdate(contractId, req.body, { new: true });
        return contract ? res.status(200).json({ contract }) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { createContract, getContract, getAll, deleteContract, updateContract };
