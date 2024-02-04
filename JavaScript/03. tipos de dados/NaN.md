<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumo sobre NaN em JavaScript</title>
</head>
<body>
    <h1>Entendendo NaN em JavaScript</h1>
    <p><strong>NaN</strong> significa <em>não é um número</em> e geralmente aparece em operações aritméticas mal formadas no JavaScript.</p>
    <p>Por exemplo, multiplicar um número por uma string não numérica resulta em NaN, mas o JavaScript tenta converter strings em números antes de realizar operações aritméticas, como mostrado abaixo:</p>
    <pre><code>console.log(5 * 'a'); // NaN
console.log(5 * '5'); // 25
</code></pre>
    <h2>Casos que geram NaN</h2>
    <ul>
        <li>Tentativas de converter para número valores que não são convertíveis.</li>
        <li>Operações matemáticas que não resultam em números reais.</li>
        <li>Operações onde um dos valores é NaN.</li>
        <li>Operações com formatos indeterminados como Infinity / Infinity.</li>
        <li>Outros casos onde um valor não pode ser representado como número.</li>
    </ul>
    <h2>Como verificar se um valor é NaN?</h2>
    <p>Para verificar se um valor é NaN, você pode usar <code>Number.isNaN()</code> ou <code>isNaN()</code>, sendo que:</p>
    <ul>
        <li><code>Number.isNaN()</code> retorna verdadeiro apenas para o valor efetivamente NaN.</li>
        <li><code>isNaN()</code> retorna verdadeiro para valores que não podem ser convertidos para números.</li>
    </ul>
    <p>Este resumo destaca a importância de entender como NaN é gerado e verificado em JavaScript, essencial para a manipulação correta de operações aritméticas e conversões de tipo.</p>
</body>
</html>
