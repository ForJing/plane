// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"gua_game/GuaGame.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaGame =
/** @class */
function () {
  function GuaGame(fps, images) {
    if (fps === void 0) {
      fps = 30;
    }

    if (images === void 0) {
      images = {};
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    this.canvas = canvas;
    this.context = context;
    this.actions = {};
    this.keydowns = {};
    this.fps = fps;
    this.paused = false;
    this.images = images;
  }

  GuaGame.prototype.pause = function () {
    this.paused = !this.paused;
  };

  GuaGame.prototype.textureByName = function (name) {
    return this.images[name];
  };

  GuaGame.prototype.setTimer = function () {
    var that = this;

    function loop() {
      setTimeout(function () {
        // events
        var keys = Object.keys(that.actions);
        keys.forEach(function (key) {
          var action = that.actions[key];

          if (that.keydowns[key]) {
            action();
          }
        }); // update

        that.update();
        that.context.clearRect(0, 0, that.canvas.width, that.canvas.height); // draw

        that.draw();
        loop();
      }, 1000 / that.fps);
    }

    loop();
  };

  GuaGame.prototype.setUpListeners = function () {
    var _this = this;

    window.addEventListener("keydown", function (event) {
      _this.keydowns[event.key] = true;
    });
    window.addEventListener("keyup", function (event) {
      _this.keydowns[event.key] = false;
    });
  };

  GuaGame.prototype.registerAction = function (key, callback) {
    this.actions[key] = callback;
  };

  GuaGame.prototype.draw = function () {
    this.scene.draw();
  };

  GuaGame.prototype.update = function () {
    this.scene.update();
  };

  GuaGame.prototype.drawImage = function (guaImage) {
    this.context.drawImage(guaImage.texture, guaImage.x, guaImage.y, guaImage.w, guaImage.h);
  };

  GuaGame.prototype.run = function () {
    this.setUpListeners();
    this.setTimer();
  };

  return GuaGame;
}();

exports.default = GuaGame;
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"gua_game/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.imageFromPath = function (path) {
  var img = new Image();
  img.src = path;
  return img;
};

function randomBetween(start, end) {
  return start + Math.floor(Math.random() * (end - start + 1));
}

exports.randomBetween = randomBetween;

function aCollideWithb(a, b) {
  if (a.x + a.w > b.x && a.x < b.w + b.x && a.y + a.h > b.y && a.y < b.y + b.h) {
    return true;
  } else {
    return false;
  }
}

exports.aCollideWithb = aCollideWithb;

function loadImages(imagesMap) {
  return new Promise(function (resolve) {
    var promises = Object.keys(imagesMap).map(function (name) {
      var path = imagesMap[name];
      return loadImage(name, path);
    });
    Promise.all(promises).then(function (data) {
      var result = data.reduce(function (obj, _a) {
        var name = _a.name,
            img = _a.img;
        obj[name] = img;
        return obj;
      }, {});
      resolve(result);
    });
  });
}

exports.loadImages = loadImages;

function loadImage(name, path) {
  return new Promise(function (resolve) {
    try {
      var img_1 = document.createElement("img");

      img_1.onload = function () {
        resolve({
          name: name,
          img: img_1
        });
      };

      img_1.src = path;
    } catch (error) {
      console.log(error);
    }
  });
}
},{}],"gua_game/GuaImage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage =
/** @class */
function () {
  function GuaImage(game, name, w, h) {
    this.alive = true;
    this.texture = game.textureByName(name);
    this.x = 0;
    this.y = 0;
    this.w = w || this.texture.width;
    this.h = h || this.texture.height;
    this.game = game;
    this.name = name;
  }

  GuaImage.prototype.draw = function () {
    this.game.drawImage(this);
  };

  return GuaImage;
}();

