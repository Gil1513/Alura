# Resumo da Aula sobre Containers

Este documento apresenta um resumo da aula que discutiu os desafios relacionados à execução de sistemas compostos por várias aplicações e ferramentas interconectadas, bem como a solução oferecida pelos containers.

## Problema Central

O problema central abordado na aula é a complexidade de gerenciar sistemas compostos por várias aplicações interdependentes. Os principais desafios identificados incluem:

1. **Conflitos de Portas:** Devido à dependência de todas as aplicações na porta 80, surgem conflitos de portas que podem impedir a execução adequada das aplicações.

2. **Atualização de Versões:** Manter as aplicações atualizadas e gerenciar diferentes versões de software pode ser complicado e arriscado.

3. **Controle de Recursos:** Definir e gerenciar eficientemente o consumo de recursos, como CPU e memória, para cada aplicação é um desafio.

4. **Complexidade da Manutenção:** A manutenção a longo prazo de sistemas com várias aplicações pode ser trabalhosa e suscetível a erros.

## Soluções Propostas

Duas soluções foram discutidas na aula:

### 1. Alocar Máquinas Separadas

Uma solução inicial seria alocar uma máquina dedicada para cada aplicação. Isso resolveria os conflitos de portas, simplificaria o controle de recursos e facilitaria o gerenciamento de versões. No entanto, essa abordagem é dispendiosa, especialmente em sistemas com muitas aplicações em execução simultaneamente.

### 2. Utilizar Máquinas Virtuais

Outra alternativa são as máquinas virtuais, que oferecem isolamento entre aplicações e permitem a instalação independente de dependências e software. No entanto, surgiu a dúvida se essa abordagem é realmente necessária, considerando os custos associados à virtualização de sistemas operacionais completos.

### 3. Containers como Solução

A solução proposta durante o curso são os containers. Eles oferecem isolamento entre aplicações sem a necessidade de virtualizar todo um sistema operacional. Isso é alcançado sem a camada de hypervisor, resultando em uma solução mais leve e eficiente.

## Perguntas-Chave a Serem Abordadas

Durante o curso, serão exploradas as seguintes perguntas-chave:

- Por que os containers são mais leves em comparação com outras abordagens?
Resposta:
Os containers são mais leves em comparação com outras abordagens, como máquinas virtuais, porque eles compartilham o mesmo kernel do sistema operacional com o host. Isso significa que os containers não incluem um sistema operacional completo, apenas os recursos necessários para executar a aplicação. Isso resulta em um consumo mínimo de recursos e uma inicialização mais rápida, tornando os containers mais eficientes em termos de uso de recursos.
- Como os containers garantem o isolamento entre aplicações?
Resposta:
Os containers garantem o isolamento entre aplicações por meio da tecnologia de namespaces e cgroups do kernel do sistema operacional. Cada container possui seu próprio ambiente isolado, incluindo sistema de arquivos, processos, rede e recursos como CPU e memória. Isso impede que as aplicações interfiram umas nas outras e oferece um ambiente seguro para executar várias aplicações no mesmo host.
- Como os containers funcionam sem a necessidade de instalar um sistema operacional separado?
Resposta:
Os containers funcionam sem a necessidade de instalar um sistema operacional separado devido ao compartilhamento do kernel do sistema operacional host. Em vez de virtualizar um sistema operacional completo, como em máquinas virtuais, os containers aproveitam o kernel do sistema operacional subjacente. Cada container contém apenas as bibliotecas e binários necessários para a aplicação em execução, o que torna os containers mais leves e eficientes.

- Como os recursos são alocados e divididos entre as aplicações containerizadas?
Resposta:
Os recursos são alocados e divididos entre as aplicações containerizadas usando cgroups (control groups) e limites de recursos. Os cgroups permitem definir limites para recursos como CPU, memória e armazenamento para cada container. Isso garante que cada aplicação tenha uma parcela justa dos recursos disponíveis no sistema host. Além disso, os containers podem ser escalados horizontalmente para distribuir a carga e aproveitar melhor os recursos disponíveis.

Este resumo fornece uma visão geral dos principais conceitos discutidos na aula e das soluções propostas para lidar com os desafios de gerenciar sistemas complexos de aplicações interconectadas.
