<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Resumo da Aula - Docker Compose</title>
</head>
<body>

  <h1>Explorando o Docker Compose</h1>

  <p>Nesta aula, abordamos o Docker Compose como uma solução para a coordenação de containers. Aqui está um resumo dos principais pontos discutidos:</p>

  <h2>Problema Anterior</h2>

  <p>Revisão do problema enfrentado anteriormente ao executar manualmente os containers Alura Docker e Mongo, destacando a complexidade e a falta de escalabilidade.</p>

  <h2>Introdução ao Docker Compose</h2>

  <p>O Docker Compose é uma ferramenta de coordenação de containers, permitindo a composição de vários containers em um único ambiente através de um arquivo YAML.</p>

  <h2>Instalação do Docker Compose</h2>

  <pre><code>
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
  </code></pre>

  <p>Passos para instalar o Docker Compose no Linux, tornando-o executável no terminal.</p>

  <h2>Utilizando o Docker Compose</h2>

  <p>Execução do Docker Compose no terminal, proporcionando a capacidade de definir e executar vários containers como parte de uma aplicação Docker.</p>

  <h2>Próximos Passos</h2>

  <p>Exploração da transformação do ambiente anteriormente configurado manualmente em um ambiente distribuído utilizando o Docker Compose.</p>

</body>
</html>
