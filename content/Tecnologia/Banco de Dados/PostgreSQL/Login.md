---
tags:
  - Banco_de_Dados
added: 2026-04-19
updated: 2026-04-19
---
> [!info] Recursos

Para fazer o acesso ao PostgreSQL, basta digitar o seguinte comando no terminal:

```bash
psql -U <username>
```

Você irá acessar o banco de dados padrão, mas caso queira acessar um banco de dados específico, adicione a flag `-d` e especifique o nome do banco de dados:

```bash
psql -U <nome-de-usuario> -d <nome-do-banco-de-dados>
```

Após digitar um dos dois comandos, talvez seja necessário inserir a senha de acesso:

```bash
Password: ***
```

Se não houver senha, a senha não será perguntado e será logado automaticamente

Nessa sessão você poderá executar instruções SQL e alguns comandos específicos

