---
tags:
  - Redes_de_Computadores
added: 2026-03-31
updated: 2026-04-08
aliases:
  - Three-way Handshake
---
> [!info] Recursos
> - [📄 The TCP/IP Guide](http://www.tcpipguide.com/)

## Introdução

O estabelecimento de conexão TCP envolve uma troca de mensagens ou pacotes entre o cliente e o servidor para que ambos os dispositivos acordem em iniciar uma conexão

Essas mensagens ou pacotes seguem um formato chamado Segmento (Segment) que permite enviar dados segmentados como uma sequência não estruturada de bytes 

Cada mensagem ou pacote é estruturada em três partes:

- Cabeçalho (Header): colocada antes dos dados, é uma pequena quantidade de bytes que informa detalhes sobre os dados e como devem ser processados/interpretados

- Conteúdo (Payload): são os dados reais a serem transmitidos, mas não necessariamente precisa conter algum, as vezes a informação contida no cabeçalho é mais importante

- Rodapé (Footer): semelhante ao cabeçalho com a única diferença que é ser colocado após os dados

Durante o estabelecimento da conexão TCP, dois sinalizadores (flags) de controle são usados no cabeçalho das mensagens:

- SYN (Synchronize): um bit que indica que o segmento está sendo usado para inicializar um conexão

- ACK (Acknowledgement): um bit que indica que o dispositivo que está enviando o segmento está transmitindo uma confirmação para a mensagem que recebeu

Então o processo acontece da seguinte forma:

1. O cliente envia um pacote com o sinalizador **SYN** ao servidor indicando que deseja iniciar uma conexão

2. O servidor recebe o pacote do cliente, então envia um pacote com o sinalizador **SYN** aceitando a tentativa de conexão e com o sinalizador **ACK** confirmando que recebeu a solicitação do cliente

3. O cliente recebe o pacote do servidor, então envia um pacote com o sinalizador **ACK** confirmando que recebeu a resposta de aceitação

A partir da última etapa a conexão está estabelecida e pronta para a transmitir dados entre os dispositivos

Este processo é conhecido como **"Three-way Handshake"** ou "**Aperto de Mão de Três Vias**"



