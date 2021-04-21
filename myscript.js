// Consegna
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// SCRIVO 3 ARRAY PER TUTTI I NUMERI
var numeriGenerati = [];
var numeriUtente = [];
var numeriUtenteErrati = [];
var secondi = 10000;   //30000

// APRO UN CICLO FOR PER GENERARE 5 NUMERI RANDOM E LI PUSHO DENTRO ALL'ARRAY 
for (var i = 0; i < 5; i++) {
    var element = 5[i];
    element = Math.floor(Math.random() * 100);
    numeriGenerati.push(element);
}
// VERIFICO I NUMERI GENERATI
console.log(numeriGenerati);
// CREO UN ALERT CON TUTTI I NUMERI
alert(numeriGenerati);




setTimeout(function(){
var numeriUtenteIns = parseInt(prompt("Inserisci tutti i numeri visti precedentemente..."));
console.log(numeriUtenteIns)
// if (numeriDigitati === numeriGenerati){
//     numeriUtente.push(numeriDigitati);
// }else if(numeriDigitati !== numeriGenerati) {
//     numeriUtenteErrati.push(numeriDigitati)
// }
// console.log(numeriUtenteErrati);
// console.log(numeriUtente);

}, secondi);




















