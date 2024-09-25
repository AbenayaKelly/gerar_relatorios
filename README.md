# Projeto Geração de Relatórios em PDF com Node.js
Este é um projeto simples de back-end utilizando Node.js,banco de dados mysql, Sequelize e pdfkit que gera relatórios de vendas em formato PDF a partir de dados armazenados no banco de dados. Os relatórios são gerados dinamicamente e podem ser baixados pelo usuário.
## Instruções de Instalação

Siga os passos abaixo para configurar e executar o projeto:

### 1. Inicializar o Projeto

Execute o comando abaixo para criar um novo arquivo `package.json`, que armazenará as dependências do projeto.

``` bash
npm init -y
```

### 2. Instalar Dependências

Instale as dependências necessárias: express, mysql2, sequelize, pdfkit, body-parser, nodemon.

```bash
npm install express mysql2 sequelize pdfkit body-parser nodemon
```

### 3. Criar o Banco de Dados

Crie o banco de dados e a tabela sales.

```sql
CREATE DATABASE db;

USE bd;

CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  sale_date DATE NOT NULL
);
```

### 4. Inserir um dado

Insere um dado na tabela.
```sql
INSERT INTO sales (product_name, quantity, price, sale_date)
VALUES ('nome do produto', quantidade aqui, valor aqui, 'data aqui');


### 5. Executar o Servidor

Agora, você pode iniciar o servidor em modo de desenvolvimento usando o nodemon com o comando:

```bash
npm run dev
```
