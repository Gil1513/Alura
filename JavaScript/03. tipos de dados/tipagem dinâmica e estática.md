<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipagem Dinâmica em JavaScript</title>
</head>
<body>
    <h1>Entendendo a Tipagem Dinâmica em JavaScript</h1>
    <p>JavaScript é uma linguagem dinamicamente tipada, o que significa que não é necessário definir explicitamente o tipo de uma variável ao declará-la. O tipo de dado que a variável armazena pode mudar dinamicamente ao longo do código.</p>

    <h2>Exemplo de Tipagem Dinâmica</h2>
    <p>Aqui está um exemplo de como uma variável pode assumir diferentes tipos de dados em JavaScript:</p>
    <pre><code>let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = 'Olá, mundo!'; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: true</code></pre>

    <h2>Considerações sobre a Tipagem Dinâmica</h2>
    <p>Embora a tipagem dinâmica ofereça flexibilidade no desenvolvimento de aplicações, ela também exige atenção redobrada dos desenvolvedores. É crucial garantir que as operações realizadas com as variáveis sejam compatíveis com seus tipos de dados atuais para evitar erros de execução.</p>

    <h2>Vantagens e Desvantagens</h2>
    <ul>
        <li><strong>Vantagens:</strong> Flexibilidade para alterar o tipo de dado que uma variável armazena; simplificação da sintaxe para declaração de variáveis.</li>
        <li><strong>Desvantagens:</strong> Potencial para erros devido a conversões de tipo não intencionais; necessidade de uma compreensão clara do tipo de dado atual da variável ao realizar operações.</li>
    </ul>

    <h2>Conclusão</h2>
    <p>A tipagem dinâmica do JavaScript permite um desenvolvimento rápido e flexível, mas requer que os desenvolvedores estejam atentos à gestão de tipos de dados para evitar bugs e comportamentos inesperados no código.</p>
</body>
</html>
