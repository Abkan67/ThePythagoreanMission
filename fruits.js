var fruit = {
  x:0,y:0,rad:4,
  setPosition: function() {
    this.x=Math.random()*250+25;
    this.y=Math.random()*250+25;
  },
  update: function(){this.isColliding(); this.draw();},
  isColliding: function(){
    if(cirColliding(this.x,this.y,this.rad,hero.x,hero.y,hero.rad)){hero.speed*=1.1;score++; this.setPosition();}
  },
  draw: function(){c.fillStyle="#7B0"; c.beginPath(); c.arc(this.x,this.y,this.rad,0,Math.PI*2); c.fill();
  c.beginPath(); c.moveTo(this.x,this.y-this.rad/3); c.lineTo(this.x-2.5, this.y-this.rad/3-6); c.stroke();
}
}
