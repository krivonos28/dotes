let field =[
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
  [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
];
field[0][9] = 3;
console.log('--- field', field)
console.log('--- field', field[0][10])

const c_canvas = document.getElementById("field");
const context = c_canvas.getContext("2d");
const step = 15;
const colorLine = '#888';
context.strokeStyle = colorLine;

for (let x = 0; x < 600; x += step) {
  context.lineWidth = '1';
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, 600);
  context.stroke();
}
for (let y = 0; y < 600; y += step) {
  context.lineWidth = '1';
  context.moveTo(0, y + 0.5);
  context.lineTo(600, y + 0.5);
  context.stroke();
}

context.beginPath();
const pi = Math.PI;
context.arc(15.5,15.5, 4, 0, 2*pi, false);
context.stroke();


document.getElementById('field').addEventListener('click', (e) => {
  console.log(e);
  let preliminaryCoordinateX = e.offsetX / 15;
  let preliminaryCoordinateY = e.offsetY / 15;
  if (((preliminaryCoordinateX - Math.trunc(preliminaryCoordinateX) < 0.3)
    || (preliminaryCoordinateX - Math.trunc(preliminaryCoordinateX) > 0.7))
    && ((preliminaryCoordinateY - Math.trunc(preliminaryCoordinateY) < 0.3)
      || (preliminaryCoordinateY - Math.trunc(preliminaryCoordinateY) > 0.7))) {
    console.log('Click is valid');
    setParameters(preliminaryCoordinateX, preliminaryCoordinateY);
  };
});

setParameters = (coordinateX, coordinateY) => {
  console.log(coordinateX, coordinateY);
  dote.coordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3 
    ? Math.trunc(coordinateX)
    : Math.trunc(coordinateX) + 1;
  dote.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3
    ? Math.trunc(coordinateY)
    : Math.trunc(coordinateY) + 1;
  console.log('-=', dote);
  createDote();
};
createDote = () => {
  context.beginPath();
  context.strokeStyle = 'green';
  context.fillStyle = 'green';
  context.arc(dote.coordinateX*15+0.5,dote.coordinateY*15+0.5, 4, 0, 2*pi, false);
  context.stroke();
  context.fill();
}

let dote = {
  owner: '',
  player: '',
  coordinateX: '',
  coordinateY: '',
};
