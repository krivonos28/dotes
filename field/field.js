import { FieldCanvas } from './field.canvas.js';
import field from './field.arr.js';
import { gameService } from '../services/game.service.js';

class Field {
  constructor(){
    this.dote = {
      owner: '',
      player: '',
      coordinateX: '',
      coordinateY: '',
    };
  };
  setPoints(coordinateX, coordinateY, isOtherUser = false) {
    let point = {};
    let user = window.sessionStorage.getItem('order');
    console.log("-----color user", user)
    let color = ((user === '1' &&  isOtherUser)||(user === '0' && !isOtherUser)) ? "red" : "blue";
    point.coordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3
    ? Math.trunc(coordinateX)
    : Math.trunc(coordinateX) + 1;
    point.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3
    ? Math.trunc(coordinateY)
    : Math.trunc(coordinateY) + 1;
      if (!this.getPoint(point)) {
        FieldCanvas.createPoint(point, color);
        field[point.coordinateX][point.coordinateY] = point;
        !isOtherUser && gameService.sendPoint(point);
      }
  }

    getPoint(point) {
     return field[point.coordinateX] ? field[point.coordinateX][point.coordinateY] : false;
    }
};
export const gameField = new Field();
