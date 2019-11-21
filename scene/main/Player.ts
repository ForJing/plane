import GuaGame from "../../gua_game/GuaGame";
import { aCollideWithb } from "../../gua_game/utils";
import Ball from "./Ball";
import GuaImage from "../../gua_game/GuaImage";

const canvasWidth = 400;
const canvasHeight = 600;

class Player extends GuaImage {
  speed: number;

  constructor(game: GuaGame) {
    super(game, "player");
    this.speed = 10;
    this.w = 39;
    this.h = 46;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  // collide(ball: Ball) {
  //   return aCollideWithb(this, ball);
  // }
}

export default Player;
