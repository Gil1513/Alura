# Resumo da Aula sobre Dockerfile e Criação de Imagens

Nesta aula, aprendemos a criar uma imagem Docker usando um Dockerfile para empacotar uma aplicação Node.js. Abaixo está um resumo dos principais pontos da aula:

## Criando uma Imagem Docker

1. **Introdução ao Docker:**
   - Exploração dos conceitos de imagem e container.
   - Diferença entre imagem e container.

2. **Necessidade de Criar Nossa Própria Imagem:**
   - Evitar depender exclusivamente de imagens de terceiros.
   - Utilização do Dockerfile para criar uma imagem personalizada.

3. **Dockerfile:**
   - Definição do arquivo Dockerfile para especificar como a imagem será construída.

4. **Seleção da Base da Imagem:**
   - Escolha da imagem base usando a instrução `FROM`.
   - Exemplo: `FROM Node:14` para usar a versão 14 do Node.

5. **Cópia de Arquivos para a Imagem:**
   - Utilização da instrução `COPY` para copiar os arquivos do diretório atual para a imagem.
   - Exemplo: `COPY . /app-node`.

6. **Execução de Comandos na Imagem:**
   - Utilização da instrução `RUN` para executar comandos durante a construção da imagem.
   - Exemplo: `RUN npm install` para instalar as dependências da aplicação.

7. **Definição do Diretório de Trabalho:**
   - Utilização da instrução `WORKDIR` para definir o diretório padrão dentro da imagem.
   - Exemplo: `WORKDIR /app-node`.

8. **Configuração do Ponto de Entrada:**
   - Utilização da instrução `ENTRYPOINT` para definir o comando padrão a ser executado quando o contêiner é iniciado.
   - Exemplo: `ENTRYPOINT npm start`.

9. **Construção da Imagem:**
   - Uso do comando `docker build -t gilmarsilva/app-node:1.0 .` para construir a imagem.
   - `-t` é usado para etiquetar a imagem.

10. **Execução do Contêiner:**
    - Uso do comando `docker run -d -p 8081:3000 gilmarsilva/app-node:1.0` para executar o contêiner em modo detached e mapear portas.

11. **Resolução de Problemas de Porta:**
    - Mudança da porta para evitar conflitos com portas em uso anteriormente.
    - Exemplo: `docker run -d -p 8081:3000 gilmarsilva/app-node:1.0`.

12. **Visualização da Aplicação:**
    - Acesso à aplicação conteinerizada através do navegador usando a porta especificada.

13. **Melhorias Futuras no Dockerfile:**
    - Discussão sobre melhorias para tornar o Dockerfile mais compreensível.

14. **Referências à Documentação do Docker:**
    - Destaque para a importância da documentação do Docker para entender as instruções disponíveis.

Este resumo destaca os principais passos e conceitos abordados durante a aula. Para detalhes adicionais e exemplos práticos, é recomendável revisar o vídeo da aula e a documentação oficial do Docker.
