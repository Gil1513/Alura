<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Resumo da Aula - Comunicação Entre Contêineres Docker</title>
</head>
<body>

  <h1>Estabelecendo Comunicação Entre Contêineres Docker</h1>

  <p>Nesta aula, exploramos maneiras de garantir uma comunicação estável entre contêineres no Docker, superando as limitações dos endereços IP inconsistentes. Aqui está um resumo dos principais passos abordados:</p>

  <h2>Definindo Nomes para Contêineres</h2>

  <pre><code>
    docker run -it --name ubuntu1 ubuntu bash
  </code></pre>

  <p>Utilizando nomes personalizados (<code>ubuntu1</code>), em vez de depender de IPs aleatórios, para facilitar a identificação e comunicação entre contêineres.</p>

  <h2>Criando uma Rede</h2>

  <pre><code>
    docker network create --driver bridge minha-bridge
  </code></pre>

  <p>Criação de uma rede personalizada (<code>minha-bridge</code>) para possibilitar a comunicação entre contêineres via hostname, superando a limitação dos IPs.</p>

  <h2>Configurando Contêineres na Nova Rede</h2>

  <pre><code>
    docker run -it --name ubuntu1 --network minha-bridge ubuntu bash
    docker run -d --name pong --network minha-bridge ubuntu sleep 1d
  </code></pre>

  <p>Associação dos contêineres à nova rede criada para permitir a comunicação estável entre eles.</p>

  <h2>Comunicação Via Hostname</h2>

  <pre><code>
    docker exec -it ubuntu1 apt-get update
    docker exec -it ubuntu1 apt-get install iputils-ping -y
    docker exec -it ubuntu1 ping pong
  </code></pre>

  <p>Realização de testes de comunicação entre contêineres (<code>ubuntu1</code> e <code>pong</code>) via hostname, evidenciando a resolução automática de DNS na rede personalizada.</p>

  <h2>Conclusão</h2>

  <p>Conseguimos estabelecer uma comunicação eficiente e estável entre diferentes contêineres, utilizando nomes personalizados e uma rede user-defined bridge. Este método simplifica a manutenção da comunicação. Na próxima aula, abordaremos outros tópicos, incluindo redes <code>host</code> e <code>null</code>, para expandir ainda mais nosso conhecimento.</p>

</body>
</html>
