import { FieldCanvas } from './field.canvas.js';
import field from './field.arr.js';
import { service } from '../services/game.service.js';



class Field {
  constructor(){
    this.dote = {
      owner: '',
      player: '',
      coordinateX: '',
      coordinateY: '',
    };
  }
  setPoints(coordinateX, coordinateY) {
    let point = {};
    point.coordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3
    ? Math.trunc(coordinateX)
    : Math.trunc(coordinateX) + 1;
    point.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3
    ? Math.trunc(coordinateY)
    : Math.trunc(coordinateY) + 1;
      if (!this.getPoint(point)) {
        FieldCanvas.createPoint(point);
        service.sendPoint(point.coordinateX);
        field[point.coordinateX][point.coordinateY] = point;
      }
  }

    getPoint(point) {
     return field[point.coordinateX] ? field[point.coordinateX][point.coordinateY] : false;
    }
};
export const gameField = new Field();
