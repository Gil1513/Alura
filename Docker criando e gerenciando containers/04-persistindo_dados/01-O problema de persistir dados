# Resumo da Aula sobre Docker: Gerenciamento de Containers e Persistência de Dados

## 1. Limpeza de Containers e Imagens

### Removendo Containers Inativos
- **Comandos:**
  - `docker ps` mostra containers ativos; `docker ps -a` mostra todos, incluindo inativos.
  - Para remover containers inativos: `docker container rm $(docker container ls -aq)`
  - O `-aq` filtra apenas os IDs dos containers, incluindo os inativos.

### Removendo Imagens
- **Comandos:**
  - Verificar imagens existentes: `docker images`
  - Remover imagens: `docker rmi $(docker image ls -aq)`
  - Em caso de conflitos, usar `--force`: `docker rmi $(docker image ls -aq) --force`

## 2. Tamanho do Container

### Uso de Docker Run
- **Comando:**
  - Iniciar um container Ubuntu em modo interativo: `docker run -it ubuntu bash`
  - Verificar containers ativos: `docker ps` ou `docker container ls`

### Visualizando Tamanho do Container
- **Comando:**
  - Adicionar flag `-s` para visualizar o tamanho: `docker ps -s` ou `docker container ls -s`
- **Detalhes:**
  - Tamanho Virtual vs. Tamanho Real: O tamanho virtual corresponde ao tamanho da imagem. O tamanho real, que começa em 0 bytes, representa dados na camada de read-write.

### Experimentando com Tamanho
- **Prática:**
  - Após operações como `apt-get update`, o tamanho do container aumenta, refletindo dados na camada de read-write.

## 3. Persistência de Dados

### Isolamento das Camadas de Read-Write
- **Detalhes:**
  - Cada container tem sua própria camada de read-write. Containers diferentes, mesmo da mesma imagem, não compartilham essas camadas.

### Exemplo Prático
- **Comandos:**
  - Criar um novo container: `docker run -it ubuntu bash`
  - Verificar tamanhos com `docker ps -sa` mostra containers diferentes com suas respectivas camadas isoladas.

### Persistência de Dados Após Remoção de Containers
- **Observação:**
  - Dados na camada de read-write não persistem após a remoção do container.

## 4. Métodos de Persistência de Dados

- **Bind-Mount:** Vínculo direto entre o sistema de arquivos do host e do container.
- **Volume:** Gerenciado pelo Docker, separado do ciclo de vida do container.
- **Tmpfs Mount:** Armazenamento temporário, detalhes a serem abordados posteriormente.

## Conclusão e Próximos Passos
A aula aborda como gerenciar containers e imagens no Docker, incluindo a limpeza de recursos não utilizados, a análise do tamanho dos containers, e como a persistência de dados funciona. Os diferentes métodos para persistir dados entre containers são introduzidos, preparando o terreno para aprofundamento nesses conceitos nas próximas aulas.
