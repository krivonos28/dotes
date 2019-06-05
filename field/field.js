import { FieldCanvas } from './field.canvas.js'; 
import field from './field.arr.js'

field[0][9] = 3;
console.log('--- field', field)
console.log('--- field', field[0][10])

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
    console.log(coordinateX, coordinateY);
  this.dote.coordinateX = (coordinateX - Math.trunc(coordinateX)) < 0.3
    ? Math.trunc(coordinateX)
    : Math.trunc(coordinateX) + 1;
  this.dote.coordinateY = (coordinateY - Math.trunc(coordinateY)) < 0.3
    ? Math.trunc(coordinateY)
    : Math.trunc(coordinateY) + 1;
  console.log('-=', this.dote);
  FieldCanvas.createPoint(this.dote);
  }

};
export const gameField = new Field();
