/*  -----------------------------------------------------------------------------------------------
    Scrivere un programma che chieda all’utente:
    - Il numero di chilometri da percorrere
    - Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
--------------------------------------------------------------------------------------------------- */

// Creato la variabile btn
let btn = document.querySelector('button');

// Funzione per calcolare il prezzo del biglietto
const prezzo = function() {
    let km = document.getElementById('km').value; // Variabile dei km
    let eta = document.getElementById('eta').value; // Variabile dell'età

    // Variabili per stampare poi il risultato nell'html
    let titoloPrezzo = document.querySelector('.title');
    let prezzoFinale = document.querySelector('.prezzo');
    let scontoFinale = document.querySelector('.sconto');
    let prezzoBiglietto = km * 0.21;

    // Istruzione if per calcolare se applicare lo sconto o meno
    if(eta == '' || km == '') { // Prima istruzione per vedere se l'utente inserisce i dati giusti
        titoloPrezzo.innerHTML = 'Devi inserire correttamente tutti i dati';
        
    } else if(eta > 65) { // Seconda istruzione per calcolare lo sconto in base all'età (40% over 65)
        prezzoBiglietto = prezzoBiglietto * 0.60;

        titoloPrezzo.innerHTML = 'Il prezzo del tuo biglietto è:'
        prezzoFinale.innerHTML = prezzoBiglietto.toFixed(2) + '&euro;';
        scontoFinale.innerHTML = '&Egrave; stato applicato uno sconto del 40%';

    } else if(eta < 18 ) { // Terza istruzione per calcolare lo sconto in base all'età (20% minorenni)
        prezzoBiglietto = prezzoBiglietto * 0.80;

        titoloPrezzo.innerHTML = 'Il prezzo del tuo biglietto è:'
        prezzoFinale.innerHTML = prezzoBiglietto.toFixed(2) + '&euro;';
        scontoFinale.innerHTML = '&Egrave; stato applicato uno sconto del 20%';

    } else { // Ultima istruzione per calcolare lo sconto in base all'età (in questo caso non si applica)
        prezzoBiglietto = prezzoBiglietto;

        titoloPrezzo.innerHTML = 'Il prezzo del tuo biglietto è:'
        prezzoFinale.innerHTML = prezzoBiglietto.toFixed(2) + '&euro;';
        scontoFinale.innerHTML = 'Non è stato applicato nessuno sconto';
    }

    // Azioni per svuotare le caselle di input
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
}
btn.addEventListener('click', prezzo); // Azione on click