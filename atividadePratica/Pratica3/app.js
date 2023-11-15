/*

contando de 1 até 10

let contando = 1;

while (contando < 11 ){
   console.log(`Número: ${contando}`);
   contando++
}


contando de 10 até 0

contando = 10

while ( contando > -1){
   console.log(`Número: ${contando}`);
   contando--
}

*/

let numero = prompt("Digite um número maior que 0");

while (numero < 0 ){
   alert("Número digitado inválido, por favor digite  um numero maior que 0");
   numero = prompt("Digite um número maior que 0");
}
 contando = numero;
 while (contando > -1){
   console.log(`Número: ${contando}`);
   contando--
 }