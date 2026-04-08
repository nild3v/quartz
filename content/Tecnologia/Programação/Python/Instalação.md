---
tags:
  - Tecnologia
  - Programação
added: 2026-03-29
updated: 2026-04-08
---
> [!info] Recursos
> - [📄 Downloads | Python](https://www.python.org/downloads/)
> - [📄 Python | Archlinux Wiki](https://wiki.archlinux.org/title/Python)
> - [📄 Python | Ubuntu Docs](https://documentation.ubuntu.com/ubuntu-for-developers/howto/python-setup/)

## Introdução

O Python pode ser instalado ou usado de diferentes formas, como instalar diretamente no computador, instalar através de um *container*, instalar através de um gerenciador de versões, usar através de um editor online, etc.

Irei mostrar cada uma das possíveis formas de fazer isso e você escolha a qual achar melhor

> [!warning] Observação
> 
> Esse site inclui um mini editor de código integrado que permite executar o Python diretamente do navegador
> 
> Os tutoriais são criados usando essa funcionalidade, mas continua sendo sua escolha a forma que deseja programar

## Instalação Comum (Cross-Platform)

A instalação comum é feita baixando o instalador diretamente do site oficial do Python, não há segredos. Logo abaixo deixarei os links de acordo com o sistema operacional:

- [Windows](https://www.python.org/downloads/windows/)
- [MacOS](https://www.python.org/downloads/macos/)
- [Linux](https://www.python.org/downloads/source/)

> [!warning] Observação
> 
> Geralmente o Python já vem instalado no Linux. Acesse o terminal e digite `python` ou `python3` para verificar se está instalado

## Python Install Manager (Windows)

O Gerenciador de Instalação do Python é uma ferramente que pode ser baixada no Windows que permite instalar e obviamente gerenciar versões diferentes do Python

Você pode instalar-lo através da Microsoft Store:

- [Python Install Manager | Microsoft Store](https://apps.microsoft.com/detail/9nq7512cxl7t?hl=en-US&gl=BR)

E para mais informações, acesse e leia a documentação:

- [Gerenciador de instalação do Python | Python Docs](https://docs.python.org/pt-br/3.14/using/windows.html#python-install-manager)

## Package Managers (Linux)

No mundo Linux há diversas distribuições com diferentes gerenciadores e repositórios de pacotes

O Python pode ser instalado através desses gerenciadores de pacotes, executando uma simples linha de comando no terminal, mas pode ser desnecessário, porque geralmente o Python já vêem pré-instalado no sistema

### Arch Linux, Cachy OS, Manjaro e outros

Abra o terminal e digite:

```bash
sudo pacman -S python
```

 O pacote pode ser encontrado no site oficial do Arch Linux: [clique aqui](https://archlinux.org/packages/?q=python)
Veja um vídeo de demonstração:

![[install-python_archlinux.mp4]]

### Debian, Ubuntu, Zorin OS e outros

Abra o terminal e digite:

```bash
sudo apt update -y
```

```bash
sudo apt install python3 -y
```

Veja um vídeo de demonstração:

![[install-python_ubuntu.mp4]]

### Fedora

Abra o terminal e digite:

```bash
sudo dnf install python
```

Veja um vídeo de demonstração:

![[install-python_fedora.mp4]]

### OpenSUSE

Abra o terminal e digite:

```bash
sudo zypper install python313
```

Veja um vídeo de demonstração:

![[install-python_opensuse.mp4]]

## Docker (Cross-Platform)

O [Docker](https://docs.docker.com/get-started/) é uma tecnologia que permite executar softwares dentro de ambientes isolados independente do sistema operacional, é como se colocássemos uma aplicação dentro de uma caixinha e pudêssemos trasportar ela para qualquer lugar

O Python está incluso nisso, você usá-lo dentro de um *Docker Container*:

```bash
docker run -it python:3.14.0 bash
```

Veja um vídeo de demonstração:

![[install-python_docker.mp4]]

## Dev Containers (Cross-Platform)

[Dev Containers](https://containers.dev/) é uma tecnologia que permite criar ambientes de desenvolvimento dentro de *Containers Docker*. Então antes de usá-los, tenha o Docker instalado em sua máquina

Veja uma demonstração simples de como criar um Dev Container com o Python v3.13.0 no Visual Studio Code:

![[install-python_devcontainer.mp4]]

## Homebrew (MacOS e Linux)

O [Homebrew](https://brew.sh/) é um gerenciador de pacotes criado principalmente para o MacOS, mas pode ser instalado em distribuições Linux também

Para instalar o Python com ele, basta digitar o seguinte comando:

```bash
brew install python@3.14
```

Você também pode baixar algumas outras versões disponíveis, como:

```bash
brew install python@3.13
```

## PyEnv (Cross-Platform)

O [pyenv](https://github.com/pyenv/pyenv) é um software que permite instalar, gerenciar e alternar versões do Python

Abaixo há um exemplo de como usá-lo para baixar o Python v3.14.0:

```bash
pyenv install 3.14.0
```

O comando abaixo define uma versão específica como global, ou seja, a versão que será usada por padrão em qualquer diretório ou sessão de terminal se não houver nenhuma outra versão definida localmente:

```bash
pyenv global 3.14.0
```



