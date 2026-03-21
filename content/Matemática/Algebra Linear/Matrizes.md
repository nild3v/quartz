---
tags:
  - Matemática
added: 2026-03-07
updated: 2026-03-07
---
> [!info] Recursos
> - [📚 Matrices | Brilliant](https://brilliant.org/wiki/matrices/)
> - [📚 Matrices and Matrix Operations | OpenStax](https://openstax.org/books/college-algebra-2e/pages/7-5-matrices-and-matrix-operations)

## Introdução

É um objeto matemático definido como uma tabela ou *array* de números organizados em linhas e colunas

$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$ ou $\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$

Os elementos **horizontais** são as linhas da matriz

Os elementos **verticais** são as colunas da matriz

### Tamanho

O tamanho de uma matriz é dado por $m \times n$, onde:

- $m$ é o número total de linhas
- $n$ é o número total de colunas

**Exemplos:**

$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \to M_{2 \times 3}$

$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix} \to M_{3 \times 3}$

$\begin{bmatrix} 1 & 2 \\ 4 & 5 \\ 7 & 8 \end{bmatrix} \to M_{3 \times 2}$

Através do tamanho da matriz é possível descobrir o número total de elementos multiplicado o número de linhas ($m$) pelo número de colunas ($n$)

**Vale ressaltar que as matrizes são identificadas por letras maiúsculas, como o $M$ nos exemplos mostrados**

### Índices

Para identificarmos ou localizarmos um elemento específico na matriz, usamos índices, onde:

- $i$ é o índice da linha
- $j$ é o índice da coluna

Um elemento de uma matriz $A$ é denotado como $a_{i,j}$ 

Um elemento de uma matriz $B$ é denotado como $b_{i,j}$

Um elemento de uma matriz $C$ é denotado como $c_{i,j}$

E por assim vai...

**Exemplo:**

Dada a matriz:

$M_{2 \times 3} \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$

Cada é elemento é identificado por:

- $m_{1,1} = 1$
- $m_{1,2} = 2$
- $m_{1,3} = 3$
- $m_{2,1} = 4$
- $m_{2,2} = 5$
- $m_{2,3} = 6$

**Curiosidade!**

Para quem for programador já deve ter notado algo muito comum em loops ao percorrer uma lista ou uma matriz:

```python
for i in range(10):
	for j in range(10):
		# ...
```

O uso $i$ e $j$ como variáveis em loops não é uma coincidência, estão basicamente preservando os mesmos identificadores da matemática

## Operações

### Soma entre Matrizes

A soma entre duas matrizes só é possível quando ambas possuem o mesmo número de linhas e colunas:

$A_{m \times n} = \begin{bmatrix} a_{1,1} & a_{1,2} & \dots & a_{1, n} \\ a_{2,1} & a_{2, 2} & \dots & a_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m,1} & a_{m,2} & \dots & a_{m,n} \end{bmatrix}$

$B_{m \times n} = \begin{bmatrix} b_{1,1} & b_{1,2} & \dots & b_{1, n} \\ b_{2,1} & b_{2, 2} & \dots & b_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{m,1} & b_{m,2} & \dots & b_{m,n} \end{bmatrix}$

$A + B = \begin{bmatrix} a_{1,1} + b_{1,1} & a_{1,2} + b_{1,2} & \dots & a_{1, n}  + b_{1, n} \\ a_{2,1} + b_{2,1} & a_{2, 2} + b_{2, 2} & \dots & a_{2,n}  + b_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m,1} + b_{m,1} & a_{m,2} + b_{m,2} & \dots & a_{m,n} + b_{m,n} \end{bmatrix}$

**Exemplo:**

$A_{2 \times 3} = \begin{bmatrix} 1 & 2 & -2 \\ 4 & 5 & 10 \end{bmatrix}$

$B_{2 \times 3} = \begin{bmatrix} 0 & -2 & 1 \\ 7 & 3 & 2 \end{bmatrix}$

$A + B = \begin{bmatrix} 1 & 2 & -2 \\ 4 & 5 & 10 \end{bmatrix} + \begin{bmatrix} 0 & -2 & 1 \\ 7 & 3 & 2 \end{bmatrix} = \begin{bmatrix} 1 + 0 & 2 + (-2) & -2 + 1 \\ 4 + 7 & 5 + 3 & 10 + 2 \end{bmatrix} = \begin{bmatrix} 1 & 0 & -1 \\ 11 & 8 & 12 \end{bmatrix}$

### Subtração entre Matrizes

A subtração entre duas matrizes é a mesma coisa da soma, mas com a diferença no sinal

$A_{m \times n} = \begin{bmatrix} a_{1,1} & a_{1,2} & \dots & a_{1, n} \\ a_{2,1} & a_{2, 2} & \dots & a_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m,1} & a_{m,2} & \dots & a_{m,n} \end{bmatrix}$

$B_{m \times n} = \begin{bmatrix} b_{1,1} & b_{1,2} & \dots & b_{1, n} \\ b_{2,1} & b_{2, 2} & \dots & b_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ b_{m,1} & b_{m,2} & \dots & b_{m,n} \end{bmatrix}$

