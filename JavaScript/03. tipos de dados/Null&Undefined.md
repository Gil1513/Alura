<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabalhando com Null e Undefined em JavaScript</title>
</head>
<body>
    <h1>Trabalhando com Null e Undefined em JavaScript</h1>
    <p>A manipulação de ausência de valores em JavaScript é feita através dos tipos <code>null</code> e <code>undefined</code>.</p>
    <h2>Exemplos de Uso</h2>
    <p>Para ilustrar, considere o seguinte exemplo que explora o uso de variáveis não inicializadas e a atribuição explícita de <code>null</code>.</p>
    <pre><code>let nomeEstudante;
console.log(nomeEstudante); // undefined
console.log(typeof nomeEstudante); // undefined

let telefoneEstudante = null;
console.log(telefoneEstudante + 3); // 3
console.log(nomeEstudante + 3); // NaN

const professora = 'Ana';
console.log(typeof professora); // string
console.log(typeof telefoneEstudante); // object</code></pre>
    <h2>Entendendo Null e Undefined</h2>
    <ul>
        <li><strong>Undefined:</strong> Indica que uma variável foi declarada mas não teve valor atribuído.</li>
        <li><strong>Null:</strong> Utilizado para representar a ausência intencional de um valor, comportando-se como <code>0</code> em operações matemáticas.</li>
    </ul>
    <p>Embora ambos representem a ausência de valor, <code>null</code> é usado intencionalmente, enquanto <code>undefined</code> pode indicar que algo não ocorreu como esperado.</p>
    <h2>Verificando Tipos de Dados</h2>
    <p>Para verificar o tipo de uma variável, utiliza-se <code>typeof</code>. No entanto, <code>null</code> é erroneamente identificado como <code>object</code> devido a um erro nas primeiras versões do JavaScript.</p>
    <h2>Conclusão</h2>
    <p>Entender a diferença entre <code>null</code> e <code>undefined</code>, e como cada um se comporta, é fundamental para a manipulação eficaz de valores e para a depuração de código em JavaScript.</p>
</body>
</html>
