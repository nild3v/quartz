---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-17
updated: 2026-04-17
---
> [!info] Recursos
> - [🎥 Covariance and Correlation Explained | DataMListic](https://www.youtube.com/watch?v=uW0TapQ6UQU)
> - [🎥 Covariance | MIT OpenCourseWare](https://www.youtube.com/watch?v=K2Tlj27nkjs)

## Introdução

A covariância mede a relação linear entres duas variáveis aleatórias, indicando a direção, mas **não** a magnitude/força dessa relação

Denotamos da seguinte forma:

$cov(X, Y) = E[(X-E[X])(Y-E[Y])]$

Onde:

- $cov(X, Y)$: covariância entre $X$ e $Y$

- $X$: variável aleatória

- $E[X]$: a média ou valor esperado de $X$

- $Y$: variável aleatória 

- $E[Y]$: a média ou valor esperado de $Y$

### Simplificação da Fórmula

Entretanto, a fórmula pode ser simplificada

A primeira etapa é desenvolvermos a expressão: $(X-E[X])(Y-E[Y])$

$(X-E[X])(Y-E[Y]) = XY-XE[Y]-E[X]Y+E[X]E[Y]$

Logo:

$E[(X-E[X])(Y-E[Y])] = E[XY-XE[Y]-E[X]Y+E[X]E[Y]]$

Como $E[\dots]$ é uma função linear, podemos aplicar a propriedade  da "Aditividade" que afirma que: $f(x + y) = f(x) + f(y)$, onde $x$ e $y$ são valores qualquer

Então temos:

$E[XY-XE[Y]-E[X]Y+E[X]E[Y]] = E[XY] -E[XE[Y]] -E[E[X]Y]+ E[E[X]E[Y]]$

Vale ressaltar que $E[X]$ é um constante, porque representa a média da variável aleatória $X$, logo, $E[E[X]] = E[X]$. Isso vale para qualquer variável aleatória

Além disso, podemos aplicar a propriedade da "Homogeneidade" que afirma que: $f(x \cdot c) = c \cdot f(x)$, onde $c$ é uma constante e $x$ um valor qualquer

Portanto, podemos escrever a expressão anterior da fórmula da seguinte forma:

$E[XY] -E[XE[Y]] -E[E[X]Y]+ E[E[X]E[Y]]$
$= E[XY] - E[X]E[Y] - E[Y]E[X] + E[X]E[Y]$
$= E[XY] - E[X]E[Y] - \cancel{ E[Y]E[X] } + \cancel{ E[X]E[Y] }$
$=E[XY] - E[X]E[Y]$ 👈

A fórmula final fica como: 

$cov(X, Y) = E[XY] - E[X]E[Y]$

### Exemplo 01

Veja a tabela abaixo que relaciona o número de horas estudadas com a nota de uma prova de cada aluno em uma escola:

| Horas Estudadas | Nota (0-10) |
| --------------- | ----------- |
| 1               | 1           |
| 1               | 2           |
| 3               | 3           |
| 3               | 4           |
| 3               | 3           |
| 6               | 5           |
| 6               | 5           |
| 10              | 9           |
| 10              | 8           |
| 10              | 7           |
| 10              | 8           |

O gráfico dessa tabela ficaria assim:

![[covariancia_01.png]]

Perceba que os dados se relacionam de forma positiva, a medida que o número de horas estudadas cresce, maior é a nota da prova

Podemos traçar uma reta para descrever a **direção** dessa relação:

![[covariancia_02.png]]

Agora vamos calcular a covariância entre essas duas variáveis:

Seja $X$ o número de horas estudadas e $Y$ a nota da prova, a covariância será dada por:

$cov(X, Y) = E[(X-E[X])(Y-E[Y])]$

Primeiro vamos calcular $E[X]$:

$E[X] = \displaystyle{\sum_{i=1}} P(X=x_{i}) \, x_{i}$

$\dfrac{2 \cdot 1}{11} +  \dfrac{3 \cdot 3}{11} + \dfrac{2 \cdot 6}{11} + \dfrac{4 \cdot 10}{11} = \dfrac{2}{11} +  \dfrac{9}{11} + \dfrac{12}{11} + \dfrac{40}{11}= \dfrac{63}{11} \approx 5,73$

Agora $E[Y]$:

$E[Y] = \displaystyle{\sum_{i=1}} P(Y=y_{i}) \, y_{i}$
$\dfrac{1 \cdot 1}{11} + \dfrac{1 \cdot 2}{11} + \dfrac{2 \cdot 3}{11} + \dfrac{1 \cdot 4}{11} + \dfrac{2 \cdot 5}{11} + \dfrac{1 \cdot 7}{11} + \dfrac{2 \cdot 8}{11} + \dfrac{1 \cdot 9}{11} = \dfrac{1}{11} + \dfrac{2}{11} + \dfrac{6}{11} + \dfrac{4}{11} + \dfrac{10}{11} + \dfrac{7}{11} + \dfrac{16}{11} + \dfrac{9}{11} = \dfrac{55}{11} = 5$

Vamos resolver $(X-E[X])$:

$(1 - 5,72) = −4,71$
$(1 - 5,72) = −4,71$
$(3 - 5,72) = −2,71$
$(3 - 5,72) = −2,71$
$(3 - 5,72) = −2,71$
$(6 - 5,72) = 0,27$
$(6 - 5,72) = 0,27$
$(10 - 5,72) = 4,27$
$(10 - 5,72)= 4,27$
$(10 - 5,72)= 4,27$
$(10 - 5,72)= 4,27$

Vamos resolver $(Y-E[Y])$:

$(1- 5) = −4$
$(2- 5) = −3$
$(3- 5) = −2$
$(4- 5) = −1$
$(3- 5) = −2$
$(5- 5) = 0$
$(5- 5) = 0$
$( 9- 5) = 4$
$( 8- 5)= 3$
$(7 - 5)= 2$
$(8 - 5)= 3$

Vamos resolver $(X-E[X])(Y-E[Y])$:

$-4,71 \cdot (-4) = 18,84$
$-4,71 \cdot (-3) = 14,13$
$-2,71 \cdot (-2) = 5,42$
$-2,71 \cdot (-1) = 2,71$
$-2,71 \cdot (-2) = 5,42$
$0,27 \cdot 0 =0$
$0,27 \cdot 0 =0$
$4,27 \cdot 4 = 17,08$
$4,27 \cdot 3 = 12,81$
$4,27 \cdot 2 = 8,54$
$4,27 \cdot 3 = 12,81$

Por fim $E[(X-E[X])(Y-E[Y])] = \displaystyle{\sum_{i=1}} P(X=x_{i}, Y=y_{i}) \, x_{i}y_{i}$:
$18,84 \cdot \dfrac{1}{11} = 1,71$
$14,13 \cdot \dfrac{1}{11} = 1,28$
$5,42 \cdot \dfrac{2}{11} = 0,99$
$2,71 \cdot \dfrac{1}{11} = 0,25$
$0 \cdot \dfrac{2}{11} = 0$
$17,08 \cdot \dfrac{1}{11} = 1,55$
$12,81 \cdot \dfrac{2}{11} = 2,33$
$8,54 \cdot \dfrac{1}{11} = 0,78$

Por fim, somamos tudo:

$cov(X,Y) = 1,71 + 1,28 + 0.99 + 0,25 + 0 + 1,55 + 2,33 + 0,78 = 8,89$ 👈

A covariância encontrada foi de $8,92$, um valor positivo, que reforça a nossa ideia inicial sobre a relação dos dados. Mas e quanto ao valor? O que significa? Determina a magnitude dessa relação? A resposta é NÃO e você verá o porquê no próximo exemplo

### Exemplo 02

Veja a mesma tabela do exemplo anterior, mas com as notas representadas em porcentagem:

| Horas Estudadas | Nota (0%-100%) |
| --------------- | -------------- |
| 1               | 10%            |
| 1               | 20%            |
| 3               | 30%            |
| 3               | 40%            |
| 3               | 30%            |
| 6               | 50%            |
| 6               | 50%            |
| 10              | 90%            |
| 10              | 80%            |
| 10              | 70%            |
| 10              | 80%            |

Veja como seria o gráfico:

![[covariancia_03.png]]

Será que se calcularmos a covariância novamente teremos o mesmo resultado?

Vamos usar a fórmula simplificada da covariância:

$cov(X, Y) = E[XY] - E[X]E[Y]$

Porque podemos reaproveitar $E[X]$ do exemplo anterior

Então vamos calcular $E[Y]$ agora:

$E[Y] = \displaystyle{\sum_{i=1}} P(Y=y_{i}) \, y_{i}$
$\dfrac{1 \cdot 0.1}{11} + \dfrac{1 \cdot 0.2}{11} + \dfrac{2 \cdot 0.3}{11} + \dfrac{1 \cdot 0.4}{11} + \dfrac{2 \cdot 0.5}{11} + \dfrac{1 \cdot 0.7}{11} + \dfrac{2 \cdot 0.8}{11} + \dfrac{1 \cdot 0.9}{11} = \dfrac{0.1}{11} + \dfrac{0.2}{11} + \dfrac{0.6}{11} + \dfrac{0.4}{11} + \dfrac{1}{11} + \dfrac{0.7}{11} + \dfrac{1.6}{11} + \dfrac{0.9}{11} = \dfrac{5.5}{11} = 0.5$

Agora $E[X]E[Y]$:

$5,73 \cdot 0.5 = 2,87$

Agora $E[XY]$: 

$E[XY] = \displaystyle{\sum_{i=1}} P(X=x_{i}, Y=y_{i}) \, x_{i}y_{i}$

$\dfrac{1}{11} \cdot 1 \cdot 0.1 = \dfrac{0.1}{11}$

$\dfrac{1}{11} \cdot 1 \cdot 0.2 = \dfrac{0.2}{11}$

$\dfrac{2}{11} \cdot 3 \cdot 0.3 = \dfrac{1.8}{11}$

$\dfrac{1}{11} \cdot 3 \cdot 0.4 = \dfrac{1.2}{11}$

$\dfrac{2}{11} \cdot 6 \cdot 0.5 = \dfrac{6}{11}$

$\dfrac{1}{11} \cdot 10 \cdot 0.9 = \dfrac{9}{11}$

$\dfrac{2}{11} \cdot 10 \cdot 0.8=\dfrac{16}{11}$

$\dfrac{1}{11} \cdot 10 \cdot 0.7 = \dfrac{7}{11}$


$\dfrac{0.1}{11} + \dfrac{0.2}{11} + \dfrac{1.8}{11} + \dfrac{1.2}{11} + \dfrac{6}{11} + \dfrac{9}{11} + \dfrac{16}{11} + \dfrac{7}{11} = \dfrac{41,3}{11} \approx 3,75$


Agora $E[XY] - E[X]E[Y]$:

$3,75 - 2,87 = 0,88$ 👈

Comparando o resultado com do exemplo anterior, percebemos que os valores são diferentes, mas ambos mantêm a positividade

Logo, não podemos usar a covariância para medir a magnitude da relação dessas duas variáveis, porque ela é influenciada pela unidade de medida, mas podemos usar para saber a direção dessa relação