exports.default = GuaImage;
},{}],"gua_game/GuaScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaScene =
/** @class */
function () {
  function GuaScene(game) {
    this.elements = [];
    this.game = game;
  }

  GuaScene.prototype.draw = function () {
    this.elements.forEach(function (element) {
      element.draw && element.draw();
    });
  };

  GuaScene.prototype.update = function () {
    try {
      this.elements.forEach(function (element) {
        element.update && element.update();
      });
      this.elements = this.elements.filter(function (i) {
        return i.alive;
      });
    } catch (error) {}
  };

  GuaScene.prototype.addElement = function (img) {
    this.elements.push(img);
  };

  return GuaScene;
}();

exports.default = GuaScene;
},{}],"scene/main/Bullet.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage_1 = __importDefault(require("../../gua_game/GuaImage"));

var utils_1 = require("../../gua_game/utils");

var Bullet =
/** @class */
function (_super) {
  __extends(Bullet, _super);

  function Bullet(game, type) {
    var _this = _super.call(this, game, "bullet") || this;

    _this.type = type;
    _this.speed = type === "player" ? -6 : 5;
    return _this;
  }

  Bullet.prototype.update = function () {
    var _this = this;

    this.y += this.speed;
    console.log("butt update");

    if (this.y < 0) {
      this.alive = false;
    }

    if (this.type === "player") {
      // 判断与敌机碰撞
      var scene = this.game.scene;
      var enemies = scene.enemies || [];
      enemies.forEach(function (enemy) {
        if (utils_1.aCollideWithb(_this, enemy)) {
          enemy.boom();
          _this.alive = false;
        }
      }); // 判断与敌方子弹相撞

      var enemyBullets = scene.elements.filter(function (i) {
        return i.name === "bullet" && i.type === "enemy";
      });
      enemyBullets.forEach(function (eb) {
        if (utils_1.aCollideWithb(_this, eb)) {
          eb.alive = false;
          _this.alive = false;
        }
      });
    } else {
      // 判断与玩家相撞
      var scene = this.game.scene;
      var player = scene.player;

      try {
        if (utils_1.aCollideWithb(this, player)) {
          scene.fail();
        }
      } catch (error) {}
    }
  };

  return Bullet;
}(GuaImage_1.default);

exports.default = Bullet;
},{"../../gua_game/GuaImage":"gua_game/GuaImage.ts","../../gua_game/utils":"gua_game/utils.ts"}],"scene/main/Player.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage_1 = __importDefault(require("../../gua_game/GuaImage"));

var Bullet_1 = __importDefault(require("./Bullet"));

var canvasWidth = 400;
var canvasHeight = 600;

var Player =
/** @class */
function (_super) {
  __extends(Player, _super);

  function Player(game) {
    var _this = _super.call(this, game, "player") || this;

    _this.speed = 10;
    _this.w = 39;
    _this.h = 46;
    _this.cooldown = 0;
    return _this;
  }

  Player.prototype.fire = function () {
    if (this.cooldown === 0) {
      this.cooldown = 6;
      var x = this.x + this.w / 2;
      var y = this.y - 5;
      var b = new Bullet_1.default(this.game, "player");
      b.x = x;
      b.y = y;
      this.game.scene.addElement(b);
    }
  };

  Player.prototype.update = function () {
    if (this.cooldown > 0) {
      this.cooldown--;
    }
  };

  Player.prototype.moveLeft = function () {
    this.x -= this.speed;
  };

  Player.prototype.moveRight = function () {
    this.x += this.speed;
  };

  Player.prototype.moveUp = function () {
    this.y -= this.speed;
  };

  Player.prototype.moveDown = function () {
    this.y += this.speed;
  };

  return Player;
}(GuaImage_1.default);

exports.default = Player;
},{"../../gua_game/GuaImage":"gua_game/GuaImage.ts","./Bullet":"scene/main/Bullet.ts"}],"scene/main/GuaParticalSystem.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage_1 = __importDefault(require("../../gua_game/GuaImage"));

var utils_1 = require("../../gua_game/utils");

