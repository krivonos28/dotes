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
  dote.coordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3 ? Math.trunc(coordinateX) : Math.trunc(coordinateX) + 1;
  dote.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3 ? Math.trunc(coordinateY) : Math.trunc(coordinateY) + 1;
  console.log('-=', dote)
};

let dote = {
  owner: '',
  player: '',
  coordinateX: '',
  coordinateY: '',
};
