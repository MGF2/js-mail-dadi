var email = prompt("Inserisci la tua e-mail") ;
var lista = ["email@gmail.com", "email1@gmail.com","email2@gmail.com","email3@gmail.com","email4@gmail.com","email5@gmail.com","email6@gmail.com"];
var trovata = false;

for (var i = 0; i < lista.length; i++) {
  if (lista[i] == email) {

    trovata = true;

  }

}

if ( trovata == true ) {
  alert("Mail trovata! Accesso consentito");
} else {
  alert("Mail non trovata!")
}
