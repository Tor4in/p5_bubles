let points = []
function setup() {
  createCanvas(windowWidth, windowHeight);
	for(let i = 0; i<20;i++){
		orbPush()
	}
}
let lenght = (x1, x2, y1, y2)=>{
  return (Math.sqrt(Math.pow(x1 - x2, 2)+Math.pow(y1-y2, 2)))
}
function draw() {
  background(255);
  
  noStroke()
  fill(0, 150)
  // circle(mouseX, mouseY, 100)
  for(let e of points){
		fill(e.color1,e.color2,e.color3, map(lenght(e.x, mouseX, e.y, mouseY), 0, 400, 200, 180))
    circle(e.x, e.y, e.radius*2)
    for(let j of points){
      if(e==j) {}
      if(lenght(e.x, mouseX, e.y, mouseY) < e.radius*1.5){
				e.vell.x -= (mouseX - e.x) * 0.0001
				e.vell.y -= (mouseY - e.y) * 0.0001
      }
      if(lenght(e.x, j.x, e.y, j.y) < e.radius + j.radius){
				j.vell.x += (j.x - e.x) * (0.000005*e.radius)
				j.vell.y += (j.y - e.y) * (0.000005*e.radius)
			}else{
				e.vell.x *=0.99995
				e.vell.y *=0.99995
			}
    }
    if(e.x<width-e.radius && e.x > e.radius){
      e.x += e.vell.x
    }else {
      e.vell.x *= -1
      e.x += e.vell.x
    }
    if(e.y<height-e.radius && e.y > e.radius){
      e.y += e.vell.y
    }else {
      e.vell.y *= -1
      e.y += e.vell.y
    } 
		
  }
}
let orbPush = ()=>{
	points.push({
		color1: random(80, 255),
		color2: random(80,255),
		color3: random(80,255),
    x: random(180, width-180), 
    y: random(180, height-180), 
    vell:{
      x: (random(0.2, .8) *  Math.pow(-1, Math.round(Math.random(2)))),
      y: (random(0.2, .8) * Math.pow(-1, Math.round(Math.random(2))))
    },
	radius: random(50, 100)})
}
function mousePressed(){
  orbPush()
}