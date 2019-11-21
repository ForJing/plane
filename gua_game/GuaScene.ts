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
      element.draw && element.draw();
    });
  }

  update() {
    this.elements.forEach(element => {
      element.update && element.update();
    });

    this.elements = this.elements.filter(i => i.alive);
    console.log(this.elements);
  }

  addElement(img) {
    this.elements.push(img);
  }
}

export default GuaScene;
