// var é a palavra-chave mais antiga e menos restritiva.
// Ele permite que você declare uma variável e atribua um
// valor a ela na mesma linha.
// let é uma palavra-chave mais recente que foi introduzida no ES6.
// Ele é mais restritivo do que var e não permite que você reatribua
// um valor a uma variável após sua declaração.
// const é a palavra-chave mais restritiva. Ele permite que você
// declare uma variável e atribua um valor a ela na mesma linha,
// mas não permite que você reatribua um valor a ela após sua declaração.
// Os prós e contras de cada palavra-chave são os seguintes:

// var é a palavra-chave mais flexível, mas também é a menos segura.
// let é mais seguro do que var, mas não é tão flexível.
// const é a palavra-chave mais segura, mas também é a menos flexível.
// No geral, é melhor usar let ou const sempre que possível.
// Isso tornará seu código mais seguro e evitará erros.

    // var - tem o uso mais liberal, tendo como alterar, fazer mais de uma com
    // o mesmo nome, entre outros. (tende a bug)
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let
let forma = "retângulo"
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === 'retângulo'){
    area2 = altura2 * comprimento2;
}else{
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2)

//const
const form = 'quadrado';
const form2 = 'triângulo';
const height = 5;
const length = 7;
let areaa = 5;

if(form2 === 'quadrado'){
    areaa = height * length;
}else{
    areaa = (altura2 * comprimento2) / 2;
}
console.log(areaa);


//boolean
const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy
//0 => false
//1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == false)

//null - representa nada/0

//undefined - váriavel declarado, mas sem valor
let minhaVar;
let varNull = null;

console.log(minhaVar) //undefined
console.log(varNull) //null

let numero = 3;
let texto3 = "Alura";

console.log(typeof minhaVar)
console.log(typeof varNull) //Erro da linguagem, deve voltar com null,
//porém volta como object