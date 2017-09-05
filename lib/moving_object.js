function MovingObject (options) {
  this.pos = options[`pos`];
  this.vel = options[`vel`];
  this.radius = options[`radius`] || defaults[0];
  this.color = options[`color`] || defaults[1];
}

// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};



MovingObject.prototype.move = function move() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

const defaults = [5,"blue"];


module.exports = MovingObject;
