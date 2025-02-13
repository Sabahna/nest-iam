
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ScopeSql
 * 
 */
export type ScopeSql = $Result.DefaultSelection<Prisma.$ScopeSqlPayload>
/**
 * Model ResourceSql
 * 
 */
export type ResourceSql = $Result.DefaultSelection<Prisma.$ResourceSqlPayload>
/**
 * Model PermissionSql
 * 
 */
export type PermissionSql = $Result.DefaultSelection<Prisma.$PermissionSqlPayload>
/**
 * Model RelatedPermissionSql
 * 
 */
export type RelatedPermissionSql = $Result.DefaultSelection<Prisma.$RelatedPermissionSqlPayload>
/**
 * Model RoleSql
 * 
 */
export type RoleSql = $Result.DefaultSelection<Prisma.$RoleSqlPayload>
/**
 * Model PermissionRoleSql
 * 
 */
export type PermissionRoleSql = $Result.DefaultSelection<Prisma.$PermissionRoleSqlPayload>
/**
 * Model UserSql
 * 
 */
export type UserSql = $Result.DefaultSelection<Prisma.$UserSqlPayload>
/**
 * Model UserRoleSql
 * 
 */
export type UserRoleSql = $Result.DefaultSelection<Prisma.$UserRoleSqlPayload>
/**
 * Model UserSessionSql
 * 
 */
