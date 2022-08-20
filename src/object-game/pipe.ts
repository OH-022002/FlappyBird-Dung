"use strict";
import { Game } from "../game/game";
import { GameObject } from "./object-game";
import { GAME_WIDTH } from "../config/config";
import { PIPE_DISTANCE } from "../config/config";
export class Pipe extends GameObject {
    constructor(game: Game, imagePath: string) {
        super(game, imagePath);
        this.position = {
            x: GAME_WIDTH,
            y: -150,
        };
    }
    update() {
        if(!this.game.isCollision){
            this.position.x -= 1;
        }
        
        if (this.position.x === -52) {
            this.position.x = GAME_WIDTH;
           this.position.y = -Math.floor(Math.random() * 240)+20;
        }
        this.game.context.scale(1,-1);
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
        this.game.context.scale(1,-1);
        this.game.context.drawImage(this.image,this.position.x,-this.position.y+ PIPE_DISTANCE );
    }
}
