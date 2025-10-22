## Prisma database setup

This app uses PostgreSQL via Prisma. The Prisma schema expects an environment variable `DATABASE_URL` with a Postgres connection string that starts with `postgresql://` or `postgres://`.

### Quick start

1. Copy the example env file and edit it with your real credentials:

```bash
cp .env.example .env
# then open .env and set DATABASE_URL
```

2. Validate and push the schema to your database:

```bash
npx prisma db push
```

3. (Optional) Seed sample data for a quick demo:

```bash
npx tsx scripts/seed.ts
```

### Connection string format

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```

Examples can be found in `.env.example`.

### Common pitfalls and checks

- Ensure `.env` exists at the project root and contains `DATABASE_URL`.
- The value must start with `postgresql://` or `postgres://`.
- Confirm that the database is reachable from your machine and the credentials are correct.
- If you see Prisma error `P1012` about the datasource URL, double-check the protocol and that the variable isn’t empty.

You can also run a one-off command to test with a temporary value without editing `.env`:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public" npx prisma db push
```

### Flow chart

```mermaid
flowchart TD
  A[.env with DATABASE_URL] --> B[Prisma schema prisma/schema.prisma]
  B --> C[Prisma Client generation]
  C --> D[db push applies schema to Postgres]
  D --> E[Seed scripts (optional)]
```

### Where Prisma is used in code

- Client is created in `lib/prisma.ts` and generated output is imported from `@/prisma/generated`.




