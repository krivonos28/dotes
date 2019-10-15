class Service {
  constructor (){
    this.isGameStarted = false;
    this.ws = new WebSocket('ws://localhost:3005');
    this.ws.onopen = () => console.log('----- Online');
    this.ws.onmessage = (req, res) => {
      console.log('onmessage newgame')
      let body = JSON.parse(req.data);
      console.log('body type', body.type)
      if(body.type === 'hello') {
        console.log(body)
      }
      if (body.type === 'newGame') {
        location.hash = body.gameId;
        this.isGameStarted = true;
        window.sessionStorage.setItem('user-Id', body.userOneId);
      };
      if (body.type === 'joinTheGame') {
        console.log('d----- body join the game', body);
        window.sessionStorage.setItem('secondUerid', body.userTowId);
      }
      if(body.type === 'secondUserIsTaken'){
        console.log('secondUserIsTaken')
      }
      if(body.type === 'newPoint'){
        console.log('new point ', body);
      }
    };
  }
  send(message, callback) {
    console.log('message -----', message)
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
      let body = {
          type: 'nextStep',
          point: point, 
      }
    this.ws.send(JSON.stringify(body));
  }
  joinTheGame(){
    console.log('joinTheGame')
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
    console.log('setGame')
    let body = {
      type: 'newGame',
      body: 'userId',
      location: location.pathname,
    };
    console.log('set ga',body)
    this.ws.send(JSON.stringify(body));
  }

 
};
// const service = new Service();
export const gameService = new Service();
