---
tags:
  - Matemática
added: 2026-03-16
updated: 2026-03-16
---
> [!info] Recursos
> - [📚 Vetor Unitário | Brilliant](https://brilliant.org/wiki/unit-vectors/)
> - [📚 Vetor Unitário | Wikipedia](https://pt.wikipedia.org/wiki/Vetor_unit%C3%A1rio)
> - [📹 How To Find The Unit Vector | The Organic Chemistry Tutor](https://www.youtube.com/watch?v=f5DHYCKyVRo)

## Introdução

Um vetor unitário é um vetor que possui magnitude $1$ que aponta em uma direção específica

Os vetores unitários também são chamados de "vetores normalizados", porque preservam as direções dos vetores e os normalizam para terem magnitude $1$

São usados quando o único interesse é saber o sentido e a direção do vetor, desconsiderando a magnitude

No plano cartesiano, os vetores de base são vetores unitários alocados em cada eixo e apontando no sentido positivo do plano:

$\hat{i} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$

$\hat{j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$

Veja uma representação gráfica:

![[unit_vectors_2d.png]]

Em um espaço 3D seria:

$\hat{i} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$

$\hat{j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$

$\hat{k} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$

Veja uma representação gráfica:

![[unit_vectors_3d.png]]

A partir desses vetores é possível decompor as componentes de um vetor:

$\vec{v} = \vec{v_{x}} + \vec{v_{y}} + \vec{v_{z}}$

$\vec{v} = v_{x}\hat{i} + v_{y}\hat{j} + v_{z}\hat{k}$

Veja:

![[unit_vectors_composition.gif]]

## Cálculo

Como é feito para encontrar o vetor unitário de um determinado vetor?

Bem, sabemos que o nosso objetivo é preservar a direção e o sentido desse vetor, mas deixá-lo com magnitude $1$

Se um vetor possui magnitude $x$, basta dividir o vetor pela sua própria magnitude para que seu comprimento seja $1$

A magnitude ou o comprimento de um vetor é dado pelo seu módulo:

$|\vec{v}| = \sqrt{ v_{x}^2 + v_{y}^2 }$

A fórmula acima é para vetores de 2 dimensões, se fosse 3 seria assim:

$|\vec{v}| = \sqrt{ v_{x}^2 + v_{y}^2 + v_{z}^2 }$

Sabendo disso, a fórmula para calcular o vetor unitário seria:

$\hat{v} = \dfrac{\vec{v}}{|\vec{v}|}$

### Exemplo

Dado o vetor:

$\vec{v} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$

As suas componentes são:

$\vec{v}_{x} = \begin{bmatrix} 3 \\ 0 \end{bmatrix}$

$\vec{v}_{y} = \begin{bmatrix} 0 \\ 2 \end{bmatrix}$

O valor escalar de cada componente é:

$v_{x} = 3$

$v_{y} = 2$

Logo, a magnitude do vetor é:

$|\vec{v}| = \sqrt{ v_{x}^2 + v_{y}^2}$

$|\vec{v}| = \sqrt{3^2 + 2^2}$

$|\vec{v}| = \sqrt{9 + 4}$

$|\vec{v}| = 3 + 2$

$|\vec{v}| = 5$

Então o vetor unitário seria:

$\hat{v} = \dfrac{\vec{v}}{|\vec{v}|}$

$\hat{v} = \dfrac{\vec{v}}{5}$

$\hat{v} = \dfrac{1}{5} \cdot \vec{v}$

$\hat{v} = \dfrac{1}{5} \cdot \begin{bmatrix} 3 \\ 2 \end{bmatrix}$

$\hat{v} = \begin{bmatrix} \frac{3}{5} \\ \frac{2}{5} \end{bmatrix}$

