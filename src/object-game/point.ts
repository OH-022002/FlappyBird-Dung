"use strict";
import { Game } from "../game/game";
import { GameObject } from "./object-game";
export class Point extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: 144,
            y: 100,
        };
    }
    update() {
        const pointStringType = this.game.countPoint.toString();
        for (let i = 0; i < pointStringType.length; i++) {
            this.image = new Image();
            this.image.src = `./assets/img/${pointStringType.charAt(i)}.png`;
            this.game.context.drawImage(this.image, ((this.position.x-12*pointStringType.length+24*i)),this.position.y);
        }  
    }
}

