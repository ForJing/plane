import GuaGame from "./GuaGame";
import GuaImage from "./GuaImage";

class GuaScene {
  game: GuaGame;
  elements: Array<any> = [];

  constructor(game: GuaGame) {
    this.game = game;
  }

  draw() {
    this.elements.forEach(element => {
      this.game.drawImage(element);
    });
  }

  update() {}

  addElement(img: GuaImage) {
    this.elements.push(img);
  }
}

export default GuaScene;
