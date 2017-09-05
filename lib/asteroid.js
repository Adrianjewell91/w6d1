const Util = require("./util");
const MovingObject = require("./moving_object");

function Asteroid (options) {
  MovingObject.call( this, { pos: options[`pos`], vel: Util.randomVec(3) } );
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;


// //tests s
// mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
//
// mo_default = new MovingObject(
//   { pos: [30, 30], vel: [10, 10]}
// );
//
// asteroid = new Asteroid({ pos: [30, 30] });
