alert("Boas vinda ao jogo mundo secreto !");

// declaração de váriavel
let numeroSecreto = 1; 
console.log(numeroSecreto);

//receber dados 
let chute = prompt(' Escolha um número entre 1 e 10');

if (chute  ==  numeroSecreto) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} `);
} else {
    alert('Você errou :( ')
}