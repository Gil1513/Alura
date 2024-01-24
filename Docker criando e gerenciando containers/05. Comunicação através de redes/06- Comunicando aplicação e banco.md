<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resumo da Aula - Comunicação de Contêineres na Rede Docker</title>
</head>
<body>

  <h1>Explorando Comunicação de Contêineres na Rede Docker</h1>

  <p>Nesta aula, focamos na prática da comunicação entre contêineres na rede do Docker. Aqui está um resumo dos principais passos e conceitos abordados:</p>

  <h2>Preparação do Ambiente</h2>

  <pre><code>
    docker pull mongo:4.4.6
    docker pull aluradocker/alura-books:1.0
  </code></pre>

  <p>Preparação do ambiente com o download das imagens necessárias, utilizando os comandos <code>docker pull</code>.</p>

  <h2>Configurando a Rede e Inicializando o MongoDB</h2>

  <pre><code>
    docker network create --driver bridge minha-bridge
    docker run -d --network minha-bridge --name meu-mongo mongo:4.4.6
  </code></pre>

  <p>Criação da rede <code>minha-bridge</code> e inicialização do contêiner MongoDB (<code>meu-mongo</code>) nessa rede.</p>

  <h2>Inicializando o Contêiner da Aplicação alura-books</h2>

  <pre><code>
    docker run -d --network minha-bridge --name alurabooks -p 3000:3000 aluradocker/alura-books:1.0
  </code></pre>

  <p>Inicialização do contêiner da aplicação <code>alura-books</code>, configurando-o para a mesma rede <code>minha-bridge</code> e fazendo o mapeamento de portas.</p>

  <h2>Testando a Comunicação</h2>

  <p>Acessando a aplicação no navegador através de <code>localhost:3000</code> e realizando uma operação de seeding no banco de dados.</p>

  <p>Com isso, estabelecemos a comunicação entre dois contêineres na mesma rede, permitindo uma interação realista entre uma aplicação back-end e um banco de dados.</p>

  <h2>Questionamentos</h2>

  <p>Reflexões sobre a praticidade e eficiência de inicializar contêineres manualmente e a possibilidade de explorar métodos mais automatizados.</p>

</body>
</html>
