import GuaImage from "../../gua_game/GuaImage";
import Scene from "./scene";
import { aCollideWithb } from "../../gua_game/utils";

class Bullet extends GuaImage {
  speed: number;
  type: "player" | "enemy";
  alive: boolean;
  constructor(game, type) {
    super(game, "bullet");
    this.type = type;
    this.setup();
  }

  setup() {
    this.speed = 3;
  }

  update() {
    this.y -= this.speed;

    if (this.y < 0) {
      this.alive = false;
    }

    if (this.type === "player") {
      // 判断与敌机碰撞
      const scene = this.game.scene as Scene;
      const enemies = scene.enemies;
      enemies.forEach(enemy => {
        if (aCollideWithb(this, enemy)) {
          enemy.alive = false;
          this.alive = false;
        }
      });
    }
  }
}

export default Bullet;
