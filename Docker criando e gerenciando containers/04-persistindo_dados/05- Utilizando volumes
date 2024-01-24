# Gerenciamento de Volumes no Docker

O Docker recomenda a utilização de **volumes** para persistência de dados em ambientes produtivos, devido às vantagens de segurança e gerenciamento.

## Por que Utilizar Volumes?

Volumes são áreas dentro do sistema de arquivos gerenciadas pelo Docker. Eles oferecem maior segurança contra alterações indesejadas, mantendo os dados persistentes mesmo após o término dos containers.

## Criando um Volume

1. **Criando um Volume:**
   No terminal, sem nenhum container em execução, utilize:

## docker volume create meu-volume
Após a criação, use `docker volume ls` para ver o volume criado.

## Utilizando o Volume

1. **Executando um Container com o Volume:**
docker run -it -v meu-volume:/app ubuntu bash

Este comando cria um container e mapeia o volume `meu-volume` para o diretório `/app` no container.

2. **Testando a Persistência:**
Dentro do container, crie um arquivo (ex: `touch um-arquivo-qualquer`) e depois saia do container (`exit`). Ao criar um novo container com o mesmo comando, o arquivo criado anteriormente estará presente.

## Localização dos Arquivos do Volume

1. **Encontrando os Arquivos:**
Os arquivos do volume estão localizados em `/var/lib/docker/volumes/`. Para o `meu-volume`, o caminho específico será `/var/lib/docker/volumes/meu-volume/_data`.

## Gerenciamento de Volumes

- Comandos para gerenciamento incluem `create`, `inspect`, `ls`, `prune`, `rm`.
- O gerenciamento é feito através da interface do Docker, proporcionando independência do sistema de arquivos do sistema operacional.

## Criando Volumes com `--mount`

1. **Uso do `--mount`:**
docker run -it --mount source=meu-volume,target=/app ubuntu bash
Este comando cria um container e mapeia o volume `meu-volume` para `/app`.

2. **Criando Volumes Automaticamente:**
Ao especificar um volume não existente (ex: `meu-novo-volume`), o Docker o criará automaticamente.

## Conclusão

Conhecendo as diferentes formas de persistência de dados (`bind mounts`, volumes gerenciados pelo Docker, `tmpfs`), volumes se destacam como a opção recomendada para ambientes produtivos devido à sua segurança e gerenciamento eficiente.
