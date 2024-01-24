<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }
  </style>
  <title>Resumo da Aula - Comunicação Entre Contêineres Docker</title>
</head>
<body>

  <h1>Estabelecendo Comunicação Entre Contêineres Docker</h1>

  <p>Nesta aula, aprendemos a estabelecer uma comunicação mais estável entre contêineres no Docker. Vamos resumir os principais pontos:</p>

  <h2>Definindo Nomes para Contêineres</h2>

  <pre><code>
    docker run -it --name ubuntu1 ubuntu bash
  </code></pre>

  <p>Definir nomes para contêineres pode proporcionar uma forma mais estável de identificação do que o uso de endereços IP. No entanto, isso não é suficiente para comunicação via hostname.</p>

  <h2>Criando uma Rede</h2>

  <pre><code>
    docker network create --driver bridge minha-bridge
  </code></pre>

  <p>Criamos uma rede própria (<code>minha-bridge</code>) para facilitar a comunicação entre contêineres. Ao executar um contêiner, especificamos a rede usando <code>--network minha-bridge</code>.</p>

  <h2>Comunicação Via Hostname</h2>

  <pre><code>
    docker run -d --name pong --network minha-bridge ubuntu sleep 1d
  </code></pre>

  <p>Testamos a comunicação via hostname entre dois contêineres (<code>ubuntu1</code> e <code>pong</code>) usando a rede que criamos. A resolução automática de DNS entre contêineres é habilitada em redes user-defined bridge.</p>

  <h2>Conclusão</h2>

  <p>Conseguimos comunicar diferentes contêineres de forma mais estável usando nomes e uma rede personalizada. Isso simplifica a manutenção da comunicação entre eles.</p>

  <p>No próximo vídeo, exploraremos outros tópicos, como as redes <code>host</code> e <code>null</code>, para aprofundar nosso conhecimento.</p>

</body>
</html>
