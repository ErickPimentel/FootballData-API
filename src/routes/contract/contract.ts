import { Router } from 'express';
import ContractController from '../../controllers/ContractController';

export default class ContractRoutes {
    public static buildRoutes(router: Router) {
        router.post('/contract', ContractController.createContract);
        router.get('/contract/:contractId', ContractController.getContract);
        router.get('/contracts/', ContractController.getAll);
        router.delete('contract/:contractId', ContractController.deleteContract);
    }
}
