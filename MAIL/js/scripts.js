var autorizzati = ["andrea@gmail.com", "francesco@libero.it", "mario@virgilio.it", "roberto@mail.com"];
var email = prompt("Inserisci il tuo nome per verificare la tua autorizzazione");
var trovato = false;
for (var i = 0; i < autorizzati.length; i++){
    if  (autorizzati[i] == email){
       trovato = true;
    }
}
if (trovato == true) {
    alert("Sei stato autorizzato ad accedere");
} else{
    alert("Non sei stato autorizzato ad accedere");
}