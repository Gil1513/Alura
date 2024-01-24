# Resumo da Aula sobre Criação de Conta no Docker Hub e Envio de Imagens

## Criando a conta no Docker Hub

1. Acesse a [página inicial do Docker Hub](https://hub.docker.com/) e crie uma conta inserindo seu nome de usuário, e-mail, senha, aceitando os termos e marcando a opção recaptcha.
2. Após a criação, confirme sua conta por e-mail.
3. Faça login no Docker Hub usando seu nome de usuário e senha.

## Autenticando a conta do Docker Hub

1. No terminal, autentique sua conta usando o comando:
    ```bash
    docker login -u NOMEDOUSUARIO
    ```
2. Insira a senha quando solicitado.

    **Observação:** A senha será digitada, mas não será exibida por questões de segurança.

    Se o login for bem-sucedido, você receberá a mensagem "Login Succeeded" e a senha será armazenada em um arquivo config.json.

## Enviando a imagem para o Docker Hub

1. No Docker Hub, vá para a seção "Repositories" para verificar os repositórios disponíveis.
2. No terminal, use o comando `docker push` para enviar a imagem desejada para o Docker Hub.
    ```bash
    docker push NOMEDOUSUARIO/nome-da-imagem:versao
    ```
3. Caso receba um erro "access denied", pode ser necessário criar uma cópia da imagem com uma nova tag e um novo repositório:
    ```bash
    docker tag nome-da-imagem:versao NOMEDOUSUARIO/nome-da-imagem:versao
    ```
4. Após a cópia, faça novamente o push, e dessa vez, ele será bem-sucedido.

## Subindo novas versões

1. Para enviar uma nova versão da imagem, crie uma nova tag para a imagem localmente:
    ```bash
    docker tag nome-da-imagem:outra-versao NOMEDOUSUARIO/nome-da-imagem:outra-versao
    ```
2. Use o comando `docker push` para enviar a nova versão para o Docker Hub.

    **Nota:** O Docker Hub reutilizará camadas já existentes, otimizando o processo de envio.

3. Verifique as novas versões no Docker Hub.

## Conclusão

Aprendemos a criar uma conta no Docker Hub, autenticar a conta no terminal, enviar imagens para o Docker Hub, e como lidar com o envio de novas versões das imagens.
