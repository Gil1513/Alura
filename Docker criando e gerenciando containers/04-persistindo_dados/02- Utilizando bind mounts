# Aula sobre Docker: Utilizando Bind Mounts para Persistência de Dados

## Entendendo Bind Mounts

Bind mounts são uma das soluções que o Docker oferece para persistência de dados. Eles criam uma ligação direta entre um ponto de montagem no sistema operacional do host e um diretório dentro do container.

## Comandos Práticos

### Parando e Removendo Containers Existentes
- **Comando:** `docker rm $(docker container ps -aq) --force`

### Criando um Bind Mount com a Flag `-v`
- **Descrição:**
  - O objetivo é persistir dados de um diretório dentro do container em um diretório no host.
- **Comando:** `docker run -it -v /home/gilmar/volume-docker:/app ubuntu bash`
  - Cria um container e mapeia o diretório `/home/gilmar/volume-docker` no host para `/app` no container.

### Configuração e Teste
1. **Criar uma pasta no host:**
   - `mkdir volume-docker`
2. **Acessar o diretório no container:**
   - `cd app/`
3. **Criar um arquivo para teste:**
   - `touch arquivo-qualquer.txt`
   - O arquivo criado no container aparece no diretório `volume-docker` do host.

### Testando a Persistência
- **Passos:**
  1. Parar o container atual (`exit`).
  2. Criar um novo container com o mesmo bind mount.
  3. Verificar a presença do arquivo `arquivo-qualquer.txt` no novo container.

- **Comando:** `docker run -it -v /home/gilmar/volume-docker:/app ubuntu bash`

## Criando Bind Mount com a Flag `--mount`

### Uso da Flag `--mount`
- **Comando:** `docker run -it --mount type=bind,source=/home/gilmar/volume-docker,target=/app ubuntu bash`
- **Explicação:**
  - `type=bind`: Define o tipo de montagem como bind.
  - `source=/home/gilmar/volume-docker`: Diretório no host.
  - `target=/app`: Diretório correspondente no container.
- **Nota:** 
  - Se o diretório `source` não existir no host, a flag `--mount` informará que o caminho não existe.

### Verificação e Análise
- **Passos:**
  1. Acessar o diretório `app` no container.
  2. Verificar a presença do arquivo `arquivo-qualquer.txt`.
  3. Concluir que tanto `-v` quanto `--mount` permitem a persistência de dados entre containers.

## Reflexões e Próximos Passos
- **Considerações:**
  - Depender de um caminho no host pode levar a problemas como caminhos inexistentes, falta de permissão ou exclusão acidental do caminho.
- **Alternativa:**
  - Uso de volumes gerenciados pelo Docker para uma solução mais robusta e segura.
- **Próximos Tópicos:**
  - Conceitos fundamentais de volumes, bind mounts e tmpfs no Docker.

Esta aula focou na compreensão e prática do uso de bind mounts para a persistência de dados entre containers e entre o container e o host no Docker, destacando a importância de considerar a segurança e a integridade dos dados em ambientes de produção.
