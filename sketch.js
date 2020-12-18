//Creating the variables:-
var canvas,database;
var gameState = 0;
var playerCount;
var form;
var player , gameState;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);

game = new Game();
game.getState();
game.start();

}

function draw(){
  background(255);
}
