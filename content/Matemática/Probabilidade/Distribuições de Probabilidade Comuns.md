---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-19
updated: 2026-04-19
---
> [!info] Recursos
> - [🎥 Introduction to the Bernoulli Distribution | jbstatistics](https://www.youtube.com/watch?v=bT1p5tJwn_0)
> - [📚️ DeepLearningBook | MIT Press](https://www.deeplearningbook.org/contents/prob.html)
> - [🎥 Categorical Distribution | DataMListic](https://www.youtube.com/watch?v=pUOGjQTqay4)
> - [🎥 Introduction to the Normal Distribution | jbstatistics](https://www.youtube.com/watch?v=iYiOVISWXS4)
> - [🎥 Maximum Likelihood for the  Exponential Distribution | StatQuest with Josh Starmer](https://www.youtube.com/watch?v=p3T-_LMrvBc)
> - [📄 Laplace Distribution | Wikipedia](https://en.wikipedia.org/wiki/Laplace_distribution)
> - [🎥 Dirac Delta Function | Tim Schulz](https://www.youtube.com/watch?v=SQwyLjVQwF8)

## Introdução

## Distribuição de Bernoulli

A distribuição de Bernoulli é uma distribuição de probabilidade que descreve um único experimento sobre uma única variável aleatória binária ($0$ ou $1$) que indica sucesso ou falha

A probabilidade dessa variável assumir $1$ é $\phi$ (phi), denotado como:

$P(X = 1) = \phi$

E a probabilidade dessa variável assumir $0$ é $\phi - 1$, denotado como:

$P(X = 0) = 1 - \phi$

Por fim, a distribuição de Bernoulli é denotada como:

$P(X = x) = \phi^{x}(1-\phi)^{1-x}$

Onde:

- $P(X=x)$: probabilidade de $X$ assumir o valor $x$

- $\phi$: Probabilidade de $X$ assumir o valor de $1$

- $x$: os valores que $X$ pode assumir ($0$ ou $1$)

Essa fórmula expressa a probabilidade de uma variável aleatória binária de assumir $0$ ou $1$ (sucesso ou falha) em uma única tentativa

> [!warning] Observação
> 
> Geralmente é usado $p$ em vez de $\phi$ nas expressões, mas preferi usar $\phi$ para não causar confusão

### Valor Esperado

Na distribuição de Bernoulli, o valor esperado da variável é dada por:

$E[X] = \phi$

Mas por que isso é verdade? Bem, veja abaixo:

Sabendo que a fórmula do valor esperado é:

$E[X] = \displaystyle{\sum_{i=1}} P(X=x_{i}) \, x_{i}$

E as probabilidades da variável são:

$P(X = 1) = \phi$
$P(X = 0) = 1 - \phi$

Logo:

$E[X] = P(X=1) \cdot x_{1} + P(X=0) \cdot x_{2}$
$E[X] = \phi \cdot 1 + (1 - \phi) \cdot 0$
$E[X] = \phi + 0$
$E[X] = \phi$

### Variância

Na distribuição de Bernoulli, a variância da variável é dada por:

$Var(X) = \phi(1 - \phi)$

Veja o porquê que isso é verdade:

Sabendo que a fórmula simplificada da variância é dada por:

$Var(X) = E[X^{2}] - (E[X])^2$

Logo:

$Var(X) = (P(X=1) \cdot x_{1}^2 + P(X=0) \cdot x_{2}^2) - (P(X=1) \cdot x_{1} + P(X=0) \cdot x_{2})^2$
$Var(X) = (\phi \cdot 1^2 + (1 - \phi) \cdot 0^2) - (\phi \cdot 1 + (1 - \phi) \cdot 0)^2$
$Var(X) = (\phi \cdot 1 + (1 - \phi) \cdot 0) - (\phi)^2$
$Var(X) = (\phi + 0) - \phi^2$
$Var(X) = \phi - \phi^2$
$Var(X) = \phi (1 - \phi)$

## Distribuição Multinoulli

A distribuição Multinoulli é uma generalização da distribuição de Bernoulli ao permitir mais de dois resultados possíveis

Dado uma variável aleatória discreta $X$, a probabilidade de assumir $x_i$ é de $\phi_{i}$, denota-se como:

$P(X = x_{i}) = \phi_{i}$

Além disso, a soma de todas as probabilidades deve ser igual a $1$:

$\displaystyle{\sum_{i=1}^{n} P(X=x_{i})} = 1$

## Distribuição Gaussiana (Distribuição Normal)

A distribuição mais comumente usada em números reais é a **distribuição Gaussiana**, também conhecida como a **distribuição normal**

Denotada como:

$\mathcal{N}(x; \mu, \sigma^2) = \sqrt{ \dfrac{1}{2 \pi \sigma^2} } e^{\left(-\dfrac{1}{2 \sigma^2}(x-\mu)^2 \right)}$

Ou:

$\mathcal{N}(x; \mu, \sigma^2) = \sqrt{ \dfrac{1}{2 \pi \sigma^2} } \exp \left(-\dfrac{1}{2 \sigma^2}(x-\mu)^2 \right)$

Ou:

$\mathcal{N}(x; \mu, \sigma^2) = \sqrt{ \dfrac{1}{2 \pi \sigma^2} } \exp \left(-\dfrac{(x-\mu)^2}{2 \sigma^2} \right)$

Onde:

- $x$: valor aleatório contínuo 

- $\mu$: a média 

- $\sigma$: o desvio padrão, então $\sigma^2$ é a variância

## Distribuição Exponencial

A distribuição exponencial é dada por:

$\displaystyle f(x;\lambda) = {\begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0&x<0 \end{cases}}$

ou:

$\displaystyle f(x;\lambda) = {\begin{cases} \lambda \exp(-\lambda x) & x \geq 0 \\ 0&x<0 \end{cases}}$

Onde:

- $\lambda$: é o parâmetro de distribuição ou parâmetro de taxa

## Distribuição de Laplace

A **distribuição de Laplace**, também chamada de **distribuição exponencial dupla**, porque pode ser vista como duas distribuições exponenciais opostas emendadas ao longo do eixo $x$

Denotada como:

$Laplace(x;\mu;\Upsilon) = \dfrac{1}{2\Upsilon}\exp \left(-\dfrac{|x-\mu|}{\Upsilon} \right)$

Onde:

- $\mu$: é a média ou parâmetro de localização que determina o deslocamento da distribuição ao longo do eixo $x$

- $\Upsilon$: é o parâmetro de escala que determina o quão disperso é a distribuição

## Distribuição de Dirac (Pendente)

$p(x) = \delta(x - \mu)$

## Distribuição Empírica (Pendente)

$\hat{p}(x) = \dfrac{1}{m} \displaystyle{\sum_{i=1}^{m} \delta(x - x^{(i)})}$


## Distribuição de Mistura (Pendente)

Uma distribuição de mistura consiste em combinar múltiplas distribuições de probabilidade para formar uma nova distribuição mais complexa

$f(x) = \displaystyle{\sum_{i=1}^{n} w_{i}p_{i}(x)}$

