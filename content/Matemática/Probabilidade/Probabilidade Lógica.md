---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-09
updated: 2026-04-09
---
> [!info] Recursos
> - [🎥 Explaining the biggest "beef" in Statistics | Very Normal](https://www.youtube.com/watch?v=8wVq5aGzSqY&t=18s)
> - [📄 Cox's Theorem | Wikipedia](https://en.wikipedia.org/wiki/Cox's_theorem)
> - [📄 Edwin T. Jaynes | Wikipedia](https://en.wikipedia.org/wiki/Edwin_Thompson_Jaynes)

## Introdução

A **Probabilidade Lógica** é uma extensão da **Probabilidade Bayesiana** que conecta a Teoria da Probabilidade com a Lógica acrescentando regras que respeitem a probabilidade usual

Uma dessas regras é a que as informações prévias devem ser respeitadas, porque as pessoas raramente consideram eventos puramente isolados, mas sim usam da bagagem de informações que adquiriram ao longo do tempo

Por exemplo, se você já leu mais de uma obra do mesmo autor, pode usar o que aprendeu nas anteriores para estimar a probabilidade de certos acontecimentos aparecerem no próximo lançamento

Portanto, na interpretação lógica, a probabilidade não pode ser desassociada das informações prévias

Denotamos toda a informação prévia como: $X$

## Teorema de Cox

O teorema de Cox é definido como:

$P(A|B,X) = \dfrac{P(A|X) \cdot P(B|A,X)}{P(B|X)}$

Onde:

- $P(A|B,X)$: Probabilidade de $A$ ocorrer sabendo que $B$ já ocorreu tendo o contexto de $X$ (Crença atualizada baseado no que já sabe)

- $P(B|A,X)$: Probabilidade de $B$ ocorrer sabendo que $A$ já ocorreu tendo o contexto de $X$

- $P(A|X)$: Probabilidade de $A$ ocorrer tendo o contexto de $X$ (Crença Inicial baseado no que já sabe)

- $P(B|X)$: Probabilidade de $B$ ocorrer tendo o contexto de $X$