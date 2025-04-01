# Aula 03 - ORM PRISMA

# Smoppy Pet Shop
Projeto de estudos do ORM Prisma com MySql no Node.js

## Tecnologias
- Node.Js
- VsCode
- XAMPP
- Insomnia

## Como testar
- 1 Clone este repositório
- 2 Abra com VsCode, abra um terminal CTRL + ' navegue até a pasta ./api e execute os seguintes comandos
```bash
cd api
npm install
```
- 3 Crie o arquivo .env na pasta pai contendo a variavel de ambiente de conexão
```js
DATABASE_URL="mysql://root@localhost:3306/petshop?schema=public&timezone=UTC"
PORT=5000
```
- 4 Abra o XAMPP Control Panel e de start no MySql
- 5 No terminal instale o prisma globalmente e execute o comando de migração
```bash
npm i prisma -g
npx prisma migrate dev --name init
```
- 6 Execute a API e faça os testes com o Insomnia
```bash
npm start
# ou
npx nodemon
```


## Demonstração
Projeto modelo com prisma Snoopy Pet shop 

### Step by step 
- Iniciar um projeto com prisma
- 1 Ter um documento DER ou DC
- 2 Criar um repositório
- 3 Clonar o repositório e abrir com VsCode
- 4 Criar a pasta API e o arquivo server
- 5 Abrir um terminal CTRL + ' e dar os comandos a seguir

```bash
cd api
npm init -y
npm i express cors dotenv
```

- Iniciar o uso do Prisma instalaremos ele globalmente
```bash
npm i prisma -g
```
- Conectar o prisma ao um SGBD (Sistema Gerenciador de Banco de Dados)
```bash
npx prisma init --datasource-provider mysql
```
- Editar a variável de ambiente DATABASE_URL no arquivo .env
```bash
DATABASE_URL="mysql://root@localhost:3306/petshop?schema=public&timezone=UTC"
PORT=5000
```

Navegar até o arquivo ./prisma/schema.prisma
```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cliente{
  id Int @id @default(autoincrement())
  cpf String? @db.VarChar(20)
  nome String
  telefones Telefone[]
  pedidos Pedido[]
}

model Telefone{
  id Int @id @default(autoincrement())
  clienteId Int
  numero String @db.VarChar(20)
  tipo String @db.VarChar(20)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}

model Pedido{
  id Int @id @default(autoincrement())
  clienteId Int
  data DateTime @default(now())
  produto String
  qtd Int
  preco Decimal @db.Decimal(10,2)
  subTotal Decimal? @db.Decimal(10,2)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}
```
- Como os modelos prontos no schema Realizar a migração
```bash
npx prisma migrate dev --name init
```
- Caso seja necessário remover o banco de dados para testar a criação novamente
  - Exclua a pasta migrations
prisma migrate reset
- Editar o .gitignore
```bash
node_modules
# Keep environment variables out of version control
.env
prisma/migrations
package-lock.json
```

