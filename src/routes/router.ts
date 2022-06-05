import { Router } from 'express';
import ContractController from '../controllers/ContractController';
import ContractRoutes from '../routes/contract/contract';

const router = Router();

//**Healthcheck */
router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

router.post('/contract', ContractController.createContract);
router.get('/contract/:contractId', ContractController.getContract);
router.get('/contracts/', ContractController.getAll);
router.delete('contract/:contractId', ContractController.deleteContract);

export default router;
