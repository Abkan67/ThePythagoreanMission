var score=0;
var gameState = true;
var xPos; var yPos;
const canvas = document.getElementById("canvas");
canvas.height = 300;
canvas.width = 300;
const c = canvas.getContext("2d");
cooldown=0;
var whichEndpointChange = true;
const endpointTRUE = new Endpoint(0,0);
const endpointFALSE = new Endpoint(300,300);
canvas.addEventListener("click", changeEndpoint);
canvas.addEventListener("mousemove", getMousePos);
function getAngle(x1,y1,x2,y2) {
    var angle = Math.atan2(y1-y2,x1-x2);
    var xangle = Math.cos(angle);
    var yangle = Math.sin(angle);
    return {x:xangle, y:yangle}
}
function cirColliding(x1,y1,r1,x2,y2,r2){
  var distanceX=x1-x2; var distanceY=y1-y2;
  var distance = Math.hypot(distanceX, distanceY);
  return distance <= r1+r2;
}
function changeEndpoint(e) {
  if(cooldown<=0){
  if(whichEndpointChange) {endpointTRUE.x=xPos; endpointTRUE.y=yPos; whichEndpointChange=false;}
  else {endpointFALSE.x=xPos; endpointFALSE.y=yPos; whichEndpointChange=true;}
  hero.changeTrajectory(); cooldown=15;}
}
function getMousePos(e) {
  yPos=(e.y*300)/657; xPos=(e.x*600)/1366;
}
function loseGame(){
  gameState=false;
}
function setup() {
  fruit.setPosition();
  animate();
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,300,300);
  if(gameState){
  endpointTRUE.update();
  endpointFALSE.update();
  hero.update();
  fruit.update()
  c.fillStyle="red"; c.font="15px Arial"; c.fillText("Score: "+score, 230, 20);
  cooldown--;
} else {
  c.fillStyle="yellow"; c.font="40px Arial"; c.fillText("Game Over", 50, 100);
  c.font="20px Arial"; c.fillText("Score: "+score,75,150);
}
}
setup();
