---
tags:
  - Matemática
added: 2026-03-16
updated: 2026-03-16
---
> [!info] Recursos
> - [📹 All the Intuition Behind Matrices in 5 Minutes | MathExplained](https://www.youtube.com/watch?v=jONjuNWTPwM)
> - [📹 Linear transformations and matrices | 3Blue1Brown](https://www.youtube.com/watch?v=kYB8IZa5AuE&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=3)
> - [📹 Matrix multiplication as composition | 3Blue1Brown](https://www.youtube.com/watch?v=XkY2DOUCWMU&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=5)
> - [📹 Change of basis | 3Blue1Brown](https://www.youtube.com/watch?v=P2LTAUO1TdA)
> - [📚 Linear Transformations and Matrices | 3Blue1Brown](https://www.3blue1brown.com/lessons/linear-transformations)

**Recomendo bastante que veja os vídeos e os sites acima ☝️**

## Introdução

O que são Matrizes? Você saberia definir o que é uma Matriz sem levar em consideração a sua representação visual? 

 $\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$

Geralmente definimos como um conjunto de elementos organizados por linhas e colunas, mas será que é somente isso?

Bem, sendo direto ao ponto, podemos dizer que matrizes são semelhantes às funções lineares:

$f(x) = ax + b$

Mas em vez de transformar escalares em outros escalares, uma Matriz transformar vetores em outros vetores:

$T(\vec{v}) = \vec{w}$

Chamamos isso de "Transformação Linear"

Na multiplicação de matrizes seria como uma composição de funções lineares e ambas não são comutativas:

$f(g(x)) \neq g(f(x))$

$A \cdot B \neq B \cdot A$

Mas estou apenas colocando ideias sem explicá-las, então vamos desenvolver isso

## Explicação

Antes de ver a explicação, é bom já ter visto sobre [Espaços Vetoriais](Espaço%20Vetorial.md), [Vetores de Base](Vetores%20de%20Base.md), [Vetores Unitários](Vetores%20Unitários.md), [Transformações Lineares](Transformações%20Lineares.md)

Então vamos começar:

![[matrix_linear_transformation_01.png]]

Temos um plano bidimensional com dois vetores de base que são unitários, identificados por $\hat{i}$ e $\hat{j}$

Vamos considerar um vetor $\vec{v}$ com coordenadas $(2, 2)$:

![[matrix_linear_transformation_02.png]]

O vetor $\vec{v}$ pode ser expressado como:

$\vec{v} = \begin{bmatrix} 2 \\ 2 \end{bmatrix}$

Mas também pode ser escrito como uma combinação linear dos vetores de base:

$\vec{v} = 2\hat{i} + 2\hat{j}$

Agora vamos aplicar uma transformação linear, mas sem o vetor $\vec{v}$:

![[matrix_linear_transformation_03.gif]]

O vetor $\vec{v}$ foi ocultado, porque quero propor a seguinte questão: **Como encontrar o vetor $\vec{v}$ após a transformação?**

Bem, primeiramente, percebemos que os nossos vetores de base mudaram:

O vetor $\hat{i}$ saiu de $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ para  $\begin{bmatrix}2 \\ 0\end{bmatrix}$

O vetor $\hat{j}$ saiu de $\begin{bmatrix} 0 \\ 1 \end{bmatrix}$ para  $\begin{bmatrix}1 \\ 1\end{bmatrix}$

Levando em consideração a expressão anterior:

$\vec{v} = 2\hat{i} + 2\hat{j}$

Podemos usar disso para podermos encontrar a saída gerada por $\vec{v}$ após a transformação:

$\vec{v} = 2\hat{i} + 2\hat{j}$

$\vec{v} = 2 \begin{bmatrix}2 \\ 0\end{bmatrix} + 2\begin{bmatrix}1 \\ 1\end{bmatrix}$

$\vec{v} = \begin{bmatrix}4 \\ 0\end{bmatrix} + \begin{bmatrix}2 \\ 2\end{bmatrix}$

$\vec{v} = \begin{bmatrix}6 \\ 2\end{bmatrix}$

O que acabamos de fazer é uma multiplicação matricial:

Nosso vetor originalmente era: 

$\vec{v} = \begin{bmatrix} 2 \\ 2 \end{bmatrix}$

E multiplicamos ele por:

$\begin{bmatrix}2 & 1 \\ 0 & 1\end{bmatrix}$

Onde cada coluna representa um vetor, $\hat{i}$ e $\hat{j}$ respectivamente 

$A \cdot \vec{v} = \begin{bmatrix}2 & 1 \\ 0 & 1\end{bmatrix} \begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix}2 \cdot 2 + 1 \cdot 2 \\  0 \cdot 2 + 1 \cdot 2\end{bmatrix} = 2 \begin{bmatrix}2 \\ 0\end{bmatrix} + 2\begin{bmatrix}1 \\ 1\end{bmatrix} = \begin{bmatrix}6 \\ 2\end{bmatrix}$

Esse cálculo que acabamos de fazer também pode ser vista de uma forma visual:

![[matrix_linear_transformation_04.gif]]

Agora vamos pensar em outro vetor, um vetor onde suas coordenadas são totalmente desconhecidas, como poderíamos saber em que coordenadas ele irá parar após a transformação?

Vamos levar em consideração os mesmos vetores de base anteriores:

$\hat{i} = \begin{bmatrix}2 \\ 0\end{bmatrix}$

$\hat{j} = \begin{bmatrix}1 \\ 1\end{bmatrix}$

Sabemos que a partir de uma combinação linear deles, podemos encontrar qualquer vetor que pertence a esse espaço vetorial

Portanto, se tenho um vetor $w$ com coordenadas $\begin{bmatrix}x \\ y\end{bmatrix}$

Poderia reescrevê-lo como: 

$\vec{w} = x \hat{i} + y \hat{j}$

Que seria o mesmo que:

$\vec{w} = x \begin{bmatrix}2 \\ 0\end{bmatrix} + y \begin{bmatrix}1 \\ 1\end{bmatrix}$

Resolvendo o cálculo:

$\vec{w} = \begin{bmatrix}2x \\ 0x\end{bmatrix} + \begin{bmatrix}1y \\ 1y\end{bmatrix}$

$\vec{w} = \begin{bmatrix}2x + 1y \\ 0x + 1y \end{bmatrix}$

A partir dessa pequena fórmula, podemos descobrir onde qualquer vetor vai parar após aplicar essa transformação

Podemos generalizar isso ainda mais, se substituirmos os valores dos nossos vetores de base por letras:

$\hat{i} = \begin{bmatrix}a \\ b\end{bmatrix}$

$\hat{j} = \begin{bmatrix}c \\ d\end{bmatrix}$

A expressão anterior ficaria assim:

$\vec{w} = \begin{bmatrix}ax + by \\ cx + dy \end{bmatrix}$


Espero que essa explicação tenha esclarecido um pouco a relação de matrizes com funções

A ideia principal é pensar que elas como funções que mapeiam vetores em outros vetores, ou seja, "Transformação Linear"

Mas ainda falta uma coisa, qual a relação delas com a composição de funções?

É bem simples, veja por si só o que acontece quando aplicamos duas transformações lineares em sequência, mas em ordem diferentes:

![[matrix_linear_transformation_05.gif]]

![[matrix_linear_transformation_06.gif]]

Assim como podemos compor funções, podemos compor transformações lineares através do produto de matrizes. Além disso, em ambos os casos, a composição de funções e o produto de matrizes não são comutativas



