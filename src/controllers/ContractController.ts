import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Contract from '../models/Contract';

const createContract = (req: Request, res: Response, next: NextFunction) => {
    const contract = new Contract({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
    });

    return contract
        .save()
        .then((contract) => res.status(201).json({ contract }))
        .catch((error) => res.status(500).json({ error }));
};

const getContract = (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    return Contract.findById(contractId)
        .then((contract) => (contract ? res.status(200).json({ contract }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json(error));
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
    return Contract.find()
        .then((contracts) => res.status(200).json({ contracts }))
        .catch((error) => res.status(500).json({ error }));
};

const deleteContract = (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    return Contract.findByIdAndDelete(contractId).then((contract) => (contract ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })));
};

const updateContract = (req: Request, res: Response, next: NextFunction) => {
    const contractId = req.params.contractId;

    return Contract.findByIdAndUpdate(contractId, req.body, { new: true })
        .then((contract) => (contract ? res.status(200).json({ contract }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json(error));
};

export default { createContract, getContract, getAll, deleteContract, updateContract };
