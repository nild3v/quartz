---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-04-05
updated: 2026-04-05
---
> [!info] Recursos
> - [🎥 Matriz Inversa | 3Blue1Brown](https://youtu.be/uQhTuRlWMxw?t=256)
> - [📄 Matriz Inversa | 3Blue1Brown](https://www.3blue1brown.com/lessons/inverse-matrices#inverses)
> - [📄 Encotrando a fórmula da Matriz Inversa | Math StackExchange](https://math.stackexchange.com/a/2537280)

## Introdução

Para iniciarmos a definição de matriz inversa, vamos inicialmente focar em uma transformação linear qualquer

Veja:

![[matriz_inversa_01.gif]]

A matriz $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ é aquela que é usada durante a transformação linear

Então podemos deduzir que se existe uma matriz responsável por essa transformação linear, deve existir também uma outra matriz que é responsável por anular ou reverter essa transformação, certo?

Veja:

![[matriz_inversa_02.gif]]

Isso é o que denominados de "Matriz Inversa", uma matriz que ao ser aplicada em uma transformação linear anula a transformação feita anteriormente

Portanto, a matriz $\begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$ é inversa de $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$

Denotamos isso da seguinte forma:

$A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$

$A^{-1} = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$

Além disso, podemos concluir que se aplicarmos uma transformação usando uma matriz $B$ e em seguida uma outra transformação com sua inversa, permaneceremos no estado inicial

Uma transformação linear feita uma em seguida da outra é representada como uma composição de matrizes, logo, podemos denotar o que foi dito anteriormente como:

$B^{-1}B = \text{?}$

Onde o resultado da multiplicação dessas matrizes é uma matriz que quando aplicada em uma transformação é o mesmo que não fazer nada

Vamos fazer esse cálculo levando em consideração o exemplo do início desse conteúdo

$$A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$

$$A^{-1} = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$$

$$A^{-1}A = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \cdot \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 + 1 & 0 + 0 \\ 0 + 0 & 1  +0  \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

A matriz $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ é aquele quando aplicada não causará nenhum efeito, mantendo tudo em seu estado inicial. Esse tipo de matriz é conhecida como "Matriz Identidade"

## Desenvolvimento da Fórmula (Modo Difícil)

Daqui em diante irei demonstrar como a fórmula da Matriz Inversa pode ser encontrada a partir da informação que adquirimos final do tópico anterior

Dado uma matriz $B_{2 \times 2}$:

$B = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$

E sua inversa:

$B^{-1} = \begin{bmatrix} x & y \\ z & w \end{bmatrix}$

O produto delas será uma matriz identidade:

$I_{2 \times 2} = B^{-1}B = \begin{bmatrix} x & y \\ z & w \end{bmatrix} \cdot \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

Nosso objetivo será isolar as incógnitas $x$, $y$, $z$ e $w$ e descobrir uma forma de calculá-las

### Produto das Matrizes

1. $xa + yc = 1$ ($I_{1;1}$)

2. $xb + yd = 0$ ($I_{1;2}$)

3. $za + wc = 0$ ($I_{2;1}$)

4. $zb + wd = 1$ ($I_{2;2}$)


### Isolando o X

$c \cdot I_{1;2}$
$c (xb + yd) = c \cdot 0$
$cxb + cyd = 0$ 👈

$d \cdot I_{1;1}$
$d (xa + yc) = d \cdot 1$
$dxa + dyc = d$ 👈

---

$(d \cdot I_{1;1}) - (c \cdot I_{1;2})$

$(dxa + dyc) - (cxb + cyd) = d - 0$
$dxa + dyc - cxb - cyd  = d - 0$
$dxa + \cancel{ dyc } - cxb - \cancel{ cyd } = d - 0$
👇
$dxa - cxb = d - 0$
$dxa - cxb = d$
👇
$x(da - cb) = d$

$x = \dfrac{d}{(da - cb)}$ 👈

Conseguimos isolar o $x$

### Isolando o Y

$a \cdot I_{1;2}$
$a(xb + yd) = a \cdot 0$
$axb + ayd = 0$ 👈

$b \cdot I_{1;1}$
$b(xa + yc) = b \cdot 1$
$bxa + byc = b$ 👈

---

$(a \cdot I_{1;2}) - (b \cdot I_{1;1})$

$(axb + ayd) - (bxa + byc) = 0 - b$  
$\cancel{ axb } + ayd - \cancel{ bxa } - byc = 0 - b$
👇
$ayd - byc = 0 - b$
$ayd - byc = -b$ 
👇
$y(ad - bc) = -b$

$y = \dfrac{-b}{(ad - bc)}$ 👈

Conseguimos isolar o $y$

### Isolando o Z

$d \cdot I_{2;1}$
$d (za + wc) = d \cdot 0$
$dza + dwc = 0$ 👈

$c \cdot I_{2;2}$
$c \cdot (zb + wd) = c \cdot 1$
$czb + cwd = c$ 👈

---

$(d \cdot I_{2;1}) - (c \cdot I_{2;2})$

$(dza + dwc) - (czb + cwd) = 0 - c$
$dza + dwc - czb - cwd = 0 - c$
$dza + \cancel{ dwc } - czb - \cancel{ cwd } = 0 - c$
👇
$dza - czb = 0 - c$
$dza - czb = -c$
👇
$z(da - cb) = -c$

$z = \dfrac{-c}{(da - cb)}$ 👈

Conseguimos isolar o $z$

### Isolando o W

$b \cdot I_{2,1}$
$b \cdot (za + wc) = b \cdot 0$
$bza + bwc = 0$ 👈

$a \cdot I_{2;2}$
$a \cdot (zb + wd) = a \cdot 1$
$azb + awd = a$ 👈

---

$(a \cdot I_{2;2}) - (b \cdot I_{2;1})$

$(azb + awd) - (bza + bwc) = a - 0$
$azb + awd - bza - bwc = a - 0$
$\cancel{ azb } + awd - \cancel{ bza } - bwc = a - 0$
👇
$awd - bwc = a - 0$
$awd - bwc = a$
👇
$w(ad - bc) = a$

$w = \dfrac{a}{(ad - bc)}$ 👈

Conseguimos isolar o $w$

### Conclusão

1. $x = \dfrac{d}{(da - cb)}$

2. $y = \dfrac{-b}{(ad - bc)}$ 

3. $z = \dfrac{-c}{(da - cb)}$ 

4. $w = \dfrac{a}{(ad - bc)}$

Vale ressaltar que havia uma outra forma de isolar as incógnitas que daria resultados diferentes 

Por exemplo, se calculássemos $w$ como $(b \cdot I_{2;1}) - (a \cdot I_{2;2})$ em vez $(a \cdot I_{2;2}) - (b \cdot I_{2;1})$ o resultado seria:

$\dfrac{-a}{(bc - ad)}$ 

O que é o mesmo que:

$\dfrac{-1}{-1} \cdot \dfrac{a}{(ad - bc)}$

No fim calculamos de uma forma que os denominadores sejam todos iguais, perceba que em todas as incógnitas temos: $ad - bc$

Uma coisa interessante é que $ad - bc$ é o cálculo feito para encontrar a determinante de uma matriz $2 \times 2$

Logo:

$x = \dfrac{d}{\det(B)}$

$y = \dfrac{-b}{\det(B)}$ 

$z = \dfrac{-c}{\det(B)}$ 

$w = \dfrac{a}{\det(B)}$

$B^{-1} = \begin{bmatrix} x & y \\ z & w \end{bmatrix} = \begin{bmatrix} \frac{d}{\det(B)} & \frac{-b}{\det(B)} \\ \frac{-c}{\det(B)} & \frac{a}{\det(B)} \end{bmatrix}$

Como todos os elementos da matriz são divididos por $\det(B)$, podemos reescrever isso como uma multiplicação por um escalar:

$B^{-1} = \dfrac{1}{\det(B)} \cdot \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$ 👈

Essa é a fórmula usada para calcular a **Matriz Inversa** 