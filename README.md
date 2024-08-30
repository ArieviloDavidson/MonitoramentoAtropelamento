
# Registro de Atropelamentos API

API para gerenciamento de informações sobre ocorrências de atropelamentos de fauna em rodovias.

## API

### Índice

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Rotas](#rotas)
- [Consultas com Parâmetros](#consultas-com-parâmetros)
- [Tratamento de Erros](#tratamento-de-erros)

### Descrição

A **Registro de Atropelamentos API** é uma aplicação backend que permite o gerenciamento de dados de ocorrências de atropelamento de fauna em rodovias. A API oferece endpoints para consultar e buscar registros de diversas tabelas, como categorias, espécies, ocorrências, rodovias, entre outros (consulte a pasta back-end para acessar o SQL do Banco de Dados).

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/ArieviloDavidson/MonitoramentoAtropelamento.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd MonitoramentoAtropelamento
   cd api
   cd back-end
   ```

3. Instale as dependências dentro da pasta api e também na pasta front-end (feita em React.js) (node_modules não está no repositório):
   ```bash
   npm install
   ```

### Requisitos

- **Node.js** versão 14.x ou superior
- **MySQL** versão 5.7 ou superior

### Configuração

#### Banco de Dados

Certifique-se de ter um banco de dados MySQL disponível e configurado (arquivo SQL do Banco de Dados na pasta back-end). As credenciais de acesso ao banco de dados estão definidas diretamente no código, conforme mostrado no arquivo `index.js`:

```javascript
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registro_atropelamentos'
});
```

#### Iniciando a Aplicação

Após configurar o banco de dados e ele estar ativo, inicie o servidor no diretório api:

```bash
node index.js
```

O servidor estará disponível em `http://localhost:3003/sistema`.

### Rotas

#### Categorias

- `GET /categoria`: Retorna todas as categorias.
- `GET /categoria/:id`: Retorna uma categoria específica pelo `id`.

#### Ocorrências

- `GET /ocorrencia`: Retorna todas as ocorrências.
- `GET /ocorrencia/:id`: Retorna uma ocorrência específica pelo `id`.
- `GET /ocorrencia-query`: Realiza uma consulta de ocorrências com parâmetros dinâmicos.

#### Regiões

- `GET /regiao`: Retorna todas as regiões.
- `GET /regiao/:id`: Retorna uma região específica pelo `id`.

> **Nota**: A API oferece suporte a várias outras rotas para entidades como `especie`, `rodovia`, `situacao`, entre outras. Veja o código de rotas para mais detalhes (dos parâmetros dinâmicos também).

### Consultas com Parâmetros

Alguns endpoints, como `/ocorrencia-query`, permitem a passagem de parâmetros na URL para consultas mais refinadas. Por exemplo:

```bash
GET /ocorrencia-query?data_inicio=2023-01-01&data_fim=2023-01-31
```

Esses parâmetros são passados após o ponto de interrogação (`?`) e podem ser usados para filtrar os dados retornados pela API.

#### Parâmetros Comuns

- `chave=valor`: Chaves e valores específicos de outros filtros para as entidades.

### Tratamento de Erros

A API segue padrões HTTP para tratamento de erros:

- **404 Not Found**: Quando a rota ou o recurso solicitado não é encontrado.
- **500 Internal Server Error**: Para erros internos no servidor, incluindo falhas de conexão com o banco de dados ou erros inesperados.

Exemplo de resposta para erro `404`:

```json
{
  "error": "Erro 404: A página ou recurso solicitado não foi encontrado. Por favor, verifique o endereço inserido ou consulte a documentação da API para mais informações."
}
```

Exemplo de resposta para erro `500`:

```json
{
  "error": "Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde."
}
```