export type UserSessionSql = $Result.DefaultSelection<Prisma.$UserSessionSqlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScopeSqls
 * const scopeSqls = await prisma.scopeSql.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ScopeSqls
   * const scopeSqls = await prisma.scopeSql.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.scopeSql`: Exposes CRUD operations for the **ScopeSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScopeSqls
    * const scopeSqls = await prisma.scopeSql.findMany()
    * ```
    */
  get scopeSql(): Prisma.ScopeSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceSql`: Exposes CRUD operations for the **ResourceSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceSqls
    * const resourceSqls = await prisma.resourceSql.findMany()
    * ```
    */
  get resourceSql(): Prisma.ResourceSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionSql`: Exposes CRUD operations for the **PermissionSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionSqls
    * const permissionSqls = await prisma.permissionSql.findMany()
    * ```
    */
  get permissionSql(): Prisma.PermissionSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatedPermissionSql`: Exposes CRUD operations for the **RelatedPermissionSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatedPermissionSqls
    * const relatedPermissionSqls = await prisma.relatedPermissionSql.findMany()
    * ```
    */
  get relatedPermissionSql(): Prisma.RelatedPermissionSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roleSql`: Exposes CRUD operations for the **RoleSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleSqls
    * const roleSqls = await prisma.roleSql.findMany()
    * ```
    */
  get roleSql(): Prisma.RoleSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionRoleSql`: Exposes CRUD operations for the **PermissionRoleSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionRoleSqls
    * const permissionRoleSqls = await prisma.permissionRoleSql.findMany()
    * ```
    */
  get permissionRoleSql(): Prisma.PermissionRoleSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSql`: Exposes CRUD operations for the **UserSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSqls
    * const userSqls = await prisma.userSql.findMany()
    * ```
    */
  get userSql(): Prisma.UserSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRoleSql`: Exposes CRUD operations for the **UserRoleSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoleSqls
    * const userRoleSqls = await prisma.userRoleSql.findMany()
    * ```
    */
  get userRoleSql(): Prisma.UserRoleSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSessionSql`: Exposes CRUD operations for the **UserSessionSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessionSqls
    * const userSessionSqls = await prisma.userSessionSql.findMany()
    * ```
    */
  get userSessionSql(): Prisma.UserSessionSqlDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "scopeSql" | "resourceSql" | "permissionSql" | "relatedPermissionSql" | "roleSql" | "permissionRoleSql" | "userSql" | "userRoleSql" | "userSessionSql"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ScopeSql: {
        payload: Prisma.$ScopeSqlPayload<ExtArgs>
        fields: Prisma.ScopeSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScopeSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScopeSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          findFirst: {
            args: Prisma.ScopeSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScopeSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          findMany: {
            args: Prisma.ScopeSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>[]
          }
          create: {
            args: Prisma.ScopeSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          createMany: {
            args: Prisma.ScopeSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScopeSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>[]
          }
          delete: {
            args: Prisma.ScopeSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          update: {
            args: Prisma.ScopeSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          deleteMany: {
            args: Prisma.ScopeSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScopeSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScopeSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>[]
          }
          upsert: {
            args: Prisma.ScopeSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeSqlPayload>
          }
          aggregate: {
            args: Prisma.ScopeSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScopeSql>
          }
          groupBy: {
            args: Prisma.ScopeSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScopeSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScopeSqlCountArgs<ExtArgs>
            result: $Utils.Optional<ScopeSqlCountAggregateOutputType> | number
          }
        }
      }
      ResourceSql: {
        payload: Prisma.$ResourceSqlPayload<ExtArgs>
        fields: Prisma.ResourceSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          findFirst: {
            args: Prisma.ResourceSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          findMany: {
            args: Prisma.ResourceSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>[]
          }
          create: {
            args: Prisma.ResourceSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          createMany: {
            args: Prisma.ResourceSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>[]
          }
          delete: {
            args: Prisma.ResourceSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          update: {
            args: Prisma.ResourceSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          deleteMany: {
            args: Prisma.ResourceSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>[]
          }
          upsert: {
            args: Prisma.ResourceSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceSqlPayload>
          }
          aggregate: {
            args: Prisma.ResourceSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceSql>
          }
          groupBy: {
            args: Prisma.ResourceSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceSqlCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceSqlCountAggregateOutputType> | number
          }
        }
      }
      PermissionSql: {
        payload: Prisma.$PermissionSqlPayload<ExtArgs>
        fields: Prisma.PermissionSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          findFirst: {
            args: Prisma.PermissionSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          findMany: {
            args: Prisma.PermissionSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>[]
          }
          create: {
            args: Prisma.PermissionSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          createMany: {
            args: Prisma.PermissionSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>[]
          }
          delete: {
            args: Prisma.PermissionSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          update: {
            args: Prisma.PermissionSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          deleteMany: {
            args: Prisma.PermissionSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>[]
          }
          upsert: {
            args: Prisma.PermissionSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionSqlPayload>
          }
          aggregate: {
            args: Prisma.PermissionSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionSql>
          }
          groupBy: {
            args: Prisma.PermissionSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionSqlCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionSqlCountAggregateOutputType> | number
          }
        }
      }
      RelatedPermissionSql: {
        payload: Prisma.$RelatedPermissionSqlPayload<ExtArgs>
        fields: Prisma.RelatedPermissionSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatedPermissionSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatedPermissionSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          findFirst: {
            args: Prisma.RelatedPermissionSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatedPermissionSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          findMany: {
            args: Prisma.RelatedPermissionSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>[]
          }
          create: {
            args: Prisma.RelatedPermissionSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          createMany: {
            args: Prisma.RelatedPermissionSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatedPermissionSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>[]
          }
          delete: {
            args: Prisma.RelatedPermissionSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          update: {
            args: Prisma.RelatedPermissionSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          deleteMany: {
            args: Prisma.RelatedPermissionSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatedPermissionSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatedPermissionSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>[]
          }
          upsert: {
            args: Prisma.RelatedPermissionSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionSqlPayload>
          }
          aggregate: {
            args: Prisma.RelatedPermissionSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatedPermissionSql>
          }
          groupBy: {
            args: Prisma.RelatedPermissionSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatedPermissionSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatedPermissionSqlCountArgs<ExtArgs>
            result: $Utils.Optional<RelatedPermissionSqlCountAggregateOutputType> | number
          }
        }
      }
      RoleSql: {
        payload: Prisma.$RoleSqlPayload<ExtArgs>
        fields: Prisma.RoleSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          findFirst: {
            args: Prisma.RoleSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          findMany: {
            args: Prisma.RoleSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>[]
          }
          create: {
            args: Prisma.RoleSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          createMany: {
            args: Prisma.RoleSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>[]
          }
          delete: {
            args: Prisma.RoleSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          update: {
            args: Prisma.RoleSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          deleteMany: {
            args: Prisma.RoleSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>[]
          }
          upsert: {
            args: Prisma.RoleSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleSqlPayload>
          }
          aggregate: {
            args: Prisma.RoleSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleSql>
          }
          groupBy: {
            args: Prisma.RoleSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleSqlCountArgs<ExtArgs>
            result: $Utils.Optional<RoleSqlCountAggregateOutputType> | number
          }
        }
      }
      PermissionRoleSql: {
        payload: Prisma.$PermissionRoleSqlPayload<ExtArgs>
        fields: Prisma.PermissionRoleSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionRoleSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionRoleSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          findFirst: {
            args: Prisma.PermissionRoleSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionRoleSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          findMany: {
            args: Prisma.PermissionRoleSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>[]
          }
          create: {
            args: Prisma.PermissionRoleSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          createMany: {
            args: Prisma.PermissionRoleSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionRoleSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>[]
          }
          delete: {
            args: Prisma.PermissionRoleSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          update: {
            args: Prisma.PermissionRoleSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          deleteMany: {
            args: Prisma.PermissionRoleSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionRoleSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionRoleSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>[]
          }
          upsert: {
            args: Prisma.PermissionRoleSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleSqlPayload>
          }
          aggregate: {
            args: Prisma.PermissionRoleSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionRoleSql>
          }
          groupBy: {
            args: Prisma.PermissionRoleSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionRoleSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionRoleSqlCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionRoleSqlCountAggregateOutputType> | number
          }
        }
      }
      UserSql: {
        payload: Prisma.$UserSqlPayload<ExtArgs>
        fields: Prisma.UserSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          findFirst: {
            args: Prisma.UserSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          findMany: {
            args: Prisma.UserSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>[]
          }
          create: {
            args: Prisma.UserSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          createMany: {
            args: Prisma.UserSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>[]
          }
          delete: {
            args: Prisma.UserSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          update: {
            args: Prisma.UserSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>[]
          }
          upsert: {
            args: Prisma.UserSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSqlPayload>
          }
          aggregate: {
            args: Prisma.UserSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSql>
          }
          groupBy: {
            args: Prisma.UserSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserSqlCountAggregateOutputType> | number
          }
        }
      }
      UserRoleSql: {
        payload: Prisma.$UserRoleSqlPayload<ExtArgs>
        fields: Prisma.UserRoleSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          findFirst: {
            args: Prisma.UserRoleSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          findMany: {
            args: Prisma.UserRoleSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>[]
          }
          create: {
            args: Prisma.UserRoleSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          createMany: {
            args: Prisma.UserRoleSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>[]
          }
          delete: {
            args: Prisma.UserRoleSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          update: {
            args: Prisma.UserRoleSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserRoleSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>[]
          }
          upsert: {
            args: Prisma.UserRoleSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleSqlPayload>
          }
          aggregate: {
            args: Prisma.UserRoleSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRoleSql>
          }
          groupBy: {
            args: Prisma.UserRoleSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleSqlCountAggregateOutputType> | number
          }
        }
      }
      UserSessionSql: {
        payload: Prisma.$UserSessionSqlPayload<ExtArgs>
        fields: Prisma.UserSessionSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          findFirst: {
            args: Prisma.UserSessionSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          findMany: {
            args: Prisma.UserSessionSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>[]
          }
          create: {
            args: Prisma.UserSessionSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          createMany: {
            args: Prisma.UserSessionSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionSqlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>[]
          }
          delete: {
            args: Prisma.UserSessionSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          update: {
            args: Prisma.UserSessionSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionSqlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionSqlPayload>
          }
          aggregate: {
            args: Prisma.UserSessionSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSessionSql>
          }
          groupBy: {
            args: Prisma.UserSessionSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionSqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionSqlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    scopeSql?: ScopeSqlOmit
    resourceSql?: ResourceSqlOmit
    permissionSql?: PermissionSqlOmit
    relatedPermissionSql?: RelatedPermissionSqlOmit
    roleSql?: RoleSqlOmit
    permissionRoleSql?: PermissionRoleSqlOmit
    userSql?: UserSqlOmit
    userRoleSql?: UserRoleSqlOmit
    userSessionSql?: UserSessionSqlOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScopeSqlCountOutputType
   */

  export type ScopeSqlCountOutputType = {
    scopes: number
  }

  export type ScopeSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scopes?: boolean | ScopeSqlCountOutputTypeCountScopesArgs
  }

  // Custom InputTypes
  /**
   * ScopeSqlCountOutputType without action
   */
  export type ScopeSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSqlCountOutputType
     */
    select?: ScopeSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScopeSqlCountOutputType without action
   */
  export type ScopeSqlCountOutputTypeCountScopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionSqlWhereInput
  }


  /**
   * Count Type ResourceSqlCountOutputType
   */

  export type ResourceSqlCountOutputType = {
    permissions: number
  }

  export type ResourceSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ResourceSqlCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * ResourceSqlCountOutputType without action
   */
  export type ResourceSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSqlCountOutputType
     */
    select?: ResourceSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceSqlCountOutputType without action
   */
  export type ResourceSqlCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionSqlWhereInput
  }


  /**
   * Count Type PermissionSqlCountOutputType
   */

  export type PermissionSqlCountOutputType = {
    permission_roles: number
    parent: number
    children: number
  }

  export type PermissionSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | PermissionSqlCountOutputTypeCountPermission_rolesArgs
    parent?: boolean | PermissionSqlCountOutputTypeCountParentArgs
    children?: boolean | PermissionSqlCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * PermissionSqlCountOutputType without action
   */
  export type PermissionSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSqlCountOutputType
     */
    select?: PermissionSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionSqlCountOutputType without action
   */
  export type PermissionSqlCountOutputTypeCountPermission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleSqlWhereInput
  }

  /**
   * PermissionSqlCountOutputType without action
   */
  export type PermissionSqlCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionSqlWhereInput
  }

  /**
   * PermissionSqlCountOutputType without action
   */
  export type PermissionSqlCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionSqlWhereInput
  }


  /**
   * Count Type RoleSqlCountOutputType
   */

  export type RoleSqlCountOutputType = {
    permission_roles: number
    users: number
  }

  export type RoleSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | RoleSqlCountOutputTypeCountPermission_rolesArgs
    users?: boolean | RoleSqlCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleSqlCountOutputType without action
   */
  export type RoleSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSqlCountOutputType
     */
    select?: RoleSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleSqlCountOutputType without action
   */
  export type RoleSqlCountOutputTypeCountPermission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleSqlWhereInput
  }

  /**
   * RoleSqlCountOutputType without action
   */
  export type RoleSqlCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleSqlWhereInput
  }


  /**
   * Count Type UserSqlCountOutputType
   */

  export type UserSqlCountOutputType = {
    roles: number
    sessions: number
  }

  export type UserSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserSqlCountOutputTypeCountRolesArgs
    sessions?: boolean | UserSqlCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserSqlCountOutputType without action
   */
  export type UserSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSqlCountOutputType
     */
    select?: UserSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSqlCountOutputType without action
   */
  export type UserSqlCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleSqlWhereInput
  }

  /**
   * UserSqlCountOutputType without action
   */
  export type UserSqlCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionSqlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ScopeSql
   */

  export type AggregateScopeSql = {
    _count: ScopeSqlCountAggregateOutputType | null
    _avg: ScopeSqlAvgAggregateOutputType | null
    _sum: ScopeSqlSumAggregateOutputType | null
    _min: ScopeSqlMinAggregateOutputType | null
    _max: ScopeSqlMaxAggregateOutputType | null
  }

  export type ScopeSqlAvgAggregateOutputType = {
    id: number | null
  }

  export type ScopeSqlSumAggregateOutputType = {
    id: number | null
  }

  export type ScopeSqlMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScopeSqlMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScopeSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ScopeSqlAvgAggregateInputType = {
    id?: true
  }

  export type ScopeSqlSumAggregateInputType = {
    id?: true
  }

  export type ScopeSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ScopeSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ScopeSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ScopeSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScopeSql to aggregate.
     */
    where?: ScopeSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeSqls to fetch.
     */
    orderBy?: ScopeSqlOrderByWithRelationInput | ScopeSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScopeSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScopeSqls
    **/
    _count?: true | ScopeSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScopeSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScopeSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScopeSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScopeSqlMaxAggregateInputType
  }

  export type GetScopeSqlAggregateType<T extends ScopeSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateScopeSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScopeSql[P]>
      : GetScalarType<T[P], AggregateScopeSql[P]>
  }




  export type ScopeSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScopeSqlWhereInput
    orderBy?: ScopeSqlOrderByWithAggregationInput | ScopeSqlOrderByWithAggregationInput[]
    by: ScopeSqlScalarFieldEnum[] | ScopeSqlScalarFieldEnum
    having?: ScopeSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScopeSqlCountAggregateInputType | true
    _avg?: ScopeSqlAvgAggregateInputType
    _sum?: ScopeSqlSumAggregateInputType
    _min?: ScopeSqlMinAggregateInputType
    _max?: ScopeSqlMaxAggregateInputType
  }

  export type ScopeSqlGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    created_at: Date
    updated_at: Date
    _count: ScopeSqlCountAggregateOutputType | null
    _avg: ScopeSqlAvgAggregateOutputType | null
    _sum: ScopeSqlSumAggregateOutputType | null
    _min: ScopeSqlMinAggregateOutputType | null
    _max: ScopeSqlMaxAggregateOutputType | null
  }

  type GetScopeSqlGroupByPayload<T extends ScopeSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScopeSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScopeSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScopeSqlGroupByOutputType[P]>
            : GetScalarType<T[P], ScopeSqlGroupByOutputType[P]>
        }
      >
    >


  export type ScopeSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
    scopes?: boolean | ScopeSql$scopesArgs<ExtArgs>
    _count?: boolean | ScopeSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scopeSql"]>

  export type ScopeSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["scopeSql"]>

  export type ScopeSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["scopeSql"]>

  export type ScopeSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ScopeSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "created_at" | "updated_at", ExtArgs["result"]["scopeSql"]>
  export type ScopeSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scopes?: boolean | ScopeSql$scopesArgs<ExtArgs>
    _count?: boolean | ScopeSqlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScopeSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScopeSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScopeSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScopeSql"
    objects: {
      scopes: Prisma.$PermissionSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["scopeSql"]>
    composites: {}
  }

  type ScopeSqlGetPayload<S extends boolean | null | undefined | ScopeSqlDefaultArgs> = $Result.GetResult<Prisma.$ScopeSqlPayload, S>

  type ScopeSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScopeSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScopeSqlCountAggregateInputType | true
    }

  export interface ScopeSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScopeSql'], meta: { name: 'ScopeSql' } }
    /**
     * Find zero or one ScopeSql that matches the filter.
     * @param {ScopeSqlFindUniqueArgs} args - Arguments to find a ScopeSql
     * @example
     * // Get one ScopeSql
     * const scopeSql = await prisma.scopeSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScopeSqlFindUniqueArgs>(args: SelectSubset<T, ScopeSqlFindUniqueArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ScopeSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScopeSqlFindUniqueOrThrowArgs} args - Arguments to find a ScopeSql
     * @example
     * // Get one ScopeSql
     * const scopeSql = await prisma.scopeSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScopeSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, ScopeSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ScopeSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlFindFirstArgs} args - Arguments to find a ScopeSql
     * @example
     * // Get one ScopeSql
     * const scopeSql = await prisma.scopeSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScopeSqlFindFirstArgs>(args?: SelectSubset<T, ScopeSqlFindFirstArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ScopeSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlFindFirstOrThrowArgs} args - Arguments to find a ScopeSql
     * @example
     * // Get one ScopeSql
     * const scopeSql = await prisma.scopeSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScopeSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, ScopeSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ScopeSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScopeSqls
     * const scopeSqls = await prisma.scopeSql.findMany()
     * 
     * // Get first 10 ScopeSqls
     * const scopeSqls = await prisma.scopeSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scopeSqlWithIdOnly = await prisma.scopeSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScopeSqlFindManyArgs>(args?: SelectSubset<T, ScopeSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ScopeSql.
     * @param {ScopeSqlCreateArgs} args - Arguments to create a ScopeSql.
     * @example
     * // Create one ScopeSql
     * const ScopeSql = await prisma.scopeSql.create({
     *   data: {
     *     // ... data to create a ScopeSql
     *   }
     * })
     * 
     */
    create<T extends ScopeSqlCreateArgs>(args: SelectSubset<T, ScopeSqlCreateArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ScopeSqls.
     * @param {ScopeSqlCreateManyArgs} args - Arguments to create many ScopeSqls.
     * @example
     * // Create many ScopeSqls
     * const scopeSql = await prisma.scopeSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScopeSqlCreateManyArgs>(args?: SelectSubset<T, ScopeSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScopeSqls and returns the data saved in the database.
     * @param {ScopeSqlCreateManyAndReturnArgs} args - Arguments to create many ScopeSqls.
     * @example
     * // Create many ScopeSqls
     * const scopeSql = await prisma.scopeSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScopeSqls and only return the `id`
     * const scopeSqlWithIdOnly = await prisma.scopeSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScopeSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, ScopeSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ScopeSql.
     * @param {ScopeSqlDeleteArgs} args - Arguments to delete one ScopeSql.
     * @example
     * // Delete one ScopeSql
     * const ScopeSql = await prisma.scopeSql.delete({
     *   where: {
     *     // ... filter to delete one ScopeSql
     *   }
     * })
     * 
     */
    delete<T extends ScopeSqlDeleteArgs>(args: SelectSubset<T, ScopeSqlDeleteArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ScopeSql.
     * @param {ScopeSqlUpdateArgs} args - Arguments to update one ScopeSql.
     * @example
     * // Update one ScopeSql
     * const scopeSql = await prisma.scopeSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScopeSqlUpdateArgs>(args: SelectSubset<T, ScopeSqlUpdateArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ScopeSqls.
     * @param {ScopeSqlDeleteManyArgs} args - Arguments to filter ScopeSqls to delete.
     * @example
     * // Delete a few ScopeSqls
     * const { count } = await prisma.scopeSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScopeSqlDeleteManyArgs>(args?: SelectSubset<T, ScopeSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScopeSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScopeSqls
     * const scopeSql = await prisma.scopeSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScopeSqlUpdateManyArgs>(args: SelectSubset<T, ScopeSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScopeSqls and returns the data updated in the database.
     * @param {ScopeSqlUpdateManyAndReturnArgs} args - Arguments to update many ScopeSqls.
     * @example
     * // Update many ScopeSqls
     * const scopeSql = await prisma.scopeSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScopeSqls and only return the `id`
     * const scopeSqlWithIdOnly = await prisma.scopeSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScopeSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, ScopeSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ScopeSql.
     * @param {ScopeSqlUpsertArgs} args - Arguments to update or create a ScopeSql.
     * @example
     * // Update or create a ScopeSql
     * const scopeSql = await prisma.scopeSql.upsert({
     *   create: {
     *     // ... data to create a ScopeSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScopeSql we want to update
     *   }
     * })
     */
    upsert<T extends ScopeSqlUpsertArgs>(args: SelectSubset<T, ScopeSqlUpsertArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ScopeSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlCountArgs} args - Arguments to filter ScopeSqls to count.
     * @example
     * // Count the number of ScopeSqls
     * const count = await prisma.scopeSql.count({
     *   where: {
     *     // ... the filter for the ScopeSqls we want to count
     *   }
     * })
    **/
    count<T extends ScopeSqlCountArgs>(
      args?: Subset<T, ScopeSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScopeSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScopeSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScopeSqlAggregateArgs>(args: Subset<T, ScopeSqlAggregateArgs>): Prisma.PrismaPromise<GetScopeSqlAggregateType<T>>

    /**
     * Group by ScopeSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScopeSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScopeSqlGroupByArgs['orderBy'] }
        : { orderBy?: ScopeSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScopeSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScopeSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScopeSql model
   */
  readonly fields: ScopeSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScopeSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScopeSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scopes<T extends ScopeSql$scopesArgs<ExtArgs> = {}>(args?: Subset<T, ScopeSql$scopesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScopeSql model
   */ 
  interface ScopeSqlFieldRefs {
    readonly id: FieldRef<"ScopeSql", 'Int'>
    readonly name: FieldRef<"ScopeSql", 'String'>
    readonly desc: FieldRef<"ScopeSql", 'String'>
    readonly created_at: FieldRef<"ScopeSql", 'DateTime'>
    readonly updated_at: FieldRef<"ScopeSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScopeSql findUnique
   */
  export type ScopeSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeSql to fetch.
     */
    where: ScopeSqlWhereUniqueInput
  }

  /**
   * ScopeSql findUniqueOrThrow
   */
  export type ScopeSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeSql to fetch.
     */
    where: ScopeSqlWhereUniqueInput
  }

  /**
   * ScopeSql findFirst
   */
  export type ScopeSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeSql to fetch.
     */
    where?: ScopeSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeSqls to fetch.
     */
    orderBy?: ScopeSqlOrderByWithRelationInput | ScopeSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScopeSqls.
     */
    cursor?: ScopeSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScopeSqls.
     */
    distinct?: ScopeSqlScalarFieldEnum | ScopeSqlScalarFieldEnum[]
  }

  /**
   * ScopeSql findFirstOrThrow
   */
  export type ScopeSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeSql to fetch.
     */
    where?: ScopeSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeSqls to fetch.
     */
    orderBy?: ScopeSqlOrderByWithRelationInput | ScopeSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScopeSqls.
     */
    cursor?: ScopeSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScopeSqls.
     */
    distinct?: ScopeSqlScalarFieldEnum | ScopeSqlScalarFieldEnum[]
  }

  /**
   * ScopeSql findMany
   */
  export type ScopeSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeSqls to fetch.
     */
    where?: ScopeSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeSqls to fetch.
     */
    orderBy?: ScopeSqlOrderByWithRelationInput | ScopeSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScopeSqls.
     */
    cursor?: ScopeSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeSqls.
     */
    skip?: number
    distinct?: ScopeSqlScalarFieldEnum | ScopeSqlScalarFieldEnum[]
  }

  /**
   * ScopeSql create
   */
  export type ScopeSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a ScopeSql.
     */
    data: XOR<ScopeSqlCreateInput, ScopeSqlUncheckedCreateInput>
  }

  /**
   * ScopeSql createMany
   */
  export type ScopeSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScopeSqls.
     */
    data: ScopeSqlCreateManyInput | ScopeSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScopeSql createManyAndReturn
   */
  export type ScopeSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * The data used to create many ScopeSqls.
     */
    data: ScopeSqlCreateManyInput | ScopeSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScopeSql update
   */
  export type ScopeSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a ScopeSql.
     */
    data: XOR<ScopeSqlUpdateInput, ScopeSqlUncheckedUpdateInput>
    /**
     * Choose, which ScopeSql to update.
     */
    where: ScopeSqlWhereUniqueInput
  }

  /**
   * ScopeSql updateMany
   */
  export type ScopeSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScopeSqls.
     */
    data: XOR<ScopeSqlUpdateManyMutationInput, ScopeSqlUncheckedUpdateManyInput>
    /**
     * Filter which ScopeSqls to update
     */
    where?: ScopeSqlWhereInput
    limit?: number
  }

  /**
   * ScopeSql updateManyAndReturn
   */
  export type ScopeSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * The data used to update ScopeSqls.
     */
    data: XOR<ScopeSqlUpdateManyMutationInput, ScopeSqlUncheckedUpdateManyInput>
    /**
     * Filter which ScopeSqls to update
     */
    where?: ScopeSqlWhereInput
    limit?: number
  }

  /**
   * ScopeSql upsert
   */
  export type ScopeSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the ScopeSql to update in case it exists.
     */
    where: ScopeSqlWhereUniqueInput
    /**
     * In case the ScopeSql found by the `where` argument doesn't exist, create a new ScopeSql with this data.
     */
    create: XOR<ScopeSqlCreateInput, ScopeSqlUncheckedCreateInput>
    /**
     * In case the ScopeSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScopeSqlUpdateInput, ScopeSqlUncheckedUpdateInput>
  }

  /**
   * ScopeSql delete
   */
  export type ScopeSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
    /**
     * Filter which ScopeSql to delete.
     */
    where: ScopeSqlWhereUniqueInput
  }

  /**
   * ScopeSql deleteMany
   */
  export type ScopeSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScopeSqls to delete
     */
    where?: ScopeSqlWhereInput
    limit?: number
  }

  /**
   * ScopeSql.scopes
   */
  export type ScopeSql$scopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    where?: PermissionSqlWhereInput
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    cursor?: PermissionSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionSqlScalarFieldEnum | PermissionSqlScalarFieldEnum[]
  }

  /**
   * ScopeSql without action
   */
  export type ScopeSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeSql
     */
    select?: ScopeSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeSql
     */
    omit?: ScopeSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeSqlInclude<ExtArgs> | null
  }


  /**
   * Model ResourceSql
   */

  export type AggregateResourceSql = {
    _count: ResourceSqlCountAggregateOutputType | null
    _avg: ResourceSqlAvgAggregateOutputType | null
    _sum: ResourceSqlSumAggregateOutputType | null
    _min: ResourceSqlMinAggregateOutputType | null
    _max: ResourceSqlMaxAggregateOutputType | null
  }

  export type ResourceSqlAvgAggregateOutputType = {
    id: number | null
  }

  export type ResourceSqlSumAggregateOutputType = {
    id: number | null
  }

  export type ResourceSqlMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceSqlMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceSqlAvgAggregateInputType = {
    id?: true
  }

  export type ResourceSqlSumAggregateInputType = {
    id?: true
  }

  export type ResourceSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceSql to aggregate.
     */
    where?: ResourceSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceSqls to fetch.
     */
    orderBy?: ResourceSqlOrderByWithRelationInput | ResourceSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceSqls
    **/
    _count?: true | ResourceSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceSqlMaxAggregateInputType
  }

  export type GetResourceSqlAggregateType<T extends ResourceSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceSql[P]>
      : GetScalarType<T[P], AggregateResourceSql[P]>
  }




  export type ResourceSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceSqlWhereInput
    orderBy?: ResourceSqlOrderByWithAggregationInput | ResourceSqlOrderByWithAggregationInput[]
    by: ResourceSqlScalarFieldEnum[] | ResourceSqlScalarFieldEnum
    having?: ResourceSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceSqlCountAggregateInputType | true
    _avg?: ResourceSqlAvgAggregateInputType
    _sum?: ResourceSqlSumAggregateInputType
    _min?: ResourceSqlMinAggregateInputType
    _max?: ResourceSqlMaxAggregateInputType
  }

  export type ResourceSqlGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    created_at: Date
    updated_at: Date
    _count: ResourceSqlCountAggregateOutputType | null
    _avg: ResourceSqlAvgAggregateOutputType | null
    _sum: ResourceSqlSumAggregateOutputType | null
    _min: ResourceSqlMinAggregateOutputType | null
    _max: ResourceSqlMaxAggregateOutputType | null
  }

  type GetResourceSqlGroupByPayload<T extends ResourceSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceSqlGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceSqlGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
    permissions?: boolean | ResourceSql$permissionsArgs<ExtArgs>
    _count?: boolean | ResourceSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceSql"]>

  export type ResourceSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resourceSql"]>

  export type ResourceSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resourceSql"]>

  export type ResourceSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ResourceSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "created_at" | "updated_at", ExtArgs["result"]["resourceSql"]>
  export type ResourceSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ResourceSql$permissionsArgs<ExtArgs>
    _count?: boolean | ResourceSqlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResourceSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResourceSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceSql"
    objects: {
      permissions: Prisma.$PermissionSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resourceSql"]>
    composites: {}
  }

  type ResourceSqlGetPayload<S extends boolean | null | undefined | ResourceSqlDefaultArgs> = $Result.GetResult<Prisma.$ResourceSqlPayload, S>

  type ResourceSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceSqlCountAggregateInputType | true
    }

  export interface ResourceSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceSql'], meta: { name: 'ResourceSql' } }
    /**
     * Find zero or one ResourceSql that matches the filter.
     * @param {ResourceSqlFindUniqueArgs} args - Arguments to find a ResourceSql
     * @example
     * // Get one ResourceSql
     * const resourceSql = await prisma.resourceSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceSqlFindUniqueArgs>(args: SelectSubset<T, ResourceSqlFindUniqueArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ResourceSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceSqlFindUniqueOrThrowArgs} args - Arguments to find a ResourceSql
     * @example
     * // Get one ResourceSql
     * const resourceSql = await prisma.resourceSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ResourceSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlFindFirstArgs} args - Arguments to find a ResourceSql
     * @example
     * // Get one ResourceSql
     * const resourceSql = await prisma.resourceSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceSqlFindFirstArgs>(args?: SelectSubset<T, ResourceSqlFindFirstArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ResourceSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlFindFirstOrThrowArgs} args - Arguments to find a ResourceSql
     * @example
     * // Get one ResourceSql
     * const resourceSql = await prisma.resourceSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResourceSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceSqls
     * const resourceSqls = await prisma.resourceSql.findMany()
     * 
     * // Get first 10 ResourceSqls
     * const resourceSqls = await prisma.resourceSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceSqlWithIdOnly = await prisma.resourceSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceSqlFindManyArgs>(args?: SelectSubset<T, ResourceSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ResourceSql.
     * @param {ResourceSqlCreateArgs} args - Arguments to create a ResourceSql.
     * @example
     * // Create one ResourceSql
     * const ResourceSql = await prisma.resourceSql.create({
     *   data: {
     *     // ... data to create a ResourceSql
     *   }
     * })
     * 
     */
    create<T extends ResourceSqlCreateArgs>(args: SelectSubset<T, ResourceSqlCreateArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ResourceSqls.
     * @param {ResourceSqlCreateManyArgs} args - Arguments to create many ResourceSqls.
     * @example
     * // Create many ResourceSqls
     * const resourceSql = await prisma.resourceSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceSqlCreateManyArgs>(args?: SelectSubset<T, ResourceSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceSqls and returns the data saved in the database.
     * @param {ResourceSqlCreateManyAndReturnArgs} args - Arguments to create many ResourceSqls.
     * @example
     * // Create many ResourceSqls
     * const resourceSql = await prisma.resourceSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceSqls and only return the `id`
     * const resourceSqlWithIdOnly = await prisma.resourceSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ResourceSql.
     * @param {ResourceSqlDeleteArgs} args - Arguments to delete one ResourceSql.
     * @example
     * // Delete one ResourceSql
     * const ResourceSql = await prisma.resourceSql.delete({
     *   where: {
     *     // ... filter to delete one ResourceSql
     *   }
     * })
     * 
     */
    delete<T extends ResourceSqlDeleteArgs>(args: SelectSubset<T, ResourceSqlDeleteArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ResourceSql.
     * @param {ResourceSqlUpdateArgs} args - Arguments to update one ResourceSql.
     * @example
     * // Update one ResourceSql
     * const resourceSql = await prisma.resourceSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceSqlUpdateArgs>(args: SelectSubset<T, ResourceSqlUpdateArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ResourceSqls.
     * @param {ResourceSqlDeleteManyArgs} args - Arguments to filter ResourceSqls to delete.
     * @example
     * // Delete a few ResourceSqls
     * const { count } = await prisma.resourceSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceSqlDeleteManyArgs>(args?: SelectSubset<T, ResourceSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceSqls
     * const resourceSql = await prisma.resourceSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceSqlUpdateManyArgs>(args: SelectSubset<T, ResourceSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceSqls and returns the data updated in the database.
     * @param {ResourceSqlUpdateManyAndReturnArgs} args - Arguments to update many ResourceSqls.
     * @example
     * // Update many ResourceSqls
     * const resourceSql = await prisma.resourceSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResourceSqls and only return the `id`
     * const resourceSqlWithIdOnly = await prisma.resourceSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ResourceSql.
     * @param {ResourceSqlUpsertArgs} args - Arguments to update or create a ResourceSql.
     * @example
     * // Update or create a ResourceSql
     * const resourceSql = await prisma.resourceSql.upsert({
     *   create: {
     *     // ... data to create a ResourceSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceSql we want to update
     *   }
     * })
     */
    upsert<T extends ResourceSqlUpsertArgs>(args: SelectSubset<T, ResourceSqlUpsertArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ResourceSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlCountArgs} args - Arguments to filter ResourceSqls to count.
     * @example
     * // Count the number of ResourceSqls
     * const count = await prisma.resourceSql.count({
     *   where: {
     *     // ... the filter for the ResourceSqls we want to count
     *   }
     * })
    **/
    count<T extends ResourceSqlCountArgs>(
      args?: Subset<T, ResourceSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceSqlAggregateArgs>(args: Subset<T, ResourceSqlAggregateArgs>): Prisma.PrismaPromise<GetResourceSqlAggregateType<T>>

    /**
     * Group by ResourceSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceSqlGroupByArgs['orderBy'] }
        : { orderBy?: ResourceSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceSql model
   */
  readonly fields: ResourceSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends ResourceSql$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, ResourceSql$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResourceSql model
   */ 
  interface ResourceSqlFieldRefs {
    readonly id: FieldRef<"ResourceSql", 'Int'>
    readonly name: FieldRef<"ResourceSql", 'String'>
    readonly desc: FieldRef<"ResourceSql", 'String'>
    readonly created_at: FieldRef<"ResourceSql", 'DateTime'>
    readonly updated_at: FieldRef<"ResourceSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceSql findUnique
   */
  export type ResourceSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceSql to fetch.
     */
    where: ResourceSqlWhereUniqueInput
  }

  /**
   * ResourceSql findUniqueOrThrow
   */
  export type ResourceSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceSql to fetch.
     */
    where: ResourceSqlWhereUniqueInput
  }

  /**
   * ResourceSql findFirst
   */
  export type ResourceSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceSql to fetch.
     */
    where?: ResourceSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceSqls to fetch.
     */
    orderBy?: ResourceSqlOrderByWithRelationInput | ResourceSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceSqls.
     */
    cursor?: ResourceSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceSqls.
     */
    distinct?: ResourceSqlScalarFieldEnum | ResourceSqlScalarFieldEnum[]
  }

  /**
   * ResourceSql findFirstOrThrow
   */
  export type ResourceSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceSql to fetch.
     */
    where?: ResourceSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceSqls to fetch.
     */
    orderBy?: ResourceSqlOrderByWithRelationInput | ResourceSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceSqls.
     */
    cursor?: ResourceSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceSqls.
     */
    distinct?: ResourceSqlScalarFieldEnum | ResourceSqlScalarFieldEnum[]
  }

  /**
   * ResourceSql findMany
   */
  export type ResourceSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceSqls to fetch.
     */
    where?: ResourceSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceSqls to fetch.
     */
    orderBy?: ResourceSqlOrderByWithRelationInput | ResourceSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceSqls.
     */
    cursor?: ResourceSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceSqls.
     */
    skip?: number
    distinct?: ResourceSqlScalarFieldEnum | ResourceSqlScalarFieldEnum[]
  }

  /**
   * ResourceSql create
   */
  export type ResourceSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceSql.
     */
    data: XOR<ResourceSqlCreateInput, ResourceSqlUncheckedCreateInput>
  }

  /**
   * ResourceSql createMany
   */
  export type ResourceSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceSqls.
     */
    data: ResourceSqlCreateManyInput | ResourceSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceSql createManyAndReturn
   */
  export type ResourceSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * The data used to create many ResourceSqls.
     */
    data: ResourceSqlCreateManyInput | ResourceSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceSql update
   */
  export type ResourceSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceSql.
     */
    data: XOR<ResourceSqlUpdateInput, ResourceSqlUncheckedUpdateInput>
    /**
     * Choose, which ResourceSql to update.
     */
    where: ResourceSqlWhereUniqueInput
  }

  /**
   * ResourceSql updateMany
   */
  export type ResourceSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceSqls.
     */
    data: XOR<ResourceSqlUpdateManyMutationInput, ResourceSqlUncheckedUpdateManyInput>
    /**
     * Filter which ResourceSqls to update
     */
    where?: ResourceSqlWhereInput
    limit?: number
  }

  /**
   * ResourceSql updateManyAndReturn
   */
  export type ResourceSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * The data used to update ResourceSqls.
     */
    data: XOR<ResourceSqlUpdateManyMutationInput, ResourceSqlUncheckedUpdateManyInput>
    /**
     * Filter which ResourceSqls to update
     */
    where?: ResourceSqlWhereInput
    limit?: number
  }

  /**
   * ResourceSql upsert
   */
  export type ResourceSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceSql to update in case it exists.
     */
    where: ResourceSqlWhereUniqueInput
    /**
     * In case the ResourceSql found by the `where` argument doesn't exist, create a new ResourceSql with this data.
     */
    create: XOR<ResourceSqlCreateInput, ResourceSqlUncheckedCreateInput>
    /**
     * In case the ResourceSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceSqlUpdateInput, ResourceSqlUncheckedUpdateInput>
  }

  /**
   * ResourceSql delete
   */
  export type ResourceSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
    /**
     * Filter which ResourceSql to delete.
     */
    where: ResourceSqlWhereUniqueInput
  }

  /**
   * ResourceSql deleteMany
   */
  export type ResourceSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceSqls to delete
     */
    where?: ResourceSqlWhereInput
    limit?: number
  }

  /**
   * ResourceSql.permissions
   */
  export type ResourceSql$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    where?: PermissionSqlWhereInput
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    cursor?: PermissionSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionSqlScalarFieldEnum | PermissionSqlScalarFieldEnum[]
  }

  /**
   * ResourceSql without action
   */
  export type ResourceSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceSql
     */
    select?: ResourceSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceSql
     */
    omit?: ResourceSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceSqlInclude<ExtArgs> | null
  }


  /**
   * Model PermissionSql
   */

  export type AggregatePermissionSql = {
    _count: PermissionSqlCountAggregateOutputType | null
    _avg: PermissionSqlAvgAggregateOutputType | null
    _sum: PermissionSqlSumAggregateOutputType | null
    _min: PermissionSqlMinAggregateOutputType | null
    _max: PermissionSqlMaxAggregateOutputType | null
  }

  export type PermissionSqlAvgAggregateOutputType = {
    id: number | null
    resource_id: number | null
    scope_id: number | null
  }

  export type PermissionSqlSumAggregateOutputType = {
    id: number | null
    resource_id: number | null
    scope_id: number | null
  }

  export type PermissionSqlMinAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    desc: string | null
    resource_id: number | null
    scope_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionSqlMaxAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    desc: string | null
    resource_id: number | null
    scope_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionSqlCountAggregateOutputType = {
    id: number
    title: number
    name: number
    desc: number
    resource_id: number
    scope_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionSqlAvgAggregateInputType = {
    id?: true
    resource_id?: true
    scope_id?: true
  }

  export type PermissionSqlSumAggregateInputType = {
    id?: true
    resource_id?: true
    scope_id?: true
  }

  export type PermissionSqlMinAggregateInputType = {
    id?: true
    title?: true
    name?: true
    desc?: true
    resource_id?: true
    scope_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionSqlMaxAggregateInputType = {
    id?: true
    title?: true
    name?: true
    desc?: true
    resource_id?: true
    scope_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionSqlCountAggregateInputType = {
    id?: true
    title?: true
    name?: true
    desc?: true
    resource_id?: true
    scope_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionSql to aggregate.
     */
    where?: PermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionSqls to fetch.
     */
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionSqls
    **/
    _count?: true | PermissionSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionSqlMaxAggregateInputType
  }

  export type GetPermissionSqlAggregateType<T extends PermissionSqlAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionSql[P]>
      : GetScalarType<T[P], AggregatePermissionSql[P]>
  }




  export type PermissionSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionSqlWhereInput
    orderBy?: PermissionSqlOrderByWithAggregationInput | PermissionSqlOrderByWithAggregationInput[]
    by: PermissionSqlScalarFieldEnum[] | PermissionSqlScalarFieldEnum
    having?: PermissionSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionSqlCountAggregateInputType | true
    _avg?: PermissionSqlAvgAggregateInputType
    _sum?: PermissionSqlSumAggregateInputType
    _min?: PermissionSqlMinAggregateInputType
    _max?: PermissionSqlMaxAggregateInputType
  }

  export type PermissionSqlGroupByOutputType = {
    id: number
    title: string | null
    name: string
    desc: string | null
    resource_id: number
    scope_id: number
    created_at: Date
    updated_at: Date
    _count: PermissionSqlCountAggregateOutputType | null
    _avg: PermissionSqlAvgAggregateOutputType | null
    _sum: PermissionSqlSumAggregateOutputType | null
    _min: PermissionSqlMinAggregateOutputType | null
    _max: PermissionSqlMaxAggregateOutputType | null
  }

  type GetPermissionSqlGroupByPayload<T extends PermissionSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionSqlGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionSqlGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
    permission_roles?: boolean | PermissionSql$permission_rolesArgs<ExtArgs>
    parent?: boolean | PermissionSql$parentArgs<ExtArgs>
    children?: boolean | PermissionSql$childrenArgs<ExtArgs>
    _count?: boolean | PermissionSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionSql"]>

  export type PermissionSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionSql"]>

  export type PermissionSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionSql"]>

  export type PermissionSqlSelectScalar = {
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PermissionSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "name" | "desc" | "resource_id" | "scope_id" | "created_at" | "updated_at", ExtArgs["result"]["permissionSql"]>
  export type PermissionSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
    permission_roles?: boolean | PermissionSql$permission_rolesArgs<ExtArgs>
    parent?: boolean | PermissionSql$parentArgs<ExtArgs>
    children?: boolean | PermissionSql$childrenArgs<ExtArgs>
    _count?: boolean | PermissionSqlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
  }
  export type PermissionSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeSqlDefaultArgs<ExtArgs>
  }

  export type $PermissionSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionSql"
    objects: {
      resource: Prisma.$ResourceSqlPayload<ExtArgs>
      scope: Prisma.$ScopeSqlPayload<ExtArgs>
      permission_roles: Prisma.$PermissionRoleSqlPayload<ExtArgs>[]
      parent: Prisma.$RelatedPermissionSqlPayload<ExtArgs>[]
      children: Prisma.$RelatedPermissionSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      name: string
      desc: string | null
      resource_id: number
      scope_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permissionSql"]>
    composites: {}
  }

  type PermissionSqlGetPayload<S extends boolean | null | undefined | PermissionSqlDefaultArgs> = $Result.GetResult<Prisma.$PermissionSqlPayload, S>

  type PermissionSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionSqlCountAggregateInputType | true
    }

  export interface PermissionSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionSql'], meta: { name: 'PermissionSql' } }
    /**
     * Find zero or one PermissionSql that matches the filter.
     * @param {PermissionSqlFindUniqueArgs} args - Arguments to find a PermissionSql
     * @example
     * // Get one PermissionSql
     * const permissionSql = await prisma.permissionSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionSqlFindUniqueArgs>(args: SelectSubset<T, PermissionSqlFindUniqueArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PermissionSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionSqlFindUniqueOrThrowArgs} args - Arguments to find a PermissionSql
     * @example
     * // Get one PermissionSql
     * const permissionSql = await prisma.permissionSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlFindFirstArgs} args - Arguments to find a PermissionSql
     * @example
     * // Get one PermissionSql
     * const permissionSql = await prisma.permissionSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionSqlFindFirstArgs>(args?: SelectSubset<T, PermissionSqlFindFirstArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlFindFirstOrThrowArgs} args - Arguments to find a PermissionSql
     * @example
     * // Get one PermissionSql
     * const permissionSql = await prisma.permissionSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionSqls
     * const permissionSqls = await prisma.permissionSql.findMany()
     * 
     * // Get first 10 PermissionSqls
     * const permissionSqls = await prisma.permissionSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionSqlWithIdOnly = await prisma.permissionSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionSqlFindManyArgs>(args?: SelectSubset<T, PermissionSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PermissionSql.
     * @param {PermissionSqlCreateArgs} args - Arguments to create a PermissionSql.
     * @example
     * // Create one PermissionSql
     * const PermissionSql = await prisma.permissionSql.create({
     *   data: {
     *     // ... data to create a PermissionSql
     *   }
     * })
     * 
     */
    create<T extends PermissionSqlCreateArgs>(args: SelectSubset<T, PermissionSqlCreateArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PermissionSqls.
     * @param {PermissionSqlCreateManyArgs} args - Arguments to create many PermissionSqls.
     * @example
     * // Create many PermissionSqls
     * const permissionSql = await prisma.permissionSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionSqlCreateManyArgs>(args?: SelectSubset<T, PermissionSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionSqls and returns the data saved in the database.
     * @param {PermissionSqlCreateManyAndReturnArgs} args - Arguments to create many PermissionSqls.
     * @example
     * // Create many PermissionSqls
     * const permissionSql = await prisma.permissionSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionSqls and only return the `id`
     * const permissionSqlWithIdOnly = await prisma.permissionSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PermissionSql.
     * @param {PermissionSqlDeleteArgs} args - Arguments to delete one PermissionSql.
     * @example
     * // Delete one PermissionSql
     * const PermissionSql = await prisma.permissionSql.delete({
     *   where: {
     *     // ... filter to delete one PermissionSql
     *   }
     * })
     * 
     */
    delete<T extends PermissionSqlDeleteArgs>(args: SelectSubset<T, PermissionSqlDeleteArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PermissionSql.
     * @param {PermissionSqlUpdateArgs} args - Arguments to update one PermissionSql.
     * @example
     * // Update one PermissionSql
     * const permissionSql = await prisma.permissionSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionSqlUpdateArgs>(args: SelectSubset<T, PermissionSqlUpdateArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PermissionSqls.
     * @param {PermissionSqlDeleteManyArgs} args - Arguments to filter PermissionSqls to delete.
     * @example
     * // Delete a few PermissionSqls
     * const { count } = await prisma.permissionSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionSqlDeleteManyArgs>(args?: SelectSubset<T, PermissionSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionSqls
     * const permissionSql = await prisma.permissionSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionSqlUpdateManyArgs>(args: SelectSubset<T, PermissionSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionSqls and returns the data updated in the database.
     * @param {PermissionSqlUpdateManyAndReturnArgs} args - Arguments to update many PermissionSqls.
     * @example
     * // Update many PermissionSqls
     * const permissionSql = await prisma.permissionSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PermissionSqls and only return the `id`
     * const permissionSqlWithIdOnly = await prisma.permissionSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PermissionSql.
     * @param {PermissionSqlUpsertArgs} args - Arguments to update or create a PermissionSql.
     * @example
     * // Update or create a PermissionSql
     * const permissionSql = await prisma.permissionSql.upsert({
     *   create: {
     *     // ... data to create a PermissionSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionSql we want to update
     *   }
     * })
     */
    upsert<T extends PermissionSqlUpsertArgs>(args: SelectSubset<T, PermissionSqlUpsertArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PermissionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlCountArgs} args - Arguments to filter PermissionSqls to count.
     * @example
     * // Count the number of PermissionSqls
     * const count = await prisma.permissionSql.count({
     *   where: {
     *     // ... the filter for the PermissionSqls we want to count
     *   }
     * })
    **/
    count<T extends PermissionSqlCountArgs>(
      args?: Subset<T, PermissionSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionSqlAggregateArgs>(args: Subset<T, PermissionSqlAggregateArgs>): Prisma.PrismaPromise<GetPermissionSqlAggregateType<T>>

    /**
     * Group by PermissionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionSqlGroupByArgs['orderBy'] }
        : { orderBy?: PermissionSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionSql model
   */
  readonly fields: PermissionSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resource<T extends ResourceSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceSqlDefaultArgs<ExtArgs>>): Prisma__ResourceSqlClient<$Result.GetResult<Prisma.$ResourceSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    scope<T extends ScopeSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScopeSqlDefaultArgs<ExtArgs>>): Prisma__ScopeSqlClient<$Result.GetResult<Prisma.$ScopeSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    permission_roles<T extends PermissionSql$permission_rolesArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSql$permission_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    parent<T extends PermissionSql$parentArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSql$parentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    children<T extends PermissionSql$childrenArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSql$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermissionSql model
   */ 
  interface PermissionSqlFieldRefs {
    readonly id: FieldRef<"PermissionSql", 'Int'>
    readonly title: FieldRef<"PermissionSql", 'String'>
    readonly name: FieldRef<"PermissionSql", 'String'>
    readonly desc: FieldRef<"PermissionSql", 'String'>
    readonly resource_id: FieldRef<"PermissionSql", 'Int'>
    readonly scope_id: FieldRef<"PermissionSql", 'Int'>
    readonly created_at: FieldRef<"PermissionSql", 'DateTime'>
    readonly updated_at: FieldRef<"PermissionSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermissionSql findUnique
   */
  export type PermissionSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionSql to fetch.
     */
    where: PermissionSqlWhereUniqueInput
  }

  /**
   * PermissionSql findUniqueOrThrow
   */
  export type PermissionSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionSql to fetch.
     */
    where: PermissionSqlWhereUniqueInput
  }

  /**
   * PermissionSql findFirst
   */
  export type PermissionSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionSql to fetch.
     */
    where?: PermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionSqls to fetch.
     */
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionSqls.
     */
    cursor?: PermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionSqls.
     */
    distinct?: PermissionSqlScalarFieldEnum | PermissionSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql findFirstOrThrow
   */
  export type PermissionSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionSql to fetch.
     */
    where?: PermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionSqls to fetch.
     */
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionSqls.
     */
    cursor?: PermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionSqls.
     */
    distinct?: PermissionSqlScalarFieldEnum | PermissionSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql findMany
   */
  export type PermissionSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionSqls to fetch.
     */
    where?: PermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionSqls to fetch.
     */
    orderBy?: PermissionSqlOrderByWithRelationInput | PermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionSqls.
     */
    cursor?: PermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionSqls.
     */
    skip?: number
    distinct?: PermissionSqlScalarFieldEnum | PermissionSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql create
   */
  export type PermissionSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionSql.
     */
    data: XOR<PermissionSqlCreateInput, PermissionSqlUncheckedCreateInput>
  }

  /**
   * PermissionSql createMany
   */
  export type PermissionSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionSqls.
     */
    data: PermissionSqlCreateManyInput | PermissionSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionSql createManyAndReturn
   */
  export type PermissionSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * The data used to create many PermissionSqls.
     */
    data: PermissionSqlCreateManyInput | PermissionSqlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionSql update
   */
  export type PermissionSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionSql.
     */
    data: XOR<PermissionSqlUpdateInput, PermissionSqlUncheckedUpdateInput>
    /**
     * Choose, which PermissionSql to update.
     */
    where: PermissionSqlWhereUniqueInput
  }

  /**
   * PermissionSql updateMany
   */
  export type PermissionSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionSqls.
     */
    data: XOR<PermissionSqlUpdateManyMutationInput, PermissionSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionSqls to update
     */
    where?: PermissionSqlWhereInput
    limit?: number
  }

  /**
   * PermissionSql updateManyAndReturn
   */
  export type PermissionSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * The data used to update PermissionSqls.
     */
    data: XOR<PermissionSqlUpdateManyMutationInput, PermissionSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionSqls to update
     */
    where?: PermissionSqlWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionSql upsert
   */
  export type PermissionSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionSql to update in case it exists.
     */
    where: PermissionSqlWhereUniqueInput
    /**
     * In case the PermissionSql found by the `where` argument doesn't exist, create a new PermissionSql with this data.
     */
    create: XOR<PermissionSqlCreateInput, PermissionSqlUncheckedCreateInput>
    /**
     * In case the PermissionSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionSqlUpdateInput, PermissionSqlUncheckedUpdateInput>
  }

  /**
   * PermissionSql delete
   */
  export type PermissionSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
    /**
     * Filter which PermissionSql to delete.
     */
    where: PermissionSqlWhereUniqueInput
  }

  /**
   * PermissionSql deleteMany
   */
  export type PermissionSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionSqls to delete
     */
    where?: PermissionSqlWhereInput
    limit?: number
  }

  /**
   * PermissionSql.permission_roles
   */
  export type PermissionSql$permission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    where?: PermissionRoleSqlWhereInput
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    cursor?: PermissionRoleSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionRoleSqlScalarFieldEnum | PermissionRoleSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql.parent
   */
  export type PermissionSql$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    where?: RelatedPermissionSqlWhereInput
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    cursor?: RelatedPermissionSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedPermissionSqlScalarFieldEnum | RelatedPermissionSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql.children
   */
  export type PermissionSql$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    where?: RelatedPermissionSqlWhereInput
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    cursor?: RelatedPermissionSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedPermissionSqlScalarFieldEnum | RelatedPermissionSqlScalarFieldEnum[]
  }

  /**
   * PermissionSql without action
   */
  export type PermissionSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionSql
     */
    select?: PermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionSql
     */
    omit?: PermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionSqlInclude<ExtArgs> | null
  }


  /**
   * Model RelatedPermissionSql
   */

  export type AggregateRelatedPermissionSql = {
    _count: RelatedPermissionSqlCountAggregateOutputType | null
    _avg: RelatedPermissionSqlAvgAggregateOutputType | null
    _sum: RelatedPermissionSqlSumAggregateOutputType | null
    _min: RelatedPermissionSqlMinAggregateOutputType | null
    _max: RelatedPermissionSqlMaxAggregateOutputType | null
  }

  export type RelatedPermissionSqlAvgAggregateOutputType = {
    parent_id: number | null
    child_id: number | null
  }

  export type RelatedPermissionSqlSumAggregateOutputType = {
    parent_id: number | null
    child_id: number | null
  }

  export type RelatedPermissionSqlMinAggregateOutputType = {
    parent_id: number | null
    child_id: number | null
  }

  export type RelatedPermissionSqlMaxAggregateOutputType = {
    parent_id: number | null
    child_id: number | null
  }

  export type RelatedPermissionSqlCountAggregateOutputType = {
    parent_id: number
    child_id: number
    _all: number
  }


  export type RelatedPermissionSqlAvgAggregateInputType = {
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionSqlSumAggregateInputType = {
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionSqlMinAggregateInputType = {
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionSqlMaxAggregateInputType = {
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionSqlCountAggregateInputType = {
    parent_id?: true
    child_id?: true
    _all?: true
  }

  export type RelatedPermissionSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedPermissionSql to aggregate.
     */
    where?: RelatedPermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionSqls to fetch.
     */
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatedPermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatedPermissionSqls
    **/
    _count?: true | RelatedPermissionSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatedPermissionSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatedPermissionSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatedPermissionSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatedPermissionSqlMaxAggregateInputType
  }

  export type GetRelatedPermissionSqlAggregateType<T extends RelatedPermissionSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatedPermissionSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatedPermissionSql[P]>
      : GetScalarType<T[P], AggregateRelatedPermissionSql[P]>
  }




  export type RelatedPermissionSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionSqlWhereInput
    orderBy?: RelatedPermissionSqlOrderByWithAggregationInput | RelatedPermissionSqlOrderByWithAggregationInput[]
    by: RelatedPermissionSqlScalarFieldEnum[] | RelatedPermissionSqlScalarFieldEnum
    having?: RelatedPermissionSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatedPermissionSqlCountAggregateInputType | true
    _avg?: RelatedPermissionSqlAvgAggregateInputType
    _sum?: RelatedPermissionSqlSumAggregateInputType
    _min?: RelatedPermissionSqlMinAggregateInputType
    _max?: RelatedPermissionSqlMaxAggregateInputType
  }

  export type RelatedPermissionSqlGroupByOutputType = {
    parent_id: number
    child_id: number
    _count: RelatedPermissionSqlCountAggregateOutputType | null
    _avg: RelatedPermissionSqlAvgAggregateOutputType | null
    _sum: RelatedPermissionSqlSumAggregateOutputType | null
    _min: RelatedPermissionSqlMinAggregateOutputType | null
    _max: RelatedPermissionSqlMaxAggregateOutputType | null
  }

  type GetRelatedPermissionSqlGroupByPayload<T extends RelatedPermissionSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatedPermissionSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatedPermissionSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatedPermissionSqlGroupByOutputType[P]>
            : GetScalarType<T[P], RelatedPermissionSqlGroupByOutputType[P]>
        }
      >
    >


  export type RelatedPermissionSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parent_id?: boolean
    child_id?: boolean
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedPermissionSql"]>

  export type RelatedPermissionSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parent_id?: boolean
    child_id?: boolean
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedPermissionSql"]>

  export type RelatedPermissionSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parent_id?: boolean
    child_id?: boolean
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedPermissionSql"]>

  export type RelatedPermissionSqlSelectScalar = {
    parent_id?: boolean
    child_id?: boolean
  }

  export type RelatedPermissionSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"parent_id" | "child_id", ExtArgs["result"]["relatedPermissionSql"]>
  export type RelatedPermissionSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }
  export type RelatedPermissionSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }
  export type RelatedPermissionSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionSqlDefaultArgs<ExtArgs>
  }

  export type $RelatedPermissionSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatedPermissionSql"
    objects: {
      parent: Prisma.$PermissionSqlPayload<ExtArgs>
      child: Prisma.$PermissionSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parent_id: number
      child_id: number
    }, ExtArgs["result"]["relatedPermissionSql"]>
    composites: {}
  }

  type RelatedPermissionSqlGetPayload<S extends boolean | null | undefined | RelatedPermissionSqlDefaultArgs> = $Result.GetResult<Prisma.$RelatedPermissionSqlPayload, S>

  type RelatedPermissionSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatedPermissionSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatedPermissionSqlCountAggregateInputType | true
    }

  export interface RelatedPermissionSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatedPermissionSql'], meta: { name: 'RelatedPermissionSql' } }
    /**
     * Find zero or one RelatedPermissionSql that matches the filter.
     * @param {RelatedPermissionSqlFindUniqueArgs} args - Arguments to find a RelatedPermissionSql
     * @example
     * // Get one RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatedPermissionSqlFindUniqueArgs>(args: SelectSubset<T, RelatedPermissionSqlFindUniqueArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RelatedPermissionSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatedPermissionSqlFindUniqueOrThrowArgs} args - Arguments to find a RelatedPermissionSql
     * @example
     * // Get one RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatedPermissionSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatedPermissionSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RelatedPermissionSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlFindFirstArgs} args - Arguments to find a RelatedPermissionSql
     * @example
     * // Get one RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatedPermissionSqlFindFirstArgs>(args?: SelectSubset<T, RelatedPermissionSqlFindFirstArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RelatedPermissionSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlFindFirstOrThrowArgs} args - Arguments to find a RelatedPermissionSql
     * @example
     * // Get one RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatedPermissionSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatedPermissionSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RelatedPermissionSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatedPermissionSqls
     * const relatedPermissionSqls = await prisma.relatedPermissionSql.findMany()
     * 
     * // Get first 10 RelatedPermissionSqls
     * const relatedPermissionSqls = await prisma.relatedPermissionSql.findMany({ take: 10 })
     * 
     * // Only select the `parent_id`
     * const relatedPermissionSqlWithParent_idOnly = await prisma.relatedPermissionSql.findMany({ select: { parent_id: true } })
     * 
     */
    findMany<T extends RelatedPermissionSqlFindManyArgs>(args?: SelectSubset<T, RelatedPermissionSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RelatedPermissionSql.
     * @param {RelatedPermissionSqlCreateArgs} args - Arguments to create a RelatedPermissionSql.
     * @example
     * // Create one RelatedPermissionSql
     * const RelatedPermissionSql = await prisma.relatedPermissionSql.create({
     *   data: {
     *     // ... data to create a RelatedPermissionSql
     *   }
     * })
     * 
     */
    create<T extends RelatedPermissionSqlCreateArgs>(args: SelectSubset<T, RelatedPermissionSqlCreateArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RelatedPermissionSqls.
     * @param {RelatedPermissionSqlCreateManyArgs} args - Arguments to create many RelatedPermissionSqls.
     * @example
     * // Create many RelatedPermissionSqls
     * const relatedPermissionSql = await prisma.relatedPermissionSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatedPermissionSqlCreateManyArgs>(args?: SelectSubset<T, RelatedPermissionSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatedPermissionSqls and returns the data saved in the database.
     * @param {RelatedPermissionSqlCreateManyAndReturnArgs} args - Arguments to create many RelatedPermissionSqls.
     * @example
     * // Create many RelatedPermissionSqls
     * const relatedPermissionSql = await prisma.relatedPermissionSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatedPermissionSqls and only return the `parent_id`
     * const relatedPermissionSqlWithParent_idOnly = await prisma.relatedPermissionSql.createManyAndReturn({
     *   select: { parent_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatedPermissionSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatedPermissionSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RelatedPermissionSql.
     * @param {RelatedPermissionSqlDeleteArgs} args - Arguments to delete one RelatedPermissionSql.
     * @example
     * // Delete one RelatedPermissionSql
     * const RelatedPermissionSql = await prisma.relatedPermissionSql.delete({
     *   where: {
     *     // ... filter to delete one RelatedPermissionSql
     *   }
     * })
     * 
     */
    delete<T extends RelatedPermissionSqlDeleteArgs>(args: SelectSubset<T, RelatedPermissionSqlDeleteArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RelatedPermissionSql.
     * @param {RelatedPermissionSqlUpdateArgs} args - Arguments to update one RelatedPermissionSql.
     * @example
     * // Update one RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatedPermissionSqlUpdateArgs>(args: SelectSubset<T, RelatedPermissionSqlUpdateArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RelatedPermissionSqls.
     * @param {RelatedPermissionSqlDeleteManyArgs} args - Arguments to filter RelatedPermissionSqls to delete.
     * @example
     * // Delete a few RelatedPermissionSqls
     * const { count } = await prisma.relatedPermissionSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatedPermissionSqlDeleteManyArgs>(args?: SelectSubset<T, RelatedPermissionSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedPermissionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatedPermissionSqls
     * const relatedPermissionSql = await prisma.relatedPermissionSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatedPermissionSqlUpdateManyArgs>(args: SelectSubset<T, RelatedPermissionSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedPermissionSqls and returns the data updated in the database.
     * @param {RelatedPermissionSqlUpdateManyAndReturnArgs} args - Arguments to update many RelatedPermissionSqls.
     * @example
     * // Update many RelatedPermissionSqls
     * const relatedPermissionSql = await prisma.relatedPermissionSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatedPermissionSqls and only return the `parent_id`
     * const relatedPermissionSqlWithParent_idOnly = await prisma.relatedPermissionSql.updateManyAndReturn({
     *   select: { parent_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelatedPermissionSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatedPermissionSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RelatedPermissionSql.
     * @param {RelatedPermissionSqlUpsertArgs} args - Arguments to update or create a RelatedPermissionSql.
     * @example
     * // Update or create a RelatedPermissionSql
     * const relatedPermissionSql = await prisma.relatedPermissionSql.upsert({
     *   create: {
     *     // ... data to create a RelatedPermissionSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatedPermissionSql we want to update
     *   }
     * })
     */
    upsert<T extends RelatedPermissionSqlUpsertArgs>(args: SelectSubset<T, RelatedPermissionSqlUpsertArgs<ExtArgs>>): Prisma__RelatedPermissionSqlClient<$Result.GetResult<Prisma.$RelatedPermissionSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RelatedPermissionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlCountArgs} args - Arguments to filter RelatedPermissionSqls to count.
     * @example
     * // Count the number of RelatedPermissionSqls
     * const count = await prisma.relatedPermissionSql.count({
     *   where: {
     *     // ... the filter for the RelatedPermissionSqls we want to count
     *   }
     * })
    **/
    count<T extends RelatedPermissionSqlCountArgs>(
      args?: Subset<T, RelatedPermissionSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatedPermissionSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatedPermissionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelatedPermissionSqlAggregateArgs>(args: Subset<T, RelatedPermissionSqlAggregateArgs>): Prisma.PrismaPromise<GetRelatedPermissionSqlAggregateType<T>>

    /**
     * Group by RelatedPermissionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelatedPermissionSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatedPermissionSqlGroupByArgs['orderBy'] }
        : { orderBy?: RelatedPermissionSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelatedPermissionSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatedPermissionSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatedPermissionSql model
   */
  readonly fields: RelatedPermissionSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatedPermissionSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatedPermissionSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends PermissionSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSqlDefaultArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    child<T extends PermissionSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSqlDefaultArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelatedPermissionSql model
   */ 
  interface RelatedPermissionSqlFieldRefs {
    readonly parent_id: FieldRef<"RelatedPermissionSql", 'Int'>
    readonly child_id: FieldRef<"RelatedPermissionSql", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RelatedPermissionSql findUnique
   */
  export type RelatedPermissionSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionSql to fetch.
     */
    where: RelatedPermissionSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionSql findUniqueOrThrow
   */
  export type RelatedPermissionSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionSql to fetch.
     */
    where: RelatedPermissionSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionSql findFirst
   */
  export type RelatedPermissionSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionSql to fetch.
     */
    where?: RelatedPermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionSqls to fetch.
     */
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedPermissionSqls.
     */
    cursor?: RelatedPermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedPermissionSqls.
     */
    distinct?: RelatedPermissionSqlScalarFieldEnum | RelatedPermissionSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionSql findFirstOrThrow
   */
  export type RelatedPermissionSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionSql to fetch.
     */
    where?: RelatedPermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionSqls to fetch.
     */
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedPermissionSqls.
     */
    cursor?: RelatedPermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedPermissionSqls.
     */
    distinct?: RelatedPermissionSqlScalarFieldEnum | RelatedPermissionSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionSql findMany
   */
  export type RelatedPermissionSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionSqls to fetch.
     */
    where?: RelatedPermissionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionSqls to fetch.
     */
    orderBy?: RelatedPermissionSqlOrderByWithRelationInput | RelatedPermissionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatedPermissionSqls.
     */
    cursor?: RelatedPermissionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionSqls.
     */
    skip?: number
    distinct?: RelatedPermissionSqlScalarFieldEnum | RelatedPermissionSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionSql create
   */
  export type RelatedPermissionSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatedPermissionSql.
     */
    data: XOR<RelatedPermissionSqlCreateInput, RelatedPermissionSqlUncheckedCreateInput>
  }

  /**
   * RelatedPermissionSql createMany
   */
  export type RelatedPermissionSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatedPermissionSqls.
     */
    data: RelatedPermissionSqlCreateManyInput | RelatedPermissionSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatedPermissionSql createManyAndReturn
   */
  export type RelatedPermissionSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * The data used to create many RelatedPermissionSqls.
     */
    data: RelatedPermissionSqlCreateManyInput | RelatedPermissionSqlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedPermissionSql update
   */
  export type RelatedPermissionSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatedPermissionSql.
     */
    data: XOR<RelatedPermissionSqlUpdateInput, RelatedPermissionSqlUncheckedUpdateInput>
    /**
     * Choose, which RelatedPermissionSql to update.
     */
    where: RelatedPermissionSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionSql updateMany
   */
  export type RelatedPermissionSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatedPermissionSqls.
     */
    data: XOR<RelatedPermissionSqlUpdateManyMutationInput, RelatedPermissionSqlUncheckedUpdateManyInput>
    /**
     * Filter which RelatedPermissionSqls to update
     */
    where?: RelatedPermissionSqlWhereInput
    limit?: number
  }

  /**
   * RelatedPermissionSql updateManyAndReturn
   */
  export type RelatedPermissionSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * The data used to update RelatedPermissionSqls.
     */
    data: XOR<RelatedPermissionSqlUpdateManyMutationInput, RelatedPermissionSqlUncheckedUpdateManyInput>
    /**
     * Filter which RelatedPermissionSqls to update
     */
    where?: RelatedPermissionSqlWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatedPermissionSql upsert
   */
  export type RelatedPermissionSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatedPermissionSql to update in case it exists.
     */
    where: RelatedPermissionSqlWhereUniqueInput
    /**
     * In case the RelatedPermissionSql found by the `where` argument doesn't exist, create a new RelatedPermissionSql with this data.
     */
    create: XOR<RelatedPermissionSqlCreateInput, RelatedPermissionSqlUncheckedCreateInput>
    /**
     * In case the RelatedPermissionSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatedPermissionSqlUpdateInput, RelatedPermissionSqlUncheckedUpdateInput>
  }

  /**
   * RelatedPermissionSql delete
   */
  export type RelatedPermissionSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
    /**
     * Filter which RelatedPermissionSql to delete.
     */
    where: RelatedPermissionSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionSql deleteMany
   */
  export type RelatedPermissionSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedPermissionSqls to delete
     */
    where?: RelatedPermissionSqlWhereInput
    limit?: number
  }

  /**
   * RelatedPermissionSql without action
   */
  export type RelatedPermissionSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionSql
     */
    select?: RelatedPermissionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionSql
     */
    omit?: RelatedPermissionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionSqlInclude<ExtArgs> | null
  }


  /**
   * Model RoleSql
   */

  export type AggregateRoleSql = {
    _count: RoleSqlCountAggregateOutputType | null
    _avg: RoleSqlAvgAggregateOutputType | null
    _sum: RoleSqlSumAggregateOutputType | null
    _min: RoleSqlMinAggregateOutputType | null
    _max: RoleSqlMaxAggregateOutputType | null
  }

  export type RoleSqlAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSqlSumAggregateOutputType = {
    id: number | null
  }

  export type RoleSqlMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    uuid: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleSqlMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    uuid: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    uuid: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleSqlAvgAggregateInputType = {
    id?: true
  }

  export type RoleSqlSumAggregateInputType = {
    id?: true
  }

  export type RoleSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleSql to aggregate.
     */
    where?: RoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleSqls to fetch.
     */
    orderBy?: RoleSqlOrderByWithRelationInput | RoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleSqls
    **/
    _count?: true | RoleSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleSqlMaxAggregateInputType
  }

  export type GetRoleSqlAggregateType<T extends RoleSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleSql[P]>
      : GetScalarType<T[P], AggregateRoleSql[P]>
  }




  export type RoleSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleSqlWhereInput
    orderBy?: RoleSqlOrderByWithAggregationInput | RoleSqlOrderByWithAggregationInput[]
    by: RoleSqlScalarFieldEnum[] | RoleSqlScalarFieldEnum
    having?: RoleSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleSqlCountAggregateInputType | true
    _avg?: RoleSqlAvgAggregateInputType
    _sum?: RoleSqlSumAggregateInputType
    _min?: RoleSqlMinAggregateInputType
    _max?: RoleSqlMaxAggregateInputType
  }

  export type RoleSqlGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    uuid: string
    created_at: Date
    updated_at: Date
    _count: RoleSqlCountAggregateOutputType | null
    _avg: RoleSqlAvgAggregateOutputType | null
    _sum: RoleSqlSumAggregateOutputType | null
    _min: RoleSqlMinAggregateOutputType | null
    _max: RoleSqlMaxAggregateOutputType | null
  }

  type GetRoleSqlGroupByPayload<T extends RoleSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleSqlGroupByOutputType[P]>
            : GetScalarType<T[P], RoleSqlGroupByOutputType[P]>
        }
      >
    >


  export type RoleSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
    permission_roles?: boolean | RoleSql$permission_rolesArgs<ExtArgs>
    users?: boolean | RoleSql$usersArgs<ExtArgs>
    _count?: boolean | RoleSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleSql"]>

  export type RoleSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roleSql"]>

  export type RoleSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roleSql"]>

  export type RoleSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "uuid" | "created_at" | "updated_at", ExtArgs["result"]["roleSql"]>
  export type RoleSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | RoleSql$permission_rolesArgs<ExtArgs>
    users?: boolean | RoleSql$usersArgs<ExtArgs>
    _count?: boolean | RoleSqlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoleSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleSql"
    objects: {
      permission_roles: Prisma.$PermissionRoleSqlPayload<ExtArgs>[]
      users: Prisma.$UserRoleSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      uuid: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roleSql"]>
    composites: {}
  }

  type RoleSqlGetPayload<S extends boolean | null | undefined | RoleSqlDefaultArgs> = $Result.GetResult<Prisma.$RoleSqlPayload, S>

  type RoleSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleSqlCountAggregateInputType | true
    }

  export interface RoleSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleSql'], meta: { name: 'RoleSql' } }
    /**
     * Find zero or one RoleSql that matches the filter.
     * @param {RoleSqlFindUniqueArgs} args - Arguments to find a RoleSql
     * @example
     * // Get one RoleSql
     * const roleSql = await prisma.roleSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleSqlFindUniqueArgs>(args: SelectSubset<T, RoleSqlFindUniqueArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RoleSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleSqlFindUniqueOrThrowArgs} args - Arguments to find a RoleSql
     * @example
     * // Get one RoleSql
     * const roleSql = await prisma.roleSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RoleSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlFindFirstArgs} args - Arguments to find a RoleSql
     * @example
     * // Get one RoleSql
     * const roleSql = await prisma.roleSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleSqlFindFirstArgs>(args?: SelectSubset<T, RoleSqlFindFirstArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RoleSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlFindFirstOrThrowArgs} args - Arguments to find a RoleSql
     * @example
     * // Get one RoleSql
     * const roleSql = await prisma.roleSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoleSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleSqls
     * const roleSqls = await prisma.roleSql.findMany()
     * 
     * // Get first 10 RoleSqls
     * const roleSqls = await prisma.roleSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleSqlWithIdOnly = await prisma.roleSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleSqlFindManyArgs>(args?: SelectSubset<T, RoleSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RoleSql.
     * @param {RoleSqlCreateArgs} args - Arguments to create a RoleSql.
     * @example
     * // Create one RoleSql
     * const RoleSql = await prisma.roleSql.create({
     *   data: {
     *     // ... data to create a RoleSql
     *   }
     * })
     * 
     */
    create<T extends RoleSqlCreateArgs>(args: SelectSubset<T, RoleSqlCreateArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RoleSqls.
     * @param {RoleSqlCreateManyArgs} args - Arguments to create many RoleSqls.
     * @example
     * // Create many RoleSqls
     * const roleSql = await prisma.roleSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleSqlCreateManyArgs>(args?: SelectSubset<T, RoleSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoleSqls and returns the data saved in the database.
     * @param {RoleSqlCreateManyAndReturnArgs} args - Arguments to create many RoleSqls.
     * @example
     * // Create many RoleSqls
     * const roleSql = await prisma.roleSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoleSqls and only return the `id`
     * const roleSqlWithIdOnly = await prisma.roleSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RoleSql.
     * @param {RoleSqlDeleteArgs} args - Arguments to delete one RoleSql.
     * @example
     * // Delete one RoleSql
     * const RoleSql = await prisma.roleSql.delete({
     *   where: {
     *     // ... filter to delete one RoleSql
     *   }
     * })
     * 
     */
    delete<T extends RoleSqlDeleteArgs>(args: SelectSubset<T, RoleSqlDeleteArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RoleSql.
     * @param {RoleSqlUpdateArgs} args - Arguments to update one RoleSql.
     * @example
     * // Update one RoleSql
     * const roleSql = await prisma.roleSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleSqlUpdateArgs>(args: SelectSubset<T, RoleSqlUpdateArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RoleSqls.
     * @param {RoleSqlDeleteManyArgs} args - Arguments to filter RoleSqls to delete.
     * @example
     * // Delete a few RoleSqls
     * const { count } = await prisma.roleSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleSqlDeleteManyArgs>(args?: SelectSubset<T, RoleSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleSqls
     * const roleSql = await prisma.roleSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleSqlUpdateManyArgs>(args: SelectSubset<T, RoleSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleSqls and returns the data updated in the database.
     * @param {RoleSqlUpdateManyAndReturnArgs} args - Arguments to update many RoleSqls.
     * @example
     * // Update many RoleSqls
     * const roleSql = await prisma.roleSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoleSqls and only return the `id`
     * const roleSqlWithIdOnly = await prisma.roleSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RoleSql.
     * @param {RoleSqlUpsertArgs} args - Arguments to update or create a RoleSql.
     * @example
     * // Update or create a RoleSql
     * const roleSql = await prisma.roleSql.upsert({
     *   create: {
     *     // ... data to create a RoleSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleSql we want to update
     *   }
     * })
     */
    upsert<T extends RoleSqlUpsertArgs>(args: SelectSubset<T, RoleSqlUpsertArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlCountArgs} args - Arguments to filter RoleSqls to count.
     * @example
     * // Count the number of RoleSqls
     * const count = await prisma.roleSql.count({
     *   where: {
     *     // ... the filter for the RoleSqls we want to count
     *   }
     * })
    **/
    count<T extends RoleSqlCountArgs>(
      args?: Subset<T, RoleSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleSqlAggregateArgs>(args: Subset<T, RoleSqlAggregateArgs>): Prisma.PrismaPromise<GetRoleSqlAggregateType<T>>

    /**
     * Group by RoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleSqlGroupByArgs['orderBy'] }
        : { orderBy?: RoleSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleSql model
   */
  readonly fields: RoleSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission_roles<T extends RoleSql$permission_rolesArgs<ExtArgs> = {}>(args?: Subset<T, RoleSql$permission_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends RoleSql$usersArgs<ExtArgs> = {}>(args?: Subset<T, RoleSql$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoleSql model
   */ 
  interface RoleSqlFieldRefs {
    readonly id: FieldRef<"RoleSql", 'Int'>
    readonly name: FieldRef<"RoleSql", 'String'>
    readonly desc: FieldRef<"RoleSql", 'String'>
    readonly uuid: FieldRef<"RoleSql", 'String'>
    readonly created_at: FieldRef<"RoleSql", 'DateTime'>
    readonly updated_at: FieldRef<"RoleSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleSql findUnique
   */
  export type RoleSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleSql to fetch.
     */
    where: RoleSqlWhereUniqueInput
  }

  /**
   * RoleSql findUniqueOrThrow
   */
  export type RoleSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleSql to fetch.
     */
    where: RoleSqlWhereUniqueInput
  }

  /**
   * RoleSql findFirst
   */
  export type RoleSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleSql to fetch.
     */
    where?: RoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleSqls to fetch.
     */
    orderBy?: RoleSqlOrderByWithRelationInput | RoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleSqls.
     */
    cursor?: RoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleSqls.
     */
    distinct?: RoleSqlScalarFieldEnum | RoleSqlScalarFieldEnum[]
  }

  /**
   * RoleSql findFirstOrThrow
   */
  export type RoleSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleSql to fetch.
     */
    where?: RoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleSqls to fetch.
     */
    orderBy?: RoleSqlOrderByWithRelationInput | RoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleSqls.
     */
    cursor?: RoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleSqls.
     */
    distinct?: RoleSqlScalarFieldEnum | RoleSqlScalarFieldEnum[]
  }

  /**
   * RoleSql findMany
   */
  export type RoleSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleSqls to fetch.
     */
    where?: RoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleSqls to fetch.
     */
    orderBy?: RoleSqlOrderByWithRelationInput | RoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleSqls.
     */
    cursor?: RoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleSqls.
     */
    skip?: number
    distinct?: RoleSqlScalarFieldEnum | RoleSqlScalarFieldEnum[]
  }

  /**
   * RoleSql create
   */
  export type RoleSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleSql.
     */
    data: XOR<RoleSqlCreateInput, RoleSqlUncheckedCreateInput>
  }

  /**
   * RoleSql createMany
   */
  export type RoleSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleSqls.
     */
    data: RoleSqlCreateManyInput | RoleSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleSql createManyAndReturn
   */
  export type RoleSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * The data used to create many RoleSqls.
     */
    data: RoleSqlCreateManyInput | RoleSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleSql update
   */
  export type RoleSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleSql.
     */
    data: XOR<RoleSqlUpdateInput, RoleSqlUncheckedUpdateInput>
    /**
     * Choose, which RoleSql to update.
     */
    where: RoleSqlWhereUniqueInput
  }

  /**
   * RoleSql updateMany
   */
  export type RoleSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleSqls.
     */
    data: XOR<RoleSqlUpdateManyMutationInput, RoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which RoleSqls to update
     */
    where?: RoleSqlWhereInput
    limit?: number
  }

  /**
   * RoleSql updateManyAndReturn
   */
  export type RoleSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * The data used to update RoleSqls.
     */
    data: XOR<RoleSqlUpdateManyMutationInput, RoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which RoleSqls to update
     */
    where?: RoleSqlWhereInput
    limit?: number
  }

  /**
   * RoleSql upsert
   */
  export type RoleSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleSql to update in case it exists.
     */
    where: RoleSqlWhereUniqueInput
    /**
     * In case the RoleSql found by the `where` argument doesn't exist, create a new RoleSql with this data.
     */
    create: XOR<RoleSqlCreateInput, RoleSqlUncheckedCreateInput>
    /**
     * In case the RoleSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleSqlUpdateInput, RoleSqlUncheckedUpdateInput>
  }

  /**
   * RoleSql delete
   */
  export type RoleSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
    /**
     * Filter which RoleSql to delete.
     */
    where: RoleSqlWhereUniqueInput
  }

  /**
   * RoleSql deleteMany
   */
  export type RoleSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleSqls to delete
     */
    where?: RoleSqlWhereInput
    limit?: number
  }

  /**
   * RoleSql.permission_roles
   */
  export type RoleSql$permission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    where?: PermissionRoleSqlWhereInput
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    cursor?: PermissionRoleSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionRoleSqlScalarFieldEnum | PermissionRoleSqlScalarFieldEnum[]
  }

  /**
   * RoleSql.users
   */
  export type RoleSql$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    where?: UserRoleSqlWhereInput
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    cursor?: UserRoleSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleSqlScalarFieldEnum | UserRoleSqlScalarFieldEnum[]
  }

  /**
   * RoleSql without action
   */
  export type RoleSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleSql
     */
    select?: RoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleSql
     */
    omit?: RoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleSqlInclude<ExtArgs> | null
  }


  /**
   * Model PermissionRoleSql
   */

  export type AggregatePermissionRoleSql = {
    _count: PermissionRoleSqlCountAggregateOutputType | null
    _avg: PermissionRoleSqlAvgAggregateOutputType | null
    _sum: PermissionRoleSqlSumAggregateOutputType | null
    _min: PermissionRoleSqlMinAggregateOutputType | null
    _max: PermissionRoleSqlMaxAggregateOutputType | null
  }

  export type PermissionRoleSqlAvgAggregateOutputType = {
    permission_id: number | null
    role_id: number | null
  }

  export type PermissionRoleSqlSumAggregateOutputType = {
    permission_id: number | null
    role_id: number | null
  }

  export type PermissionRoleSqlMinAggregateOutputType = {
    permission_id: number | null
    role_id: number | null
  }

  export type PermissionRoleSqlMaxAggregateOutputType = {
    permission_id: number | null
    role_id: number | null
  }

  export type PermissionRoleSqlCountAggregateOutputType = {
    permission_id: number
    role_id: number
    _all: number
  }


  export type PermissionRoleSqlAvgAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleSqlSumAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleSqlMinAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleSqlMaxAggregateInputType = {
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleSqlCountAggregateInputType = {
    permission_id?: true
    role_id?: true
    _all?: true
  }

  export type PermissionRoleSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionRoleSql to aggregate.
     */
    where?: PermissionRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleSqls to fetch.
     */
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionRoleSqls
    **/
    _count?: true | PermissionRoleSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionRoleSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionRoleSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionRoleSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionRoleSqlMaxAggregateInputType
  }

  export type GetPermissionRoleSqlAggregateType<T extends PermissionRoleSqlAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionRoleSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionRoleSql[P]>
      : GetScalarType<T[P], AggregatePermissionRoleSql[P]>
  }




  export type PermissionRoleSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleSqlWhereInput
    orderBy?: PermissionRoleSqlOrderByWithAggregationInput | PermissionRoleSqlOrderByWithAggregationInput[]
    by: PermissionRoleSqlScalarFieldEnum[] | PermissionRoleSqlScalarFieldEnum
    having?: PermissionRoleSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionRoleSqlCountAggregateInputType | true
    _avg?: PermissionRoleSqlAvgAggregateInputType
    _sum?: PermissionRoleSqlSumAggregateInputType
    _min?: PermissionRoleSqlMinAggregateInputType
    _max?: PermissionRoleSqlMaxAggregateInputType
  }

  export type PermissionRoleSqlGroupByOutputType = {
    permission_id: number
    role_id: number
    _count: PermissionRoleSqlCountAggregateOutputType | null
    _avg: PermissionRoleSqlAvgAggregateOutputType | null
    _sum: PermissionRoleSqlSumAggregateOutputType | null
    _min: PermissionRoleSqlMinAggregateOutputType | null
    _max: PermissionRoleSqlMaxAggregateOutputType | null
  }

  type GetPermissionRoleSqlGroupByPayload<T extends PermissionRoleSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionRoleSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionRoleSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionRoleSqlGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionRoleSqlGroupByOutputType[P]>
        }
      >
    >


  export type PermissionRoleSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permission_id?: boolean
    role_id?: boolean
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionRoleSql"]>

  export type PermissionRoleSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permission_id?: boolean
    role_id?: boolean
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionRoleSql"]>

  export type PermissionRoleSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permission_id?: boolean
    role_id?: boolean
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionRoleSql"]>

  export type PermissionRoleSqlSelectScalar = {
    permission_id?: boolean
    role_id?: boolean
  }

  export type PermissionRoleSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permission_id" | "role_id", ExtArgs["result"]["permissionRoleSql"]>
  export type PermissionRoleSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }
  export type PermissionRoleSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }
  export type PermissionRoleSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }

  export type $PermissionRoleSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionRoleSql"
    objects: {
      permission: Prisma.$PermissionSqlPayload<ExtArgs>
      role: Prisma.$RoleSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      permission_id: number
      role_id: number
    }, ExtArgs["result"]["permissionRoleSql"]>
    composites: {}
  }

  type PermissionRoleSqlGetPayload<S extends boolean | null | undefined | PermissionRoleSqlDefaultArgs> = $Result.GetResult<Prisma.$PermissionRoleSqlPayload, S>

  type PermissionRoleSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionRoleSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionRoleSqlCountAggregateInputType | true
    }

  export interface PermissionRoleSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionRoleSql'], meta: { name: 'PermissionRoleSql' } }
    /**
     * Find zero or one PermissionRoleSql that matches the filter.
     * @param {PermissionRoleSqlFindUniqueArgs} args - Arguments to find a PermissionRoleSql
     * @example
     * // Get one PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionRoleSqlFindUniqueArgs>(args: SelectSubset<T, PermissionRoleSqlFindUniqueArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PermissionRoleSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionRoleSqlFindUniqueOrThrowArgs} args - Arguments to find a PermissionRoleSql
     * @example
     * // Get one PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionRoleSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionRoleSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionRoleSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlFindFirstArgs} args - Arguments to find a PermissionRoleSql
     * @example
     * // Get one PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionRoleSqlFindFirstArgs>(args?: SelectSubset<T, PermissionRoleSqlFindFirstArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionRoleSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlFindFirstOrThrowArgs} args - Arguments to find a PermissionRoleSql
     * @example
     * // Get one PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionRoleSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionRoleSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionRoleSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionRoleSqls
     * const permissionRoleSqls = await prisma.permissionRoleSql.findMany()
     * 
     * // Get first 10 PermissionRoleSqls
     * const permissionRoleSqls = await prisma.permissionRoleSql.findMany({ take: 10 })
     * 
     * // Only select the `permission_id`
     * const permissionRoleSqlWithPermission_idOnly = await prisma.permissionRoleSql.findMany({ select: { permission_id: true } })
     * 
     */
    findMany<T extends PermissionRoleSqlFindManyArgs>(args?: SelectSubset<T, PermissionRoleSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PermissionRoleSql.
     * @param {PermissionRoleSqlCreateArgs} args - Arguments to create a PermissionRoleSql.
     * @example
     * // Create one PermissionRoleSql
     * const PermissionRoleSql = await prisma.permissionRoleSql.create({
     *   data: {
     *     // ... data to create a PermissionRoleSql
     *   }
     * })
     * 
     */
    create<T extends PermissionRoleSqlCreateArgs>(args: SelectSubset<T, PermissionRoleSqlCreateArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PermissionRoleSqls.
     * @param {PermissionRoleSqlCreateManyArgs} args - Arguments to create many PermissionRoleSqls.
     * @example
     * // Create many PermissionRoleSqls
     * const permissionRoleSql = await prisma.permissionRoleSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionRoleSqlCreateManyArgs>(args?: SelectSubset<T, PermissionRoleSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionRoleSqls and returns the data saved in the database.
     * @param {PermissionRoleSqlCreateManyAndReturnArgs} args - Arguments to create many PermissionRoleSqls.
     * @example
     * // Create many PermissionRoleSqls
     * const permissionRoleSql = await prisma.permissionRoleSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionRoleSqls and only return the `permission_id`
     * const permissionRoleSqlWithPermission_idOnly = await prisma.permissionRoleSql.createManyAndReturn({
     *   select: { permission_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionRoleSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionRoleSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PermissionRoleSql.
     * @param {PermissionRoleSqlDeleteArgs} args - Arguments to delete one PermissionRoleSql.
     * @example
     * // Delete one PermissionRoleSql
     * const PermissionRoleSql = await prisma.permissionRoleSql.delete({
     *   where: {
     *     // ... filter to delete one PermissionRoleSql
     *   }
     * })
     * 
     */
    delete<T extends PermissionRoleSqlDeleteArgs>(args: SelectSubset<T, PermissionRoleSqlDeleteArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PermissionRoleSql.
     * @param {PermissionRoleSqlUpdateArgs} args - Arguments to update one PermissionRoleSql.
     * @example
     * // Update one PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionRoleSqlUpdateArgs>(args: SelectSubset<T, PermissionRoleSqlUpdateArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PermissionRoleSqls.
     * @param {PermissionRoleSqlDeleteManyArgs} args - Arguments to filter PermissionRoleSqls to delete.
     * @example
     * // Delete a few PermissionRoleSqls
     * const { count } = await prisma.permissionRoleSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionRoleSqlDeleteManyArgs>(args?: SelectSubset<T, PermissionRoleSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionRoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionRoleSqls
     * const permissionRoleSql = await prisma.permissionRoleSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionRoleSqlUpdateManyArgs>(args: SelectSubset<T, PermissionRoleSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionRoleSqls and returns the data updated in the database.
     * @param {PermissionRoleSqlUpdateManyAndReturnArgs} args - Arguments to update many PermissionRoleSqls.
     * @example
     * // Update many PermissionRoleSqls
     * const permissionRoleSql = await prisma.permissionRoleSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PermissionRoleSqls and only return the `permission_id`
     * const permissionRoleSqlWithPermission_idOnly = await prisma.permissionRoleSql.updateManyAndReturn({
     *   select: { permission_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionRoleSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionRoleSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PermissionRoleSql.
     * @param {PermissionRoleSqlUpsertArgs} args - Arguments to update or create a PermissionRoleSql.
     * @example
     * // Update or create a PermissionRoleSql
     * const permissionRoleSql = await prisma.permissionRoleSql.upsert({
     *   create: {
     *     // ... data to create a PermissionRoleSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionRoleSql we want to update
     *   }
     * })
     */
    upsert<T extends PermissionRoleSqlUpsertArgs>(args: SelectSubset<T, PermissionRoleSqlUpsertArgs<ExtArgs>>): Prisma__PermissionRoleSqlClient<$Result.GetResult<Prisma.$PermissionRoleSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PermissionRoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlCountArgs} args - Arguments to filter PermissionRoleSqls to count.
     * @example
     * // Count the number of PermissionRoleSqls
     * const count = await prisma.permissionRoleSql.count({
     *   where: {
     *     // ... the filter for the PermissionRoleSqls we want to count
     *   }
     * })
    **/
    count<T extends PermissionRoleSqlCountArgs>(
      args?: Subset<T, PermissionRoleSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionRoleSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionRoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionRoleSqlAggregateArgs>(args: Subset<T, PermissionRoleSqlAggregateArgs>): Prisma.PrismaPromise<GetPermissionRoleSqlAggregateType<T>>

    /**
     * Group by PermissionRoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionRoleSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionRoleSqlGroupByArgs['orderBy'] }
        : { orderBy?: PermissionRoleSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionRoleSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionRoleSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionRoleSql model
   */
  readonly fields: PermissionRoleSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionRoleSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionRoleSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionSqlDefaultArgs<ExtArgs>>): Prisma__PermissionSqlClient<$Result.GetResult<Prisma.$PermissionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends RoleSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleSqlDefaultArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermissionRoleSql model
   */ 
  interface PermissionRoleSqlFieldRefs {
    readonly permission_id: FieldRef<"PermissionRoleSql", 'Int'>
    readonly role_id: FieldRef<"PermissionRoleSql", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PermissionRoleSql findUnique
   */
  export type PermissionRoleSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleSql to fetch.
     */
    where: PermissionRoleSqlWhereUniqueInput
  }

  /**
   * PermissionRoleSql findUniqueOrThrow
   */
  export type PermissionRoleSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleSql to fetch.
     */
    where: PermissionRoleSqlWhereUniqueInput
  }

  /**
   * PermissionRoleSql findFirst
   */
  export type PermissionRoleSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleSql to fetch.
     */
    where?: PermissionRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleSqls to fetch.
     */
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionRoleSqls.
     */
    cursor?: PermissionRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionRoleSqls.
     */
    distinct?: PermissionRoleSqlScalarFieldEnum | PermissionRoleSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleSql findFirstOrThrow
   */
  export type PermissionRoleSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleSql to fetch.
     */
    where?: PermissionRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleSqls to fetch.
     */
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionRoleSqls.
     */
    cursor?: PermissionRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionRoleSqls.
     */
    distinct?: PermissionRoleSqlScalarFieldEnum | PermissionRoleSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleSql findMany
   */
  export type PermissionRoleSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleSqls to fetch.
     */
    where?: PermissionRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleSqls to fetch.
     */
    orderBy?: PermissionRoleSqlOrderByWithRelationInput | PermissionRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionRoleSqls.
     */
    cursor?: PermissionRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleSqls.
     */
    skip?: number
    distinct?: PermissionRoleSqlScalarFieldEnum | PermissionRoleSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleSql create
   */
  export type PermissionRoleSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionRoleSql.
     */
    data: XOR<PermissionRoleSqlCreateInput, PermissionRoleSqlUncheckedCreateInput>
  }

  /**
   * PermissionRoleSql createMany
   */
  export type PermissionRoleSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionRoleSqls.
     */
    data: PermissionRoleSqlCreateManyInput | PermissionRoleSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionRoleSql createManyAndReturn
   */
  export type PermissionRoleSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * The data used to create many PermissionRoleSqls.
     */
    data: PermissionRoleSqlCreateManyInput | PermissionRoleSqlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionRoleSql update
   */
  export type PermissionRoleSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionRoleSql.
     */
    data: XOR<PermissionRoleSqlUpdateInput, PermissionRoleSqlUncheckedUpdateInput>
    /**
     * Choose, which PermissionRoleSql to update.
     */
    where: PermissionRoleSqlWhereUniqueInput
  }

  /**
   * PermissionRoleSql updateMany
   */
  export type PermissionRoleSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionRoleSqls.
     */
    data: XOR<PermissionRoleSqlUpdateManyMutationInput, PermissionRoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionRoleSqls to update
     */
    where?: PermissionRoleSqlWhereInput
    limit?: number
  }

  /**
   * PermissionRoleSql updateManyAndReturn
   */
  export type PermissionRoleSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * The data used to update PermissionRoleSqls.
     */
    data: XOR<PermissionRoleSqlUpdateManyMutationInput, PermissionRoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionRoleSqls to update
     */
    where?: PermissionRoleSqlWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionRoleSql upsert
   */
  export type PermissionRoleSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionRoleSql to update in case it exists.
     */
    where: PermissionRoleSqlWhereUniqueInput
    /**
     * In case the PermissionRoleSql found by the `where` argument doesn't exist, create a new PermissionRoleSql with this data.
     */
    create: XOR<PermissionRoleSqlCreateInput, PermissionRoleSqlUncheckedCreateInput>
    /**
     * In case the PermissionRoleSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionRoleSqlUpdateInput, PermissionRoleSqlUncheckedUpdateInput>
  }

  /**
   * PermissionRoleSql delete
   */
  export type PermissionRoleSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
    /**
     * Filter which PermissionRoleSql to delete.
     */
    where: PermissionRoleSqlWhereUniqueInput
  }

  /**
   * PermissionRoleSql deleteMany
   */
  export type PermissionRoleSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionRoleSqls to delete
     */
    where?: PermissionRoleSqlWhereInput
    limit?: number
  }

  /**
   * PermissionRoleSql without action
   */
  export type PermissionRoleSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleSql
     */
    select?: PermissionRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleSql
     */
    omit?: PermissionRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserSql
   */

  export type AggregateUserSql = {
    _count: UserSqlCountAggregateOutputType | null
    _avg: UserSqlAvgAggregateOutputType | null
    _sum: UserSqlSumAggregateOutputType | null
    _min: UserSqlMinAggregateOutputType | null
    _max: UserSqlMaxAggregateOutputType | null
  }

  export type UserSqlAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSqlSumAggregateOutputType = {
    id: number | null
  }

  export type UserSqlMinAggregateOutputType = {
    id: number | null
    username: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSqlMaxAggregateOutputType = {
    id: number | null
    username: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSqlCountAggregateOutputType = {
    id: number
    username: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserSqlAvgAggregateInputType = {
    id?: true
  }

  export type UserSqlSumAggregateInputType = {
    id?: true
  }

  export type UserSqlMinAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSqlMaxAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSqlCountAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSql to aggregate.
     */
    where?: UserSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSqls to fetch.
     */
    orderBy?: UserSqlOrderByWithRelationInput | UserSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSqls
    **/
    _count?: true | UserSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSqlMaxAggregateInputType
  }

  export type GetUserSqlAggregateType<T extends UserSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSql[P]>
      : GetScalarType<T[P], AggregateUserSql[P]>
  }




  export type UserSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSqlWhereInput
    orderBy?: UserSqlOrderByWithAggregationInput | UserSqlOrderByWithAggregationInput[]
    by: UserSqlScalarFieldEnum[] | UserSqlScalarFieldEnum
    having?: UserSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSqlCountAggregateInputType | true
    _avg?: UserSqlAvgAggregateInputType
    _sum?: UserSqlSumAggregateInputType
    _min?: UserSqlMinAggregateInputType
    _max?: UserSqlMaxAggregateInputType
  }

  export type UserSqlGroupByOutputType = {
    id: number
    username: string
    created_at: Date
    updated_at: Date
    _count: UserSqlCountAggregateOutputType | null
    _avg: UserSqlAvgAggregateOutputType | null
    _sum: UserSqlSumAggregateOutputType | null
    _min: UserSqlMinAggregateOutputType | null
    _max: UserSqlMaxAggregateOutputType | null
  }

  type GetUserSqlGroupByPayload<T extends UserSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | UserSql$rolesArgs<ExtArgs>
    sessions?: boolean | UserSql$sessionsArgs<ExtArgs>
    _count?: boolean | UserSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSql"]>

  export type UserSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["userSql"]>

  export type UserSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["userSql"]>

  export type UserSqlSelectScalar = {
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "created_at" | "updated_at", ExtArgs["result"]["userSql"]>
  export type UserSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserSql$rolesArgs<ExtArgs>
    sessions?: boolean | UserSql$sessionsArgs<ExtArgs>
    _count?: boolean | UserSqlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSql"
    objects: {
      roles: Prisma.$UserRoleSqlPayload<ExtArgs>[]
      sessions: Prisma.$UserSessionSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userSql"]>
    composites: {}
  }

  type UserSqlGetPayload<S extends boolean | null | undefined | UserSqlDefaultArgs> = $Result.GetResult<Prisma.$UserSqlPayload, S>

  type UserSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSqlCountAggregateInputType | true
    }

  export interface UserSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSql'], meta: { name: 'UserSql' } }
    /**
     * Find zero or one UserSql that matches the filter.
     * @param {UserSqlFindUniqueArgs} args - Arguments to find a UserSql
     * @example
     * // Get one UserSql
     * const userSql = await prisma.userSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSqlFindUniqueArgs>(args: SelectSubset<T, UserSqlFindUniqueArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSqlFindUniqueOrThrowArgs} args - Arguments to find a UserSql
     * @example
     * // Get one UserSql
     * const userSql = await prisma.userSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlFindFirstArgs} args - Arguments to find a UserSql
     * @example
     * // Get one UserSql
     * const userSql = await prisma.userSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSqlFindFirstArgs>(args?: SelectSubset<T, UserSqlFindFirstArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlFindFirstOrThrowArgs} args - Arguments to find a UserSql
     * @example
     * // Get one UserSql
     * const userSql = await prisma.userSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSqls
     * const userSqls = await prisma.userSql.findMany()
     * 
     * // Get first 10 UserSqls
     * const userSqls = await prisma.userSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSqlWithIdOnly = await prisma.userSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSqlFindManyArgs>(args?: SelectSubset<T, UserSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSql.
     * @param {UserSqlCreateArgs} args - Arguments to create a UserSql.
     * @example
     * // Create one UserSql
     * const UserSql = await prisma.userSql.create({
     *   data: {
     *     // ... data to create a UserSql
     *   }
     * })
     * 
     */
    create<T extends UserSqlCreateArgs>(args: SelectSubset<T, UserSqlCreateArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSqls.
     * @param {UserSqlCreateManyArgs} args - Arguments to create many UserSqls.
     * @example
     * // Create many UserSqls
     * const userSql = await prisma.userSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSqlCreateManyArgs>(args?: SelectSubset<T, UserSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSqls and returns the data saved in the database.
     * @param {UserSqlCreateManyAndReturnArgs} args - Arguments to create many UserSqls.
     * @example
     * // Create many UserSqls
     * const userSql = await prisma.userSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSqls and only return the `id`
     * const userSqlWithIdOnly = await prisma.userSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserSql.
     * @param {UserSqlDeleteArgs} args - Arguments to delete one UserSql.
     * @example
     * // Delete one UserSql
     * const UserSql = await prisma.userSql.delete({
     *   where: {
     *     // ... filter to delete one UserSql
     *   }
     * })
     * 
     */
    delete<T extends UserSqlDeleteArgs>(args: SelectSubset<T, UserSqlDeleteArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSql.
     * @param {UserSqlUpdateArgs} args - Arguments to update one UserSql.
     * @example
     * // Update one UserSql
     * const userSql = await prisma.userSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSqlUpdateArgs>(args: SelectSubset<T, UserSqlUpdateArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSqls.
     * @param {UserSqlDeleteManyArgs} args - Arguments to filter UserSqls to delete.
     * @example
     * // Delete a few UserSqls
     * const { count } = await prisma.userSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSqlDeleteManyArgs>(args?: SelectSubset<T, UserSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSqls
     * const userSql = await prisma.userSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSqlUpdateManyArgs>(args: SelectSubset<T, UserSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSqls and returns the data updated in the database.
     * @param {UserSqlUpdateManyAndReturnArgs} args - Arguments to update many UserSqls.
     * @example
     * // Update many UserSqls
     * const userSql = await prisma.userSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSqls and only return the `id`
     * const userSqlWithIdOnly = await prisma.userSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserSql.
     * @param {UserSqlUpsertArgs} args - Arguments to update or create a UserSql.
     * @example
     * // Update or create a UserSql
     * const userSql = await prisma.userSql.upsert({
     *   create: {
     *     // ... data to create a UserSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSql we want to update
     *   }
     * })
     */
    upsert<T extends UserSqlUpsertArgs>(args: SelectSubset<T, UserSqlUpsertArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlCountArgs} args - Arguments to filter UserSqls to count.
     * @example
     * // Count the number of UserSqls
     * const count = await prisma.userSql.count({
     *   where: {
     *     // ... the filter for the UserSqls we want to count
     *   }
     * })
    **/
    count<T extends UserSqlCountArgs>(
      args?: Subset<T, UserSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSqlAggregateArgs>(args: Subset<T, UserSqlAggregateArgs>): Prisma.PrismaPromise<GetUserSqlAggregateType<T>>

    /**
     * Group by UserSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSql model
   */
  readonly fields: UserSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends UserSql$rolesArgs<ExtArgs> = {}>(args?: Subset<T, UserSql$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    sessions<T extends UserSql$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, UserSql$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSql model
   */ 
  interface UserSqlFieldRefs {
    readonly id: FieldRef<"UserSql", 'Int'>
    readonly username: FieldRef<"UserSql", 'String'>
    readonly created_at: FieldRef<"UserSql", 'DateTime'>
    readonly updated_at: FieldRef<"UserSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSql findUnique
   */
  export type UserSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSql to fetch.
     */
    where: UserSqlWhereUniqueInput
  }

  /**
   * UserSql findUniqueOrThrow
   */
  export type UserSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSql to fetch.
     */
    where: UserSqlWhereUniqueInput
  }

  /**
   * UserSql findFirst
   */
  export type UserSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSql to fetch.
     */
    where?: UserSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSqls to fetch.
     */
    orderBy?: UserSqlOrderByWithRelationInput | UserSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSqls.
     */
    cursor?: UserSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSqls.
     */
    distinct?: UserSqlScalarFieldEnum | UserSqlScalarFieldEnum[]
  }

  /**
   * UserSql findFirstOrThrow
   */
  export type UserSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSql to fetch.
     */
    where?: UserSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSqls to fetch.
     */
    orderBy?: UserSqlOrderByWithRelationInput | UserSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSqls.
     */
    cursor?: UserSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSqls.
     */
    distinct?: UserSqlScalarFieldEnum | UserSqlScalarFieldEnum[]
  }

  /**
   * UserSql findMany
   */
  export type UserSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSqls to fetch.
     */
    where?: UserSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSqls to fetch.
     */
    orderBy?: UserSqlOrderByWithRelationInput | UserSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSqls.
     */
    cursor?: UserSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSqls.
     */
    skip?: number
    distinct?: UserSqlScalarFieldEnum | UserSqlScalarFieldEnum[]
  }

  /**
   * UserSql create
   */
  export type UserSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSql.
     */
    data: XOR<UserSqlCreateInput, UserSqlUncheckedCreateInput>
  }

  /**
   * UserSql createMany
   */
  export type UserSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSqls.
     */
    data: UserSqlCreateManyInput | UserSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSql createManyAndReturn
   */
  export type UserSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * The data used to create many UserSqls.
     */
    data: UserSqlCreateManyInput | UserSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSql update
   */
  export type UserSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSql.
     */
    data: XOR<UserSqlUpdateInput, UserSqlUncheckedUpdateInput>
    /**
     * Choose, which UserSql to update.
     */
    where: UserSqlWhereUniqueInput
  }

  /**
   * UserSql updateMany
   */
  export type UserSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSqls.
     */
    data: XOR<UserSqlUpdateManyMutationInput, UserSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserSqls to update
     */
    where?: UserSqlWhereInput
    limit?: number
  }

  /**
   * UserSql updateManyAndReturn
   */
  export type UserSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * The data used to update UserSqls.
     */
    data: XOR<UserSqlUpdateManyMutationInput, UserSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserSqls to update
     */
    where?: UserSqlWhereInput
    limit?: number
  }

  /**
   * UserSql upsert
   */
  export type UserSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSql to update in case it exists.
     */
    where: UserSqlWhereUniqueInput
    /**
     * In case the UserSql found by the `where` argument doesn't exist, create a new UserSql with this data.
     */
    create: XOR<UserSqlCreateInput, UserSqlUncheckedCreateInput>
    /**
     * In case the UserSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSqlUpdateInput, UserSqlUncheckedUpdateInput>
  }

  /**
   * UserSql delete
   */
  export type UserSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
    /**
     * Filter which UserSql to delete.
     */
    where: UserSqlWhereUniqueInput
  }

  /**
   * UserSql deleteMany
   */
  export type UserSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSqls to delete
     */
    where?: UserSqlWhereInput
    limit?: number
  }

  /**
   * UserSql.roles
   */
  export type UserSql$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    where?: UserRoleSqlWhereInput
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    cursor?: UserRoleSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleSqlScalarFieldEnum | UserRoleSqlScalarFieldEnum[]
  }

  /**
   * UserSql.sessions
   */
  export type UserSql$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    where?: UserSessionSqlWhereInput
    orderBy?: UserSessionSqlOrderByWithRelationInput | UserSessionSqlOrderByWithRelationInput[]
    cursor?: UserSessionSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionSqlScalarFieldEnum | UserSessionSqlScalarFieldEnum[]
  }

  /**
   * UserSql without action
   */
  export type UserSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSql
     */
    select?: UserSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSql
     */
    omit?: UserSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserRoleSql
   */

  export type AggregateUserRoleSql = {
    _count: UserRoleSqlCountAggregateOutputType | null
    _avg: UserRoleSqlAvgAggregateOutputType | null
    _sum: UserRoleSqlSumAggregateOutputType | null
    _min: UserRoleSqlMinAggregateOutputType | null
    _max: UserRoleSqlMaxAggregateOutputType | null
  }

  export type UserRoleSqlAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleSqlSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleSqlMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    uuid: string | null
  }

  export type UserRoleSqlMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    uuid: string | null
  }

  export type UserRoleSqlCountAggregateOutputType = {
    user_id: number
    role_id: number
    uuid: number
    _all: number
  }


  export type UserRoleSqlAvgAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleSqlSumAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleSqlMinAggregateInputType = {
    user_id?: true
    role_id?: true
    uuid?: true
  }

  export type UserRoleSqlMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    uuid?: true
  }

  export type UserRoleSqlCountAggregateInputType = {
    user_id?: true
    role_id?: true
    uuid?: true
    _all?: true
  }

  export type UserRoleSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleSql to aggregate.
     */
    where?: UserRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleSqls to fetch.
     */
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoleSqls
    **/
    _count?: true | UserRoleSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleSqlMaxAggregateInputType
  }

  export type GetUserRoleSqlAggregateType<T extends UserRoleSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRoleSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRoleSql[P]>
      : GetScalarType<T[P], AggregateUserRoleSql[P]>
  }




  export type UserRoleSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleSqlWhereInput
    orderBy?: UserRoleSqlOrderByWithAggregationInput | UserRoleSqlOrderByWithAggregationInput[]
    by: UserRoleSqlScalarFieldEnum[] | UserRoleSqlScalarFieldEnum
    having?: UserRoleSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleSqlCountAggregateInputType | true
    _avg?: UserRoleSqlAvgAggregateInputType
    _sum?: UserRoleSqlSumAggregateInputType
    _min?: UserRoleSqlMinAggregateInputType
    _max?: UserRoleSqlMaxAggregateInputType
  }

  export type UserRoleSqlGroupByOutputType = {
    user_id: number
    role_id: number
    uuid: string
    _count: UserRoleSqlCountAggregateOutputType | null
    _avg: UserRoleSqlAvgAggregateOutputType | null
    _sum: UserRoleSqlSumAggregateOutputType | null
    _min: UserRoleSqlMinAggregateOutputType | null
    _max: UserRoleSqlMaxAggregateOutputType | null
  }

  type GetUserRoleSqlGroupByPayload<T extends UserRoleSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleSql"]>

  export type UserRoleSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleSql"]>

  export type UserRoleSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleSql"]>

  export type UserRoleSqlSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
  }

  export type UserRoleSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id" | "uuid", ExtArgs["result"]["userRoleSql"]>
  export type UserRoleSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }
  export type UserRoleSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }
  export type UserRoleSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleSqlDefaultArgs<ExtArgs>
  }

  export type $UserRoleSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRoleSql"
    objects: {
      user: Prisma.$UserSqlPayload<ExtArgs>
      role: Prisma.$RoleSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
      uuid: string
    }, ExtArgs["result"]["userRoleSql"]>
    composites: {}
  }

  type UserRoleSqlGetPayload<S extends boolean | null | undefined | UserRoleSqlDefaultArgs> = $Result.GetResult<Prisma.$UserRoleSqlPayload, S>

  type UserRoleSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleSqlCountAggregateInputType | true
    }

  export interface UserRoleSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRoleSql'], meta: { name: 'UserRoleSql' } }
    /**
     * Find zero or one UserRoleSql that matches the filter.
     * @param {UserRoleSqlFindUniqueArgs} args - Arguments to find a UserRoleSql
     * @example
     * // Get one UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleSqlFindUniqueArgs>(args: SelectSubset<T, UserRoleSqlFindUniqueArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserRoleSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleSqlFindUniqueOrThrowArgs} args - Arguments to find a UserRoleSql
     * @example
     * // Get one UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserRoleSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlFindFirstArgs} args - Arguments to find a UserRoleSql
     * @example
     * // Get one UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleSqlFindFirstArgs>(args?: SelectSubset<T, UserRoleSqlFindFirstArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserRoleSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlFindFirstOrThrowArgs} args - Arguments to find a UserRoleSql
     * @example
     * // Get one UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserRoleSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoleSqls
     * const userRoleSqls = await prisma.userRoleSql.findMany()
     * 
     * // Get first 10 UserRoleSqls
     * const userRoleSqls = await prisma.userRoleSql.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userRoleSqlWithUser_idOnly = await prisma.userRoleSql.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserRoleSqlFindManyArgs>(args?: SelectSubset<T, UserRoleSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserRoleSql.
     * @param {UserRoleSqlCreateArgs} args - Arguments to create a UserRoleSql.
     * @example
     * // Create one UserRoleSql
     * const UserRoleSql = await prisma.userRoleSql.create({
     *   data: {
     *     // ... data to create a UserRoleSql
     *   }
     * })
     * 
     */
    create<T extends UserRoleSqlCreateArgs>(args: SelectSubset<T, UserRoleSqlCreateArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserRoleSqls.
     * @param {UserRoleSqlCreateManyArgs} args - Arguments to create many UserRoleSqls.
     * @example
     * // Create many UserRoleSqls
     * const userRoleSql = await prisma.userRoleSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleSqlCreateManyArgs>(args?: SelectSubset<T, UserRoleSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoleSqls and returns the data saved in the database.
     * @param {UserRoleSqlCreateManyAndReturnArgs} args - Arguments to create many UserRoleSqls.
     * @example
     * // Create many UserRoleSqls
     * const userRoleSql = await prisma.userRoleSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoleSqls and only return the `user_id`
     * const userRoleSqlWithUser_idOnly = await prisma.userRoleSql.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserRoleSql.
     * @param {UserRoleSqlDeleteArgs} args - Arguments to delete one UserRoleSql.
     * @example
     * // Delete one UserRoleSql
     * const UserRoleSql = await prisma.userRoleSql.delete({
     *   where: {
     *     // ... filter to delete one UserRoleSql
     *   }
     * })
     * 
     */
    delete<T extends UserRoleSqlDeleteArgs>(args: SelectSubset<T, UserRoleSqlDeleteArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserRoleSql.
     * @param {UserRoleSqlUpdateArgs} args - Arguments to update one UserRoleSql.
     * @example
     * // Update one UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleSqlUpdateArgs>(args: SelectSubset<T, UserRoleSqlUpdateArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserRoleSqls.
     * @param {UserRoleSqlDeleteManyArgs} args - Arguments to filter UserRoleSqls to delete.
     * @example
     * // Delete a few UserRoleSqls
     * const { count } = await prisma.userRoleSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleSqlDeleteManyArgs>(args?: SelectSubset<T, UserRoleSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoleSqls
     * const userRoleSql = await prisma.userRoleSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleSqlUpdateManyArgs>(args: SelectSubset<T, UserRoleSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleSqls and returns the data updated in the database.
     * @param {UserRoleSqlUpdateManyAndReturnArgs} args - Arguments to update many UserRoleSqls.
     * @example
     * // Update many UserRoleSqls
     * const userRoleSql = await prisma.userRoleSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoleSqls and only return the `user_id`
     * const userRoleSqlWithUser_idOnly = await prisma.userRoleSql.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserRoleSql.
     * @param {UserRoleSqlUpsertArgs} args - Arguments to update or create a UserRoleSql.
     * @example
     * // Update or create a UserRoleSql
     * const userRoleSql = await prisma.userRoleSql.upsert({
     *   create: {
     *     // ... data to create a UserRoleSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoleSql we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleSqlUpsertArgs>(args: SelectSubset<T, UserRoleSqlUpsertArgs<ExtArgs>>): Prisma__UserRoleSqlClient<$Result.GetResult<Prisma.$UserRoleSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserRoleSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlCountArgs} args - Arguments to filter UserRoleSqls to count.
     * @example
     * // Count the number of UserRoleSqls
     * const count = await prisma.userRoleSql.count({
     *   where: {
     *     // ... the filter for the UserRoleSqls we want to count
     *   }
     * })
    **/
    count<T extends UserRoleSqlCountArgs>(
      args?: Subset<T, UserRoleSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleSqlAggregateArgs>(args: Subset<T, UserRoleSqlAggregateArgs>): Prisma.PrismaPromise<GetUserRoleSqlAggregateType<T>>

    /**
     * Group by UserRoleSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRoleSql model
   */
  readonly fields: UserRoleSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRoleSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSqlDefaultArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends RoleSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleSqlDefaultArgs<ExtArgs>>): Prisma__RoleSqlClient<$Result.GetResult<Prisma.$RoleSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRoleSql model
   */ 
  interface UserRoleSqlFieldRefs {
    readonly user_id: FieldRef<"UserRoleSql", 'Int'>
    readonly role_id: FieldRef<"UserRoleSql", 'Int'>
    readonly uuid: FieldRef<"UserRoleSql", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRoleSql findUnique
   */
  export type UserRoleSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleSql to fetch.
     */
    where: UserRoleSqlWhereUniqueInput
  }

  /**
   * UserRoleSql findUniqueOrThrow
   */
  export type UserRoleSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleSql to fetch.
     */
    where: UserRoleSqlWhereUniqueInput
  }

  /**
   * UserRoleSql findFirst
   */
  export type UserRoleSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleSql to fetch.
     */
    where?: UserRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleSqls to fetch.
     */
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleSqls.
     */
    cursor?: UserRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleSqls.
     */
    distinct?: UserRoleSqlScalarFieldEnum | UserRoleSqlScalarFieldEnum[]
  }

  /**
   * UserRoleSql findFirstOrThrow
   */
  export type UserRoleSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleSql to fetch.
     */
    where?: UserRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleSqls to fetch.
     */
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleSqls.
     */
    cursor?: UserRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleSqls.
     */
    distinct?: UserRoleSqlScalarFieldEnum | UserRoleSqlScalarFieldEnum[]
  }

  /**
   * UserRoleSql findMany
   */
  export type UserRoleSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleSqls to fetch.
     */
    where?: UserRoleSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleSqls to fetch.
     */
    orderBy?: UserRoleSqlOrderByWithRelationInput | UserRoleSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoleSqls.
     */
    cursor?: UserRoleSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleSqls.
     */
    skip?: number
    distinct?: UserRoleSqlScalarFieldEnum | UserRoleSqlScalarFieldEnum[]
  }

  /**
   * UserRoleSql create
   */
  export type UserRoleSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRoleSql.
     */
    data: XOR<UserRoleSqlCreateInput, UserRoleSqlUncheckedCreateInput>
  }

  /**
   * UserRoleSql createMany
   */
  export type UserRoleSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoleSqls.
     */
    data: UserRoleSqlCreateManyInput | UserRoleSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRoleSql createManyAndReturn
   */
  export type UserRoleSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoleSqls.
     */
    data: UserRoleSqlCreateManyInput | UserRoleSqlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleSql update
   */
  export type UserRoleSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRoleSql.
     */
    data: XOR<UserRoleSqlUpdateInput, UserRoleSqlUncheckedUpdateInput>
    /**
     * Choose, which UserRoleSql to update.
     */
    where: UserRoleSqlWhereUniqueInput
  }

  /**
   * UserRoleSql updateMany
   */
  export type UserRoleSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoleSqls.
     */
    data: XOR<UserRoleSqlUpdateManyMutationInput, UserRoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleSqls to update
     */
    where?: UserRoleSqlWhereInput
    limit?: number
  }

  /**
   * UserRoleSql updateManyAndReturn
   */
  export type UserRoleSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * The data used to update UserRoleSqls.
     */
    data: XOR<UserRoleSqlUpdateManyMutationInput, UserRoleSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleSqls to update
     */
    where?: UserRoleSqlWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleSql upsert
   */
  export type UserRoleSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRoleSql to update in case it exists.
     */
    where: UserRoleSqlWhereUniqueInput
    /**
     * In case the UserRoleSql found by the `where` argument doesn't exist, create a new UserRoleSql with this data.
     */
    create: XOR<UserRoleSqlCreateInput, UserRoleSqlUncheckedCreateInput>
    /**
     * In case the UserRoleSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleSqlUpdateInput, UserRoleSqlUncheckedUpdateInput>
  }

  /**
   * UserRoleSql delete
   */
  export type UserRoleSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
    /**
     * Filter which UserRoleSql to delete.
     */
    where: UserRoleSqlWhereUniqueInput
  }

  /**
   * UserRoleSql deleteMany
   */
  export type UserRoleSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleSqls to delete
     */
    where?: UserRoleSqlWhereInput
    limit?: number
  }

  /**
   * UserRoleSql without action
   */
  export type UserRoleSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleSql
     */
    select?: UserRoleSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleSql
     */
    omit?: UserRoleSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserSessionSql
   */

  export type AggregateUserSessionSql = {
    _count: UserSessionSqlCountAggregateOutputType | null
    _avg: UserSessionSqlAvgAggregateOutputType | null
    _sum: UserSessionSqlSumAggregateOutputType | null
    _min: UserSessionSqlMinAggregateOutputType | null
    _max: UserSessionSqlMaxAggregateOutputType | null
  }

  export type UserSessionSqlAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type UserSessionSqlSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type UserSessionSqlMinAggregateOutputType = {
    id: number | null
    token: string | null
    refresh_token: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSessionSqlMaxAggregateOutputType = {
    id: number | null
    token: string | null
    refresh_token: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSessionSqlCountAggregateOutputType = {
    id: number
    token: number
    refresh_token: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserSessionSqlAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserSessionSqlSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type UserSessionSqlMinAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSessionSqlMaxAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSessionSqlCountAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserSessionSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessionSql to aggregate.
     */
    where?: UserSessionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionSqls to fetch.
     */
    orderBy?: UserSessionSqlOrderByWithRelationInput | UserSessionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessionSqls
    **/
    _count?: true | UserSessionSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSessionSqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSessionSqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionSqlMaxAggregateInputType
  }

  export type GetUserSessionSqlAggregateType<T extends UserSessionSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSessionSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSessionSql[P]>
      : GetScalarType<T[P], AggregateUserSessionSql[P]>
  }




  export type UserSessionSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionSqlWhereInput
    orderBy?: UserSessionSqlOrderByWithAggregationInput | UserSessionSqlOrderByWithAggregationInput[]
    by: UserSessionSqlScalarFieldEnum[] | UserSessionSqlScalarFieldEnum
    having?: UserSessionSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionSqlCountAggregateInputType | true
    _avg?: UserSessionSqlAvgAggregateInputType
    _sum?: UserSessionSqlSumAggregateInputType
    _min?: UserSessionSqlMinAggregateInputType
    _max?: UserSessionSqlMaxAggregateInputType
  }

  export type UserSessionSqlGroupByOutputType = {
    id: number
    token: string | null
    refresh_token: string | null
    user_id: number
    created_at: Date
    updated_at: Date
    _count: UserSessionSqlCountAggregateOutputType | null
    _avg: UserSessionSqlAvgAggregateOutputType | null
    _sum: UserSessionSqlSumAggregateOutputType | null
    _min: UserSessionSqlMinAggregateOutputType | null
    _max: UserSessionSqlMaxAggregateOutputType | null
  }

  type GetUserSessionSqlGroupByPayload<T extends UserSessionSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSessionSql"]>

  export type UserSessionSqlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSessionSql"]>

  export type UserSessionSqlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSessionSql"]>

  export type UserSessionSqlSelectScalar = {
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserSessionSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "refresh_token" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["userSessionSql"]>
  export type UserSessionSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }
  export type UserSessionSqlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }
  export type UserSessionSqlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserSqlDefaultArgs<ExtArgs>
  }

  export type $UserSessionSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSessionSql"
    objects: {
      user: Prisma.$UserSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string | null
      refresh_token: string | null
      user_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userSessionSql"]>
    composites: {}
  }

  type UserSessionSqlGetPayload<S extends boolean | null | undefined | UserSessionSqlDefaultArgs> = $Result.GetResult<Prisma.$UserSessionSqlPayload, S>

  type UserSessionSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionSqlCountAggregateInputType | true
    }

  export interface UserSessionSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSessionSql'], meta: { name: 'UserSessionSql' } }
    /**
     * Find zero or one UserSessionSql that matches the filter.
     * @param {UserSessionSqlFindUniqueArgs} args - Arguments to find a UserSessionSql
     * @example
     * // Get one UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionSqlFindUniqueArgs>(args: SelectSubset<T, UserSessionSqlFindUniqueArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSessionSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionSqlFindUniqueOrThrowArgs} args - Arguments to find a UserSessionSql
     * @example
     * // Get one UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSessionSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlFindFirstArgs} args - Arguments to find a UserSessionSql
     * @example
     * // Get one UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionSqlFindFirstArgs>(args?: SelectSubset<T, UserSessionSqlFindFirstArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSessionSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlFindFirstOrThrowArgs} args - Arguments to find a UserSessionSql
     * @example
     * // Get one UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSessionSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessionSqls
     * const userSessionSqls = await prisma.userSessionSql.findMany()
     * 
     * // Get first 10 UserSessionSqls
     * const userSessionSqls = await prisma.userSessionSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionSqlWithIdOnly = await prisma.userSessionSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionSqlFindManyArgs>(args?: SelectSubset<T, UserSessionSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSessionSql.
     * @param {UserSessionSqlCreateArgs} args - Arguments to create a UserSessionSql.
     * @example
     * // Create one UserSessionSql
     * const UserSessionSql = await prisma.userSessionSql.create({
     *   data: {
     *     // ... data to create a UserSessionSql
     *   }
     * })
     * 
     */
    create<T extends UserSessionSqlCreateArgs>(args: SelectSubset<T, UserSessionSqlCreateArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSessionSqls.
     * @param {UserSessionSqlCreateManyArgs} args - Arguments to create many UserSessionSqls.
     * @example
     * // Create many UserSessionSqls
     * const userSessionSql = await prisma.userSessionSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionSqlCreateManyArgs>(args?: SelectSubset<T, UserSessionSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessionSqls and returns the data saved in the database.
     * @param {UserSessionSqlCreateManyAndReturnArgs} args - Arguments to create many UserSessionSqls.
     * @example
     * // Create many UserSessionSqls
     * const userSessionSql = await prisma.userSessionSql.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessionSqls and only return the `id`
     * const userSessionSqlWithIdOnly = await prisma.userSessionSql.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionSqlCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionSqlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a UserSessionSql.
     * @param {UserSessionSqlDeleteArgs} args - Arguments to delete one UserSessionSql.
     * @example
     * // Delete one UserSessionSql
     * const UserSessionSql = await prisma.userSessionSql.delete({
     *   where: {
     *     // ... filter to delete one UserSessionSql
     *   }
     * })
     * 
     */
    delete<T extends UserSessionSqlDeleteArgs>(args: SelectSubset<T, UserSessionSqlDeleteArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSessionSql.
     * @param {UserSessionSqlUpdateArgs} args - Arguments to update one UserSessionSql.
     * @example
     * // Update one UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionSqlUpdateArgs>(args: SelectSubset<T, UserSessionSqlUpdateArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSessionSqls.
     * @param {UserSessionSqlDeleteManyArgs} args - Arguments to filter UserSessionSqls to delete.
     * @example
     * // Delete a few UserSessionSqls
     * const { count } = await prisma.userSessionSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionSqlDeleteManyArgs>(args?: SelectSubset<T, UserSessionSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessionSqls
     * const userSessionSql = await prisma.userSessionSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionSqlUpdateManyArgs>(args: SelectSubset<T, UserSessionSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessionSqls and returns the data updated in the database.
     * @param {UserSessionSqlUpdateManyAndReturnArgs} args - Arguments to update many UserSessionSqls.
     * @example
     * // Update many UserSessionSqls
     * const userSessionSql = await prisma.userSessionSql.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessionSqls and only return the `id`
     * const userSessionSqlWithIdOnly = await prisma.userSessionSql.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionSqlUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionSqlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one UserSessionSql.
     * @param {UserSessionSqlUpsertArgs} args - Arguments to update or create a UserSessionSql.
     * @example
     * // Update or create a UserSessionSql
     * const userSessionSql = await prisma.userSessionSql.upsert({
     *   create: {
     *     // ... data to create a UserSessionSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSessionSql we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionSqlUpsertArgs>(args: SelectSubset<T, UserSessionSqlUpsertArgs<ExtArgs>>): Prisma__UserSessionSqlClient<$Result.GetResult<Prisma.$UserSessionSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserSessionSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlCountArgs} args - Arguments to filter UserSessionSqls to count.
     * @example
     * // Count the number of UserSessionSqls
     * const count = await prisma.userSessionSql.count({
     *   where: {
     *     // ... the filter for the UserSessionSqls we want to count
     *   }
     * })
    **/
    count<T extends UserSessionSqlCountArgs>(
      args?: Subset<T, UserSessionSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSessionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionSqlAggregateArgs>(args: Subset<T, UserSessionSqlAggregateArgs>): Prisma.PrismaPromise<GetUserSessionSqlAggregateType<T>>

    /**
     * Group by UserSessionSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionSqlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionSqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSessionSql model
   */
  readonly fields: UserSessionSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSessionSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSqlDefaultArgs<ExtArgs>>): Prisma__UserSqlClient<$Result.GetResult<Prisma.$UserSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSessionSql model
   */ 
  interface UserSessionSqlFieldRefs {
    readonly id: FieldRef<"UserSessionSql", 'Int'>
    readonly token: FieldRef<"UserSessionSql", 'String'>
    readonly refresh_token: FieldRef<"UserSessionSql", 'String'>
    readonly user_id: FieldRef<"UserSessionSql", 'Int'>
    readonly created_at: FieldRef<"UserSessionSql", 'DateTime'>
    readonly updated_at: FieldRef<"UserSessionSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSessionSql findUnique
   */
  export type UserSessionSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionSql to fetch.
     */
    where: UserSessionSqlWhereUniqueInput
  }

  /**
   * UserSessionSql findUniqueOrThrow
   */
  export type UserSessionSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionSql to fetch.
     */
    where: UserSessionSqlWhereUniqueInput
  }

  /**
   * UserSessionSql findFirst
   */
  export type UserSessionSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionSql to fetch.
     */
    where?: UserSessionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionSqls to fetch.
     */
    orderBy?: UserSessionSqlOrderByWithRelationInput | UserSessionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessionSqls.
     */
    cursor?: UserSessionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessionSqls.
     */
    distinct?: UserSessionSqlScalarFieldEnum | UserSessionSqlScalarFieldEnum[]
  }

  /**
   * UserSessionSql findFirstOrThrow
   */
  export type UserSessionSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionSql to fetch.
     */
    where?: UserSessionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionSqls to fetch.
     */
    orderBy?: UserSessionSqlOrderByWithRelationInput | UserSessionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessionSqls.
     */
    cursor?: UserSessionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessionSqls.
     */
    distinct?: UserSessionSqlScalarFieldEnum | UserSessionSqlScalarFieldEnum[]
  }

  /**
   * UserSessionSql findMany
   */
  export type UserSessionSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionSqls to fetch.
     */
    where?: UserSessionSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionSqls to fetch.
     */
    orderBy?: UserSessionSqlOrderByWithRelationInput | UserSessionSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessionSqls.
     */
    cursor?: UserSessionSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionSqls.
     */
    skip?: number
    distinct?: UserSessionSqlScalarFieldEnum | UserSessionSqlScalarFieldEnum[]
  }

  /**
   * UserSessionSql create
   */
  export type UserSessionSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSessionSql.
     */
    data: XOR<UserSessionSqlCreateInput, UserSessionSqlUncheckedCreateInput>
  }

  /**
   * UserSessionSql createMany
   */
  export type UserSessionSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessionSqls.
     */
    data: UserSessionSqlCreateManyInput | UserSessionSqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSessionSql createManyAndReturn
   */
  export type UserSessionSqlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessionSqls.
     */
    data: UserSessionSqlCreateManyInput | UserSessionSqlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSessionSql update
   */
  export type UserSessionSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSessionSql.
     */
    data: XOR<UserSessionSqlUpdateInput, UserSessionSqlUncheckedUpdateInput>
    /**
     * Choose, which UserSessionSql to update.
     */
    where: UserSessionSqlWhereUniqueInput
  }

  /**
   * UserSessionSql updateMany
   */
  export type UserSessionSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessionSqls.
     */
    data: XOR<UserSessionSqlUpdateManyMutationInput, UserSessionSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserSessionSqls to update
     */
    where?: UserSessionSqlWhereInput
    limit?: number
  }

  /**
   * UserSessionSql updateManyAndReturn
   */
  export type UserSessionSqlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * The data used to update UserSessionSqls.
     */
    data: XOR<UserSessionSqlUpdateManyMutationInput, UserSessionSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserSessionSqls to update
     */
    where?: UserSessionSqlWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSessionSql upsert
   */
  export type UserSessionSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSessionSql to update in case it exists.
     */
    where: UserSessionSqlWhereUniqueInput
    /**
     * In case the UserSessionSql found by the `where` argument doesn't exist, create a new UserSessionSql with this data.
     */
    create: XOR<UserSessionSqlCreateInput, UserSessionSqlUncheckedCreateInput>
    /**
     * In case the UserSessionSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionSqlUpdateInput, UserSessionSqlUncheckedUpdateInput>
  }

  /**
   * UserSessionSql delete
   */
  export type UserSessionSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
    /**
     * Filter which UserSessionSql to delete.
     */
    where: UserSessionSqlWhereUniqueInput
  }

  /**
   * UserSessionSql deleteMany
   */
  export type UserSessionSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessionSqls to delete
     */
    where?: UserSessionSqlWhereInput
    limit?: number
  }

  /**
   * UserSessionSql without action
   */
  export type UserSessionSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionSql
     */
    select?: UserSessionSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionSql
     */
    omit?: UserSessionSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionSqlInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScopeSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ScopeSqlScalarFieldEnum = (typeof ScopeSqlScalarFieldEnum)[keyof typeof ScopeSqlScalarFieldEnum]


  export const ResourceSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceSqlScalarFieldEnum = (typeof ResourceSqlScalarFieldEnum)[keyof typeof ResourceSqlScalarFieldEnum]


  export const PermissionSqlScalarFieldEnum: {
    id: 'id',
    title: 'title',
    name: 'name',
    desc: 'desc',
    resource_id: 'resource_id',
    scope_id: 'scope_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionSqlScalarFieldEnum = (typeof PermissionSqlScalarFieldEnum)[keyof typeof PermissionSqlScalarFieldEnum]


  export const RelatedPermissionSqlScalarFieldEnum: {
    parent_id: 'parent_id',
    child_id: 'child_id'
  };

  export type RelatedPermissionSqlScalarFieldEnum = (typeof RelatedPermissionSqlScalarFieldEnum)[keyof typeof RelatedPermissionSqlScalarFieldEnum]


  export const RoleSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    uuid: 'uuid',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleSqlScalarFieldEnum = (typeof RoleSqlScalarFieldEnum)[keyof typeof RoleSqlScalarFieldEnum]


  export const PermissionRoleSqlScalarFieldEnum: {
    permission_id: 'permission_id',
    role_id: 'role_id'
  };

  export type PermissionRoleSqlScalarFieldEnum = (typeof PermissionRoleSqlScalarFieldEnum)[keyof typeof PermissionRoleSqlScalarFieldEnum]


  export const UserSqlScalarFieldEnum: {
    id: 'id',
    username: 'username',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserSqlScalarFieldEnum = (typeof UserSqlScalarFieldEnum)[keyof typeof UserSqlScalarFieldEnum]


  export const UserRoleSqlScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    uuid: 'uuid'
  };

  export type UserRoleSqlScalarFieldEnum = (typeof UserRoleSqlScalarFieldEnum)[keyof typeof UserRoleSqlScalarFieldEnum]


  export const UserSessionSqlScalarFieldEnum: {
    id: 'id',
    token: 'token',
    refresh_token: 'refresh_token',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserSessionSqlScalarFieldEnum = (typeof UserSessionSqlScalarFieldEnum)[keyof typeof UserSessionSqlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScopeSqlWhereInput = {
    AND?: ScopeSqlWhereInput | ScopeSqlWhereInput[]
    OR?: ScopeSqlWhereInput[]
    NOT?: ScopeSqlWhereInput | ScopeSqlWhereInput[]
    id?: IntFilter<"ScopeSql"> | number
    name?: StringFilter<"ScopeSql"> | string
    desc?: StringNullableFilter<"ScopeSql"> | string | null
    created_at?: DateTimeFilter<"ScopeSql"> | Date | string
    updated_at?: DateTimeFilter<"ScopeSql"> | Date | string
    scopes?: PermissionSqlListRelationFilter
  }

  export type ScopeSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    scopes?: PermissionSqlOrderByRelationAggregateInput
  }

  export type ScopeSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ScopeSqlWhereInput | ScopeSqlWhereInput[]
    OR?: ScopeSqlWhereInput[]
    NOT?: ScopeSqlWhereInput | ScopeSqlWhereInput[]
    desc?: StringNullableFilter<"ScopeSql"> | string | null
    created_at?: DateTimeFilter<"ScopeSql"> | Date | string
    updated_at?: DateTimeFilter<"ScopeSql"> | Date | string
    scopes?: PermissionSqlListRelationFilter
  }, "id" | "name">

  export type ScopeSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ScopeSqlCountOrderByAggregateInput
    _avg?: ScopeSqlAvgOrderByAggregateInput
    _max?: ScopeSqlMaxOrderByAggregateInput
    _min?: ScopeSqlMinOrderByAggregateInput
    _sum?: ScopeSqlSumOrderByAggregateInput
  }

  export type ScopeSqlScalarWhereWithAggregatesInput = {
    AND?: ScopeSqlScalarWhereWithAggregatesInput | ScopeSqlScalarWhereWithAggregatesInput[]
    OR?: ScopeSqlScalarWhereWithAggregatesInput[]
    NOT?: ScopeSqlScalarWhereWithAggregatesInput | ScopeSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScopeSql"> | number
    name?: StringWithAggregatesFilter<"ScopeSql"> | string
    desc?: StringNullableWithAggregatesFilter<"ScopeSql"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ScopeSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ScopeSql"> | Date | string
  }

  export type ResourceSqlWhereInput = {
    AND?: ResourceSqlWhereInput | ResourceSqlWhereInput[]
    OR?: ResourceSqlWhereInput[]
    NOT?: ResourceSqlWhereInput | ResourceSqlWhereInput[]
    id?: IntFilter<"ResourceSql"> | number
    name?: StringFilter<"ResourceSql"> | string
    desc?: StringNullableFilter<"ResourceSql"> | string | null
    created_at?: DateTimeFilter<"ResourceSql"> | Date | string
    updated_at?: DateTimeFilter<"ResourceSql"> | Date | string
    permissions?: PermissionSqlListRelationFilter
  }

  export type ResourceSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permissions?: PermissionSqlOrderByRelationAggregateInput
  }

  export type ResourceSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ResourceSqlWhereInput | ResourceSqlWhereInput[]
    OR?: ResourceSqlWhereInput[]
    NOT?: ResourceSqlWhereInput | ResourceSqlWhereInput[]
    desc?: StringNullableFilter<"ResourceSql"> | string | null
    created_at?: DateTimeFilter<"ResourceSql"> | Date | string
    updated_at?: DateTimeFilter<"ResourceSql"> | Date | string
    permissions?: PermissionSqlListRelationFilter
  }, "id" | "name">

  export type ResourceSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceSqlCountOrderByAggregateInput
    _avg?: ResourceSqlAvgOrderByAggregateInput
    _max?: ResourceSqlMaxOrderByAggregateInput
    _min?: ResourceSqlMinOrderByAggregateInput
    _sum?: ResourceSqlSumOrderByAggregateInput
  }

  export type ResourceSqlScalarWhereWithAggregatesInput = {
    AND?: ResourceSqlScalarWhereWithAggregatesInput | ResourceSqlScalarWhereWithAggregatesInput[]
    OR?: ResourceSqlScalarWhereWithAggregatesInput[]
    NOT?: ResourceSqlScalarWhereWithAggregatesInput | ResourceSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResourceSql"> | number
    name?: StringWithAggregatesFilter<"ResourceSql"> | string
    desc?: StringNullableWithAggregatesFilter<"ResourceSql"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ResourceSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ResourceSql"> | Date | string
  }

  export type PermissionSqlWhereInput = {
    AND?: PermissionSqlWhereInput | PermissionSqlWhereInput[]
    OR?: PermissionSqlWhereInput[]
    NOT?: PermissionSqlWhereInput | PermissionSqlWhereInput[]
    id?: IntFilter<"PermissionSql"> | number
    title?: StringNullableFilter<"PermissionSql"> | string | null
    name?: StringFilter<"PermissionSql"> | string
    desc?: StringNullableFilter<"PermissionSql"> | string | null
    resource_id?: IntFilter<"PermissionSql"> | number
    scope_id?: IntFilter<"PermissionSql"> | number
    created_at?: DateTimeFilter<"PermissionSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionSql"> | Date | string
    resource?: XOR<ResourceSqlScalarRelationFilter, ResourceSqlWhereInput>
    scope?: XOR<ScopeSqlScalarRelationFilter, ScopeSqlWhereInput>
    permission_roles?: PermissionRoleSqlListRelationFilter
    parent?: RelatedPermissionSqlListRelationFilter
    children?: RelatedPermissionSqlListRelationFilter
  }

  export type PermissionSqlOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resource?: ResourceSqlOrderByWithRelationInput
    scope?: ScopeSqlOrderByWithRelationInput
    permission_roles?: PermissionRoleSqlOrderByRelationAggregateInput
    parent?: RelatedPermissionSqlOrderByRelationAggregateInput
    children?: RelatedPermissionSqlOrderByRelationAggregateInput
  }

  export type PermissionSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionSqlWhereInput | PermissionSqlWhereInput[]
    OR?: PermissionSqlWhereInput[]
    NOT?: PermissionSqlWhereInput | PermissionSqlWhereInput[]
    title?: StringNullableFilter<"PermissionSql"> | string | null
    desc?: StringNullableFilter<"PermissionSql"> | string | null
    resource_id?: IntFilter<"PermissionSql"> | number
    scope_id?: IntFilter<"PermissionSql"> | number
    created_at?: DateTimeFilter<"PermissionSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionSql"> | Date | string
    resource?: XOR<ResourceSqlScalarRelationFilter, ResourceSqlWhereInput>
    scope?: XOR<ScopeSqlScalarRelationFilter, ScopeSqlWhereInput>
    permission_roles?: PermissionRoleSqlListRelationFilter
    parent?: RelatedPermissionSqlListRelationFilter
    children?: RelatedPermissionSqlListRelationFilter
  }, "id" | "name">

  export type PermissionSqlOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PermissionSqlCountOrderByAggregateInput
    _avg?: PermissionSqlAvgOrderByAggregateInput
    _max?: PermissionSqlMaxOrderByAggregateInput
    _min?: PermissionSqlMinOrderByAggregateInput
    _sum?: PermissionSqlSumOrderByAggregateInput
  }

  export type PermissionSqlScalarWhereWithAggregatesInput = {
    AND?: PermissionSqlScalarWhereWithAggregatesInput | PermissionSqlScalarWhereWithAggregatesInput[]
    OR?: PermissionSqlScalarWhereWithAggregatesInput[]
    NOT?: PermissionSqlScalarWhereWithAggregatesInput | PermissionSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PermissionSql"> | number
    title?: StringNullableWithAggregatesFilter<"PermissionSql"> | string | null
    name?: StringWithAggregatesFilter<"PermissionSql"> | string
    desc?: StringNullableWithAggregatesFilter<"PermissionSql"> | string | null
    resource_id?: IntWithAggregatesFilter<"PermissionSql"> | number
    scope_id?: IntWithAggregatesFilter<"PermissionSql"> | number
    created_at?: DateTimeWithAggregatesFilter<"PermissionSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PermissionSql"> | Date | string
  }

  export type RelatedPermissionSqlWhereInput = {
    AND?: RelatedPermissionSqlWhereInput | RelatedPermissionSqlWhereInput[]
    OR?: RelatedPermissionSqlWhereInput[]
    NOT?: RelatedPermissionSqlWhereInput | RelatedPermissionSqlWhereInput[]
    parent_id?: IntFilter<"RelatedPermissionSql"> | number
    child_id?: IntFilter<"RelatedPermissionSql"> | number
    parent?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
    child?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
  }

  export type RelatedPermissionSqlOrderByWithRelationInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
    parent?: PermissionSqlOrderByWithRelationInput
    child?: PermissionSqlOrderByWithRelationInput
  }

  export type RelatedPermissionSqlWhereUniqueInput = Prisma.AtLeast<{
    related_permission_id?: RelatedPermissionSqlRelated_permission_idCompoundUniqueInput
    AND?: RelatedPermissionSqlWhereInput | RelatedPermissionSqlWhereInput[]
    OR?: RelatedPermissionSqlWhereInput[]
    NOT?: RelatedPermissionSqlWhereInput | RelatedPermissionSqlWhereInput[]
    parent_id?: IntFilter<"RelatedPermissionSql"> | number
    child_id?: IntFilter<"RelatedPermissionSql"> | number
    parent?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
    child?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
  }, "related_permission_id">

  export type RelatedPermissionSqlOrderByWithAggregationInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
    _count?: RelatedPermissionSqlCountOrderByAggregateInput
    _avg?: RelatedPermissionSqlAvgOrderByAggregateInput
    _max?: RelatedPermissionSqlMaxOrderByAggregateInput
    _min?: RelatedPermissionSqlMinOrderByAggregateInput
    _sum?: RelatedPermissionSqlSumOrderByAggregateInput
  }

  export type RelatedPermissionSqlScalarWhereWithAggregatesInput = {
    AND?: RelatedPermissionSqlScalarWhereWithAggregatesInput | RelatedPermissionSqlScalarWhereWithAggregatesInput[]
    OR?: RelatedPermissionSqlScalarWhereWithAggregatesInput[]
    NOT?: RelatedPermissionSqlScalarWhereWithAggregatesInput | RelatedPermissionSqlScalarWhereWithAggregatesInput[]
    parent_id?: IntWithAggregatesFilter<"RelatedPermissionSql"> | number
    child_id?: IntWithAggregatesFilter<"RelatedPermissionSql"> | number
  }

  export type RoleSqlWhereInput = {
    AND?: RoleSqlWhereInput | RoleSqlWhereInput[]
    OR?: RoleSqlWhereInput[]
    NOT?: RoleSqlWhereInput | RoleSqlWhereInput[]
    id?: IntFilter<"RoleSql"> | number
    name?: StringFilter<"RoleSql"> | string
    desc?: StringNullableFilter<"RoleSql"> | string | null
    uuid?: StringFilter<"RoleSql"> | string
    created_at?: DateTimeFilter<"RoleSql"> | Date | string
    updated_at?: DateTimeFilter<"RoleSql"> | Date | string
    permission_roles?: PermissionRoleSqlListRelationFilter
    users?: UserRoleSqlListRelationFilter
  }

  export type RoleSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permission_roles?: PermissionRoleSqlOrderByRelationAggregateInput
    users?: UserRoleSqlOrderByRelationAggregateInput
  }

  export type RoleSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleSqlWhereInput | RoleSqlWhereInput[]
    OR?: RoleSqlWhereInput[]
    NOT?: RoleSqlWhereInput | RoleSqlWhereInput[]
    name?: StringFilter<"RoleSql"> | string
    desc?: StringNullableFilter<"RoleSql"> | string | null
    uuid?: StringFilter<"RoleSql"> | string
    created_at?: DateTimeFilter<"RoleSql"> | Date | string
    updated_at?: DateTimeFilter<"RoleSql"> | Date | string
    permission_roles?: PermissionRoleSqlListRelationFilter
    users?: UserRoleSqlListRelationFilter
  }, "id">

  export type RoleSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleSqlCountOrderByAggregateInput
    _avg?: RoleSqlAvgOrderByAggregateInput
    _max?: RoleSqlMaxOrderByAggregateInput
    _min?: RoleSqlMinOrderByAggregateInput
    _sum?: RoleSqlSumOrderByAggregateInput
  }

  export type RoleSqlScalarWhereWithAggregatesInput = {
    AND?: RoleSqlScalarWhereWithAggregatesInput | RoleSqlScalarWhereWithAggregatesInput[]
    OR?: RoleSqlScalarWhereWithAggregatesInput[]
    NOT?: RoleSqlScalarWhereWithAggregatesInput | RoleSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoleSql"> | number
    name?: StringWithAggregatesFilter<"RoleSql"> | string
    desc?: StringNullableWithAggregatesFilter<"RoleSql"> | string | null
    uuid?: StringWithAggregatesFilter<"RoleSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"RoleSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RoleSql"> | Date | string
  }

  export type PermissionRoleSqlWhereInput = {
    AND?: PermissionRoleSqlWhereInput | PermissionRoleSqlWhereInput[]
    OR?: PermissionRoleSqlWhereInput[]
    NOT?: PermissionRoleSqlWhereInput | PermissionRoleSqlWhereInput[]
    permission_id?: IntFilter<"PermissionRoleSql"> | number
    role_id?: IntFilter<"PermissionRoleSql"> | number
    permission?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
    role?: XOR<RoleSqlScalarRelationFilter, RoleSqlWhereInput>
  }

  export type PermissionRoleSqlOrderByWithRelationInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
    permission?: PermissionSqlOrderByWithRelationInput
    role?: RoleSqlOrderByWithRelationInput
  }

  export type PermissionRoleSqlWhereUniqueInput = Prisma.AtLeast<{
    permission_role_id?: PermissionRoleSqlPermission_role_idCompoundUniqueInput
    AND?: PermissionRoleSqlWhereInput | PermissionRoleSqlWhereInput[]
    OR?: PermissionRoleSqlWhereInput[]
    NOT?: PermissionRoleSqlWhereInput | PermissionRoleSqlWhereInput[]
    permission_id?: IntFilter<"PermissionRoleSql"> | number
    role_id?: IntFilter<"PermissionRoleSql"> | number
    permission?: XOR<PermissionSqlScalarRelationFilter, PermissionSqlWhereInput>
    role?: XOR<RoleSqlScalarRelationFilter, RoleSqlWhereInput>
  }, "permission_role_id">

  export type PermissionRoleSqlOrderByWithAggregationInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
    _count?: PermissionRoleSqlCountOrderByAggregateInput
    _avg?: PermissionRoleSqlAvgOrderByAggregateInput
    _max?: PermissionRoleSqlMaxOrderByAggregateInput
    _min?: PermissionRoleSqlMinOrderByAggregateInput
    _sum?: PermissionRoleSqlSumOrderByAggregateInput
  }

  export type PermissionRoleSqlScalarWhereWithAggregatesInput = {
    AND?: PermissionRoleSqlScalarWhereWithAggregatesInput | PermissionRoleSqlScalarWhereWithAggregatesInput[]
    OR?: PermissionRoleSqlScalarWhereWithAggregatesInput[]
    NOT?: PermissionRoleSqlScalarWhereWithAggregatesInput | PermissionRoleSqlScalarWhereWithAggregatesInput[]
    permission_id?: IntWithAggregatesFilter<"PermissionRoleSql"> | number
    role_id?: IntWithAggregatesFilter<"PermissionRoleSql"> | number
  }

  export type UserSqlWhereInput = {
    AND?: UserSqlWhereInput | UserSqlWhereInput[]
    OR?: UserSqlWhereInput[]
    NOT?: UserSqlWhereInput | UserSqlWhereInput[]
    id?: IntFilter<"UserSql"> | number
    username?: StringFilter<"UserSql"> | string
    created_at?: DateTimeFilter<"UserSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSql"> | Date | string
    roles?: UserRoleSqlListRelationFilter
    sessions?: UserSessionSqlListRelationFilter
  }

  export type UserSqlOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: UserRoleSqlOrderByRelationAggregateInput
    sessions?: UserSessionSqlOrderByRelationAggregateInput
  }

  export type UserSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserSqlWhereInput | UserSqlWhereInput[]
    OR?: UserSqlWhereInput[]
    NOT?: UserSqlWhereInput | UserSqlWhereInput[]
    created_at?: DateTimeFilter<"UserSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSql"> | Date | string
    roles?: UserRoleSqlListRelationFilter
    sessions?: UserSessionSqlListRelationFilter
  }, "id" | "username">

  export type UserSqlOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserSqlCountOrderByAggregateInput
    _avg?: UserSqlAvgOrderByAggregateInput
    _max?: UserSqlMaxOrderByAggregateInput
    _min?: UserSqlMinOrderByAggregateInput
    _sum?: UserSqlSumOrderByAggregateInput
  }

  export type UserSqlScalarWhereWithAggregatesInput = {
    AND?: UserSqlScalarWhereWithAggregatesInput | UserSqlScalarWhereWithAggregatesInput[]
    OR?: UserSqlScalarWhereWithAggregatesInput[]
    NOT?: UserSqlScalarWhereWithAggregatesInput | UserSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSql"> | number
    username?: StringWithAggregatesFilter<"UserSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserSql"> | Date | string
  }

  export type UserRoleSqlWhereInput = {
    AND?: UserRoleSqlWhereInput | UserRoleSqlWhereInput[]
    OR?: UserRoleSqlWhereInput[]
    NOT?: UserRoleSqlWhereInput | UserRoleSqlWhereInput[]
    user_id?: IntFilter<"UserRoleSql"> | number
    role_id?: IntFilter<"UserRoleSql"> | number
    uuid?: StringFilter<"UserRoleSql"> | string
    user?: XOR<UserSqlScalarRelationFilter, UserSqlWhereInput>
    role?: XOR<RoleSqlScalarRelationFilter, RoleSqlWhereInput>
  }

  export type UserRoleSqlOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
    user?: UserSqlOrderByWithRelationInput
    role?: RoleSqlOrderByWithRelationInput
  }

  export type UserRoleSqlWhereUniqueInput = Prisma.AtLeast<{
    role_user_id?: UserRoleSqlRole_user_idCompoundUniqueInput
    AND?: UserRoleSqlWhereInput | UserRoleSqlWhereInput[]
    OR?: UserRoleSqlWhereInput[]
    NOT?: UserRoleSqlWhereInput | UserRoleSqlWhereInput[]
    user_id?: IntFilter<"UserRoleSql"> | number
    role_id?: IntFilter<"UserRoleSql"> | number
    uuid?: StringFilter<"UserRoleSql"> | string
    user?: XOR<UserSqlScalarRelationFilter, UserSqlWhereInput>
    role?: XOR<RoleSqlScalarRelationFilter, RoleSqlWhereInput>
  }, "role_user_id">

  export type UserRoleSqlOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
    _count?: UserRoleSqlCountOrderByAggregateInput
    _avg?: UserRoleSqlAvgOrderByAggregateInput
    _max?: UserRoleSqlMaxOrderByAggregateInput
    _min?: UserRoleSqlMinOrderByAggregateInput
    _sum?: UserRoleSqlSumOrderByAggregateInput
  }

  export type UserRoleSqlScalarWhereWithAggregatesInput = {
    AND?: UserRoleSqlScalarWhereWithAggregatesInput | UserRoleSqlScalarWhereWithAggregatesInput[]
    OR?: UserRoleSqlScalarWhereWithAggregatesInput[]
    NOT?: UserRoleSqlScalarWhereWithAggregatesInput | UserRoleSqlScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserRoleSql"> | number
    role_id?: IntWithAggregatesFilter<"UserRoleSql"> | number
    uuid?: StringWithAggregatesFilter<"UserRoleSql"> | string
  }

  export type UserSessionSqlWhereInput = {
    AND?: UserSessionSqlWhereInput | UserSessionSqlWhereInput[]
    OR?: UserSessionSqlWhereInput[]
    NOT?: UserSessionSqlWhereInput | UserSessionSqlWhereInput[]
    id?: IntFilter<"UserSessionSql"> | number
    token?: StringNullableFilter<"UserSessionSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionSql"> | string | null
    user_id?: IntFilter<"UserSessionSql"> | number
    created_at?: DateTimeFilter<"UserSessionSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionSql"> | Date | string
    user?: XOR<UserSqlScalarRelationFilter, UserSqlWhereInput>
  }

  export type UserSessionSqlOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserSqlOrderByWithRelationInput
  }

  export type UserSessionSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSessionSqlWhereInput | UserSessionSqlWhereInput[]
    OR?: UserSessionSqlWhereInput[]
    NOT?: UserSessionSqlWhereInput | UserSessionSqlWhereInput[]
    token?: StringNullableFilter<"UserSessionSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionSql"> | string | null
    user_id?: IntFilter<"UserSessionSql"> | number
    created_at?: DateTimeFilter<"UserSessionSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionSql"> | Date | string
    user?: XOR<UserSqlScalarRelationFilter, UserSqlWhereInput>
  }, "id">

  export type UserSessionSqlOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserSessionSqlCountOrderByAggregateInput
    _avg?: UserSessionSqlAvgOrderByAggregateInput
    _max?: UserSessionSqlMaxOrderByAggregateInput
    _min?: UserSessionSqlMinOrderByAggregateInput
    _sum?: UserSessionSqlSumOrderByAggregateInput
  }

  export type UserSessionSqlScalarWhereWithAggregatesInput = {
    AND?: UserSessionSqlScalarWhereWithAggregatesInput | UserSessionSqlScalarWhereWithAggregatesInput[]
    OR?: UserSessionSqlScalarWhereWithAggregatesInput[]
    NOT?: UserSessionSqlScalarWhereWithAggregatesInput | UserSessionSqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSessionSql"> | number
    token?: StringNullableWithAggregatesFilter<"UserSessionSql"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"UserSessionSql"> | string | null
    user_id?: IntWithAggregatesFilter<"UserSessionSql"> | number
    created_at?: DateTimeWithAggregatesFilter<"UserSessionSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserSessionSql"> | Date | string
  }

  export type ScopeSqlCreateInput = {
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scopes?: PermissionSqlCreateNestedManyWithoutScopeInput
  }

  export type ScopeSqlUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scopes?: PermissionSqlUncheckedCreateNestedManyWithoutScopeInput
  }

  export type ScopeSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: PermissionSqlUpdateManyWithoutScopeNestedInput
  }

  export type ScopeSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: PermissionSqlUncheckedUpdateManyWithoutScopeNestedInput
  }

  export type ScopeSqlCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceSqlCreateInput = {
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionSqlCreateNestedManyWithoutResourceInput
  }

  export type ResourceSqlUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionSqlUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionSqlUpdateManyWithoutResourceNestedInput
  }

  export type ResourceSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionSqlUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceSqlCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionSqlCreateInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUncheckedCreateInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlCreateManyInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionSqlUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedPermissionSqlCreateInput = {
    parent: PermissionSqlCreateNestedOneWithoutChildrenInput
    child: PermissionSqlCreateNestedOneWithoutParentInput
  }

  export type RelatedPermissionSqlUncheckedCreateInput = {
    parent_id: number
    child_id: number
  }

  export type RelatedPermissionSqlUpdateInput = {
    parent?: PermissionSqlUpdateOneRequiredWithoutChildrenNestedInput
    child?: PermissionSqlUpdateOneRequiredWithoutParentNestedInput
  }

  export type RelatedPermissionSqlUncheckedUpdateInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
    child_id?: IntFieldUpdateOperationsInput | number
  }

  export type RelatedPermissionSqlCreateManyInput = {
    parent_id: number
    child_id: number
  }

  export type RelatedPermissionSqlUpdateManyMutationInput = {

  }

  export type RelatedPermissionSqlUncheckedUpdateManyInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
    child_id?: IntFieldUpdateOperationsInput | number
  }

  export type RoleSqlCreateInput = {
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutRoleInput
    users?: UserRoleSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUpdateManyWithoutRoleNestedInput
    users?: UserRoleSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleSqlCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleSqlCreateInput = {
    permission: PermissionSqlCreateNestedOneWithoutPermission_rolesInput
    role: RoleSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleSqlUncheckedCreateInput = {
    permission_id: number
    role_id: number
  }

  export type PermissionRoleSqlUpdateInput = {
    permission?: PermissionSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
    role?: RoleSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleSqlUncheckedUpdateInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionRoleSqlCreateManyInput = {
    permission_id: number
    role_id: number
  }

  export type PermissionRoleSqlUpdateManyMutationInput = {

  }

  export type PermissionRoleSqlUncheckedUpdateManyInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserSqlCreateInput = {
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleSqlCreateNestedManyWithoutUserInput
    sessions?: UserSessionSqlCreateNestedManyWithoutUserInput
  }

  export type UserSqlUncheckedCreateInput = {
    id?: number
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleSqlUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSqlUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleSqlUpdateManyWithoutUserNestedInput
    sessions?: UserSessionSqlUpdateManyWithoutUserNestedInput
  }

  export type UserSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleSqlUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSqlCreateManyInput = {
    id?: number
    username: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSqlUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleSqlCreateInput = {
    uuid: string
    user: UserSqlCreateNestedOneWithoutRolesInput
    role: RoleSqlCreateNestedOneWithoutUsersInput
  }

  export type UserRoleSqlUncheckedCreateInput = {
    user_id: number
    role_id: number
    uuid: string
  }

  export type UserRoleSqlUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserSqlUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleSqlUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleSqlUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleSqlCreateManyInput = {
    user_id: number
    role_id: number
    uuid: string
  }

  export type UserRoleSqlUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleSqlUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionSqlCreateInput = {
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserSqlCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionSqlUncheckedCreateInput = {
    id?: number
    token?: string | null
    refresh_token?: string | null
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionSqlUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserSqlUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionSqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionSqlCreateManyInput = {
    id?: number
    token?: string | null
    refresh_token?: string | null
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionSqlUpdateManyMutationInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionSqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PermissionSqlListRelationFilter = {
    every?: PermissionSqlWhereInput
    some?: PermissionSqlWhereInput
    none?: PermissionSqlWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PermissionSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScopeSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ScopeSqlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScopeSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ScopeSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ScopeSqlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ResourceSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceSqlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResourceSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceSqlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResourceSqlScalarRelationFilter = {
    is?: ResourceSqlWhereInput
    isNot?: ResourceSqlWhereInput
  }

  export type ScopeSqlScalarRelationFilter = {
    is?: ScopeSqlWhereInput
    isNot?: ScopeSqlWhereInput
  }

  export type PermissionRoleSqlListRelationFilter = {
    every?: PermissionRoleSqlWhereInput
    some?: PermissionRoleSqlWhereInput
    none?: PermissionRoleSqlWhereInput
  }

  export type RelatedPermissionSqlListRelationFilter = {
    every?: RelatedPermissionSqlWhereInput
    some?: RelatedPermissionSqlWhereInput
    none?: RelatedPermissionSqlWhereInput
  }

  export type PermissionRoleSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatedPermissionSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionSqlCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionSqlAvgOrderByAggregateInput = {
    id?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
  }

  export type PermissionSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionSqlMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionSqlSumOrderByAggregateInput = {
    id?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
  }

  export type PermissionSqlScalarRelationFilter = {
    is?: PermissionSqlWhereInput
    isNot?: PermissionSqlWhereInput
  }

  export type RelatedPermissionSqlRelated_permission_idCompoundUniqueInput = {
    parent_id: number
    child_id: number
  }

  export type RelatedPermissionSqlCountOrderByAggregateInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionSqlAvgOrderByAggregateInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionSqlMaxOrderByAggregateInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionSqlMinOrderByAggregateInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionSqlSumOrderByAggregateInput = {
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type UserRoleSqlListRelationFilter = {
    every?: UserRoleSqlWhereInput
    some?: UserRoleSqlWhereInput
    none?: UserRoleSqlWhereInput
  }

  export type UserRoleSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSqlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSqlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleSqlScalarRelationFilter = {
    is?: RoleSqlWhereInput
    isNot?: RoleSqlWhereInput
  }

  export type PermissionRoleSqlPermission_role_idCompoundUniqueInput = {
    permission_id: number
    role_id: number
  }

  export type PermissionRoleSqlCountOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleSqlAvgOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleSqlMaxOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleSqlMinOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleSqlSumOrderByAggregateInput = {
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserSessionSqlListRelationFilter = {
    every?: UserSessionSqlWhereInput
    some?: UserSessionSqlWhereInput
    none?: UserSessionSqlWhereInput
  }

  export type UserSessionSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSqlCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSqlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSqlMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSqlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSqlScalarRelationFilter = {
    is?: UserSqlWhereInput
    isNot?: UserSqlWhereInput
  }

  export type UserRoleSqlRole_user_idCompoundUniqueInput = {
    user_id: number
    role_id: number
    uuid: string
  }

  export type UserRoleSqlCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserRoleSqlAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleSqlMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserRoleSqlMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserRoleSqlSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserSessionSqlCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSessionSqlAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type UserSessionSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSessionSqlMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSessionSqlSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PermissionSqlCreateNestedManyWithoutScopeInput = {
    create?: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput> | PermissionSqlCreateWithoutScopeInput[] | PermissionSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutScopeInput | PermissionSqlCreateOrConnectWithoutScopeInput[]
    createMany?: PermissionSqlCreateManyScopeInputEnvelope
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
  }

  export type PermissionSqlUncheckedCreateNestedManyWithoutScopeInput = {
    create?: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput> | PermissionSqlCreateWithoutScopeInput[] | PermissionSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutScopeInput | PermissionSqlCreateOrConnectWithoutScopeInput[]
    createMany?: PermissionSqlCreateManyScopeInputEnvelope
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PermissionSqlUpdateManyWithoutScopeNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput> | PermissionSqlCreateWithoutScopeInput[] | PermissionSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutScopeInput | PermissionSqlCreateOrConnectWithoutScopeInput[]
    upsert?: PermissionSqlUpsertWithWhereUniqueWithoutScopeInput | PermissionSqlUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: PermissionSqlCreateManyScopeInputEnvelope
    set?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    disconnect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    delete?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    update?: PermissionSqlUpdateWithWhereUniqueWithoutScopeInput | PermissionSqlUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: PermissionSqlUpdateManyWithWhereWithoutScopeInput | PermissionSqlUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PermissionSqlUncheckedUpdateManyWithoutScopeNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput> | PermissionSqlCreateWithoutScopeInput[] | PermissionSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutScopeInput | PermissionSqlCreateOrConnectWithoutScopeInput[]
    upsert?: PermissionSqlUpsertWithWhereUniqueWithoutScopeInput | PermissionSqlUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: PermissionSqlCreateManyScopeInputEnvelope
    set?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    disconnect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    delete?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    update?: PermissionSqlUpdateWithWhereUniqueWithoutScopeInput | PermissionSqlUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: PermissionSqlUpdateManyWithWhereWithoutScopeInput | PermissionSqlUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
  }

  export type PermissionSqlCreateNestedManyWithoutResourceInput = {
    create?: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput> | PermissionSqlCreateWithoutResourceInput[] | PermissionSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutResourceInput | PermissionSqlCreateOrConnectWithoutResourceInput[]
    createMany?: PermissionSqlCreateManyResourceInputEnvelope
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
  }

  export type PermissionSqlUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput> | PermissionSqlCreateWithoutResourceInput[] | PermissionSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutResourceInput | PermissionSqlCreateOrConnectWithoutResourceInput[]
    createMany?: PermissionSqlCreateManyResourceInputEnvelope
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
  }

  export type PermissionSqlUpdateManyWithoutResourceNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput> | PermissionSqlCreateWithoutResourceInput[] | PermissionSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutResourceInput | PermissionSqlCreateOrConnectWithoutResourceInput[]
    upsert?: PermissionSqlUpsertWithWhereUniqueWithoutResourceInput | PermissionSqlUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: PermissionSqlCreateManyResourceInputEnvelope
    set?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    disconnect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    delete?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    update?: PermissionSqlUpdateWithWhereUniqueWithoutResourceInput | PermissionSqlUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: PermissionSqlUpdateManyWithWhereWithoutResourceInput | PermissionSqlUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
  }

  export type PermissionSqlUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput> | PermissionSqlCreateWithoutResourceInput[] | PermissionSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutResourceInput | PermissionSqlCreateOrConnectWithoutResourceInput[]
    upsert?: PermissionSqlUpsertWithWhereUniqueWithoutResourceInput | PermissionSqlUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: PermissionSqlCreateManyResourceInputEnvelope
    set?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    disconnect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    delete?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    connect?: PermissionSqlWhereUniqueInput | PermissionSqlWhereUniqueInput[]
    update?: PermissionSqlUpdateWithWhereUniqueWithoutResourceInput | PermissionSqlUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: PermissionSqlUpdateManyWithWhereWithoutResourceInput | PermissionSqlUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
  }

  export type ResourceSqlCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ResourceSqlCreateWithoutPermissionsInput, ResourceSqlUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ResourceSqlCreateOrConnectWithoutPermissionsInput
    connect?: ResourceSqlWhereUniqueInput
  }

  export type ScopeSqlCreateNestedOneWithoutScopesInput = {
    create?: XOR<ScopeSqlCreateWithoutScopesInput, ScopeSqlUncheckedCreateWithoutScopesInput>
    connectOrCreate?: ScopeSqlCreateOrConnectWithoutScopesInput
    connect?: ScopeSqlWhereUniqueInput
  }

  export type PermissionRoleSqlCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleSqlCreateWithoutPermissionInput[] | PermissionRoleSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutPermissionInput | PermissionRoleSqlCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionRoleSqlCreateManyPermissionInputEnvelope
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
  }

  export type RelatedPermissionSqlCreateNestedManyWithoutChildInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput> | RelatedPermissionSqlCreateWithoutChildInput[] | RelatedPermissionSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutChildInput | RelatedPermissionSqlCreateOrConnectWithoutChildInput[]
    createMany?: RelatedPermissionSqlCreateManyChildInputEnvelope
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
  }

  export type RelatedPermissionSqlCreateNestedManyWithoutParentInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput> | RelatedPermissionSqlCreateWithoutParentInput[] | RelatedPermissionSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutParentInput | RelatedPermissionSqlCreateOrConnectWithoutParentInput[]
    createMany?: RelatedPermissionSqlCreateManyParentInputEnvelope
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
  }

  export type PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleSqlCreateWithoutPermissionInput[] | PermissionRoleSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutPermissionInput | PermissionRoleSqlCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionRoleSqlCreateManyPermissionInputEnvelope
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
  }

  export type RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput> | RelatedPermissionSqlCreateWithoutChildInput[] | RelatedPermissionSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutChildInput | RelatedPermissionSqlCreateOrConnectWithoutChildInput[]
    createMany?: RelatedPermissionSqlCreateManyChildInputEnvelope
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
  }

  export type RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput> | RelatedPermissionSqlCreateWithoutParentInput[] | RelatedPermissionSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutParentInput | RelatedPermissionSqlCreateOrConnectWithoutParentInput[]
    createMany?: RelatedPermissionSqlCreateManyParentInputEnvelope
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
  }

  export type ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<ResourceSqlCreateWithoutPermissionsInput, ResourceSqlUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ResourceSqlCreateOrConnectWithoutPermissionsInput
    upsert?: ResourceSqlUpsertWithoutPermissionsInput
    connect?: ResourceSqlWhereUniqueInput
    update?: XOR<XOR<ResourceSqlUpdateToOneWithWhereWithoutPermissionsInput, ResourceSqlUpdateWithoutPermissionsInput>, ResourceSqlUncheckedUpdateWithoutPermissionsInput>
  }

  export type ScopeSqlUpdateOneRequiredWithoutScopesNestedInput = {
    create?: XOR<ScopeSqlCreateWithoutScopesInput, ScopeSqlUncheckedCreateWithoutScopesInput>
    connectOrCreate?: ScopeSqlCreateOrConnectWithoutScopesInput
    upsert?: ScopeSqlUpsertWithoutScopesInput
    connect?: ScopeSqlWhereUniqueInput
    update?: XOR<XOR<ScopeSqlUpdateToOneWithWhereWithoutScopesInput, ScopeSqlUpdateWithoutScopesInput>, ScopeSqlUncheckedUpdateWithoutScopesInput>
  }

  export type PermissionRoleSqlUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleSqlCreateWithoutPermissionInput[] | PermissionRoleSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutPermissionInput | PermissionRoleSqlCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionRoleSqlUpsertWithWhereUniqueWithoutPermissionInput | PermissionRoleSqlUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionRoleSqlCreateManyPermissionInputEnvelope
    set?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    disconnect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    delete?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    update?: PermissionRoleSqlUpdateWithWhereUniqueWithoutPermissionInput | PermissionRoleSqlUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionRoleSqlUpdateManyWithWhereWithoutPermissionInput | PermissionRoleSqlUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
  }

  export type RelatedPermissionSqlUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput> | RelatedPermissionSqlCreateWithoutChildInput[] | RelatedPermissionSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutChildInput | RelatedPermissionSqlCreateOrConnectWithoutChildInput[]
    upsert?: RelatedPermissionSqlUpsertWithWhereUniqueWithoutChildInput | RelatedPermissionSqlUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelatedPermissionSqlCreateManyChildInputEnvelope
    set?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    delete?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    update?: RelatedPermissionSqlUpdateWithWhereUniqueWithoutChildInput | RelatedPermissionSqlUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelatedPermissionSqlUpdateManyWithWhereWithoutChildInput | RelatedPermissionSqlUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
  }

  export type RelatedPermissionSqlUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput> | RelatedPermissionSqlCreateWithoutParentInput[] | RelatedPermissionSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutParentInput | RelatedPermissionSqlCreateOrConnectWithoutParentInput[]
    upsert?: RelatedPermissionSqlUpsertWithWhereUniqueWithoutParentInput | RelatedPermissionSqlUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelatedPermissionSqlCreateManyParentInputEnvelope
    set?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    delete?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    update?: RelatedPermissionSqlUpdateWithWhereUniqueWithoutParentInput | RelatedPermissionSqlUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelatedPermissionSqlUpdateManyWithWhereWithoutParentInput | RelatedPermissionSqlUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
  }

  export type PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleSqlCreateWithoutPermissionInput[] | PermissionRoleSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutPermissionInput | PermissionRoleSqlCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionRoleSqlUpsertWithWhereUniqueWithoutPermissionInput | PermissionRoleSqlUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionRoleSqlCreateManyPermissionInputEnvelope
    set?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    disconnect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    delete?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    update?: PermissionRoleSqlUpdateWithWhereUniqueWithoutPermissionInput | PermissionRoleSqlUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionRoleSqlUpdateManyWithWhereWithoutPermissionInput | PermissionRoleSqlUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
  }

  export type RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput> | RelatedPermissionSqlCreateWithoutChildInput[] | RelatedPermissionSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutChildInput | RelatedPermissionSqlCreateOrConnectWithoutChildInput[]
    upsert?: RelatedPermissionSqlUpsertWithWhereUniqueWithoutChildInput | RelatedPermissionSqlUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelatedPermissionSqlCreateManyChildInputEnvelope
    set?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    delete?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    update?: RelatedPermissionSqlUpdateWithWhereUniqueWithoutChildInput | RelatedPermissionSqlUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelatedPermissionSqlUpdateManyWithWhereWithoutChildInput | RelatedPermissionSqlUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
  }

  export type RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput> | RelatedPermissionSqlCreateWithoutParentInput[] | RelatedPermissionSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionSqlCreateOrConnectWithoutParentInput | RelatedPermissionSqlCreateOrConnectWithoutParentInput[]
    upsert?: RelatedPermissionSqlUpsertWithWhereUniqueWithoutParentInput | RelatedPermissionSqlUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelatedPermissionSqlCreateManyParentInputEnvelope
    set?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    delete?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    connect?: RelatedPermissionSqlWhereUniqueInput | RelatedPermissionSqlWhereUniqueInput[]
    update?: RelatedPermissionSqlUpdateWithWhereUniqueWithoutParentInput | RelatedPermissionSqlUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelatedPermissionSqlUpdateManyWithWhereWithoutParentInput | RelatedPermissionSqlUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
  }

  export type PermissionSqlCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PermissionSqlCreateWithoutChildrenInput, PermissionSqlUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutChildrenInput
    connect?: PermissionSqlWhereUniqueInput
  }

  export type PermissionSqlCreateNestedOneWithoutParentInput = {
    create?: XOR<PermissionSqlCreateWithoutParentInput, PermissionSqlUncheckedCreateWithoutParentInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutParentInput
    connect?: PermissionSqlWhereUniqueInput
  }

  export type PermissionSqlUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutChildrenInput, PermissionSqlUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutChildrenInput
    upsert?: PermissionSqlUpsertWithoutChildrenInput
    connect?: PermissionSqlWhereUniqueInput
    update?: XOR<XOR<PermissionSqlUpdateToOneWithWhereWithoutChildrenInput, PermissionSqlUpdateWithoutChildrenInput>, PermissionSqlUncheckedUpdateWithoutChildrenInput>
  }

  export type PermissionSqlUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutParentInput, PermissionSqlUncheckedCreateWithoutParentInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutParentInput
    upsert?: PermissionSqlUpsertWithoutParentInput
    connect?: PermissionSqlWhereUniqueInput
    update?: XOR<XOR<PermissionSqlUpdateToOneWithWhereWithoutParentInput, PermissionSqlUpdateWithoutParentInput>, PermissionSqlUncheckedUpdateWithoutParentInput>
  }

  export type PermissionRoleSqlCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput> | PermissionRoleSqlCreateWithoutRoleInput[] | PermissionRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutRoleInput | PermissionRoleSqlCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionRoleSqlCreateManyRoleInputEnvelope
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
  }

  export type UserRoleSqlCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput> | UserRoleSqlCreateWithoutRoleInput[] | UserRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutRoleInput | UserRoleSqlCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleSqlCreateManyRoleInputEnvelope
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
  }

  export type PermissionRoleSqlUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput> | PermissionRoleSqlCreateWithoutRoleInput[] | PermissionRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutRoleInput | PermissionRoleSqlCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionRoleSqlCreateManyRoleInputEnvelope
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
  }

  export type UserRoleSqlUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput> | UserRoleSqlCreateWithoutRoleInput[] | UserRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutRoleInput | UserRoleSqlCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleSqlCreateManyRoleInputEnvelope
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
  }

  export type PermissionRoleSqlUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput> | PermissionRoleSqlCreateWithoutRoleInput[] | PermissionRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutRoleInput | PermissionRoleSqlCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionRoleSqlUpsertWithWhereUniqueWithoutRoleInput | PermissionRoleSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionRoleSqlCreateManyRoleInputEnvelope
    set?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    disconnect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    delete?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    update?: PermissionRoleSqlUpdateWithWhereUniqueWithoutRoleInput | PermissionRoleSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionRoleSqlUpdateManyWithWhereWithoutRoleInput | PermissionRoleSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
  }

  export type UserRoleSqlUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput> | UserRoleSqlCreateWithoutRoleInput[] | UserRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutRoleInput | UserRoleSqlCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleSqlUpsertWithWhereUniqueWithoutRoleInput | UserRoleSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleSqlCreateManyRoleInputEnvelope
    set?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    disconnect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    delete?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    update?: UserRoleSqlUpdateWithWhereUniqueWithoutRoleInput | UserRoleSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleSqlUpdateManyWithWhereWithoutRoleInput | UserRoleSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
  }

  export type PermissionRoleSqlUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput> | PermissionRoleSqlCreateWithoutRoleInput[] | PermissionRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleSqlCreateOrConnectWithoutRoleInput | PermissionRoleSqlCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionRoleSqlUpsertWithWhereUniqueWithoutRoleInput | PermissionRoleSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionRoleSqlCreateManyRoleInputEnvelope
    set?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    disconnect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    delete?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    connect?: PermissionRoleSqlWhereUniqueInput | PermissionRoleSqlWhereUniqueInput[]
    update?: PermissionRoleSqlUpdateWithWhereUniqueWithoutRoleInput | PermissionRoleSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionRoleSqlUpdateManyWithWhereWithoutRoleInput | PermissionRoleSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
  }

  export type UserRoleSqlUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput> | UserRoleSqlCreateWithoutRoleInput[] | UserRoleSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutRoleInput | UserRoleSqlCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleSqlUpsertWithWhereUniqueWithoutRoleInput | UserRoleSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleSqlCreateManyRoleInputEnvelope
    set?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    disconnect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    delete?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    update?: UserRoleSqlUpdateWithWhereUniqueWithoutRoleInput | UserRoleSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleSqlUpdateManyWithWhereWithoutRoleInput | UserRoleSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
  }

  export type PermissionSqlCreateNestedOneWithoutPermission_rolesInput = {
    create?: XOR<PermissionSqlCreateWithoutPermission_rolesInput, PermissionSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutPermission_rolesInput
    connect?: PermissionSqlWhereUniqueInput
  }

  export type RoleSqlCreateNestedOneWithoutPermission_rolesInput = {
    create?: XOR<RoleSqlCreateWithoutPermission_rolesInput, RoleSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: RoleSqlCreateOrConnectWithoutPermission_rolesInput
    connect?: RoleSqlWhereUniqueInput
  }

  export type PermissionSqlUpdateOneRequiredWithoutPermission_rolesNestedInput = {
    create?: XOR<PermissionSqlCreateWithoutPermission_rolesInput, PermissionSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: PermissionSqlCreateOrConnectWithoutPermission_rolesInput
    upsert?: PermissionSqlUpsertWithoutPermission_rolesInput
    connect?: PermissionSqlWhereUniqueInput
    update?: XOR<XOR<PermissionSqlUpdateToOneWithWhereWithoutPermission_rolesInput, PermissionSqlUpdateWithoutPermission_rolesInput>, PermissionSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type RoleSqlUpdateOneRequiredWithoutPermission_rolesNestedInput = {
    create?: XOR<RoleSqlCreateWithoutPermission_rolesInput, RoleSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: RoleSqlCreateOrConnectWithoutPermission_rolesInput
    upsert?: RoleSqlUpsertWithoutPermission_rolesInput
    connect?: RoleSqlWhereUniqueInput
    update?: XOR<XOR<RoleSqlUpdateToOneWithWhereWithoutPermission_rolesInput, RoleSqlUpdateWithoutPermission_rolesInput>, RoleSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type UserRoleSqlCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput> | UserRoleSqlCreateWithoutUserInput[] | UserRoleSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutUserInput | UserRoleSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleSqlCreateManyUserInputEnvelope
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
  }

  export type UserSessionSqlCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput> | UserSessionSqlCreateWithoutUserInput[] | UserSessionSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionSqlCreateOrConnectWithoutUserInput | UserSessionSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionSqlCreateManyUserInputEnvelope
    connect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
  }

  export type UserRoleSqlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput> | UserRoleSqlCreateWithoutUserInput[] | UserRoleSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutUserInput | UserRoleSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleSqlCreateManyUserInputEnvelope
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
  }

  export type UserSessionSqlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput> | UserSessionSqlCreateWithoutUserInput[] | UserSessionSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionSqlCreateOrConnectWithoutUserInput | UserSessionSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionSqlCreateManyUserInputEnvelope
    connect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
  }

  export type UserRoleSqlUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput> | UserRoleSqlCreateWithoutUserInput[] | UserRoleSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutUserInput | UserRoleSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleSqlUpsertWithWhereUniqueWithoutUserInput | UserRoleSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleSqlCreateManyUserInputEnvelope
    set?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    disconnect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    delete?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    update?: UserRoleSqlUpdateWithWhereUniqueWithoutUserInput | UserRoleSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleSqlUpdateManyWithWhereWithoutUserInput | UserRoleSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
  }

  export type UserSessionSqlUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput> | UserSessionSqlCreateWithoutUserInput[] | UserSessionSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionSqlCreateOrConnectWithoutUserInput | UserSessionSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionSqlUpsertWithWhereUniqueWithoutUserInput | UserSessionSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionSqlCreateManyUserInputEnvelope
    set?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    disconnect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    delete?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    connect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    update?: UserSessionSqlUpdateWithWhereUniqueWithoutUserInput | UserSessionSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionSqlUpdateManyWithWhereWithoutUserInput | UserSessionSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionSqlScalarWhereInput | UserSessionSqlScalarWhereInput[]
  }

  export type UserRoleSqlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput> | UserRoleSqlCreateWithoutUserInput[] | UserRoleSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleSqlCreateOrConnectWithoutUserInput | UserRoleSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleSqlUpsertWithWhereUniqueWithoutUserInput | UserRoleSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleSqlCreateManyUserInputEnvelope
    set?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    disconnect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    delete?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    connect?: UserRoleSqlWhereUniqueInput | UserRoleSqlWhereUniqueInput[]
    update?: UserRoleSqlUpdateWithWhereUniqueWithoutUserInput | UserRoleSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleSqlUpdateManyWithWhereWithoutUserInput | UserRoleSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
  }

  export type UserSessionSqlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput> | UserSessionSqlCreateWithoutUserInput[] | UserSessionSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionSqlCreateOrConnectWithoutUserInput | UserSessionSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionSqlUpsertWithWhereUniqueWithoutUserInput | UserSessionSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionSqlCreateManyUserInputEnvelope
    set?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    disconnect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    delete?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    connect?: UserSessionSqlWhereUniqueInput | UserSessionSqlWhereUniqueInput[]
    update?: UserSessionSqlUpdateWithWhereUniqueWithoutUserInput | UserSessionSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionSqlUpdateManyWithWhereWithoutUserInput | UserSessionSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionSqlScalarWhereInput | UserSessionSqlScalarWhereInput[]
  }

  export type UserSqlCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserSqlCreateWithoutRolesInput, UserSqlUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserSqlCreateOrConnectWithoutRolesInput
    connect?: UserSqlWhereUniqueInput
  }

  export type RoleSqlCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleSqlCreateWithoutUsersInput, RoleSqlUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleSqlCreateOrConnectWithoutUsersInput
    connect?: RoleSqlWhereUniqueInput
  }

  export type UserSqlUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserSqlCreateWithoutRolesInput, UserSqlUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserSqlCreateOrConnectWithoutRolesInput
    upsert?: UserSqlUpsertWithoutRolesInput
    connect?: UserSqlWhereUniqueInput
    update?: XOR<XOR<UserSqlUpdateToOneWithWhereWithoutRolesInput, UserSqlUpdateWithoutRolesInput>, UserSqlUncheckedUpdateWithoutRolesInput>
  }

  export type RoleSqlUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleSqlCreateWithoutUsersInput, RoleSqlUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleSqlCreateOrConnectWithoutUsersInput
    upsert?: RoleSqlUpsertWithoutUsersInput
    connect?: RoleSqlWhereUniqueInput
    update?: XOR<XOR<RoleSqlUpdateToOneWithWhereWithoutUsersInput, RoleSqlUpdateWithoutUsersInput>, RoleSqlUncheckedUpdateWithoutUsersInput>
  }

  export type UserSqlCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserSqlCreateWithoutSessionsInput, UserSqlUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserSqlCreateOrConnectWithoutSessionsInput
    connect?: UserSqlWhereUniqueInput
  }

  export type UserSqlUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserSqlCreateWithoutSessionsInput, UserSqlUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserSqlCreateOrConnectWithoutSessionsInput
    upsert?: UserSqlUpsertWithoutSessionsInput
    connect?: UserSqlWhereUniqueInput
    update?: XOR<XOR<UserSqlUpdateToOneWithWhereWithoutSessionsInput, UserSqlUpdateWithoutSessionsInput>, UserSqlUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PermissionSqlCreateWithoutScopeInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceSqlCreateNestedOneWithoutPermissionsInput
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUncheckedCreateWithoutScopeInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlCreateOrConnectWithoutScopeInput = {
    where: PermissionSqlWhereUniqueInput
    create: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput>
  }

  export type PermissionSqlCreateManyScopeInputEnvelope = {
    data: PermissionSqlCreateManyScopeInput | PermissionSqlCreateManyScopeInput[]
    skipDuplicates?: boolean
  }

  export type PermissionSqlUpsertWithWhereUniqueWithoutScopeInput = {
    where: PermissionSqlWhereUniqueInput
    update: XOR<PermissionSqlUpdateWithoutScopeInput, PermissionSqlUncheckedUpdateWithoutScopeInput>
    create: XOR<PermissionSqlCreateWithoutScopeInput, PermissionSqlUncheckedCreateWithoutScopeInput>
  }

  export type PermissionSqlUpdateWithWhereUniqueWithoutScopeInput = {
    where: PermissionSqlWhereUniqueInput
    data: XOR<PermissionSqlUpdateWithoutScopeInput, PermissionSqlUncheckedUpdateWithoutScopeInput>
  }

  export type PermissionSqlUpdateManyWithWhereWithoutScopeInput = {
    where: PermissionSqlScalarWhereInput
    data: XOR<PermissionSqlUpdateManyMutationInput, PermissionSqlUncheckedUpdateManyWithoutScopeInput>
  }

  export type PermissionSqlScalarWhereInput = {
    AND?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
    OR?: PermissionSqlScalarWhereInput[]
    NOT?: PermissionSqlScalarWhereInput | PermissionSqlScalarWhereInput[]
    id?: IntFilter<"PermissionSql"> | number
    title?: StringNullableFilter<"PermissionSql"> | string | null
    name?: StringFilter<"PermissionSql"> | string
    desc?: StringNullableFilter<"PermissionSql"> | string | null
    resource_id?: IntFilter<"PermissionSql"> | number
    scope_id?: IntFilter<"PermissionSql"> | number
    created_at?: DateTimeFilter<"PermissionSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionSql"> | Date | string
  }

  export type PermissionSqlCreateWithoutResourceInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scope: ScopeSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUncheckedCreateWithoutResourceInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlCreateOrConnectWithoutResourceInput = {
    where: PermissionSqlWhereUniqueInput
    create: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput>
  }

  export type PermissionSqlCreateManyResourceInputEnvelope = {
    data: PermissionSqlCreateManyResourceInput | PermissionSqlCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type PermissionSqlUpsertWithWhereUniqueWithoutResourceInput = {
    where: PermissionSqlWhereUniqueInput
    update: XOR<PermissionSqlUpdateWithoutResourceInput, PermissionSqlUncheckedUpdateWithoutResourceInput>
    create: XOR<PermissionSqlCreateWithoutResourceInput, PermissionSqlUncheckedCreateWithoutResourceInput>
  }

  export type PermissionSqlUpdateWithWhereUniqueWithoutResourceInput = {
    where: PermissionSqlWhereUniqueInput
    data: XOR<PermissionSqlUpdateWithoutResourceInput, PermissionSqlUncheckedUpdateWithoutResourceInput>
  }

  export type PermissionSqlUpdateManyWithWhereWithoutResourceInput = {
    where: PermissionSqlScalarWhereInput
    data: XOR<PermissionSqlUpdateManyMutationInput, PermissionSqlUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceSqlCreateWithoutPermissionsInput = {
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceSqlUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceSqlCreateOrConnectWithoutPermissionsInput = {
    where: ResourceSqlWhereUniqueInput
    create: XOR<ResourceSqlCreateWithoutPermissionsInput, ResourceSqlUncheckedCreateWithoutPermissionsInput>
  }

  export type ScopeSqlCreateWithoutScopesInput = {
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeSqlUncheckedCreateWithoutScopesInput = {
    id?: number
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeSqlCreateOrConnectWithoutScopesInput = {
    where: ScopeSqlWhereUniqueInput
    create: XOR<ScopeSqlCreateWithoutScopesInput, ScopeSqlUncheckedCreateWithoutScopesInput>
  }

  export type PermissionRoleSqlCreateWithoutPermissionInput = {
    role: RoleSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleSqlUncheckedCreateWithoutPermissionInput = {
    role_id: number
  }

  export type PermissionRoleSqlCreateOrConnectWithoutPermissionInput = {
    where: PermissionRoleSqlWhereUniqueInput
    create: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionRoleSqlCreateManyPermissionInputEnvelope = {
    data: PermissionRoleSqlCreateManyPermissionInput | PermissionRoleSqlCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RelatedPermissionSqlCreateWithoutChildInput = {
    parent: PermissionSqlCreateNestedOneWithoutChildrenInput
  }

  export type RelatedPermissionSqlUncheckedCreateWithoutChildInput = {
    parent_id: number
  }

  export type RelatedPermissionSqlCreateOrConnectWithoutChildInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    create: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput>
  }

  export type RelatedPermissionSqlCreateManyChildInputEnvelope = {
    data: RelatedPermissionSqlCreateManyChildInput | RelatedPermissionSqlCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type RelatedPermissionSqlCreateWithoutParentInput = {
    child: PermissionSqlCreateNestedOneWithoutParentInput
  }

  export type RelatedPermissionSqlUncheckedCreateWithoutParentInput = {
    child_id: number
  }

  export type RelatedPermissionSqlCreateOrConnectWithoutParentInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    create: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput>
  }

  export type RelatedPermissionSqlCreateManyParentInputEnvelope = {
    data: RelatedPermissionSqlCreateManyParentInput | RelatedPermissionSqlCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ResourceSqlUpsertWithoutPermissionsInput = {
    update: XOR<ResourceSqlUpdateWithoutPermissionsInput, ResourceSqlUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ResourceSqlCreateWithoutPermissionsInput, ResourceSqlUncheckedCreateWithoutPermissionsInput>
    where?: ResourceSqlWhereInput
  }

  export type ResourceSqlUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ResourceSqlWhereInput
    data: XOR<ResourceSqlUpdateWithoutPermissionsInput, ResourceSqlUncheckedUpdateWithoutPermissionsInput>
  }

  export type ResourceSqlUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceSqlUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeSqlUpsertWithoutScopesInput = {
    update: XOR<ScopeSqlUpdateWithoutScopesInput, ScopeSqlUncheckedUpdateWithoutScopesInput>
    create: XOR<ScopeSqlCreateWithoutScopesInput, ScopeSqlUncheckedCreateWithoutScopesInput>
    where?: ScopeSqlWhereInput
  }

  export type ScopeSqlUpdateToOneWithWhereWithoutScopesInput = {
    where?: ScopeSqlWhereInput
    data: XOR<ScopeSqlUpdateWithoutScopesInput, ScopeSqlUncheckedUpdateWithoutScopesInput>
  }

  export type ScopeSqlUpdateWithoutScopesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeSqlUncheckedUpdateWithoutScopesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleSqlUpsertWithWhereUniqueWithoutPermissionInput = {
    where: PermissionRoleSqlWhereUniqueInput
    update: XOR<PermissionRoleSqlUpdateWithoutPermissionInput, PermissionRoleSqlUncheckedUpdateWithoutPermissionInput>
    create: XOR<PermissionRoleSqlCreateWithoutPermissionInput, PermissionRoleSqlUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionRoleSqlUpdateWithWhereUniqueWithoutPermissionInput = {
    where: PermissionRoleSqlWhereUniqueInput
    data: XOR<PermissionRoleSqlUpdateWithoutPermissionInput, PermissionRoleSqlUncheckedUpdateWithoutPermissionInput>
  }

  export type PermissionRoleSqlUpdateManyWithWhereWithoutPermissionInput = {
    where: PermissionRoleSqlScalarWhereInput
    data: XOR<PermissionRoleSqlUpdateManyMutationInput, PermissionRoleSqlUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionRoleSqlScalarWhereInput = {
    AND?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
    OR?: PermissionRoleSqlScalarWhereInput[]
    NOT?: PermissionRoleSqlScalarWhereInput | PermissionRoleSqlScalarWhereInput[]
    permission_id?: IntFilter<"PermissionRoleSql"> | number
    role_id?: IntFilter<"PermissionRoleSql"> | number
  }

  export type RelatedPermissionSqlUpsertWithWhereUniqueWithoutChildInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    update: XOR<RelatedPermissionSqlUpdateWithoutChildInput, RelatedPermissionSqlUncheckedUpdateWithoutChildInput>
    create: XOR<RelatedPermissionSqlCreateWithoutChildInput, RelatedPermissionSqlUncheckedCreateWithoutChildInput>
  }

  export type RelatedPermissionSqlUpdateWithWhereUniqueWithoutChildInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    data: XOR<RelatedPermissionSqlUpdateWithoutChildInput, RelatedPermissionSqlUncheckedUpdateWithoutChildInput>
  }

  export type RelatedPermissionSqlUpdateManyWithWhereWithoutChildInput = {
    where: RelatedPermissionSqlScalarWhereInput
    data: XOR<RelatedPermissionSqlUpdateManyMutationInput, RelatedPermissionSqlUncheckedUpdateManyWithoutChildInput>
  }

  export type RelatedPermissionSqlScalarWhereInput = {
    AND?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
    OR?: RelatedPermissionSqlScalarWhereInput[]
    NOT?: RelatedPermissionSqlScalarWhereInput | RelatedPermissionSqlScalarWhereInput[]
    parent_id?: IntFilter<"RelatedPermissionSql"> | number
    child_id?: IntFilter<"RelatedPermissionSql"> | number
  }

  export type RelatedPermissionSqlUpsertWithWhereUniqueWithoutParentInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    update: XOR<RelatedPermissionSqlUpdateWithoutParentInput, RelatedPermissionSqlUncheckedUpdateWithoutParentInput>
    create: XOR<RelatedPermissionSqlCreateWithoutParentInput, RelatedPermissionSqlUncheckedCreateWithoutParentInput>
  }

  export type RelatedPermissionSqlUpdateWithWhereUniqueWithoutParentInput = {
    where: RelatedPermissionSqlWhereUniqueInput
    data: XOR<RelatedPermissionSqlUpdateWithoutParentInput, RelatedPermissionSqlUncheckedUpdateWithoutParentInput>
  }

  export type RelatedPermissionSqlUpdateManyWithWhereWithoutParentInput = {
    where: RelatedPermissionSqlScalarWhereInput
    data: XOR<RelatedPermissionSqlUpdateManyMutationInput, RelatedPermissionSqlUncheckedUpdateManyWithoutParentInput>
  }

  export type PermissionSqlCreateWithoutChildrenInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlCreateNestedManyWithoutChildInput
  }

  export type PermissionSqlUncheckedCreateWithoutChildrenInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput
  }

  export type PermissionSqlCreateOrConnectWithoutChildrenInput = {
    where: PermissionSqlWhereUniqueInput
    create: XOR<PermissionSqlCreateWithoutChildrenInput, PermissionSqlUncheckedCreateWithoutChildrenInput>
  }

  export type PermissionSqlCreateWithoutParentInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutPermissionInput
    children?: RelatedPermissionSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUncheckedCreateWithoutParentInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutPermissionInput
    children?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlCreateOrConnectWithoutParentInput = {
    where: PermissionSqlWhereUniqueInput
    create: XOR<PermissionSqlCreateWithoutParentInput, PermissionSqlUncheckedCreateWithoutParentInput>
  }

  export type PermissionSqlUpsertWithoutChildrenInput = {
    update: XOR<PermissionSqlUpdateWithoutChildrenInput, PermissionSqlUncheckedUpdateWithoutChildrenInput>
    create: XOR<PermissionSqlCreateWithoutChildrenInput, PermissionSqlUncheckedCreateWithoutChildrenInput>
    where?: PermissionSqlWhereInput
  }

  export type PermissionSqlUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PermissionSqlWhereInput
    data: XOR<PermissionSqlUpdateWithoutChildrenInput, PermissionSqlUncheckedUpdateWithoutChildrenInput>
  }

  export type PermissionSqlUpdateWithoutChildrenInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUpdateManyWithoutChildNestedInput
  }

  export type PermissionSqlUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput
  }

  export type PermissionSqlUpsertWithoutParentInput = {
    update: XOR<PermissionSqlUpdateWithoutParentInput, PermissionSqlUncheckedUpdateWithoutParentInput>
    create: XOR<PermissionSqlCreateWithoutParentInput, PermissionSqlUncheckedCreateWithoutParentInput>
    where?: PermissionSqlWhereInput
  }

  export type PermissionSqlUpdateToOneWithWhereWithoutParentInput = {
    where?: PermissionSqlWhereInput
    data: XOR<PermissionSqlUpdateWithoutParentInput, PermissionSqlUncheckedUpdateWithoutParentInput>
  }

  export type PermissionSqlUpdateWithoutParentInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleSqlUpdateManyWithoutPermissionNestedInput
    children?: RelatedPermissionSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput
    children?: RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionRoleSqlCreateWithoutRoleInput = {
    permission: PermissionSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleSqlUncheckedCreateWithoutRoleInput = {
    permission_id: number
  }

  export type PermissionRoleSqlCreateOrConnectWithoutRoleInput = {
    where: PermissionRoleSqlWhereUniqueInput
    create: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput>
  }

  export type PermissionRoleSqlCreateManyRoleInputEnvelope = {
    data: PermissionRoleSqlCreateManyRoleInput | PermissionRoleSqlCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleSqlCreateWithoutRoleInput = {
    uuid: string
    user: UserSqlCreateNestedOneWithoutRolesInput
  }

  export type UserRoleSqlUncheckedCreateWithoutRoleInput = {
    user_id: number
    uuid: string
  }

  export type UserRoleSqlCreateOrConnectWithoutRoleInput = {
    where: UserRoleSqlWhereUniqueInput
    create: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleSqlCreateManyRoleInputEnvelope = {
    data: UserRoleSqlCreateManyRoleInput | UserRoleSqlCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionRoleSqlUpsertWithWhereUniqueWithoutRoleInput = {
    where: PermissionRoleSqlWhereUniqueInput
    update: XOR<PermissionRoleSqlUpdateWithoutRoleInput, PermissionRoleSqlUncheckedUpdateWithoutRoleInput>
    create: XOR<PermissionRoleSqlCreateWithoutRoleInput, PermissionRoleSqlUncheckedCreateWithoutRoleInput>
  }

  export type PermissionRoleSqlUpdateWithWhereUniqueWithoutRoleInput = {
    where: PermissionRoleSqlWhereUniqueInput
    data: XOR<PermissionRoleSqlUpdateWithoutRoleInput, PermissionRoleSqlUncheckedUpdateWithoutRoleInput>
  }

  export type PermissionRoleSqlUpdateManyWithWhereWithoutRoleInput = {
    where: PermissionRoleSqlScalarWhereInput
    data: XOR<PermissionRoleSqlUpdateManyMutationInput, PermissionRoleSqlUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleSqlUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleSqlWhereUniqueInput
    update: XOR<UserRoleSqlUpdateWithoutRoleInput, UserRoleSqlUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleSqlCreateWithoutRoleInput, UserRoleSqlUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleSqlUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleSqlWhereUniqueInput
    data: XOR<UserRoleSqlUpdateWithoutRoleInput, UserRoleSqlUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleSqlUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleSqlScalarWhereInput
    data: XOR<UserRoleSqlUpdateManyMutationInput, UserRoleSqlUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleSqlScalarWhereInput = {
    AND?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
    OR?: UserRoleSqlScalarWhereInput[]
    NOT?: UserRoleSqlScalarWhereInput | UserRoleSqlScalarWhereInput[]
    user_id?: IntFilter<"UserRoleSql"> | number
    role_id?: IntFilter<"UserRoleSql"> | number
    uuid?: StringFilter<"UserRoleSql"> | string
  }

  export type PermissionSqlCreateWithoutPermission_rolesInput = {
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeSqlCreateNestedOneWithoutScopesInput
    parent?: RelatedPermissionSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlUncheckedCreateWithoutPermission_rolesInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
    parent?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionSqlCreateOrConnectWithoutPermission_rolesInput = {
    where: PermissionSqlWhereUniqueInput
    create: XOR<PermissionSqlCreateWithoutPermission_rolesInput, PermissionSqlUncheckedCreateWithoutPermission_rolesInput>
  }

  export type RoleSqlCreateWithoutPermission_rolesInput = {
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserRoleSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlUncheckedCreateWithoutPermission_rolesInput = {
    id?: number
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserRoleSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlCreateOrConnectWithoutPermission_rolesInput = {
    where: RoleSqlWhereUniqueInput
    create: XOR<RoleSqlCreateWithoutPermission_rolesInput, RoleSqlUncheckedCreateWithoutPermission_rolesInput>
  }

  export type PermissionSqlUpsertWithoutPermission_rolesInput = {
    update: XOR<PermissionSqlUpdateWithoutPermission_rolesInput, PermissionSqlUncheckedUpdateWithoutPermission_rolesInput>
    create: XOR<PermissionSqlCreateWithoutPermission_rolesInput, PermissionSqlUncheckedCreateWithoutPermission_rolesInput>
    where?: PermissionSqlWhereInput
  }

  export type PermissionSqlUpdateToOneWithWhereWithoutPermission_rolesInput = {
    where?: PermissionSqlWhereInput
    data: XOR<PermissionSqlUpdateWithoutPermission_rolesInput, PermissionSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type PermissionSqlUpdateWithoutPermission_rolesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeSqlUpdateOneRequiredWithoutScopesNestedInput
    parent?: RelatedPermissionSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateWithoutPermission_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoleSqlUpsertWithoutPermission_rolesInput = {
    update: XOR<RoleSqlUpdateWithoutPermission_rolesInput, RoleSqlUncheckedUpdateWithoutPermission_rolesInput>
    create: XOR<RoleSqlCreateWithoutPermission_rolesInput, RoleSqlUncheckedCreateWithoutPermission_rolesInput>
    where?: RoleSqlWhereInput
  }

  export type RoleSqlUpdateToOneWithWhereWithoutPermission_rolesInput = {
    where?: RoleSqlWhereInput
    data: XOR<RoleSqlUpdateWithoutPermission_rolesInput, RoleSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type RoleSqlUpdateWithoutPermission_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleSqlUncheckedUpdateWithoutPermission_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleSqlCreateWithoutUserInput = {
    uuid: string
    role: RoleSqlCreateNestedOneWithoutUsersInput
  }

  export type UserRoleSqlUncheckedCreateWithoutUserInput = {
    role_id: number
    uuid: string
  }

  export type UserRoleSqlCreateOrConnectWithoutUserInput = {
    where: UserRoleSqlWhereUniqueInput
    create: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput>
  }

  export type UserRoleSqlCreateManyUserInputEnvelope = {
    data: UserRoleSqlCreateManyUserInput | UserRoleSqlCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionSqlCreateWithoutUserInput = {
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionSqlUncheckedCreateWithoutUserInput = {
    id?: number
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionSqlCreateOrConnectWithoutUserInput = {
    where: UserSessionSqlWhereUniqueInput
    create: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput>
  }

  export type UserSessionSqlCreateManyUserInputEnvelope = {
    data: UserSessionSqlCreateManyUserInput | UserSessionSqlCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleSqlUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleSqlWhereUniqueInput
    update: XOR<UserRoleSqlUpdateWithoutUserInput, UserRoleSqlUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleSqlCreateWithoutUserInput, UserRoleSqlUncheckedCreateWithoutUserInput>
  }

  export type UserRoleSqlUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleSqlWhereUniqueInput
    data: XOR<UserRoleSqlUpdateWithoutUserInput, UserRoleSqlUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleSqlUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleSqlScalarWhereInput
    data: XOR<UserRoleSqlUpdateManyMutationInput, UserRoleSqlUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionSqlUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionSqlWhereUniqueInput
    update: XOR<UserSessionSqlUpdateWithoutUserInput, UserSessionSqlUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionSqlCreateWithoutUserInput, UserSessionSqlUncheckedCreateWithoutUserInput>
  }

  export type UserSessionSqlUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionSqlWhereUniqueInput
    data: XOR<UserSessionSqlUpdateWithoutUserInput, UserSessionSqlUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionSqlUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionSqlScalarWhereInput
    data: XOR<UserSessionSqlUpdateManyMutationInput, UserSessionSqlUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionSqlScalarWhereInput = {
    AND?: UserSessionSqlScalarWhereInput | UserSessionSqlScalarWhereInput[]
    OR?: UserSessionSqlScalarWhereInput[]
    NOT?: UserSessionSqlScalarWhereInput | UserSessionSqlScalarWhereInput[]
    id?: IntFilter<"UserSessionSql"> | number
    token?: StringNullableFilter<"UserSessionSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionSql"> | string | null
    user_id?: IntFilter<"UserSessionSql"> | number
    created_at?: DateTimeFilter<"UserSessionSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionSql"> | Date | string
  }

  export type UserSqlCreateWithoutRolesInput = {
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: UserSessionSqlCreateNestedManyWithoutUserInput
  }

  export type UserSqlUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: UserSessionSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSqlCreateOrConnectWithoutRolesInput = {
    where: UserSqlWhereUniqueInput
    create: XOR<UserSqlCreateWithoutRolesInput, UserSqlUncheckedCreateWithoutRolesInput>
  }

  export type RoleSqlCreateWithoutUsersInput = {
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleSqlCreateOrConnectWithoutUsersInput = {
    where: RoleSqlWhereUniqueInput
    create: XOR<RoleSqlCreateWithoutUsersInput, RoleSqlUncheckedCreateWithoutUsersInput>
  }

  export type UserSqlUpsertWithoutRolesInput = {
    update: XOR<UserSqlUpdateWithoutRolesInput, UserSqlUncheckedUpdateWithoutRolesInput>
    create: XOR<UserSqlCreateWithoutRolesInput, UserSqlUncheckedCreateWithoutRolesInput>
    where?: UserSqlWhereInput
  }

  export type UserSqlUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserSqlWhereInput
    data: XOR<UserSqlUpdateWithoutRolesInput, UserSqlUncheckedUpdateWithoutRolesInput>
  }

  export type UserSqlUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionSqlUpdateManyWithoutUserNestedInput
  }

  export type UserSqlUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleSqlUpsertWithoutUsersInput = {
    update: XOR<RoleSqlUpdateWithoutUsersInput, RoleSqlUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleSqlCreateWithoutUsersInput, RoleSqlUncheckedCreateWithoutUsersInput>
    where?: RoleSqlWhereInput
  }

  export type RoleSqlUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleSqlWhereInput
    data: XOR<RoleSqlUpdateWithoutUsersInput, RoleSqlUncheckedUpdateWithoutUsersInput>
  }

  export type RoleSqlUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleSqlUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserSqlCreateWithoutSessionsInput = {
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleSqlCreateNestedManyWithoutUserInput
  }

  export type UserSqlUncheckedCreateWithoutSessionsInput = {
    id?: number
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserSqlCreateOrConnectWithoutSessionsInput = {
    where: UserSqlWhereUniqueInput
    create: XOR<UserSqlCreateWithoutSessionsInput, UserSqlUncheckedCreateWithoutSessionsInput>
  }

  export type UserSqlUpsertWithoutSessionsInput = {
    update: XOR<UserSqlUpdateWithoutSessionsInput, UserSqlUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserSqlCreateWithoutSessionsInput, UserSqlUncheckedCreateWithoutSessionsInput>
    where?: UserSqlWhereInput
  }

  export type UserSqlUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserSqlWhereInput
    data: XOR<UserSqlUpdateWithoutSessionsInput, UserSqlUncheckedUpdateWithoutSessionsInput>
  }

  export type UserSqlUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleSqlUpdateManyWithoutUserNestedInput
  }

  export type UserSqlUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PermissionSqlCreateManyScopeInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    resource_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionSqlUpdateWithoutScopeInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceSqlUpdateOneRequiredWithoutPermissionsNestedInput
    permission_roles?: PermissionRoleSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateWithoutScopeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateManyWithoutScopeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionSqlCreateManyResourceInput = {
    id?: number
    title?: string | null
    name: string
    desc?: string | null
    scope_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionSqlUpdateWithoutResourceInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: ScopeSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionSqlUncheckedUpdateManyWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    scope_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleSqlCreateManyPermissionInput = {
    role_id: number
  }

  export type RelatedPermissionSqlCreateManyChildInput = {
    parent_id: number
  }

  export type RelatedPermissionSqlCreateManyParentInput = {
    child_id: number
  }

  export type PermissionRoleSqlUpdateWithoutPermissionInput = {
    role?: RoleSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleSqlUncheckedUpdateWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionRoleSqlUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type RelatedPermissionSqlUpdateWithoutChildInput = {
    parent?: PermissionSqlUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type RelatedPermissionSqlUncheckedUpdateWithoutChildInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type RelatedPermissionSqlUncheckedUpdateManyWithoutChildInput = {
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type RelatedPermissionSqlUpdateWithoutParentInput = {
    child?: PermissionSqlUpdateOneRequiredWithoutParentNestedInput
  }

  export type RelatedPermissionSqlUncheckedUpdateWithoutParentInput = {
    child_id?: IntFieldUpdateOperationsInput | number
  }

  export type RelatedPermissionSqlUncheckedUpdateManyWithoutParentInput = {
    child_id?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionRoleSqlCreateManyRoleInput = {
    permission_id: number
  }

  export type UserRoleSqlCreateManyRoleInput = {
    user_id: number
    uuid: string
  }

  export type PermissionRoleSqlUpdateWithoutRoleInput = {
    permission?: PermissionSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleSqlUncheckedUpdateWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionRoleSqlUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleSqlUpdateWithoutRoleInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserSqlUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleSqlUncheckedUpdateWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleSqlUncheckedUpdateManyWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleSqlCreateManyUserInput = {
    role_id: number
    uuid: string
  }

  export type UserSessionSqlCreateManyUserInput = {
    id?: number
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserRoleSqlUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: RoleSqlUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleSqlUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleSqlUncheckedUpdateManyWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionSqlUpdateWithoutUserInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionSqlUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionSqlUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}