---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-03-18
updated: 2026-03-31
---
> [!info] Recursos
> - [🎥 Eigenvectors and Eigenvalues | 3Blue1Brown](https://www.youtube.com/watch?v=PFDu9oVAE-g)
> - [🎥 Eigenvectors and Eigenvalues | Wikipedia](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors)

## Introdução

Um Autovetor (Eigenvector) é um vetor não nulo que possui sua **direção** inalterada após uma transformação linear

Entretanto, seu comprimento é variável e durante uma transformação linear pode ser esticado ou comprimido por um fator $\lambda$ (lambda). Esse fator de escala é chamado de Autovalor (Eigenvalue)

Vale ressaltar que **direção** é diferente de **sentido**. A **direção** está relacionada com a inclinação da reta que compõe o vetor, enquanto o **sentido** que é representado por uma ponta de uma flecha, indica para onde está apontando

Então, se uma transformação linear inverte o sentido de um vetor não nulo, ou seja, aponta em uma direção oposta à original, esse vetor é considerado um Autovetor (Eigenvector), porque a direção permaneceu inalterada

A equação para Autovetores pode ser denotada da seguinte forma:

$T(\vec{v}) = \lambda \vec{v}$

Onde:

- $T$ é uma transformação linear
- $\vec{v}$ é um vetor não nulo (Autovetor)
- $\lambda$ é o fator de escala aplicado após a transformação (Autovalor)

Sabendo a relação de transformações lineares com matrizes, podemos escrever de outra forma:

$A\vec{v} = \lambda \vec{v}$

Onde:

- $A$ é uma matriz quadrada que representa uma transformação linear
- $\vec{v}$ é um vetor não nulo (Autovetor)
- $\lambda$ é o fator de escala aplicado após a transformação (Autovalor)

Veja um exemplo de Autovetor:

![[eigenvector_01.gif]]

A linha rosa desenhada no plano indica a direção do vetor antes da transformação e perceba que o vetor amarelo ($\vec{v}$) não teve sua direção alterada, apenas seu comprimento aumentado

Nesse caso o vetor foi escalado por um fator de $2$, porque ele saiu de $\begin{bmatrix} 3 \\ 2 \end{bmatrix}$ para $\begin{bmatrix} 6 \\ 4 \end{bmatrix}$ , logo, o Autovalor ($\lambda$) é $2$


