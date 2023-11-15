alert('Boas vindas ao nosso site!')

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

//alert('Erro! preencha todos os campos.');

let mensagemDeErro = 'Erro! preencha todos os campos.'
alert(mensagemDeErro);

let nomeUsuario = prompt('Qual o seu nome ?');

let idadeUsuario = prompt ('Qual a sua idade ?');

if (idadeUsuario >= 18 ) {
    alert('Pode tira a habilitação!')
}