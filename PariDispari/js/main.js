let evenOdd = '';
let userNumber;

while(evenOdd.toLowerCase() != 'pari' && evenOdd.toLowerCase() != 'dispari'){
    evenOdd = prompt('Scrivi "pari" o "dispari" per decidere su quale dei due vuoi scommettere');
}

console.log("L'utente ha scommesso su: " + evenOdd);

while(isNaN(userNumber) || ((userNumber < 1) || (userNumber > 5))){
    userNumber = prompt('Scrivi un numero da 1 a 5');
}

console.log("Il numero scelto dall'utente è: " + userNumber);

const cpuNumber = randomNumber();
console.log("Il numero scelto dal computer è: " + cpuNumber);






function randomNumber(){
    const cpuRandomNumber = (Math.floor(Math.random() * 5)) + 1;
    return cpuRandomNumber;
}