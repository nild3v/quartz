---
tags:
  - Matemática
added: 2026-03-07
updated: 2026-03-07
---
> [!info] Recursos
> - [📚 Linear Transformation | Brilliant](https://brilliant.org/wiki/linear-transformations/#types-of-linear-transformations)
> - [📹 Linear transformations and matrices | 3Blue1Brown](https://www.youtube.com/watch?v=kYB8IZa5AuE)

## Introdução

Uma transformação linear é uma função que recebe um vetor de um espaço vetorial como entrada e retorna outro vetor de um espaço vetorial diferente como saída que permanece respeitando os axiomas definidos:

$T: V \to W$

## Operações

### Soma

$T(\vec{v} + \vec{u}) = T(\vec{v}) + T(\vec{u})$

### Produto por Escalar

$T(a \vec{v}) = a \cdot T(\vec{v})$

## Exemplos de Transformações

Abaixo você verá várias animações demonstrado as transformações lineares e perceberá que em cada uma delas há uma malha ou grade cinza de fundo

Essa grade ou malha é para permitir observar a diferença de antes e depois da transformação linear

### Rotação

Abaixo há um exemplo de matriz que quando aplicada em todo o espaço vetorial, cria um efeito de rotação no sentido horário:

$A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$

$T(\vec{v}) = A \cdot \vec{v}$

Veja:

![[linear_transformation_01.gif]]

A transformação linear não está sendo aplicada apenas nos vetores unitários, mas no espaço inteiro

Vale ressaltar também que a transformação foi aplicada 4 vezes seguidas, completando um ciclo completo

### Escalonamento

Abaixo há um exemplo de matriz que quando aplicada em todo o espaço vetorial, escalona todo o espaço:

$A = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$

$T(\vec{v}) = A \cdot \vec{v}$

Veja:

![[linear_transformation_02.gif]]

### Achatamento

Abaixo há um exemplo de matriz que quando aplicada em todo o espaço vetorial, o eixo $y$ é espremido até o espaço se torne apenas uma única: linha

$A = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$

$T(\vec{v}) = A \cdot \vec{v}$

Veja:

![[linear_transformation_03.gif]]