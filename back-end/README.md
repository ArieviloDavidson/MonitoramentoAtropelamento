
# Instruções Básicas para Uso do Arquivo .SQL

Este guia explica como utilizar o arquivo `.sql` para criar o banco de dados necessário na sua máquina local.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes programas instalados em sua máquina:

- **MySQL** ou **MariaDB** (Versão 5.7 ou superior).
- Acesso a um cliente MySQL, como o MySQL Workbench ou a linha de comando do MySQL.

## Passos para Criar o Banco de Dados

### 1. Acesse o MySQL

Se você estiver utilizando a linha de comando, abra o terminal ou prompt de comando e digite:

```bash
mysql -u root -p
```

Aqui, `-u root` indica o nome de usuário (neste caso, `root`), e `-p` pedirá a senha para o usuário root.

### 2. Importe o Arquivo .SQL

Não se preocupe em criar o bando de dados pois no arquivo sla já contém esta configuração, você pode importar o arquivo `.sql` que contém a estrutura e os dados do banco. Se estiver utilizando a linha de comando, basta executar:

```bash
source /caminho/para/seu/arquivo.sql;
```

Isso carregará a estrutura e os dados definidos no arquivo `.sql` para o banco de dados `registro_atropelamentos`.

## Conclusão

Seguindo esses passos, você terá o banco de dados `registro_atropelamentos` configurado em sua máquina, pronto para ser usado com a API.