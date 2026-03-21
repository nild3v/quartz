---
tags:
    - Matemática
added: 2026-03-11
updated: 2026-03-11
---

> [!info] Recursos
>
> - [📹 Função Inversa | Ponto Matemático](https://www.youtube.com/watch?v=GfQosZSTXUs)

## Introdução

Uma função recebe um valor de entrada $x$ (Domínio) e associa a um valor de saída $y$ (Contradomínio):

$f: A \to B$

Então se existe uma função que segue esse caminho, deve haver uma que faz o caminho contrário:

$f^{-1}: B \to A$

Dessa forma, temos uma função que recebe um valor $y$ do Contradomínio e retorna o valor $x$ que estava associado na função original. Essa regra é o que chamamos de Função Inversa

Denotada como:

$f^{-1}(y) = x$

Mas por convenção escrevemos com as variáveis invertidas:

$f^{-1}(x) = y$

**Observação!**

O $-1$ em $f^{-1}$ é apenas um símbolo / indicador, não está relacionado com potência

## Cálculo

Como podemos calcular a função de inversa de uma função? É bastante simples, basta isolarmos $x$ na equação

Vejamos com uma função do primeiro grau:

$y = 3x + 1$

A função inversa será:

$y - 1 = 3x + 1 - 1$

$y - 1 = 3x + \cancel{ 1 } - \cancel{ 1 }$

$y - 1 = 3x$

$\dfrac{y - 1}{3} = \dfrac{3x}{3}$

$\dfrac{y - 1}{3} = \dfrac{\cancel{ 3 }x}{\cancel{ 3 }}$

$\dfrac{y - 1}{3} = x$

$x = \dfrac{y - 1}{3}$ 👈

Esse processo se repetirá para qualquer Função do Primeiro Grau, logo:

$x = \dfrac{y - b}{a}$

## Gráfico

A função inversa representada graficamente é um reflexo da função original

Veja:

![[inverse_function.png]]

## Composição

Se $f(x) = y$ e $f^{-1}(y) = x$, logo, $f^{-1}(f(x)) = x$

É como se $f^{-1}(x)$ desfizesse a transformação de $f(x)$

O mesmo vale quando invertermos a ordem:

$f(f^{-1}(x)) = x$

Porque $f(x)$ é a inversa de $f^{-1}(x)$

Inverter a inversão é basicamente retornar ao estado original
