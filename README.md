# prisma-graphql
Prisma replaces traditional ORMs and simplifies database workflows:

- Access: Type-safe database access with the auto-generated Prisma client (in JavaScript, TypeScript, Go)
- Migrate: Declarative data modelling and migrations (optional)
- Manage: Visual data management with Prisma Admin

It is used to build GraphQL, REST, gRPC APIs and more. Prisma currently supports MySQL, PostgreSQL, MongoDB.

- [Prisma Setup Guide](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/)
- [Explore Features](https://www.prisma.io/docs/get-started/04-explore-features-f001/)

## Getting Started
Clone the repo
```bash
git clone https://github.com/flavioespinoza/prisma-graphql.git
```

Use `yarn` to install dependencies,
```bash
yarn install
```

## Prisma API
Deploy Prisma GraphQL Api
```bash
prisma deploy
```

Generate CRUD building blocks
```bash
bash crud.bash
```

## GraphQL Client
playground: http://localhost:4466/

db_admin: http://localhost:4466/_admin

## MongoDB
Generate user
```bash
yarn start
```


