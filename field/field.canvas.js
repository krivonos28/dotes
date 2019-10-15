class FieldCanvasClass {
  constructor(){
    this.isFieldCreated = false;
    this.c_canvas = document.getElementById("field");
    this.context = this.c_canvas.getContext("2d");
  }
  createField = () => {
    if (!this.isFieldCreated){
    const step = 15;
    const colorLine = '#888';
    this.context.strokeStyle = colorLine;
    for (let x = 0; x < 600; x += step) {
      this.context.lineWidth = '1';
      this.context.moveTo(x + 0.5, 0);
      this.context.lineTo(x + 0.5, 600);
      this.context.stroke();
    }
    for (let y = 0; y < 600; y += step) {
      this.context.lineWidth = '1';
      this.context.moveTo(0, y + 0.5);
      this.context.lineTo(600, y + 0.5);
      this.context.stroke();
    }
    this.isFieldCreated = true;
    console.log('--- field is created')
  }
  }

  createPoint(dote){
    this.context.beginPath();
      this.context.strokeStyle = 'blue';
      this.context.fillStyle = 'blue';
      this.context.arc(dote.coordinateX*15+0.5,dote.coordinateY*15+0.5, 4, 0, 2 * Math.PI, false);
      this.context.stroke();
      this.context.fill();
    console.log('point is created!!!')
  }
}
export const FieldCanvas = new FieldCanvasClass();
