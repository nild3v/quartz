---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-03-17
updated: 2026-04-07
---
> [!info] Recursos
> - [🎥 Everything around YOU is just Tensors! | Brain Station Advanced](https://www.youtube.com/watch?v=HGTMiYbrNmk)
> - [🎥 Tensor | Reumi's World](https://www.youtube.com/watch?v=cd8pNx4Sty8)
> - [🎥 Tensor Definition | eigenchris](https://www.youtube.com/watch?v=TvxmkZmBa-k&list=PLJHszsWbB6hrkmmq57lX8BV-o-YIOFsiG&index=2)
> - [🎥 What's a Tensor? | Dan Fleisch](https://www.youtube.com/watch?v=f5liqUk0ZTw)

## Introdução

O conceito de tensor pode ser diferente dependendo da área de estudo, mas iremos abordar todas

## Tensores na Computação

Na computação, tensores são definidos como uma estrutura de dados multidimensional, podendo ser um valor numérico, uma lista, uma matriz bidimensional ou tridimensional, etc.

## Tensores na Matemática e na Física

Um tensor é um objeto matemático que se permanece invariante sobre as mudanças dos sistemas de coordenadas/referências, exceto as suas componentes que mudam de uma maneira previsível

É **representado** como uma matriz multi-dimensional de números, como:

- $\begin{bmatrix} s \end{bmatrix}$

- $\begin{bmatrix} v_{1} \\ v_{2} \\ \vdots \\ v_{n} \end{bmatrix}$

- $\begin{bmatrix} m_{1;1} & m_{1;2} & \dots & m_{1;n} \\ m_{2;1} & m_{2;2} & \dots & m_{2;n} \\ \vdots & \vdots & \ddots & \vdots \\ m_{n;1} & m_{n;2} &\dots & m_{n;n} \end{bmatrix}$

### Ordem (Rank)

Os tensores são classificados em "Ordem" ou "Rank" com base no número de **índices** necessários para descrevê-lo

Esse "índice" é o mesmo utilizado em matrizes para localizar um elemento, a diferença é que tensores são multi-dimensionais, logo, esse número de índices é variável

Veja as principais classificações:

**Ordem 0:** São tensores que não possuem nenhum índice, atuam como escalares

$\begin{bmatrix} s \end{bmatrix}$

**Ordem 1:** São tensores que possuem um único índice, atuam como vetores

$\begin{bmatrix} v_{1} \\ v_{2} \\ \vdots \\ v_{n} \end{bmatrix}$

**Ordem 2:** São tensores que possuem dois índices, atuam como matrizes

$\begin{bmatrix} m_{1;1} & m_{1;2} & \dots & m_{1;n} \\ m_{2;1} & m_{2;2} & \dots & m_{2;n} \\ \vdots & \vdots & \ddots & \vdots \\ m_{n;1} & m_{n;2} &\dots & m_{n;n} \end{bmatrix}$

**Ordem Superior:** São tensores que possuem três ou mais índices

🏗 Em breve...


> [!warning] Observação
> 
> Vale ressaltar que o número de índices ou a "Ordem" de um tensor **não** defini o número de dimensões que o **espaço** possui
> 
> Por exemplo, em transformações lineares usamos matrizes para definir vetores em **espaços** de 2 ou 3 dimensões

### Índice

Um índice de um tensor indica o número de vetores (perspectiva da matemática) ou de grandezas (perspectiva da física) que o tensor armazena

### Invariância

Os tensores são invariantes em relação à mudança do sistema de coordenadas/referência, mas o que isso significa?

Inicialmente, observe o vetor abaixo:

🏗 Em breve...
