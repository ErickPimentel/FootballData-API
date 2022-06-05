import { Router } from 'express';
import GameController from '../../controllers/GameController';

export default class GameRoutes {
    public static buildRoutes(router: Router) {
        router.get('/game/:id', (req, res) => {});
    }
}
