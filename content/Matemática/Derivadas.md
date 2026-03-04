---
date: 2026-03-02
edit: 2026-03-03
tags:
  - Matemática
---
> [!info] Recursos
> - [📹 O que é Derivada | Ponto Matemático](https://www.youtube.com/watch?v=BzMDWLJVDaA)
> - [📹 O que é Derivada? | Professor Julio Lombaldo](https://www.youtube.com/watch?v=4kjaMznGUnY)
> - [📹 DERIVADAS - CÁLCULO 1 | Estude Matemática](https://www.youtube.com/watch?v=kYIc8JUx3Xo)
> - [📚 Derivadas - Cálculo 1 | OpenStax](https://openstax.org/books/calculus-volume-1/pages/3-introduction)
> - [📚 Derivada - Pré Cálculo | OpenStax](https://openstax.org/books/precalculus-2e/pages/12-4-derivatives)
> - [📹 The Chain Rule | StatQuest with Josh Starmer](https://www.youtube.com/watch?v=wl1myxrtQHQ)
> - [📹 Derivadas | Equaciona com Paulo Pereira](https://www.youtube.com/watch?v=cWBEMN75IMc&list=PLEfwqyY2ox86LhxKybOY3_IG-7R5herLC&index=17)


## Introdução

Antes de entendermos o que é uma Derivada, precisamos revisitar 2 conceitos

### Reta Tangente

A **Reta Tangente** é a reta que toca em um único ponto da curva sem atravessá-la. Além disso, se ampliarmos suficientemente nesse ponto, a curva parecerá linear (uma reta) e a inclinação da curva nesse ponto estará próxima da inclinação da linha tangente nesse ponto

Basicamente, a reta que mais se assemelha com a curva ao redor desse único ponto

Veja um exemplo abaixo:

![Reta Tangente em uma Curva](tangent_line.png)

A reta em vermelho é a reta tangente da curva em cinza

Se dermos um zoom suficientemente grande, veremos que ao redor desse único ponto, a curva e a reta tangente serão muito parecidas

Veja:

![Reta Tangente de uma Curva com Zoom](tangent_line_zoomin.gif)

### Reta Secante

A **Reta Secante** é uma reta que cruza uma curva em pelo menos 2 pontos distintos

Veja abaixo:

![Reta Secante em uma Curva](secant_line.png)

## Construção

Agora que relembramos alguns conceitos, iremos desenvolver do zero o conceito de derivada. Primeiramente, observe o gráfico abaixo:

![[derivative_01.png]]

Nesse gráfico há dois pontos:

- $x1$ que é demarcado em vermelho
- $x1 + h$ que é demarcado em roxo

O $h$ é basicamente a distância entre os dois pontos no eixo $x$

$f(x_1)$ é a altura da linha tracejada em vermelho, ou seja, o $y_1$

$f(x_1 + h)$ é a altura da linha tracejada em roxo, ou seja, o $y_2$

OK, sabendo disso vamos para o próximo passo, vamos traçar uma reta que cruze esses dois pontos na curva:

![[derivative_02.png]]

Traçamos uma reta em laranja que cruza os dois pontos na curva

A expressão $y=mx+n$ é basicamente a função da reta secante, ou seja, uma função do primeiro grau

Observe bem, é possível traçar uma linha horizontal do ponto vermelho até a linha tracejada roxa para formar uma triângulo retângulo no gráfico

Veja:

![[derivative_03.png]]

$h$ é a medida da base do triângulo retângulo

Se quisermos descobrir a altura desse triângulo retângulo, basta subtrair $f(x_1 + h) - f(x_1)$, ou seja, $y2 - y1$

OK, você deve está se perguntando como isso vai nos retornar a derivada certo? Calma lá, que ainda falta só mais um detalhe

Esse detalhe se chama "ângulo", saiba que essa reta possui um ângulo, vamos representá-lo no gráfico:

![[derivative_04.png]]

O $\theta$ é o ângulo da reta secante em laranja

Show! Agora vamos ao trabalho!

### Coeficiente Angular

A reta secante é dada pela função $y = mx + n$ equivalente a função $f(x) = ax + b$

Nesses dois casos, o termo $a$ e $m$ é o que chamamos de **Coeficiente Angular da Função Afim** que representa a inclinação da reta ou o ângulo que a reta faz com o eixo $x$. Sendo assim:

$a = tan \theta$

Lembrando das propriedades trigonométricas, a tangente é dada como:

$tan \theta = \dfrac{CO}{CA}$

Onde:

- $CO$ é o Cateto Oposto
- $CA$ é o Cateto Adjacente

Logo:

$a = tan \theta = \dfrac{CO}{CA}$

Como é visto no gráfico, temos um Triângulo Retângulo desenhado no gráfico. Sabendo que precisamos do $CO$ e do $CA$ em relação ao ângulo $\theta$, podemos calcular a base e a altura desse forma geométrica:

**ALTURA** = $CO \quad = \quad y_{2} - y_{1} \quad = \quad f(x_1 + h) + f(x_1)$

**BASE** = $CA \quad = \quad x_{2} - x_{1} \quad = \quad (x_{1} + h) - x_{1} \quad = \quad h$

OK, agora basta substituímos $CA$ e $CO$ na expressão anterior:

$a = tan \theta = \dfrac{CO}{CA} = \dfrac{f(x_1 + h) + f(x_1)}{h}$


Não sei se notaram, mas essa expressão é basicamente:

$a = \dfrac{y_2 - y_1}{x_2 - x_1}$

ou

$a = \dfrac{f (x_2) - f (x_1)}{x_2 - x_1}$

### Reta Tangente

Nosso objetivo com as derivadas é encontrar a **Taxa de Variação Instantânea** que é dada pelo próprio **Coeficiente Angular** da Reta Tangente

A Reta Secante não seria útil nesse caso, porque ela cruza dois pontos e queremos saber o quanto a função varia em relação a uma variável quando fazemos um pequeno deslocamento nela

Em funções afim podemos ter uma noção do que seria essa **Taxa de Variação**, mas nesse caso não é "instantânea"

Por exemplo:

$f(x) = 2x + 3$

Onde $a = 2$ e $b = 3$

A **Taxa de Variação** dessa função é $2$, ou seja, a cada uma unidade acrescentada em $x$, $y$ varia $2$

Veja:

| $x$ | $f(x) = 2x + 3$ |
| --- | --------------- |
| 1   | 5               |
| 2   | 7               |
| 3   | 9               |
| 4   | 11              |

Sabendo disso, como teremos uma Reta Tangente se no gráfico apresentado há uma Reta Secante?

Muito fácil, usaremos limites. Inicialmente não podemos usar Retas Tangente, porque um "ponto" não possui dimensões, ou seja, seu tamanho é $0$

Seria impossível calcular o Coeficiente Angular. Entretanto, se usarmos limites, podemos aproximar a Reta Secante a uma Reta Tangente se a distância entre os dois pontos que ela cruza tender a $0$

Veja:

![[secant_to_tangent.gif]]

Perceba que $h$ está diminuindo muito. Tendo isso em mente, podemos definir a seguinte expressão:

$f'(x) = \lim\limits_{h\rightarrow0} \dfrac{f(x+h)-f(x)}{h}$

## Notação

As Derivadas também podem ser escritas de outra forma:

$\dfrac{dy}{dx} = \lim\limits_{h\rightarrow0} \dfrac{\Delta y}{\Delta x}$

O $d$ representa uma diferença infinitesimal (diferença muito pequena) entre dois pontos

O papel dele se assemelha com o do $\Delta$ que representa uma diferença qualquer entre dois pontos

Essa **"diferença infinitesimal"** se deve ao limite imposto, que devido a aproximação dos pontos de forma a criar uma distância próxima a zero, cria-se uma diferença entre os pontos também próxima a zero

Por exemplo:

Se eu tivesse $x_1 = 2$ e $x_2 = 2,00000000000000000\dots1$, $dx$ seria a diferença entre esses dois pontos, que no caso seria $0,0000000000\dots1$, ou seja, uma diferença infinitamente pequena

## Regras de Derivação

São padrões encontrados durante o processo de derivação que nos permite chegar ao resultado mais facilmente:

### Derivada de Constante

A derivada de qualquer constante é sempre $0$
   
$f(x)=5 \to f'(x)=0$

### Derivada de Potências

$f (x)=ax^{n} \to f'(x)=nax^{n-1}$

### Derivada do Produto

   $f(x) \cdot g(x) \to f'(x) \cdot g(x) + f(x) \cdot g'(x)$

### Derivada da Soma:

   $f(x) \pm g(x) \to f'(x) \pm g'(x)$

### Derivada do Quociente:

   $\left(\dfrac{f(x)}{g(x)} \right) \to \dfrac{f'(x)\cdot g(x)-f(x)\cdot g(x)'}{[g(x)]^2}$ 

### Regra da Cadeia (Composta)

   $f (g(x)) \to f'(g(x)) \cdot g'(x)$
