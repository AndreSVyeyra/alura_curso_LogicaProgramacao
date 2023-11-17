/*


 1) 
 
 console.log("Boas Vindas."); 

 2)

let nome = "André"
console.log(nome);

3)

let nome = "André";
alert(`Olá, ${nome}!`);

4)

let linguagemFavorita = prompt(" Qual a linguagem de programação que você mais gosta ?");
console.log(linguagemFavorita);

5)

let valor1 = 4;
let valor2 = 4;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

6)

let valor1 = 10;
let valor2 = 5;

resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);


7)


let idade = prompt(" Insira a sua idade:");

if (idade >= 18){
   console.log("Você é maior de idade! ");
}else{
   console.log("Você é menor de idade! ")
}


8)

let numero = prompt("Digite um número:");

if(numero > 0 ){
   console.log("O número digitado é positivo!")
}else{
   if (numero < 0 ){
      console.log("O número digitado é negativo!")
   }else{
      console.log(" O número digitado é zero!")
   }
}

9)

let numero = 1;

while (numero <= 10){
   console.log(numero);
   numero++
}

10)

let nota = 7;

if(nota >= 7){
   console.log("Aprovado");
}else{
   console.log("Reprovado");
}


11)

let numero = Math.random();
console.log(numero);


12)

let numero =  parseInt(Math.random() * 10 + 1);
console.log(numero);

13)


*/


let numero = parseInt (Math.random() * 1000 + 1);
console.log(numero);
