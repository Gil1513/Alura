# Resumo da Aula sobre Containers

Nesta aula, abordamos várias questões importantes relacionadas aos containers e suas características fundamentais. Aqui estão os principais pontos discutidos:

## Leveza dos Containers

A principal pergunta abordada foi por que os containers são mais leves em comparação com máquinas virtuais. A resposta a essa pergunta está relacionada ao fato de que os containers funcionam diretamente como processos dentro do sistema operacional hospedeiro, enquanto as máquinas virtuais exigem virtualização completa do sistema operacional. Isso resulta em um menor consumo de recursos e uma inicialização mais rápida para os containers.

## Isolamento entre Containers

Os containers garantem o isolamento entre si e em relação ao sistema operacional hospedeiro por meio do uso de namespaces. Existem vários tipos de namespaces, incluindo PID (isolamento de processos), NET (isolamento de rede), IPC (isolamento de comunicação entre processos), MNT (isolamento de sistema de arquivos) e UTS (isolamento de host e Kernel).

## Funcionamento sem a Necessidade de um Sistema Operacional Separado

A capacidade dos containers de funcionarem sem a necessidade de instalar um sistema operacional separado é explicada pelo namespace UTS. Graças a esse namespace, os containers compartilham o Kernel do sistema operacional hospedeiro de forma isolada.

## Gerenciamento de Recursos com Cgroups

Para controlar o consumo de recursos, como memória e CPU, para cada container, utiliza-se o conceito de "Cgroups" (control groups). Isso permite definir limites de recursos tanto de maneira automática quanto manual, garantindo que cada container tenha acesso aos recursos necessários.

## Conclusão

Nesta aula, exploramos por que os containers são mais leves, como eles garantem o isolamento entre aplicações, como funcionam sem a necessidade de um sistema operacional separado e como os recursos são alocados e gerenciados entre os containers. Compreender esses conceitos fundamentais é crucial para trabalhar com containers de forma eficaz.