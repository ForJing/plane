import GuaImage from "../../gua_game/GuaImage";

class Bullet extends GuaImage {
  speed: number;
  constructor(game) {
    super(game, "bullet");
    this.setup();
  }

  setup() {
    this.speed = 3;
  }

  update() {
    this.y -= this.speed;
  }
}

export default Bullet;
