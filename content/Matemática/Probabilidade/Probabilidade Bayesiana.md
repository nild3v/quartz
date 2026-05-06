---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-09
updated: 2026-04-09
---
> [!info] Recurso
> - [📚 Deep Learning Book | MIT Press](https://www.deeplearningbook.org/contents/prob.html)
> - [📄 Probability | Wolfram MathWorld](https://mathworld.wolfram.com/Probability.html)
> - [🎥 Explaining the biggest "beef" in Statistics | Very Normal](https://www.youtube.com/watch?v=8wVq5aGzSqY&t=18s)
> - [📚 Introduction to Probability, Second Edition | Joseph K.; Jessica Hwang](https://www.amazon.com/Introduction-Probability-Chapman-Statistical-Science/dp/1138369918)

## Introdução

A **Probabilidade Bayesiana** é um das interpretações sobre a probabilidade, a definido como algo subjetivo baseado em crenças que são atualizadas a medida que novas informações são adquiridas

Por exemplo, durante um filme de suspense a medida que novos personagens, cenas, falas, etc., são introduzidas, automaticamente fazemos novas deduções com base no que foi apresentado

Nesse caso a probabilidade estaria atrelada ao seu grau de crença de um determinado evento ocorrer:

$P(A) = \text{Seu grau de crença do evento A ocorrer}$

## Teorema de Bayes

O teorema de Bayes é definido como:


$P(A,B) = P(B)P(A|B) = P(A)P(B|A)$

$P(A | B) = \dfrac{P(A,B)}{P(B)} = \dfrac{P(A) \cdot P(B | A)}{P(B)}$

Onde:

- $P(A,B):$ Probabilidade de $A$ e $B$ ocorrerem juntos

- $P(A|B)$: Probabilidade de $A$ ocorrer sabendo que $B$ já ocorreu (Crença Atualizada)

- $P(B|A)$: Probabilidade de $B$ ocorrer sabendo que $A$ já ocorreu

- $P(A)$: Probabilidade de $A$ ocorrer (Crença Inicial)

- $P(B)$: Probabilidade de $B$ ocorrer

