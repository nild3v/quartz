---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-12
updated: 2026-04-12
---
> [!info] Recursos
> - [🎥 Basics of Joint Probability | Intelligent Systems Lab](https://www.youtube.com/watch?v=CQS4xxz-2s4)

## Introdução

Dado duas variáveis aleatórias $X$ e $Y$, a probabilidade de $X$ assumir cada um de seus possíveis estados sabendo que $Y=y_{i}$ é chamada de **Distribuição Condicional**

Basicamente fixamos um subconjunto de variáveis aleatórias em estados específicos e depois questionamos qual a probabilidade das demais variáveis assumir seus possíveis estados

### Distribuição Condicional Discreta

Dado $X$ e $Y$ como duas variáveis aleatórias discretas, a distribuição condicional será:

$p_{X|Y}(x|y) = P(X = x | Y = y) = \dfrac{P(X=x, Y=y)}{P(Y=y)} = \dfrac{P(X=x, Y=y)}{\displaystyle{\sum_{x' \,\in\, X}}P(X=x', Y=y)}$

### Distribuição Condicional Contínua

Dado $X$ e $Y$ como duas variáveis aleatórias contínuas, a distribuição condicional será:

$P(X=x|Y=y) = \dfrac{P(X = x, Y=y)}{P(Y=y)} = \dfrac{P(X=x, Y=y)}{\displaystyle{\int_{X}f_{X,Y}(x',y)\,dx'}}$

