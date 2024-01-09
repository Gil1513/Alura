# Resumo da Aula: Entendendo o Comando `docker run`

Vamos analisar por que o container não rodou ao executar `docker run ubuntu`. Ao usar `docker ps`, notamos que nenhum container está em execução. Ao executar `docker ps -a`, vemos todos os containers, incluindo os encerrados.

- **Comando `docker ps` e `docker container ls`:**
  - Ambos exibem containers em execução, sendo o último mais semântico.
  
- **Comando `docker ps -a` ou `docker container ls -a`:**
  - Exibe todos os containers, mesmo os encerrados.
  
- **Analisando os Containers:**
  - Container ID, imagem usada, comando executado, momento de criação e status são exibidos.
  - A coluna de status mostra "exited" para containers encerrados.
  
- **Por que o Container não está em Execução:**
  - A resposta está na linha de comando ao executar o container.
  - Containers sem processos em execução encerram imediatamente.
  
- **Mantendo um Container em Execução:**
  - Ao executar `docker run ubuntu sleep 1d`, especificamos um comando que mantém o container ativo por um dia.
  - O comando `docker ps` mostra o container em execução com o status "Up".

- **Entendendo o Comando `docker run`:**
  - O Docker Hub fornece imagens quando não estão localmente.
  - Ao executar `docker run`, o Docker valida a imagem e executa o container.
  - Sem um processo em execução, o container encerra rapidamente.
  
- **Conclusão:**
  - Manter um processo ativo é crucial para manter o container em execução.
  - Cuidado ao criar containers para evitar containers zumbis.

O vídeo abordou a dinâmica do `docker run` e a importância de entender os processos para manter os containers em execução de maneira efetiva.
