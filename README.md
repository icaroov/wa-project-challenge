# Desafio Tech - WA Project

API construída com NestJS 8, React + TypeScript e PostgreSQL + PostgresAdmin.

Todas as aplicações são servidas em containers utilizando Docker. ✨

## Proposta

- Desenvolver um serviço com API GraphQL e uma base de dados de alunos
  contendo: nome, CPF e e-mail. A API deve listar os alunos, filtrando por quaisquer dos campos, retornando todos, caso nenhum seja informado.
- Desenvolver uma UI em React que permita realizar consultas a esse serviço, consumindo e exibindo os dados retornados por ele.

## Como rodar o Projeto

```shell
# Clonar esse repositório
git clone https://github.com/icaroov/wa-project-challenge.git

# Entrar no projeto
cd wa-project-challenge

# Com Docker instalado, basta executar:
docker-compose up
```

- API: http://localhost:5000/graphql;
- Client: http://localhost:3000;
- PostgreSQL: http://localhost:35000;
- PostgresAdmin: http://localhost:5050.

### Rodando Client com NGINX

O Client Side também pode ser executado de forma estática com um servidor Http Nginx com Docker Compose. Para isso basta entrar em `/frontend` e executar:

```shell
yarn docker:build

# em seguida

yarn docker:prod
```

**IMPORTANTE:** Lembre de manter a API GraphQL rodando.

O servidor com arquivos estáticos irá rodar em http://localhost:8081.

### Exemplo Queries e Mutations

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
