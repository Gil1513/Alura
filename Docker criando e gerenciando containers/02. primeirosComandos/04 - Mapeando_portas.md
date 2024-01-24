# Resumo da Aula: Interação com Containers e Mapeamento de Portas

Nesta aula, aprofundamos nossa compreensão sobre a interação com containers e aprendemos a mapear portas para acessar aplicativos em execução.

- **Execução de Aplicações Web:**
  - Utilizamos uma aplicação web do grupo "dockersamples" para uma experiência visual.
  - A imagem usada foi `dockersamples/static-site`, não oficial, indicada pelo padrão `<usuário/organização>/<imagem>`.

- **Detached Mode e Execução Background:**
  - `docker run -d <imagem>`: Executa o container em segundo plano (detached mode).
  - Permite manter o terminal livre para mais comandos.

- **Mapeamento de Portas:**
  - `docker run -d -P <imagem>`: Mapeia portas aleatórias do container para o host.
  - `docker port <container_id>`: Mostra o mapeamento de portas específico.
  - `docker run -d -p <porta_host>:<porta_container> <imagem>`: Mapeia portas específicas do host para o container.
  - Exemplo: `docker run -d -p 8080:80 dockersamples/static-site`.

- **Isolamento de Rede e Acesso à Aplicação:**
  - Portas do container não são acessíveis diretamente no host.
  - Mapeamento de portas permite acessar a aplicação via `<localhost>:<porta_host>`.

- **Remoção Agressiva de Containers:**
  - `docker rm -f <container_id>`: Para e remove o container em uma única etapa.
  - Útil para evitar passos separados de `docker stop` e `docker rm`.

- **Considerações Finais:**
  - A interação visual com containers, especialmente aplicações web, requer entendimento do mapeamento de portas.
  - Utilizar imagens oficiais sempre que possível, mas compreender casos de uso de imagens não oficiais.

Nesta aula, exploramos a execução de aplicações web em containers, utilizando imagens não oficiais, e a importância do mapeamento de portas para acessar os serviços em execução nos containers.
