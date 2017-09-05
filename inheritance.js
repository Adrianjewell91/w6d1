// Function.prototype.inherits = function inherits (parent) {
//   function Surrogate () {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };



Function.prototype.inherits = function inherits (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.moves = function moves() {
  console.log("i'm moving!");
};

Asteroid.prototype.flies = function flies(speed) {
  console.log(`I'm flying at ${speed} meters per second.`);
};

Ship.prototype.shoots = function shoots(weapon) {
  console.log(`I'm shooting ${weapon}!`);
};

const movingObject = new MovingObject();

const asteriod = new Asteroid();

const ship = new Ship();
