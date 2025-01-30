# Nest IAM

For Mongodb

- Need Replication

For PostgreSQL

run

```sh
DB_URL="postgresql://nestiam:nestiam@localhost:5432/nestiam" yarn --cwd ./node_modules/nest-iam db-push
```

**Important Note For Remove Permission From Role:** The related child permission of the removal permission may also be linked to other remaining permissions in the role, ensure that you properly verify dependencies before removal.

To handle this correctly, use the provided methods in your project to locate and remove each permission individually.
