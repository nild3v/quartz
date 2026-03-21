---
tags:
  - Tecnologia
added: 2026-03-18
updated: 2026-03-18
---
> [!info] Recursos
> - [📚 Broadcasting | Numpy](https://numpy.org/doc/stable/user/basics.broadcasting.html#broadcastable-arrays)

## Introdução

O broadcasting (difusão) é uma técnica usada para permitir operações entre *array*s de dimensões diferentes, mas ainda há limitações

**Exemplos:**

Suponhamos que queremos somar o vetor e a matriz abaixo:

$\vec{v}_{1 \times 3} = \begin{bmatrix}1 & 2 & 3\end{bmatrix}$

$A_{3 \times 3} = \begin{bmatrix}1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1\end{bmatrix}$

Matemática, não seria possível. O que poderíamos fazer seria transformar o vetor $\vec{v}$ em uma matriz

Você poderia fazer isso de diversas formas. Uma delas seria replicar o vetor 3 vezes e tornar cada cópia uma linha de uma matriz

$\begin{bmatrix}1 & 2 & 3\end{bmatrix} \to \begin{bmatrix}1 & 2 & 3 \\ 1 & 2 & 3 \\ 1 & 2 & 3 \end{bmatrix}$

Dessa forma, a soma seria possível

$\begin{bmatrix}1 & 2 & 3 \\ 1 & 2 & 3 \\ 1 & 2 & 3 \end{bmatrix} + \begin{bmatrix}1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1\end{bmatrix} = \begin{bmatrix}2 & 3 & 4 \\ 2 & 3 & 4 \\ 2 & 3 & 4 \end{bmatrix}$

Entretanto, não é todas os casos que poderemos aplicar essa técnica

Veja:

$\vec{w}_{1 \times 2} = \begin{bmatrix}1 & 2\end{bmatrix}$

$A_{3 \times 3} = \begin{bmatrix}1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1\end{bmatrix}$

Nesse caso mesmo que temos dimensões totalmente incompatíveis

Não há o muito o que fazer aqui, porque se replicarmos o vetor para criar uma matriz


$\begin{bmatrix}1 & 2\end{bmatrix} \to \begin{bmatrix}1 & 2 \\ 1 & 2 \\ 1 & 2  \end{bmatrix}$

Ainda faltará uma coluna e a soma entre ambas as matrizes não será possível


[Acesse a documentação do NumPy para saber mais](https://numpy.org/doc/stable/user/basics.broadcasting.html#general-broadcasting-rules)




