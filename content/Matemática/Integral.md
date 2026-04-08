---
tags:
  - Matemática
added: 2026-03-03
updated: 2026-03-03
---
> [!info] Recursos
> - [🎥 O que é uma Integral? | Ponto Matemático](https://www.youtube.com/watch?v=rSKtCJsJKAg)
> - [🎥 Técnicas de Integração | Ficou Mais Fácil](https://www.youtube.com/playlist?list=PLfWdOFF4w26rlDKapbr0Hwzr5YDWlX-SS)
> - [🎥 Cálculo de Integral Simplificado | Coruja de Minerva](https://www.youtube.com/watch?v=SEi9r9A1CFw)

## Introdução

Antes de entendermos o que é uma Integral, vamos analisar algumas coisas antes. Observe as figuras abaixo:

![[polygons_1.svg]]

Se desejássemos calcular a área dessas figuras não seria complicado, certo? Bastava saber a largura e a altura dessas figuras e poderíamos chegar ao valor da área facilmente:

![[polygons_2.svg]]

OK, mas essas são figuras simples. Vejamos outras:

![[polygons_3.svg]]

Uma figura um pouco incomum que se força bem a visão parece a cabeça de algum animal

Bem, como será que poderíamos calcular a área dessa figura? Se observar bem perceberá que essa figura pode ser dividida em 3 figuras:

- 2 triângulos
- 1 quadrado

![[polygons_4.svg]]

Nesse caso basta calcular a área de cada figura e depois somar. Dessa forma teríamos a área total da figura

Isso aqui ainda está um pouco fácil, vamos complicar:

![[integral_01.png]]

Dessa vez a figura possui uma lado curvo e isso torna as coisas um pouco complexas, porque não é possível dividir a figura em polígonos menores que possa cobrir a área total da figura

Veja:

![[integral_02.png]]

Perceba que há pequenos pedaços de áreas que não estão cobertos e no máximo que poderíamos ter é uma aproximação dessa área. Além disso, a divisão deveria ser feita de uma forma que possamos identificar as medidas de cada polígono e não de maneira aleatória

Bem, o que podemos fazer então?

Se analisarmos o lado curvo da figura, podemos dizer que ela é parte de uma gráfico de alguma função

Vejamos:

![[integral_03.gif]]

Esse seria o possível gráfico da função $f(x)$ que nos dar a curva da forma geométrica que estamos tentar achar a área

$a$ e $b$ determinam um intervalo na função

Logo concluímos que a área da nossa figura é a área entre a curva e o eixo $x$ no intervalo $a \to b$

Então precisamos encontrar uma forma de achar essa área

Bem, se soubermos a função $f(x)$ podemos determinar a altura do gráfico em qualquer ponto no intervalo $a \to b$

![[integral_04.gif]]

Tendo isso em mãos, o que podemos fazer é estimar essa área

Primeira, dividiremos o intervalo $a \to b$ em $n$ subintervalos

![[integral_05.gif]]

Aqui dividimos o intervalo $a \to b$ em $10$ subintervalos iguais

Cada subintervalo mede $\Delta x$, onde:

$\Delta x = \dfrac{b - a}{n}$

Agora iremos colocar um retângulo sobre cada subintervalo:

![[integral_06.gif]]

Cada retângulo possuem as seguintes medidas:

- BASE = $\Delta x$

- ALTURA = $f(\bar{x}_{i})$, onde $\bar{x}_i$ é o ponto no eixo $x$ que marca o meio do retângulo

Veja:

![[integral_07.gif]]

Portanto para calcularmos a área aproximada abaixo da curva podemos calcular a área de cada retângulo e depois somá-los

Sabendo que a área do retângulo é:

$A = b  \cdot h$

Logo, a área sob a curva é:

$A \approx f(\bar{x}_{1})\Delta x +  f(\bar{x}_{2})\Delta x + \text{...} +  f(\bar{x}_{10})\Delta x$

Para simplificar essa expressão, podemos escrever como um somatório:

$A \approx \displaystyle\sum_{i=1}^{n} f(\bar{x}_{i})\Delta x$

Inicialmente dividimos o intervalo $a \to b$ em $10$ subintervalos, ou seja, $n=10$

Entretanto, se aumentarmos $n$ o $\Delta x$ será ainda menor e dessa maneira a estimativa da área será melhor, porque a medida que o número de retângulos crescem a quantidade de espaço que não pode ser preenchida diminui

Veja:

![[integral_08.gif]]

Nesse caso o $a \to b$ foi divido em $40$ subintervalos

Portanto quanto maior o $n$ melhor será estimativa da área. Então:

$A = \displaystyle{\lim_{n \to \infty}} \, \displaystyle\sum_{i=1}^{n} \,f(\bar{x}_{i})\Delta x$

Se $n \to +\infty$, logo, $\Delta x \to 0$

$\displaystyle{\lim_{ n \to \infty }} \Delta x = \displaystyle{\lim_{ n \to \infty }} \dfrac{b-a}{n}  = 0$


## Notação

A Integral usa uma notação própria:

$\displaystyle\int^{b}_{a} f(x) \cdot dx$

Onde:

- $\displaystyle\int^{b}_{a} = \lim_{n \to \infty} \displaystyle\sum_{i=1}^{n}$

- $f(x) = f(\bar{x}_{i})$

- $dx = \Delta x$ (um valor infinitesimal; muito próximo de $0$)

> [!warning] Observação
> 
> A letra $d$ na frente de $x$ indica taxa de variação, mas uma taxa de variação infinitamente pequena, o que coincide com $\Delta x$, pois ele tende a $0$

### Observações

Caso $a$ for igual a $0$, podemos denotar a integral da seguinte forma:

$F(b) = \displaystyle\int^{b}_{0} f(x) \cdot dx$


Em um contexto que precisamos encontrar a área que não se inicia no ponto $0$, podemos fazer a diferença entre duas áreas para encontrar a que desejamos. Por exemplo:

Suponha que queremos encontrar a área entre o intervalo $3$ e $8$, nesse caso basta fazer o seguinte cálculo:

$F(a) = \displaystyle\int^{a}_{0} f(x) \cdot dx$

$F(3) = \displaystyle\int^{3}_{0} f(x) \cdot dx$



$F(b) = \displaystyle\int^{b}_{0} f(x) \cdot dx$

$F(8) = \displaystyle\int^{8}_{0} f(x) \cdot dx$


Logo, $A = F(b) - F(a)$

Coincidentemente, é a fórmula original da Integral:

$\displaystyle\int^{b}_{a} f(x) \cdot dx = F(b) - F(a)$


## Teorema Fundamental do Cálculo

Recomendo que veja o vídeo abaixo por causa da explicação e também das ilustrações animadas:

![O que é Integral | Ponto Matemático](https://youtu.be/rSKtCJsJKAg?t=319)


Vamos começar com a seguinte fórmula:

$F(x) = \displaystyle\int^{x}_{0} f(t) \cdot dt$

A variável $t$ indica um valor qualquer assim como o $x$. Ela está sendo utilizada para não confundir com o $x$ do intervalo da integral.

Além disso, vale ressaltar que $F(x)$ é uma função área, ou seja, é a área que buscamos no intervalo $0 \to x$ em relação a função $f(t)$

Nosso objetivo é encontrar a derivada da função $f(t)$

Se fizermos um pequeno aumento horizontal $dx$, ou seja, um aumento extremamente pequeno no eixo $x$, teremos um aumento extremamente pequeno de área $dF$

Sabendo que $dF$ representa a área de um retângulo, onde $dx$ é a base e $f(x)$ é a altura, logo:

$dF = f(x) \cdot dx$

Mas há algo peculiar nessa equação. Se dividirmos ambos os lados por $dx$ temos:

$\dfrac{dF}{dx} = \dfrac{f(x) \cdot dx}{dx}$

$\dfrac{dF}{dx} = \dfrac{f(x) \cdot \cancel{dx}}{\cancel{dx}}$

$\dfrac{dF}{dx} = f(x)$

Bingo! Descobrimos que a derivada de $F(x)$ é igual a função original $f(x)$:

$\dfrac{dF}{dx} = F'(x) = f(x)$

Dessa forma, para encontrar $F(x)$ é necessário fazer uma operação inversa a derivada. Assim que encontrarmos essa função, aplicamos os valores do intervalo para encontrar a área desejada

**A Função retornada pelo processo inverso à derivada é chamada de Função Primitiva ou Anti Derivada**

## Técnicas de Integração

1. $\displaystyle\int x^{n} dx = \dfrac{x^{n+1}}{n+1} + C \, \text{ ; } \,  n \in R \text{ e } n \neq -1$

2. $\displaystyle\int a \cdot f(x) \cdot dx = a \cdot \displaystyle\int f(x) \cdot dx \, \text{ ; } \, a \text{ é uma constante}$

3. $\displaystyle\int [f(x) + g(x)] \cdot dx = \displaystyle\int f(x) \cdot dx \, + \, \displaystyle\int g(x) \cdot dx$

4. $\displaystyle\int [a_1 \cdot f(x) + a_{2} \cdot g(x)] \cdot dx = a_{1 \cdot }\displaystyle\int f(x) \cdot dx \, + \, a_{2} \cdot \displaystyle\int g(x) \cdot dx$

5. $\displaystyle\int 1 \cdot dx = x + C$
 
> [!warning] Observação
> 
> Perceba que $dx$ sempre some quando se integra uma função, isso ocorre porque sabemos que: 
> 
> $f(x) = F'(x) = \dfrac{dF}{dx}$
> 
> Entenda que só precisamos de $f(x)$ para encontrar $F(x)$, logo $dx$ é dispensável na hora da integração
