---
tags:
  - Matemática
added: 2026-03-18
updated: 2026-03-18
---
> [!info]
> - [📚 Linear Independence | Wikipedia](https://en.wikipedia.org/wiki/Linear_independence)

## Introdução

Independência Linear significa que em um conjunto de vetores $V$, nenhum vetor pode ser representado por uma combinação linear dos demais vetores do conjunto

Se existir um vetor que não atenda essa condição, o conjunto é definido como linearmente dependente

**Exemplo:**

Suponhamos que um conjunto possua 3 vetores:

$\vec{v}=  \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

$\vec{w}=  \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

$\vec{p} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$

Perceba que vetor $\vec{p}$ possa ser representado por uma combinação linear dos vetores $\vec{v}$ e $\vec{w}$

$\vec{p} = \vec{v} + \vec{w} + \vec{w}$

$\vec{p} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

$\vec{p} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$

Os vetores $\vec{v}$ e $\vec{w}$ também:

$\vec{v} = \vec{p} - 2\vec{w}$

$\vec{w} = \frac{1}{2}(\vec{p} - \vec{v})$

Nesse caso, os vetores são **linearmente dependentes**

Agora sobre Independência Linear, um exemplo simples são os vetores de base de um plano de coordenadas cartesianas:

$\hat{i} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$

$\hat{j} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

Não existe combinações lineares que possa representar $\hat{i}$ ou $\hat{j}$. Portanto são **linearmente independentes**




