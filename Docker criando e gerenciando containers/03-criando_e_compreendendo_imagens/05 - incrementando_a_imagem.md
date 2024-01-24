# Resumo da Aula sobre Documentação da Porta e Variáveis de Ambiente

## Documentando a Porta

### Parando Todos os Containers
- O comando `docker stop` pode ser utilizado para interromper containers.
- Para parar todos os containers de uma vez, utilizamos o comando:
  ```bash
  docker stop $(docker container ls -q)

### Exposição de Portas no Dockerfile

**Utilizamos a instrução EXPOSE no Dockerfile para documentar a porta em que a aplicação está sendo executada.**

```dockerfile

FROM node:14
WORKDIR /app-node
EXPOSE 3000
COPY . .
RUN npm install
ENTRYPOINT npm start
```
### Mapeamento de Portas

**Demonstração do uso do flag -p no comando docker run para mapear portas entre o host e o container.**

```bash

docker run -p 8080:3000 -d danielartine/app-node:1.0

Construção de Imagem com EXPOSE

Após adicionar a instrução EXPOSE no Dockerfile, a porta 3000 ficou explicitamente documentada.

```
```bash

docker build -t danielartine/app-node:1.1 .
```

## Variáveis de Ambiente
**Leitura de Variável de Ambiente no Código**

**Uso de process.env.PORT no código para tornar a porta parametrizada.**
## Utilização de ARG e ENV no Dockerfile

**A instrução ARG no Dockerfile é usada para definir argumentos durante a construção da imagem. A instrução ENV é utilizada para definir variáveis de ambiente dentro do container. Demonstração de como passar o valor de ARG para ENV.**

```dockerfile

FROM node:14
WORKDIR /app-node
ARG PORT_BUILD=6000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
ENTRYPOINT npm start
```
Construção de Imagem com Variáveis de Ambiente

Build da imagem com a versão 1.2 usando variáveis de ambiente.

```bash

docker build -t danielartine/app-node:1.2 .

Execução do Contêiner com Mapeamento de Portas
```
**Exemplo de execução do contêiner com mapeamento de portas.**

```bash

docker run -p 9090:6000 -d danielartine/app-node:1.2
```
**Em resumo, aprendemos a documentar explicitamente a porta da aplicação no Dockerfile usando a instrução EXPOSE e a utilizar variáveis de ambiente para tornar a configuração mais parametrizável.**