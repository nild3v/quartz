---
tags:
  - Tecnologia
added: 2026-03-15
updated: 2026-03-15
---
> [!info] Recursos
> - [📹 O que é Firewall? | PowerCert Animated Videos](https://www.youtube.com/watch?v=kDEX1HXybrU)
> - [📹 O que é Firewall | Cloudflare](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
> - [📚 Firewall (Estrutura de Edifício) | Wikipedia](https://en.wikipedia.org/wiki/Firewall_(construction))
> - [📚 UFW | DigitalOcean](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)

## Introdução

O termo *firewall* vêem uma estrutura usada em construções de edifícios, onde uma barreira a prova de fogo é construída para prevenir que as chamas se espalhem de um cômodo para o outro durante incêndios

Essa mesma ideia é usada no sistema de segurança de rede conhecido também como *firewall*. Portanto, no contexto de Cibersegurança, ele é um sistema que cria uma barreira de proteção ao monitorar e controlar o tráfego de rede com base em um conjunto de regras definidas

![[firewall.svg]]

Os firewalls podem bloquear tráfegos com base em endereços de IP, protocolos, portas e outros

## Tipos de Firewall

### Host-based

Um *firewall host-based* é um software que é instalado em um sistema *host* (computador, celular, etc.) que protege somente ele

![[firewall-host-based.svg]]

Como o [Windows Defender Firewall](https://support.microsoft.com/en-us/windows/firewall-and-network-protection-in-the-windows-security-app-ec0844f7-aebd-0583-67fe-601ecf5d774f) que vêm por padrão no Windows, e o [firewalld](https://wiki.archlinux.org/title/Firewalld) e o [ufw](https://wiki.archlinux.org/title/Uncomplicated_Firewall) que podem serem ou virem instalados em distribuições Linux

### Network-based

Um *firewall network-based* é uma combinação de hardware e software que atua em nível de rede. Dessa forma o sistema pode filtrar o tráfego antes mesmo que chegue aos dispositivos

![[firewall-network-based.svg]]

Além disso é recomendado combinar ambos os tipos de firewall para criar uma segunda camada de proteção caso algo malicioso consiga passar pelo firewall de rede, de modo que o dispositivo *host* ainda tenha uma forma de se proteger








