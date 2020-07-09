var giocatore = Math.floor(Math.random()*6)+1;
var computer = Math.floor(Math.random()*6)+1;
var vincitore;


if (giocatore > computer) {
  vincitore =  "Hai vinto!";
} else if (giocatore == computer) {
  vincitore =  "Pareggio!";
} else {
  vincitore =  "Hai perso!";
}

document.getElementById("vincitore") .innerHTML = vincitore;
document.getElementById("tu") .innerHTML = "Tu:" + " " + giocatore;
document.getElementById("pc") .innerHTML = "Computer:" + " " + computer;

//CON DUE DADI
var gdado1 = Math.floor(Math.random()*6)+1;
var gdado2 = Math.floor(Math.random()*6)+1;
var giocatore = gdado1+gdado2;
var cdado1 = Math.floor(Math.random()*6)+1;
var cdado2 = Math.floor(Math.random()*6)+1;
var computer = cdado1+cdado2;
var vincitore;


if (giocatore > computer) {
  vincitore =  "Hai vinto!";
} else if (giocatore == computer) {
  vincitore =  "Pareggio!";
} else {
  vincitore =  "Hai perso!";
}

document.getElementById("vincitore2") .innerHTML = vincitore;
document.getElementById("tu2") .innerHTML = "Tu:" + " " + gdado1 + " , " + gdado2 + " = " + giocatore;
document.getElementById("pc2") .innerHTML = "Computer:" + " " + cdado1 + " , " + cdado2 + " = " + computer;
