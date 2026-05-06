---
tags:
  - Matemática
  - Probabilidade
added: 2026-04-12
updated: 2026-04-12
---
> [!info] Recursos
> - [🎥 Distribuição Marginal e Distribuição Condicional | Khan Academy](https://www.youtube.com/watch?v=Bl-AexkpAqo)
> - [🎥 Basics of Joint Probability | Intelligent Systems Lab](https://www.youtube.com/watch?v=CQS4xxz-2s4)
> - [📄 Distribuição de Probabilidade Conjunta | Prof. Magno Silvério Campos](https://professor.ufop.br/sites/default/files/magno/files/capitulo_5_-_distribuicoes_de_probabilidade_conjunta_1.pdf)

## Introdução

Dado um conjunto $S = \{X, Y, Z\}$ de variáveis aleatórias, ao considerar apenas um subconjunto, como $E = \{X\}$, $F = \{Y,Z\}$ ou $G=\{X, Z\}$, a distribuição de probabilidade das variáveis de $E$, $F$ ou $G$, **sem considerar os valores das demais variáveis**, é chamada de **Distribuição Marginal**

### Probabilidade Marginal Discreta

Dado $P(X, Y)$, nós temos marginais $P(X)$ e $P(Y)$, onde:

$p_{X}(x) = \displaystyle{\sum_{y \,\in\, Y}\,P(X = x, Y = y)}$

$p_{Y}(y) = \displaystyle{\sum_{x \,\in\, X}\,P(X = x, Y = y)}$

### Probabilidade Marginal Contínua

Dado $P(X, Y)$, nós temos marginais $P(X)$ e $P(Y)$, onde:

$P(X) = \displaystyle{\int_{Y}f_{X,Y}(x,y)\,dy}$

$P(Y) = \displaystyle{\int_{X}f_{X,Y}(x,y)\,dx}$

Aqui só definimos o limite inferior da integral, porque o limite superior deverá ser definido durante o cálculo com base na informação que deseja encontrar

### Exemplo 01

Veja a seguinte tabela que descreve a taxa de certos de alunos que estudaram e não estudaram para uma prova na escola:

| Taxa de Acerto | ESTUDOU | NÃO ESTUDOU | TOTAL |
| -------------- | ------- | ----------- | ----- |
| 0%-20%         | 1       | 10          | 11    |
| 20%-40%        | 5       | 5           | 10    |
| 40%-60%        | 10      | 1           | 11    |
| 60%-80%        | 5       | 0           | 5     |
| 80%-100%       | 2       | 0           | 2     |
| TOTAL          | 23      | 16          | 39    |

Podemos expressar essa tabela em termos de porcentagem:

| Taxa de Acerto | ESTUDOU | NÃO ESTUDOU | TOTAL |
| -------------- | ------- | ----------- | ----- |
| 0%-20%         | 2,6%    | 25,6%       | 28,2% |
| 20%-40%        | 12,8%   | 12,8%       | 25,6% |
| 40%-60%        | 25,6%   | 2,6%        | 28,2% |
| 60%-80%        | 12.8%   | 0%          | 12,8% |
| 80%-100%       | 5,1%    | 0%          | 5,1%  |
| TOTAL          | 58,9%   | 41%         | 100%  |

Nessa tabela teremos duas **marginais** que são a última coluna e última linha que são nomeadas como "TOTAL"

O nome "marginal" vêm dessa ideia dos valores estarem à margem da tabela

Se analisarmos a última coluna:

| Taxa de Acerto | TOTAL |
| -------------- | ----- |
| 0%-20%         | 28,2% |
| 20%-40%        | 25,6% |
| 40%-60%        | 28,2% |
| 60%-80%        | 12,8% |
| 80%-100%       | 5,1%  |
| TOTAL          | 100%  |

Podemos identificar a quantidade de alunos que tiveram uma determinada taxa de acerto da prova sem considerar se estudaram ou não

Já a última linha:

| Taxa de Acerto | ESTUDOU | NÃO ESTUDOU | TOTAL |
| -------------- | ------- | ----------- | ----- |
| TOTAL          | 58,9%   | 41%         | 100%  |

Nos permite identificar a quantidade de alunos que estudaram e não estudaram sem considerar a taxa de acerto

Em ambos os casos analisando apenas uma única variável e desconsideramos a outra



