---
tags:
  - Tecnologia
  - Programação
added: 2026-03-29
updated: 2026-04-08
---
> [!info] Recursos
> - [📄 PEP 8 | Python](https://peps.python.org/pep-0008/)

## Introdução

O **PEP 8** é uma proposta de guia de estilo para código em Python, ou seja, ele sugere uma determinada formatação para que o código seja legível e consistente

**Mas vale ressaltar que é apenas uma sugestão, não uma obrigatoriedade. Siga o estilo que quiser, mas mantenha uma consistência, porque torna o código mais legível** 

Além disso, aqui será abordado algumas dessas recomendações, não todas. Então visite a documentação oficial para saber mais: [PEP 8](https://peps.python.org/pep-0008/)

## Layout de Código

### Indentação

Use 4 espaços para cada level de indentação:

```python
# ✅ 4 espaços:
if (condicao):
    print("Sim!")

# ❌ Evite:
def minha_funcao():
  print("Executando...")
```

Deve alinhar as linhas verticalmente em expressões dentro de parênteses (`()`), colchetes (`[]`) ou chaves (`{}`) que permitem quebra de linhas implícitas:

```python
# ✅ Alinhar com o primeiro parâmetro:
def funcao_longa(primeiro, segundo,
                 terceiro, quarto):
	pass

# ✅ Hanging Indent - Nenhum argumento na primeira linha, recuo de 4 espaços nas continuações:
def funcao_longa(
		primeiro, 
		segundo,
		terceiro, 
		quarto
	):
	pass
	
# ❌ Evite:
def long_function_name_3(primeiro, segundo,
	terceiro, quarto):
	pass

# ❌ Evite:
def long_function_name_3(primeiro, 
                         segundo,
	                     terceiro,
	                     quarto):
	pass
```

### Tabs ou Espaços?

Os "espaços" são recomendados para indentação em Python. Além disso, é desaprovado o uso misto de "tabs" com "espaços"

Utilize "tabs" apenas para manter a consistência do código que já utilizava esse método para indentação

### Tamanho Máximo das Linhas

O Python recomenda limitar o tamanho das linhas para no máximo 79 caracteres

### Quebras de Linha Antes ou Depois dos Operadores?

A quebra de linha deve ser feita antes dos operadores, porque o operador fica próximo do operando (o valor com o qual ele opera) e elimina a dispersão deles em colunas diferentes:

```python
# ✅ Correto:
resultado = (valor_a_com_nome_grande
             + valor_b
             + (valor_c_com_nome_grande - valor_d))

# ❌ Errado: 
resultado_2 = (valor_a_com_nome_grande +
               valor_b + 
               (valor_c_com_nome_grande - valor_d))
```

### Linhas em Branco

Use duas linhas em branco para separar definições de funções e classes:

```python
variavel_1 = 1


def teste():
	pass


class Teste:
	def __init__(self):
		pass


variavel_2 = 2
```

### Importações

As importações de módulos diferentes devem estar em linhas separadas:

```python
# ✅ Correto:
import os
import sys

# ✅ Correto:
from subprocess import Popen, PIPE

# ❌ Errado:
import sys, os
```

## Convenções de Nomeação

### Classes

Para classes deve usar **CapWord (PascalCase)**, ou seja, o nome não deve ter espaços e a primeira letra de cada palavra deve ser em maiúscula:

```python
class Teste:
    def __init__(self):
        pass


class MinhaClasse:
    def __init__(self):
        pass


class UmNomeDeUmaClasse:
    def __init__(self):
        pass
```

### Exceções

Para exceções segue a mesma regra das classes, mas com o sufixo "Error", se a exceção realmente for um erro:

```python
def TesteError(Exception):
    pass
```

### Funções e Variáveis

Para funções e variáveis use **snake_case**, ou seja, o nome deve está completamente em minúsculo e cada palavra deve ser separada por sublinhado (`_`):

```python
variavel = 1

minha_variavel = 2


def teste():
    pass


def minha_classe():
    pass


def um_nome_de_uma_funcao():
    pass
```

### Constantes

Para constantes utiliza-se **UPPER_SNAKE_CASE**, ou seja, o nome deve está completamente em maiúsculo e cada palavra deve ser separada por sublinhado (`_`):

```python
CONSTANTE = 1

MINHA_CONSTANTE = 2
```

### Nomes de Métodos e Variáveis de Instância

Para métodos e variáveis de instância utiliza-se **snake_case**:

```python
class Usuario:
    def __init__(self, nome):
	    self.user_name = nome

    def set_user_name(self, nome):
	    self.user_name = nome
```

Acrescenta-se sublinhado (`_`) no começo do nome apenas se o método ou a variável de instância não for pública:

```python
class MinhaClasse:
    def __init__(self, valor):
        self._valor_privado = valor

    def _metodo_privado(self):
        pass
```

Para evitar conflitos de nomes com subclasses, utiliza-se dois sublinhados no começo para ativar o [**Name Mangling**](https://docs.python.org/3/reference/expressions.html#index-5) do Python:

```python
class MinhaClasse:
    def __meu_metodo(self):
        pass
```

### Variáveis de Tipo

Para variáveis de tipo utiliza-se **CapWord (PascalCase)** com nomes curtos: `T`, `AnyStr`, `Num`:

```python
from typing import TypeVar

T = TypeVar('T')
```

Recomenda-se adicionar sufixos `_co` ou `_contra` às variáveis utilizadas para declarar comportamento covariante ou contravariante de forma correspondente:

```python
from typing import TypeVar

VT_co = TypeVar('VT_co', covariant=True)
KT_contra = TypeVar('KT_contra', contravariant=True)
```
