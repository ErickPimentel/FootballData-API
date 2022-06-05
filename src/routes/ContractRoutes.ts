import express from 'express';
import ContractController from '../controllers/ContractController';

const router = express.Router();

router.post('/contract', ContractController.createContract);
router.get('/contract/:contractId', ContractController.getContract);
router.get('/contracts', ContractController.getAll);
router.delete('/contract/:contractId', ContractController.deleteContract);
router.put('/contract/:contractId', ContractController.updateContract);

export = router;
