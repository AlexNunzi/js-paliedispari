const userWord = prompt('Inserisci una parola e ti dirò se è palindroma');

console.log("La parola inserita è: " + userWord);
console.log("La parola inserita al contrario è: " + userWord.split("").reverse().join(""));


palindroma(userWord);




function palindroma(word){
    if(word.split("").reverse().join("").toLowerCase() == word.toLowerCase()){
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è palindroma');
    }
}





// Funzione che controlla se la parola è palindroma tramite ciclo for

// function palindroma(word){
//     let reverseWord = '';
//     console.log("Lunghezza parola è: " + word.length);
//     for(i=(word.length - 1); i >= 0; i--){
//         console.log(word[i]);
//         reverseWord += word[i];
//     }
//     console.log("La parola al contrario è: " + reverseWord);
//     console.log("La parola inserita è: " + word);
//     if(word.toLowerCase() == reverseWord.toLowerCase()){
//         console.log('La parola inserita è palindroma');
//     } else {
//         console.log('La parola inserita non è palindroma');
//     }
// }