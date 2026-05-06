---
tags:
  - Banco_de_Dados
added: 2026-04-19
updated: 2026-04-19
---
> [!info] Recursos


## Introdução

Para criar uma tabela, execute a seguinte consulta:

```sql
CREATE TABLE NOME_DA_TABELA ();
```

Se houver algum banco de dados com o nome especificado, irá causar um erro

A tabela que será criada não haverá nenhuma coluna, porque não escrevemos nada dentro dos parênteses `()`

Para definir uma coluna ao criar uma tabela, devemos executar algo como:

```sql
CREATE TABLE NOME_DA_TABELA (
	NOME_DA_COLUNA_01 TIPO_DA_COLUNA,
	NOME_DA_COLUNA_02 TIPO_DA_COLUNA
);
```

O código acima não irá funciona, porque não definir um tipo válido. O `TIPO_DA_COLUNA` deve ser substituído por um tipo válido do PostgreSQL, como `INT` ou `VARCHAR`

```sql
CREATE TABLE NOME_DA_TABELA (
	NOME_DA_COLUNA_01 INT,
	NOME_DA_COLUNA_02 VARCHAR
);
```

Vale ressaltar que cada definição de coluna na tabela deverá se separada por vírgula (`,`) 

