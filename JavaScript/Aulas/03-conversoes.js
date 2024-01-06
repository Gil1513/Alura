// tipo de dado
// booleans

// Conversão implícita
// conversão implícita que permite que convertamos um tipo de dado em
// outro.

// Por exemplo, podemos converter um número em uma string, uma
// string em um número, entre outras possibilidades. Então, trabalharemos
// principalmente com esses dois nesta aula, que são os dois principais.
const nume = 456;
const numeString = "456";
// const conver = Number("456"); - conversão direta sem letras
//Number
//concatenou com
//String  
console.log(nume + numeString)
// converter a string em number
console.log(nume + Number(numeString))
// conversão explicíta

//Tipo de conversões
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma
//para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

//Conversão de Boolean
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

//Podemos usar o operador de soma + para fazer a conversão de textos para
//números, colocando-os antes das variáveis:
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.

const valor = 1;
valor = 2;

console.log(valor);
//-----------------------------------------------------//
//Ao declararmos let, ao contrário, podemos apenas declarar a
//variável, sem atribuir nenhum valor. Além disso, o valor inicial
//pode ser modificado depois:

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

//não utilizar nenhum dos termos da lista
/*arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield

enum
implements
interface
package
private
protected
public
*/

//Resumo das aulas
// - var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
// - let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
// - O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
// - null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
// - null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
// - O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
// - Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.