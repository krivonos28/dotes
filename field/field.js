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
    console.log(coordinateX, coordinateY);
    console.log('0000---', field);
    point.ctoordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3
    ? Math.trunc(coordinateX)
    : Math.trunc(coordinateX) + 1;
    point.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3
    ? Math.trunc(coordinateY)
    : Math.trunc(coordinateY) + 1;
    console.log('-=', point);
      if (this.getPoint(point.coordinateX, point.coordinateY)) {
        FieldCanvas.createPoint(point);
        service.sendPoint(point);
        field[point.coordinateX][point.coordinateY] = true;
        console.log('====== point is created');
      }
  }

    getPoint(coordinateX, coordinateY) {
      console.log('get points is called');
     return field[coordinateX][coordinateY];
    }
};
export const gameField = new Field();
