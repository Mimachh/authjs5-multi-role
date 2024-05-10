#!/bin/sh
# ENVIRONEMTN from docker-compose.yaml doesn't get through to subprocesses
# Need to explicit pass DATABASE_URL here, otherwise migration doesn't work

DATABASE_URL="postgresql://website_builder_saas:postgres@db:5432/website_builder_saas" npx prisma migrate deploy
# Run migrations
# DATABASE_URL="postgresql://website_builder_saas:postgres@db:5432/website_builder_saas" npx prisma migrate deploy
# DATABASE_URL="postgres://postgres:postgres@db:5432/appdb?sslmode=disable" npx prisma migrate deploy
# start app
DATABASE_URL="postgresql://website_builder_saas:postgres@db:5432/website_builder_saas" node server.js
# DATABASE_URL="postgres://postgres:postgres@db:5432/workler?sslmode=disable" node server.js

# npm run start:migrate:prod