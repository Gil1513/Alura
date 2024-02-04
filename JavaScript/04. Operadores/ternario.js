const valor = 50;
                //condição ?    caso 'true'    :     caso 'false'
const texto = valor < 50 ? "valor insuficiente" : "valor suficiente";
console.log(texto); // retorna ‘valor suficiente’

let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // true

