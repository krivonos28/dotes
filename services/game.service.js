import { gameField } from '../field/field.js'
class Service{
  constructor (){
    this.isGameStarted = false;
    this.ws = new WebSocket('ws://localhost:3005');
    this.ws.onopen = () => console.log('----- Online');
    this.ws.onmessage = (req, res) => {
      console.log('onmessage newgame')
      let body = JSON.parse(req.data);
      console.log('---- body', body)
      if (body.type === 'newGame') {
        location.hash = body.gameId;
        this.isGameStarted = true;
        window.sessionStorage.setItem('user-Id', body.userOneId);
        window.sessionStorage.setItem('game-Id', body.gameId);
        window.sessionStorage.setItem('order', 0);
          let node = document.createElement('LI');
          let textNone = document.createTextNode(`<a href="http://localhost:8080/#${body.gameId}">Join game</a>`)
          node.appendChild(textNone);
          document.getElementById('menu').appendChild(node)
      };
      if (body.type === 'joinTheGame') {
        console.log('join the game',body)
        window.sessionStorage.setItem('secondUerid', body.secondUserId);
        window.sessionStorage.setItem('game-Id', body.game.gameId);
        window.sessionStorage.setItem('order', 1)
      }
      if(body.type === 'secondUserIsTaken'){
        console.log('secondUserIsTaken')
      }
      if(body.type === 'nextStep'){
        console.log('new point ', body);
        gameField.setPoints(body.point.coordinateX, body.point.coordinateY, true)
      }
    };
  }
  send(message) {
    console.log('message -----', message)
    this.waitForConnection(() => {
      this.ws.send(message);
     }, 1000);
  }

  waitForConnection(callback, interval){
    if (this.ws.readyState === 1) {
      callback();
    } else {
      setTimeout (() => {
        this.waitForConnection(callback, interval);
    }, interval);
    }
  }
  sendPoint(point) {
      let body = {
          gameId: window.sessionStorage.getItem('game-Id'),
          type: 'nextStep',
          point: point, 
      }
      console.log('----send point', body);
    this.ws.send(JSON.stringify(body));
  }
  joinTheGame(){
    let gameId = window.location.hash.slice(1);
    console.log('joinTheGame')
    let body = {
      type: 'joinTheGame',
      gameId: gameId, // I need to change gmaeId (get id from session storage)
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
    console.log('set ga',body)
    this.ws.send(JSON.stringify(body));
  }

 
};
// const service = new Service();
export const gameService = new Service();
