import { FieldCanvas } from './field/field.canvas.js';
import { gameField } from './field/field.js';
import { service } from './services/game.service.js';
// confirm close wondow
// window.onbeforeunload = (e) => {
//   e.returnValue = '------';
//   return 'goodbay';
// }
console.log(window.sessionStorage.getItem('user-Id'));
if (location.hash.search(/gameId/i) !== -1 && !window.sessionStorage.getItem('user-Id')) {
  service.joinTheGame();
}

document.getElementById('newGame').addEventListener('click', () => {
  console.log('new game');
  service.setGame();
  drowField();
  FieldCanvas.createField();
});

function drowField() {
document.getElementById('field').addEventListener('click', (e) => {
  let preliminaryCoordinateX = e.offsetX / 15;
  let preliminaryCoordinateY = e.offsetY / 15;
  if (((preliminaryCoordinateX - Math.trunc(preliminaryCoordinateX) < 0.3)
    || (preliminaryCoordinateX - Math.trunc(preliminaryCoordinateX) > 0.7))
    && ((preliminaryCoordinateY - Math.trunc(preliminaryCoordinateY) < 0.3)
      || (preliminaryCoordinateY - Math.trunc(preliminaryCoordinateY) > 0.7))) {
    gameField.setPoints(preliminaryCoordinateX, preliminaryCoordinateY);
    }
});
}
  