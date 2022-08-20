import { GAME_HEIGHT } from "../config/config";
import { Bird } from "../object-game/bird";
import { Base } from "../object-game/base";
import { Pipe } from "../object-game/pipe";
import { Point } from "../object-game/point";
import { Backgroud } from "../object-game/background";
import { GAME_WIDTH } from "../config/config";
import { FPS } from "../config/config";
import { PIPE_DISTANCE } from "../config/config";

export class Game {
    context: CanvasRenderingContext2D;
    bird: Bird;
    background: Backgroud;
    base: Base;
    pipe: Pipe;
    point: Point;
    isCollision: boolean = false;
    countFrame: number = 0;
    countPoint: number = 0;


    constructor(id: string) {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        canvas.addEventListener("click", () => {
            if (!this.isCollision) {
                this.bird.flap();
            }

        })
    }
    #updateFrame(): void {
        this.#checkCollosion();
        this.#updatePoint();
        this.countFrame++;
        this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.background.update();
        this.pipe.update();
        this.base.update();
        this.bird.update();
        this.point.update();
        setTimeout(() => this.#updateFrame(), 1000 / FPS)

    }
    #checkCollosion(): void {
        if ((this.bird.position.x + 34 > this.pipe.position.x) && this.bird.position.x < this.pipe.position.x + 52) {
            if (!((this.bird.position.y > (-this.pipe.position.y)) && ((this.bird.position.y + 24) < (-this.pipe.position.y) + PIPE_DISTANCE))) {
                this.isCollision = true;
            }
        }
        if (this.bird.position.y < 0 || this.bird.position.y + 24 > 400) {
            this.isCollision = true;
        }
    }
    #updatePoint() {
        if (this.pipe.position.x === (100 - 52)) {
            this.countPoint++;
        }
    }
    setBird(bird: Bird) {
        this.bird = bird;
    }
    setBase(base: Base) {
        this.base = base;
    }
    setBackground(background: Backgroud) {
        this.background = background;
    }
    setPipe(pipe: Pipe) {
        this.pipe = pipe;
    }
    setPoint(point: Point) {
        this.point = point;

    }
    start(): void {
        this.#updateFrame();

    }
}
