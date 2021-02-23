var hero = {
  x:150,
  y:150,
  rad:5,
  dy: 0,
  dx: 0,
  dirx:0,
  diry:0,
  friction:0.97,
  acceleration: 0.5,
  speed:0.1,
  changeTrajectory: function(){
    //Orthocenter/Altitude
    /*var slope = (endpointFALSE.x-endpointTRUE.x)/(endpointTRUE.y-endpointFALSE.y);
    angle=getAngle(this.x+1,this.y-slope, this.x,this.y);
    this.dx=angle.x; this.dy=angle.y;*/

    // Centroid/Median
    angle=getAngle((endpointTRUE.x+endpointFALSE.x)/2, (endpointTRUE.y+endpointFALSE.y)/2, this.x,this.y);
      this.dirx=angle.x; this.diry=angle.y;
    },
  update: function(){this.move();this.draw(); this.offScreen();},
  move: function() {
    this.dx*=this.friction; this.dy*=this.friction;
    this.dx+=this.dirx*this.acceleration; this.dy+=this.diry*this.acceleration;
    this.x+=this.dx*this.speed; this.y+=this.dy*this.speed; },
  draw: function(){c.fillStyle="#000"; c.beginPath(); c.arc(this.x,this.y,this.rad,0,Math.PI*2); c.fill();},
  offScreen: function() {if(this.x<0||this.x>300||this.y>300||this.y<0){loseGame();}}
}
