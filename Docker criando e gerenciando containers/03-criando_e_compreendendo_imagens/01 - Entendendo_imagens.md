# Resumo da Aula: Entendendo Imagens no Docker

Nesta aula, exploramos o conceito de imagens no Docker, compreendendo como elas são estruturadas, funcionam e são a base para a criação de containers. Abordamos diversos aspectos importantes:

- **Estrutura de Imagens:**
  - Uma imagem é um conjunto de camadas independentes.
  - Cada camada tem um ID exclusivo.
  - As camadas, quando combinadas, formam a imagem final.

- **Visualização de Imagens:**
  - O comando `docker images` ou `docker images ls` exibe as imagens baixadas, incluindo informações como ID, repositório, tag e tamanho.
  - `docker inspect <image_id>` fornece informações detalhadas sobre uma imagem, incluindo camadas.

- **Camadas de Imagens:**
  - O comando `docker history <image_id>` mostra as camadas de uma imagem, revelando detalhes como tamanho, comando, workdir, etc.
  - O Docker é inteligente ao reutilizar camadas já presentes localmente, otimizando o download.

- **Criação de Containers e Camadas de Leitura/Escrita:**
  - Uma imagem é read-only, mas os containers são criados como uma camada de leitura/escrita temporária em cima da imagem.
  - Quando um container é excluído, sua camada de escrita também é removida.

- **Leveza dos Containers:**
  - Containers são leves devido à reutilização eficiente de imagens. Múltiplos containers podem ser baseados na mesma imagem, economizando espaço.
  - A camada de leitura/escrita é fina, mantendo os containers leves e eficientes.

- **Desenvolvimento de Imagens Próprias:**
  - Aprofundaremos na criação de imagens próprias usando um arquivo chamado "Dockerfile".

- **Conclusão:**
  - Desmistificamos o conceito de imagens, compreendendo como elas são essenciais para a leveza e eficiência dos containers.

Nesta aula, consolidamos o conhecimento sobre imagens Docker, sua estrutura e o motivo pelo qual os containers são tão leves e eficientes.
