global.MovingObject = require("./moving_object");
global.Util = require("./util");
global.Asteroid = require('./asteroid');

function Game () {
  this.DIM_X = 800;
  this.DIM_Y = 800;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = this.addAsteroids();
}


Game.prototype.addAsteroids = function addAsteroids() {
  const asteroids = [];
  let a;
  while (asteroids.length < this.NUM_ASTEROIDS) {
    a = new Asteroid( {pos: this.randomPosition()});
    asteroids.push(a);
  }
  return asteroids;
};

Game.prototype.randomPosition = function randomPosition() {
  return [ getRandomInt(0,800), getRandomInt(0,800) ];
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect();
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function moveObjects () {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

window.asteroid = new Asteroid({ pos: [30, 30] });

window.g = new Game();


module.exports = Game;
