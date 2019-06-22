# prisma-graphql
Prisma replaces traditional ORMs and simplifies database workflows:

- Access: Type-safe database access with the auto-generated Prisma client (in JavaScript, TypeScript, Go)
- Migrate: Declarative data modelling and migrations (optional)
- Manage: Visual data management with Prisma Admin

It is used to build GraphQL, REST, gRPC APIs and more. Prisma currently supports MySQL, PostgreSQL, MongoDB.

- [GitHub](https://github.com/prisma/prisma)
- [Examples: (go, node, apollo, and more)](https://github.com/prisma/prisma)
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

```bash
prisma init --endpoint https://ds-webshield.resilient-networks.com/v1/graphql
```

## Linux Commands

### list /etc/services by port
A plain ASCII file providing a mapping between friendly textual names for internet services, and their underlying assigned port numbers and protocol types. Every networking program should look into this file to get the port number (and protocol) for its service. You can view this file with the help of cat or less command:
```bash
pm2 start ts-node -- -P tsconfig.json ./index.ts
```

