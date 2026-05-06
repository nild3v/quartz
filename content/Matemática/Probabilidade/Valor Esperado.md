---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-13
updated: 2026-04-13
aliases:
  - Esperança Matemática
  - Expectation
  - Expected Value
---
> [!info] Recursos
> - [🎥 Expected Values | StatQuest with Josh Starmer](https://www.youtube.com/watch?v=KLs_7b7SKi4)
> - [🎥 Expected Values for Continuous Variables | StatQuest with Josh Starmer](https://www.youtube.com/watch?v=OSPr6G6Ka-U)

## Introdução

Dado uma variável aleatória numérica $X$, a soma do produto da probabilidade de $X$ assumir um estado pelo seu respectivo valor é conhecido como "Valor Esperado"

### Valor Esperado para Variáveis Aleatórias Discretas

O "Valor Esperado" de uma variável aleatória discreta é denotada como:

$E(X) = \displaystyle{\sum_{i=1}} P(X=x_{i}) \, x_{i}$

ou

$E[X] = \displaystyle{\sum_{i=1}} P(X=x_{i}) \, x_{i}$

Onde:

- $E(X)$ ou $E[X]$: é o valor esperado da variável $X$

- $P(X=x_{i})$: é a probabilidade de $X$ assumir o valor $x_i$

- $x_{i}$: é o valor que $X$ pode assumir

Implicitamente, essa fórmula descreve a média ponderada da variável $X$

Vamos relembrar que em um caso discreto, a probabilidade de uma variável assumir um determinado estado é:

$P(X=x) = \dfrac{\text{número de ocorrências do estado } x}{\text{número total de estados de } X}$

Para simplificar, vamos definir $n = \text{número de ocorrências do estado } x$ e $m = \text{número total de estados de } X$

Portanto:

$P(X=x) = \dfrac{n}{m}$

Reescrevendo a fórmula descrita no início:

$E(X) = \displaystyle{\sum_{i=1}} P(X=x_{i}) \, x_{i}$
👇
$E(X) = \displaystyle{\sum_{i=1}} \dfrac{n_{i}}{m} \, x_{i}$

Perceba que é o mesmo cálculo realizado quando desejamos encontrar a média ponderada:

$M_{p} = \dfrac{n_{1}x_{1} + n_{2}x_{2} + \dots + n_{i}x_{i}}{n_{1} + n_{2} + \dots + n_{i}} =\dfrac{n_{1}x_{1} + n_{2}x_{2} + \dots + n_{i}x_{i}}{m} = \displaystyle{\sum_{i=1}} \dfrac{n_{i}}{m} \, x_{i}$

Em suma, o "Valor Esperado" representa o resultado médio de uma variável aleatória ou de um evento considerando as probabilidades observadas de cada estado

Além disso, à medida que novas observações são feitas, **espera-se** que a média dos novos resultados esteja próxima do **valor** calculado anteriormente. Por isso, o nome "Valor Esperado"

### Valor Esperado para Variáveis Aleatórias Contínuas

O "Valor Esperado" de uma variável aleatória contínua é denotada como:

$E(X) = \displaystyle{\int_{-\infty}^{\infty}} x \cdot f_{X}(x)\,dx$

Onde:

- $E(X)$ ou $E[X]$: é o valor esperado da variável $X$

- $f_{X}(x)$: a função de densidade de probabilidade 

- $x$: é os valores que $X$ pode assumir

> [!warning] Observação
> Os limites da integral podem variar dependendo da função densidade de probabilidade ($f_{X}(x)$)
> 
> Por exemplo, na função de "Distribuição Exponencial" o limite inferior é igual a $0$




