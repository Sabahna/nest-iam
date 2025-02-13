
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
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
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





/**
 * Enums
 */
exports.Prisma.ScopeNoSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceNoSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionNoSqlScalarFieldEnum = {
  id: 'id',
  title: 'title',
  name: 'name',
  desc: 'desc',
  resource_id: 'resource_id',
  scope_id: 'scope_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RelatedPermissionNoSqlScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  child_id: 'child_id'
};

exports.Prisma.RoleNoSqlScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  uuid: 'uuid',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PermissionRoleNoSqlScalarFieldEnum = {
  id: 'id',
  permission_id: 'permission_id',
  role_id: 'role_id'
};

exports.Prisma.UserNoSqlScalarFieldEnum = {
  id: 'id',
  username: 'username',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserRoleNoSqlScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  role_id: 'role_id',
  uuid: 'uuid'
};

exports.Prisma.UserSessionNoSqlScalarFieldEnum = {
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


exports.Prisma.ModelName = {
  ScopeNoSql: 'ScopeNoSql',
  ResourceNoSql: 'ResourceNoSql',
  PermissionNoSql: 'PermissionNoSql',
  RelatedPermissionNoSql: 'RelatedPermissionNoSql',
  RoleNoSql: 'RoleNoSql',
  PermissionRoleNoSql: 'PermissionRoleNoSql',
  UserNoSql: 'UserNoSql',
  UserRoleNoSql: 'UserRoleNoSql',
  UserSessionNoSql: 'UserSessionNoSql'
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
      "value": "/Users/tensor_lab/projects/nest/nest-iam/prisma/generated/client2",
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
    "sourceFilePath": "/Users/tensor_lab/projects/nest/nest-iam/prisma/schema2.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.2.1",
  "engineVersion": "4123509d24aa4dede1e864b46351bf2790323b69",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client2\"\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel ScopeNoSql {\n  id         String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name       String            @unique\n  desc       String?\n  scopes     PermissionNoSql[]\n  created_at DateTime          @default(now())\n  updated_at DateTime          @updatedAt\n\n  @@index([id])\n  @@map(\"scope\")\n}\n\nmodel ResourceNoSql {\n  id          String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name        String            @unique\n  desc        String?\n  permissions PermissionNoSql[]\n  created_at  DateTime          @default(now())\n  updated_at  DateTime          @updatedAt\n\n  @@index([id])\n  @@map(\"resource\")\n}\n\nmodel PermissionNoSql {\n  id               String                   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  title            String?\n  name             String                   @unique\n  desc             String?\n  resource         ResourceNoSql            @relation(fields: [resource_id], references: [id], onDelete: Cascade)\n  resource_id      String                   @db.ObjectId\n  scope            ScopeNoSql               @relation(fields: [scope_id], references: [id], onDelete: Cascade)\n  scope_id         String                   @db.ObjectId\n  permission_roles PermissionRoleNoSql[]\n  parent           RelatedPermissionNoSql[] @relation(\"children\")\n  children         RelatedPermissionNoSql[] @relation(\"parent\")\n  created_at       DateTime                 @default(now())\n  updated_at       DateTime                 @updatedAt\n\n  @@index([id, resource_id, scope_id])\n  @@map(\"permission\")\n}\n\nmodel RelatedPermissionNoSql {\n  id        String          @id @default(auto()) @map(\"_id\") @db.ObjectId\n  parent    PermissionNoSql @relation(\"parent\", fields: [parent_id], references: [id], onDelete: Cascade)\n  parent_id String          @db.ObjectId\n  child     PermissionNoSql @relation(\"children\", fields: [child_id], references: [id], onDelete: Cascade)\n  child_id  String          @db.ObjectId\n\n  @@index([parent_id, child_id])\n  @@map(\"related_permission\")\n}\n\nmodel RoleNoSql {\n  id               String                @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name             String\n  desc             String?\n  uuid             String\n  permission_roles PermissionRoleNoSql[]\n  users            UserRoleNoSql[]\n  created_at       DateTime              @default(now())\n  updated_at       DateTime              @updatedAt\n\n  @@index([id])\n  @@map(\"role\")\n}\n\nmodel PermissionRoleNoSql {\n  id            String          @id @default(auto()) @map(\"_id\") @db.ObjectId\n  permission    PermissionNoSql @relation(fields: [permission_id], references: [id], onDelete: Cascade)\n  permission_id String          @db.ObjectId\n  role          RoleNoSql       @relation(fields: [role_id], references: [id], onDelete: Cascade)\n  role_id       String          @db.ObjectId\n\n  @@index([permission_id, role_id])\n  @@map(\"permission_role\")\n}\n\nmodel UserNoSql {\n  id       String             @id @default(auto()) @map(\"_id\") @db.ObjectId\n  username String             @unique\n  roles    UserRoleNoSql[]\n  sessions UserSessionNoSql[]\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@index([id, username])\n  @@map(\"user\")\n}\n\nmodel UserRoleNoSql {\n  id      String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  user    UserNoSql @relation(fields: [user_id], references: [id], onDelete: Cascade)\n  user_id String    @db.ObjectId\n  role    RoleNoSql @relation(fields: [role_id], references: [id], onDelete: Cascade)\n  role_id String    @db.ObjectId\n  uuid    String\n\n  @@index([user_id, role_id, uuid])\n  @@map(\"role_user\")\n}\n\nmodel UserSessionNoSql {\n  id            String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  token         String?\n  refresh_token String?\n  user_id       String    @db.ObjectId\n  user          UserNoSql @relation(fields: [user_id], references: [id])\n\n  created_at DateTime @default(now())\n  updated_at DateTime @updatedAt\n\n  @@index([id, user_id])\n  @@map(\"session\")\n}\n",
  "inlineSchemaHash": "2832037378b1f892cc84c614630f466f8f81cffdcd94893b8ee06a880e922b39",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ScopeNoSql\":{\"dbName\":\"scope\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scopes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToScopeNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ResourceNoSql\":{\"dbName\":\"resource\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToResourceNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PermissionNoSql\":{\"dbName\":\"permission\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ResourceNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToResourceNoSql\",\"relationFromFields\":[\"resource_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScopeNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToScopeNoSql\",\"relationFromFields\":[\"scope_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionRoleNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToPermissionRoleNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RelatedPermissionNoSql\",\"nativeType\":null,\"relationName\":\"children\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RelatedPermissionNoSql\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RelatedPermissionNoSql\":{\"dbName\":\"related_permission\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionNoSql\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionNoSql\",\"nativeType\":null,\"relationName\":\"children\",\"relationFromFields\":[\"child_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleNoSql\":{\"dbName\":\"role\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionRoleNoSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleNoSqlToRoleNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRoleNoSql\",\"nativeType\":null,\"relationName\":\"RoleNoSqlToUserRoleNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PermissionRoleNoSql\":{\"dbName\":\"permission_role\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PermissionNoSql\",\"nativeType\":null,\"relationName\":\"PermissionNoSqlToPermissionRoleNoSql\",\"relationFromFields\":[\"permission_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleNoSql\",\"nativeType\":null,\"relationName\":\"PermissionRoleNoSqlToRoleNoSql\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserNoSql\":{\"dbName\":\"user\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRoleNoSql\",\"nativeType\":null,\"relationName\":\"UserNoSqlToUserRoleNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSessionNoSql\",\"nativeType\":null,\"relationName\":\"UserNoSqlToUserSessionNoSql\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserRoleNoSql\":{\"dbName\":\"role_user\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserNoSql\",\"nativeType\":null,\"relationName\":\"UserNoSqlToUserRoleNoSql\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleNoSql\",\"nativeType\":null,\"relationName\":\"RoleNoSqlToUserRoleNoSql\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSessionNoSql\":{\"dbName\":\"session\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserNoSql\",\"nativeType\":null,\"relationName\":\"UserNoSqlToUserSessionNoSql\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

