---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-09
updated: 2026-04-10
---
> [!info] Recursos
> - [📚 Deep Learning Book | MIT Press](https://www.deeplearningbook.org/contents/prob.html)
> - [📄 Probability Mass Function | Wikipedia](https://en.wikipedia.org/wiki/Probability_mass_function)
> - [📄 Probability Mass Function | Probability Course](https://www.probabilitycourse.com/chapter3/3_1_3_pmf.php)
> - [🎥 Probability Density Functions | MIT OpenCourseWare](https://www.youtube.com/watch?v=8QFpZ3FndBc)
> - [🎥 Probability Density and Mass Functions | Intelligent Systems Lab](https://www.youtube.com/watch?v=hDjcxi9p0ak)
> - [🎥 Função de Densidade de Probabilidade | Khan Academy Brasil](https://www.youtube.com/watch?v=tNMJLr1H_gA)
> - [🎥 Probability Density Functions | The Organic Chemistry Tutor](https://www.youtube.com/watch?v=QKA4HNEw3aY)

## Introdução

A Distribuição de Probabilidade é uma descrição de quão provável uma variável aleatória ou um conjunto de variáveis aleatórias assumirem cada um dos seus possíveis estados

A forma que a distribuição de probabilidade é aplicada vai depender se as variáveis são discreta ou contínuas

## Função de Massa de Probabilidade

Uma Função de Massa de Probabilidade é uma função que permite calcular as probabilidades dos possíveis valores que uma **variável aleatória discreta** pode assumir

Denotamos isso como:

$p_{X}(x) = P(X=x)$

Onde:

- $p_{X}(x)$ é a função de massa de probabilidade

- $P(X=x)$: é a probabilidade de $X$ assumir o valor $x$

- $X$: é a variável aleatória discreta

- $x$: é o valor que a variável $X$ pode assumir

A expressão $p_{X}(x)$ pode ser simplificada para $p(x)$

### Exemplo

Suponhamos que uma pessoa que esteja com vontade de comer um doce, decidi abrir uma caixa de bombom e escolhe **aleatoriamente** um dos bombons que estão ali

Nessa caixa há 10 bombons no total: 5 de chocolate, 3 de coco e 2 de banana

Qual é a probabilidade de escolha sobre cada sabor de bombom diferente?

Vamos primeiramente definir que:

- $X$ é a variável que representa os bombons
- $x_1$ é o valor que representa o sabor de chocolate
- $x_2$ é o valor que representa o sabor de coco
- $x_3$ é o valor que representa o sabor de banana

A probabilidade individual de cada escolha possível seria:

$P(X = x_{1}) = \dfrac{5}{10} = 0.5 = 50\%$

$P(X = x_{2}) = \dfrac{3}{10} = 0.3 = 30\%$

$P(X = x_{3}) = \dfrac{2}{10} = 0.2 = 20\%$

Lembrando que: $p_{X}(x) = p(x) = P(X=x)$

Essa questão representada graficamente seria assim:

![[grafico_funcao_massa_probabilidade.png]]
## Função de Densidade de Probabilidade

Uma Função de Densidade de Probabilidade é uma função que calcula a **probabilidade concentrada** em um intervalo de uma **variável aleatória contínua**

Denotamos isso como:

$P(a \leq X \leq b) = \displaystyle{\int_{a}^{b}} f_{X}(x)\,dx$

Onde:

- $P(a \leq X \leq b)$: a probabilidade acumulada no intervalo $a \to b$

- $f_{X}(x)$: a função de densidade de probabilidade 

- $X$: é variável aleatória contínua

- $a$: o ponto inicial do intervalo

- $b$: o ponto final do intervalo

A expressão $f_{X}(x)$ pode ser simplificada para $f(x)$

> [!warning] Observação
> Vale ressaltar que $f(x)$ só é uma função de densidade de probabilidade quando:
> - $f(x) \geq 0$ (ou seja, $y \geq 0$)
> - $\displaystyle{\int_{-\infty}^{\infty}} f_{X}(x)\,dx = 1$

### Exemplo 01

Suponhamos que temos uma função desconhecida que descreve a probabilidade de chover $x$ milímetros no dia seguinte e seu gráfico se parecesse com isso:

![[grafico_funcao_densidade_probabilidade_chuva_01.png]]

Inicialmente se analisarmos o gráfico, poderíamos deduzir que para descobrir a probabilidade de chover $2\,mm$ no dia seguinte, bastava olhar o valor correspondente do eixo $y$:

![[grafico_funcao_densidade_probabilidade_chuva_02.gif]]

**Mas está totalmente errado**. Em função de densidade de probabilidade trabalhos com integrais que nos dão a área sob uma curva em um intervalo específico, logo, para determinar a probabilidade de um valor específico baseado em um único ponto, significa que a probabilidade é zero, porque a área de um ponto ou de uma linha é $0$

Além disso, seria ridículo pensar que irá chover **exatamente** $2\,mm$ e não $2,01\,mm$, $1,93\,mm$, etc.

Então o que devemos fazer é calcular a densidade da probabilidade que é dada pela área sob a curva em um intervalo $a \to b$

Vamos definir esse intervalo como $1,9 \leq x \leq 2,1$ e veja como fica no gráfico:

![[grafico_funcao_densidade_probabilidade_chuva_03.png]]
Agora bastava aplicar a integral nesse intervalo:

$$P(1.9 \leq X \leq 2.1) = \displaystyle{\int_{1.9}^{2.1}} f(x)\,dx = \displaystyle{\int_{0}^{2.1}} f(x)\,dx - \displaystyle{\int_{0}^{1.9}} f(x)\,dx$$

Entretanto como a função é desconhecida, não poderemos descobrir a densidade da probabilidade nesse intervalo

