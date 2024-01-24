<!DOCTYPE html>
<html>

<head>
  <title>Resumo da Aula sobre Docker Compose - Parte 2</title>
</head>

<body>

  <h1>Configurando Dependências e Otimizando Logs com Docker Compose</h1>

  <p>Ao executar o comando <code>docker-compose up</code>, notamos que os serviços estão sendo iniciados de maneira indefinida. Para otimizar essa inicialização e configurar dependências entre serviços, utilizamos algumas instruções, incluindo <code>depends_on</code>.</p>

  <h2>Configurando Dependências com depends_on</h2>

  <p>No arquivo <code>docker-compose.yml</code>, adicionamos a instrução <code>depends_on</code> ao serviço <code>alurabooks</code> para indicar que depende do serviço <code>mongodb</code>. Isso garante que o serviço <code>mongodb</code> seja iniciado antes do <code>alurabooks</code>.</p>

  <pre><code>
alurabooks:
    image: aluradocker/alura-books:1.0
    container_name: alurabooks
    networks:
        - compose-bridge
    ports:
        - 3000:3000
    depends_on:
        - mongodb
  </code></pre>

  <p>Ao salvar o arquivo e executar novamente <code>docker-compose up</code>, notamos que a definição agora respeita a ordem de dependência, reduzindo a sobreposição de logs durante a inicialização.</p>

  <h2>Executando em Modo Detached</h2>

  <p>Também aprendemos a executar o <code>docker-compose up</code> em modo detached, utilizando <code>docker-compose up -d</code>. Isso inicia os serviços sem travar o terminal.</p>

  <h2>Visualizando Serviços e Encerrando</h2>

  <p>Utilizamos <code>docker-compose ps</code> para visualizar os serviços criados de forma organizada. O comando <code>docker-compose down</code> remove todos os containers e a rede criada pelo Docker Compose.</p>

  <h2>Considerações Finais</h2>

  <p>Para finalizar, exploramos brevemente a seção de <code>deploy</code> na documentação, que permite configurar o número de réplicas e o nível de paralelismo. Destacamos que essas configurações são relevantes apenas no modo swarm do Docker.</p>

  <p>Além disso, mencionamos a possibilidade de usar volumes, similar à configuração de redes, e recomendamos a consulta à documentação para necessidades específicas.</p>

  <p>Dessa forma, concluímos nossa exploração do Docker Compose.</p>

</body>

</html>
