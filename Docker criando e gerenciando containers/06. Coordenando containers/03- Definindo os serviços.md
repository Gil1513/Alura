<!DOCTYPE html>
<html>

<head>
  <title>Resumo da Aula sobre Docker Compose</title>
</head>

<body>

  <h1>Explorando o Docker Compose</h1>

  <p>Nesta aula, abordamos a criação de um arquivo YAML para utilizar o Docker Compose e automatizar a execução dos containers Alura Books e Mongo, simplificando o processo que anteriormente era realizado manualmente.</p>

  <h2>Definindo os Serviços</h2>

  <p>Para começar, criamos um novo diretório chamado <code>ymls</code> e dentro dele um arquivo chamado <code>docker-compose.yml</code>. Configuramos a versão do YAML como 3.9 e definimos os serviços necessários.</p>

  <h3>Serviço MongoDB</h3>

  <pre><code>
version: "3.9"
services:
  mongodb:
    image: mongo:4.4.6
    container_name: meu-mongo
    networks:
      - compose-bridge
  </code></pre>

  <h3>Serviço Alura Books</h3>

  <pre><code>
  alurabooks:
    image: aluradocker/alura-books:1.0
    container_name: alurabooks
    networks:
      - compose-bridge
    ports:
      - 3000:3000
  </code></pre>

  <h2>Configurando a Rede</h2>

  <p>Além disso, configuramos a rede chamada <code>compose-bridge</code> para conectar os containers.</p>

  <pre><code>
networks:
  compose-bridge:
    driver: bridge
  </code></pre>

  <h2>Executando o Docker Compose</h2>

  <p>Após a configuração, executamos o comando <code>docker-compose up</code> no terminal dentro do diretório criado. Isso criou e executou os containers conforme as especificações do arquivo YAML.</p>

  <p>Verificamos o acesso à aplicação Alura Books através de "localhost:3000" no navegador, incluindo a execução do script de banco de dados em "localhost:3000/seed".</p>

  <p>Encerramos a aula destacando que, ao interromper o Docker Compose com "Ctrl + C", os containers são interrompidos, e o acesso à aplicação é encerrado.</p>

</body>

</html>
