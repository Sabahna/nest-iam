
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ScopeSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionSqlScalarFieldEnum = {
  id: 'id',
  title: 'title',
  name: 'name',
  desc: 'desc',
  resource_id: 'resource_id',
  scope_id: 'scope_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RelatedPermissionSqlScalarFieldEnum = {
  parent_id: 'parent_id',
  child_id: 'child_id'
};

exports.Prisma.RoleSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  uuid: 'uuid',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionRoleSqlScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.UserSqlScalarFieldEnum = {
  id: 'id',
  username: 'username',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserRoleSqlScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id',
  uuid: 'uuid'
};

exports.Prisma.UserSessionSqlScalarFieldEnum = {
  id: 'id',
  token: 'token',
  refresh_token: 'refresh_token',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  ScopeSql: 'ScopeSql',
  ResourceSql: 'ResourceSql',
  PermissionSql: 'PermissionSql',
  RelatedPermissionSql: 'RelatedPermissionSql',
  RoleSql: 'RoleSql',
  PermissionRoleSql: 'PermissionRoleSql',
  UserSql: 'UserSql',
  UserRoleSql: 'UserRoleSql',
  UserSessionSql: 'UserSessionSql'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/tensor_lab/projects/nest/nest-iam/prisma/generated/client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/tensor_lab/projects/nest/nest-iam/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.2.1",
  "engineVersion": "acc0b9dd43eb689cbd20c9470515d719db10d0b0",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client1\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel ScopeSql {\n  id         Int             @id @default(autoincrement())\n  name       String          @unique\n  desc       String?\n  scopes     PermissionSql[]\n  created_at DateTime        @default(now())\n  updated_at DateTime        @updatedAt\n\n  @@index([id])\n  @@map(\"scope\")\n}\n\nmodel ResourceSql {\n  id          Int             @id @default(autoincrement())\n  name        String          @unique\n  desc        String?\n  permissions PermissionSql[]\n  created_at  DateTime        @default(now())\n  updated_at  DateTime        @updatedAt\n\n  @@index([id])\n  @@map(\"resource\")\n}\n\nmodel PermissionSql {\n  id               Int                    @id @default(autoincrement())\n  title            String?\n  name             String                 @unique\n  desc             String?\n  resource         ResourceSql            @relation(fields: [resource_id], references: [id], onDelete: Cascade)\n  resource_id      Int\n  scope            ScopeSql               @relation(fields: [scope_id], references: [id], onDelete: Cascade)\n  scope_id         Int\n  permission_roles PermissionRoleSql[]\n  parent           RelatedPermissionSql[] @relation(\"children\")\n  children         RelatedPermissionSql[] @relation(\"parent\")\n  created_at       DateTime               @default(now())\n  updated_at       DateTime               @updatedAt\n\n  @@index([id, resource_id, scope_id])\n  @@map(\"permission\")\n}\n\nmodel RelatedPermissionSql {\n  parent    PermissionSql @relation(\"parent\", fields: [parent_id], references: [id], onDelete: Cascade)\n  parent_id Int\n  child     PermissionSql @relation(\"children\", fields: [child_id], references: [id], onDelete: Cascade)\n  child_id  Int\n\n  @@id(name: \"related_permission_id\", [parent_id, child_id])\n  @@index([parent_id, child_id])\n  @@map(\"related_permission\")\n}\n\nmodel RoleSql {\n  id               Int                 @id @default(autoincrement())\n  name             String\n  desc             String?\n  uuid             String\n  permission_roles PermissionRoleSql[]\n  users            UserRoleSql[]\n  created_at       DateTime            @default(now())\n  updated_at       DateTime            @updatedAt\n\n  @@index([id])\n  @@map(\"role\")\n}\n\nmodel PermissionRoleSql {\n  permission    PermissionSql @relation(fields: [permission_id], references: [id], onDelete: Cascade)\n  permission_id Int\n  role          RoleSql       @relation(fields: [role_id], references: [id], onDelete: Cascade)\n  role_id       Int\n\n  @@id(name: \"permission_role_id\", [permission_id, role_id])\n  @@index([permission_id, role_id])\n  @@map(\"permission_role\")\n}\n\nmodel UserSql {\n  id       Int              @id @default(autoincrement())\n  username String           @unique\n  roles    UserRoleSql[]\n  sessions UserSessionSql[]\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@index([id, username])\n  @@map(\"user\")\n}\n\nmodel UserRoleSql {\n  user    UserSql @relation(fields: [user_id], references: [id], onDelete: Cascade)\n  user_id Int\n  role    RoleSql @relation(fields: [role_id], references: [id], onDelete: Cascade)\n  role_id Int\n  uuid    String\n\n  @@id(name: \"role_user_id\", [user_id, role_id, uuid])\n  @@index([user_id, role_id, uuid])\n  @@map(\"role_user\")\n}\n\nmodel UserSessionSql {\n  id            Int     @id @default(autoincrement())\n  token         String?\n  refresh_token String?\n  user_id       Int\n  user          UserSql @relation(fields: [user_id], references: [id], onDelete: Cascade)\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@index([id, user_id])\n  @@map(\"session\")\n}\n",
  "inlineSchemaHash": "7bac0467763d15808011737614cafc917444b0e040b7c00a2f6aa81dedca824f",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client1",
    "generated/client1",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"ScopeSql\":{\"dbName\":\"scope\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scopes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionSql\",\"nativeType\":null,\"relationName\":\"PermissionSqlToScopeSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ResourceSql\":{\"dbName\":\"resource\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionSql\",\"nativeType\":null,\"relationName\":\"PermissionSqlToResourceSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PermissionSql\":{\"dbName\":\"permission\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ResourceSql\",\"nativeType\":null,\"relationName\":\"PermissionSqlToResourceSql\",\"relationFromFields\":[\"resource_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScopeSql\",\"nativeType\":null,\"relationName\":\"PermissionSqlToScopeSql\",\"relationFromFields\":[\"scope_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionRoleSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleSqlToPermissionSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RelatedPermissionSql\",\"nativeType\":null,\"relationName\":\"children\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RelatedPermissionSql\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RelatedPermissionSql\":{\"dbName\":\"related_permission\",\"schema\":null,\"fields\":[{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionSql\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionSql\",\"nativeType\":null,\"relationName\":\"children\",\"relationFromFields\":[\"child_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"related_permission_id\",\"fields\":[\"parent_id\",\"child_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleSql\":{\"dbName\":\"role\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionRoleSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleSqlToRoleSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRoleSql\",\"nativeType\":null,\"relationName\":\"RoleSqlToUserRoleSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PermissionRoleSql\":{\"dbName\":\"permission_role\",\"schema\":null,\"fields\":[{\"name\":\"permission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleSqlToPermissionSql\",\"relationFromFields\":[\"permission_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleSqlToRoleSql\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"permission_role_id\",\"fields\":[\"permission_id\",\"role_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSql\":{\"dbName\":\"user\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRoleSql\",\"nativeType\":null,\"relationName\":\"UserRoleSqlToUserSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSessionSql\",\"nativeType\":null,\"relationName\":\"UserSessionSqlToUserSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserRoleSql\":{\"dbName\":\"role_user\",\"schema\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSql\",\"nativeType\":null,\"relationName\":\"UserRoleSqlToUserSql\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleSql\",\"nativeType\":null,\"relationName\":\"RoleSqlToUserRoleSql\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"role_user_id\",\"fields\":[\"user_id\",\"role_id\",\"uuid\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSessionSql\":{\"dbName\":\"session\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSql\",\"nativeType\":null,\"relationName\":\"UserSessionSqlToUserSql\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client1/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client1/schema.prisma")
