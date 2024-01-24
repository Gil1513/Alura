# Comunicação entre Contêineres no Docker

Ao lidar com contêineres Docker, que são isolados em relação ao host, surge a necessidade de compreender como eles podem se comunicar, especialmente ao construir sistemas complexos compostos por diversas aplicações.

## Namespaces e Comunicação entre Contêineres

Os contêineres são isolados por meio de namespaces, proporcionando isolamento nas interfaces de rede. No contexto do Docker, a comunicação entre contêineres é crucial para sistemas complexos envolvendo diferentes tecnologias.

### Rede Bridge Padrão

Ao executar um contêiner Ubuntu, podemos inspecionar os detalhes da rede usando o comando `docker inspect` para obter informações sobre a rede à qual o contêiner pertence. A saída revela uma rede chamada "bridge" com um ID específico. O Docker cria essa rede automaticamente se não for especificada uma rede customizada.

```bash
docker run -it ubuntu bash
docker inspect <container_id>
```

Ao listar as redes disponíveis com docker network ls, observamos redes como "bridge," "host," e "none." A "bridge" é a rede padrão.

```docker network ls```

## Comunicação via IP ##

Contêineres que não definem uma rede específica são automaticamente colocados na rede "bridge." Podemos verificar os IPs atribuídos aos contêineres dentro dessa rede. Supondo IPs 172.17.0.2 e 172.17.0.3:

``docker inspect <container_id_1> | grep IPAddress``
``docker inspect <container_id_2> | grep IPAddress``

Podemos, então, tentar uma comunicação direta via IP, como ping:
``docker exec -it <container_id_1> bash``
``apt-get update``
``apt-get install iputils-ping``
``ping 172.17.0.3``

## Criando uma Rede Personalizada ##
Para evitar a instabilidade da comunicação via IP, podemos criar uma rede personalizada no Docker. Listamos as redes existentes e criamos uma nova chamada "minha-rede.

``docker network ls``
``docker network create minha-rede``

Ao criar um contêiner e conectá-lo à nova rede, ele terá uma identidade mais estável e pode ser referenciado pelo nome do contêiner.

``docker run -it --network=minha-rede --name=meu-container ubuntu bash``

## Conclusão ##
Compreendemos a comunicação básica entre contêineres no Docker, explorando a rede "bridge" padrão e criando uma rede personalizada. A utilização de redes personalizadas oferece mais estabilidade e flexibilidade na comunicação entre contêineres, especialmente em cenários complexos com diversas aplicações. No entanto, há muito mais a explorar, incluindo tópicos avançados de redes e orquestração de contêineres.