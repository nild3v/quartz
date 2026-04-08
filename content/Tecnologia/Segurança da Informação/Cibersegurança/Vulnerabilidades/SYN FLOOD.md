---
tags:
  - Tecnologia
  - Cibersegurança
added: 2026-03-31
updated: 2026-04-08
---
> [!info] Recursos
> - [📄 O que é um ataque de inundação SYN? | Cloudflare](https://www.cloudflare.com/pt-br/learning/ddos/syn-flood-ddos-attack/)
> - [📄 Way HandShake | Igor Oliveira](https://dev.to/oliverigor27/desvendando-o-three-way-handshake-parte-1-a-engrenagem-invisivel-da-comunicacao-tcp-49gi)

## Introdução

Um **SYN Flood** ou **Inundação SYN** é um ataque que explora uma vulnerabilidade no processo de estabelecimento de conexão do protocolo TCP, chamado [**Three-way Handshake**](Estabelecimento%20de%20Conex%C3%A3o%20TCP.md)

Basicamente o processo acontece da seguinte forma:

1. 🔴 O cliente envia um pacote SYN ao servidor para iniciar a conexão

2. 🟠 O servidor responde ao pacote inicial com um pacote SYN/ACK para confirmar a comunicação

3. 🟡 O cliente devolve um pacote ACK para confirmar o recebimento do pacote do servidor

4. 🟢 Pronto para enviar e receber dados

O **SYN Flood** abusa da terceira etapa citada acima, onde o servidor deve esperar por uma confirmação do cliente para abrir a conexão definitivamente

O problema é que o servidor aloca recursos temporariamente enquanto espera a confirmação do cliente, mas se essa confirmação nunca for enviada e novas solicitações de conexões forem feitas, mais recursos serão alocados e o número de conexões pendentes irão acumular

Então o atacante explora esse problema enviando diversos pacotes SYN para solicitar diversas conexões com o servidor a partir de clientes com IPs falsificados

Na etapa de confirmação, o último pacote não é enviado e os recursos alocados durante a tentativa de conexão permanecem temporariamente, mas o suficiente para que o atacante repita o processo diversas vezes até que o servidor fique sem recursos e deixe de funcionar corretamente

