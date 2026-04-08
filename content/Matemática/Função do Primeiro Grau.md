---
tags:
  - Matemática
created: 2026-03-11
edited: 2026-03-11
---
> [!info] Recursos
> - [🎥 Função do Primeiro Grau | Ponto Matemático](https://www.youtube.com/watch?v=ekk2nORywA4)

## Introdução

A função do primeiro grau (ou função afim) é definida como:

$f(x) = ax + b$

ou

$y = ax + b$

Onde:

- $f: \mathbb{R} \to \mathbb{R}$ (recebe valores reais e retorna valores reais)

- $a, b, x \in \mathbb{R}$ (são números reais)

- $a \neq 0$ (caso contrário seria uma função constante)

É chamada de função do primeiro grau, porque a expressão $ax + b$ é um polinômio de grau 1

## Gráfico

O gráfico de uma função do primeiro grau é sempre uma reta

Veja alguns exemplos:

![[affine_function_examples.gif]]

Mas como podemos desenhar o gráfico da função manualmente?

Primeiramente, vamos criar uma função:

$f(x) = 2x + 1$

Inicialmente o nosso plano cartesiano estará assim:

![[affine_function_draw_graph_01.png]]

Agora precisamos calcular $f(x)$ em dois pontos distintos no eixo $x$, digamos...

$x_1 = -2$
$x_2 = 2$

Esses serão nosso valores de $x$ que iremos aplicar em $f(x)$. Então:

$f(x_{1}) = 2 \cdot (x_{1}) + 1$

$f(-2) = 2 \cdot (-2) + 1$

$f(-2) = -4 + 1$

$f(-2) = -3$ 

$y_1 = -3$ 👈


$f(x_{2}) = 2 \cdot (x_{2}) + 1$

$f(2) = 2 \cdot (2) + 1$

$f(2) = 4 + 1$

$f(2) = 5$

$y_2 = 5$ 👈

Dessa forma, temos as coordenadas de dois pontos:

$A = (x_{1}, y_{1})$

$A = (-2, -3)$

**$B = (x_{2}, y_{2})$

$B = (2, 5)$

No gráfico:

![[affine_function_draw_graph_02.png]]

A partir disso, basta traçarmos uma reta do ponto $A$ até o ponto $B$:

![[affine_function_graph_draw_03.gif]]

Veja o gráfico completo:

![[affine_function_graph_draw_04.png]]

## Coeficiente Angular ($a$)

O coeficiente $a$ é conhecido como coeficiente angular devido a sua relação com o ângulo de inclinação da reta

Veja como ele influência isso:

![[affine_function_coeff_a.gif]]

Além disso há uma maneira de calcular o valor de $a$

Veja o gráfico abaixo:

![[affine_function_01.png]]

A nossa função é $f(x) = 1x + 0$, ou seja, $a = 1$ e $b=0$

Analisando a reta e o gráfico, podemos traçar algumas linhas imaginárias que nos dará a forma de um polígono conhecido:

![[affine_function_03.png]]

Percebeu? Temos um triângulo! O que isso significa? Trigonometria

Se quisermos saber o valor $a$ deveremos usar as propriedades trigonométricas:

$\cos(\theta) = \dfrac{CA}{H}$

$\sin(\theta) = \dfrac{CO}{H}$

$\tan(\theta) = \dfrac{CO}{CA}$

Onde:

- $CO$ é o cateto oposto
- $CA$ é o cateto adjacente
- $H$ é a hipotenusa

Nesse caso irei usar a $\tan(\theta) = \frac{CO}{CA}$, porque será mais fácil

Então vamos marcar $\theta$, $CO$ e o $CA$ no gráfico:

![[affine_function_04.png]]

Então precisamos saber o $CO$ e o $CA$ para podermos calcular o coeficiente $a$

Analisando as coordenadas das extremidades de cada reta tracejada, podemos descobrir o tamanho delas

Lembrando que as coordenadas de um ponto em um plano cartesiano 2D é definida como um par numérico ou uma tupla de dois números:

$P = (x, y)$

Onde:

- $P$ é o identificador do ponto (deve ser uma letra maiúscula)
- $x$ é a coordenada no eixo $x$
- $y$ é a coordenada no eixo $y$

A reta $CA$ parte da origem em $(0,0)$ e vai até $(2,0)$, logo a distância horizontal é:

$d_{x} = 2 - 0 = 2$

A reta $CO$ parte do ponto $(2,0)$ e vai até $(2,2)$, logo a distância vertical é:

$d_{y} = 2 - 0 = 2$

Portanto:

$CO =2$
$CA = 2$

Voltando para a fórmula $\tan(\theta) = \frac{CO}{CA}$, temos:

$a = \tan(\theta) = \dfrac{CO}{CA} = \dfrac{2}{2} = 1$

Assim, conseguimos calcular o valor de $a$, o mesmo valor que está aparecendo na função descrita no canto superior esquerdo do gráfico:

![[affine_function_01.png]]

Se pesquisar na internet, também verá o mesmo cálculo só que escrito de uma forma diferente:

$a = \dfrac{y_{2} - y_{1}}{x_{2} - x_{1}}$

Mas saiba que é a mesma coisa

$a = \tan(\theta) = \dfrac{y_{2} - y_{1}}{x_{2} - x_{1}} = \dfrac{CO}{CA}$

Além disso o coeficiente angular é conhecido também como taxa de variação de uma função, veja o porquê:

| $x$ | $f(x) = 2x + 3$ |
| --- | --------------- |
| 1   | 5               |
| 2   | 7               |
| 3   | 9               |
| 4   | 11              |

Percebeu? Veja que a cada aumento de 1 unidade em $x$, o valor de $y$ aumenta em 2 unidades, porque $a=2$ em $f(x) = 2x + 3$

## Coeficiente Linear ($b$)

O coeficiente $b$ é conhecido como coeficiente linear e o seu valor determinar em que ponto do eixo $y$ a reta irá cruzar quando $x=0$

Dada função:

$f(x) = 2x + 3$

Em $x=0$:

$f(0) = 2 \cdot 0 + 3$

$f(0) = 3$

$y = 3$

Veja o gráfico:

![[affine_function_05.png]]

Veja outros exemplos:

![[affine_function_coeff_b.gif]]

## Função Crescente

Se $a > 0$, a função será **crescente**, ou seja, o valor de $y$ irá aumentar a medida que $x$ aumentar

Veja:

![[affine_function_crescent.png]]

## Função Decrescente

Se $a < 0$ , a função será **decrescente**, ou seja, o valor de $y$ irá diminuir a medida que $x$ aumentar 

Veja:

![[affine_function_decrescent.png]]

## Função Linear

A função será linear quando $a \neq 0$ e $b=0$ 

Dessa forma o gráfico da função cruzará o eixo $y$ na origem

Veja:

![[linear_function.png]]

## Zero da Função

O zero da função é o valor de $x$ onde $f(x)=0$ ou $y=0$

Dada a função:

$f(x) = 3x + 3$

Podemos igualar expressão $3x + 3$ a $0$ para encontrar o valor de $x$

Veja:

$3x + 3 = 0$

$3x + 3 - 3 = 0 - 3$

$3x + \cancel{ 3 } - \cancel{ 3 } = 0 - 3$

$3x = -3$

$\dfrac{3x}{3} = -\dfrac{3}{3}$

$\dfrac{\cancel{ 3 }x}{\cancel{ 3 }} = -\dfrac{\cancel{ 3 }}{\cancel{ 3 }}$

$x= -1$ 👈

Agora tirando a prova real:

$f(-1) = 3 \cdot -1 + 3$

$f(-1) = -3 + 3$

$f(-1) = 0$ 👈
