# Aula 03 - ORM PRISMA

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