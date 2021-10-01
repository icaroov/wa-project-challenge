# Desafio Tech

API construída com NestJS 8, React + TypeScript e PostgreSQL + PostgresAdmin.

Todas as aplicações são servidas em containers utilizando Docker. ✨

## Proposta

- Desenvolver um serviço com API GraphQL e uma base de dados de alunos
  contendo: nome, CPF e e-mail. A API deve listar os alunos, filtrando por quaisquer dos campos, retornando todos, caso nenhum seja informado.
- Desenvolver uma UI em React que permita realizar consultas a esse serviço, consumindo e exibindo os dados retornados por ele.

## Executando a aplicação

```shell
# Clonar esse repositório
git clone https://github.com/icaroov/wa-project-challenge.git

# Entrar no projeto
cd wa-project-challenge
```

Com Docker instalado, existem duas opções: a `production` e a `development`.

Em `production` o Frontend está sendo distribuído de forma estática em um servidor Http NGINX através do Dockerfile.

Para executar o modo `production` basta executar:

```
docker-compose -f docker-compose.prod.yml up
```

O modo `development` permite a sincronização do código local com o código que está no container, e é necessário instalar as depências antes de executar o `docker-compose`.

```
# Instale as dependências
yarn install

# Execute
docker-compose -f docker-compose.dev.yml up
```

### Links

- Client Development: http://localhost:3000
- Client Production: http://localhost:8081
- API: http://localhost:5000/graphql
- PostgresAdmin: http://localhost:5050

### Exemplo de Queries e Mutations

- Listar todos os alunos

```
  query {
    getAllStudents {
      id
      name
      email
      cpf
    }
  }
```

- Registrar um aluno

```
  mutation {
    createStudent(name: "name", cpf: 12345678900, email: "test@teste.com") {
      id
      name
      cpf
      email
    }
  }
```

Todo o Schema pode ser encontrado dentro de `/backend/src/schema.graphql`.

## Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NGINX](https://www.nginx.com/)

### Dicas

Comandos Docker caso necessário:
- Deletar todos os containers:
```
docker rm -f $(docker ps -a -q)
```
- Deletar todos os volumes:

```
docker volume rm $(docker volume ls -q)
```