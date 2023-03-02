let evenOdd = '';
let userNumber;

while(evenOdd.toLowerCase() != 'pari' && evenOdd.toLowerCase() != 'dispari'){
    evenOdd = prompt('Scrivi "pari" o "dispari" per decidere su quale dei due vuoi scommettere');
}

console.log(evenOdd);

while(isNaN(userNumber) || ((userNumber < 1) || (userNumber > 5))){
    userNumber = prompt('Scrivi un numero da 1 a 5');
}

console.log(userNumber);