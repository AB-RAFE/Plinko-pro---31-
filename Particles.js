class Particles {
    constructor(x,y,radius) {
      var options = {
          restitution:0.4,
          friction:0
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      rotate(angle);
      fill(this.color);
      noStroke();
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };