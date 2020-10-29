$(document).ready(function() {
    var numeri = [];

    for (var i = 0; i < 5; i++) {
        var numeroCasuale = Math.floor(Math.random() * 100) + 1;;

        if (numeri.includes(numeroCasuale) == false) {
            numeri.push(numeroCasuale);
        }
    }

    var tempoRimanente = 30;

    tempAlert('Simon dice: "Ricordati questi numeri": '+numeri, tempoRimanente * 1000);

    var numeriIndovinati = [];

    var punteggio = 0;

    for (var i = 0; i < 5; i++) {
        var numeroUtente = prompt('Inserisci un numero di quelli che sono apparsi a schermo');
        if (numeri.includes(numeroUtente)) {
            punteggio++;
            numeriIndovinati.push(numeroUtente);
        }
    }

    $('esito').append("<p>Hai fatto "+punteggio+" punti e i numeri che hai indovinato sono: "+numeriIndovinati+"</p>");

    function tempAlert(contenuto, durata) {
        var blocco = document.createElement("div");
        blocco.setAttribute("style","position:absolute;top:40%;left:20%;");
        blocco.innerHTML = contenuto;
        setTimeout(function() {
            blocco.parentNode.removeChild(blocco);
        },durata);
        document.body.appendChild(blocco);
    }
});
