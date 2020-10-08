
function setup() {
createCanvas(600, 600);

  for (let i = 0; i < halfCircles.length; i++){
    halfCirclePosition[i] = new Watermelon(halfCircles[i]);
  }
  for (let i = 0; i < seeds.length; i++){
    seedsPosition[i] = new Seed(seeds[i]);
  }
  for (let i = 0; i < shapes01.length; i++){
  shapeArray01[i] = new MovedShape(shapes01[i]);
}
for (let i = 0; i < shapes.length; i++) {
  shapeArray[i] = new Movedshapes(shapes[i]);
}
for (let i = 0; i < circleslist.length; i++) {
  circleArray[i] = new Circle(circleslist[i]);
}
}

function draw() {

  background(0);
  for (i = 0; i < halfCircles.length; i++){
    push();
    halfCirclePosition[i].drawHalfCircle();
    halfCirclePosition[i].traceObjectGreen();
    halfCirclePosition[i].moveX();
    halfCirclePosition[i].moveY();
    pop();
  }

  for (i = 0; i < seeds.length; i++){
    push();
    seedsPosition[i].drawSeed();
    seedsPosition[i].traceObjectPink();
    seedsPosition[i].moveX();
    seedsPosition[i].moveY();
    pop();
  }
  for (let i = 0; i < shapes01.length; i++) {
  shapeArray01[i].drawBox();
  shapeArray01[i].drawCircle();
  shapeArray01[i].moveShape();
  shapeArray01[i].traceObject();
}
for (let i = 0; i < shapes.length; i++) {
  shapeArray[i].drawBox();
  shapeArray[i].moveRect();
  shapeArray[i].trackingLines();


}
for (let i = 0; i < circleslist.length; i++) {
  circleArray[i].drawCircle();
  circleArray[i].moveCircle();
  circleArray[i].trackingLines();
}
}
