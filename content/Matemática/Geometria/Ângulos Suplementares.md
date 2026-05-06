---
tags:
  - Matemática
  - Geometria
added: 2026-04-24
updated: 2026-04-24
---
> [!info] Recursos
> - [📄 Supplementary Angle | Math is Fun](https://www.mathsisfun.com/geometry/supplementary-angles.html)
> - [🎥 Sine of a Sum | Mathematical Visual Proofs](https://www.youtube.com/watch?v=OCIHS2vmdRA)
> - [📄 Sum & Difference Angle Formula (Tangent) | MathGuide](https://www.mathguide.com/lessons2/SDAT.html)

## Introdução

Um ângulo é suplementar à outro ângulo, quando a soma entre ambos é igual a $180 \degree$:

$\alpha + \beta  = 180 \degree$

Veja uma demonstração visual:

![[angulo_suplementares_01.gif]]

## Seno

O cosseno de dois ângulos suplementares são iguais:

Seja $\alpha$ um ângulo complementar de $\beta$, o seno de ambos é dado por:

$\sin(\alpha) = \sin(\beta)$

$\sin(\alpha) = \sin(180 \degree - \alpha)$

$sin(\beta) = \sin(180 \degree - \beta)$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 180 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 180 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 180 \degree - \beta$
$\alpha = 180 \degree - \beta$

Agora vamos aplicar o seno em ambos os lados da igualde:

$\sin(\alpha) = \sin(180 \degree - \beta)$

Existe uma propriedade na trigonometria, onde o seno de uma soma de dois ângulos é igual a:

$\sin(\theta + \Omega) = \sin(\theta)\cos(\Omega) + \cos(\theta)\sin(\Omega)$

Logo, podemos aplicar essa mesma propriedade em $\sin(180 \degree - \beta)$:

$\sin(180 \degree - \beta) = \sin(180)\cos(\beta) - \cos(180)\sin(\beta)$

Sabendo que $\sin(180) = 0$ e $cos(180) = -1$, temos:

$\sin(180 \degree - \beta) = 0\cos(\beta) - (-1)\sin(\beta)$
$\sin(180 \degree - \beta) = 0 + 1\sin(\beta)$
$\sin(180 \degree - \beta) = \sin(\beta)$

Logo:

$\sin(\alpha) = \sin(180 \degree - \beta) = \sin(\beta)$ 👈

Sabendo que $\beta = 180 \degree - \alpha$, temos:

$sin(\alpha) = \sin(180 \degree - \alpha)$ 👈

## Cosseno

O cosseno de dois ângulos suplementares são opostos

Seja $\alpha$ um ângulo complementar de $\beta$, o seno de ambos é dado por:

$\cos(\alpha) = -\cos(\beta)$
$\cos(\alpha) = -\cos(180 \degree - \alpha)$

$\cos(\beta) = -\cos(\alpha)$
$\cos (\beta) = -\cos(180 \degree - \beta)$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 180 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 180 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 180 \degree - \beta$
$\alpha = 180 \degree - \beta$

Vamos aplicar cosseno em ambos os lados da igualde:

$\cos(\alpha) = \cos(180 \degree - \beta)$

Existe uma propriedade na trigonometria, onde o cosseno de uma soma de dois ângulos é igual a:

$\cos(\theta + \Omega) = \cos(\theta)\cos(\Omega) - \sin(\theta)\cos(\Omega)$

Logo, podemos aplicar essa mesma propriedade em $\cos(180 \degree - \beta)$:

$\cos(180 \degree - \beta) = \cos(180 \degree)\cos(\beta) + \sin(180 \degree)\cos(\beta)$

Sabendo que $cos(180) = -1$ e $\sin(180) = 0$, temos:

$\cos(180 \degree - \beta) = -1\cos(\beta) + 0\cos(\beta)$
$\cos(180 \degree - \beta) = -\cos(\beta) + 0$
$\cos(180 \degree - \beta) = -\cos(\beta)$

Logo: 

$\cos(\alpha) = \cos(180 \degree - \beta) = -\cos(\beta)$ 👈

Sabendo que $\beta = 180 \degree - \alpha$, temos:

$\cos(\alpha) = -\cos(180 \degree - \alpha)$ 👈

## Tangente

A tangente de dois ângulos suplementares são opostos

Seja $\alpha$ um ângulo complementar de $\beta$, a tangente de ambos é dado por:

$\tan(\alpha) = -\tan(\beta)$
$\tan(\alpha) = -\tan(180 \degree - \alpha)$

$\tan(\beta) = -\tan(\alpha)$
$\tan(\beta) = -\tan(180 \degree - \beta)$

### Explicação

Veja uma prova do porquê que isso é verdade:

$\alpha + \beta = 180 \degree$

Vamos subtrair $\beta$ de ambos os lados da igualdade:

$\alpha + \beta - \beta = 180 \degree - \beta$
$\alpha + \cancel{ \beta } - \cancel{ \beta } = 180 \degree - \beta$
$\alpha = 180 \degree - \beta$

Vamos aplicar tangente em ambos os lados da igualde:

$\tan(\alpha) = \tan(180 \degree - \beta)$

Existe uma propriedade na trigonometria, onde a tangente de uma soma de dois ângulos é igual a:

$\tan(\theta + \Omega) = \dfrac{\tan(\theta) + \tan(\Omega)}{1 - \tan(\theta)\tan(\Omega)}$

Logo, podemos aplicar essa mesma propriedade em $\tan(180 \degree - \beta)$:

$\tan(180 \degree + \beta) = \dfrac{\tan(180 \degree) - \tan(\beta)}{1 + \tan(180 \degree)\tan(\beta)}$

Sabendo que $\tan(180) = 0$, temos:

$\tan(180 \degree + \beta) = \dfrac{0 - \tan(\beta)}{1 + 0\tan(\beta)}$

$\tan(180 \degree + \beta) = \dfrac{-\tan(\beta)}{1 + 0}$

$\tan(180 \degree + \beta) = \dfrac{-\tan(\beta)}{1}$

$\tan(180 \degree + \beta) = -\tan(\beta)$

Logo: 

$\tan(\alpha) = \tan(180 \degree - \beta) = -\tan(\beta)$ 👈

Sabendo que $\beta = 180 \degree - \alpha$, temos:

$\tan(\alpha) = -\tan(180 \degree - \alpha)$ 👈