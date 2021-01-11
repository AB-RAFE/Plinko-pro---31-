class Plinko {
  constructor(x, y) {
    var options = {
      friction: 0,
      restitution: 1,
      isStatic: true
    }
    this.radius = 10;
    this.body = Bodies.circle(x, y, this.radius, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    fill(0, 200, 0);
    noStroke();
    ellipse(pos.x, pos.y, this.radius);
    pop();
  }
};