$A - B = \begin{bmatrix} a_{1,1} - b_{1,1} & a_{1,2} - b_{1,2} & \dots & a_{1, n}  - b_{1, n} \\ a_{2,1} - b_{2,1} & a_{2, 2} - b_{2, 2} & \dots & a_{2,n}  - b_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m,1} - b_{m,1} & a_{m,2} - b_{m,2} & \dots & a_{m,n} - b_{m,n} \end{bmatrix}$

**Exemplo:**

$A_{2 \times 3} = \begin{bmatrix} 1 & 2 & -2 \\ 4 & 5 & 10 \end{bmatrix}$

$B_{2 \times 3} = \begin{bmatrix} 0 & -2 & 1 \\ 7 & 3 & 2 \end{bmatrix}$

$A - B = \begin{bmatrix} 1 & 2 & -2 \\ 4 & 5 & 10 \end{bmatrix} - \begin{bmatrix} 0 & -2 & 1 \\ 7 & 3 & 2 \end{bmatrix} = \begin{bmatrix} 1 - 0 & 2 - (-2) & -2 - 1 \\ 4 - 7 & 5 - 3 & 10 - 2 \end{bmatrix} = \begin{bmatrix} 1 & 4 & -3 \\ -3 & 2 & 8 \end{bmatrix}$


### Produto entre uma Matriz e um Escalar

A multiplicação de uma matriz por um escalar consiste em multiplicar cada elemento da matriz pelo escalar

$A_{m \times n} = \begin{bmatrix} a_{1,1} & a_{1,2} & \dots & a_{1, n} \\ a_{2,1} & a_{2, 2} & \dots & a_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m,1} & a_{m,2} & \dots & a_{m,n} \end{bmatrix}$

$c \cdot A = \begin{bmatrix} c \cdot a_{1,1} & c \cdot  a_{1,2} & \dots & c \cdot a_{1, n} \\ c \cdot a_{2,1} & c \cdot a_{2, 2} & \dots & c \cdot a_{2,n} \\ \vdots & \vdots & \ddots & \vdots \\ c \cdot a_{m,1} & c \cdot a_{m,2} & \dots & c \cdot a_{m,n} \end{bmatrix}$

**Exemplo:**

$A_{2 \times 3} = \begin{bmatrix} 1 & 2 & -2 \\ 4 & 5 & 10 \end{bmatrix}$

$c = 10$

$c \cdot A = \begin{bmatrix} 10 \cdot 1 & 10 \cdot 2 & 10 \cdot -2 \\ 10 \cdot 4 & 10 \cdot 5 & 10 \cdot 10 \end{bmatrix} = \begin{bmatrix} 10 & 20 & -20 \\ 40 & 50 & 100 \end{bmatrix}$

### Produto entre Matrizes

O produto de duas matrizes é obtido multiplicando cada elemento da linha da primeira matriz pelos correspondentes elementos da coluna da segunda matriz e, em seguida, somando esses produtos para formar cada entrada da matriz resultante

Além disso, o produto entre matrizes só é possível quando o número de linhas de uma é igual ao número de colunas da outra

Se temos uma matriz $A_{m \times n}$ e uma $B_{p\times q}$, o produto delas retornará uma matriz $C_{m \times q}$

Vejamos um exemplo simples:

$A_{1 \times 3} = \begin{bmatrix} a_{1,1} & a_{1,2} & a_{1,3} \end{bmatrix}$

$B_{3 \times 1} = \begin{bmatrix} b_{1,1} \\ b_{2,1} \\ b_{3,1} \end{bmatrix}$

$A \cdot B = \begin{bmatrix} a_{1,1} & a_{1,2} & a_{1,3} \end{bmatrix} \cdot \begin{bmatrix} b_{1,1} \\ b_{2,1} \\ b_{3,1} \end{bmatrix} = a_{1,1} \cdot b_{1,1} +  a_{1,2} \cdot b_{2,1} + a_{1,3} \cdot b_{3,1}$

![[matrix_prod_01.gif]]

Nesse caso o produto entre essas duas matrizes resultou em uma com dimensão $1 \times 1$

Agora um exemplo um pouco maior:

$A_{2 \times 3} = \begin{bmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \end{bmatrix}$

$B_{3 \times 2} = \begin{bmatrix} b_{1,1} & b_{1,2} \\ b_{2,1} & b_{2, 2} \\ b_{3,1} & b_{3,2} \end{bmatrix}$

$A \cdot B = \begin{bmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \end{bmatrix} \cdot \begin{bmatrix} b_{1,1} & b_{1,2} \\ b_{2,1} & b_{2, 2} \\ b_{3,1} & b_{3,2} \end{bmatrix} = \begin{bmatrix} a_{1,1} \cdot b_{1,1} +  a_{1,2} \cdot b_{2,1} + a_{1,3} \cdot b_{3,1} & a_{1,1} \cdot b_{1,2} +  a_{1,2} \cdot b_{2,2} + a_{1,3} \cdot b_{3,2} \\ a_{2,1} \cdot b_{1,1} +  a_{2,2} \cdot b_{2,1} + a_{2,3} \cdot b_{3,1} & a_{2,1} \cdot b_{1,2} +  a_{2,2} \cdot b_{2,2} + a_{2,3} \cdot b_{3,2} \end{bmatrix}$

Dessa vez resultou em uma matriz $2 \times 2$

![[matrix_prod_02.gif]]
