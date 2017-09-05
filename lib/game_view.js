global.Game = require(`./game`);

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function start () {
  setInterval(function () {
    this.game.moveObjects();
    this.game.draw();
  }.bind(this), 20);
};
