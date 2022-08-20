import { GameObject } from "./object-game";
import { FLAP_VELOCITY, FPS } from "../config/config";
import { GAME_GRAVITY } from "../config/config";
import { Game } from "../game/game";
export class Bird extends GameObject {
    velocity: number=1;
    images: HTMLImageElement[] =[];
    flapIndexImage: number =0;
    constructor(game: Game, imageUp: string, imageMid: string, imageDown :string) {
        super(game, imageUp);
        const imageMidElement =new Image();
        imageMidElement.src =imageMid;
        const imageDownElement =new Image();
        imageDownElement.src =imageDown;
        this.images=[this.image, imageMidElement,imageDownElement];
        this.position = {
            x: 100,
            y: 100,
        };

    }
    flap():void{
        this.velocity-=FLAP_VELOCITY;
    }
    update(): void {
        this.velocity+=GAME_GRAVITY;
        this.position.y+=this.velocity;
        let drawImage =this.images[this.flapIndexImage];
        if(this.position.y+24>400){
            this.position.y=400;
        }
       if (this.game.countFrame%(FPS/3)===0){
            this.flapIndexImage++;
            if(this.flapIndexImage===3){
                this.flapIndexImage =0;
            }    
       }
        if(this.game.isCollision){
            drawImage =this.images[0];
        }
        this.game.context.drawImage(drawImage, this.position.x, this.position.y);
    }
}