import GetGameUseCase from '../useCases/game/GetGameUseCase';

export default class GameController {
    constructor(private getGameUseCase: GetGameUseCase) {}
}
