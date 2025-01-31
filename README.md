# Nest IAM

Install `cookieParser`

```sh
#for npm
$ npm i cookie-parser
$ npm i -D @types/cookie-parser

# for yarn
$ yarn add cookie-parser
$ yarn add --dev @types/cookie-parser
```

Then set the `cookieParser` middleware to your main `NestExpressApplication` or `NestFastifyApplication`.

```ts
import cookieParser from "cookie-parser";

const app = await NestFactory.create<NestExpressApplication>(AppModule);
app.use(cookieParser());
```

After requesting the token

```ts
  @Post("login")
  findAll(@Res({ passthrough: true }) res) {
    // request the token

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("jwtToken", "your-jwt-token", {
      httpOnly: true, // Prevents client-side access (XSS protection)
      secure: false, // Set `true` in production with HTTPS
      maxAge: oneDay, // 1 day expiration
    });

    res.cookie("refreshToken", "your-refresh-token", {
      httpOnly: true,
      secure: false,
      maxAge: oneDay * 7, // 7 days expiration
    });

    // Other remaining logic
    // return data;
  }
```

### For Mongodb

- Need Replication

### For PostgreSQL

run

```sh
DB_URL="postgresql://nestiam:nestiam@localhost:5432/nestiam" yarn --cwd ./node_modules/nest-iam db-push
```

**Important Note For Remove Permission From Role:** The related child permission of the removal permission may also be linked to other remaining permissions in the role, ensure that you properly verify dependencies before removal.

To handle this correctly, use the provided methods in your project to locate and remove each permission individually.
