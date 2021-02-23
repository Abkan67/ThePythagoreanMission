function Endpoint(x,y) {
  this.x=x;this.y=y;this.rad=3;
  this.update = function() {this.draw();}
  this.draw = function() {c.fillStyle="#FF0"; c.beginPath(); c.arc(this.x,this.y,this.rad,0,Math.PI*2); c.fill();}
}
