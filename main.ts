import GuaGame from "./gua_game/GuaGame";
import SceneTitle from "./scene/title/scene_title";
import "./style.scss";
import { loadImages } from "./gua_game/utils";
import Scene from "./scene/main/scene";

const log = console.log.bind(this);

async function __main() {
  const images = {
    ball: require("./images/ball.png"),
    paddle: require("./images/paddle.png"),
    block: require("./images/block.png"),
    sky: require("./images/sky.png"),
    player: require("./images/player.png"),
    cloud: require("./images/cloud.png"),
    brokenBlock: require("./images/broke_broken.png")
  };

  const imgs = await loadImages(images);
  const game = new GuaGame(30, imgs);
  const scene = new Scene(game);
  game.scene = scene;

  // let score = 0;

  // window.addEventListener("keydown", e => {
  //   if (e.key === "p") {
  //     game.pause();
  //   }
  // });

  game.run();
}

__main();
