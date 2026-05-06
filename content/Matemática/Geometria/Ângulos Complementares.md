---
tags:
  - Matemática
  - Geometria
added: 2026-04-26
updated: 2026-04-26
---
> [!info] Recursos
> - [📄 Complementary Angles | Math is Fun](https://www.mathsisfun.com/geometry/complementary-angles.html)
> - [🎥 Sine of a Sum | Mathematical Visual Proofs](https://www.youtube.com/watch?v=OCIHS2vmdRA)
> - [📄 Sum & Difference Angle Formula (Tangent) | MathGuide](https://www.mathguide.com/lessons2/SDAT.html)

## Introdução

Um ângulo é complementar à outro ângulo, quando a soma entre ambos é igual a $90 \degree$:

$\alpha + \beta  = 90 \degree$

Veja uma demonstração visual:

![[angulo_complementares_01.gif]]


## Seno

O seno de um ângulo é igual ao cosseno do ângulo complementar

Seja $\alpha$ um ângulo complementar de $\beta$, o seno de ambos é dado por:

$\sin(\alpha) = \cos(\beta)$
$sin(\alpha) = \cos(90 \degree - \alpha)$

$\sin(\beta) = \cos(\alpha)$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 90 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 90 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 90 \degree - \beta$
$\alpha = 90 \degree - \beta$

Agora vamos aplicar o seno em ambos os lados da igualde:

$\sin(\alpha) = \sin(90 \degree - \beta)$

Existe uma propriedade na trigonometria, onde o seno de uma soma de dois ângulos é igual a:

$\sin(\theta + \Omega) = \sin(\theta)\cos(\Omega) + \cos(\theta)\sin(\Omega)$

Logo, podemos aplicar essa mesma propriedade em $\sin(180 \degree - \beta)$:

$\sin(90 \degree - \beta) = \sin(90)\cos(\beta) - \cos(90)\sin(\beta)$

Sabendo que $\sin(90) = 1$ e $cos(90) = 0$, temos:

$\sin(90 \degree - \beta) = 1\cos(\beta) - 0\sin(\beta)$
$\sin(90 \degree - \beta) = \cos(\beta) + 0$
$\sin(90 \degree - \beta) = \cos(\beta)$

Logo:

$\sin(\alpha) = \sin(90 \degree - \beta) = \cos(\beta)$ 👈

Sabendo que $\beta = 90 \degree - \alpha$, temos:

$sin(\alpha) = \cos(90 \degree - \alpha)$ 👈

## Cosseno

O cosseno de um ângulo é igual ao seno do ângulo complementar

Seja $\alpha$ um ângulo complementar de $\beta$, o cosseno de ambos é dado por:

$\cos(\alpha) = \sin(\beta)$
$\cos(\alpha) = \sin(90 \degree - \alpha)$

$\cos(\beta) = \sin(\alpha)$
$\cos (\beta) = \sin(90 \degree - \beta)$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 90 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 90 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 90 \degree - \beta$
$\alpha = 90 \degree - \beta$

Agora vamos aplicar o cosseno em ambos os lados da igualde:

$\cos(\alpha) = \cos(90 \degree - \beta)$

Existe uma propriedade na trigonometria, onde o cosseno de uma soma de dois ângulos é igual a:

$\cos(\theta + \Omega) = \cos(\theta)\cos(\Omega) - \sin(\theta)\sin(\Omega)$

Logo, podemos aplicar essa mesma propriedade em $\sin(180 \degree - \beta)$:

$\cos(90 \degree - \beta) = \cos(90 \degree)\cos(\beta) + \sin(90 \degree)\sin(\beta)$

Sabendo que $cos(90) = 0$ e $\sin(90) = 1$, temos:

$\cos(90 \degree - \beta) = 0\cos(\beta) + 1\sin(\beta)$
$\cos(90 \degree - \beta) = 0 + \sin(\beta)$
$\cos(90 \degree - \beta) = \sin(\beta)$

Logo:

$\sin(\alpha) = \cos(90 \degree - \beta) = \sin(\beta)$ 👈

Sabendo que $\beta = 90 \degree - \alpha$, temos:

$sin(\alpha) = \sin(90 \degree - \alpha)$ 👈

## Tangente

A tangente de dois ângulos suplementares são opostos

Seja $\alpha$ um ângulo complementar de $\beta$, a tangente de ambos é dado por:

$\tan(\alpha) = \dfrac{\cos(\beta)}{\sin(\beta)}$

$\tan(\alpha) = \dfrac{\cos(90 \degree - \alpha)}{\sin(90 \degree - \alpha)}$

$\tan(\beta) = \dfrac{\cos(\alpha)}{\sin(\alpha)}$

$\tan(\beta) = \dfrac{\cos(90 \degree - \beta)}{\sin(90 \degree - \beta)}$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 90 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 90 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 90 \degree - \beta$
$\alpha = 90 \degree - \beta$

Vamos aplicar tangente em ambos os lados da igualde:

$\tan(\alpha) = \tan(90 \degree - \beta)$

Existe uma propriedade na trigonometria, onde a tangente de uma soma de dois ângulos é igual a:

$\tan(\theta + \Omega) = \dfrac{\sin(\theta + \Omega)}{\cos(\theta + \Omega)} = \dfrac{\sin(\theta)\cos(\Omega) + \cos(\theta)\sin(\Omega)}{\cos(\theta)\cos(\Omega) - \sin(\theta)\sin(\Omega)}$

Logo, podemos aplicar essa mesma propriedade em $\tan(90 \degree - \beta)$:

$\tan(90 \degree - \beta) = \dfrac{\sin(90 \degree)\cos(\beta) - \cos(90 \degree)\sin(\beta)}{\cos(90 \degree)\cos(\beta) + \sin(90 \degree)\sin(\beta)}$

Sabendo que $\sin(90) = 1$ e $\cos(90) = 0$, temos:

$\tan(90 \degree - \beta) = \dfrac{1\cos(\beta) - 0\sin(\beta)}{0\cos(\beta) + 1\sin(\beta)}$

$\tan(90 \degree - \beta) = \dfrac{\cos(\beta) - 0}{0 + \sin(\beta)}$

$\tan(90 \degree - \beta) = \dfrac{\cos(\beta)}{\sin(\beta)}$

Logo: 

$\tan(\alpha) = \tan(90 \degree - \beta) = \dfrac{\cos(\beta)}{\sin(\beta)}$ 👈

Sabendo que $\beta = 90 \degree - \alpha$, temos:

$\tan(\alpha) = \dfrac{\cos(90 \degree - \alpha)}{\sin(90 \degree - \alpha)}$ 👈