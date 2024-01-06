//Revizando o básico
// tipo Number
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;
console.log(operacaoMatematica)

// ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log(novaOperacao)

// NaN -> Not A Number (não é um número)
const alura = "Alura";
console.log(alura * primeiroNumero)

//Divisão por zero
var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN

//String
const texto1 = "Olá, mundo";
const texto2 = 'Olá, pessoa';
const senha = "senha123";
const StringNumber = "3256";

//const citacao = 'O GIlmar disse"Olá"';
const citacao = "O Leo disse 'Oi!'"

console.log(citacao)

//concatenação (+)
const fala = "Meu nome é: ";
const fala2 = "Gilmar";
console.log(fala + fala2);

//Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/*toLowerCase() que converte todos os caracteres da string
informada (no caso, input) para letras minúsculas*/
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

/*qualquer inserção de texto que exija uma quantidade mínima de caracteres,
como uma senha ou um nome. A propriedade length pode ser utilizada para
sabermos quantos caracteres uma string contém*/
const senha3 = "minhaSenha123"
console.log(senha3.length) // 13 caracteres

//Boolean
const primeironumber = 5;
const segundonumber = 10;

console.log(primeironumber === segundonumber);

let cadastroSenha = true;

/*O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e
pode ser atribuído como valor de uma variável:*/
let inputt = null;

if (inputt === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input2;

console.log(input); // null
//undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código)
console.log(input2); // undefined

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

/* ANOTAÇÕES
Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

camelCase: Inicia com letra minúscula e a primeira letra de cada palavra
em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario.
Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as
palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens.
Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no
JavaScript para variáveis e funções.

PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra
maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.
*/