---
tags:
  - Matemática
  - Algebra_Linear
added: 2026-04-07
updated: 2026-04-07
---
> [!info] Recursos
> 
> - [📄 Covariance and Contravariance of Vectors | Wikipedia](https://en.wikipedia.org/wiki/Covariance_and_contravariance_of_vectors)
> - [🎥 What are Covectors? | eigenchris](https://www.youtube.com/watch?v=LNoQ_Q5JQMY) 
> - [🎥 Tensors Explained Intuitively: Covariant, Contravariant, Rank | Physics Videos by Eugene Khutoryansky](https://www.youtube.com/watch?v=CliW7kSxxWU&t=146s)
> - [📄 Prefixos Gregos e Latinos | Clube do Português](https://www.clubedoportugues.com.br/prefixos-gregos-e-latinos/)

## Introdução

A **covariância** e a **contravariância** de vetores descrevem como as componentes desses objetos são influenciadas em relação à mudança dos vetores de base 

## Contravariante

O termo "contravariante" é a junção de "contra" e "variante", ou seja, é uma variação em oposição

No contexto de vetores, a **contravariância** significa que as componentes de um vetor são **inversamente proporcionais** à mudança das bases, ou seja, a medida que os vetores de base aumentam de tamanho, as componentes de um vetor diminuem e vice versa

Os vetores comuns que conhecemos são contravariantes 

### Transformação Contravariante

Um vetor $\vec{v}$ em um espaço vetorial $V$ e um conjunto de $B$ de vetores de base, o vetor $\vec{v}$ pode ser expresso como uma combinação linear dos vetores de $B$:

$\vec{v} = \displaystyle{\sum_{i=1}^n}\, v^{i}\,\vec{b}_{i}$

Onde:

- $\vec{v}$ é o vetor

- $v^{i}$ é a componente escalar do vetor $\vec{v}$

- $\vec{b}_{i}$ é o vetor de base do conjunto $B$

Vale ressaltar que não há nenhum expoente nessa expressão, o $i$ é um **índice**

Além disso a expressão $v^i \, \vec{b}_{i}$ é conhecida como as componentes vetoriais de $\vec{v}$ na base $B$

Se alterássemos a base $B$ por uma base $B\,'$, o vetor $\vec{v}$ pode ser expressado em termos de base $B\,'$:

$\vec{v} = \displaystyle{\sum_{i=1}^n}\, v^{i} \cdot \vec{b\,'}_{i}$
 
Dessa forma concluímos que o vetor $\vec{v}$ é invariante sobre a escolha das bases, mas as suas componentes não, porque $\vec{b}_{i}$ é diferente de $\vec{b'}_{i}$, logo, $v^{i}$ deverá assumir um valor diferente também para que a combinação linear corresponda ao vetor $\vec{v}$ 

Veja um exemplo visual onde os nossos vetores de base são vetores unitários:

![[contravariancia_01.gif]]

Perceba que nesse caso o vetor $\vec{v}$ pode ser representando por $3\hat{i} + 4\hat{j}$

Agora veja um outro exemplo ondes os vetores de base são o dobro de tamanho do exemplo anterior:

![[contravariancia_02.gif]]

Dessa vez o vetor $\vec{v}$ pode ser representado por $1.5\hat{i} + 2\hat{j}$

## Covariante

O termo "covariante" é a junção de "co" (que significa contiguidade) e "variante", ou seja, é uma variação em continuidade

No contexto de vetores, a covariância significa que as componentes de um vetor são **diretamente proporcionais** à mudança das bases, ou seja, a medida que os vetores de base aumentam de tamanho, as componentes de um vetor aumentam e vice versa

Os vetores covariantes são chamados de **covetores**

### Transformação Covariante

Dado um espaço vetorial $V$, uma função linear $\alpha$ (alpha) associa cada vetor de $V$ a um número real. Denotamos isso como:

$\alpha: V \to \mathbb{R}$

A função $\alpha$ é semelhante às transformações lineares, mas se diferem, porque transformações lineares recebem vetores e devolvem vetores:

$T: V \to W$

Mas o aspecto mais importante das transformações lineares a se destacar é associação da matrizes como funções, porque na função $\alpha$ acontece o mesmo, mas em vez de matrizes, são **covetores**

Os **covetores** são vetores linhas que atuam como funções lineares em vetores colunas. Além disso, assim como nas transformações lineares, ocorre a multiplicação matricial e como são vetores, acaba que o resultado dessa operação sempre retorna um escalar

Sabendo disso, podemos denotar $\alpha$ como:

$\alpha(\vec{v}) = a_{1}v^{1} + a_{2}v^{2} + \dots + a_{n}v^{n}$

ou 

$\alpha(\vec{v}) = \displaystyle{\sum_{i=1}^{n}\,\alpha_{i}v^i}$

Vale ressaltar que índices ($i$) na parte de cima (sobrescrito) indicam um **vetor** e índices na parte de baixo (subscrito) indicam um **covetor
