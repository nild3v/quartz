---
tags:
  - Matemática
date: 2026-03-02
edit: 2026-03-02T21:40:00
---
> [!info] Recursos
> - [📹 O que é um Limite | Ponto Matemático](https://www.youtube.com/watch?v=nNmYF74Bh3w)
> - [📹 Limites | Matemático no Papel](https://youtube.com/playlist?list=PL-LPJn0YTIEGfXwn9F-0uW4ck2T_-1sQs&si=I_5zDx2iiLOS2nfa)
> - [📚 Limits | Math is Fun](https://www.mathsisfun.com/calculus/limits.html)

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