var GuaParticalSystem =
/** @class */
function () {
  function GuaParticalSystem(game) {
    this.duration = 30;
    this.game = game;
    this.setup();
  }

  GuaParticalSystem.prototype.setup = function () {
    this.x = 150;
    this.y = 150;
    this.numberOfParticles = 20;
    this.particles = [];
    this.alive = true;
  };

  GuaParticalSystem.prototype.update = function () {
    this.duration--;

    if (this.duration < 0) {
      this.particles.forEach(function (i) {
        return i.alive = false;
      });
      this.alive = false;
    } // 添加小火花


    if (this.particles.length < this.numberOfParticles) {
      var p_1 = new GuaParticle(this.game);
      var s = 2;
      var vx = utils_1.randomBetween(-s, s);
      var vy = utils_1.randomBetween(-s, s);
      p_1.init(this.x, this.y, vx, vy);
      this.particles.push(p_1);
    } // 更新小火花


    for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
      var p = _a[_i];
      p.update();
    } // 删除


    this.particles = this.particles.filter(function (p) {
      return p.life > 0;
    });
  };

  GuaParticalSystem.prototype.draw = function () {
    if (this.alive) {
      for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
        var p = _a[_i];
        p.draw();
      }
    }
  };

  return GuaParticalSystem;
}();

var GuaParticle =
/** @class */
function (_super) {
  __extends(GuaParticle, _super);

  function GuaParticle(game) {
    var _this = _super.call(this, game, "fire") || this;

    _this.setup();

    return _this;
  }

  GuaParticle.prototype.setup = function () {
    this.life = 10;
  };

  GuaParticle.prototype.init = function (x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  };

  GuaParticle.prototype.update = function () {
    this.life--;
    this.x += this.vx;
    this.y += this.vy;
    var factor = 0.01;
    this.vx += factor * this.vx;
    this.vy += factor * this.vy;
  };

  return GuaParticle;
}(GuaImage_1.default);

exports.default = GuaParticalSystem;
},{"../../gua_game/GuaImage":"gua_game/GuaImage.ts","../../gua_game/utils":"gua_game/utils.ts"}],"scene/main/Enemy.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage_1 = __importDefault(require("../../gua_game/GuaImage"));

var utils_1 = require("../../gua_game/utils");

var Bullet_1 = __importDefault(require("./Bullet"));

var GuaParticalSystem_1 = __importDefault(require("./GuaParticalSystem"));

var Enemy =
/** @class */
function (_super) {
  __extends(Enemy, _super);

  function Enemy(game) {
    var _this = this;

    var t = utils_1.randomBetween(0, 4);
    _this = _super.call(this, game, "enemy" + t) || this;

    _this.setup();

    return _this;
  }

  Enemy.prototype.setup = function () {
    this.speed = utils_1.randomBetween(1, 3);
    this.x = utils_1.randomBetween(0, 350);
    this.y = -utils_1.randomBetween(0, 200);
    this.cooldown = 0;
  };

  Enemy.prototype.boom = function () {
    console.log("boom");
    var ps = new GuaParticalSystem_1.default(this.game);
    ps.x = this.x;
    ps.y = this.y;
    this.game.scene.addElement(ps);
    this.alive = false;
  };

  Enemy.prototype.fire = function () {
    if (this.cooldown === 0) {
      this.cooldown = 30;
      var x = this.x + this.w / 2;
      var y = this.y + 5;
      var b = new Bullet_1.default(this.game, "enemy");
      b.x = x;
      b.y = y;
      this.game.scene.addElement(b);
    }
  };

  Enemy.prototype.update = function () {
    this.y += this.speed;
    var scene = this.game.scene;
    var player = scene.player;

    if (utils_1.aCollideWithb(this, player)) {
      scene.fail();
    }

    if (this.y + this.h > 0) {
      this.fire();
      this.cooldown--;
    }

    if (this.y > 600) {
      this.setup();
    }
  };

  return Enemy;
}(GuaImage_1.default);

