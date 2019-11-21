import GuaGame from "./GuaGame";

class GuaImage {
  texture: HTMLImageElement;
  x: number;
  y: number;
  w: number;
  h: number;
  game: GuaGame;
  constructor(game: GuaGame, name: string, w?, h?) {
    this.texture = game.textureByName(name);
    this.x = 0;
    this.y = 0;
    this.w = w || this.texture.width;
    this.h = h || this.texture.height;
    this.game = game;
  }
}

export default GuaImage;
