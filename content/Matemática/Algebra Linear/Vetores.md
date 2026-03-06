---
tags:
  - Matemática
added: 2026-03-05
updated: 2026-03-05
---
> [!info] Recursos
> - [📹 Vectors | 3Blue1Brown](https://www.youtube.com/watch?v=fNk_zzaMoSs)
> - [📚 Vectors in the Plane | OpenStax](https://openstax.org/books/calculus-volume-3/pages/2-introduction)
> - [📚 Deep Learning Book | MIT Press](https://www.deeplearningbook.org/contents/linear_algebra.html)
> - [📚 Scalar and Vectors | Math is Fun](https://www.mathsisfun.com/algebra/scalar-vector-matrix.html)
> - [🗣️ Why do vectors in maths start from origin? A possible explanation | Reddit](https://www.reddit.com/r/3Blue1Brown/comments/18fsmd0/why_do_vectors_in_maths_start_from_origin_a/)

Um vetor possui ideias distintas, mas relacionadas dependendo da área de estudo, então veremos cada uma delas

## Vetores na Matemática

É um objeto matemático que possui duas propriedades, **direção** e **magnitude**, é representado como uma seta que aponta no espaço. Além disso, não está vinculada a nenhuma grandeza

Permite operar com escalares e outros vetores, como a soma entre vetores e o produto por escalar

![[vector_math.png]]

Na Algebra Linear, por convenção, os vetores são desenhados a partir da origem de um plano. Entretanto, não é uma regra estrita, serve apenas como um ponto de referência 

## Vetores em Física

Na física, o vetor é basicamente o vetor matemático, mas associado à grandezas, como força, velocidade, deslocamento, etc.

## Vetores na Computação

Os vetores são uma estrutura de dados definida como uma lista numérica ordenada, ou seja, um *array* de números, como:

![[vector_cs.png]]

Em Linguagens de Programação seria assim:

```python
vetor = [1, 2, 3, 4, 5]
```

## Sistemas de Coordenadas

### 2D

Em um plano de coordenadas 2D, as coordenadas de um vetor é dado por um par numérico que informa como sair da origem até o destino

Veja:

![[vector_coords.gif]]

Nesse caso as coordenadas do vetor é $\begin{bmatrix} 2 \\ 5 \end{bmatrix}$, onde o primeiro valor é o $x$ e o segundo valor é o $y$

O par de coordenadas também pode ser reescrito como uma tupla: $(2, 5)$

### 3D

Em um plano de coordenadas 3D, as coordenadas de um vetor é dado por um trio numérico, ou seja, o valor referente a cada eixo ($x$, $y$ e $z$)

![[vector_coords_3d.gif]]

O trio de coordenadas também pode ser reescrito como uma tupla: $(2, 5, 3)$

## Componentes

Um vetor pode ser dividido em sub vetores que estejam alinhados em seus respectivos eixos que quando somados resultam o vetor original

Observe o vetor abaixo:

![[vector_comp_01.png]]

Perceba que o vetor aponta em duas direções que são para direita ($+x$) e para cima ($+y$)

Dessa forma, poderíamos dividir esse vetor em 2 sub vetores, no qual haverá um alinhado com o eixo $x$ e outro com o eixo $y$, ambos possuindo a mesma magnitude do vetor original de acordo com seu respectivo eixo

Veja:

![[vector_comp_02.png]]

O vetor em vermelho e o vetor em azul são as componentes do vetor em amarelo, sendo denotado da seguinte forma:

$\vec{v} = \vec{v_{x}} + \vec{v_{y}}$

O mesmo se aplica quando trabalhamos com vetores tridimensionais:

![[vector_comp_03.png]]

$\vec{v} = \vec{v_{x}} + \vec{v_{y}} + \vec{v_{z}}$

### Cálculo

Nos exemplos anteriores as componentes poderiam ser definidas facilmente por causa das coordenadas, mas como poderíamos calculá-las sem o uso delas?

Primeiro vamos remover os números do nosso plano:

![[vector_comp_04.png]]

Não sei se perceberam, mas a forma que os vetores estão posicionados é possível traçar 2 triângulos retângulos, mas só precisaremos de 1:

![[vector_comp_05.gif]]

Dessa forma, deduzimos que para encontrar o valor escalar do vetor em vermelho ($\vec{v}_y$) e do vetor em azul ($\vec{v}_x$) precisamos aplicar propriedades trigonométricas

$\cos(\theta) = \dfrac{CA}{H}$

$\sin(\theta) = \dfrac{CO}{H}$

$\tan(\theta) = \dfrac{CO}{CA}$

Antes disso, vamos desenhar nosso ângulo theta ($\theta$):

![[vector_comp_06.gif]]

E para não ficar confuso, vou adicionar alguns rótulos:

![[vector_comp_07.png]]

Vamos calcular primeiro o valor de $CA$ que é o valor escalar do vetor $\vec{v}_{x}$

Se sabemos que: $\cos(\theta) = \frac{CA}{H}$, podemos multiplicar $H$ em ambos os lados da expressão e teremos:

$\cos(\theta) = \dfrac{CA}{H}$

$\cos(\theta) \cdot H = \dfrac{CA}{H} \cdot H$

$\cos(\theta) \cdot H = \dfrac{CA}{\cancel{H}} \cdot \cancel{H}$

$\cos(\theta) \cdot H = CA$ 👈

Agora vamos calcular $CO$:

$\sin(\theta) = \dfrac{CO}{H}$

$\sin(\theta) \cdot H = \dfrac{CO}{H} \cdot H$

$\sin(\theta) \cdot H = \dfrac{CO}{\cancel{H}} \cdot \cancel{H}$

$\sin(\theta) \cdot H = CO$ 👈

Pronto! Dessa forma conseguimos calcular os valores escales dos vetores 
$\vec{v}_{x}$ e $\vec{v}_{y}$. Então a partir desses valores podemos definir as coordenadas deles também, porque esses vetores são alinhados a um único eixo, logo, as demais coordenadas são $0$

Logo:

$\vec{v}_{x} = \begin{bmatrix} \cos(\theta) \cdot H \\ 0 \end{bmatrix}$

$\vec{v}_{y} = \begin{bmatrix} 0 \\ \sin(\theta) \cdot H \end{bmatrix}$

$\vec{v} = \vec{v}_{x} + \vec{v}_{y} = \begin{bmatrix} \cos(\theta) \cdot H \\ \sin(\theta) \cdot H \end{bmatrix}$

## Operações

### Soma de Vetores

A soma de vetores consiste em somar as componentes dos vetores entre si de acordo com seu respectivo eixo

$\vec{v} = \vec{v}_{x} + \vec{v}_{y}$

$\vec{w} = \vec{w}_{x} + \vec{w}_{y}$

$\vec{v} + \vec{w} = \begin{bmatrix} {v}_{x} + {w}_{x} \\ {v}_{y} + {w}_{y} \end{bmatrix}$

**Vale ressaltar que $\vec{v}_{x} \neq v_{x}$:**

- $\vec{v}_{x}$ é um **vetor**
- $v_{x}$ é um **escalar**

Isso vale para os outros também, como $\vec{w}$, $\vec{w}_{x}$, $w_{x}$, $\dots$

Graficamente isso pode ser representando da seguinte forma:

![[vector_sum_01.gif]]

Ao somar vetores, graficamente, o inicio (calda) do vetor deve está alinhado com o final do vetor (cabeça)

Podemos fazer a mesma coisa só que com o vetor em amarelo:

![[vector_sum_02.gif]]

### Subtração de Vetores

A subtração de vetores consiste em subtrair as componentes dos vetores entre si de acordo com seu respectivo eixo

$\vec{v} = \vec{v}_{x} + \vec{v}_{y}$

$\vec{w} = \vec{w}_{x} + \vec{w}_{y}$

$\vec{v} - \vec{w} = \begin{bmatrix} {v}_{x} - {w}_{x} \\ {v}_{y} - {w}_{y} \end{bmatrix}$

Graficamente isso pode ser representando da seguinte forma:

![[vector_sub_01.gif]]

No exemplo acima, o vetor em laranja teve suas componentes invertidas, ou seja, multiplicadas por $-1$:

$-1 \cdot \vec{w}_{x} = -\vec{w}_{x}$
$-1 \cdot \vec{w}_{y} = -\vec{w}_{y}$

Podemos fazer a mesma coisa só que com o vetor em amarelo:

![[vector_sub_02.gif]]

Perceba que o resultado não foi o mesmo, ou seja, a subtração **não é comutativa**:

$\vec{v} - \vec{w} \neq \vec{w} - \vec{v}$

### Produto por Escalar

A multiplicação de um vetor por um escalar consiste em multiplicar cada componente do vetor pelo escalar

$x \cdot \vec{v} = x \cdot \vec{v}_{x} + x \cdot \vec{v}_{y} = \begin{bmatrix} x \cdot {v}_{x} \\ x \cdot {v}_{y} \end{bmatrix}$

**Relembrando que $\vec{v}_{x} \neq v_{x}$:**

- $\vec{v}_{x}$ é um **vetor**
- $v_{x}$ é um **escalar**

Veja um exemplo gráfico:

![[vector_prod.gif]]