import { FieldCanvas } from './field/field.canvas.js';
import { gameField } from './field/field.js';
import { gameService } from './services/game.service.js';

console.log(window.sessionStorage.getItem('user-Id'));
console.log(location.hash.search(/gameId/i));

if (location.hash.search(/gameId/i) !== -1 && !window.sessionStorage.getItem('user-Id')) {
  console.log('location is good -- join the game')
  addPointListeners();
  gameService.joinTheGame();
  FieldCanvas.createField();
}

document.getElementById('newGame').addEventListener('click', () => {
  console.log('new game');
  FieldCanvas.createField();
  gameService.setGame();
  addPointListeners();
});

function addPointListeners() {
document.getElementById('field').addEventListener('click', (e) => {
  console.log('======');
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
  
