<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resumo da Aula - Redes Docker (Drivers Host e Null)</title>
</head>
<body>

  <h1>Explorando Redes Docker - Drivers Host e Null</h1>

  <p>Nesta aula, focamos em entender o funcionamento das redes Docker, explorando os drivers host e null. Aqui está um resumo dos principais conceitos abordados:</p>

  <h2>Rede None (Driver Null)</h2>

  <pre><code>
    docker run -d --network none ubuntu sleep 1d
  </code></pre>

  <p>A rede none, utilizando o driver null, isola completamente o contêiner da rede, impedindo qualquer interação de rede. O contêiner fica sem interface de rede vinculada.</p>

  <h2>Rede Host (Driver Host)</h2>

  <pre><code>
    docker run -d --network host aluradocker/app-node:1.0
  </code></pre>

  <p>A rede host, utilizando o driver host, vincula a interface de rede do contêiner diretamente à do host. Isso elimina isolamentos e permite o acesso direto à aplicação no contêiner, sem a necessidade de mapeamento de portas.</p>

  <p>Com o driver host, o contêiner e o host compartilham a mesma interface de rede, possibilitando o acesso à aplicação na porta padrão (ex.: 3000) sem conflitos, contanto que não haja outras aplicações usando a mesma porta no host.</p>

  <h2>Conclusão</h2>

  <p>Exploramos os drivers host e null para compreender melhor o funcionamento das redes Docker. A utilização desses drivers proporciona diferentes níveis de isolamento e conectividade entre contêineres e o host. Continuaremos aprofundando nosso conhecimento em futuras aulas.</p>

</body>
</html>
