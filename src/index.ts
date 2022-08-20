import { Game } from "./game/game";
import { Backgroud } from "./object-game/background";
import { Base } from "./object-game/base";
import { Bird } from "./object-game/bird";
import { Pipe } from "./object-game/pipe";
import { Point} from "./object-game/point";

function main(): void {
    const game = new Game("game");
    const bird = new Bird(game, "./assets/img/redbird-upflap.png", "./assets/img/redbird-midflap.png", "./assets/img/redbird-downflap.png");
    const background = new Backgroud(game, "./assets/img/background-day.png");
    const base = new Base(game, "./assets/img/base.png");
    const pipe = new Pipe(game, "./assets/img/pipe-green.png");
    const point = new Point (game,"./assets/img/0.png");
  
    game.setBackground(background);
    game.setBird(bird);
    game.setBase(base);
    game.setPipe(pipe);
    game.setPoint(point);
    game.start();
}
main();
