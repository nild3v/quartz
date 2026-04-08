---
tags:
  - Matemática
added: 2026-03-11
updated: 2026-03-11
---
> [!info] Recursos
> - [🎥 Função do Segundo Grau | Ponto Matemático](https://www.youtube.com/watch?v=djXO6Lyc2NA)
> - [🎥 Como solucionar qualquer equação do segundo grau | Ponto Matemático](https://www.youtube.com/watch?v=5Ncg_3Lr46o)
> - [🎥 De Onde Vem A Fórmula De Bhaskara? | Principia Matemática](https://www.youtube.com/watch?v=8gfViwFWSgY)

## Introdução

A função do segundo grau (ou quadrática) é definida como:

$f(x) = ax^2 + bx + c$

ou

$y = ax^2 + bx + c$

Onde:

- $f: \mathbb{R} \to \mathbb{R}$ (recebe valores reais e retorna valores reais)

- $a, b, c, x \in \mathbb{R}$ (são números reais)

- $a \neq 0$ (caso contrário seria uma função do primeiro grau)

É chamada de função do segundo grau, porque a expressão $ax^2 + bx + c$ é um polinômio de grau 2

## Gráfico

O gráfico de uma função do segundo grau é sempre uma parábola

Veja alguns exemplos:

![[quadratic_function_examples.gif]]

## Função Crescente

A função é crescente quando $a \gt 0$

Veja:

![[quadratic_function_crescent.png]]

## Função Decrescente

A função é decrescente quando $a \lt 0$

![[quadratic_function_decrescent.png]]

## Influência dos Coeficientes

Veja algumas animações mostrando como cada coeficiente influência o gráfico da função

### Coeficiente $a$

![[quadratic_function_coeff_a.gif]]

### Coeficiente $b$

![[quadratic_function_coeff_b.gif]]

### Coeficiente $c$

![[quadratic_function_coeff_c.gif]]

## Raízes da Função

As raízes da função quadrática são os pontos que a parábola toca ou cruza o eixo $x$

As raízes ou zeros da função são encontrados pela fórmula de **Bhaskara**:

$x_1 = \dfrac{-b + \sqrt{ \Delta }}{2a}$ 

$x_2 = \dfrac{-b - \sqrt{ \Delta }}{2a}$ 

Onde $\Delta$ é:

$\Delta = b^2 - 4ac$

Uma função do segundo grau pode ter de 0 a 2 raízes distintas no conjunto dos números reais:

- Terá duas raízes se a parábola cruzar dois pontos do eixo $x$ ($\Delta > 0$)

- Terá uma raiz se a parábola tocar apenas um ponto do eixo $x$ ($\Delta = 0$)

- Terá nenhuma raiz se a parábola não cruzar/tocar nenhum ponto do eixo $x$ ($\Delta < 0$)


## Vértice da Parábola

O vértice da parábola é o ponto mínimo (se for crescente) ou o ponto máximo (se for decrescente) da parábola

As coordenadas do vértice é dado por:

$x_{v} = \dfrac{-b}{2a}$

$y_{v} = \dfrac{-\Delta}{4a}$ ou $f(x_{v})$

Mas de onde vem essa fórmula? Primeiramente precisamos entender que o vértice da parábola é localizado exatamente no centro da parábola, ou seja, no eixo de simetria

Uma parábola pode ter de 0 a 2 raízes distintas, mas vamos supor que estamos trabalhando com uma equação do segundo grau que possui 2 raízes distintas

Entendemos também que essas raízes serão dois pontos na parábola, onde $y=0$, ou seja, estarão alinhados verticalmente

Veja no gráfico:

![[quadratic_function_vertex_01.png]]

Os pontos em verde e azul são as raízes da função $f(x) = 2x^2 + 2x$

O vértice dessa parábola está entre esses dois pontos

Veja:

![[quadratic_function_vertex_02.png]]

O vértice é o ponto em amarelo

Logo para calcularmos o valor de $x$ do vértice, basta tirarmos a média das raízes:

$x_{v} = \dfrac{x_{1} + x_{2}}{2}$

Sabendo que $x_1$ e $x_2$ são encontrados pela fórmula de Bhaskara, então:

$x_{v} = \dfrac{\dfrac{-b + \sqrt{ \Delta }}{2a} + \dfrac{-b - \sqrt{ \Delta }}{2a}}{2}$

$x_{v} = \dfrac{\dfrac{-b + \sqrt{ \Delta } -b - \sqrt{ \Delta }}{2a}}{2}$

$x_{v} = \dfrac{\dfrac{-b \cancel{ + \sqrt{ \Delta } } -b \cancel{ - \sqrt{ \Delta } }}{2a}}{2}$

$x_{v} = \dfrac{\dfrac{-b - b}{2a}}{2}$

$x_{v} = \dfrac{\dfrac{-2b}{2a}}{2}$

$x_{v} = \dfrac{\dfrac{-\cancel{ 2 }b}{\cancel{ 2 }a}}{2}$

$x_{v} = \dfrac{\dfrac{-b}{a}}{2}$

$x_{v} = \dfrac{-b}{a}\cdot{\dfrac{1}{2}}$

$x_{v} = \dfrac{-b}{2a}$ 👈

Agora para encontrarmos o valor de $y$ do vértice, bastar aplicar a função $f(x)$ em $x_v$:

$f(x_{v}) = ax_{v}^2 + bx_{v} + c$

$f\left(-\dfrac{b}{2a}\right) = a\left( -\dfrac{b}{2a} \right)^2 + b \cdot \left(-\dfrac{b}{2a} \right) + c$

$a \dfrac{b^2}{4a^2} - \dfrac{b^2}{2a} + c$

$\dfrac{\cancel{ a }b^2}{4\cancel{ a^2 }} - \dfrac{b^2}{2a} + c$

$\dfrac{b^2}{4a} - \dfrac{b^2}{2a} + c$

Agora precisamos igualar as bases, para isso irei multiplicar $- \frac{b^2}{2a}$ por $\frac{2}{2}$ de modo que o valor permaneça inalterável, porque $2/2$ é $1$ e todo número multiplicado por $1$ é ele mesmo:

$\dfrac{b^2}{4a} - \dfrac{b^2}{2a} \cdot \dfrac{2}{2} + c$

$\dfrac{b^2}{4a} - \dfrac{2b^2}{4a} + c$

Agora $c$ por $\frac{4a}{4a}$:

$\dfrac{b^2}{4a} - \dfrac{2b^2}{4a} + c \cdot \dfrac{4a}{4a}$

$\dfrac{b^2}{4a} - \dfrac{2b^2}{4a} + \dfrac{4ac}{4a}$

Bases igualadas, agora as frações podem ser subtraídas e somadas:

$\dfrac{b^2 - 2b^2 + 4ac}{4a}$

$\dfrac{\cancel{ b^2 } - \cancel{ 2b^2 } + 4ac}{4a}$

$\dfrac{-b^2 + 4ac}{4a}$

Deixando o sinal de menos em evidência:

$\dfrac{-(b^2 - 4ac)}{4a}$

Sabendo que $\Delta = b^2 - 4ac$, portanto:

$y_{v} = \dfrac{-\Delta}{4a}$ 👈