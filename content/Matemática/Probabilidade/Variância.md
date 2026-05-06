---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-15
updated: 2026-04-15
---
> [!info] Recursos
> - [🎥 Expected Value and Variance of Discrete Random Variables | jbstatistics](https://www.youtube.com/watch?v=OvTEhNL96v0&t=7s)
> - [🎥 Deriving the Mean and Variance of a Continuous Probability Distribution | jbstatistics](https://www.youtube.com/watch?v=Ro7dayHU5DQ)

## Introdução

A variância mede o quão dispersos os valores de uma variável aleatória estão em relação a média

## Variância de Variável Aleatória Discreta

A variância de uma variável aleatória discreta é denotada como:

$Var(X) = E[(X-\mu)^2] = \displaystyle{\sum_{i=1}} (x_{i} - \mu)^2 \, P(X=x_{i})$

Onde:

- $Var(X)$ : variância da variável aleatória $X$

- $P(X=x_{i})$: é a probabilidade de $X$ assumir o valor $x_i$

- $x_i$ : o valor que $X$ pode assumir

- $\mu$ : média ou valor esperado de $X$, ou seja, $E[X]$

### Simplificação da Fórmula

Entretanto, a fórmula pode ser simplificada

A primeira etapa é expandir os quadrados, ou seja, desenvolver a expressão $(X-\mu)^2$:

$(X-\mu)^2$
$= (X-\mu) \cdot (X-\mu)$
$=(X\cdot X - X \cdot \mu - \mu \cdot X -\mu (-\mu))$
$= X^{2} - 2X\mu + \mu^2$

Logo:

$E[(X-\mu)^2] = E[X^{2} - 2X\mu + \mu^2]$

Como $E[\dots]$ é uma função linear, podemos aplicar a propriedade  da "Aditividade" que afirma que: $f(x + y) = f(x) + f(y)$, onde $x$ e $y$ são valores qualquer

Então temos:

$E[X^{2} - 2X\mu + \mu^2] = E[X^{2}] - E[2X\mu] + E[\mu^2]$

Vale ressaltar que $E[X]$ é um constante, porque representa a média  ponderada da variável aleatória $X$, logo, $E[E[X]] = E[X]$. Isso vale para qualquer variável aleatória

Além disso, podemos aplicar a propriedade da "Homogeneidade" que afirma que: $f(x \cdot c) = c \cdot f(x)$, onde $c$ é uma constante e $x$ um valor qualquer

Portanto, podemos escrever a expressão anterior da fórmula da seguinte forma:

$E[X^{2}] - E[2X\mu] + E[\mu^2]$
$= E[X^{2}] - 2 \mu E[X] + E[\mu^2]$
$= E[X^{2}] - 2 \mu \mu + E[\mu^2]$
$= E[X^{2}] - 2 \mu^2 + E[\mu^2]$
$= E[X^{2}] \cancel{ - 2 \mu^2 } + \cancel{ \mu^2 }$
$= E[X^{2}] - \mu^{2}$

Sabendo que $\mu = E[X]$:

$E[X^{2}] - \mu^{2} = E[X^{2}] - (E[X])^2$ 👈

A fórmula final fica como: 

$Var(X) = E[X^{2}] - (E[X])^2$

## Variância da Variável Aleatória Contínua

A variância de uma variável aleatória contínua é denotada como:

$Var(X) = E[(X-\mu)^2] = \displaystyle{\int_{-\infty}^{\infty}} (x-\mu)^2 \cdot f_{X}(x)\,dx$

Onde:

- $Var(X)$ : variância da variável aleatória $X$

- $f_{X}(x)$: a função de densidade de probabilidade 

- $x$: os valores que $X$ pode assumir

- $\mu$ : média ou valor esperado de $X$, ou seja, $E[X]$


A mesma simplificação encontrada anteriormente pode ser aplicada aqui:

$E[(X-\mu)^2] = E[X^{2}] - (E[X])^2$

Onde:

$E[X^{2}] = \displaystyle{\int_{-\infty}^{\infty}} x^2 \cdot f_{X}(x)\,dx$

$(E[X])^2 = \left(\displaystyle{\int_{-\infty}^{\infty}} x \cdot f_{X}(x)\,dx \right)^2$

