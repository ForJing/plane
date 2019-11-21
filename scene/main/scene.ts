import GuaGame from "../../gua_game/GuaGame";
import GuaImage from "../../gua_game/GuaImage";
import GuaScene from "../../gua_game/GuaScene";

class Scene extends GuaScene {
  bg: GuaImage;
  game: GuaGame;
  player: GuaImage;
  elements: Array<any>;
  cloud: GuaImage;
  constructor(game: GuaGame) {
    super(game);
    this.setup();
  }

  setup() {
    const game = this.game;
    this.bg = new GuaImage(game, "sky");
    this.player = new GuaImage(game, "player", 46, 59);
    this.cloud = new GuaImage(game, "cloud", 150, 150);

    this.player.x = 100;
    this.player.y = 450;

    this.addElement(this.bg);
    this.addElement(this.cloud);
    this.addElement(this.player);
  }

  // draw() {}

  update() {
    this.cloud.y += 2;
  }
}

export default Scene;
