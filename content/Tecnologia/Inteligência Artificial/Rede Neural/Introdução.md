---
tags:
  - Tecnologia
added: 2026-03-09
updated: 2026-03-09
---
> [!info] Recursos
> - [📹 But what is a neural network? | 3Blue1Brown](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
> - [📚 What is a neural network | IBM](https://www.ibm.com/think/topics/neural-networks)
> - [📹 Why Neural Networks can learn (almost) anything | Emergent Garden](https://www.youtube.com/watch?v=0QczhVg5HaI)
> - [📹 Visualizing Neural Network Training and Predictions | Tushar Gautam](https://www.youtube.com/watch?v=xg4bIeJTVF0)

Uma Rede Neural Artificial (ANN) é um modelo de Machine Learning que é constituído em camadas de 3 tipos diferentes:

- **Camada de Entrada** (Input Layer): recebe dados
- **Camada Oculta** (Hidden Layer): processa os dados
- **Camada de Saída** (Output Layer): devolve novos dados

Cada camada há um número $n$ de "neurônios" e cada "neurônio" de uma camada é conectado a todos os "neurônios" da camada seguinte

Veja:

![[ann.png]]

Cada "neurônio" há um parâmetro de viés ($b_{i}$) e cada conexão feita recebe um parâmetro de peso ($w_{i}$)

Cada "neurônio" receberá todos os dados da camada anterior

**Exemplo:** A primeira camada é a de entrada, logo, a próxima camada (*Hidden Layer*) receberá todos esses dados 

Cada valor de entrada é definido como $x_{i}$

Internamente cada "neurônio" realizará uma soma ponderada: 

$w_{1}x_{1} + w_{2}x_{2} + \dots + w_{i}x_{i}$

Onde:

- $w_{i}$ é o peso de cada conexão 
- $x_i$ é o valor de entrada

Essa expressão pode ser descrita como um somatório:

$\displaystyle{\sum_{i=1}^{m} \, w_{i}x_{i}}$

O resultado dessa expressão será somada ao viés ($b$) do "neurônio":

$z = \displaystyle{\sum_{i=1}^{m} \, w_{i}x_{i}} + b$

O $z$ representa o resultado desse cálculo que podemos rotulá-lo como "pré-ativação", porque após essa etapa, o $z$ será jogado em uma **Função de Ativação**:

$a=\sigma(z)$

Onde:

- $a$ é a saída
- $\sigma$ é a função de ativação

Esse processo segue até a camada de saída, onde é devolvido o resultado final

Essa saída é aplicada em uma função de perda (*loss*) que permite medir o quanto o modelo errou em relação a resposta esperada

A partir disso, otimizadores são usados para ajustar as variáveis do modelo, no caso os pesos ($w_{i}$) e os vieses ($b_{i}$) através da retropropagação (*backpropagation*)

Essa etapa em específico é o que permite que as Redes Neurais aprendam, porque ela faz diversas predições e ajustam as suas variáveis para minimizar o erro

Em suma, uma Rede Neural é um modelo que empilha camadas de "neurônios" que transformam os dados e aprende a identificar padrões ao ajustar suas variáveis diversas vezes, permitindo mapear as entradas para saídas satisfatórias

> [!warning] Observação
> Perceba que durante a explicação usei "neurônios" entre aspas várias vezes, por quê? Bem, porque os neurônios são apenas uma lógica usada para explicar as Redes Neurais e durante a implementação isso não existe
> 
> Poderia dizer que o "neurônio" se traduz para a soma ponderada ao programar 

