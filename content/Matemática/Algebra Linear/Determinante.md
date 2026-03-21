---
tags:
  - Matemática
added: 2026-03-18
updated: 2026-03-18
---
> [!info] Recursos
> - [📹 The determinant | 3Blue1Brown](https://www.youtube.com/watch?v=Ip3X9LOh2dk&t=149s)
> - [📹 Why is the determinant like that? | broke math student](https://www.youtube.com/watch?v=Sv7VseMsOQc)
> - [📚 Determinant | Wikipedia](https://en.wikipedia.org/wiki/Determinant)
> - [📚 Determinant | Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/determinants-mvc)

## Introdução

O determinante é um valor escalar calculado a partir de uma matriz quadrada ($A_{n \times n}$) que contêm informações sobre a matriz

Por exemplo, se o determinante for $0$, significa que a matriz não possui uma inversa

Denotamos ele da seguinte forma:

$\det(A)$ ou $det \, A$

## Intuição

Para ter uma compreensão mais profunda do que seria um determinante, precisamos abordar um outro tema antes, que é "Transformações Lineares"

Em [Transformações Lineares](Transformações%20Lineares.md), observamos que ao aplicar certas transformações em um espaço vetorial criava um efeito de escalonamento ou de achatamento do espaço

Entretanto, cada matriz pode achatar ou escalar o espaço de diversas formas, como se tivesse aplicando um **fator de escala** diferente em cada transformação

Portanto, é de nosso interesse saber como calcular esse **fator de escala**

Primeiramente, vamos ilustrar isso:

![[determinant_01.png]]

Aqui temos os nossos vetores de base, denotados como $\hat{i}$ e $\hat{j}$, ambos são unitários

Através da malha desenhada no fundo do plano de coordenadas, podemos observar diversos quadrados que possui uma área de $1$ unidade, porque a largura e a altura de todos são $1$ e $1 \cdot 1 = 1$

O motivo das medidas dos quadrados serem $1$ é devido aos vetores de base que são unitários, ou seja, possuem magnitude $1$ 

Agora iremos temporariamente iremos focar em um desses quadrados:

![[determinant_02.gif]]

Esse quadrado está localizado exatamente onde os nossos vetores de base estão definidos

Dessa forma fica fácil de visualizar o que acontece com esse mesmo quadrado quando aplicamos uma transformação linear

Veja:

![[determinant_03.gif]]

Perceba que ao aplicar a transformação, o quadrado se torna um paralelogramo com área de $3 \cdot 2 = 6$

Levando em consideração o quadrado original, concluímos que a transformação linear escalou a área por um fator de $6$

Esse **"fator de escala"** é o que chamamos de **"determinante"** da transformação

Portanto, podemos escrever a seguinte expressão:

$\det\left(\begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix}\right) = 6$

Aqui já podemos entender o motivo de determinantes só funcionarem em matrizes quadradas, porque seguindo a interpretação geométrica, cada coluna na matriz representa um vetor e que por sua vez representa uma dimensão no espaço

Agora vamos aplicar uma outra transformação linear para podemos discutir uma ideia:

![[determinant_04.gif]]

Observe que agora temos uma base valendo $-3$, se calcularmos a área desse paralelogramo, teríamos $-3 \cdot 2 = -6$

Uma área negativa, mas qual seria o sentido disso? 

Bem, se observar o que acontece quando aplicamos a transformação, verá que o espaço gira, mudando a **orientação** do polígono

Sempre que a **orientação** do espaço for invertida, a determinante será negativa

Dessa forma, concluímos que o fator de escala é o valor absoluto da determinante e o sinal negativo nos informa que a orientação do espaço se inverteu

A expressão no final ficaria assim:

$\det\left(\begin{bmatrix} -3 & 1 \\ 0 & 2 \end{bmatrix}\right) = -6$


Vemos determinantes em espaço bidimensional, mas agora iremos partir para um espaço tridimensional:

![[determinant_05.png]]

🏗 Em breve...