exports.default = Enemy;
},{"../../gua_game/GuaImage":"gua_game/GuaImage.ts","../../gua_game/utils":"gua_game/utils.ts","./Bullet":"scene/main/Bullet.ts","./GuaParticalSystem":"scene/main/GuaParticalSystem.ts"}],"scene/title/scene_title.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var scene_1 = __importDefault(require("../main/scene"));

var GuaScene_1 = __importDefault(require("../../gua_game/GuaScene"));

var SceneTitle =
/** @class */
function (_super) {
  __extends(SceneTitle, _super);

  function SceneTitle(game) {
    var _this = _super.call(this, game) || this;

    game.registerAction("k", function () {
      game.scene = new scene_1.default(game);
    });
    return _this;
  }

  SceneTitle.prototype.draw = function () {
    var game = this.game;
    game.context.font = "16px Arial";
    game.context.fillText("\u6309 k \u5F00\u59CB\u6E38\u620F", 150, 150);
  };

  SceneTitle.prototype.update = function () {};

  return SceneTitle;
}(GuaScene_1.default);

exports.default = SceneTitle;
},{"../main/scene":"scene/main/scene.ts","../../gua_game/GuaScene":"gua_game/GuaScene.ts"}],"scene/end/scene_end.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var scene_title_1 = __importDefault(require("../title/scene_title"));

var GuaScene_1 = __importDefault(require("../../gua_game/GuaScene"));

var SceneEnd =
/** @class */
function (_super) {
  __extends(SceneEnd, _super);

  function SceneEnd(game) {
    var _this = this;

    console.log("sen     end");
    _this = _super.call(this, game) || this;
    game.registerAction("r", function () {
      game.scene = new scene_title_1.default(game);
    });
    return _this;
  }

  SceneEnd.prototype.draw = function () {
    var game = this.game;
    game.context.font = "16px Arial";
    game.context.fillText("\u6E38\u620F\u7ED3\u675F \u6309r\u8FD4\u56DE\u6807\u9898\u754C\u9762", 100, 150);
  };

  SceneEnd.prototype.update = function () {};

  return SceneEnd;
}(GuaScene_1.default);

exports.default = SceneEnd;
},{"../title/scene_title":"scene/title/scene_title.ts","../../gua_game/GuaScene":"gua_game/GuaScene.ts"}],"scene/main/scene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaImage_1 = __importDefault(require("../../gua_game/GuaImage"));

var GuaScene_1 = __importDefault(require("../../gua_game/GuaScene"));

var Player_1 = __importDefault(require("./Player"));

var Enemy_1 = __importDefault(require("./Enemy"));

var scene_end_1 = __importDefault(require("../end/scene_end"));

var Scene =
/** @class */
function (_super) {
  __extends(Scene, _super);

  function Scene(game) {
    var _this = _super.call(this, game) || this;

    _this.enemies = [];

    _this.setup();

    _this.setupInputs();

    return _this;
  }

  Scene.prototype.setup = function () {
    var game = this.game;
    this.bg = new GuaImage_1.default(game, "sky");
    this.numberOfEnemies = 10;
    this.player = new Player_1.default(game);
    this.cloud = new GuaImage_1.default(game, "cloud", 150, 150);
    this.player.x = 100;
    this.player.y = 450;
    this.addElement(this.bg);
    this.addElement(this.cloud);
    this.addEnemies();
    this.addElement(this.player); // const ps = new GuaParticalSystem(game);
    // this.addElement(ps);
  };

  Scene.prototype.setupInputs = function () {
    var g = this.game;
    var p = this.player;
    g.registerAction("a", function () {
      p.moveLeft();
    });
    g.registerAction("d", function () {
      p.moveRight();
    });
    g.registerAction("w", function () {
      p.moveUp();
    });
    g.registerAction("s", function () {
      p.moveDown();
    });
    g.registerAction("j", function () {
      p.fire();
    });
  };

  Scene.prototype.addEnemies = function () {
    var es = [];

    for (var i = 0; i < this.numberOfEnemies; i++) {
      var enemy = new Enemy_1.default(this.game);
      es.push(enemy);
      this.addElement(enemy);
    }

    this.enemies = es;
  }; // draw() {}


  Scene.prototype.update = function () {
    this.cloud.y += 2;

    _super.prototype.update.call(this);

    this.enemies = this.enemies.filter(function (i) {
      return i.alive;
    });
  };

  Scene.prototype.fail = function () {
    this.elements = [];
    this.game.scene = new scene_end_1.default(this.game);
  };

  return Scene;
}(GuaScene_1.default);

