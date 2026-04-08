---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-04-01
updated: 2026-04-01
---
> [!info] Recursos
> - [📄 Norm (Mathematics) | Wikipedia](https://en.wikipedia.org/wiki/Norm_(mathematics))
> - [🎥 Norms, Lp Norms and Sup Norm | Dr. Bevin Maultsby](https://www.youtube.com/watch?v=pr-V5nbMKOM)
> - [🎥 Linear Algebra: Norm | Math to Thought](https://www.youtube.com/watch?v=3i3klTnGZZM)
> - [📚 Linear ALgebra, 4th Edition](https://www.amazon.com/Linear-Algebra-Edition-Stephen-Friedberg/dp/0130084514)

## Introdução

Uma **norma** é uma função que recebe um vetor de um espaço vetorial como entrada e retorna um valor escalar que representa a sua magnitude (comprimento)

Uma norma deve satisfazer os seguintes axiomas:

1. Uma norma deve ser maior ou igual a zero: $||\vec{v}|| \geq 0$

2. Uma normal será igual a zero, quando o vetor for nulo: $||\vec{v}|| = 0 \text{ se } \vec{v} = \vec{0}$

3. A norma de um produto escalar deve ser igual ao produto do módulo do valor escalar pela norma vetorial: $||t \cdot \vec{v}|| = |t| \cdot ||\vec{v}||$

4. A norma de uma soma de dois vetores deve ser menor ou igual a soma das normas vetoriais individuais (Desigualdade Triangular): $||\vec{v} + \vec{w}|| \leq ||\vec{v}|| + ||\vec{w}||$

Você já deve ter ouvido sobre o módulo de um vetor que é denotado como $|\vec{v}|$ e representa a magnitude de um vetor

Qual a diferença? Uma Norma é uma função, enquanto o Módulo é um valor escalar. Basicamente, o Módulo é o resultado de uma Norma específica, quando dizemos "Qual o módulo desse vetor?" sem especificar nenhuma Norma, assumimos que iremos aplicar a Norma Euclidiana

## Norma Euclidiana

Em um espaço euclidiano n-dimensional ($\mathbb{E}^n$), o comprimento de um vetor:

$\vec{v} = \begin{bmatrix}v_{1} \\ v_{2} \\ \vdots \\ v_{n} \end{bmatrix}$

É dado por:

$||\vec{v}|| = \sqrt{ v_{1}^2 + v_{2}^2  + \dots + v_{n}^2}$

ou

$||\vec{v}|| = \sqrt{\displaystyle{\sum_{i=1}^{k} v_{i}^2}}$

ou

$||\vec{v}|| = \left(\displaystyle{\sum_{i=1}^{k} v_{i}^2} \right)^\frac{1}{2}$