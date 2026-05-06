---
tags:
  - Banco_de_Dados
added: 2026-04-19
updated: 2026-04-19
---
> [!info] Recursos

Para criar um banco de dados, execute a seguinte consulta:

```sql
CREATE DATABASE "NOME_DO_BANCO_DE_DADOS";
```

Se houver algum banco de dados com o nome especificado, irá causar um erro

Para acessar o banco de dados você precisa iniciar uma nova conexão. Se estiver logado no banco de dados via terminal, você pode digitar o seguinte comando:

```bash
\c "NOME_DO_BANCO_DE_DADOS"
```

Se não tiver logado:

```bash
psql -U <nome-de-usuario> -d <nome-do-banco-de-dados>
```

Para deletar o banco de dados, execute a seguinte consulta:

```sql
DROP DATABASE "NOME_DO_BANCO_DE_DADOS";
```

Se não existir o banco de dados com o nome especificado, irá causar um erro
