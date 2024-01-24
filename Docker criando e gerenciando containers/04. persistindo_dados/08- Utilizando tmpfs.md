# Persistência de Dados com Tmpfs no Docker

## Introdução ao Tmpfs

O `tmpfs` representa o terceiro tipo de persistência de dados disponível no Docker. É importante notar que o `tmpfs` funciona apenas em hosts Linux, pois muitas funcionalidades do Docker, incluindo esta, são projetadas especificamente para ambientes Linux.

## Como Funciona o Tmpfs?

O `tmpfs` é utilizado para armazenar dados de maneira temporária na memória do host. Isso significa que, quando o container é encerrado, os dados armazenados no `tmpfs` são perdidos. 

## Uso do Tmpfs

1. **Criando um Container com Tmpfs:**
   Utilize o comando:
`docker run -it --tmpfs=/app ubuntu bash`

Isso cria um container com um diretório `/app` temporário.

2. **Verificando a Pasta Temporária:**
Após executar o comando, um `ls` mostrará a pasta `/app` destacada em verde, indicando seu status temporário.

3. **Testando a Persistência:**
Crie um arquivo no diretório `/app`:
touch app/um-arquivo-qualquer

Após sair do container (`exit`) e iniciar um novo com o mesmo comando, o arquivo anterior não estará presente.

## Utilidade do Tmpfs

O `tmpfs` é ideal para dados sensíveis que não devem ser persistidos na camada de read-write do Docker por razões de segurança. Exemplos incluem arquivos de senha ou dados que não precisam ser mantidos durante toda a execução de um container.

## Tmpfs com a Flag `--mount`

Assim como com bind mounts e volumes, o `tmpfs` também pode ser usado com a flag `--mount`:
`docker run -it --mount type=tmpfs,destination=/app ubuntu bash`


Isso cria um diretório `/app` temporário no container. Qualquer arquivo criado neste diretório será perdido ao reiniciar o container.

## Conclusão

Existem três principais métodos de persistência de dados no Docker:

1. **Tmpfs:** Para dados temporários em memória, sem persistência após o término do container.
2. **Bind Mounts:** Ligação direta entre o sistema de arquivos do host e do container.
3. **Volumes:** Gerenciados pelo Docker, oferecem um maior controle e segurança, independentes da estrutura de pastas do host.