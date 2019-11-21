import GuaImage from "../../gua_game/GuaImage";
import GuaGame from "../../gua_game/GuaGame";

function randomBetween(start, end) {
  return start + Math.floor(Math.random() * (end - start + 1));
}

class Enemy extends GuaImage {
  speed: number;

  constructor(game: GuaGame) {
    const t = randomBetween(0, 4);
    super(game, `enemy${t}`);
    this.setup();
  }

  setup() {
    this.speed = randomBetween(2, 5);
    this.x = randomBetween(0, 350);
    this.y = -randomBetween(0, 200);
  }

  update() {
    console.log("aklsdfj");

    this.y += this.speed;
    if (this.y > 600) {
      this.setup();
    }
  }
}

export default Enemy;
