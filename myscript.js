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
var numeriUtenteGiusti = [];
var numeriUtenteErrati = [];
var secondi = 10000;   //30000

// APRO UN CICLO FOR PER GENERARE 5 NUMERI RANDOM E LI PUSHO DENTRO ALL'ARRAY 
for (var i = 0; i < 5; i++) {
    var element = Math.floor(Math.random() * 100);
//INSERISCO I NUMERI RANDOM NELL'ARRAY NUMERI GENERATI
    numeriGenerati.push(element);
}
// VERIFICO I NUMERI GENERATI
console.log(numeriGenerati);
// CREO UN ALERT CON TUTTI I NUMERI
alert(numeriGenerati);


// CREO UN TIMER DI 30 SECONDI CON SE UNA FUNZIONE

setTimeout(function () {
//CHIEDO CON UN PROMPT CON I NUMERI DA INSERIRE DANDO PER SCONTATO CHE NON INSERISCA COSE DIVERSE DA NUMERI
    var numeriUtenteIns = prompt("Inserisci tutti i numeri visti precedentemente mettendoli separati da una virgola...").split(",");

// APRO UN CICLO FOR PER CONVERTIRE LE STRINGHE IN NUMERI
    for (var j = 0; j < numeriUtenteIns.length; j++) {
        var numeriConvertiti = parseInt(numeriUtenteIns[j]);
        console.log(numeriConvertiti);
        numeriUtente.push(numeriConvertiti);
    }

    console.log(numeriUtente);

//APRO UN CICLO FOR PER COMPARARE DUE ARRAY 
    for (var y = 0; y < numeriGenerati.length; y++) {
        var elementTwo = numeriGenerati[y];

        if (numeriUtente.includes(elementTwo)) {
            numeriUtenteGiusti.push(elementTwo);
        } else {
            numeriUtenteErrati.push(elementTwo)

        }

    }
// RIPRODUCO IN CONSOLE I NUMERI PRESI E NON PRESI
    console.log("I numeri azzeccati sono: " + numeriUtenteGiusti);
    console.log("I numeri non inseriti sono: " + numeriUtenteErrati);

  

}, secondi);





//













