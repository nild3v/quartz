---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-03-18
updated: 2026-03-18
---
> [!info] Recursos
> - [🎥 The determinant | 3Blue1Brown](https://www.youtube.com/watch?v=Ip3X9LOh2dk&t=149s)
> - [🎥 Why is the determinant like that? | broke math student](https://www.youtube.com/watch?v=Sv7VseMsOQc)
> - [📄 Determinant | Wikipedia](https://en.wikipedia.org/wiki/Determinant)
> - [📄 Determinant | Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/determinants-mvc)

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


Até agora vimos determinantes em um espaço bidimensional, mas agora iremos partir para um espaço tridimensional

Dessa forma, iremos trabalhar com volumes em vez de áreas

No exemplo anterior, focamos inicialmente em um quadrado unitário. Dessa vez iremos iniciar com um cubo unitário, ou seja, um cubo com volume igual 1 unidade:

![[determinant_05.png]]

Agora vamos aplicar uma transformação linear:

![[determinant_06.gif]]

Sabendo que inicialmente tínhamos um cubo unitário e que o determinante é o **fator de escala**

Para descobrirmos a determinante, só precisamos calcular o volume desse paralelepípedo:

$1 \cdot 2 \cdot 3 = 6$

Entenda que inicialmente tínhamos um cubo com volume igual a $1$ unidade e após a transformação recebemos um paralelepípedo com volume igual a $6$ unidades. Portanto, o cubo teve seu volume escalado por um fator de $6$, logo:

$\det\left(\begin{bmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}\right) = 6$

Ok, mas e as determinantes negativas? Como elas ficam em um espaço tridimensional?

Veja:

![[determinant_07.gif]]

A ideia de "orientação" se mantêm mesmo em uma espaço tridimensional

## Fórmula

### Determinante de Matriz 2x2

O determinante de uma matriz $2 \times 2$ pode ser dado pela seguinte fórmula:

$\det\left(\begin{bmatrix} a & c \\ b & d \end{bmatrix}\right) = ad - cb$

Mas por quê? Antes de desvendarmos isso, vamos definir a seguinte situação, onde um quadrado unitário está sofrendo uma transformação linear:

![[determinant_08.gif]]

Vamos focar no quadrado que envolve esse paralelogramo:

![[determinant_09.png]]

Se quisermos saber a área em amarelo, basta calcularmos a área do quadrado rosa e subtrair pelas áreas que a região em amarelo não cobre:

![[determinant_10.gif]]

Então vamos calcular as áreas de cada figura em torno do paralelogramo:

**Triângulo Laranja** = $\frac{2 \cdot 1}{2} = 1$

**Quadrado Azul** = $1 \cdot 1 = 1$

**Triângulo Roxo** = $\frac{2 \cdot 1}{2} = 1$

**Triângulo Azul** = $\frac{2 \cdot 1}{2} = 1$

**Quadrado Verde** = $1 \cdot 1 =1$

**Triângulo Vermelho** = $\frac{2 \cdot 1}{2} = 1$

**Quadrado Rosa** = $3 \cdot 3 = 9$

Dessa forma a área do nosso paralelogramo será:

$9 - (1 + 1 + 1 +1 + 1 + 1) = 3$

Esse é o mesmo resultado adquirido ao usar a fórmula:

$\det\left(\begin{bmatrix} 2 & 1 \\  1 & 2 \end{bmatrix}\right) = 2 \cdot 2 - 1 \cdot 1 = 4 - 1 = 3$

Certo, conseguimos o mesmo resultado, mas e a fórmula? Continuamos sem saber de onde ela vêm. Então vamos fazer diferente dessa vez, em vez de usar números, vamos usar incógnitas, ou seja, letras

Veja o exemplo anterior sem os valores numéricos:

![[determinant_11.png]]

Levando em consideração os cálculos feitos anteriormente, as medidas de dos lados das figuras ficariam assim:

![[determinant_12.png]]

Vale ressaltar que as figuras de mesma cor, possuem as mesmas medidas. Dessa forma não precisamos calcular novamente, apenas dobrar o valor da área já calculada

Então vamos aos cálculos de cada área:

**Triângulo Roxo** = $\dfrac{a \cdot c}{2}$

**Triângulo Laranja** = $\dfrac{d \cdot b}{2}$

**Quadrado Rosa** = $c \cdot b$

**Quadrado Verde** = $(a + b) \cdot (c + d)$

No final a área em amarelo seria:

0. $\text{Quadrado Verde} - (2 \cdot \text{Triângulo Roxo} + 2 \cdot \text{Triângulo Laranja} + 2 \cdot \text{Quadrado Rosa})$

1. $(a + b) \cdot (c + d) - \left(2\dfrac{a \cdot c}{2} + 2\dfrac{d \cdot b}{2} + c \cdot b \right)$

2. $(a + b) \cdot (c + d) - \left(\cancel{ 2 }\dfrac{a \cdot c}{\cancel{ 2 }} + \cancel{ 2 }\dfrac{d \cdot b}{\cancel{ 2 }} + 2 \cdot c \cdot b \right)$

3. $(a + b) \cdot (c + d) - \left(a \cdot c + d \cdot b + 2 \cdot c \cdot b \right)$

4. $(a + b) \cdot (c + d) - (a \cdot c + d \cdot b + 2 \cdot c \cdot b)$

5. $ac + ad + bc + bd - (a \cdot c + d \cdot b + 2 \cdot c \cdot b)$

6. $ac + ad + bc + bd - ac - db - 2cb$

7. $\cancel{ ac } + ad + bc + bd - \cancel{ ac } - db - 2cb$

8. $ad + bc + \cancel{ bd } - \cancel{ db } - 2cb$

9. $ad + \cancel{ bc } -\cancel{  2cb }$

10. $ad - cb$ 👈

### Determinante de Matriz 3x3

🏗 Em breve...

