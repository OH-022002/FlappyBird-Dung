import { GameObject } from "./object-game";
import { Game } from "../game/game";
export class Backgroud extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: 0,
            y: 0
        };

    }
    update(): void {
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }
}