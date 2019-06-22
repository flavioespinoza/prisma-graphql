
#!/usr/bin/env bash

npx nexus-prisma-generate --client ./generated/prisma-client --output ./generated/nexus-prisma

graphql-codegen --config ./codegen-config.yml