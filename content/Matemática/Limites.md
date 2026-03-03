---
tags:
    - Matemática
date: 2026-03-02
edit: 2026-03-02
---

> [!info] Recursos
>
> - [📹 O que é um Limite | Ponto Matemático](https://www.youtube.com/watch?v=nNmYF74Bh3w)
> - [📹 Limites | Matemático no Papel](https://youtube.com/playlist?list=PL-LPJn0YTIEGfXwn9F-0uW4ck2T_-1sQs&si=I_5zDx2iiLOS2nfa)
> - [📚 Limits | Math is Fun](https://www.mathsisfun.com/calculus/limits.html)
> - [📚 Limits | OpenStax](https://openstax.org/books/calculus-volume-1/pages/2-introduction)

## Introdução

### Exemplo 1

Imagine que possuímos a seguinte função:

$f(x) = \dfrac{1}{x}$

Sabendo que nenhum número pode ser divido por $0$, concluímos que na função $x$ deve ser diferente de $0$

Entretanto, há uma outra maneira de resolver isso, podemos tentar aproximar $x$ de $0$

Se definirmos $x=1$, podemos diminuir esse valor gradualmente, como $x=0.5$, $x=0.25$, $x=0.01$, $x=0.0001$, ...

Veja o gráfico da função:

![Gráfico da Função | 300x300](fx_1-by-x.svg)

Perceba que a medida que $x$ se aproxima de $0$:

- pela **direta**, o valor de $y$ cresce (+)
- pela **esquerda**, o valor de $y$ diminui (-)

Se aumentarmos o campo de visão do gráfico, observaremos que $y$ aumenta e diminui **infinitamente**:

![Gráfico da Função Ampliado | 300x300](fx_1-by-x_zoomout.svg)

Dessa forma, podemos dizer que:

- a medida que $x$ tende a $0$ pela **direita**, $y$ tende ao $+\infty$
- a medida que $x$ tende a $0$ pela **esquerda**, $y$ tende ao $-\infty$

Através da notação estabelecida, podemos reescrever isso da seguinte forma:

$\displaystyle{\lim_{ x \to 0 }} \dfrac{1}{x} = +\infty$

$\displaystyle{\lim_{ x \to 0 }} \dfrac{1}{x} = -\infty$

Infelizmente, nesse caso em específico, o limite $0$ não existe na função $f(x) = \dfrac{1}{x}$, porque se observamos a primeira imagem novamente:

![Gráfico da Função|300x300](fx_1-by-x.svg)

Existe uma quebra no gráfico. Definimos que uma função só há limite em um ponto $a$ quando a aproximação é igual pelos dois lados (esquerda e direita)

Mas vemos que há duas aproximações, $+\infty$ e $-\infty$

📌 O valor ao qual uma função se aproxima por um dos lados é chamado de **Limite Lateral**

### Exemplo 2

Vejamos uma outra função:

$f(x) = \dfrac{x^2 - 1}{x-1}$

Nessa função, se $x=1$, teremos:

$f(1) = \dfrac{1^2 -1}{1-1} = \dfrac{0}{0}$

OK, percebemos que há um problema aqui. Mas vamos persistir mais um pouco. Que tal uma aproximação de $x$ tendendo a $1$?

Vejamos alguns cálculos:

| $x$     | $f(x) = \frac{x^2 - 1}{(x-1)}$ |
| ------- | ------------------------------ |
| 1.01    | 2.01                           |
| 1.001   | 2.001                          |
| 1.0001  | 2.0001                         |
| 1.00001 | 2.00001                        |

Você já deve ter notado que a medida que $x$ tende a $1$, $f(x)$ tende a $2$. Logo podemos escrever que:

$\displaystyle{\lim_{ x \to 1 }} \dfrac{x^2 - 1}{x-1} = 2$

Espera! Na tabela aproximamos $x$ pela **direita**, será que acontece a mesma coisa quando aproximamos pela **esquerda**?

| $x$    | $f(x) = \frac{x^2 - 1}{(x-1)}$ |
| ------ | ------------------------------ |
| 0.9    | 1.9                            |
| 0.99   | 1.99                           |
| 0.999  | 1.999                          |
| 0.9999 | 1.9999                         |

Certo! Diferente da função do início, quando $x$ tende $1$ tanto pela **direita** e pela **esquerda**, $y$ ou $f(x)$ tende a $2$, ou seja, essa função há um limite

Veja o gráfico:

![Gráfico da Função 2|300x300](fx_x2-1_x-1.svg)

## Fórmula

$\displaystyle{\lim_{ x \to a }} \, f(x) = L$

## Função Contínua

Uma função é contínua quando:

- a função está definida em $a$
- o limite de $x$ tendendo a $a$ existe (os limites laterais são iguais)
- o valor do limite coincide com o valor da função em $a$ ($\displaystyle{\lim_{ x \to a }} \, f(x) = f(a)$)

Uma característica visível dessa função é o seu gráfico, onde não há **quebras**, **saltos** ou **buracos**, ou seja, a linha do gráfico permanece contínua

Nesses casos, durante a resolução dos limites, podemos adotar $x=a$

## Propriedades

**As propriedades abaixo serão abordas com exemplos sem indeterminações, ou seja, sem que haja um caso como $\frac{0}{0}$**

**Indeterminações serão abordas posteriormente**

### Limite de uma Constante

Dada a função:

$f(x) = K$

Onde $K$ é uma constante

O limite de $f(x)$ quando $x$ tende a $a$ sempre será $K$

$\displaystyle{\lim_{ x \to a }} \, K = K$

**Digamos $K=1$**

$\displaystyle{\lim_{ x \to -3 }} \, 1 = 1$

**Digamos $K=7$**

$\displaystyle{\lim_{ x \to +\infty }} \, 7 = 7$

Não importa o valor de $a$, o limite sempre será a própria constante

### Limite da Soma

Dado as funções:

$f(x) = x$
$g(x) = 3$

O limite de $f(x) + g(x)$ será:

$$\displaystyle{\lim_{ x \to a }} \, (f(x) + g(x)) = \displaystyle{\lim_{ x \to a }} \, f(x) + \displaystyle{\lim_{ x \to a }} \, g(x)$$

Digamos que $a=2$

$$\displaystyle{\lim_{ x \to 2 }} \, (f(x) + g(x)) = \displaystyle{\lim_{ x \to 2 }} \, f(x) + \displaystyle{\lim_{ x \to 2 }} \, g(x)$$

$$=\displaystyle{\lim_{ x \to 2 }} \, x + \displaystyle{\lim_{ x \to 2 }} \, 3$$

$$= x + 3$$

$$= 2 + 3 = 5$$

### Limite da Diferença

O **Limite da Diferença** segue o mesmo princípio do **Limite da Soma**. A única coisa que muda é a operação

Dado as funções:

$f(x) = x + 1$
$g(x) = x^2$

O limite de $f(x) - g(x)$ será:

$$\displaystyle{\lim_{ x \to a }} \, (f(x) - g(x)) = \displaystyle{\lim_{ x \to a }} \, f(x) - \displaystyle{\lim_{ x \to a }} \, g(x)$$

Digamos que $a=3$

$$\displaystyle{\lim_{ x \to 3 }} \, (f(x) - g(x)) = \displaystyle{\lim_{ x \to 3 }} \, f(x) - \displaystyle{\lim_{ x \to 3 }} \, g(x)$$

$$=\displaystyle{\lim_{ x \to 3 }} \, (x + 1) + \displaystyle{\lim_{ x \to 3 }} \, x ²$$

$$= x + 1 + x^2$$

$$= 3 + 1 + 3^2 = 13$$

### Limite do Produto

Dado as funções:

$f(x) = x$
$g(x) = 3$

O limite de $f(x) \cdot g(x)$ será:

$$\displaystyle{\lim_{ x \to a }} \, (f(x) \cdot g(x)) = \displaystyle{\lim_{ x \to a }} \, f(x) \cdot \displaystyle{\lim_{ x \to a }} \, g(x)$$

Digamos que $a=2$

$$\displaystyle{\lim_{ x \to 2 }} \, (f(x) \cdot g(x)) = \displaystyle{\lim_{ x \to 2 }} \, f(x) \cdot \displaystyle{\lim_{ x \to 2 }} \, g(x)$$

$$=\displaystyle{\lim_{ x \to 2 }} \, x \cdot \displaystyle{\lim_{ x \to 2 }} \, 3$$

$$= x \cdot 3$$

$$= 2 \cdot 3 = 6$$

### Limite do Quociente

Dado as funções:

$f(x) = x + 1$
$g(x) = x^2$

O limite de $\dfrac{f(x)}{g(x)}$ será:

$$\displaystyle{\lim_{ x \to a }} \, \dfrac{f(x)}{g(x)} = \frac{\displaystyle{\lim_{ x \to a }} \, f(x)}{\displaystyle{\lim_{ x \to a }} \, g(x)} = \dfrac{L}{M}$$
Onde $M \ne 0$

Digamos que $a=3$

$$\displaystyle{\lim_{ x \to 3 }} \, \dfrac{f(x)}{g(x)} = \frac{\displaystyle{\lim_{ x \to 3 }} \, f(x)}{\displaystyle{\lim_{ x \to 3 }} \, g(x)}$$

$$= \dfrac{\displaystyle{\lim_{ x \to 3 } (x+1)}}{\displaystyle{\lim_{ x \to 3 } x^2}}$$

$$= \dfrac{x+1}{x^2}$$

$$= \dfrac{3+1}{3^2} = \dfrac{4}{9}$$

### Limite da Potência

Dada a função:

$f(x) = x^2 + x$

O limite de $(f(x))^n$ será:

$$\displaystyle{\lim_{ x \to a }} \, (f(x))^n = \left(\displaystyle{\lim_{ x \to a }} \, f(x)\right)^n$$

Digamos que $a=5$ e $n=2$

$$\displaystyle{\lim_{ x \to 5 }} \, (f(x))^2 = \left(\displaystyle{\lim_{ x \to 5 }} \, f(x)\right)^2 =\left(\displaystyle{\lim_{ x \to 5 }} \, x^2 + x\right)^2$$

$$= (5^2 + 5)^2 = (25 + 5)^2 = 30^2 = 900$$

### Limite de uma Raiz

Dada a função:

$f(x) = 2x$

O limite de $\sqrt[n]{ f(x) }$ será:

$$\displaystyle{\lim_{ x \to a }} \, \sqrt[n]{ f(x) } = \sqrt[n]{\displaystyle{\lim_{ x \to a }} \, f(x)}$$

Digamos que $a=1$ e $n=2$

$$\displaystyle{\lim_{ x \to 1 }} \, \sqrt[2]{ f(x) } = \sqrt[2]{\displaystyle{\lim_{ x \to 1 }} \, f(x)}$$

$$=\sqrt[2]{\displaystyle{\lim_{ x \to 1 }} \, (2x)}$$

$$=\sqrt[2]{\displaystyle{2 \cdot 1}} = \sqrt{ 2 }$$

## Indeterminações

Veja alguns exemplos de indeterminações matemáticas:

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$
- $\infty - \infty$
- $\infty + \infty$
- $0^0$
- $\infty^0$
- $1^\infty$

Em algumas funções essas indeterminações podem ocorrer, como na função mencionada anteriormente:

$f(x) = \dfrac{x^2 - 1}{x - 1}$

Onde $f(1)$ é um indeterminação que resulta em $\frac{0}{0}$

Mas nós descobrimos anteriormente que $f(1) = 2$, até mesmo o gráfico no Desmo mostra isso

OK, então como resolvemos isso?

Nesses casos é necessário realizarmos a "Fatoração" que se trata representa uma expressão ou número como um produto de fatores

Por exemplo, em $(x^2 - 1)$ pode ser reescrito como $(x - 1) \cdot (x+1)$. Logo:

$f(x) = \dfrac{(x - 1) \cdot (x + 1)}{x - 1}$

Agora fica fácil, porque podemos cancelar o $(x-1)$ no numerador com o $(x-1)$ do denominador:

$f(x) = \dfrac{\cancel{(x - 1)} \cdot (x + 1)}{\cancel{x - 1}}$

$f(x) = x + 1$

Então:

$\displaystyle{\lim_{ x \to 1 } (x + 1)} = 1 + 1 = 2$
