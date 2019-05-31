const c_canvas = document.getElementById("field");
const context = c_canvas.getContext("2d");
const step = 15;
const colorLine = '#888';

for (let x = 0; x < 600; x += step) {
  context.moveTo(x, 0);
  context.lineTo(x, 600);
}

for (let y = 0; y < 600; y += step) {
  context.moveTo(0, y);
  context.lineTo(600, y);
}

context.strokeStyle = colorLine;
context.stroke();

document.getElementById('field').addEventListener('click', (e)=>{
  console.log(e);
  console.log(document.getElementById('field').offsetTop);
  console.log(document.getElementById('field').offsetLeft);

})

setCoordinateX = (coordinate) =>{

}
