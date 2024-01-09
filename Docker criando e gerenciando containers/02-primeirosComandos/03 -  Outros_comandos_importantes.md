# Resumo da Aula: Comandos Essenciais no Ciclo de Vida dos Containers

Nesta aula, exploramos comandos cruciais para gerenciar o ciclo de vida dos containers no Docker.

- **Parando e Iniciando Containers:**
  - `docker stop <container_id>`: Interrompe a execução do container.
  - `docker start <container_id>`: Reinicia a execução do container.
  - `docker pause <container_id>`: Pausa a execução do container.
  - `docker unpause <container_id>`: Despausa o container.

- **Interação com Containers:**
  - `docker exec -it <container_id> <comando>`: Executa comandos interativamente dentro do container.
  - Exemplo: `docker exec -it <container_id> bash`.

- **Observações sobre a Efemeridade dos Containers:**
  - Containers são efêmeros, perdendo dados ao serem removidos.
  - Ao parar um container e iniciá-lo novamente, ele retoma o tempo de execução anterior.
  - Pausar e despausar mantém o estado dos processos.

- **Remoção de Containers:**
  - `docker rm <container_id>`: Remove o container especificado.
  - Utilizar `-f` para forçar a remoção, se necessário.

- **Persistência de Dados:**
  - Containers devem ser prontos para serem encerrados, implicando na perda de dados não persistentes.
  - Exploraremos estratégias de persistência em aulas futuras.

- **Execução em Modo Interativo desde o Início:**
  - `docker run -it <imagem> <comando>`: Cria um novo container e o executa em modo interativo.
  - Exemplo: `docker run -it ubuntu bash`.

- **Considerações Finais:**
  - Containers são isolados, dificultando a persistência de dados.
  - A efemeridade é uma característica chave, exigindo atenção na gestão de dados.

Ao final da aula, compreendemos os comandos essenciais para manipular e interagir com containers, enfatizando a efemeridade inerente ao ambiente do Docker. 