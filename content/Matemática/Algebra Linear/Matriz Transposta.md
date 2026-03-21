---
tags:
  - Matemática
added: 2026-03-17
updated: 2026-03-17
---
> [!info] Recursos
> - [📹 The Matrix Transpose: Visual Intuition | Sam Levey](https://www.youtube.com/watch?v=wjYpzkQoyD8)
> - [📚 Transpose | Wikipedia](https://en.wikipedia.org/wiki/Transpose)
> - [📚 Transpose and Determinant| Brilliant](https://brilliant.org/wiki/matrices/#transpose-and-determinant)

## Introdução

A transposição de uma matriz consiste em trocar as linhas pelas colunas e as colunas pelas linhas

Denotamos uma matriz transposta como:

$A^T$ 

Onde:

- As **colunas** de uma matriz $A$ são as **linhas** da matriz $A^T$

- As **linhas** de uma matriz $A$ são as **colunas** da matriz $A^T$

- Dada uma matriz $A_{m \times n}$ a matriz transposta será $A^T_{n \times m}$

Podemos ver essa transposição de duas formas

A primeira onde os elementos da diagonal principal se mantêm fixos enquanto os demais alternam de posição

Um elemento $a_{i,j}$ que não faz parte da diagonal principal, ele irá trocar de posição com o elemento $a_{j,i}$

![[matrix_transpose_01.gif]]

A segunda forma é imaginar a matriz rotacionando sobre a sua diagonal principal:

![[matrix_transpose_02.gif]]

## Propriedades

### Transposição da Transposição

Sendo $n$ um número inteiro positivo divisível por $2$ (número par), transpor uma matriz $n$ vezes sempre irá anular a transposição e manterá a matriz em seu estado original

$(A^T)^T = A$ 

### Transposição da Soma

Dada a seguinte expressão:

$(A + B)^T$

Ela pode ser reescrita como a soma das matrizes transpostas:

$A^T + B^T$

### Transposição de um Produto Escalar

Dada a seguinte expressão:

$(c \cdot A)^T$

Ela pode ser reescrita como o produto escalar da matriz transposta:

$c \cdot (A)^T$

### Transposição de um Produto de Matrizes

Dada a seguinte expressão:

$(A \cdot B)^T$

Ela pode ser reescrita como o produto da matrizes transpostas, mas com a ordem dos termos invertidos:

$B^T \cdot A^T$

Os termos se invertem, porque ao calcularmos $B^T \cdot A^T$ conseguimos chegar no mesmo resultado de $(A \cdot B)^T$

Se fosse $A^T \cdot B^T$ o resultado seria diferente

Isso ocorre porque o produto de matrizes não é comutativa:

$A \cdot B \neq B \cdot A$

### Transposição da Matriz Inversa

Dada a expressão:

$(A^{-1})^T$

Ela pode ser reescrita como:

$(A^T)^{-1}$

### Produto Escalar

Dado o produto escalar entre dois vetores colunas ($m\times1$) ou linhas ($1 \times n$):

$\vec{v} \cdot \vec{w}$

O produto escalar pode ser reescrito como o produto de duas matrizes, onde uma é transposta:

$(\vec{v})^T \cdot \vec{w}$

