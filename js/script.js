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
