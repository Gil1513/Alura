//01-
let string = "Gilmar";
let numero = 18;
let boolean = 1.0;

console.log(typeof string);
console.log(typeof numero);
console.log(typeof boolean);

//02-
let primeiro = "Gilmar"
let segundo = "Silva"

// Usando o operador +
let completo = primeiro +' '+ segundo;
console.log(completo);

//Usando template strings
let nomeCompleto = `${primeiro} ${segundo}`;
console.log(`${nomeCompleto}`);

//03-
let pala = "Valor";
let val = 20;

let fra = `${pala} ${val}`
console.log(`${fra}`);

//04-
let troca = 20;

if(0 < 1){
    troca = 50;
    console.log(troca);
}
console.log(troca);

//05-
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'

//06-
const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}