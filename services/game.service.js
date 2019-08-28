class Service {
  constructor (){
    this.ws = new WebSocket('ws://localhost:3005');
    this.ws.onopen = () => console.log('----- Online');
    this.ws.onmessage = (req) => {
      let body = JSON.parse(req.data);
      if (body.type === 'newGame') {
        location.hash = body.gameId;
        window.sessionStorage.setItem('user-Id', body.userOneId);
      };
      if (body.type === 'joinTheGame') {
        console.log('d----- body join the game', body);
        window.sessionStorage.setItem('user-two-id', body.userTowId);
      }
    };
  }
  send(message, callback) {
    this.waitForConnection(() => {
      this.ws.send(message);
     }, 1000);
  }

  waitForConnection(callback, interval){
    if (this.ws.readyState === 1) {
      callback();
    } else {
      let that = this;
      setTimeout (() => {
        this.waitForConnection(callback, interval);
    }, interval);
    }
  }
  sendPoint(point) {
    this.ws.send(JSON.stringify(point));
  }
  joinTheGame(){
    let body = {
      type: 'joinTheGame',
      gameId: '123456789',
    };
    try {
      console.log('d---=======');
      this.send(JSON.stringify(body));
    } catch(error) {
      // this.ws = new WebSocket('ws://localhost:3006');
      console.error('error-----', error);
    }
  }

  setGame(){
    let body = {
      type: 'newGame',
      body: 'userId',
      location: location.pathname,
    };
    this.ws.send(JSON.stringify(body));
  }

 
};
// const service = new Service();
export const service = new Service();
