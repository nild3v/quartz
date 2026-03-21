---
tags:
  - Matemática
added: 2026-03-16
updated: 2026-03-16
---
> [!info] Recursos
> - [📹 Linear combinations, span, and basis vectors | 3Blue1Brown](https://www.youtube.com/watch?v=k7RM-ot2NWY)
> - [📚 Basis | Brilliant](https://brilliant.org/wiki/bases/)
> - [📚 Basis | Wikipedia](https://en.wikipedia.org/wiki/Basis_(linear_algebra))

## Introdução

Vetores de base é um conjunto de vetores $B$ de um espaço vetorial $V$ onde cada elemento de $V$ pode ser representado por uma combinação linear dos elementos de $B$

A partir desses vetores é possível formar todo o espaço vetorial, por isso o termo "base"

Além disso, os elementos de $B$ devem ser **linearmente independentes**, ou seja, nenhum vetor do conjunto pode ser representado por uma combinação linear de outros vetores do mesmo conjunto

Por exemplo, os vetores:

$\vec{v} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

$\vec{w} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

São **linearmente independentes**, porque não é possível representar nenhum vetor do conjunto por uma combinação linear entre os demais vetores 

Agora, os vetores abaixo:

$\vec{a} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

$\vec{b} = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$

São **linearmente dependentes**, porque o vetor $\vec{b}$ pode ser representado por uma combinação linear de $\vec{a}$, e o vetor $\vec{a}$ pode ser representado por uma combinação linear de $\vec{b}$

Veja:

$\vec{b} = \vec{a} + \vec{a}$

$\vec{b} = 2 \cdot \vec{a}$

$\vec{a} = \vec{b} - \vec{a}$

$\vec{a} = \frac{1}{2} \cdot \vec{b}$

## Plano Cartesiano

No plano cartesiano, os vetores de base são vetores unitários alocados em cada eixo e apontando no sentido positivo do plano:

$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

$\hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

Em um espaço 3D seria:

$\hat{i} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$

$\hat{j} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$

$\hat{k} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$