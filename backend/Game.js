import { json } from "express";

class Game {
  constructor(player1,player2){
    this.players=[player1,player2];
    this.squares=Array(9).fill(null);
    this.currentPlayer="X";
    this.init();
    this.history=[Array(9).fill(null)];
  }
 init(){
  this.players[0].send("You are player 1");
  this.players[1].send("You are player 2");
  this.players.forEach(player=>this.makeMove(player));
 }
 makeMove(playerSocket){
  playerSocket.on('message',(data)=>{
    const input=JSON.parse(data);
    if(this.squares[input.place]||input.player!==this.currentPlayer){
      return;
    }
   this.squares[input.place]=this.currentPlayer;
   const currentStatus=[...this.squares ]
   this.history.push(currentStatus);
   
   if(this.checkWinner()){
    this.endGame(this.currentPlayer);
   }
   else if(this.squares.every(square=>square)){
    this.endGame(null);
   }else{
    this.currentPlayer=this.currentPlayer==='X'?'O':'X';
    this.updatePlayers();
   }
  });
 }
 checkWinner(){
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
      return true;
    }
  }
  return false;
 }
 updatePlayers(){
  this.players.forEach(player=>{
    player.send(JSON.stringify({squares:this.squares,currentPlayer:this.currentPlayer}))
  })
 }
 endGame(){
  const message = winner ? `Player ${winner} wins!` : "It's a draw!";
  this.players.forEach(player => {
    player.send(JSON.stringify({
      message,
      squares: this.squares,
    }));
  });
  this.reset();

 }
 reset() {
  this.squares = Array(9).fill(null);
  this.currentPlayer = 'X';
  this.updatePlayers();
}

}
var pendingUser=[];
export function addUser(ws){
  if(pendingUser.length===0){
    pendingUser.push(ws);
    ws.send("Waiting for user to join")
  }
  else{
    const player1=pendingUser.pop();
    const player2=ws;
    new Game(player1,player2);
  }
}