exports.default = Scene;
},{"../../gua_game/GuaImage":"gua_game/GuaImage.ts","../../gua_game/GuaScene":"gua_game/GuaScene.ts","./Player":"scene/main/Player.ts","./Enemy":"scene/main/Enemy.ts","../end/scene_end":"scene/end/scene_end.ts"}],"images/sky.png":[function(require,module,exports) {
module.exports = "/sky.b4baf7de.png";
},{}],"images/player.png":[function(require,module,exports) {
module.exports = "/player.0ed8be31.png";
},{}],"images/cloud.png":[function(require,module,exports) {
module.exports = "/cloud.5813540d.png";
},{}],"images/enemy0.png":[function(require,module,exports) {
module.exports = "/enemy0.184a2038.png";
},{}],"images/enemy1.png":[function(require,module,exports) {
module.exports = "/enemy1.ad88a0bb.png";
},{}],"images/enemy2.png":[function(require,module,exports) {
module.exports = "/enemy2.8d3ac044.png";
},{}],"images/enemy3.png":[function(require,module,exports) {
module.exports = "/enemy3.8f357118.png";
},{}],"images/enemy4.png":[function(require,module,exports) {
module.exports = "/enemy4.7be4437a.png";
},{}],"images/bullet.png":[function(require,module,exports) {
module.exports = "/bullet.9dedcb3c.png";
},{}],"images/fire.png":[function(require,module,exports) {
module.exports = "/fire.c12083a8.png";
},{}],"main.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GuaGame_1 = __importDefault(require("./gua_game/GuaGame"));

require("./style.scss");

var utils_1 = require("./gua_game/utils");

var scene_1 = __importDefault(require("./scene/main/scene"));

var log = console.log.bind(this);

function __main() {
  return __awaiter(this, void 0, void 0, function () {
    var images, imgs, game, scene;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          images = {
            sky: require("./images/sky.png"),
            player: require("./images/player.png"),
            cloud: require("./images/cloud.png"),
            enemy0: require("./images/enemy0.png"),
            enemy1: require("./images/enemy1.png"),
            enemy2: require("./images/enemy2.png"),
            enemy3: require("./images/enemy3.png"),
            enemy4: require("./images/enemy4.png"),
            bullet: require("./images/bullet.png"),
            fire: require("./images/fire.png")
          };
          return [4
          /*yield*/
          , utils_1.loadImages(images)];

        case 1:
          imgs = _a.sent();
          game = new GuaGame_1.default(30, imgs);
          scene = new scene_1.default(game);
          game.scene = scene; // let score = 0;
          // window.addEventListener("keydown", e => {
          //   if (e.key === "p") {
          //     game.pause();
          //   }
          // });

          game.run();
          return [2
          /*return*/
          ];
      }
    });
  });
}

__main();
},{"./gua_game/GuaGame":"gua_game/GuaGame.ts","./style.scss":"style.scss","./gua_game/utils":"gua_game/utils.ts","./scene/main/scene":"scene/main/scene.ts","./images/sky.png":"images/sky.png","./images/player.png":"images/player.png","./images/cloud.png":"images/cloud.png","./images/enemy0.png":"images/enemy0.png","./images/enemy1.png":"images/enemy1.png","./images/enemy2.png":"images/enemy2.png","./images/enemy3.png":"images/enemy3.png","./images/enemy4.png":"images/enemy4.png","./images/bullet.png":"images/bullet.png","./images/fire.png":"images/fire.png"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57071" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map