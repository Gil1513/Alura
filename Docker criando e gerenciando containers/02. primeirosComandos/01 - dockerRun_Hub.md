## Resumo da Aula sobre Docker Run

Nesta aula, exploramos o funcionamento do comando `docker run` no Docker.

1. **Execução do `docker run hello-world`:**
   - Identificamos como o Docker localiza a imagem "hello-world".
   - O Docker baixa a imagem, realiza uma validação sha256 e executa a saída do container.

2. **Execução do `docker run` com nome sem sentido:**
   - Mostramos que o Docker procura imagens no Docker Hub.
   - Explicamos que o "hello-world" é uma imagem oficial, enquanto uma imagem sem sentido não é encontrada.

3. **Busca por outras imagens no Docker Hub:**
   - Introduzimos a busca por imagens, exemplificando com a imagem oficial do Ubuntu.
   - Demonstramos como baixar a imagem com `docker pull` e executar um container com `docker run ubuntu`.

4. **Surpresa ao executar `docker run ubuntu`:**
   - Nada acontece, levantando questões sobre por que o container não rodou.
   - Questionamos o que o comando `docker run` fez nos bastidores.

A aula termina com a promessa de abordar essas perguntas no próximo vídeo.
