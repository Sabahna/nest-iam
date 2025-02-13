
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
 * Model ScopeNoSql
 * 
 */
export type ScopeNoSql = $Result.DefaultSelection<Prisma.$ScopeNoSqlPayload>
/**
 * Model ResourceNoSql
 * 
 */
export type ResourceNoSql = $Result.DefaultSelection<Prisma.$ResourceNoSqlPayload>
/**
 * Model PermissionNoSql
 * 
 */
export type PermissionNoSql = $Result.DefaultSelection<Prisma.$PermissionNoSqlPayload>
/**
 * Model RelatedPermissionNoSql
 * 
 */
export type RelatedPermissionNoSql = $Result.DefaultSelection<Prisma.$RelatedPermissionNoSqlPayload>
/**
 * Model RoleNoSql
 * 
 */
export type RoleNoSql = $Result.DefaultSelection<Prisma.$RoleNoSqlPayload>
/**
 * Model PermissionRoleNoSql
 * 
 */
export type PermissionRoleNoSql = $Result.DefaultSelection<Prisma.$PermissionRoleNoSqlPayload>
/**
 * Model UserNoSql
 * 
 */
export type UserNoSql = $Result.DefaultSelection<Prisma.$UserNoSqlPayload>
/**
 * Model UserRoleNoSql
 * 
 */
export type UserRoleNoSql = $Result.DefaultSelection<Prisma.$UserRoleNoSqlPayload>
/**
 * Model UserSessionNoSql
 * 
 */
export type UserSessionNoSql = $Result.DefaultSelection<Prisma.$UserSessionNoSqlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScopeNoSqls
 * const scopeNoSqls = await prisma.scopeNoSql.findMany()
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
   * // Fetch zero or more ScopeNoSqls
   * const scopeNoSqls = await prisma.scopeNoSql.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.scopeNoSql`: Exposes CRUD operations for the **ScopeNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScopeNoSqls
    * const scopeNoSqls = await prisma.scopeNoSql.findMany()
    * ```
    */
  get scopeNoSql(): Prisma.ScopeNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceNoSql`: Exposes CRUD operations for the **ResourceNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceNoSqls
    * const resourceNoSqls = await prisma.resourceNoSql.findMany()
    * ```
    */
  get resourceNoSql(): Prisma.ResourceNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionNoSql`: Exposes CRUD operations for the **PermissionNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionNoSqls
    * const permissionNoSqls = await prisma.permissionNoSql.findMany()
    * ```
    */
  get permissionNoSql(): Prisma.PermissionNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatedPermissionNoSql`: Exposes CRUD operations for the **RelatedPermissionNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatedPermissionNoSqls
    * const relatedPermissionNoSqls = await prisma.relatedPermissionNoSql.findMany()
    * ```
    */
  get relatedPermissionNoSql(): Prisma.RelatedPermissionNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roleNoSql`: Exposes CRUD operations for the **RoleNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleNoSqls
    * const roleNoSqls = await prisma.roleNoSql.findMany()
    * ```
    */
  get roleNoSql(): Prisma.RoleNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionRoleNoSql`: Exposes CRUD operations for the **PermissionRoleNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionRoleNoSqls
    * const permissionRoleNoSqls = await prisma.permissionRoleNoSql.findMany()
    * ```
    */
  get permissionRoleNoSql(): Prisma.PermissionRoleNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userNoSql`: Exposes CRUD operations for the **UserNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserNoSqls
    * const userNoSqls = await prisma.userNoSql.findMany()
    * ```
    */
  get userNoSql(): Prisma.UserNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRoleNoSql`: Exposes CRUD operations for the **UserRoleNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoleNoSqls
    * const userRoleNoSqls = await prisma.userRoleNoSql.findMany()
    * ```
    */
  get userRoleNoSql(): Prisma.UserRoleNoSqlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSessionNoSql`: Exposes CRUD operations for the **UserSessionNoSql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessionNoSqls
    * const userSessionNoSqls = await prisma.userSessionNoSql.findMany()
    * ```
    */
  get userSessionNoSql(): Prisma.UserSessionNoSqlDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "scopeNoSql" | "resourceNoSql" | "permissionNoSql" | "relatedPermissionNoSql" | "roleNoSql" | "permissionRoleNoSql" | "userNoSql" | "userRoleNoSql" | "userSessionNoSql"
      txIsolationLevel: never
    }
    model: {
      ScopeNoSql: {
        payload: Prisma.$ScopeNoSqlPayload<ExtArgs>
        fields: Prisma.ScopeNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScopeNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScopeNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          findFirst: {
            args: Prisma.ScopeNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScopeNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          findMany: {
            args: Prisma.ScopeNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>[]
          }
          create: {
            args: Prisma.ScopeNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          createMany: {
            args: Prisma.ScopeNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScopeNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          update: {
            args: Prisma.ScopeNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.ScopeNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScopeNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScopeNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScopeNoSqlPayload>
          }
          aggregate: {
            args: Prisma.ScopeNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScopeNoSql>
          }
          groupBy: {
            args: Prisma.ScopeNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScopeNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScopeNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScopeNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScopeNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<ScopeNoSqlCountAggregateOutputType> | number
          }
        }
      }
      ResourceNoSql: {
        payload: Prisma.$ResourceNoSqlPayload<ExtArgs>
        fields: Prisma.ResourceNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          findFirst: {
            args: Prisma.ResourceNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          findMany: {
            args: Prisma.ResourceNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>[]
          }
          create: {
            args: Prisma.ResourceNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          createMany: {
            args: Prisma.ResourceNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResourceNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          update: {
            args: Prisma.ResourceNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.ResourceNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceNoSqlPayload>
          }
          aggregate: {
            args: Prisma.ResourceNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceNoSql>
          }
          groupBy: {
            args: Prisma.ResourceNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResourceNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResourceNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResourceNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceNoSqlCountAggregateOutputType> | number
          }
        }
      }
      PermissionNoSql: {
        payload: Prisma.$PermissionNoSqlPayload<ExtArgs>
        fields: Prisma.PermissionNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          findFirst: {
            args: Prisma.PermissionNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          findMany: {
            args: Prisma.PermissionNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>[]
          }
          create: {
            args: Prisma.PermissionNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          createMany: {
            args: Prisma.PermissionNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          update: {
            args: Prisma.PermissionNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.PermissionNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNoSqlPayload>
          }
          aggregate: {
            args: Prisma.PermissionNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionNoSql>
          }
          groupBy: {
            args: Prisma.PermissionNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PermissionNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PermissionNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PermissionNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionNoSqlCountAggregateOutputType> | number
          }
        }
      }
      RelatedPermissionNoSql: {
        payload: Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>
        fields: Prisma.RelatedPermissionNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatedPermissionNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatedPermissionNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          findFirst: {
            args: Prisma.RelatedPermissionNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatedPermissionNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          findMany: {
            args: Prisma.RelatedPermissionNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>[]
          }
          create: {
            args: Prisma.RelatedPermissionNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          createMany: {
            args: Prisma.RelatedPermissionNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RelatedPermissionNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          update: {
            args: Prisma.RelatedPermissionNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.RelatedPermissionNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatedPermissionNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RelatedPermissionNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatedPermissionNoSqlPayload>
          }
          aggregate: {
            args: Prisma.RelatedPermissionNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatedPermissionNoSql>
          }
          groupBy: {
            args: Prisma.RelatedPermissionNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatedPermissionNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RelatedPermissionNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RelatedPermissionNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RelatedPermissionNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<RelatedPermissionNoSqlCountAggregateOutputType> | number
          }
        }
      }
      RoleNoSql: {
        payload: Prisma.$RoleNoSqlPayload<ExtArgs>
        fields: Prisma.RoleNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          findFirst: {
            args: Prisma.RoleNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          findMany: {
            args: Prisma.RoleNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>[]
          }
          create: {
            args: Prisma.RoleNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          createMany: {
            args: Prisma.RoleNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          update: {
            args: Prisma.RoleNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.RoleNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleNoSqlPayload>
          }
          aggregate: {
            args: Prisma.RoleNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleNoSql>
          }
          groupBy: {
            args: Prisma.RoleNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoleNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoleNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoleNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<RoleNoSqlCountAggregateOutputType> | number
          }
        }
      }
      PermissionRoleNoSql: {
        payload: Prisma.$PermissionRoleNoSqlPayload<ExtArgs>
        fields: Prisma.PermissionRoleNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionRoleNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionRoleNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          findFirst: {
            args: Prisma.PermissionRoleNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionRoleNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          findMany: {
            args: Prisma.PermissionRoleNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>[]
          }
          create: {
            args: Prisma.PermissionRoleNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          createMany: {
            args: Prisma.PermissionRoleNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionRoleNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          update: {
            args: Prisma.PermissionRoleNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.PermissionRoleNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionRoleNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionRoleNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionRoleNoSqlPayload>
          }
          aggregate: {
            args: Prisma.PermissionRoleNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionRoleNoSql>
          }
          groupBy: {
            args: Prisma.PermissionRoleNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionRoleNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PermissionRoleNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PermissionRoleNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PermissionRoleNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionRoleNoSqlCountAggregateOutputType> | number
          }
        }
      }
      UserNoSql: {
        payload: Prisma.$UserNoSqlPayload<ExtArgs>
        fields: Prisma.UserNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          findFirst: {
            args: Prisma.UserNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          findMany: {
            args: Prisma.UserNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>[]
          }
          create: {
            args: Prisma.UserNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          createMany: {
            args: Prisma.UserNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          update: {
            args: Prisma.UserNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserNoSqlPayload>
          }
          aggregate: {
            args: Prisma.UserNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserNoSql>
          }
          groupBy: {
            args: Prisma.UserNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserNoSqlCountAggregateOutputType> | number
          }
        }
      }
      UserRoleNoSql: {
        payload: Prisma.$UserRoleNoSqlPayload<ExtArgs>
        fields: Prisma.UserRoleNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          findFirst: {
            args: Prisma.UserRoleNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          findMany: {
            args: Prisma.UserRoleNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>[]
          }
          create: {
            args: Prisma.UserRoleNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          createMany: {
            args: Prisma.UserRoleNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          update: {
            args: Prisma.UserRoleNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserRoleNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleNoSqlPayload>
          }
          aggregate: {
            args: Prisma.UserRoleNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRoleNoSql>
          }
          groupBy: {
            args: Prisma.UserRoleNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserRoleNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserRoleNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserRoleNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleNoSqlCountAggregateOutputType> | number
          }
        }
      }
      UserSessionNoSql: {
        payload: Prisma.$UserSessionNoSqlPayload<ExtArgs>
        fields: Prisma.UserSessionNoSqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionNoSqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionNoSqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          findFirst: {
            args: Prisma.UserSessionNoSqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionNoSqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          findMany: {
            args: Prisma.UserSessionNoSqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>[]
          }
          create: {
            args: Prisma.UserSessionNoSqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          createMany: {
            args: Prisma.UserSessionNoSqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSessionNoSqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          update: {
            args: Prisma.UserSessionNoSqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionNoSqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionNoSqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSessionNoSqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionNoSqlPayload>
          }
          aggregate: {
            args: Prisma.UserSessionNoSqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSessionNoSql>
          }
          groupBy: {
            args: Prisma.UserSessionNoSqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionNoSqlGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserSessionNoSqlFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserSessionNoSqlAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserSessionNoSqlCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionNoSqlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    scopeNoSql?: ScopeNoSqlOmit
    resourceNoSql?: ResourceNoSqlOmit
    permissionNoSql?: PermissionNoSqlOmit
    relatedPermissionNoSql?: RelatedPermissionNoSqlOmit
    roleNoSql?: RoleNoSqlOmit
    permissionRoleNoSql?: PermissionRoleNoSqlOmit
    userNoSql?: UserNoSqlOmit
    userRoleNoSql?: UserRoleNoSqlOmit
    userSessionNoSql?: UserSessionNoSqlOmit
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
   * Count Type ScopeNoSqlCountOutputType
   */

  export type ScopeNoSqlCountOutputType = {
    scopes: number
  }

  export type ScopeNoSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scopes?: boolean | ScopeNoSqlCountOutputTypeCountScopesArgs
  }

  // Custom InputTypes
  /**
   * ScopeNoSqlCountOutputType without action
   */
  export type ScopeNoSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSqlCountOutputType
     */
    select?: ScopeNoSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScopeNoSqlCountOutputType without action
   */
  export type ScopeNoSqlCountOutputTypeCountScopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionNoSqlWhereInput
  }


  /**
   * Count Type ResourceNoSqlCountOutputType
   */

  export type ResourceNoSqlCountOutputType = {
    permissions: number
  }

  export type ResourceNoSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ResourceNoSqlCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * ResourceNoSqlCountOutputType without action
   */
  export type ResourceNoSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSqlCountOutputType
     */
    select?: ResourceNoSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceNoSqlCountOutputType without action
   */
  export type ResourceNoSqlCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionNoSqlWhereInput
  }


  /**
   * Count Type PermissionNoSqlCountOutputType
   */

  export type PermissionNoSqlCountOutputType = {
    permission_roles: number
    parent: number
    children: number
  }

  export type PermissionNoSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | PermissionNoSqlCountOutputTypeCountPermission_rolesArgs
    parent?: boolean | PermissionNoSqlCountOutputTypeCountParentArgs
    children?: boolean | PermissionNoSqlCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * PermissionNoSqlCountOutputType without action
   */
  export type PermissionNoSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSqlCountOutputType
     */
    select?: PermissionNoSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionNoSqlCountOutputType without action
   */
  export type PermissionNoSqlCountOutputTypeCountPermission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleNoSqlWhereInput
  }

  /**
   * PermissionNoSqlCountOutputType without action
   */
  export type PermissionNoSqlCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionNoSqlWhereInput
  }

  /**
   * PermissionNoSqlCountOutputType without action
   */
  export type PermissionNoSqlCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionNoSqlWhereInput
  }


  /**
   * Count Type RoleNoSqlCountOutputType
   */

  export type RoleNoSqlCountOutputType = {
    permission_roles: number
    users: number
  }

  export type RoleNoSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | RoleNoSqlCountOutputTypeCountPermission_rolesArgs
    users?: boolean | RoleNoSqlCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleNoSqlCountOutputType without action
   */
  export type RoleNoSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSqlCountOutputType
     */
    select?: RoleNoSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleNoSqlCountOutputType without action
   */
  export type RoleNoSqlCountOutputTypeCountPermission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleNoSqlWhereInput
  }

  /**
   * RoleNoSqlCountOutputType without action
   */
  export type RoleNoSqlCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleNoSqlWhereInput
  }


  /**
   * Count Type UserNoSqlCountOutputType
   */

  export type UserNoSqlCountOutputType = {
    roles: number
    sessions: number
  }

  export type UserNoSqlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserNoSqlCountOutputTypeCountRolesArgs
    sessions?: boolean | UserNoSqlCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserNoSqlCountOutputType without action
   */
  export type UserNoSqlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSqlCountOutputType
     */
    select?: UserNoSqlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserNoSqlCountOutputType without action
   */
  export type UserNoSqlCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleNoSqlWhereInput
  }

  /**
   * UserNoSqlCountOutputType without action
   */
  export type UserNoSqlCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionNoSqlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ScopeNoSql
   */

  export type AggregateScopeNoSql = {
    _count: ScopeNoSqlCountAggregateOutputType | null
    _min: ScopeNoSqlMinAggregateOutputType | null
    _max: ScopeNoSqlMaxAggregateOutputType | null
  }

  export type ScopeNoSqlMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScopeNoSqlMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScopeNoSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ScopeNoSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ScopeNoSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ScopeNoSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ScopeNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScopeNoSql to aggregate.
     */
    where?: ScopeNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeNoSqls to fetch.
     */
    orderBy?: ScopeNoSqlOrderByWithRelationInput | ScopeNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScopeNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScopeNoSqls
    **/
    _count?: true | ScopeNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScopeNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScopeNoSqlMaxAggregateInputType
  }

  export type GetScopeNoSqlAggregateType<T extends ScopeNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateScopeNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScopeNoSql[P]>
      : GetScalarType<T[P], AggregateScopeNoSql[P]>
  }




  export type ScopeNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScopeNoSqlWhereInput
    orderBy?: ScopeNoSqlOrderByWithAggregationInput | ScopeNoSqlOrderByWithAggregationInput[]
    by: ScopeNoSqlScalarFieldEnum[] | ScopeNoSqlScalarFieldEnum
    having?: ScopeNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScopeNoSqlCountAggregateInputType | true
    _min?: ScopeNoSqlMinAggregateInputType
    _max?: ScopeNoSqlMaxAggregateInputType
  }

  export type ScopeNoSqlGroupByOutputType = {
    id: string
    name: string
    desc: string | null
    created_at: Date
    updated_at: Date
    _count: ScopeNoSqlCountAggregateOutputType | null
    _min: ScopeNoSqlMinAggregateOutputType | null
    _max: ScopeNoSqlMaxAggregateOutputType | null
  }

  type GetScopeNoSqlGroupByPayload<T extends ScopeNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScopeNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScopeNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScopeNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], ScopeNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type ScopeNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
    scopes?: boolean | ScopeNoSql$scopesArgs<ExtArgs>
    _count?: boolean | ScopeNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scopeNoSql"]>



  export type ScopeNoSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ScopeNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "created_at" | "updated_at", ExtArgs["result"]["scopeNoSql"]>
  export type ScopeNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scopes?: boolean | ScopeNoSql$scopesArgs<ExtArgs>
    _count?: boolean | ScopeNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScopeNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScopeNoSql"
    objects: {
      scopes: Prisma.$PermissionNoSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["scopeNoSql"]>
    composites: {}
  }

  type ScopeNoSqlGetPayload<S extends boolean | null | undefined | ScopeNoSqlDefaultArgs> = $Result.GetResult<Prisma.$ScopeNoSqlPayload, S>

  type ScopeNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScopeNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScopeNoSqlCountAggregateInputType | true
    }

  export interface ScopeNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScopeNoSql'], meta: { name: 'ScopeNoSql' } }
    /**
     * Find zero or one ScopeNoSql that matches the filter.
     * @param {ScopeNoSqlFindUniqueArgs} args - Arguments to find a ScopeNoSql
     * @example
     * // Get one ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScopeNoSqlFindUniqueArgs>(args: SelectSubset<T, ScopeNoSqlFindUniqueArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ScopeNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScopeNoSqlFindUniqueOrThrowArgs} args - Arguments to find a ScopeNoSql
     * @example
     * // Get one ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScopeNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, ScopeNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ScopeNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlFindFirstArgs} args - Arguments to find a ScopeNoSql
     * @example
     * // Get one ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScopeNoSqlFindFirstArgs>(args?: SelectSubset<T, ScopeNoSqlFindFirstArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ScopeNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlFindFirstOrThrowArgs} args - Arguments to find a ScopeNoSql
     * @example
     * // Get one ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScopeNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, ScopeNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ScopeNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScopeNoSqls
     * const scopeNoSqls = await prisma.scopeNoSql.findMany()
     * 
     * // Get first 10 ScopeNoSqls
     * const scopeNoSqls = await prisma.scopeNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scopeNoSqlWithIdOnly = await prisma.scopeNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScopeNoSqlFindManyArgs>(args?: SelectSubset<T, ScopeNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ScopeNoSql.
     * @param {ScopeNoSqlCreateArgs} args - Arguments to create a ScopeNoSql.
     * @example
     * // Create one ScopeNoSql
     * const ScopeNoSql = await prisma.scopeNoSql.create({
     *   data: {
     *     // ... data to create a ScopeNoSql
     *   }
     * })
     * 
     */
    create<T extends ScopeNoSqlCreateArgs>(args: SelectSubset<T, ScopeNoSqlCreateArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ScopeNoSqls.
     * @param {ScopeNoSqlCreateManyArgs} args - Arguments to create many ScopeNoSqls.
     * @example
     * // Create many ScopeNoSqls
     * const scopeNoSql = await prisma.scopeNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScopeNoSqlCreateManyArgs>(args?: SelectSubset<T, ScopeNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScopeNoSql.
     * @param {ScopeNoSqlDeleteArgs} args - Arguments to delete one ScopeNoSql.
     * @example
     * // Delete one ScopeNoSql
     * const ScopeNoSql = await prisma.scopeNoSql.delete({
     *   where: {
     *     // ... filter to delete one ScopeNoSql
     *   }
     * })
     * 
     */
    delete<T extends ScopeNoSqlDeleteArgs>(args: SelectSubset<T, ScopeNoSqlDeleteArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ScopeNoSql.
     * @param {ScopeNoSqlUpdateArgs} args - Arguments to update one ScopeNoSql.
     * @example
     * // Update one ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScopeNoSqlUpdateArgs>(args: SelectSubset<T, ScopeNoSqlUpdateArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ScopeNoSqls.
     * @param {ScopeNoSqlDeleteManyArgs} args - Arguments to filter ScopeNoSqls to delete.
     * @example
     * // Delete a few ScopeNoSqls
     * const { count } = await prisma.scopeNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScopeNoSqlDeleteManyArgs>(args?: SelectSubset<T, ScopeNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScopeNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScopeNoSqls
     * const scopeNoSql = await prisma.scopeNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScopeNoSqlUpdateManyArgs>(args: SelectSubset<T, ScopeNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScopeNoSql.
     * @param {ScopeNoSqlUpsertArgs} args - Arguments to update or create a ScopeNoSql.
     * @example
     * // Update or create a ScopeNoSql
     * const scopeNoSql = await prisma.scopeNoSql.upsert({
     *   create: {
     *     // ... data to create a ScopeNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScopeNoSql we want to update
     *   }
     * })
     */
    upsert<T extends ScopeNoSqlUpsertArgs>(args: SelectSubset<T, ScopeNoSqlUpsertArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ScopeNoSqls that matches the filter.
     * @param {ScopeNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scopeNoSql = await prisma.scopeNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScopeNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ScopeNoSql.
     * @param {ScopeNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scopeNoSql = await prisma.scopeNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScopeNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ScopeNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlCountArgs} args - Arguments to filter ScopeNoSqls to count.
     * @example
     * // Count the number of ScopeNoSqls
     * const count = await prisma.scopeNoSql.count({
     *   where: {
     *     // ... the filter for the ScopeNoSqls we want to count
     *   }
     * })
    **/
    count<T extends ScopeNoSqlCountArgs>(
      args?: Subset<T, ScopeNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScopeNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScopeNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScopeNoSqlAggregateArgs>(args: Subset<T, ScopeNoSqlAggregateArgs>): Prisma.PrismaPromise<GetScopeNoSqlAggregateType<T>>

    /**
     * Group by ScopeNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScopeNoSqlGroupByArgs} args - Group by arguments.
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
      T extends ScopeNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScopeNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: ScopeNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScopeNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScopeNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScopeNoSql model
   */
  readonly fields: ScopeNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScopeNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScopeNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scopes<T extends ScopeNoSql$scopesArgs<ExtArgs> = {}>(args?: Subset<T, ScopeNoSql$scopesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ScopeNoSql model
   */ 
  interface ScopeNoSqlFieldRefs {
    readonly id: FieldRef<"ScopeNoSql", 'String'>
    readonly name: FieldRef<"ScopeNoSql", 'String'>
    readonly desc: FieldRef<"ScopeNoSql", 'String'>
    readonly created_at: FieldRef<"ScopeNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"ScopeNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScopeNoSql findUnique
   */
  export type ScopeNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeNoSql to fetch.
     */
    where: ScopeNoSqlWhereUniqueInput
  }

  /**
   * ScopeNoSql findUniqueOrThrow
   */
  export type ScopeNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeNoSql to fetch.
     */
    where: ScopeNoSqlWhereUniqueInput
  }

  /**
   * ScopeNoSql findFirst
   */
  export type ScopeNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeNoSql to fetch.
     */
    where?: ScopeNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeNoSqls to fetch.
     */
    orderBy?: ScopeNoSqlOrderByWithRelationInput | ScopeNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScopeNoSqls.
     */
    cursor?: ScopeNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScopeNoSqls.
     */
    distinct?: ScopeNoSqlScalarFieldEnum | ScopeNoSqlScalarFieldEnum[]
  }

  /**
   * ScopeNoSql findFirstOrThrow
   */
  export type ScopeNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeNoSql to fetch.
     */
    where?: ScopeNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeNoSqls to fetch.
     */
    orderBy?: ScopeNoSqlOrderByWithRelationInput | ScopeNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScopeNoSqls.
     */
    cursor?: ScopeNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScopeNoSqls.
     */
    distinct?: ScopeNoSqlScalarFieldEnum | ScopeNoSqlScalarFieldEnum[]
  }

  /**
   * ScopeNoSql findMany
   */
  export type ScopeNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ScopeNoSqls to fetch.
     */
    where?: ScopeNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScopeNoSqls to fetch.
     */
    orderBy?: ScopeNoSqlOrderByWithRelationInput | ScopeNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScopeNoSqls.
     */
    cursor?: ScopeNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScopeNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScopeNoSqls.
     */
    skip?: number
    distinct?: ScopeNoSqlScalarFieldEnum | ScopeNoSqlScalarFieldEnum[]
  }

  /**
   * ScopeNoSql create
   */
  export type ScopeNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a ScopeNoSql.
     */
    data: XOR<ScopeNoSqlCreateInput, ScopeNoSqlUncheckedCreateInput>
  }

  /**
   * ScopeNoSql createMany
   */
  export type ScopeNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScopeNoSqls.
     */
    data: ScopeNoSqlCreateManyInput | ScopeNoSqlCreateManyInput[]
  }

  /**
   * ScopeNoSql update
   */
  export type ScopeNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a ScopeNoSql.
     */
    data: XOR<ScopeNoSqlUpdateInput, ScopeNoSqlUncheckedUpdateInput>
    /**
     * Choose, which ScopeNoSql to update.
     */
    where: ScopeNoSqlWhereUniqueInput
  }

  /**
   * ScopeNoSql updateMany
   */
  export type ScopeNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScopeNoSqls.
     */
    data: XOR<ScopeNoSqlUpdateManyMutationInput, ScopeNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which ScopeNoSqls to update
     */
    where?: ScopeNoSqlWhereInput
  }

  /**
   * ScopeNoSql upsert
   */
  export type ScopeNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the ScopeNoSql to update in case it exists.
     */
    where: ScopeNoSqlWhereUniqueInput
    /**
     * In case the ScopeNoSql found by the `where` argument doesn't exist, create a new ScopeNoSql with this data.
     */
    create: XOR<ScopeNoSqlCreateInput, ScopeNoSqlUncheckedCreateInput>
    /**
     * In case the ScopeNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScopeNoSqlUpdateInput, ScopeNoSqlUncheckedUpdateInput>
  }

  /**
   * ScopeNoSql delete
   */
  export type ScopeNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
    /**
     * Filter which ScopeNoSql to delete.
     */
    where: ScopeNoSqlWhereUniqueInput
  }

  /**
   * ScopeNoSql deleteMany
   */
  export type ScopeNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScopeNoSqls to delete
     */
    where?: ScopeNoSqlWhereInput
  }

  /**
   * ScopeNoSql findRaw
   */
  export type ScopeNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScopeNoSql aggregateRaw
   */
  export type ScopeNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScopeNoSql.scopes
   */
  export type ScopeNoSql$scopesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    where?: PermissionNoSqlWhereInput
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    cursor?: PermissionNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionNoSqlScalarFieldEnum | PermissionNoSqlScalarFieldEnum[]
  }

  /**
   * ScopeNoSql without action
   */
  export type ScopeNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScopeNoSql
     */
    select?: ScopeNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScopeNoSql
     */
    omit?: ScopeNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScopeNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model ResourceNoSql
   */

  export type AggregateResourceNoSql = {
    _count: ResourceNoSqlCountAggregateOutputType | null
    _min: ResourceNoSqlMinAggregateOutputType | null
    _max: ResourceNoSqlMaxAggregateOutputType | null
  }

  export type ResourceNoSqlMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceNoSqlMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceNoSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceNoSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceNoSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceNoSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceNoSql to aggregate.
     */
    where?: ResourceNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceNoSqls to fetch.
     */
    orderBy?: ResourceNoSqlOrderByWithRelationInput | ResourceNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceNoSqls
    **/
    _count?: true | ResourceNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceNoSqlMaxAggregateInputType
  }

  export type GetResourceNoSqlAggregateType<T extends ResourceNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceNoSql[P]>
      : GetScalarType<T[P], AggregateResourceNoSql[P]>
  }




  export type ResourceNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceNoSqlWhereInput
    orderBy?: ResourceNoSqlOrderByWithAggregationInput | ResourceNoSqlOrderByWithAggregationInput[]
    by: ResourceNoSqlScalarFieldEnum[] | ResourceNoSqlScalarFieldEnum
    having?: ResourceNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceNoSqlCountAggregateInputType | true
    _min?: ResourceNoSqlMinAggregateInputType
    _max?: ResourceNoSqlMaxAggregateInputType
  }

  export type ResourceNoSqlGroupByOutputType = {
    id: string
    name: string
    desc: string | null
    created_at: Date
    updated_at: Date
    _count: ResourceNoSqlCountAggregateOutputType | null
    _min: ResourceNoSqlMinAggregateOutputType | null
    _max: ResourceNoSqlMaxAggregateOutputType | null
  }

  type GetResourceNoSqlGroupByPayload<T extends ResourceNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type ResourceNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
    permissions?: boolean | ResourceNoSql$permissionsArgs<ExtArgs>
    _count?: boolean | ResourceNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceNoSql"]>



  export type ResourceNoSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ResourceNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "created_at" | "updated_at", ExtArgs["result"]["resourceNoSql"]>
  export type ResourceNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | ResourceNoSql$permissionsArgs<ExtArgs>
    _count?: boolean | ResourceNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResourceNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceNoSql"
    objects: {
      permissions: Prisma.$PermissionNoSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resourceNoSql"]>
    composites: {}
  }

  type ResourceNoSqlGetPayload<S extends boolean | null | undefined | ResourceNoSqlDefaultArgs> = $Result.GetResult<Prisma.$ResourceNoSqlPayload, S>

  type ResourceNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceNoSqlCountAggregateInputType | true
    }

  export interface ResourceNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceNoSql'], meta: { name: 'ResourceNoSql' } }
    /**
     * Find zero or one ResourceNoSql that matches the filter.
     * @param {ResourceNoSqlFindUniqueArgs} args - Arguments to find a ResourceNoSql
     * @example
     * // Get one ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceNoSqlFindUniqueArgs>(args: SelectSubset<T, ResourceNoSqlFindUniqueArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ResourceNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceNoSqlFindUniqueOrThrowArgs} args - Arguments to find a ResourceNoSql
     * @example
     * // Get one ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ResourceNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlFindFirstArgs} args - Arguments to find a ResourceNoSql
     * @example
     * // Get one ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceNoSqlFindFirstArgs>(args?: SelectSubset<T, ResourceNoSqlFindFirstArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ResourceNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlFindFirstOrThrowArgs} args - Arguments to find a ResourceNoSql
     * @example
     * // Get one ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResourceNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceNoSqls
     * const resourceNoSqls = await prisma.resourceNoSql.findMany()
     * 
     * // Get first 10 ResourceNoSqls
     * const resourceNoSqls = await prisma.resourceNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceNoSqlWithIdOnly = await prisma.resourceNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceNoSqlFindManyArgs>(args?: SelectSubset<T, ResourceNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ResourceNoSql.
     * @param {ResourceNoSqlCreateArgs} args - Arguments to create a ResourceNoSql.
     * @example
     * // Create one ResourceNoSql
     * const ResourceNoSql = await prisma.resourceNoSql.create({
     *   data: {
     *     // ... data to create a ResourceNoSql
     *   }
     * })
     * 
     */
    create<T extends ResourceNoSqlCreateArgs>(args: SelectSubset<T, ResourceNoSqlCreateArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ResourceNoSqls.
     * @param {ResourceNoSqlCreateManyArgs} args - Arguments to create many ResourceNoSqls.
     * @example
     * // Create many ResourceNoSqls
     * const resourceNoSql = await prisma.resourceNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceNoSqlCreateManyArgs>(args?: SelectSubset<T, ResourceNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResourceNoSql.
     * @param {ResourceNoSqlDeleteArgs} args - Arguments to delete one ResourceNoSql.
     * @example
     * // Delete one ResourceNoSql
     * const ResourceNoSql = await prisma.resourceNoSql.delete({
     *   where: {
     *     // ... filter to delete one ResourceNoSql
     *   }
     * })
     * 
     */
    delete<T extends ResourceNoSqlDeleteArgs>(args: SelectSubset<T, ResourceNoSqlDeleteArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ResourceNoSql.
     * @param {ResourceNoSqlUpdateArgs} args - Arguments to update one ResourceNoSql.
     * @example
     * // Update one ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceNoSqlUpdateArgs>(args: SelectSubset<T, ResourceNoSqlUpdateArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ResourceNoSqls.
     * @param {ResourceNoSqlDeleteManyArgs} args - Arguments to filter ResourceNoSqls to delete.
     * @example
     * // Delete a few ResourceNoSqls
     * const { count } = await prisma.resourceNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceNoSqlDeleteManyArgs>(args?: SelectSubset<T, ResourceNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceNoSqls
     * const resourceNoSql = await prisma.resourceNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceNoSqlUpdateManyArgs>(args: SelectSubset<T, ResourceNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceNoSql.
     * @param {ResourceNoSqlUpsertArgs} args - Arguments to update or create a ResourceNoSql.
     * @example
     * // Update or create a ResourceNoSql
     * const resourceNoSql = await prisma.resourceNoSql.upsert({
     *   create: {
     *     // ... data to create a ResourceNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceNoSql we want to update
     *   }
     * })
     */
    upsert<T extends ResourceNoSqlUpsertArgs>(args: SelectSubset<T, ResourceNoSqlUpsertArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResourceNoSqls that matches the filter.
     * @param {ResourceNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resourceNoSql = await prisma.resourceNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResourceNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResourceNoSql.
     * @param {ResourceNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resourceNoSql = await prisma.resourceNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResourceNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ResourceNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlCountArgs} args - Arguments to filter ResourceNoSqls to count.
     * @example
     * // Count the number of ResourceNoSqls
     * const count = await prisma.resourceNoSql.count({
     *   where: {
     *     // ... the filter for the ResourceNoSqls we want to count
     *   }
     * })
    **/
    count<T extends ResourceNoSqlCountArgs>(
      args?: Subset<T, ResourceNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceNoSqlAggregateArgs>(args: Subset<T, ResourceNoSqlAggregateArgs>): Prisma.PrismaPromise<GetResourceNoSqlAggregateType<T>>

    /**
     * Group by ResourceNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceNoSqlGroupByArgs} args - Group by arguments.
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
      T extends ResourceNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: ResourceNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceNoSql model
   */
  readonly fields: ResourceNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends ResourceNoSql$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, ResourceNoSql$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ResourceNoSql model
   */ 
  interface ResourceNoSqlFieldRefs {
    readonly id: FieldRef<"ResourceNoSql", 'String'>
    readonly name: FieldRef<"ResourceNoSql", 'String'>
    readonly desc: FieldRef<"ResourceNoSql", 'String'>
    readonly created_at: FieldRef<"ResourceNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"ResourceNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceNoSql findUnique
   */
  export type ResourceNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceNoSql to fetch.
     */
    where: ResourceNoSqlWhereUniqueInput
  }

  /**
   * ResourceNoSql findUniqueOrThrow
   */
  export type ResourceNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceNoSql to fetch.
     */
    where: ResourceNoSqlWhereUniqueInput
  }

  /**
   * ResourceNoSql findFirst
   */
  export type ResourceNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceNoSql to fetch.
     */
    where?: ResourceNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceNoSqls to fetch.
     */
    orderBy?: ResourceNoSqlOrderByWithRelationInput | ResourceNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceNoSqls.
     */
    cursor?: ResourceNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceNoSqls.
     */
    distinct?: ResourceNoSqlScalarFieldEnum | ResourceNoSqlScalarFieldEnum[]
  }

  /**
   * ResourceNoSql findFirstOrThrow
   */
  export type ResourceNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceNoSql to fetch.
     */
    where?: ResourceNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceNoSqls to fetch.
     */
    orderBy?: ResourceNoSqlOrderByWithRelationInput | ResourceNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceNoSqls.
     */
    cursor?: ResourceNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceNoSqls.
     */
    distinct?: ResourceNoSqlScalarFieldEnum | ResourceNoSqlScalarFieldEnum[]
  }

  /**
   * ResourceNoSql findMany
   */
  export type ResourceNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which ResourceNoSqls to fetch.
     */
    where?: ResourceNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceNoSqls to fetch.
     */
    orderBy?: ResourceNoSqlOrderByWithRelationInput | ResourceNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceNoSqls.
     */
    cursor?: ResourceNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceNoSqls.
     */
    skip?: number
    distinct?: ResourceNoSqlScalarFieldEnum | ResourceNoSqlScalarFieldEnum[]
  }

  /**
   * ResourceNoSql create
   */
  export type ResourceNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceNoSql.
     */
    data: XOR<ResourceNoSqlCreateInput, ResourceNoSqlUncheckedCreateInput>
  }

  /**
   * ResourceNoSql createMany
   */
  export type ResourceNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceNoSqls.
     */
    data: ResourceNoSqlCreateManyInput | ResourceNoSqlCreateManyInput[]
  }

  /**
   * ResourceNoSql update
   */
  export type ResourceNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceNoSql.
     */
    data: XOR<ResourceNoSqlUpdateInput, ResourceNoSqlUncheckedUpdateInput>
    /**
     * Choose, which ResourceNoSql to update.
     */
    where: ResourceNoSqlWhereUniqueInput
  }

  /**
   * ResourceNoSql updateMany
   */
  export type ResourceNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceNoSqls.
     */
    data: XOR<ResourceNoSqlUpdateManyMutationInput, ResourceNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which ResourceNoSqls to update
     */
    where?: ResourceNoSqlWhereInput
  }

  /**
   * ResourceNoSql upsert
   */
  export type ResourceNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceNoSql to update in case it exists.
     */
    where: ResourceNoSqlWhereUniqueInput
    /**
     * In case the ResourceNoSql found by the `where` argument doesn't exist, create a new ResourceNoSql with this data.
     */
    create: XOR<ResourceNoSqlCreateInput, ResourceNoSqlUncheckedCreateInput>
    /**
     * In case the ResourceNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceNoSqlUpdateInput, ResourceNoSqlUncheckedUpdateInput>
  }

  /**
   * ResourceNoSql delete
   */
  export type ResourceNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
    /**
     * Filter which ResourceNoSql to delete.
     */
    where: ResourceNoSqlWhereUniqueInput
  }

  /**
   * ResourceNoSql deleteMany
   */
  export type ResourceNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceNoSqls to delete
     */
    where?: ResourceNoSqlWhereInput
  }

  /**
   * ResourceNoSql findRaw
   */
  export type ResourceNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResourceNoSql aggregateRaw
   */
  export type ResourceNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResourceNoSql.permissions
   */
  export type ResourceNoSql$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    where?: PermissionNoSqlWhereInput
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    cursor?: PermissionNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionNoSqlScalarFieldEnum | PermissionNoSqlScalarFieldEnum[]
  }

  /**
   * ResourceNoSql without action
   */
  export type ResourceNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceNoSql
     */
    select?: ResourceNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceNoSql
     */
    omit?: ResourceNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model PermissionNoSql
   */

  export type AggregatePermissionNoSql = {
    _count: PermissionNoSqlCountAggregateOutputType | null
    _min: PermissionNoSqlMinAggregateOutputType | null
    _max: PermissionNoSqlMaxAggregateOutputType | null
  }

  export type PermissionNoSqlMinAggregateOutputType = {
    id: string | null
    title: string | null
    name: string | null
    desc: string | null
    resource_id: string | null
    scope_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionNoSqlMaxAggregateOutputType = {
    id: string | null
    title: string | null
    name: string | null
    desc: string | null
    resource_id: string | null
    scope_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionNoSqlCountAggregateOutputType = {
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


  export type PermissionNoSqlMinAggregateInputType = {
    id?: true
    title?: true
    name?: true
    desc?: true
    resource_id?: true
    scope_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionNoSqlMaxAggregateInputType = {
    id?: true
    title?: true
    name?: true
    desc?: true
    resource_id?: true
    scope_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionNoSqlCountAggregateInputType = {
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

  export type PermissionNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionNoSql to aggregate.
     */
    where?: PermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNoSqls to fetch.
     */
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionNoSqls
    **/
    _count?: true | PermissionNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionNoSqlMaxAggregateInputType
  }

  export type GetPermissionNoSqlAggregateType<T extends PermissionNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionNoSql[P]>
      : GetScalarType<T[P], AggregatePermissionNoSql[P]>
  }




  export type PermissionNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionNoSqlWhereInput
    orderBy?: PermissionNoSqlOrderByWithAggregationInput | PermissionNoSqlOrderByWithAggregationInput[]
    by: PermissionNoSqlScalarFieldEnum[] | PermissionNoSqlScalarFieldEnum
    having?: PermissionNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionNoSqlCountAggregateInputType | true
    _min?: PermissionNoSqlMinAggregateInputType
    _max?: PermissionNoSqlMaxAggregateInputType
  }

  export type PermissionNoSqlGroupByOutputType = {
    id: string
    title: string | null
    name: string
    desc: string | null
    resource_id: string
    scope_id: string
    created_at: Date
    updated_at: Date
    _count: PermissionNoSqlCountAggregateOutputType | null
    _min: PermissionNoSqlMinAggregateOutputType | null
    _max: PermissionNoSqlMaxAggregateOutputType | null
  }

  type GetPermissionNoSqlGroupByPayload<T extends PermissionNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type PermissionNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceNoSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeNoSqlDefaultArgs<ExtArgs>
    permission_roles?: boolean | PermissionNoSql$permission_rolesArgs<ExtArgs>
    parent?: boolean | PermissionNoSql$parentArgs<ExtArgs>
    children?: boolean | PermissionNoSql$childrenArgs<ExtArgs>
    _count?: boolean | PermissionNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionNoSql"]>



  export type PermissionNoSqlSelectScalar = {
    id?: boolean
    title?: boolean
    name?: boolean
    desc?: boolean
    resource_id?: boolean
    scope_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PermissionNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "name" | "desc" | "resource_id" | "scope_id" | "created_at" | "updated_at", ExtArgs["result"]["permissionNoSql"]>
  export type PermissionNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceNoSqlDefaultArgs<ExtArgs>
    scope?: boolean | ScopeNoSqlDefaultArgs<ExtArgs>
    permission_roles?: boolean | PermissionNoSql$permission_rolesArgs<ExtArgs>
    parent?: boolean | PermissionNoSql$parentArgs<ExtArgs>
    children?: boolean | PermissionNoSql$childrenArgs<ExtArgs>
    _count?: boolean | PermissionNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionNoSql"
    objects: {
      resource: Prisma.$ResourceNoSqlPayload<ExtArgs>
      scope: Prisma.$ScopeNoSqlPayload<ExtArgs>
      permission_roles: Prisma.$PermissionRoleNoSqlPayload<ExtArgs>[]
      parent: Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>[]
      children: Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      name: string
      desc: string | null
      resource_id: string
      scope_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permissionNoSql"]>
    composites: {}
  }

  type PermissionNoSqlGetPayload<S extends boolean | null | undefined | PermissionNoSqlDefaultArgs> = $Result.GetResult<Prisma.$PermissionNoSqlPayload, S>

  type PermissionNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionNoSqlCountAggregateInputType | true
    }

  export interface PermissionNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionNoSql'], meta: { name: 'PermissionNoSql' } }
    /**
     * Find zero or one PermissionNoSql that matches the filter.
     * @param {PermissionNoSqlFindUniqueArgs} args - Arguments to find a PermissionNoSql
     * @example
     * // Get one PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionNoSqlFindUniqueArgs>(args: SelectSubset<T, PermissionNoSqlFindUniqueArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PermissionNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionNoSqlFindUniqueOrThrowArgs} args - Arguments to find a PermissionNoSql
     * @example
     * // Get one PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlFindFirstArgs} args - Arguments to find a PermissionNoSql
     * @example
     * // Get one PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionNoSqlFindFirstArgs>(args?: SelectSubset<T, PermissionNoSqlFindFirstArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlFindFirstOrThrowArgs} args - Arguments to find a PermissionNoSql
     * @example
     * // Get one PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionNoSqls
     * const permissionNoSqls = await prisma.permissionNoSql.findMany()
     * 
     * // Get first 10 PermissionNoSqls
     * const permissionNoSqls = await prisma.permissionNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionNoSqlWithIdOnly = await prisma.permissionNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionNoSqlFindManyArgs>(args?: SelectSubset<T, PermissionNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PermissionNoSql.
     * @param {PermissionNoSqlCreateArgs} args - Arguments to create a PermissionNoSql.
     * @example
     * // Create one PermissionNoSql
     * const PermissionNoSql = await prisma.permissionNoSql.create({
     *   data: {
     *     // ... data to create a PermissionNoSql
     *   }
     * })
     * 
     */
    create<T extends PermissionNoSqlCreateArgs>(args: SelectSubset<T, PermissionNoSqlCreateArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PermissionNoSqls.
     * @param {PermissionNoSqlCreateManyArgs} args - Arguments to create many PermissionNoSqls.
     * @example
     * // Create many PermissionNoSqls
     * const permissionNoSql = await prisma.permissionNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionNoSqlCreateManyArgs>(args?: SelectSubset<T, PermissionNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PermissionNoSql.
     * @param {PermissionNoSqlDeleteArgs} args - Arguments to delete one PermissionNoSql.
     * @example
     * // Delete one PermissionNoSql
     * const PermissionNoSql = await prisma.permissionNoSql.delete({
     *   where: {
     *     // ... filter to delete one PermissionNoSql
     *   }
     * })
     * 
     */
    delete<T extends PermissionNoSqlDeleteArgs>(args: SelectSubset<T, PermissionNoSqlDeleteArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PermissionNoSql.
     * @param {PermissionNoSqlUpdateArgs} args - Arguments to update one PermissionNoSql.
     * @example
     * // Update one PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionNoSqlUpdateArgs>(args: SelectSubset<T, PermissionNoSqlUpdateArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PermissionNoSqls.
     * @param {PermissionNoSqlDeleteManyArgs} args - Arguments to filter PermissionNoSqls to delete.
     * @example
     * // Delete a few PermissionNoSqls
     * const { count } = await prisma.permissionNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionNoSqlDeleteManyArgs>(args?: SelectSubset<T, PermissionNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionNoSqls
     * const permissionNoSql = await prisma.permissionNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionNoSqlUpdateManyArgs>(args: SelectSubset<T, PermissionNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionNoSql.
     * @param {PermissionNoSqlUpsertArgs} args - Arguments to update or create a PermissionNoSql.
     * @example
     * // Update or create a PermissionNoSql
     * const permissionNoSql = await prisma.permissionNoSql.upsert({
     *   create: {
     *     // ... data to create a PermissionNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionNoSql we want to update
     *   }
     * })
     */
    upsert<T extends PermissionNoSqlUpsertArgs>(args: SelectSubset<T, PermissionNoSqlUpsertArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionNoSqls that matches the filter.
     * @param {PermissionNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const permissionNoSql = await prisma.permissionNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PermissionNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PermissionNoSql.
     * @param {PermissionNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const permissionNoSql = await prisma.permissionNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PermissionNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PermissionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlCountArgs} args - Arguments to filter PermissionNoSqls to count.
     * @example
     * // Count the number of PermissionNoSqls
     * const count = await prisma.permissionNoSql.count({
     *   where: {
     *     // ... the filter for the PermissionNoSqls we want to count
     *   }
     * })
    **/
    count<T extends PermissionNoSqlCountArgs>(
      args?: Subset<T, PermissionNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionNoSqlAggregateArgs>(args: Subset<T, PermissionNoSqlAggregateArgs>): Prisma.PrismaPromise<GetPermissionNoSqlAggregateType<T>>

    /**
     * Group by PermissionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNoSqlGroupByArgs} args - Group by arguments.
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
      T extends PermissionNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: PermissionNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionNoSql model
   */
  readonly fields: PermissionNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resource<T extends ResourceNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceNoSqlDefaultArgs<ExtArgs>>): Prisma__ResourceNoSqlClient<$Result.GetResult<Prisma.$ResourceNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    scope<T extends ScopeNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScopeNoSqlDefaultArgs<ExtArgs>>): Prisma__ScopeNoSqlClient<$Result.GetResult<Prisma.$ScopeNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    permission_roles<T extends PermissionNoSql$permission_rolesArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSql$permission_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    parent<T extends PermissionNoSql$parentArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSql$parentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    children<T extends PermissionNoSql$childrenArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSql$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the PermissionNoSql model
   */ 
  interface PermissionNoSqlFieldRefs {
    readonly id: FieldRef<"PermissionNoSql", 'String'>
    readonly title: FieldRef<"PermissionNoSql", 'String'>
    readonly name: FieldRef<"PermissionNoSql", 'String'>
    readonly desc: FieldRef<"PermissionNoSql", 'String'>
    readonly resource_id: FieldRef<"PermissionNoSql", 'String'>
    readonly scope_id: FieldRef<"PermissionNoSql", 'String'>
    readonly created_at: FieldRef<"PermissionNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"PermissionNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PermissionNoSql findUnique
   */
  export type PermissionNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNoSql to fetch.
     */
    where: PermissionNoSqlWhereUniqueInput
  }

  /**
   * PermissionNoSql findUniqueOrThrow
   */
  export type PermissionNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNoSql to fetch.
     */
    where: PermissionNoSqlWhereUniqueInput
  }

  /**
   * PermissionNoSql findFirst
   */
  export type PermissionNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNoSql to fetch.
     */
    where?: PermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNoSqls to fetch.
     */
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionNoSqls.
     */
    cursor?: PermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionNoSqls.
     */
    distinct?: PermissionNoSqlScalarFieldEnum | PermissionNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql findFirstOrThrow
   */
  export type PermissionNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNoSql to fetch.
     */
    where?: PermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNoSqls to fetch.
     */
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionNoSqls.
     */
    cursor?: PermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionNoSqls.
     */
    distinct?: PermissionNoSqlScalarFieldEnum | PermissionNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql findMany
   */
  export type PermissionNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNoSqls to fetch.
     */
    where?: PermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNoSqls to fetch.
     */
    orderBy?: PermissionNoSqlOrderByWithRelationInput | PermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionNoSqls.
     */
    cursor?: PermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNoSqls.
     */
    skip?: number
    distinct?: PermissionNoSqlScalarFieldEnum | PermissionNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql create
   */
  export type PermissionNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionNoSql.
     */
    data: XOR<PermissionNoSqlCreateInput, PermissionNoSqlUncheckedCreateInput>
  }

  /**
   * PermissionNoSql createMany
   */
  export type PermissionNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionNoSqls.
     */
    data: PermissionNoSqlCreateManyInput | PermissionNoSqlCreateManyInput[]
  }

  /**
   * PermissionNoSql update
   */
  export type PermissionNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionNoSql.
     */
    data: XOR<PermissionNoSqlUpdateInput, PermissionNoSqlUncheckedUpdateInput>
    /**
     * Choose, which PermissionNoSql to update.
     */
    where: PermissionNoSqlWhereUniqueInput
  }

  /**
   * PermissionNoSql updateMany
   */
  export type PermissionNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionNoSqls.
     */
    data: XOR<PermissionNoSqlUpdateManyMutationInput, PermissionNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionNoSqls to update
     */
    where?: PermissionNoSqlWhereInput
  }

  /**
   * PermissionNoSql upsert
   */
  export type PermissionNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionNoSql to update in case it exists.
     */
    where: PermissionNoSqlWhereUniqueInput
    /**
     * In case the PermissionNoSql found by the `where` argument doesn't exist, create a new PermissionNoSql with this data.
     */
    create: XOR<PermissionNoSqlCreateInput, PermissionNoSqlUncheckedCreateInput>
    /**
     * In case the PermissionNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionNoSqlUpdateInput, PermissionNoSqlUncheckedUpdateInput>
  }

  /**
   * PermissionNoSql delete
   */
  export type PermissionNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter which PermissionNoSql to delete.
     */
    where: PermissionNoSqlWhereUniqueInput
  }

  /**
   * PermissionNoSql deleteMany
   */
  export type PermissionNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionNoSqls to delete
     */
    where?: PermissionNoSqlWhereInput
  }

  /**
   * PermissionNoSql findRaw
   */
  export type PermissionNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PermissionNoSql aggregateRaw
   */
  export type PermissionNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PermissionNoSql.permission_roles
   */
  export type PermissionNoSql$permission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    where?: PermissionRoleNoSqlWhereInput
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionRoleNoSqlScalarFieldEnum | PermissionRoleNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql.parent
   */
  export type PermissionNoSql$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    where?: RelatedPermissionNoSqlWhereInput
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedPermissionNoSqlScalarFieldEnum | RelatedPermissionNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql.children
   */
  export type PermissionNoSql$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    where?: RelatedPermissionNoSqlWhereInput
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatedPermissionNoSqlScalarFieldEnum | RelatedPermissionNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionNoSql without action
   */
  export type PermissionNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNoSql
     */
    select?: PermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNoSql
     */
    omit?: PermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model RelatedPermissionNoSql
   */

  export type AggregateRelatedPermissionNoSql = {
    _count: RelatedPermissionNoSqlCountAggregateOutputType | null
    _min: RelatedPermissionNoSqlMinAggregateOutputType | null
    _max: RelatedPermissionNoSqlMaxAggregateOutputType | null
  }

  export type RelatedPermissionNoSqlMinAggregateOutputType = {
    id: string | null
    parent_id: string | null
    child_id: string | null
  }

  export type RelatedPermissionNoSqlMaxAggregateOutputType = {
    id: string | null
    parent_id: string | null
    child_id: string | null
  }

  export type RelatedPermissionNoSqlCountAggregateOutputType = {
    id: number
    parent_id: number
    child_id: number
    _all: number
  }


  export type RelatedPermissionNoSqlMinAggregateInputType = {
    id?: true
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionNoSqlMaxAggregateInputType = {
    id?: true
    parent_id?: true
    child_id?: true
  }

  export type RelatedPermissionNoSqlCountAggregateInputType = {
    id?: true
    parent_id?: true
    child_id?: true
    _all?: true
  }

  export type RelatedPermissionNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedPermissionNoSql to aggregate.
     */
    where?: RelatedPermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionNoSqls to fetch.
     */
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatedPermissionNoSqls
    **/
    _count?: true | RelatedPermissionNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatedPermissionNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatedPermissionNoSqlMaxAggregateInputType
  }

  export type GetRelatedPermissionNoSqlAggregateType<T extends RelatedPermissionNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatedPermissionNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatedPermissionNoSql[P]>
      : GetScalarType<T[P], AggregateRelatedPermissionNoSql[P]>
  }




  export type RelatedPermissionNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatedPermissionNoSqlWhereInput
    orderBy?: RelatedPermissionNoSqlOrderByWithAggregationInput | RelatedPermissionNoSqlOrderByWithAggregationInput[]
    by: RelatedPermissionNoSqlScalarFieldEnum[] | RelatedPermissionNoSqlScalarFieldEnum
    having?: RelatedPermissionNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatedPermissionNoSqlCountAggregateInputType | true
    _min?: RelatedPermissionNoSqlMinAggregateInputType
    _max?: RelatedPermissionNoSqlMaxAggregateInputType
  }

  export type RelatedPermissionNoSqlGroupByOutputType = {
    id: string
    parent_id: string
    child_id: string
    _count: RelatedPermissionNoSqlCountAggregateOutputType | null
    _min: RelatedPermissionNoSqlMinAggregateOutputType | null
    _max: RelatedPermissionNoSqlMaxAggregateOutputType | null
  }

  type GetRelatedPermissionNoSqlGroupByPayload<T extends RelatedPermissionNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatedPermissionNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatedPermissionNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatedPermissionNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], RelatedPermissionNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type RelatedPermissionNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    child_id?: boolean
    parent?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatedPermissionNoSql"]>



  export type RelatedPermissionNoSqlSelectScalar = {
    id?: boolean
    parent_id?: boolean
    child_id?: boolean
  }

  export type RelatedPermissionNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parent_id" | "child_id", ExtArgs["result"]["relatedPermissionNoSql"]>
  export type RelatedPermissionNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
    child?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
  }

  export type $RelatedPermissionNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatedPermissionNoSql"
    objects: {
      parent: Prisma.$PermissionNoSqlPayload<ExtArgs>
      child: Prisma.$PermissionNoSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parent_id: string
      child_id: string
    }, ExtArgs["result"]["relatedPermissionNoSql"]>
    composites: {}
  }

  type RelatedPermissionNoSqlGetPayload<S extends boolean | null | undefined | RelatedPermissionNoSqlDefaultArgs> = $Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload, S>

  type RelatedPermissionNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatedPermissionNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatedPermissionNoSqlCountAggregateInputType | true
    }

  export interface RelatedPermissionNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatedPermissionNoSql'], meta: { name: 'RelatedPermissionNoSql' } }
    /**
     * Find zero or one RelatedPermissionNoSql that matches the filter.
     * @param {RelatedPermissionNoSqlFindUniqueArgs} args - Arguments to find a RelatedPermissionNoSql
     * @example
     * // Get one RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatedPermissionNoSqlFindUniqueArgs>(args: SelectSubset<T, RelatedPermissionNoSqlFindUniqueArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RelatedPermissionNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatedPermissionNoSqlFindUniqueOrThrowArgs} args - Arguments to find a RelatedPermissionNoSql
     * @example
     * // Get one RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatedPermissionNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatedPermissionNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RelatedPermissionNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlFindFirstArgs} args - Arguments to find a RelatedPermissionNoSql
     * @example
     * // Get one RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatedPermissionNoSqlFindFirstArgs>(args?: SelectSubset<T, RelatedPermissionNoSqlFindFirstArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RelatedPermissionNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlFindFirstOrThrowArgs} args - Arguments to find a RelatedPermissionNoSql
     * @example
     * // Get one RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatedPermissionNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatedPermissionNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RelatedPermissionNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatedPermissionNoSqls
     * const relatedPermissionNoSqls = await prisma.relatedPermissionNoSql.findMany()
     * 
     * // Get first 10 RelatedPermissionNoSqls
     * const relatedPermissionNoSqls = await prisma.relatedPermissionNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatedPermissionNoSqlWithIdOnly = await prisma.relatedPermissionNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatedPermissionNoSqlFindManyArgs>(args?: SelectSubset<T, RelatedPermissionNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RelatedPermissionNoSql.
     * @param {RelatedPermissionNoSqlCreateArgs} args - Arguments to create a RelatedPermissionNoSql.
     * @example
     * // Create one RelatedPermissionNoSql
     * const RelatedPermissionNoSql = await prisma.relatedPermissionNoSql.create({
     *   data: {
     *     // ... data to create a RelatedPermissionNoSql
     *   }
     * })
     * 
     */
    create<T extends RelatedPermissionNoSqlCreateArgs>(args: SelectSubset<T, RelatedPermissionNoSqlCreateArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RelatedPermissionNoSqls.
     * @param {RelatedPermissionNoSqlCreateManyArgs} args - Arguments to create many RelatedPermissionNoSqls.
     * @example
     * // Create many RelatedPermissionNoSqls
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatedPermissionNoSqlCreateManyArgs>(args?: SelectSubset<T, RelatedPermissionNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RelatedPermissionNoSql.
     * @param {RelatedPermissionNoSqlDeleteArgs} args - Arguments to delete one RelatedPermissionNoSql.
     * @example
     * // Delete one RelatedPermissionNoSql
     * const RelatedPermissionNoSql = await prisma.relatedPermissionNoSql.delete({
     *   where: {
     *     // ... filter to delete one RelatedPermissionNoSql
     *   }
     * })
     * 
     */
    delete<T extends RelatedPermissionNoSqlDeleteArgs>(args: SelectSubset<T, RelatedPermissionNoSqlDeleteArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RelatedPermissionNoSql.
     * @param {RelatedPermissionNoSqlUpdateArgs} args - Arguments to update one RelatedPermissionNoSql.
     * @example
     * // Update one RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatedPermissionNoSqlUpdateArgs>(args: SelectSubset<T, RelatedPermissionNoSqlUpdateArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RelatedPermissionNoSqls.
     * @param {RelatedPermissionNoSqlDeleteManyArgs} args - Arguments to filter RelatedPermissionNoSqls to delete.
     * @example
     * // Delete a few RelatedPermissionNoSqls
     * const { count } = await prisma.relatedPermissionNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatedPermissionNoSqlDeleteManyArgs>(args?: SelectSubset<T, RelatedPermissionNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatedPermissionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatedPermissionNoSqls
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatedPermissionNoSqlUpdateManyArgs>(args: SelectSubset<T, RelatedPermissionNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RelatedPermissionNoSql.
     * @param {RelatedPermissionNoSqlUpsertArgs} args - Arguments to update or create a RelatedPermissionNoSql.
     * @example
     * // Update or create a RelatedPermissionNoSql
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.upsert({
     *   create: {
     *     // ... data to create a RelatedPermissionNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatedPermissionNoSql we want to update
     *   }
     * })
     */
    upsert<T extends RelatedPermissionNoSqlUpsertArgs>(args: SelectSubset<T, RelatedPermissionNoSqlUpsertArgs<ExtArgs>>): Prisma__RelatedPermissionNoSqlClient<$Result.GetResult<Prisma.$RelatedPermissionNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RelatedPermissionNoSqls that matches the filter.
     * @param {RelatedPermissionNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RelatedPermissionNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RelatedPermissionNoSql.
     * @param {RelatedPermissionNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const relatedPermissionNoSql = await prisma.relatedPermissionNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RelatedPermissionNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RelatedPermissionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlCountArgs} args - Arguments to filter RelatedPermissionNoSqls to count.
     * @example
     * // Count the number of RelatedPermissionNoSqls
     * const count = await prisma.relatedPermissionNoSql.count({
     *   where: {
     *     // ... the filter for the RelatedPermissionNoSqls we want to count
     *   }
     * })
    **/
    count<T extends RelatedPermissionNoSqlCountArgs>(
      args?: Subset<T, RelatedPermissionNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatedPermissionNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatedPermissionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatedPermissionNoSqlAggregateArgs>(args: Subset<T, RelatedPermissionNoSqlAggregateArgs>): Prisma.PrismaPromise<GetRelatedPermissionNoSqlAggregateType<T>>

    /**
     * Group by RelatedPermissionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatedPermissionNoSqlGroupByArgs} args - Group by arguments.
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
      T extends RelatedPermissionNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatedPermissionNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: RelatedPermissionNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatedPermissionNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatedPermissionNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatedPermissionNoSql model
   */
  readonly fields: RelatedPermissionNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatedPermissionNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatedPermissionNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends PermissionNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSqlDefaultArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    child<T extends PermissionNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSqlDefaultArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RelatedPermissionNoSql model
   */ 
  interface RelatedPermissionNoSqlFieldRefs {
    readonly id: FieldRef<"RelatedPermissionNoSql", 'String'>
    readonly parent_id: FieldRef<"RelatedPermissionNoSql", 'String'>
    readonly child_id: FieldRef<"RelatedPermissionNoSql", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RelatedPermissionNoSql findUnique
   */
  export type RelatedPermissionNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionNoSql to fetch.
     */
    where: RelatedPermissionNoSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionNoSql findUniqueOrThrow
   */
  export type RelatedPermissionNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionNoSql to fetch.
     */
    where: RelatedPermissionNoSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionNoSql findFirst
   */
  export type RelatedPermissionNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionNoSql to fetch.
     */
    where?: RelatedPermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionNoSqls to fetch.
     */
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedPermissionNoSqls.
     */
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedPermissionNoSqls.
     */
    distinct?: RelatedPermissionNoSqlScalarFieldEnum | RelatedPermissionNoSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionNoSql findFirstOrThrow
   */
  export type RelatedPermissionNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionNoSql to fetch.
     */
    where?: RelatedPermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionNoSqls to fetch.
     */
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatedPermissionNoSqls.
     */
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatedPermissionNoSqls.
     */
    distinct?: RelatedPermissionNoSqlScalarFieldEnum | RelatedPermissionNoSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionNoSql findMany
   */
  export type RelatedPermissionNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RelatedPermissionNoSqls to fetch.
     */
    where?: RelatedPermissionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatedPermissionNoSqls to fetch.
     */
    orderBy?: RelatedPermissionNoSqlOrderByWithRelationInput | RelatedPermissionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatedPermissionNoSqls.
     */
    cursor?: RelatedPermissionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatedPermissionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatedPermissionNoSqls.
     */
    skip?: number
    distinct?: RelatedPermissionNoSqlScalarFieldEnum | RelatedPermissionNoSqlScalarFieldEnum[]
  }

  /**
   * RelatedPermissionNoSql create
   */
  export type RelatedPermissionNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatedPermissionNoSql.
     */
    data: XOR<RelatedPermissionNoSqlCreateInput, RelatedPermissionNoSqlUncheckedCreateInput>
  }

  /**
   * RelatedPermissionNoSql createMany
   */
  export type RelatedPermissionNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatedPermissionNoSqls.
     */
    data: RelatedPermissionNoSqlCreateManyInput | RelatedPermissionNoSqlCreateManyInput[]
  }

  /**
   * RelatedPermissionNoSql update
   */
  export type RelatedPermissionNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatedPermissionNoSql.
     */
    data: XOR<RelatedPermissionNoSqlUpdateInput, RelatedPermissionNoSqlUncheckedUpdateInput>
    /**
     * Choose, which RelatedPermissionNoSql to update.
     */
    where: RelatedPermissionNoSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionNoSql updateMany
   */
  export type RelatedPermissionNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatedPermissionNoSqls.
     */
    data: XOR<RelatedPermissionNoSqlUpdateManyMutationInput, RelatedPermissionNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which RelatedPermissionNoSqls to update
     */
    where?: RelatedPermissionNoSqlWhereInput
  }

  /**
   * RelatedPermissionNoSql upsert
   */
  export type RelatedPermissionNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatedPermissionNoSql to update in case it exists.
     */
    where: RelatedPermissionNoSqlWhereUniqueInput
    /**
     * In case the RelatedPermissionNoSql found by the `where` argument doesn't exist, create a new RelatedPermissionNoSql with this data.
     */
    create: XOR<RelatedPermissionNoSqlCreateInput, RelatedPermissionNoSqlUncheckedCreateInput>
    /**
     * In case the RelatedPermissionNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatedPermissionNoSqlUpdateInput, RelatedPermissionNoSqlUncheckedUpdateInput>
  }

  /**
   * RelatedPermissionNoSql delete
   */
  export type RelatedPermissionNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
    /**
     * Filter which RelatedPermissionNoSql to delete.
     */
    where: RelatedPermissionNoSqlWhereUniqueInput
  }

  /**
   * RelatedPermissionNoSql deleteMany
   */
  export type RelatedPermissionNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatedPermissionNoSqls to delete
     */
    where?: RelatedPermissionNoSqlWhereInput
  }

  /**
   * RelatedPermissionNoSql findRaw
   */
  export type RelatedPermissionNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RelatedPermissionNoSql aggregateRaw
   */
  export type RelatedPermissionNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RelatedPermissionNoSql without action
   */
  export type RelatedPermissionNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatedPermissionNoSql
     */
    select?: RelatedPermissionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatedPermissionNoSql
     */
    omit?: RelatedPermissionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatedPermissionNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model RoleNoSql
   */

  export type AggregateRoleNoSql = {
    _count: RoleNoSqlCountAggregateOutputType | null
    _min: RoleNoSqlMinAggregateOutputType | null
    _max: RoleNoSqlMaxAggregateOutputType | null
  }

  export type RoleNoSqlMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    uuid: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleNoSqlMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    uuid: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleNoSqlCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    uuid: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleNoSqlMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleNoSqlMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleNoSqlCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    uuid?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleNoSql to aggregate.
     */
    where?: RoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleNoSqls to fetch.
     */
    orderBy?: RoleNoSqlOrderByWithRelationInput | RoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleNoSqls
    **/
    _count?: true | RoleNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleNoSqlMaxAggregateInputType
  }

  export type GetRoleNoSqlAggregateType<T extends RoleNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleNoSql[P]>
      : GetScalarType<T[P], AggregateRoleNoSql[P]>
  }




  export type RoleNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleNoSqlWhereInput
    orderBy?: RoleNoSqlOrderByWithAggregationInput | RoleNoSqlOrderByWithAggregationInput[]
    by: RoleNoSqlScalarFieldEnum[] | RoleNoSqlScalarFieldEnum
    having?: RoleNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleNoSqlCountAggregateInputType | true
    _min?: RoleNoSqlMinAggregateInputType
    _max?: RoleNoSqlMaxAggregateInputType
  }

  export type RoleNoSqlGroupByOutputType = {
    id: string
    name: string
    desc: string | null
    uuid: string
    created_at: Date
    updated_at: Date
    _count: RoleNoSqlCountAggregateOutputType | null
    _min: RoleNoSqlMinAggregateOutputType | null
    _max: RoleNoSqlMaxAggregateOutputType | null
  }

  type GetRoleNoSqlGroupByPayload<T extends RoleNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], RoleNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type RoleNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
    permission_roles?: boolean | RoleNoSql$permission_rolesArgs<ExtArgs>
    users?: boolean | RoleNoSql$usersArgs<ExtArgs>
    _count?: boolean | RoleNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleNoSql"]>



  export type RoleNoSqlSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    uuid?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "uuid" | "created_at" | "updated_at", ExtArgs["result"]["roleNoSql"]>
  export type RoleNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission_roles?: boolean | RoleNoSql$permission_rolesArgs<ExtArgs>
    users?: boolean | RoleNoSql$usersArgs<ExtArgs>
    _count?: boolean | RoleNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoleNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleNoSql"
    objects: {
      permission_roles: Prisma.$PermissionRoleNoSqlPayload<ExtArgs>[]
      users: Prisma.$UserRoleNoSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string | null
      uuid: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roleNoSql"]>
    composites: {}
  }

  type RoleNoSqlGetPayload<S extends boolean | null | undefined | RoleNoSqlDefaultArgs> = $Result.GetResult<Prisma.$RoleNoSqlPayload, S>

  type RoleNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleNoSqlCountAggregateInputType | true
    }

  export interface RoleNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleNoSql'], meta: { name: 'RoleNoSql' } }
    /**
     * Find zero or one RoleNoSql that matches the filter.
     * @param {RoleNoSqlFindUniqueArgs} args - Arguments to find a RoleNoSql
     * @example
     * // Get one RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleNoSqlFindUniqueArgs>(args: SelectSubset<T, RoleNoSqlFindUniqueArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RoleNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleNoSqlFindUniqueOrThrowArgs} args - Arguments to find a RoleNoSql
     * @example
     * // Get one RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RoleNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlFindFirstArgs} args - Arguments to find a RoleNoSql
     * @example
     * // Get one RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleNoSqlFindFirstArgs>(args?: SelectSubset<T, RoleNoSqlFindFirstArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RoleNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlFindFirstOrThrowArgs} args - Arguments to find a RoleNoSql
     * @example
     * // Get one RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoleNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleNoSqls
     * const roleNoSqls = await prisma.roleNoSql.findMany()
     * 
     * // Get first 10 RoleNoSqls
     * const roleNoSqls = await prisma.roleNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleNoSqlWithIdOnly = await prisma.roleNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleNoSqlFindManyArgs>(args?: SelectSubset<T, RoleNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RoleNoSql.
     * @param {RoleNoSqlCreateArgs} args - Arguments to create a RoleNoSql.
     * @example
     * // Create one RoleNoSql
     * const RoleNoSql = await prisma.roleNoSql.create({
     *   data: {
     *     // ... data to create a RoleNoSql
     *   }
     * })
     * 
     */
    create<T extends RoleNoSqlCreateArgs>(args: SelectSubset<T, RoleNoSqlCreateArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RoleNoSqls.
     * @param {RoleNoSqlCreateManyArgs} args - Arguments to create many RoleNoSqls.
     * @example
     * // Create many RoleNoSqls
     * const roleNoSql = await prisma.roleNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleNoSqlCreateManyArgs>(args?: SelectSubset<T, RoleNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleNoSql.
     * @param {RoleNoSqlDeleteArgs} args - Arguments to delete one RoleNoSql.
     * @example
     * // Delete one RoleNoSql
     * const RoleNoSql = await prisma.roleNoSql.delete({
     *   where: {
     *     // ... filter to delete one RoleNoSql
     *   }
     * })
     * 
     */
    delete<T extends RoleNoSqlDeleteArgs>(args: SelectSubset<T, RoleNoSqlDeleteArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RoleNoSql.
     * @param {RoleNoSqlUpdateArgs} args - Arguments to update one RoleNoSql.
     * @example
     * // Update one RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleNoSqlUpdateArgs>(args: SelectSubset<T, RoleNoSqlUpdateArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RoleNoSqls.
     * @param {RoleNoSqlDeleteManyArgs} args - Arguments to filter RoleNoSqls to delete.
     * @example
     * // Delete a few RoleNoSqls
     * const { count } = await prisma.roleNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleNoSqlDeleteManyArgs>(args?: SelectSubset<T, RoleNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleNoSqls
     * const roleNoSql = await prisma.roleNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleNoSqlUpdateManyArgs>(args: SelectSubset<T, RoleNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleNoSql.
     * @param {RoleNoSqlUpsertArgs} args - Arguments to update or create a RoleNoSql.
     * @example
     * // Update or create a RoleNoSql
     * const roleNoSql = await prisma.roleNoSql.upsert({
     *   create: {
     *     // ... data to create a RoleNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleNoSql we want to update
     *   }
     * })
     */
    upsert<T extends RoleNoSqlUpsertArgs>(args: SelectSubset<T, RoleNoSqlUpsertArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoleNoSqls that matches the filter.
     * @param {RoleNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roleNoSql = await prisma.roleNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoleNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RoleNoSql.
     * @param {RoleNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roleNoSql = await prisma.roleNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoleNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlCountArgs} args - Arguments to filter RoleNoSqls to count.
     * @example
     * // Count the number of RoleNoSqls
     * const count = await prisma.roleNoSql.count({
     *   where: {
     *     // ... the filter for the RoleNoSqls we want to count
     *   }
     * })
    **/
    count<T extends RoleNoSqlCountArgs>(
      args?: Subset<T, RoleNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleNoSqlAggregateArgs>(args: Subset<T, RoleNoSqlAggregateArgs>): Prisma.PrismaPromise<GetRoleNoSqlAggregateType<T>>

    /**
     * Group by RoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleNoSqlGroupByArgs} args - Group by arguments.
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
      T extends RoleNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: RoleNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleNoSql model
   */
  readonly fields: RoleNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission_roles<T extends RoleNoSql$permission_rolesArgs<ExtArgs> = {}>(args?: Subset<T, RoleNoSql$permission_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends RoleNoSql$usersArgs<ExtArgs> = {}>(args?: Subset<T, RoleNoSql$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the RoleNoSql model
   */ 
  interface RoleNoSqlFieldRefs {
    readonly id: FieldRef<"RoleNoSql", 'String'>
    readonly name: FieldRef<"RoleNoSql", 'String'>
    readonly desc: FieldRef<"RoleNoSql", 'String'>
    readonly uuid: FieldRef<"RoleNoSql", 'String'>
    readonly created_at: FieldRef<"RoleNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"RoleNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleNoSql findUnique
   */
  export type RoleNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleNoSql to fetch.
     */
    where: RoleNoSqlWhereUniqueInput
  }

  /**
   * RoleNoSql findUniqueOrThrow
   */
  export type RoleNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleNoSql to fetch.
     */
    where: RoleNoSqlWhereUniqueInput
  }

  /**
   * RoleNoSql findFirst
   */
  export type RoleNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleNoSql to fetch.
     */
    where?: RoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleNoSqls to fetch.
     */
    orderBy?: RoleNoSqlOrderByWithRelationInput | RoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleNoSqls.
     */
    cursor?: RoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleNoSqls.
     */
    distinct?: RoleNoSqlScalarFieldEnum | RoleNoSqlScalarFieldEnum[]
  }

  /**
   * RoleNoSql findFirstOrThrow
   */
  export type RoleNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleNoSql to fetch.
     */
    where?: RoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleNoSqls to fetch.
     */
    orderBy?: RoleNoSqlOrderByWithRelationInput | RoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleNoSqls.
     */
    cursor?: RoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleNoSqls.
     */
    distinct?: RoleNoSqlScalarFieldEnum | RoleNoSqlScalarFieldEnum[]
  }

  /**
   * RoleNoSql findMany
   */
  export type RoleNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which RoleNoSqls to fetch.
     */
    where?: RoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleNoSqls to fetch.
     */
    orderBy?: RoleNoSqlOrderByWithRelationInput | RoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleNoSqls.
     */
    cursor?: RoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleNoSqls.
     */
    skip?: number
    distinct?: RoleNoSqlScalarFieldEnum | RoleNoSqlScalarFieldEnum[]
  }

  /**
   * RoleNoSql create
   */
  export type RoleNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleNoSql.
     */
    data: XOR<RoleNoSqlCreateInput, RoleNoSqlUncheckedCreateInput>
  }

  /**
   * RoleNoSql createMany
   */
  export type RoleNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleNoSqls.
     */
    data: RoleNoSqlCreateManyInput | RoleNoSqlCreateManyInput[]
  }

  /**
   * RoleNoSql update
   */
  export type RoleNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleNoSql.
     */
    data: XOR<RoleNoSqlUpdateInput, RoleNoSqlUncheckedUpdateInput>
    /**
     * Choose, which RoleNoSql to update.
     */
    where: RoleNoSqlWhereUniqueInput
  }

  /**
   * RoleNoSql updateMany
   */
  export type RoleNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleNoSqls.
     */
    data: XOR<RoleNoSqlUpdateManyMutationInput, RoleNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which RoleNoSqls to update
     */
    where?: RoleNoSqlWhereInput
  }

  /**
   * RoleNoSql upsert
   */
  export type RoleNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleNoSql to update in case it exists.
     */
    where: RoleNoSqlWhereUniqueInput
    /**
     * In case the RoleNoSql found by the `where` argument doesn't exist, create a new RoleNoSql with this data.
     */
    create: XOR<RoleNoSqlCreateInput, RoleNoSqlUncheckedCreateInput>
    /**
     * In case the RoleNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleNoSqlUpdateInput, RoleNoSqlUncheckedUpdateInput>
  }

  /**
   * RoleNoSql delete
   */
  export type RoleNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter which RoleNoSql to delete.
     */
    where: RoleNoSqlWhereUniqueInput
  }

  /**
   * RoleNoSql deleteMany
   */
  export type RoleNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleNoSqls to delete
     */
    where?: RoleNoSqlWhereInput
  }

  /**
   * RoleNoSql findRaw
   */
  export type RoleNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoleNoSql aggregateRaw
   */
  export type RoleNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoleNoSql.permission_roles
   */
  export type RoleNoSql$permission_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    where?: PermissionRoleNoSqlWhereInput
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionRoleNoSqlScalarFieldEnum | PermissionRoleNoSqlScalarFieldEnum[]
  }

  /**
   * RoleNoSql.users
   */
  export type RoleNoSql$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    where?: UserRoleNoSqlWhereInput
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    cursor?: UserRoleNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleNoSqlScalarFieldEnum | UserRoleNoSqlScalarFieldEnum[]
  }

  /**
   * RoleNoSql without action
   */
  export type RoleNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleNoSql
     */
    select?: RoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleNoSql
     */
    omit?: RoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model PermissionRoleNoSql
   */

  export type AggregatePermissionRoleNoSql = {
    _count: PermissionRoleNoSqlCountAggregateOutputType | null
    _min: PermissionRoleNoSqlMinAggregateOutputType | null
    _max: PermissionRoleNoSqlMaxAggregateOutputType | null
  }

  export type PermissionRoleNoSqlMinAggregateOutputType = {
    id: string | null
    permission_id: string | null
    role_id: string | null
  }

  export type PermissionRoleNoSqlMaxAggregateOutputType = {
    id: string | null
    permission_id: string | null
    role_id: string | null
  }

  export type PermissionRoleNoSqlCountAggregateOutputType = {
    id: number
    permission_id: number
    role_id: number
    _all: number
  }


  export type PermissionRoleNoSqlMinAggregateInputType = {
    id?: true
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleNoSqlMaxAggregateInputType = {
    id?: true
    permission_id?: true
    role_id?: true
  }

  export type PermissionRoleNoSqlCountAggregateInputType = {
    id?: true
    permission_id?: true
    role_id?: true
    _all?: true
  }

  export type PermissionRoleNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionRoleNoSql to aggregate.
     */
    where?: PermissionRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleNoSqls to fetch.
     */
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionRoleNoSqls
    **/
    _count?: true | PermissionRoleNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionRoleNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionRoleNoSqlMaxAggregateInputType
  }

  export type GetPermissionRoleNoSqlAggregateType<T extends PermissionRoleNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionRoleNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionRoleNoSql[P]>
      : GetScalarType<T[P], AggregatePermissionRoleNoSql[P]>
  }




  export type PermissionRoleNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionRoleNoSqlWhereInput
    orderBy?: PermissionRoleNoSqlOrderByWithAggregationInput | PermissionRoleNoSqlOrderByWithAggregationInput[]
    by: PermissionRoleNoSqlScalarFieldEnum[] | PermissionRoleNoSqlScalarFieldEnum
    having?: PermissionRoleNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionRoleNoSqlCountAggregateInputType | true
    _min?: PermissionRoleNoSqlMinAggregateInputType
    _max?: PermissionRoleNoSqlMaxAggregateInputType
  }

  export type PermissionRoleNoSqlGroupByOutputType = {
    id: string
    permission_id: string
    role_id: string
    _count: PermissionRoleNoSqlCountAggregateOutputType | null
    _min: PermissionRoleNoSqlMinAggregateOutputType | null
    _max: PermissionRoleNoSqlMaxAggregateOutputType | null
  }

  type GetPermissionRoleNoSqlGroupByPayload<T extends PermissionRoleNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionRoleNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionRoleNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionRoleNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionRoleNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type PermissionRoleNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permission_id?: boolean
    role_id?: boolean
    permission?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleNoSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionRoleNoSql"]>



  export type PermissionRoleNoSqlSelectScalar = {
    id?: boolean
    permission_id?: boolean
    role_id?: boolean
  }

  export type PermissionRoleNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permission_id" | "role_id", ExtArgs["result"]["permissionRoleNoSql"]>
  export type PermissionRoleNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionNoSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleNoSqlDefaultArgs<ExtArgs>
  }

  export type $PermissionRoleNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionRoleNoSql"
    objects: {
      permission: Prisma.$PermissionNoSqlPayload<ExtArgs>
      role: Prisma.$RoleNoSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      permission_id: string
      role_id: string
    }, ExtArgs["result"]["permissionRoleNoSql"]>
    composites: {}
  }

  type PermissionRoleNoSqlGetPayload<S extends boolean | null | undefined | PermissionRoleNoSqlDefaultArgs> = $Result.GetResult<Prisma.$PermissionRoleNoSqlPayload, S>

  type PermissionRoleNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionRoleNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionRoleNoSqlCountAggregateInputType | true
    }

  export interface PermissionRoleNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionRoleNoSql'], meta: { name: 'PermissionRoleNoSql' } }
    /**
     * Find zero or one PermissionRoleNoSql that matches the filter.
     * @param {PermissionRoleNoSqlFindUniqueArgs} args - Arguments to find a PermissionRoleNoSql
     * @example
     * // Get one PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionRoleNoSqlFindUniqueArgs>(args: SelectSubset<T, PermissionRoleNoSqlFindUniqueArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PermissionRoleNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionRoleNoSqlFindUniqueOrThrowArgs} args - Arguments to find a PermissionRoleNoSql
     * @example
     * // Get one PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionRoleNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionRoleNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionRoleNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlFindFirstArgs} args - Arguments to find a PermissionRoleNoSql
     * @example
     * // Get one PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionRoleNoSqlFindFirstArgs>(args?: SelectSubset<T, PermissionRoleNoSqlFindFirstArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PermissionRoleNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlFindFirstOrThrowArgs} args - Arguments to find a PermissionRoleNoSql
     * @example
     * // Get one PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionRoleNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionRoleNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionRoleNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionRoleNoSqls
     * const permissionRoleNoSqls = await prisma.permissionRoleNoSql.findMany()
     * 
     * // Get first 10 PermissionRoleNoSqls
     * const permissionRoleNoSqls = await prisma.permissionRoleNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionRoleNoSqlWithIdOnly = await prisma.permissionRoleNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionRoleNoSqlFindManyArgs>(args?: SelectSubset<T, PermissionRoleNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PermissionRoleNoSql.
     * @param {PermissionRoleNoSqlCreateArgs} args - Arguments to create a PermissionRoleNoSql.
     * @example
     * // Create one PermissionRoleNoSql
     * const PermissionRoleNoSql = await prisma.permissionRoleNoSql.create({
     *   data: {
     *     // ... data to create a PermissionRoleNoSql
     *   }
     * })
     * 
     */
    create<T extends PermissionRoleNoSqlCreateArgs>(args: SelectSubset<T, PermissionRoleNoSqlCreateArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PermissionRoleNoSqls.
     * @param {PermissionRoleNoSqlCreateManyArgs} args - Arguments to create many PermissionRoleNoSqls.
     * @example
     * // Create many PermissionRoleNoSqls
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionRoleNoSqlCreateManyArgs>(args?: SelectSubset<T, PermissionRoleNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PermissionRoleNoSql.
     * @param {PermissionRoleNoSqlDeleteArgs} args - Arguments to delete one PermissionRoleNoSql.
     * @example
     * // Delete one PermissionRoleNoSql
     * const PermissionRoleNoSql = await prisma.permissionRoleNoSql.delete({
     *   where: {
     *     // ... filter to delete one PermissionRoleNoSql
     *   }
     * })
     * 
     */
    delete<T extends PermissionRoleNoSqlDeleteArgs>(args: SelectSubset<T, PermissionRoleNoSqlDeleteArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PermissionRoleNoSql.
     * @param {PermissionRoleNoSqlUpdateArgs} args - Arguments to update one PermissionRoleNoSql.
     * @example
     * // Update one PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionRoleNoSqlUpdateArgs>(args: SelectSubset<T, PermissionRoleNoSqlUpdateArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PermissionRoleNoSqls.
     * @param {PermissionRoleNoSqlDeleteManyArgs} args - Arguments to filter PermissionRoleNoSqls to delete.
     * @example
     * // Delete a few PermissionRoleNoSqls
     * const { count } = await prisma.permissionRoleNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionRoleNoSqlDeleteManyArgs>(args?: SelectSubset<T, PermissionRoleNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionRoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionRoleNoSqls
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionRoleNoSqlUpdateManyArgs>(args: SelectSubset<T, PermissionRoleNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionRoleNoSql.
     * @param {PermissionRoleNoSqlUpsertArgs} args - Arguments to update or create a PermissionRoleNoSql.
     * @example
     * // Update or create a PermissionRoleNoSql
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.upsert({
     *   create: {
     *     // ... data to create a PermissionRoleNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionRoleNoSql we want to update
     *   }
     * })
     */
    upsert<T extends PermissionRoleNoSqlUpsertArgs>(args: SelectSubset<T, PermissionRoleNoSqlUpsertArgs<ExtArgs>>): Prisma__PermissionRoleNoSqlClient<$Result.GetResult<Prisma.$PermissionRoleNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PermissionRoleNoSqls that matches the filter.
     * @param {PermissionRoleNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PermissionRoleNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PermissionRoleNoSql.
     * @param {PermissionRoleNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const permissionRoleNoSql = await prisma.permissionRoleNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PermissionRoleNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PermissionRoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlCountArgs} args - Arguments to filter PermissionRoleNoSqls to count.
     * @example
     * // Count the number of PermissionRoleNoSqls
     * const count = await prisma.permissionRoleNoSql.count({
     *   where: {
     *     // ... the filter for the PermissionRoleNoSqls we want to count
     *   }
     * })
    **/
    count<T extends PermissionRoleNoSqlCountArgs>(
      args?: Subset<T, PermissionRoleNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionRoleNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionRoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionRoleNoSqlAggregateArgs>(args: Subset<T, PermissionRoleNoSqlAggregateArgs>): Prisma.PrismaPromise<GetPermissionRoleNoSqlAggregateType<T>>

    /**
     * Group by PermissionRoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionRoleNoSqlGroupByArgs} args - Group by arguments.
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
      T extends PermissionRoleNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionRoleNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: PermissionRoleNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionRoleNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionRoleNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionRoleNoSql model
   */
  readonly fields: PermissionRoleNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionRoleNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionRoleNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionNoSqlDefaultArgs<ExtArgs>>): Prisma__PermissionNoSqlClient<$Result.GetResult<Prisma.$PermissionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends RoleNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleNoSqlDefaultArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PermissionRoleNoSql model
   */ 
  interface PermissionRoleNoSqlFieldRefs {
    readonly id: FieldRef<"PermissionRoleNoSql", 'String'>
    readonly permission_id: FieldRef<"PermissionRoleNoSql", 'String'>
    readonly role_id: FieldRef<"PermissionRoleNoSql", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PermissionRoleNoSql findUnique
   */
  export type PermissionRoleNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleNoSql to fetch.
     */
    where: PermissionRoleNoSqlWhereUniqueInput
  }

  /**
   * PermissionRoleNoSql findUniqueOrThrow
   */
  export type PermissionRoleNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleNoSql to fetch.
     */
    where: PermissionRoleNoSqlWhereUniqueInput
  }

  /**
   * PermissionRoleNoSql findFirst
   */
  export type PermissionRoleNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleNoSql to fetch.
     */
    where?: PermissionRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleNoSqls to fetch.
     */
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionRoleNoSqls.
     */
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionRoleNoSqls.
     */
    distinct?: PermissionRoleNoSqlScalarFieldEnum | PermissionRoleNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleNoSql findFirstOrThrow
   */
  export type PermissionRoleNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleNoSql to fetch.
     */
    where?: PermissionRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleNoSqls to fetch.
     */
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionRoleNoSqls.
     */
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionRoleNoSqls.
     */
    distinct?: PermissionRoleNoSqlScalarFieldEnum | PermissionRoleNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleNoSql findMany
   */
  export type PermissionRoleNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which PermissionRoleNoSqls to fetch.
     */
    where?: PermissionRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionRoleNoSqls to fetch.
     */
    orderBy?: PermissionRoleNoSqlOrderByWithRelationInput | PermissionRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionRoleNoSqls.
     */
    cursor?: PermissionRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionRoleNoSqls.
     */
    skip?: number
    distinct?: PermissionRoleNoSqlScalarFieldEnum | PermissionRoleNoSqlScalarFieldEnum[]
  }

  /**
   * PermissionRoleNoSql create
   */
  export type PermissionRoleNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionRoleNoSql.
     */
    data: XOR<PermissionRoleNoSqlCreateInput, PermissionRoleNoSqlUncheckedCreateInput>
  }

  /**
   * PermissionRoleNoSql createMany
   */
  export type PermissionRoleNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionRoleNoSqls.
     */
    data: PermissionRoleNoSqlCreateManyInput | PermissionRoleNoSqlCreateManyInput[]
  }

  /**
   * PermissionRoleNoSql update
   */
  export type PermissionRoleNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionRoleNoSql.
     */
    data: XOR<PermissionRoleNoSqlUpdateInput, PermissionRoleNoSqlUncheckedUpdateInput>
    /**
     * Choose, which PermissionRoleNoSql to update.
     */
    where: PermissionRoleNoSqlWhereUniqueInput
  }

  /**
   * PermissionRoleNoSql updateMany
   */
  export type PermissionRoleNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionRoleNoSqls.
     */
    data: XOR<PermissionRoleNoSqlUpdateManyMutationInput, PermissionRoleNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which PermissionRoleNoSqls to update
     */
    where?: PermissionRoleNoSqlWhereInput
  }

  /**
   * PermissionRoleNoSql upsert
   */
  export type PermissionRoleNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionRoleNoSql to update in case it exists.
     */
    where: PermissionRoleNoSqlWhereUniqueInput
    /**
     * In case the PermissionRoleNoSql found by the `where` argument doesn't exist, create a new PermissionRoleNoSql with this data.
     */
    create: XOR<PermissionRoleNoSqlCreateInput, PermissionRoleNoSqlUncheckedCreateInput>
    /**
     * In case the PermissionRoleNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionRoleNoSqlUpdateInput, PermissionRoleNoSqlUncheckedUpdateInput>
  }

  /**
   * PermissionRoleNoSql delete
   */
  export type PermissionRoleNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter which PermissionRoleNoSql to delete.
     */
    where: PermissionRoleNoSqlWhereUniqueInput
  }

  /**
   * PermissionRoleNoSql deleteMany
   */
  export type PermissionRoleNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionRoleNoSqls to delete
     */
    where?: PermissionRoleNoSqlWhereInput
  }

  /**
   * PermissionRoleNoSql findRaw
   */
  export type PermissionRoleNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PermissionRoleNoSql aggregateRaw
   */
  export type PermissionRoleNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PermissionRoleNoSql without action
   */
  export type PermissionRoleNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionRoleNoSql
     */
    select?: PermissionRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionRoleNoSql
     */
    omit?: PermissionRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionRoleNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserNoSql
   */

  export type AggregateUserNoSql = {
    _count: UserNoSqlCountAggregateOutputType | null
    _min: UserNoSqlMinAggregateOutputType | null
    _max: UserNoSqlMaxAggregateOutputType | null
  }

  export type UserNoSqlMinAggregateOutputType = {
    id: string | null
    username: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserNoSqlMaxAggregateOutputType = {
    id: string | null
    username: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserNoSqlCountAggregateOutputType = {
    id: number
    username: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserNoSqlMinAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
  }

  export type UserNoSqlMaxAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
  }

  export type UserNoSqlCountAggregateInputType = {
    id?: true
    username?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNoSql to aggregate.
     */
    where?: UserNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoSqls to fetch.
     */
    orderBy?: UserNoSqlOrderByWithRelationInput | UserNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserNoSqls
    **/
    _count?: true | UserNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserNoSqlMaxAggregateInputType
  }

  export type GetUserNoSqlAggregateType<T extends UserNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNoSql[P]>
      : GetScalarType<T[P], AggregateUserNoSql[P]>
  }




  export type UserNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserNoSqlWhereInput
    orderBy?: UserNoSqlOrderByWithAggregationInput | UserNoSqlOrderByWithAggregationInput[]
    by: UserNoSqlScalarFieldEnum[] | UserNoSqlScalarFieldEnum
    having?: UserNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserNoSqlCountAggregateInputType | true
    _min?: UserNoSqlMinAggregateInputType
    _max?: UserNoSqlMaxAggregateInputType
  }

  export type UserNoSqlGroupByOutputType = {
    id: string
    username: string
    created_at: Date
    updated_at: Date
    _count: UserNoSqlCountAggregateOutputType | null
    _min: UserNoSqlMinAggregateOutputType | null
    _max: UserNoSqlMaxAggregateOutputType | null
  }

  type GetUserNoSqlGroupByPayload<T extends UserNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | UserNoSql$rolesArgs<ExtArgs>
    sessions?: boolean | UserNoSql$sessionsArgs<ExtArgs>
    _count?: boolean | UserNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userNoSql"]>



  export type UserNoSqlSelectScalar = {
    id?: boolean
    username?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "created_at" | "updated_at", ExtArgs["result"]["userNoSql"]>
  export type UserNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserNoSql$rolesArgs<ExtArgs>
    sessions?: boolean | UserNoSql$sessionsArgs<ExtArgs>
    _count?: boolean | UserNoSqlCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserNoSql"
    objects: {
      roles: Prisma.$UserRoleNoSqlPayload<ExtArgs>[]
      sessions: Prisma.$UserSessionNoSqlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userNoSql"]>
    composites: {}
  }

  type UserNoSqlGetPayload<S extends boolean | null | undefined | UserNoSqlDefaultArgs> = $Result.GetResult<Prisma.$UserNoSqlPayload, S>

  type UserNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserNoSqlCountAggregateInputType | true
    }

  export interface UserNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserNoSql'], meta: { name: 'UserNoSql' } }
    /**
     * Find zero or one UserNoSql that matches the filter.
     * @param {UserNoSqlFindUniqueArgs} args - Arguments to find a UserNoSql
     * @example
     * // Get one UserNoSql
     * const userNoSql = await prisma.userNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNoSqlFindUniqueArgs>(args: SelectSubset<T, UserNoSqlFindUniqueArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserNoSqlFindUniqueOrThrowArgs} args - Arguments to find a UserNoSql
     * @example
     * // Get one UserNoSql
     * const userNoSql = await prisma.userNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlFindFirstArgs} args - Arguments to find a UserNoSql
     * @example
     * // Get one UserNoSql
     * const userNoSql = await prisma.userNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNoSqlFindFirstArgs>(args?: SelectSubset<T, UserNoSqlFindFirstArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlFindFirstOrThrowArgs} args - Arguments to find a UserNoSql
     * @example
     * // Get one UserNoSql
     * const userNoSql = await prisma.userNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNoSqls
     * const userNoSqls = await prisma.userNoSql.findMany()
     * 
     * // Get first 10 UserNoSqls
     * const userNoSqls = await prisma.userNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userNoSqlWithIdOnly = await prisma.userNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserNoSqlFindManyArgs>(args?: SelectSubset<T, UserNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserNoSql.
     * @param {UserNoSqlCreateArgs} args - Arguments to create a UserNoSql.
     * @example
     * // Create one UserNoSql
     * const UserNoSql = await prisma.userNoSql.create({
     *   data: {
     *     // ... data to create a UserNoSql
     *   }
     * })
     * 
     */
    create<T extends UserNoSqlCreateArgs>(args: SelectSubset<T, UserNoSqlCreateArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserNoSqls.
     * @param {UserNoSqlCreateManyArgs} args - Arguments to create many UserNoSqls.
     * @example
     * // Create many UserNoSqls
     * const userNoSql = await prisma.userNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserNoSqlCreateManyArgs>(args?: SelectSubset<T, UserNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserNoSql.
     * @param {UserNoSqlDeleteArgs} args - Arguments to delete one UserNoSql.
     * @example
     * // Delete one UserNoSql
     * const UserNoSql = await prisma.userNoSql.delete({
     *   where: {
     *     // ... filter to delete one UserNoSql
     *   }
     * })
     * 
     */
    delete<T extends UserNoSqlDeleteArgs>(args: SelectSubset<T, UserNoSqlDeleteArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserNoSql.
     * @param {UserNoSqlUpdateArgs} args - Arguments to update one UserNoSql.
     * @example
     * // Update one UserNoSql
     * const userNoSql = await prisma.userNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserNoSqlUpdateArgs>(args: SelectSubset<T, UserNoSqlUpdateArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserNoSqls.
     * @param {UserNoSqlDeleteManyArgs} args - Arguments to filter UserNoSqls to delete.
     * @example
     * // Delete a few UserNoSqls
     * const { count } = await prisma.userNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserNoSqlDeleteManyArgs>(args?: SelectSubset<T, UserNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNoSqls
     * const userNoSql = await prisma.userNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserNoSqlUpdateManyArgs>(args: SelectSubset<T, UserNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserNoSql.
     * @param {UserNoSqlUpsertArgs} args - Arguments to update or create a UserNoSql.
     * @example
     * // Update or create a UserNoSql
     * const userNoSql = await prisma.userNoSql.upsert({
     *   create: {
     *     // ... data to create a UserNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNoSql we want to update
     *   }
     * })
     */
    upsert<T extends UserNoSqlUpsertArgs>(args: SelectSubset<T, UserNoSqlUpsertArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserNoSqls that matches the filter.
     * @param {UserNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userNoSql = await prisma.userNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserNoSql.
     * @param {UserNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userNoSql = await prisma.userNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlCountArgs} args - Arguments to filter UserNoSqls to count.
     * @example
     * // Count the number of UserNoSqls
     * const count = await prisma.userNoSql.count({
     *   where: {
     *     // ... the filter for the UserNoSqls we want to count
     *   }
     * })
    **/
    count<T extends UserNoSqlCountArgs>(
      args?: Subset<T, UserNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserNoSqlAggregateArgs>(args: Subset<T, UserNoSqlAggregateArgs>): Prisma.PrismaPromise<GetUserNoSqlAggregateType<T>>

    /**
     * Group by UserNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNoSqlGroupByArgs} args - Group by arguments.
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
      T extends UserNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserNoSql model
   */
  readonly fields: UserNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends UserNoSql$rolesArgs<ExtArgs> = {}>(args?: Subset<T, UserNoSql$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    sessions<T extends UserNoSql$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, UserNoSql$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the UserNoSql model
   */ 
  interface UserNoSqlFieldRefs {
    readonly id: FieldRef<"UserNoSql", 'String'>
    readonly username: FieldRef<"UserNoSql", 'String'>
    readonly created_at: FieldRef<"UserNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"UserNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserNoSql findUnique
   */
  export type UserNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserNoSql to fetch.
     */
    where: UserNoSqlWhereUniqueInput
  }

  /**
   * UserNoSql findUniqueOrThrow
   */
  export type UserNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserNoSql to fetch.
     */
    where: UserNoSqlWhereUniqueInput
  }

  /**
   * UserNoSql findFirst
   */
  export type UserNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserNoSql to fetch.
     */
    where?: UserNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoSqls to fetch.
     */
    orderBy?: UserNoSqlOrderByWithRelationInput | UserNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNoSqls.
     */
    cursor?: UserNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNoSqls.
     */
    distinct?: UserNoSqlScalarFieldEnum | UserNoSqlScalarFieldEnum[]
  }

  /**
   * UserNoSql findFirstOrThrow
   */
  export type UserNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserNoSql to fetch.
     */
    where?: UserNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoSqls to fetch.
     */
    orderBy?: UserNoSqlOrderByWithRelationInput | UserNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserNoSqls.
     */
    cursor?: UserNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserNoSqls.
     */
    distinct?: UserNoSqlScalarFieldEnum | UserNoSqlScalarFieldEnum[]
  }

  /**
   * UserNoSql findMany
   */
  export type UserNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserNoSqls to fetch.
     */
    where?: UserNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserNoSqls to fetch.
     */
    orderBy?: UserNoSqlOrderByWithRelationInput | UserNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserNoSqls.
     */
    cursor?: UserNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserNoSqls.
     */
    skip?: number
    distinct?: UserNoSqlScalarFieldEnum | UserNoSqlScalarFieldEnum[]
  }

  /**
   * UserNoSql create
   */
  export type UserNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserNoSql.
     */
    data: XOR<UserNoSqlCreateInput, UserNoSqlUncheckedCreateInput>
  }

  /**
   * UserNoSql createMany
   */
  export type UserNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserNoSqls.
     */
    data: UserNoSqlCreateManyInput | UserNoSqlCreateManyInput[]
  }

  /**
   * UserNoSql update
   */
  export type UserNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserNoSql.
     */
    data: XOR<UserNoSqlUpdateInput, UserNoSqlUncheckedUpdateInput>
    /**
     * Choose, which UserNoSql to update.
     */
    where: UserNoSqlWhereUniqueInput
  }

  /**
   * UserNoSql updateMany
   */
  export type UserNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserNoSqls.
     */
    data: XOR<UserNoSqlUpdateManyMutationInput, UserNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserNoSqls to update
     */
    where?: UserNoSqlWhereInput
  }

  /**
   * UserNoSql upsert
   */
  export type UserNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserNoSql to update in case it exists.
     */
    where: UserNoSqlWhereUniqueInput
    /**
     * In case the UserNoSql found by the `where` argument doesn't exist, create a new UserNoSql with this data.
     */
    create: XOR<UserNoSqlCreateInput, UserNoSqlUncheckedCreateInput>
    /**
     * In case the UserNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserNoSqlUpdateInput, UserNoSqlUncheckedUpdateInput>
  }

  /**
   * UserNoSql delete
   */
  export type UserNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
    /**
     * Filter which UserNoSql to delete.
     */
    where: UserNoSqlWhereUniqueInput
  }

  /**
   * UserNoSql deleteMany
   */
  export type UserNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserNoSqls to delete
     */
    where?: UserNoSqlWhereInput
  }

  /**
   * UserNoSql findRaw
   */
  export type UserNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNoSql aggregateRaw
   */
  export type UserNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserNoSql.roles
   */
  export type UserNoSql$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    where?: UserRoleNoSqlWhereInput
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    cursor?: UserRoleNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleNoSqlScalarFieldEnum | UserRoleNoSqlScalarFieldEnum[]
  }

  /**
   * UserNoSql.sessions
   */
  export type UserNoSql$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    where?: UserSessionNoSqlWhereInput
    orderBy?: UserSessionNoSqlOrderByWithRelationInput | UserSessionNoSqlOrderByWithRelationInput[]
    cursor?: UserSessionNoSqlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionNoSqlScalarFieldEnum | UserSessionNoSqlScalarFieldEnum[]
  }

  /**
   * UserNoSql without action
   */
  export type UserNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserNoSql
     */
    select?: UserNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserNoSql
     */
    omit?: UserNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserRoleNoSql
   */

  export type AggregateUserRoleNoSql = {
    _count: UserRoleNoSqlCountAggregateOutputType | null
    _min: UserRoleNoSqlMinAggregateOutputType | null
    _max: UserRoleNoSqlMaxAggregateOutputType | null
  }

  export type UserRoleNoSqlMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    uuid: string | null
  }

  export type UserRoleNoSqlMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    role_id: string | null
    uuid: string | null
  }

  export type UserRoleNoSqlCountAggregateOutputType = {
    id: number
    user_id: number
    role_id: number
    uuid: number
    _all: number
  }


  export type UserRoleNoSqlMinAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    uuid?: true
  }

  export type UserRoleNoSqlMaxAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    uuid?: true
  }

  export type UserRoleNoSqlCountAggregateInputType = {
    id?: true
    user_id?: true
    role_id?: true
    uuid?: true
    _all?: true
  }

  export type UserRoleNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleNoSql to aggregate.
     */
    where?: UserRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleNoSqls to fetch.
     */
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoleNoSqls
    **/
    _count?: true | UserRoleNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleNoSqlMaxAggregateInputType
  }

  export type GetUserRoleNoSqlAggregateType<T extends UserRoleNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRoleNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRoleNoSql[P]>
      : GetScalarType<T[P], AggregateUserRoleNoSql[P]>
  }




  export type UserRoleNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleNoSqlWhereInput
    orderBy?: UserRoleNoSqlOrderByWithAggregationInput | UserRoleNoSqlOrderByWithAggregationInput[]
    by: UserRoleNoSqlScalarFieldEnum[] | UserRoleNoSqlScalarFieldEnum
    having?: UserRoleNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleNoSqlCountAggregateInputType | true
    _min?: UserRoleNoSqlMinAggregateInputType
    _max?: UserRoleNoSqlMaxAggregateInputType
  }

  export type UserRoleNoSqlGroupByOutputType = {
    id: string
    user_id: string
    role_id: string
    uuid: string
    _count: UserRoleNoSqlCountAggregateOutputType | null
    _min: UserRoleNoSqlMinAggregateOutputType | null
    _max: UserRoleNoSqlMaxAggregateOutputType | null
  }

  type GetUserRoleNoSqlGroupByPayload<T extends UserRoleNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
    user?: boolean | UserNoSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleNoSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleNoSql"]>



  export type UserRoleNoSqlSelectScalar = {
    id?: boolean
    user_id?: boolean
    role_id?: boolean
    uuid?: boolean
  }

  export type UserRoleNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "role_id" | "uuid", ExtArgs["result"]["userRoleNoSql"]>
  export type UserRoleNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserNoSqlDefaultArgs<ExtArgs>
    role?: boolean | RoleNoSqlDefaultArgs<ExtArgs>
  }

  export type $UserRoleNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRoleNoSql"
    objects: {
      user: Prisma.$UserNoSqlPayload<ExtArgs>
      role: Prisma.$RoleNoSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      role_id: string
      uuid: string
    }, ExtArgs["result"]["userRoleNoSql"]>
    composites: {}
  }

  type UserRoleNoSqlGetPayload<S extends boolean | null | undefined | UserRoleNoSqlDefaultArgs> = $Result.GetResult<Prisma.$UserRoleNoSqlPayload, S>

  type UserRoleNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleNoSqlCountAggregateInputType | true
    }

  export interface UserRoleNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRoleNoSql'], meta: { name: 'UserRoleNoSql' } }
    /**
     * Find zero or one UserRoleNoSql that matches the filter.
     * @param {UserRoleNoSqlFindUniqueArgs} args - Arguments to find a UserRoleNoSql
     * @example
     * // Get one UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleNoSqlFindUniqueArgs>(args: SelectSubset<T, UserRoleNoSqlFindUniqueArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserRoleNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleNoSqlFindUniqueOrThrowArgs} args - Arguments to find a UserRoleNoSql
     * @example
     * // Get one UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserRoleNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlFindFirstArgs} args - Arguments to find a UserRoleNoSql
     * @example
     * // Get one UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleNoSqlFindFirstArgs>(args?: SelectSubset<T, UserRoleNoSqlFindFirstArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserRoleNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlFindFirstOrThrowArgs} args - Arguments to find a UserRoleNoSql
     * @example
     * // Get one UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserRoleNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoleNoSqls
     * const userRoleNoSqls = await prisma.userRoleNoSql.findMany()
     * 
     * // Get first 10 UserRoleNoSqls
     * const userRoleNoSqls = await prisma.userRoleNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleNoSqlWithIdOnly = await prisma.userRoleNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleNoSqlFindManyArgs>(args?: SelectSubset<T, UserRoleNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserRoleNoSql.
     * @param {UserRoleNoSqlCreateArgs} args - Arguments to create a UserRoleNoSql.
     * @example
     * // Create one UserRoleNoSql
     * const UserRoleNoSql = await prisma.userRoleNoSql.create({
     *   data: {
     *     // ... data to create a UserRoleNoSql
     *   }
     * })
     * 
     */
    create<T extends UserRoleNoSqlCreateArgs>(args: SelectSubset<T, UserRoleNoSqlCreateArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserRoleNoSqls.
     * @param {UserRoleNoSqlCreateManyArgs} args - Arguments to create many UserRoleNoSqls.
     * @example
     * // Create many UserRoleNoSqls
     * const userRoleNoSql = await prisma.userRoleNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleNoSqlCreateManyArgs>(args?: SelectSubset<T, UserRoleNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRoleNoSql.
     * @param {UserRoleNoSqlDeleteArgs} args - Arguments to delete one UserRoleNoSql.
     * @example
     * // Delete one UserRoleNoSql
     * const UserRoleNoSql = await prisma.userRoleNoSql.delete({
     *   where: {
     *     // ... filter to delete one UserRoleNoSql
     *   }
     * })
     * 
     */
    delete<T extends UserRoleNoSqlDeleteArgs>(args: SelectSubset<T, UserRoleNoSqlDeleteArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserRoleNoSql.
     * @param {UserRoleNoSqlUpdateArgs} args - Arguments to update one UserRoleNoSql.
     * @example
     * // Update one UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleNoSqlUpdateArgs>(args: SelectSubset<T, UserRoleNoSqlUpdateArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserRoleNoSqls.
     * @param {UserRoleNoSqlDeleteManyArgs} args - Arguments to filter UserRoleNoSqls to delete.
     * @example
     * // Delete a few UserRoleNoSqls
     * const { count } = await prisma.userRoleNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleNoSqlDeleteManyArgs>(args?: SelectSubset<T, UserRoleNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoleNoSqls
     * const userRoleNoSql = await prisma.userRoleNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleNoSqlUpdateManyArgs>(args: SelectSubset<T, UserRoleNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRoleNoSql.
     * @param {UserRoleNoSqlUpsertArgs} args - Arguments to update or create a UserRoleNoSql.
     * @example
     * // Update or create a UserRoleNoSql
     * const userRoleNoSql = await prisma.userRoleNoSql.upsert({
     *   create: {
     *     // ... data to create a UserRoleNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoleNoSql we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleNoSqlUpsertArgs>(args: SelectSubset<T, UserRoleNoSqlUpsertArgs<ExtArgs>>): Prisma__UserRoleNoSqlClient<$Result.GetResult<Prisma.$UserRoleNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserRoleNoSqls that matches the filter.
     * @param {UserRoleNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userRoleNoSql = await prisma.userRoleNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserRoleNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserRoleNoSql.
     * @param {UserRoleNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userRoleNoSql = await prisma.userRoleNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserRoleNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserRoleNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlCountArgs} args - Arguments to filter UserRoleNoSqls to count.
     * @example
     * // Count the number of UserRoleNoSqls
     * const count = await prisma.userRoleNoSql.count({
     *   where: {
     *     // ... the filter for the UserRoleNoSqls we want to count
     *   }
     * })
    **/
    count<T extends UserRoleNoSqlCountArgs>(
      args?: Subset<T, UserRoleNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleNoSqlAggregateArgs>(args: Subset<T, UserRoleNoSqlAggregateArgs>): Prisma.PrismaPromise<GetUserRoleNoSqlAggregateType<T>>

    /**
     * Group by UserRoleNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleNoSqlGroupByArgs} args - Group by arguments.
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
      T extends UserRoleNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRoleNoSql model
   */
  readonly fields: UserRoleNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRoleNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserNoSqlDefaultArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends RoleNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleNoSqlDefaultArgs<ExtArgs>>): Prisma__RoleNoSqlClient<$Result.GetResult<Prisma.$RoleNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UserRoleNoSql model
   */ 
  interface UserRoleNoSqlFieldRefs {
    readonly id: FieldRef<"UserRoleNoSql", 'String'>
    readonly user_id: FieldRef<"UserRoleNoSql", 'String'>
    readonly role_id: FieldRef<"UserRoleNoSql", 'String'>
    readonly uuid: FieldRef<"UserRoleNoSql", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRoleNoSql findUnique
   */
  export type UserRoleNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleNoSql to fetch.
     */
    where: UserRoleNoSqlWhereUniqueInput
  }

  /**
   * UserRoleNoSql findUniqueOrThrow
   */
  export type UserRoleNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleNoSql to fetch.
     */
    where: UserRoleNoSqlWhereUniqueInput
  }

  /**
   * UserRoleNoSql findFirst
   */
  export type UserRoleNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleNoSql to fetch.
     */
    where?: UserRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleNoSqls to fetch.
     */
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleNoSqls.
     */
    cursor?: UserRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleNoSqls.
     */
    distinct?: UserRoleNoSqlScalarFieldEnum | UserRoleNoSqlScalarFieldEnum[]
  }

  /**
   * UserRoleNoSql findFirstOrThrow
   */
  export type UserRoleNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleNoSql to fetch.
     */
    where?: UserRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleNoSqls to fetch.
     */
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleNoSqls.
     */
    cursor?: UserRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleNoSqls.
     */
    distinct?: UserRoleNoSqlScalarFieldEnum | UserRoleNoSqlScalarFieldEnum[]
  }

  /**
   * UserRoleNoSql findMany
   */
  export type UserRoleNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleNoSqls to fetch.
     */
    where?: UserRoleNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleNoSqls to fetch.
     */
    orderBy?: UserRoleNoSqlOrderByWithRelationInput | UserRoleNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoleNoSqls.
     */
    cursor?: UserRoleNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleNoSqls.
     */
    skip?: number
    distinct?: UserRoleNoSqlScalarFieldEnum | UserRoleNoSqlScalarFieldEnum[]
  }

  /**
   * UserRoleNoSql create
   */
  export type UserRoleNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRoleNoSql.
     */
    data: XOR<UserRoleNoSqlCreateInput, UserRoleNoSqlUncheckedCreateInput>
  }

  /**
   * UserRoleNoSql createMany
   */
  export type UserRoleNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoleNoSqls.
     */
    data: UserRoleNoSqlCreateManyInput | UserRoleNoSqlCreateManyInput[]
  }

  /**
   * UserRoleNoSql update
   */
  export type UserRoleNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRoleNoSql.
     */
    data: XOR<UserRoleNoSqlUpdateInput, UserRoleNoSqlUncheckedUpdateInput>
    /**
     * Choose, which UserRoleNoSql to update.
     */
    where: UserRoleNoSqlWhereUniqueInput
  }

  /**
   * UserRoleNoSql updateMany
   */
  export type UserRoleNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoleNoSqls.
     */
    data: XOR<UserRoleNoSqlUpdateManyMutationInput, UserRoleNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleNoSqls to update
     */
    where?: UserRoleNoSqlWhereInput
  }

  /**
   * UserRoleNoSql upsert
   */
  export type UserRoleNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRoleNoSql to update in case it exists.
     */
    where: UserRoleNoSqlWhereUniqueInput
    /**
     * In case the UserRoleNoSql found by the `where` argument doesn't exist, create a new UserRoleNoSql with this data.
     */
    create: XOR<UserRoleNoSqlCreateInput, UserRoleNoSqlUncheckedCreateInput>
    /**
     * In case the UserRoleNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleNoSqlUpdateInput, UserRoleNoSqlUncheckedUpdateInput>
  }

  /**
   * UserRoleNoSql delete
   */
  export type UserRoleNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
    /**
     * Filter which UserRoleNoSql to delete.
     */
    where: UserRoleNoSqlWhereUniqueInput
  }

  /**
   * UserRoleNoSql deleteMany
   */
  export type UserRoleNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleNoSqls to delete
     */
    where?: UserRoleNoSqlWhereInput
  }

  /**
   * UserRoleNoSql findRaw
   */
  export type UserRoleNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRoleNoSql aggregateRaw
   */
  export type UserRoleNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRoleNoSql without action
   */
  export type UserRoleNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleNoSql
     */
    select?: UserRoleNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleNoSql
     */
    omit?: UserRoleNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleNoSqlInclude<ExtArgs> | null
  }


  /**
   * Model UserSessionNoSql
   */

  export type AggregateUserSessionNoSql = {
    _count: UserSessionNoSqlCountAggregateOutputType | null
    _min: UserSessionNoSqlMinAggregateOutputType | null
    _max: UserSessionNoSqlMaxAggregateOutputType | null
  }

  export type UserSessionNoSqlMinAggregateOutputType = {
    id: string | null
    token: string | null
    refresh_token: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSessionNoSqlMaxAggregateOutputType = {
    id: string | null
    token: string | null
    refresh_token: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserSessionNoSqlCountAggregateOutputType = {
    id: number
    token: number
    refresh_token: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserSessionNoSqlMinAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSessionNoSqlMaxAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserSessionNoSqlCountAggregateInputType = {
    id?: true
    token?: true
    refresh_token?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserSessionNoSqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessionNoSql to aggregate.
     */
    where?: UserSessionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionNoSqls to fetch.
     */
    orderBy?: UserSessionNoSqlOrderByWithRelationInput | UserSessionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessionNoSqls
    **/
    _count?: true | UserSessionNoSqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionNoSqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionNoSqlMaxAggregateInputType
  }

  export type GetUserSessionNoSqlAggregateType<T extends UserSessionNoSqlAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSessionNoSql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSessionNoSql[P]>
      : GetScalarType<T[P], AggregateUserSessionNoSql[P]>
  }




  export type UserSessionNoSqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionNoSqlWhereInput
    orderBy?: UserSessionNoSqlOrderByWithAggregationInput | UserSessionNoSqlOrderByWithAggregationInput[]
    by: UserSessionNoSqlScalarFieldEnum[] | UserSessionNoSqlScalarFieldEnum
    having?: UserSessionNoSqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionNoSqlCountAggregateInputType | true
    _min?: UserSessionNoSqlMinAggregateInputType
    _max?: UserSessionNoSqlMaxAggregateInputType
  }

  export type UserSessionNoSqlGroupByOutputType = {
    id: string
    token: string | null
    refresh_token: string | null
    user_id: string
    created_at: Date
    updated_at: Date
    _count: UserSessionNoSqlCountAggregateOutputType | null
    _min: UserSessionNoSqlMinAggregateOutputType | null
    _max: UserSessionNoSqlMaxAggregateOutputType | null
  }

  type GetUserSessionNoSqlGroupByPayload<T extends UserSessionNoSqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionNoSqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionNoSqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionNoSqlGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionNoSqlGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionNoSqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserNoSqlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSessionNoSql"]>



  export type UserSessionNoSqlSelectScalar = {
    id?: boolean
    token?: boolean
    refresh_token?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserSessionNoSqlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "refresh_token" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["userSessionNoSql"]>
  export type UserSessionNoSqlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserNoSqlDefaultArgs<ExtArgs>
  }

  export type $UserSessionNoSqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSessionNoSql"
    objects: {
      user: Prisma.$UserNoSqlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string | null
      refresh_token: string | null
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userSessionNoSql"]>
    composites: {}
  }

  type UserSessionNoSqlGetPayload<S extends boolean | null | undefined | UserSessionNoSqlDefaultArgs> = $Result.GetResult<Prisma.$UserSessionNoSqlPayload, S>

  type UserSessionNoSqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionNoSqlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionNoSqlCountAggregateInputType | true
    }

  export interface UserSessionNoSqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSessionNoSql'], meta: { name: 'UserSessionNoSql' } }
    /**
     * Find zero or one UserSessionNoSql that matches the filter.
     * @param {UserSessionNoSqlFindUniqueArgs} args - Arguments to find a UserSessionNoSql
     * @example
     * // Get one UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionNoSqlFindUniqueArgs>(args: SelectSubset<T, UserSessionNoSqlFindUniqueArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserSessionNoSql that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionNoSqlFindUniqueOrThrowArgs} args - Arguments to find a UserSessionNoSql
     * @example
     * // Get one UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionNoSqlFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionNoSqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserSessionNoSql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlFindFirstArgs} args - Arguments to find a UserSessionNoSql
     * @example
     * // Get one UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionNoSqlFindFirstArgs>(args?: SelectSubset<T, UserSessionNoSqlFindFirstArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserSessionNoSql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlFindFirstOrThrowArgs} args - Arguments to find a UserSessionNoSql
     * @example
     * // Get one UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionNoSqlFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionNoSqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSessionNoSqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessionNoSqls
     * const userSessionNoSqls = await prisma.userSessionNoSql.findMany()
     * 
     * // Get first 10 UserSessionNoSqls
     * const userSessionNoSqls = await prisma.userSessionNoSql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionNoSqlWithIdOnly = await prisma.userSessionNoSql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionNoSqlFindManyArgs>(args?: SelectSubset<T, UserSessionNoSqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserSessionNoSql.
     * @param {UserSessionNoSqlCreateArgs} args - Arguments to create a UserSessionNoSql.
     * @example
     * // Create one UserSessionNoSql
     * const UserSessionNoSql = await prisma.userSessionNoSql.create({
     *   data: {
     *     // ... data to create a UserSessionNoSql
     *   }
     * })
     * 
     */
    create<T extends UserSessionNoSqlCreateArgs>(args: SelectSubset<T, UserSessionNoSqlCreateArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserSessionNoSqls.
     * @param {UserSessionNoSqlCreateManyArgs} args - Arguments to create many UserSessionNoSqls.
     * @example
     * // Create many UserSessionNoSqls
     * const userSessionNoSql = await prisma.userSessionNoSql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionNoSqlCreateManyArgs>(args?: SelectSubset<T, UserSessionNoSqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSessionNoSql.
     * @param {UserSessionNoSqlDeleteArgs} args - Arguments to delete one UserSessionNoSql.
     * @example
     * // Delete one UserSessionNoSql
     * const UserSessionNoSql = await prisma.userSessionNoSql.delete({
     *   where: {
     *     // ... filter to delete one UserSessionNoSql
     *   }
     * })
     * 
     */
    delete<T extends UserSessionNoSqlDeleteArgs>(args: SelectSubset<T, UserSessionNoSqlDeleteArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserSessionNoSql.
     * @param {UserSessionNoSqlUpdateArgs} args - Arguments to update one UserSessionNoSql.
     * @example
     * // Update one UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionNoSqlUpdateArgs>(args: SelectSubset<T, UserSessionNoSqlUpdateArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserSessionNoSqls.
     * @param {UserSessionNoSqlDeleteManyArgs} args - Arguments to filter UserSessionNoSqls to delete.
     * @example
     * // Delete a few UserSessionNoSqls
     * const { count } = await prisma.userSessionNoSql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionNoSqlDeleteManyArgs>(args?: SelectSubset<T, UserSessionNoSqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessionNoSqls
     * const userSessionNoSql = await prisma.userSessionNoSql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionNoSqlUpdateManyArgs>(args: SelectSubset<T, UserSessionNoSqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSessionNoSql.
     * @param {UserSessionNoSqlUpsertArgs} args - Arguments to update or create a UserSessionNoSql.
     * @example
     * // Update or create a UserSessionNoSql
     * const userSessionNoSql = await prisma.userSessionNoSql.upsert({
     *   create: {
     *     // ... data to create a UserSessionNoSql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSessionNoSql we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionNoSqlUpsertArgs>(args: SelectSubset<T, UserSessionNoSqlUpsertArgs<ExtArgs>>): Prisma__UserSessionNoSqlClient<$Result.GetResult<Prisma.$UserSessionNoSqlPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserSessionNoSqls that matches the filter.
     * @param {UserSessionNoSqlFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userSessionNoSql = await prisma.userSessionNoSql.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserSessionNoSqlFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserSessionNoSql.
     * @param {UserSessionNoSqlAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userSessionNoSql = await prisma.userSessionNoSql.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserSessionNoSqlAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserSessionNoSqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlCountArgs} args - Arguments to filter UserSessionNoSqls to count.
     * @example
     * // Count the number of UserSessionNoSqls
     * const count = await prisma.userSessionNoSql.count({
     *   where: {
     *     // ... the filter for the UserSessionNoSqls we want to count
     *   }
     * })
    **/
    count<T extends UserSessionNoSqlCountArgs>(
      args?: Subset<T, UserSessionNoSqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionNoSqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSessionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionNoSqlAggregateArgs>(args: Subset<T, UserSessionNoSqlAggregateArgs>): Prisma.PrismaPromise<GetUserSessionNoSqlAggregateType<T>>

    /**
     * Group by UserSessionNoSql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionNoSqlGroupByArgs} args - Group by arguments.
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
      T extends UserSessionNoSqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionNoSqlGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionNoSqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSessionNoSqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionNoSqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSessionNoSql model
   */
  readonly fields: UserSessionNoSqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSessionNoSql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionNoSqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserNoSqlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserNoSqlDefaultArgs<ExtArgs>>): Prisma__UserNoSqlClient<$Result.GetResult<Prisma.$UserNoSqlPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the UserSessionNoSql model
   */ 
  interface UserSessionNoSqlFieldRefs {
    readonly id: FieldRef<"UserSessionNoSql", 'String'>
    readonly token: FieldRef<"UserSessionNoSql", 'String'>
    readonly refresh_token: FieldRef<"UserSessionNoSql", 'String'>
    readonly user_id: FieldRef<"UserSessionNoSql", 'String'>
    readonly created_at: FieldRef<"UserSessionNoSql", 'DateTime'>
    readonly updated_at: FieldRef<"UserSessionNoSql", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSessionNoSql findUnique
   */
  export type UserSessionNoSqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionNoSql to fetch.
     */
    where: UserSessionNoSqlWhereUniqueInput
  }

  /**
   * UserSessionNoSql findUniqueOrThrow
   */
  export type UserSessionNoSqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionNoSql to fetch.
     */
    where: UserSessionNoSqlWhereUniqueInput
  }

  /**
   * UserSessionNoSql findFirst
   */
  export type UserSessionNoSqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionNoSql to fetch.
     */
    where?: UserSessionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionNoSqls to fetch.
     */
    orderBy?: UserSessionNoSqlOrderByWithRelationInput | UserSessionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessionNoSqls.
     */
    cursor?: UserSessionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessionNoSqls.
     */
    distinct?: UserSessionNoSqlScalarFieldEnum | UserSessionNoSqlScalarFieldEnum[]
  }

  /**
   * UserSessionNoSql findFirstOrThrow
   */
  export type UserSessionNoSqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionNoSql to fetch.
     */
    where?: UserSessionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionNoSqls to fetch.
     */
    orderBy?: UserSessionNoSqlOrderByWithRelationInput | UserSessionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessionNoSqls.
     */
    cursor?: UserSessionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionNoSqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessionNoSqls.
     */
    distinct?: UserSessionNoSqlScalarFieldEnum | UserSessionNoSqlScalarFieldEnum[]
  }

  /**
   * UserSessionNoSql findMany
   */
  export type UserSessionNoSqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter, which UserSessionNoSqls to fetch.
     */
    where?: UserSessionNoSqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessionNoSqls to fetch.
     */
    orderBy?: UserSessionNoSqlOrderByWithRelationInput | UserSessionNoSqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessionNoSqls.
     */
    cursor?: UserSessionNoSqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessionNoSqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessionNoSqls.
     */
    skip?: number
    distinct?: UserSessionNoSqlScalarFieldEnum | UserSessionNoSqlScalarFieldEnum[]
  }

  /**
   * UserSessionNoSql create
   */
  export type UserSessionNoSqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSessionNoSql.
     */
    data: XOR<UserSessionNoSqlCreateInput, UserSessionNoSqlUncheckedCreateInput>
  }

  /**
   * UserSessionNoSql createMany
   */
  export type UserSessionNoSqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessionNoSqls.
     */
    data: UserSessionNoSqlCreateManyInput | UserSessionNoSqlCreateManyInput[]
  }

  /**
   * UserSessionNoSql update
   */
  export type UserSessionNoSqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSessionNoSql.
     */
    data: XOR<UserSessionNoSqlUpdateInput, UserSessionNoSqlUncheckedUpdateInput>
    /**
     * Choose, which UserSessionNoSql to update.
     */
    where: UserSessionNoSqlWhereUniqueInput
  }

  /**
   * UserSessionNoSql updateMany
   */
  export type UserSessionNoSqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessionNoSqls.
     */
    data: XOR<UserSessionNoSqlUpdateManyMutationInput, UserSessionNoSqlUncheckedUpdateManyInput>
    /**
     * Filter which UserSessionNoSqls to update
     */
    where?: UserSessionNoSqlWhereInput
  }

  /**
   * UserSessionNoSql upsert
   */
  export type UserSessionNoSqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSessionNoSql to update in case it exists.
     */
    where: UserSessionNoSqlWhereUniqueInput
    /**
     * In case the UserSessionNoSql found by the `where` argument doesn't exist, create a new UserSessionNoSql with this data.
     */
    create: XOR<UserSessionNoSqlCreateInput, UserSessionNoSqlUncheckedCreateInput>
    /**
     * In case the UserSessionNoSql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionNoSqlUpdateInput, UserSessionNoSqlUncheckedUpdateInput>
  }

  /**
   * UserSessionNoSql delete
   */
  export type UserSessionNoSqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
    /**
     * Filter which UserSessionNoSql to delete.
     */
    where: UserSessionNoSqlWhereUniqueInput
  }

  /**
   * UserSessionNoSql deleteMany
   */
  export type UserSessionNoSqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessionNoSqls to delete
     */
    where?: UserSessionNoSqlWhereInput
  }

  /**
   * UserSessionNoSql findRaw
   */
  export type UserSessionNoSqlFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserSessionNoSql aggregateRaw
   */
  export type UserSessionNoSqlAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserSessionNoSql without action
   */
  export type UserSessionNoSqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionNoSql
     */
    select?: UserSessionNoSqlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSessionNoSql
     */
    omit?: UserSessionNoSqlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionNoSqlInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ScopeNoSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ScopeNoSqlScalarFieldEnum = (typeof ScopeNoSqlScalarFieldEnum)[keyof typeof ScopeNoSqlScalarFieldEnum]


  export const ResourceNoSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceNoSqlScalarFieldEnum = (typeof ResourceNoSqlScalarFieldEnum)[keyof typeof ResourceNoSqlScalarFieldEnum]


  export const PermissionNoSqlScalarFieldEnum: {
    id: 'id',
    title: 'title',
    name: 'name',
    desc: 'desc',
    resource_id: 'resource_id',
    scope_id: 'scope_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionNoSqlScalarFieldEnum = (typeof PermissionNoSqlScalarFieldEnum)[keyof typeof PermissionNoSqlScalarFieldEnum]


  export const RelatedPermissionNoSqlScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    child_id: 'child_id'
  };

  export type RelatedPermissionNoSqlScalarFieldEnum = (typeof RelatedPermissionNoSqlScalarFieldEnum)[keyof typeof RelatedPermissionNoSqlScalarFieldEnum]


  export const RoleNoSqlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    uuid: 'uuid',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleNoSqlScalarFieldEnum = (typeof RoleNoSqlScalarFieldEnum)[keyof typeof RoleNoSqlScalarFieldEnum]


  export const PermissionRoleNoSqlScalarFieldEnum: {
    id: 'id',
    permission_id: 'permission_id',
    role_id: 'role_id'
  };

  export type PermissionRoleNoSqlScalarFieldEnum = (typeof PermissionRoleNoSqlScalarFieldEnum)[keyof typeof PermissionRoleNoSqlScalarFieldEnum]


  export const UserNoSqlScalarFieldEnum: {
    id: 'id',
    username: 'username',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserNoSqlScalarFieldEnum = (typeof UserNoSqlScalarFieldEnum)[keyof typeof UserNoSqlScalarFieldEnum]


  export const UserRoleNoSqlScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    role_id: 'role_id',
    uuid: 'uuid'
  };

  export type UserRoleNoSqlScalarFieldEnum = (typeof UserRoleNoSqlScalarFieldEnum)[keyof typeof UserRoleNoSqlScalarFieldEnum]


  export const UserSessionNoSqlScalarFieldEnum: {
    id: 'id',
    token: 'token',
    refresh_token: 'refresh_token',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserSessionNoSqlScalarFieldEnum = (typeof UserSessionNoSqlScalarFieldEnum)[keyof typeof UserSessionNoSqlScalarFieldEnum]


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


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ScopeNoSqlWhereInput = {
    AND?: ScopeNoSqlWhereInput | ScopeNoSqlWhereInput[]
    OR?: ScopeNoSqlWhereInput[]
    NOT?: ScopeNoSqlWhereInput | ScopeNoSqlWhereInput[]
    id?: StringFilter<"ScopeNoSql"> | string
    name?: StringFilter<"ScopeNoSql"> | string
    desc?: StringNullableFilter<"ScopeNoSql"> | string | null
    created_at?: DateTimeFilter<"ScopeNoSql"> | Date | string
    updated_at?: DateTimeFilter<"ScopeNoSql"> | Date | string
    scopes?: PermissionNoSqlListRelationFilter
  }

  export type ScopeNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    scopes?: PermissionNoSqlOrderByRelationAggregateInput
  }

  export type ScopeNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ScopeNoSqlWhereInput | ScopeNoSqlWhereInput[]
    OR?: ScopeNoSqlWhereInput[]
    NOT?: ScopeNoSqlWhereInput | ScopeNoSqlWhereInput[]
    desc?: StringNullableFilter<"ScopeNoSql"> | string | null
    created_at?: DateTimeFilter<"ScopeNoSql"> | Date | string
    updated_at?: DateTimeFilter<"ScopeNoSql"> | Date | string
    scopes?: PermissionNoSqlListRelationFilter
  }, "id" | "name">

  export type ScopeNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ScopeNoSqlCountOrderByAggregateInput
    _max?: ScopeNoSqlMaxOrderByAggregateInput
    _min?: ScopeNoSqlMinOrderByAggregateInput
  }

  export type ScopeNoSqlScalarWhereWithAggregatesInput = {
    AND?: ScopeNoSqlScalarWhereWithAggregatesInput | ScopeNoSqlScalarWhereWithAggregatesInput[]
    OR?: ScopeNoSqlScalarWhereWithAggregatesInput[]
    NOT?: ScopeNoSqlScalarWhereWithAggregatesInput | ScopeNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScopeNoSql"> | string
    name?: StringWithAggregatesFilter<"ScopeNoSql"> | string
    desc?: StringNullableWithAggregatesFilter<"ScopeNoSql"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ScopeNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ScopeNoSql"> | Date | string
  }

  export type ResourceNoSqlWhereInput = {
    AND?: ResourceNoSqlWhereInput | ResourceNoSqlWhereInput[]
    OR?: ResourceNoSqlWhereInput[]
    NOT?: ResourceNoSqlWhereInput | ResourceNoSqlWhereInput[]
    id?: StringFilter<"ResourceNoSql"> | string
    name?: StringFilter<"ResourceNoSql"> | string
    desc?: StringNullableFilter<"ResourceNoSql"> | string | null
    created_at?: DateTimeFilter<"ResourceNoSql"> | Date | string
    updated_at?: DateTimeFilter<"ResourceNoSql"> | Date | string
    permissions?: PermissionNoSqlListRelationFilter
  }

  export type ResourceNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permissions?: PermissionNoSqlOrderByRelationAggregateInput
  }

  export type ResourceNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ResourceNoSqlWhereInput | ResourceNoSqlWhereInput[]
    OR?: ResourceNoSqlWhereInput[]
    NOT?: ResourceNoSqlWhereInput | ResourceNoSqlWhereInput[]
    desc?: StringNullableFilter<"ResourceNoSql"> | string | null
    created_at?: DateTimeFilter<"ResourceNoSql"> | Date | string
    updated_at?: DateTimeFilter<"ResourceNoSql"> | Date | string
    permissions?: PermissionNoSqlListRelationFilter
  }, "id" | "name">

  export type ResourceNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceNoSqlCountOrderByAggregateInput
    _max?: ResourceNoSqlMaxOrderByAggregateInput
    _min?: ResourceNoSqlMinOrderByAggregateInput
  }

  export type ResourceNoSqlScalarWhereWithAggregatesInput = {
    AND?: ResourceNoSqlScalarWhereWithAggregatesInput | ResourceNoSqlScalarWhereWithAggregatesInput[]
    OR?: ResourceNoSqlScalarWhereWithAggregatesInput[]
    NOT?: ResourceNoSqlScalarWhereWithAggregatesInput | ResourceNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResourceNoSql"> | string
    name?: StringWithAggregatesFilter<"ResourceNoSql"> | string
    desc?: StringNullableWithAggregatesFilter<"ResourceNoSql"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ResourceNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ResourceNoSql"> | Date | string
  }

  export type PermissionNoSqlWhereInput = {
    AND?: PermissionNoSqlWhereInput | PermissionNoSqlWhereInput[]
    OR?: PermissionNoSqlWhereInput[]
    NOT?: PermissionNoSqlWhereInput | PermissionNoSqlWhereInput[]
    id?: StringFilter<"PermissionNoSql"> | string
    title?: StringNullableFilter<"PermissionNoSql"> | string | null
    name?: StringFilter<"PermissionNoSql"> | string
    desc?: StringNullableFilter<"PermissionNoSql"> | string | null
    resource_id?: StringFilter<"PermissionNoSql"> | string
    scope_id?: StringFilter<"PermissionNoSql"> | string
    created_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
    resource?: XOR<ResourceNoSqlScalarRelationFilter, ResourceNoSqlWhereInput>
    scope?: XOR<ScopeNoSqlScalarRelationFilter, ScopeNoSqlWhereInput>
    permission_roles?: PermissionRoleNoSqlListRelationFilter
    parent?: RelatedPermissionNoSqlListRelationFilter
    children?: RelatedPermissionNoSqlListRelationFilter
  }

  export type PermissionNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resource?: ResourceNoSqlOrderByWithRelationInput
    scope?: ScopeNoSqlOrderByWithRelationInput
    permission_roles?: PermissionRoleNoSqlOrderByRelationAggregateInput
    parent?: RelatedPermissionNoSqlOrderByRelationAggregateInput
    children?: RelatedPermissionNoSqlOrderByRelationAggregateInput
  }

  export type PermissionNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PermissionNoSqlWhereInput | PermissionNoSqlWhereInput[]
    OR?: PermissionNoSqlWhereInput[]
    NOT?: PermissionNoSqlWhereInput | PermissionNoSqlWhereInput[]
    title?: StringNullableFilter<"PermissionNoSql"> | string | null
    desc?: StringNullableFilter<"PermissionNoSql"> | string | null
    resource_id?: StringFilter<"PermissionNoSql"> | string
    scope_id?: StringFilter<"PermissionNoSql"> | string
    created_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
    resource?: XOR<ResourceNoSqlScalarRelationFilter, ResourceNoSqlWhereInput>
    scope?: XOR<ScopeNoSqlScalarRelationFilter, ScopeNoSqlWhereInput>
    permission_roles?: PermissionRoleNoSqlListRelationFilter
    parent?: RelatedPermissionNoSqlListRelationFilter
    children?: RelatedPermissionNoSqlListRelationFilter
  }, "id" | "name">

  export type PermissionNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PermissionNoSqlCountOrderByAggregateInput
    _max?: PermissionNoSqlMaxOrderByAggregateInput
    _min?: PermissionNoSqlMinOrderByAggregateInput
  }

  export type PermissionNoSqlScalarWhereWithAggregatesInput = {
    AND?: PermissionNoSqlScalarWhereWithAggregatesInput | PermissionNoSqlScalarWhereWithAggregatesInput[]
    OR?: PermissionNoSqlScalarWhereWithAggregatesInput[]
    NOT?: PermissionNoSqlScalarWhereWithAggregatesInput | PermissionNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PermissionNoSql"> | string
    title?: StringNullableWithAggregatesFilter<"PermissionNoSql"> | string | null
    name?: StringWithAggregatesFilter<"PermissionNoSql"> | string
    desc?: StringNullableWithAggregatesFilter<"PermissionNoSql"> | string | null
    resource_id?: StringWithAggregatesFilter<"PermissionNoSql"> | string
    scope_id?: StringWithAggregatesFilter<"PermissionNoSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"PermissionNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PermissionNoSql"> | Date | string
  }

  export type RelatedPermissionNoSqlWhereInput = {
    AND?: RelatedPermissionNoSqlWhereInput | RelatedPermissionNoSqlWhereInput[]
    OR?: RelatedPermissionNoSqlWhereInput[]
    NOT?: RelatedPermissionNoSqlWhereInput | RelatedPermissionNoSqlWhereInput[]
    id?: StringFilter<"RelatedPermissionNoSql"> | string
    parent_id?: StringFilter<"RelatedPermissionNoSql"> | string
    child_id?: StringFilter<"RelatedPermissionNoSql"> | string
    parent?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
    child?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
  }

  export type RelatedPermissionNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    child_id?: SortOrder
    parent?: PermissionNoSqlOrderByWithRelationInput
    child?: PermissionNoSqlOrderByWithRelationInput
  }

  export type RelatedPermissionNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelatedPermissionNoSqlWhereInput | RelatedPermissionNoSqlWhereInput[]
    OR?: RelatedPermissionNoSqlWhereInput[]
    NOT?: RelatedPermissionNoSqlWhereInput | RelatedPermissionNoSqlWhereInput[]
    parent_id?: StringFilter<"RelatedPermissionNoSql"> | string
    child_id?: StringFilter<"RelatedPermissionNoSql"> | string
    parent?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
    child?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
  }, "id">

  export type RelatedPermissionNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrder
    child_id?: SortOrder
    _count?: RelatedPermissionNoSqlCountOrderByAggregateInput
    _max?: RelatedPermissionNoSqlMaxOrderByAggregateInput
    _min?: RelatedPermissionNoSqlMinOrderByAggregateInput
  }

  export type RelatedPermissionNoSqlScalarWhereWithAggregatesInput = {
    AND?: RelatedPermissionNoSqlScalarWhereWithAggregatesInput | RelatedPermissionNoSqlScalarWhereWithAggregatesInput[]
    OR?: RelatedPermissionNoSqlScalarWhereWithAggregatesInput[]
    NOT?: RelatedPermissionNoSqlScalarWhereWithAggregatesInput | RelatedPermissionNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelatedPermissionNoSql"> | string
    parent_id?: StringWithAggregatesFilter<"RelatedPermissionNoSql"> | string
    child_id?: StringWithAggregatesFilter<"RelatedPermissionNoSql"> | string
  }

  export type RoleNoSqlWhereInput = {
    AND?: RoleNoSqlWhereInput | RoleNoSqlWhereInput[]
    OR?: RoleNoSqlWhereInput[]
    NOT?: RoleNoSqlWhereInput | RoleNoSqlWhereInput[]
    id?: StringFilter<"RoleNoSql"> | string
    name?: StringFilter<"RoleNoSql"> | string
    desc?: StringNullableFilter<"RoleNoSql"> | string | null
    uuid?: StringFilter<"RoleNoSql"> | string
    created_at?: DateTimeFilter<"RoleNoSql"> | Date | string
    updated_at?: DateTimeFilter<"RoleNoSql"> | Date | string
    permission_roles?: PermissionRoleNoSqlListRelationFilter
    users?: UserRoleNoSqlListRelationFilter
  }

  export type RoleNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    permission_roles?: PermissionRoleNoSqlOrderByRelationAggregateInput
    users?: UserRoleNoSqlOrderByRelationAggregateInput
  }

  export type RoleNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleNoSqlWhereInput | RoleNoSqlWhereInput[]
    OR?: RoleNoSqlWhereInput[]
    NOT?: RoleNoSqlWhereInput | RoleNoSqlWhereInput[]
    name?: StringFilter<"RoleNoSql"> | string
    desc?: StringNullableFilter<"RoleNoSql"> | string | null
    uuid?: StringFilter<"RoleNoSql"> | string
    created_at?: DateTimeFilter<"RoleNoSql"> | Date | string
    updated_at?: DateTimeFilter<"RoleNoSql"> | Date | string
    permission_roles?: PermissionRoleNoSqlListRelationFilter
    users?: UserRoleNoSqlListRelationFilter
  }, "id">

  export type RoleNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleNoSqlCountOrderByAggregateInput
    _max?: RoleNoSqlMaxOrderByAggregateInput
    _min?: RoleNoSqlMinOrderByAggregateInput
  }

  export type RoleNoSqlScalarWhereWithAggregatesInput = {
    AND?: RoleNoSqlScalarWhereWithAggregatesInput | RoleNoSqlScalarWhereWithAggregatesInput[]
    OR?: RoleNoSqlScalarWhereWithAggregatesInput[]
    NOT?: RoleNoSqlScalarWhereWithAggregatesInput | RoleNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoleNoSql"> | string
    name?: StringWithAggregatesFilter<"RoleNoSql"> | string
    desc?: StringNullableWithAggregatesFilter<"RoleNoSql"> | string | null
    uuid?: StringWithAggregatesFilter<"RoleNoSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"RoleNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RoleNoSql"> | Date | string
  }

  export type PermissionRoleNoSqlWhereInput = {
    AND?: PermissionRoleNoSqlWhereInput | PermissionRoleNoSqlWhereInput[]
    OR?: PermissionRoleNoSqlWhereInput[]
    NOT?: PermissionRoleNoSqlWhereInput | PermissionRoleNoSqlWhereInput[]
    id?: StringFilter<"PermissionRoleNoSql"> | string
    permission_id?: StringFilter<"PermissionRoleNoSql"> | string
    role_id?: StringFilter<"PermissionRoleNoSql"> | string
    permission?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
    role?: XOR<RoleNoSqlScalarRelationFilter, RoleNoSqlWhereInput>
  }

  export type PermissionRoleNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    permission_id?: SortOrder
    role_id?: SortOrder
    permission?: PermissionNoSqlOrderByWithRelationInput
    role?: RoleNoSqlOrderByWithRelationInput
  }

  export type PermissionRoleNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionRoleNoSqlWhereInput | PermissionRoleNoSqlWhereInput[]
    OR?: PermissionRoleNoSqlWhereInput[]
    NOT?: PermissionRoleNoSqlWhereInput | PermissionRoleNoSqlWhereInput[]
    permission_id?: StringFilter<"PermissionRoleNoSql"> | string
    role_id?: StringFilter<"PermissionRoleNoSql"> | string
    permission?: XOR<PermissionNoSqlScalarRelationFilter, PermissionNoSqlWhereInput>
    role?: XOR<RoleNoSqlScalarRelationFilter, RoleNoSqlWhereInput>
  }, "id">

  export type PermissionRoleNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    permission_id?: SortOrder
    role_id?: SortOrder
    _count?: PermissionRoleNoSqlCountOrderByAggregateInput
    _max?: PermissionRoleNoSqlMaxOrderByAggregateInput
    _min?: PermissionRoleNoSqlMinOrderByAggregateInput
  }

  export type PermissionRoleNoSqlScalarWhereWithAggregatesInput = {
    AND?: PermissionRoleNoSqlScalarWhereWithAggregatesInput | PermissionRoleNoSqlScalarWhereWithAggregatesInput[]
    OR?: PermissionRoleNoSqlScalarWhereWithAggregatesInput[]
    NOT?: PermissionRoleNoSqlScalarWhereWithAggregatesInput | PermissionRoleNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PermissionRoleNoSql"> | string
    permission_id?: StringWithAggregatesFilter<"PermissionRoleNoSql"> | string
    role_id?: StringWithAggregatesFilter<"PermissionRoleNoSql"> | string
  }

  export type UserNoSqlWhereInput = {
    AND?: UserNoSqlWhereInput | UserNoSqlWhereInput[]
    OR?: UserNoSqlWhereInput[]
    NOT?: UserNoSqlWhereInput | UserNoSqlWhereInput[]
    id?: StringFilter<"UserNoSql"> | string
    username?: StringFilter<"UserNoSql"> | string
    created_at?: DateTimeFilter<"UserNoSql"> | Date | string
    updated_at?: DateTimeFilter<"UserNoSql"> | Date | string
    roles?: UserRoleNoSqlListRelationFilter
    sessions?: UserSessionNoSqlListRelationFilter
  }

  export type UserNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: UserRoleNoSqlOrderByRelationAggregateInput
    sessions?: UserSessionNoSqlOrderByRelationAggregateInput
  }

  export type UserNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserNoSqlWhereInput | UserNoSqlWhereInput[]
    OR?: UserNoSqlWhereInput[]
    NOT?: UserNoSqlWhereInput | UserNoSqlWhereInput[]
    created_at?: DateTimeFilter<"UserNoSql"> | Date | string
    updated_at?: DateTimeFilter<"UserNoSql"> | Date | string
    roles?: UserRoleNoSqlListRelationFilter
    sessions?: UserSessionNoSqlListRelationFilter
  }, "id" | "username">

  export type UserNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserNoSqlCountOrderByAggregateInput
    _max?: UserNoSqlMaxOrderByAggregateInput
    _min?: UserNoSqlMinOrderByAggregateInput
  }

  export type UserNoSqlScalarWhereWithAggregatesInput = {
    AND?: UserNoSqlScalarWhereWithAggregatesInput | UserNoSqlScalarWhereWithAggregatesInput[]
    OR?: UserNoSqlScalarWhereWithAggregatesInput[]
    NOT?: UserNoSqlScalarWhereWithAggregatesInput | UserNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserNoSql"> | string
    username?: StringWithAggregatesFilter<"UserNoSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserNoSql"> | Date | string
  }

  export type UserRoleNoSqlWhereInput = {
    AND?: UserRoleNoSqlWhereInput | UserRoleNoSqlWhereInput[]
    OR?: UserRoleNoSqlWhereInput[]
    NOT?: UserRoleNoSqlWhereInput | UserRoleNoSqlWhereInput[]
    id?: StringFilter<"UserRoleNoSql"> | string
    user_id?: StringFilter<"UserRoleNoSql"> | string
    role_id?: StringFilter<"UserRoleNoSql"> | string
    uuid?: StringFilter<"UserRoleNoSql"> | string
    user?: XOR<UserNoSqlScalarRelationFilter, UserNoSqlWhereInput>
    role?: XOR<RoleNoSqlScalarRelationFilter, RoleNoSqlWhereInput>
  }

  export type UserRoleNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
    user?: UserNoSqlOrderByWithRelationInput
    role?: RoleNoSqlOrderByWithRelationInput
  }

  export type UserRoleNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleNoSqlWhereInput | UserRoleNoSqlWhereInput[]
    OR?: UserRoleNoSqlWhereInput[]
    NOT?: UserRoleNoSqlWhereInput | UserRoleNoSqlWhereInput[]
    user_id?: StringFilter<"UserRoleNoSql"> | string
    role_id?: StringFilter<"UserRoleNoSql"> | string
    uuid?: StringFilter<"UserRoleNoSql"> | string
    user?: XOR<UserNoSqlScalarRelationFilter, UserNoSqlWhereInput>
    role?: XOR<RoleNoSqlScalarRelationFilter, RoleNoSqlWhereInput>
  }, "id">

  export type UserRoleNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
    _count?: UserRoleNoSqlCountOrderByAggregateInput
    _max?: UserRoleNoSqlMaxOrderByAggregateInput
    _min?: UserRoleNoSqlMinOrderByAggregateInput
  }

  export type UserRoleNoSqlScalarWhereWithAggregatesInput = {
    AND?: UserRoleNoSqlScalarWhereWithAggregatesInput | UserRoleNoSqlScalarWhereWithAggregatesInput[]
    OR?: UserRoleNoSqlScalarWhereWithAggregatesInput[]
    NOT?: UserRoleNoSqlScalarWhereWithAggregatesInput | UserRoleNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRoleNoSql"> | string
    user_id?: StringWithAggregatesFilter<"UserRoleNoSql"> | string
    role_id?: StringWithAggregatesFilter<"UserRoleNoSql"> | string
    uuid?: StringWithAggregatesFilter<"UserRoleNoSql"> | string
  }

  export type UserSessionNoSqlWhereInput = {
    AND?: UserSessionNoSqlWhereInput | UserSessionNoSqlWhereInput[]
    OR?: UserSessionNoSqlWhereInput[]
    NOT?: UserSessionNoSqlWhereInput | UserSessionNoSqlWhereInput[]
    id?: StringFilter<"UserSessionNoSql"> | string
    token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    user_id?: StringFilter<"UserSessionNoSql"> | string
    created_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
    user?: XOR<UserNoSqlScalarRelationFilter, UserNoSqlWhereInput>
  }

  export type UserSessionNoSqlOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserNoSqlOrderByWithRelationInput
  }

  export type UserSessionNoSqlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionNoSqlWhereInput | UserSessionNoSqlWhereInput[]
    OR?: UserSessionNoSqlWhereInput[]
    NOT?: UserSessionNoSqlWhereInput | UserSessionNoSqlWhereInput[]
    token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    user_id?: StringFilter<"UserSessionNoSql"> | string
    created_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
    user?: XOR<UserNoSqlScalarRelationFilter, UserNoSqlWhereInput>
  }, "id">

  export type UserSessionNoSqlOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserSessionNoSqlCountOrderByAggregateInput
    _max?: UserSessionNoSqlMaxOrderByAggregateInput
    _min?: UserSessionNoSqlMinOrderByAggregateInput
  }

  export type UserSessionNoSqlScalarWhereWithAggregatesInput = {
    AND?: UserSessionNoSqlScalarWhereWithAggregatesInput | UserSessionNoSqlScalarWhereWithAggregatesInput[]
    OR?: UserSessionNoSqlScalarWhereWithAggregatesInput[]
    NOT?: UserSessionNoSqlScalarWhereWithAggregatesInput | UserSessionNoSqlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSessionNoSql"> | string
    token?: StringNullableWithAggregatesFilter<"UserSessionNoSql"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"UserSessionNoSql"> | string | null
    user_id?: StringWithAggregatesFilter<"UserSessionNoSql"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserSessionNoSql"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserSessionNoSql"> | Date | string
  }

  export type ScopeNoSqlCreateInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scopes?: PermissionNoSqlCreateNestedManyWithoutScopeInput
  }

  export type ScopeNoSqlUncheckedCreateInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scopes?: PermissionNoSqlUncheckedCreateNestedManyWithoutScopeInput
  }

  export type ScopeNoSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: PermissionNoSqlUpdateManyWithoutScopeNestedInput
  }

  export type ScopeNoSqlUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scopes?: PermissionNoSqlUncheckedUpdateManyWithoutScopeNestedInput
  }

  export type ScopeNoSqlCreateManyInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeNoSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeNoSqlUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceNoSqlCreateInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionNoSqlCreateNestedManyWithoutResourceInput
  }

  export type ResourceNoSqlUncheckedCreateInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    permissions?: PermissionNoSqlUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceNoSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionNoSqlUpdateManyWithoutResourceNestedInput
  }

  export type ResourceNoSqlUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: PermissionNoSqlUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceNoSqlCreateManyInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceNoSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceNoSqlUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionNoSqlCreateInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceNoSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeNoSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUncheckedCreateInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlCreateManyInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionNoSqlUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionNoSqlUncheckedUpdateManyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatedPermissionNoSqlCreateInput = {
    id?: string
    parent: PermissionNoSqlCreateNestedOneWithoutChildrenInput
    child: PermissionNoSqlCreateNestedOneWithoutParentInput
  }

  export type RelatedPermissionNoSqlUncheckedCreateInput = {
    id?: string
    parent_id: string
    child_id: string
  }

  export type RelatedPermissionNoSqlUpdateInput = {
    parent?: PermissionNoSqlUpdateOneRequiredWithoutChildrenNestedInput
    child?: PermissionNoSqlUpdateOneRequiredWithoutParentNestedInput
  }

  export type RelatedPermissionNoSqlUncheckedUpdateInput = {
    parent_id?: StringFieldUpdateOperationsInput | string
    child_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelatedPermissionNoSqlCreateManyInput = {
    id?: string
    parent_id: string
    child_id: string
  }

  export type RelatedPermissionNoSqlUpdateManyMutationInput = {

  }

  export type RelatedPermissionNoSqlUncheckedUpdateManyInput = {
    parent_id?: StringFieldUpdateOperationsInput | string
    child_id?: StringFieldUpdateOperationsInput | string
  }

  export type RoleNoSqlCreateInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutRoleInput
    users?: UserRoleNoSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlUncheckedCreateInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutRoleNestedInput
    users?: UserRoleNoSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleNoSqlUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleNoSqlCreateManyInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleNoSqlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleNoSqlUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleNoSqlCreateInput = {
    id?: string
    permission: PermissionNoSqlCreateNestedOneWithoutPermission_rolesInput
    role: RoleNoSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleNoSqlUncheckedCreateInput = {
    id?: string
    permission_id: string
    role_id: string
  }

  export type PermissionRoleNoSqlUpdateInput = {
    permission?: PermissionNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
    role?: RoleNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleNoSqlUncheckedUpdateInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionRoleNoSqlCreateManyInput = {
    id?: string
    permission_id: string
    role_id: string
  }

  export type PermissionRoleNoSqlUpdateManyMutationInput = {

  }

  export type PermissionRoleNoSqlUncheckedUpdateManyInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserNoSqlCreateInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleNoSqlCreateNestedManyWithoutUserInput
    sessions?: UserSessionNoSqlCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlUncheckedCreateInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleNoSqlUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionNoSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleNoSqlUpdateManyWithoutUserNestedInput
    sessions?: UserSessionNoSqlUpdateManyWithoutUserNestedInput
  }

  export type UserNoSqlUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleNoSqlUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionNoSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserNoSqlCreateManyInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserNoSqlUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserNoSqlUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleNoSqlCreateInput = {
    id?: string
    uuid: string
    user: UserNoSqlCreateNestedOneWithoutRolesInput
    role: RoleNoSqlCreateNestedOneWithoutUsersInput
  }

  export type UserRoleNoSqlUncheckedCreateInput = {
    id?: string
    user_id: string
    role_id: string
    uuid: string
  }

  export type UserRoleNoSqlUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserNoSqlUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleNoSqlUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleNoSqlUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlCreateManyInput = {
    id?: string
    user_id: string
    role_id: string
    uuid: string
  }

  export type UserRoleNoSqlUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionNoSqlCreateInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserNoSqlCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionNoSqlUncheckedCreateInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionNoSqlUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserNoSqlUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionNoSqlUncheckedUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionNoSqlCreateManyInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionNoSqlUpdateManyMutationInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionNoSqlUncheckedUpdateManyInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type PermissionNoSqlListRelationFilter = {
    every?: PermissionNoSqlWhereInput
    some?: PermissionNoSqlWhereInput
    none?: PermissionNoSqlWhereInput
  }

  export type PermissionNoSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScopeNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ScopeNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ScopeNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    isSet?: boolean
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

  export type ResourceNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceNoSqlScalarRelationFilter = {
    is?: ResourceNoSqlWhereInput
    isNot?: ResourceNoSqlWhereInput
  }

  export type ScopeNoSqlScalarRelationFilter = {
    is?: ScopeNoSqlWhereInput
    isNot?: ScopeNoSqlWhereInput
  }

  export type PermissionRoleNoSqlListRelationFilter = {
    every?: PermissionRoleNoSqlWhereInput
    some?: PermissionRoleNoSqlWhereInput
    none?: PermissionRoleNoSqlWhereInput
  }

  export type RelatedPermissionNoSqlListRelationFilter = {
    every?: RelatedPermissionNoSqlWhereInput
    some?: RelatedPermissionNoSqlWhereInput
    none?: RelatedPermissionNoSqlWhereInput
  }

  export type PermissionRoleNoSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatedPermissionNoSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    resource_id?: SortOrder
    scope_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionNoSqlScalarRelationFilter = {
    is?: PermissionNoSqlWhereInput
    isNot?: PermissionNoSqlWhereInput
  }

  export type RelatedPermissionNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type RelatedPermissionNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    child_id?: SortOrder
  }

  export type UserRoleNoSqlListRelationFilter = {
    every?: UserRoleNoSqlWhereInput
    some?: UserRoleNoSqlWhereInput
    none?: UserRoleNoSqlWhereInput
  }

  export type UserRoleNoSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    uuid?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleNoSqlScalarRelationFilter = {
    is?: RoleNoSqlWhereInput
    isNot?: RoleNoSqlWhereInput
  }

  export type PermissionRoleNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type PermissionRoleNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    permission_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserSessionNoSqlListRelationFilter = {
    every?: UserSessionNoSqlWhereInput
    some?: UserSessionNoSqlWhereInput
    none?: UserSessionNoSqlWhereInput
  }

  export type UserSessionNoSqlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserNoSqlScalarRelationFilter = {
    is?: UserNoSqlWhereInput
    isNot?: UserNoSqlWhereInput
  }

  export type UserRoleNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserRoleNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserRoleNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    uuid?: SortOrder
  }

  export type UserSessionNoSqlCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSessionNoSqlMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSessionNoSqlMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PermissionNoSqlCreateNestedManyWithoutScopeInput = {
    create?: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput> | PermissionNoSqlCreateWithoutScopeInput[] | PermissionNoSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutScopeInput | PermissionNoSqlCreateOrConnectWithoutScopeInput[]
    createMany?: PermissionNoSqlCreateManyScopeInputEnvelope
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
  }

  export type PermissionNoSqlUncheckedCreateNestedManyWithoutScopeInput = {
    create?: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput> | PermissionNoSqlCreateWithoutScopeInput[] | PermissionNoSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutScopeInput | PermissionNoSqlCreateOrConnectWithoutScopeInput[]
    createMany?: PermissionNoSqlCreateManyScopeInputEnvelope
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PermissionNoSqlUpdateManyWithoutScopeNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput> | PermissionNoSqlCreateWithoutScopeInput[] | PermissionNoSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutScopeInput | PermissionNoSqlCreateOrConnectWithoutScopeInput[]
    upsert?: PermissionNoSqlUpsertWithWhereUniqueWithoutScopeInput | PermissionNoSqlUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: PermissionNoSqlCreateManyScopeInputEnvelope
    set?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    disconnect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    delete?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    update?: PermissionNoSqlUpdateWithWhereUniqueWithoutScopeInput | PermissionNoSqlUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: PermissionNoSqlUpdateManyWithWhereWithoutScopeInput | PermissionNoSqlUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
  }

  export type PermissionNoSqlUncheckedUpdateManyWithoutScopeNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput> | PermissionNoSqlCreateWithoutScopeInput[] | PermissionNoSqlUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutScopeInput | PermissionNoSqlCreateOrConnectWithoutScopeInput[]
    upsert?: PermissionNoSqlUpsertWithWhereUniqueWithoutScopeInput | PermissionNoSqlUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: PermissionNoSqlCreateManyScopeInputEnvelope
    set?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    disconnect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    delete?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    update?: PermissionNoSqlUpdateWithWhereUniqueWithoutScopeInput | PermissionNoSqlUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: PermissionNoSqlUpdateManyWithWhereWithoutScopeInput | PermissionNoSqlUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
  }

  export type PermissionNoSqlCreateNestedManyWithoutResourceInput = {
    create?: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput> | PermissionNoSqlCreateWithoutResourceInput[] | PermissionNoSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutResourceInput | PermissionNoSqlCreateOrConnectWithoutResourceInput[]
    createMany?: PermissionNoSqlCreateManyResourceInputEnvelope
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
  }

  export type PermissionNoSqlUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput> | PermissionNoSqlCreateWithoutResourceInput[] | PermissionNoSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutResourceInput | PermissionNoSqlCreateOrConnectWithoutResourceInput[]
    createMany?: PermissionNoSqlCreateManyResourceInputEnvelope
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
  }

  export type PermissionNoSqlUpdateManyWithoutResourceNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput> | PermissionNoSqlCreateWithoutResourceInput[] | PermissionNoSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutResourceInput | PermissionNoSqlCreateOrConnectWithoutResourceInput[]
    upsert?: PermissionNoSqlUpsertWithWhereUniqueWithoutResourceInput | PermissionNoSqlUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: PermissionNoSqlCreateManyResourceInputEnvelope
    set?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    disconnect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    delete?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    update?: PermissionNoSqlUpdateWithWhereUniqueWithoutResourceInput | PermissionNoSqlUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: PermissionNoSqlUpdateManyWithWhereWithoutResourceInput | PermissionNoSqlUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
  }

  export type PermissionNoSqlUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput> | PermissionNoSqlCreateWithoutResourceInput[] | PermissionNoSqlUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutResourceInput | PermissionNoSqlCreateOrConnectWithoutResourceInput[]
    upsert?: PermissionNoSqlUpsertWithWhereUniqueWithoutResourceInput | PermissionNoSqlUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: PermissionNoSqlCreateManyResourceInputEnvelope
    set?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    disconnect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    delete?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    connect?: PermissionNoSqlWhereUniqueInput | PermissionNoSqlWhereUniqueInput[]
    update?: PermissionNoSqlUpdateWithWhereUniqueWithoutResourceInput | PermissionNoSqlUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: PermissionNoSqlUpdateManyWithWhereWithoutResourceInput | PermissionNoSqlUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
  }

  export type ResourceNoSqlCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<ResourceNoSqlCreateWithoutPermissionsInput, ResourceNoSqlUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ResourceNoSqlCreateOrConnectWithoutPermissionsInput
    connect?: ResourceNoSqlWhereUniqueInput
  }

  export type ScopeNoSqlCreateNestedOneWithoutScopesInput = {
    create?: XOR<ScopeNoSqlCreateWithoutScopesInput, ScopeNoSqlUncheckedCreateWithoutScopesInput>
    connectOrCreate?: ScopeNoSqlCreateOrConnectWithoutScopesInput
    connect?: ScopeNoSqlWhereUniqueInput
  }

  export type PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleNoSqlCreateWithoutPermissionInput[] | PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput | PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionRoleNoSqlCreateManyPermissionInputEnvelope
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
  }

  export type RelatedPermissionNoSqlCreateNestedManyWithoutChildInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput> | RelatedPermissionNoSqlCreateWithoutChildInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutChildInput | RelatedPermissionNoSqlCreateOrConnectWithoutChildInput[]
    createMany?: RelatedPermissionNoSqlCreateManyChildInputEnvelope
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
  }

  export type RelatedPermissionNoSqlCreateNestedManyWithoutParentInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput> | RelatedPermissionNoSqlCreateWithoutParentInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutParentInput | RelatedPermissionNoSqlCreateOrConnectWithoutParentInput[]
    createMany?: RelatedPermissionNoSqlCreateManyParentInputEnvelope
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
  }

  export type PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleNoSqlCreateWithoutPermissionInput[] | PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput | PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionRoleNoSqlCreateManyPermissionInputEnvelope
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
  }

  export type RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput> | RelatedPermissionNoSqlCreateWithoutChildInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutChildInput | RelatedPermissionNoSqlCreateOrConnectWithoutChildInput[]
    createMany?: RelatedPermissionNoSqlCreateManyChildInputEnvelope
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
  }

  export type RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput> | RelatedPermissionNoSqlCreateWithoutParentInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutParentInput | RelatedPermissionNoSqlCreateOrConnectWithoutParentInput[]
    createMany?: RelatedPermissionNoSqlCreateManyParentInputEnvelope
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
  }

  export type ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<ResourceNoSqlCreateWithoutPermissionsInput, ResourceNoSqlUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: ResourceNoSqlCreateOrConnectWithoutPermissionsInput
    upsert?: ResourceNoSqlUpsertWithoutPermissionsInput
    connect?: ResourceNoSqlWhereUniqueInput
    update?: XOR<XOR<ResourceNoSqlUpdateToOneWithWhereWithoutPermissionsInput, ResourceNoSqlUpdateWithoutPermissionsInput>, ResourceNoSqlUncheckedUpdateWithoutPermissionsInput>
  }

  export type ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput = {
    create?: XOR<ScopeNoSqlCreateWithoutScopesInput, ScopeNoSqlUncheckedCreateWithoutScopesInput>
    connectOrCreate?: ScopeNoSqlCreateOrConnectWithoutScopesInput
    upsert?: ScopeNoSqlUpsertWithoutScopesInput
    connect?: ScopeNoSqlWhereUniqueInput
    update?: XOR<XOR<ScopeNoSqlUpdateToOneWithWhereWithoutScopesInput, ScopeNoSqlUpdateWithoutScopesInput>, ScopeNoSqlUncheckedUpdateWithoutScopesInput>
  }

  export type PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleNoSqlCreateWithoutPermissionInput[] | PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput | PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionRoleNoSqlUpsertWithWhereUniqueWithoutPermissionInput | PermissionRoleNoSqlUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionRoleNoSqlCreateManyPermissionInputEnvelope
    set?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    disconnect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    delete?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    update?: PermissionRoleNoSqlUpdateWithWhereUniqueWithoutPermissionInput | PermissionRoleNoSqlUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionRoleNoSqlUpdateManyWithWhereWithoutPermissionInput | PermissionRoleNoSqlUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
  }

  export type RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput> | RelatedPermissionNoSqlCreateWithoutChildInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutChildInput | RelatedPermissionNoSqlCreateOrConnectWithoutChildInput[]
    upsert?: RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutChildInput | RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelatedPermissionNoSqlCreateManyChildInputEnvelope
    set?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    delete?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    update?: RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutChildInput | RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelatedPermissionNoSqlUpdateManyWithWhereWithoutChildInput | RelatedPermissionNoSqlUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
  }

  export type RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput> | RelatedPermissionNoSqlCreateWithoutParentInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutParentInput | RelatedPermissionNoSqlCreateOrConnectWithoutParentInput[]
    upsert?: RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutParentInput | RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelatedPermissionNoSqlCreateManyParentInputEnvelope
    set?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    delete?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    update?: RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutParentInput | RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelatedPermissionNoSqlUpdateManyWithWhereWithoutParentInput | RelatedPermissionNoSqlUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
  }

  export type PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput> | PermissionRoleNoSqlCreateWithoutPermissionInput[] | PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput | PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionRoleNoSqlUpsertWithWhereUniqueWithoutPermissionInput | PermissionRoleNoSqlUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionRoleNoSqlCreateManyPermissionInputEnvelope
    set?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    disconnect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    delete?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    update?: PermissionRoleNoSqlUpdateWithWhereUniqueWithoutPermissionInput | PermissionRoleNoSqlUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionRoleNoSqlUpdateManyWithWhereWithoutPermissionInput | PermissionRoleNoSqlUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
  }

  export type RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput> | RelatedPermissionNoSqlCreateWithoutChildInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutChildInput | RelatedPermissionNoSqlCreateOrConnectWithoutChildInput[]
    upsert?: RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutChildInput | RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelatedPermissionNoSqlCreateManyChildInputEnvelope
    set?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    delete?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    update?: RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutChildInput | RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelatedPermissionNoSqlUpdateManyWithWhereWithoutChildInput | RelatedPermissionNoSqlUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
  }

  export type RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput> | RelatedPermissionNoSqlCreateWithoutParentInput[] | RelatedPermissionNoSqlUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelatedPermissionNoSqlCreateOrConnectWithoutParentInput | RelatedPermissionNoSqlCreateOrConnectWithoutParentInput[]
    upsert?: RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutParentInput | RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelatedPermissionNoSqlCreateManyParentInputEnvelope
    set?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    disconnect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    delete?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    connect?: RelatedPermissionNoSqlWhereUniqueInput | RelatedPermissionNoSqlWhereUniqueInput[]
    update?: RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutParentInput | RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelatedPermissionNoSqlUpdateManyWithWhereWithoutParentInput | RelatedPermissionNoSqlUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
  }

  export type PermissionNoSqlCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PermissionNoSqlCreateWithoutChildrenInput, PermissionNoSqlUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutChildrenInput
    connect?: PermissionNoSqlWhereUniqueInput
  }

  export type PermissionNoSqlCreateNestedOneWithoutParentInput = {
    create?: XOR<PermissionNoSqlCreateWithoutParentInput, PermissionNoSqlUncheckedCreateWithoutParentInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutParentInput
    connect?: PermissionNoSqlWhereUniqueInput
  }

  export type PermissionNoSqlUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutChildrenInput, PermissionNoSqlUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutChildrenInput
    upsert?: PermissionNoSqlUpsertWithoutChildrenInput
    connect?: PermissionNoSqlWhereUniqueInput
    update?: XOR<XOR<PermissionNoSqlUpdateToOneWithWhereWithoutChildrenInput, PermissionNoSqlUpdateWithoutChildrenInput>, PermissionNoSqlUncheckedUpdateWithoutChildrenInput>
  }

  export type PermissionNoSqlUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutParentInput, PermissionNoSqlUncheckedCreateWithoutParentInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutParentInput
    upsert?: PermissionNoSqlUpsertWithoutParentInput
    connect?: PermissionNoSqlWhereUniqueInput
    update?: XOR<XOR<PermissionNoSqlUpdateToOneWithWhereWithoutParentInput, PermissionNoSqlUpdateWithoutParentInput>, PermissionNoSqlUncheckedUpdateWithoutParentInput>
  }

  export type PermissionRoleNoSqlCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput> | PermissionRoleNoSqlCreateWithoutRoleInput[] | PermissionRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutRoleInput | PermissionRoleNoSqlCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionRoleNoSqlCreateManyRoleInputEnvelope
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
  }

  export type UserRoleNoSqlCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput> | UserRoleNoSqlCreateWithoutRoleInput[] | UserRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutRoleInput | UserRoleNoSqlCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleNoSqlCreateManyRoleInputEnvelope
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
  }

  export type PermissionRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput> | PermissionRoleNoSqlCreateWithoutRoleInput[] | PermissionRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutRoleInput | PermissionRoleNoSqlCreateOrConnectWithoutRoleInput[]
    createMany?: PermissionRoleNoSqlCreateManyRoleInputEnvelope
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
  }

  export type UserRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput> | UserRoleNoSqlCreateWithoutRoleInput[] | UserRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutRoleInput | UserRoleNoSqlCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleNoSqlCreateManyRoleInputEnvelope
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
  }

  export type PermissionRoleNoSqlUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput> | PermissionRoleNoSqlCreateWithoutRoleInput[] | PermissionRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutRoleInput | PermissionRoleNoSqlCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput | PermissionRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionRoleNoSqlCreateManyRoleInputEnvelope
    set?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    disconnect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    delete?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    update?: PermissionRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput | PermissionRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionRoleNoSqlUpdateManyWithWhereWithoutRoleInput | PermissionRoleNoSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
  }

  export type UserRoleNoSqlUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput> | UserRoleNoSqlCreateWithoutRoleInput[] | UserRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutRoleInput | UserRoleNoSqlCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput | UserRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleNoSqlCreateManyRoleInputEnvelope
    set?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    disconnect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    delete?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    update?: UserRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput | UserRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleNoSqlUpdateManyWithWhereWithoutRoleInput | UserRoleNoSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
  }

  export type PermissionRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput> | PermissionRoleNoSqlCreateWithoutRoleInput[] | PermissionRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PermissionRoleNoSqlCreateOrConnectWithoutRoleInput | PermissionRoleNoSqlCreateOrConnectWithoutRoleInput[]
    upsert?: PermissionRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput | PermissionRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PermissionRoleNoSqlCreateManyRoleInputEnvelope
    set?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    disconnect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    delete?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    connect?: PermissionRoleNoSqlWhereUniqueInput | PermissionRoleNoSqlWhereUniqueInput[]
    update?: PermissionRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput | PermissionRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PermissionRoleNoSqlUpdateManyWithWhereWithoutRoleInput | PermissionRoleNoSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
  }

  export type UserRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput> | UserRoleNoSqlCreateWithoutRoleInput[] | UserRoleNoSqlUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutRoleInput | UserRoleNoSqlCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput | UserRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleNoSqlCreateManyRoleInputEnvelope
    set?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    disconnect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    delete?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    update?: UserRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput | UserRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleNoSqlUpdateManyWithWhereWithoutRoleInput | UserRoleNoSqlUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
  }

  export type PermissionNoSqlCreateNestedOneWithoutPermission_rolesInput = {
    create?: XOR<PermissionNoSqlCreateWithoutPermission_rolesInput, PermissionNoSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutPermission_rolesInput
    connect?: PermissionNoSqlWhereUniqueInput
  }

  export type RoleNoSqlCreateNestedOneWithoutPermission_rolesInput = {
    create?: XOR<RoleNoSqlCreateWithoutPermission_rolesInput, RoleNoSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: RoleNoSqlCreateOrConnectWithoutPermission_rolesInput
    connect?: RoleNoSqlWhereUniqueInput
  }

  export type PermissionNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput = {
    create?: XOR<PermissionNoSqlCreateWithoutPermission_rolesInput, PermissionNoSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: PermissionNoSqlCreateOrConnectWithoutPermission_rolesInput
    upsert?: PermissionNoSqlUpsertWithoutPermission_rolesInput
    connect?: PermissionNoSqlWhereUniqueInput
    update?: XOR<XOR<PermissionNoSqlUpdateToOneWithWhereWithoutPermission_rolesInput, PermissionNoSqlUpdateWithoutPermission_rolesInput>, PermissionNoSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type RoleNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput = {
    create?: XOR<RoleNoSqlCreateWithoutPermission_rolesInput, RoleNoSqlUncheckedCreateWithoutPermission_rolesInput>
    connectOrCreate?: RoleNoSqlCreateOrConnectWithoutPermission_rolesInput
    upsert?: RoleNoSqlUpsertWithoutPermission_rolesInput
    connect?: RoleNoSqlWhereUniqueInput
    update?: XOR<XOR<RoleNoSqlUpdateToOneWithWhereWithoutPermission_rolesInput, RoleNoSqlUpdateWithoutPermission_rolesInput>, RoleNoSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type UserRoleNoSqlCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput> | UserRoleNoSqlCreateWithoutUserInput[] | UserRoleNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutUserInput | UserRoleNoSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleNoSqlCreateManyUserInputEnvelope
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
  }

  export type UserSessionNoSqlCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput> | UserSessionNoSqlCreateWithoutUserInput[] | UserSessionNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionNoSqlCreateOrConnectWithoutUserInput | UserSessionNoSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionNoSqlCreateManyUserInputEnvelope
    connect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
  }

  export type UserRoleNoSqlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput> | UserRoleNoSqlCreateWithoutUserInput[] | UserRoleNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutUserInput | UserRoleNoSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleNoSqlCreateManyUserInputEnvelope
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
  }

  export type UserSessionNoSqlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput> | UserSessionNoSqlCreateWithoutUserInput[] | UserSessionNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionNoSqlCreateOrConnectWithoutUserInput | UserSessionNoSqlCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionNoSqlCreateManyUserInputEnvelope
    connect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
  }

  export type UserRoleNoSqlUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput> | UserRoleNoSqlCreateWithoutUserInput[] | UserRoleNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutUserInput | UserRoleNoSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleNoSqlUpsertWithWhereUniqueWithoutUserInput | UserRoleNoSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleNoSqlCreateManyUserInputEnvelope
    set?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    disconnect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    delete?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    update?: UserRoleNoSqlUpdateWithWhereUniqueWithoutUserInput | UserRoleNoSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleNoSqlUpdateManyWithWhereWithoutUserInput | UserRoleNoSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
  }

  export type UserSessionNoSqlUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput> | UserSessionNoSqlCreateWithoutUserInput[] | UserSessionNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionNoSqlCreateOrConnectWithoutUserInput | UserSessionNoSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionNoSqlUpsertWithWhereUniqueWithoutUserInput | UserSessionNoSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionNoSqlCreateManyUserInputEnvelope
    set?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    disconnect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    delete?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    connect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    update?: UserSessionNoSqlUpdateWithWhereUniqueWithoutUserInput | UserSessionNoSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionNoSqlUpdateManyWithWhereWithoutUserInput | UserSessionNoSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionNoSqlScalarWhereInput | UserSessionNoSqlScalarWhereInput[]
  }

  export type UserRoleNoSqlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput> | UserRoleNoSqlCreateWithoutUserInput[] | UserRoleNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleNoSqlCreateOrConnectWithoutUserInput | UserRoleNoSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleNoSqlUpsertWithWhereUniqueWithoutUserInput | UserRoleNoSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleNoSqlCreateManyUserInputEnvelope
    set?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    disconnect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    delete?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    connect?: UserRoleNoSqlWhereUniqueInput | UserRoleNoSqlWhereUniqueInput[]
    update?: UserRoleNoSqlUpdateWithWhereUniqueWithoutUserInput | UserRoleNoSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleNoSqlUpdateManyWithWhereWithoutUserInput | UserRoleNoSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
  }

  export type UserSessionNoSqlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput> | UserSessionNoSqlCreateWithoutUserInput[] | UserSessionNoSqlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionNoSqlCreateOrConnectWithoutUserInput | UserSessionNoSqlCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionNoSqlUpsertWithWhereUniqueWithoutUserInput | UserSessionNoSqlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionNoSqlCreateManyUserInputEnvelope
    set?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    disconnect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    delete?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    connect?: UserSessionNoSqlWhereUniqueInput | UserSessionNoSqlWhereUniqueInput[]
    update?: UserSessionNoSqlUpdateWithWhereUniqueWithoutUserInput | UserSessionNoSqlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionNoSqlUpdateManyWithWhereWithoutUserInput | UserSessionNoSqlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionNoSqlScalarWhereInput | UserSessionNoSqlScalarWhereInput[]
  }

  export type UserNoSqlCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserNoSqlCreateWithoutRolesInput, UserNoSqlUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserNoSqlCreateOrConnectWithoutRolesInput
    connect?: UserNoSqlWhereUniqueInput
  }

  export type RoleNoSqlCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleNoSqlCreateWithoutUsersInput, RoleNoSqlUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleNoSqlCreateOrConnectWithoutUsersInput
    connect?: RoleNoSqlWhereUniqueInput
  }

  export type UserNoSqlUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserNoSqlCreateWithoutRolesInput, UserNoSqlUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserNoSqlCreateOrConnectWithoutRolesInput
    upsert?: UserNoSqlUpsertWithoutRolesInput
    connect?: UserNoSqlWhereUniqueInput
    update?: XOR<XOR<UserNoSqlUpdateToOneWithWhereWithoutRolesInput, UserNoSqlUpdateWithoutRolesInput>, UserNoSqlUncheckedUpdateWithoutRolesInput>
  }

  export type RoleNoSqlUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleNoSqlCreateWithoutUsersInput, RoleNoSqlUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleNoSqlCreateOrConnectWithoutUsersInput
    upsert?: RoleNoSqlUpsertWithoutUsersInput
    connect?: RoleNoSqlWhereUniqueInput
    update?: XOR<XOR<RoleNoSqlUpdateToOneWithWhereWithoutUsersInput, RoleNoSqlUpdateWithoutUsersInput>, RoleNoSqlUncheckedUpdateWithoutUsersInput>
  }

  export type UserNoSqlCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserNoSqlCreateWithoutSessionsInput, UserNoSqlUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserNoSqlCreateOrConnectWithoutSessionsInput
    connect?: UserNoSqlWhereUniqueInput
  }

  export type UserNoSqlUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserNoSqlCreateWithoutSessionsInput, UserNoSqlUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserNoSqlCreateOrConnectWithoutSessionsInput
    upsert?: UserNoSqlUpsertWithoutSessionsInput
    connect?: UserNoSqlWhereUniqueInput
    update?: XOR<XOR<UserNoSqlUpdateToOneWithWhereWithoutSessionsInput, UserNoSqlUpdateWithoutSessionsInput>, UserNoSqlUncheckedUpdateWithoutSessionsInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type PermissionNoSqlCreateWithoutScopeInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceNoSqlCreateNestedOneWithoutPermissionsInput
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUncheckedCreateWithoutScopeInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlCreateOrConnectWithoutScopeInput = {
    where: PermissionNoSqlWhereUniqueInput
    create: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput>
  }

  export type PermissionNoSqlCreateManyScopeInputEnvelope = {
    data: PermissionNoSqlCreateManyScopeInput | PermissionNoSqlCreateManyScopeInput[]
  }

  export type PermissionNoSqlUpsertWithWhereUniqueWithoutScopeInput = {
    where: PermissionNoSqlWhereUniqueInput
    update: XOR<PermissionNoSqlUpdateWithoutScopeInput, PermissionNoSqlUncheckedUpdateWithoutScopeInput>
    create: XOR<PermissionNoSqlCreateWithoutScopeInput, PermissionNoSqlUncheckedCreateWithoutScopeInput>
  }

  export type PermissionNoSqlUpdateWithWhereUniqueWithoutScopeInput = {
    where: PermissionNoSqlWhereUniqueInput
    data: XOR<PermissionNoSqlUpdateWithoutScopeInput, PermissionNoSqlUncheckedUpdateWithoutScopeInput>
  }

  export type PermissionNoSqlUpdateManyWithWhereWithoutScopeInput = {
    where: PermissionNoSqlScalarWhereInput
    data: XOR<PermissionNoSqlUpdateManyMutationInput, PermissionNoSqlUncheckedUpdateManyWithoutScopeInput>
  }

  export type PermissionNoSqlScalarWhereInput = {
    AND?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
    OR?: PermissionNoSqlScalarWhereInput[]
    NOT?: PermissionNoSqlScalarWhereInput | PermissionNoSqlScalarWhereInput[]
    id?: StringFilter<"PermissionNoSql"> | string
    title?: StringNullableFilter<"PermissionNoSql"> | string | null
    name?: StringFilter<"PermissionNoSql"> | string
    desc?: StringNullableFilter<"PermissionNoSql"> | string | null
    resource_id?: StringFilter<"PermissionNoSql"> | string
    scope_id?: StringFilter<"PermissionNoSql"> | string
    created_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"PermissionNoSql"> | Date | string
  }

  export type PermissionNoSqlCreateWithoutResourceInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    scope: ScopeNoSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUncheckedCreateWithoutResourceInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlCreateOrConnectWithoutResourceInput = {
    where: PermissionNoSqlWhereUniqueInput
    create: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput>
  }

  export type PermissionNoSqlCreateManyResourceInputEnvelope = {
    data: PermissionNoSqlCreateManyResourceInput | PermissionNoSqlCreateManyResourceInput[]
  }

  export type PermissionNoSqlUpsertWithWhereUniqueWithoutResourceInput = {
    where: PermissionNoSqlWhereUniqueInput
    update: XOR<PermissionNoSqlUpdateWithoutResourceInput, PermissionNoSqlUncheckedUpdateWithoutResourceInput>
    create: XOR<PermissionNoSqlCreateWithoutResourceInput, PermissionNoSqlUncheckedCreateWithoutResourceInput>
  }

  export type PermissionNoSqlUpdateWithWhereUniqueWithoutResourceInput = {
    where: PermissionNoSqlWhereUniqueInput
    data: XOR<PermissionNoSqlUpdateWithoutResourceInput, PermissionNoSqlUncheckedUpdateWithoutResourceInput>
  }

  export type PermissionNoSqlUpdateManyWithWhereWithoutResourceInput = {
    where: PermissionNoSqlScalarWhereInput
    data: XOR<PermissionNoSqlUpdateManyMutationInput, PermissionNoSqlUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceNoSqlCreateWithoutPermissionsInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceNoSqlUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceNoSqlCreateOrConnectWithoutPermissionsInput = {
    where: ResourceNoSqlWhereUniqueInput
    create: XOR<ResourceNoSqlCreateWithoutPermissionsInput, ResourceNoSqlUncheckedCreateWithoutPermissionsInput>
  }

  export type ScopeNoSqlCreateWithoutScopesInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeNoSqlUncheckedCreateWithoutScopesInput = {
    id?: string
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ScopeNoSqlCreateOrConnectWithoutScopesInput = {
    where: ScopeNoSqlWhereUniqueInput
    create: XOR<ScopeNoSqlCreateWithoutScopesInput, ScopeNoSqlUncheckedCreateWithoutScopesInput>
  }

  export type PermissionRoleNoSqlCreateWithoutPermissionInput = {
    id?: string
    role: RoleNoSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput = {
    id?: string
    role_id: string
  }

  export type PermissionRoleNoSqlCreateOrConnectWithoutPermissionInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    create: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionRoleNoSqlCreateManyPermissionInputEnvelope = {
    data: PermissionRoleNoSqlCreateManyPermissionInput | PermissionRoleNoSqlCreateManyPermissionInput[]
  }

  export type RelatedPermissionNoSqlCreateWithoutChildInput = {
    id?: string
    parent: PermissionNoSqlCreateNestedOneWithoutChildrenInput
  }

  export type RelatedPermissionNoSqlUncheckedCreateWithoutChildInput = {
    id?: string
    parent_id: string
  }

  export type RelatedPermissionNoSqlCreateOrConnectWithoutChildInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    create: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput>
  }

  export type RelatedPermissionNoSqlCreateManyChildInputEnvelope = {
    data: RelatedPermissionNoSqlCreateManyChildInput | RelatedPermissionNoSqlCreateManyChildInput[]
  }

  export type RelatedPermissionNoSqlCreateWithoutParentInput = {
    id?: string
    child: PermissionNoSqlCreateNestedOneWithoutParentInput
  }

  export type RelatedPermissionNoSqlUncheckedCreateWithoutParentInput = {
    id?: string
    child_id: string
  }

  export type RelatedPermissionNoSqlCreateOrConnectWithoutParentInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    create: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput>
  }

  export type RelatedPermissionNoSqlCreateManyParentInputEnvelope = {
    data: RelatedPermissionNoSqlCreateManyParentInput | RelatedPermissionNoSqlCreateManyParentInput[]
  }

  export type ResourceNoSqlUpsertWithoutPermissionsInput = {
    update: XOR<ResourceNoSqlUpdateWithoutPermissionsInput, ResourceNoSqlUncheckedUpdateWithoutPermissionsInput>
    create: XOR<ResourceNoSqlCreateWithoutPermissionsInput, ResourceNoSqlUncheckedCreateWithoutPermissionsInput>
    where?: ResourceNoSqlWhereInput
  }

  export type ResourceNoSqlUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: ResourceNoSqlWhereInput
    data: XOR<ResourceNoSqlUpdateWithoutPermissionsInput, ResourceNoSqlUncheckedUpdateWithoutPermissionsInput>
  }

  export type ResourceNoSqlUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceNoSqlUncheckedUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeNoSqlUpsertWithoutScopesInput = {
    update: XOR<ScopeNoSqlUpdateWithoutScopesInput, ScopeNoSqlUncheckedUpdateWithoutScopesInput>
    create: XOR<ScopeNoSqlCreateWithoutScopesInput, ScopeNoSqlUncheckedCreateWithoutScopesInput>
    where?: ScopeNoSqlWhereInput
  }

  export type ScopeNoSqlUpdateToOneWithWhereWithoutScopesInput = {
    where?: ScopeNoSqlWhereInput
    data: XOR<ScopeNoSqlUpdateWithoutScopesInput, ScopeNoSqlUncheckedUpdateWithoutScopesInput>
  }

  export type ScopeNoSqlUpdateWithoutScopesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScopeNoSqlUncheckedUpdateWithoutScopesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleNoSqlUpsertWithWhereUniqueWithoutPermissionInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    update: XOR<PermissionRoleNoSqlUpdateWithoutPermissionInput, PermissionRoleNoSqlUncheckedUpdateWithoutPermissionInput>
    create: XOR<PermissionRoleNoSqlCreateWithoutPermissionInput, PermissionRoleNoSqlUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionRoleNoSqlUpdateWithWhereUniqueWithoutPermissionInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    data: XOR<PermissionRoleNoSqlUpdateWithoutPermissionInput, PermissionRoleNoSqlUncheckedUpdateWithoutPermissionInput>
  }

  export type PermissionRoleNoSqlUpdateManyWithWhereWithoutPermissionInput = {
    where: PermissionRoleNoSqlScalarWhereInput
    data: XOR<PermissionRoleNoSqlUpdateManyMutationInput, PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionRoleNoSqlScalarWhereInput = {
    AND?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
    OR?: PermissionRoleNoSqlScalarWhereInput[]
    NOT?: PermissionRoleNoSqlScalarWhereInput | PermissionRoleNoSqlScalarWhereInput[]
    id?: StringFilter<"PermissionRoleNoSql"> | string
    permission_id?: StringFilter<"PermissionRoleNoSql"> | string
    role_id?: StringFilter<"PermissionRoleNoSql"> | string
  }

  export type RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutChildInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    update: XOR<RelatedPermissionNoSqlUpdateWithoutChildInput, RelatedPermissionNoSqlUncheckedUpdateWithoutChildInput>
    create: XOR<RelatedPermissionNoSqlCreateWithoutChildInput, RelatedPermissionNoSqlUncheckedCreateWithoutChildInput>
  }

  export type RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutChildInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    data: XOR<RelatedPermissionNoSqlUpdateWithoutChildInput, RelatedPermissionNoSqlUncheckedUpdateWithoutChildInput>
  }

  export type RelatedPermissionNoSqlUpdateManyWithWhereWithoutChildInput = {
    where: RelatedPermissionNoSqlScalarWhereInput
    data: XOR<RelatedPermissionNoSqlUpdateManyMutationInput, RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildInput>
  }

  export type RelatedPermissionNoSqlScalarWhereInput = {
    AND?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
    OR?: RelatedPermissionNoSqlScalarWhereInput[]
    NOT?: RelatedPermissionNoSqlScalarWhereInput | RelatedPermissionNoSqlScalarWhereInput[]
    id?: StringFilter<"RelatedPermissionNoSql"> | string
    parent_id?: StringFilter<"RelatedPermissionNoSql"> | string
    child_id?: StringFilter<"RelatedPermissionNoSql"> | string
  }

  export type RelatedPermissionNoSqlUpsertWithWhereUniqueWithoutParentInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    update: XOR<RelatedPermissionNoSqlUpdateWithoutParentInput, RelatedPermissionNoSqlUncheckedUpdateWithoutParentInput>
    create: XOR<RelatedPermissionNoSqlCreateWithoutParentInput, RelatedPermissionNoSqlUncheckedCreateWithoutParentInput>
  }

  export type RelatedPermissionNoSqlUpdateWithWhereUniqueWithoutParentInput = {
    where: RelatedPermissionNoSqlWhereUniqueInput
    data: XOR<RelatedPermissionNoSqlUpdateWithoutParentInput, RelatedPermissionNoSqlUncheckedUpdateWithoutParentInput>
  }

  export type RelatedPermissionNoSqlUpdateManyWithWhereWithoutParentInput = {
    where: RelatedPermissionNoSqlScalarWhereInput
    data: XOR<RelatedPermissionNoSqlUpdateManyMutationInput, RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentInput>
  }

  export type PermissionNoSqlCreateWithoutChildrenInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceNoSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeNoSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlCreateNestedManyWithoutChildInput
  }

  export type PermissionNoSqlUncheckedCreateWithoutChildrenInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput
    parent?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput
  }

  export type PermissionNoSqlCreateOrConnectWithoutChildrenInput = {
    where: PermissionNoSqlWhereUniqueInput
    create: XOR<PermissionNoSqlCreateWithoutChildrenInput, PermissionNoSqlUncheckedCreateWithoutChildrenInput>
  }

  export type PermissionNoSqlCreateWithoutParentInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceNoSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeNoSqlCreateNestedOneWithoutScopesInput
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutPermissionInput
    children?: RelatedPermissionNoSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUncheckedCreateWithoutParentInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutPermissionInput
    children?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlCreateOrConnectWithoutParentInput = {
    where: PermissionNoSqlWhereUniqueInput
    create: XOR<PermissionNoSqlCreateWithoutParentInput, PermissionNoSqlUncheckedCreateWithoutParentInput>
  }

  export type PermissionNoSqlUpsertWithoutChildrenInput = {
    update: XOR<PermissionNoSqlUpdateWithoutChildrenInput, PermissionNoSqlUncheckedUpdateWithoutChildrenInput>
    create: XOR<PermissionNoSqlCreateWithoutChildrenInput, PermissionNoSqlUncheckedCreateWithoutChildrenInput>
    where?: PermissionNoSqlWhereInput
  }

  export type PermissionNoSqlUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PermissionNoSqlWhereInput
    data: XOR<PermissionNoSqlUpdateWithoutChildrenInput, PermissionNoSqlUncheckedUpdateWithoutChildrenInput>
  }

  export type PermissionNoSqlUpdateWithoutChildrenInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateWithoutChildrenInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput
  }

  export type PermissionNoSqlUpsertWithoutParentInput = {
    update: XOR<PermissionNoSqlUpdateWithoutParentInput, PermissionNoSqlUncheckedUpdateWithoutParentInput>
    create: XOR<PermissionNoSqlCreateWithoutParentInput, PermissionNoSqlUncheckedCreateWithoutParentInput>
    where?: PermissionNoSqlWhereInput
  }

  export type PermissionNoSqlUpdateToOneWithWhereWithoutParentInput = {
    where?: PermissionNoSqlWhereInput
    data: XOR<PermissionNoSqlUpdateWithoutParentInput, PermissionNoSqlUncheckedUpdateWithoutParentInput>
  }

  export type PermissionNoSqlUpdateWithoutParentInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput
    children?: RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateWithoutParentInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput
    children?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionRoleNoSqlCreateWithoutRoleInput = {
    id?: string
    permission: PermissionNoSqlCreateNestedOneWithoutPermission_rolesInput
  }

  export type PermissionRoleNoSqlUncheckedCreateWithoutRoleInput = {
    id?: string
    permission_id: string
  }

  export type PermissionRoleNoSqlCreateOrConnectWithoutRoleInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    create: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput>
  }

  export type PermissionRoleNoSqlCreateManyRoleInputEnvelope = {
    data: PermissionRoleNoSqlCreateManyRoleInput | PermissionRoleNoSqlCreateManyRoleInput[]
  }

  export type UserRoleNoSqlCreateWithoutRoleInput = {
    id?: string
    uuid: string
    user: UserNoSqlCreateNestedOneWithoutRolesInput
  }

  export type UserRoleNoSqlUncheckedCreateWithoutRoleInput = {
    id?: string
    user_id: string
    uuid: string
  }

  export type UserRoleNoSqlCreateOrConnectWithoutRoleInput = {
    where: UserRoleNoSqlWhereUniqueInput
    create: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleNoSqlCreateManyRoleInputEnvelope = {
    data: UserRoleNoSqlCreateManyRoleInput | UserRoleNoSqlCreateManyRoleInput[]
  }

  export type PermissionRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    update: XOR<PermissionRoleNoSqlUpdateWithoutRoleInput, PermissionRoleNoSqlUncheckedUpdateWithoutRoleInput>
    create: XOR<PermissionRoleNoSqlCreateWithoutRoleInput, PermissionRoleNoSqlUncheckedCreateWithoutRoleInput>
  }

  export type PermissionRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput = {
    where: PermissionRoleNoSqlWhereUniqueInput
    data: XOR<PermissionRoleNoSqlUpdateWithoutRoleInput, PermissionRoleNoSqlUncheckedUpdateWithoutRoleInput>
  }

  export type PermissionRoleNoSqlUpdateManyWithWhereWithoutRoleInput = {
    where: PermissionRoleNoSqlScalarWhereInput
    data: XOR<PermissionRoleNoSqlUpdateManyMutationInput, PermissionRoleNoSqlUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleNoSqlUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleNoSqlWhereUniqueInput
    update: XOR<UserRoleNoSqlUpdateWithoutRoleInput, UserRoleNoSqlUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleNoSqlCreateWithoutRoleInput, UserRoleNoSqlUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleNoSqlUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleNoSqlWhereUniqueInput
    data: XOR<UserRoleNoSqlUpdateWithoutRoleInput, UserRoleNoSqlUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleNoSqlUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleNoSqlScalarWhereInput
    data: XOR<UserRoleNoSqlUpdateManyMutationInput, UserRoleNoSqlUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleNoSqlScalarWhereInput = {
    AND?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
    OR?: UserRoleNoSqlScalarWhereInput[]
    NOT?: UserRoleNoSqlScalarWhereInput | UserRoleNoSqlScalarWhereInput[]
    id?: StringFilter<"UserRoleNoSql"> | string
    user_id?: StringFilter<"UserRoleNoSql"> | string
    role_id?: StringFilter<"UserRoleNoSql"> | string
    uuid?: StringFilter<"UserRoleNoSql"> | string
  }

  export type PermissionNoSqlCreateWithoutPermission_rolesInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceNoSqlCreateNestedOneWithoutPermissionsInput
    scope: ScopeNoSqlCreateNestedOneWithoutScopesInput
    parent?: RelatedPermissionNoSqlCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlUncheckedCreateWithoutPermission_rolesInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
    parent?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutChildInput
    children?: RelatedPermissionNoSqlUncheckedCreateNestedManyWithoutParentInput
  }

  export type PermissionNoSqlCreateOrConnectWithoutPermission_rolesInput = {
    where: PermissionNoSqlWhereUniqueInput
    create: XOR<PermissionNoSqlCreateWithoutPermission_rolesInput, PermissionNoSqlUncheckedCreateWithoutPermission_rolesInput>
  }

  export type RoleNoSqlCreateWithoutPermission_rolesInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserRoleNoSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlUncheckedCreateWithoutPermission_rolesInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlCreateOrConnectWithoutPermission_rolesInput = {
    where: RoleNoSqlWhereUniqueInput
    create: XOR<RoleNoSqlCreateWithoutPermission_rolesInput, RoleNoSqlUncheckedCreateWithoutPermission_rolesInput>
  }

  export type PermissionNoSqlUpsertWithoutPermission_rolesInput = {
    update: XOR<PermissionNoSqlUpdateWithoutPermission_rolesInput, PermissionNoSqlUncheckedUpdateWithoutPermission_rolesInput>
    create: XOR<PermissionNoSqlCreateWithoutPermission_rolesInput, PermissionNoSqlUncheckedCreateWithoutPermission_rolesInput>
    where?: PermissionNoSqlWhereInput
  }

  export type PermissionNoSqlUpdateToOneWithWhereWithoutPermission_rolesInput = {
    where?: PermissionNoSqlWhereInput
    data: XOR<PermissionNoSqlUpdateWithoutPermission_rolesInput, PermissionNoSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type PermissionNoSqlUpdateWithoutPermission_rolesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput
    scope?: ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput
    parent?: RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateWithoutPermission_rolesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoleNoSqlUpsertWithoutPermission_rolesInput = {
    update: XOR<RoleNoSqlUpdateWithoutPermission_rolesInput, RoleNoSqlUncheckedUpdateWithoutPermission_rolesInput>
    create: XOR<RoleNoSqlCreateWithoutPermission_rolesInput, RoleNoSqlUncheckedCreateWithoutPermission_rolesInput>
    where?: RoleNoSqlWhereInput
  }

  export type RoleNoSqlUpdateToOneWithWhereWithoutPermission_rolesInput = {
    where?: RoleNoSqlWhereInput
    data: XOR<RoleNoSqlUpdateWithoutPermission_rolesInput, RoleNoSqlUncheckedUpdateWithoutPermission_rolesInput>
  }

  export type RoleNoSqlUpdateWithoutPermission_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleNoSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleNoSqlUncheckedUpdateWithoutPermission_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleNoSqlCreateWithoutUserInput = {
    id?: string
    uuid: string
    role: RoleNoSqlCreateNestedOneWithoutUsersInput
  }

  export type UserRoleNoSqlUncheckedCreateWithoutUserInput = {
    id?: string
    role_id: string
    uuid: string
  }

  export type UserRoleNoSqlCreateOrConnectWithoutUserInput = {
    where: UserRoleNoSqlWhereUniqueInput
    create: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput>
  }

  export type UserRoleNoSqlCreateManyUserInputEnvelope = {
    data: UserRoleNoSqlCreateManyUserInput | UserRoleNoSqlCreateManyUserInput[]
  }

  export type UserSessionNoSqlCreateWithoutUserInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionNoSqlUncheckedCreateWithoutUserInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserSessionNoSqlCreateOrConnectWithoutUserInput = {
    where: UserSessionNoSqlWhereUniqueInput
    create: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput>
  }

  export type UserSessionNoSqlCreateManyUserInputEnvelope = {
    data: UserSessionNoSqlCreateManyUserInput | UserSessionNoSqlCreateManyUserInput[]
  }

  export type UserRoleNoSqlUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleNoSqlWhereUniqueInput
    update: XOR<UserRoleNoSqlUpdateWithoutUserInput, UserRoleNoSqlUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleNoSqlCreateWithoutUserInput, UserRoleNoSqlUncheckedCreateWithoutUserInput>
  }

  export type UserRoleNoSqlUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleNoSqlWhereUniqueInput
    data: XOR<UserRoleNoSqlUpdateWithoutUserInput, UserRoleNoSqlUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleNoSqlUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleNoSqlScalarWhereInput
    data: XOR<UserRoleNoSqlUpdateManyMutationInput, UserRoleNoSqlUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionNoSqlUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionNoSqlWhereUniqueInput
    update: XOR<UserSessionNoSqlUpdateWithoutUserInput, UserSessionNoSqlUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionNoSqlCreateWithoutUserInput, UserSessionNoSqlUncheckedCreateWithoutUserInput>
  }

  export type UserSessionNoSqlUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionNoSqlWhereUniqueInput
    data: XOR<UserSessionNoSqlUpdateWithoutUserInput, UserSessionNoSqlUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionNoSqlUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionNoSqlScalarWhereInput
    data: XOR<UserSessionNoSqlUpdateManyMutationInput, UserSessionNoSqlUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionNoSqlScalarWhereInput = {
    AND?: UserSessionNoSqlScalarWhereInput | UserSessionNoSqlScalarWhereInput[]
    OR?: UserSessionNoSqlScalarWhereInput[]
    NOT?: UserSessionNoSqlScalarWhereInput | UserSessionNoSqlScalarWhereInput[]
    id?: StringFilter<"UserSessionNoSql"> | string
    token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    refresh_token?: StringNullableFilter<"UserSessionNoSql"> | string | null
    user_id?: StringFilter<"UserSessionNoSql"> | string
    created_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
    updated_at?: DateTimeFilter<"UserSessionNoSql"> | Date | string
  }

  export type UserNoSqlCreateWithoutRolesInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: UserSessionNoSqlCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlUncheckedCreateWithoutRolesInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: UserSessionNoSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlCreateOrConnectWithoutRolesInput = {
    where: UserNoSqlWhereUniqueInput
    create: XOR<UserNoSqlCreateWithoutRolesInput, UserNoSqlUncheckedCreateWithoutRolesInput>
  }

  export type RoleNoSqlCreateWithoutUsersInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    desc?: string | null
    uuid: string
    created_at?: Date | string
    updated_at?: Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleNoSqlCreateOrConnectWithoutUsersInput = {
    where: RoleNoSqlWhereUniqueInput
    create: XOR<RoleNoSqlCreateWithoutUsersInput, RoleNoSqlUncheckedCreateWithoutUsersInput>
  }

  export type UserNoSqlUpsertWithoutRolesInput = {
    update: XOR<UserNoSqlUpdateWithoutRolesInput, UserNoSqlUncheckedUpdateWithoutRolesInput>
    create: XOR<UserNoSqlCreateWithoutRolesInput, UserNoSqlUncheckedCreateWithoutRolesInput>
    where?: UserNoSqlWhereInput
  }

  export type UserNoSqlUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserNoSqlWhereInput
    data: XOR<UserNoSqlUpdateWithoutRolesInput, UserNoSqlUncheckedUpdateWithoutRolesInput>
  }

  export type UserNoSqlUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionNoSqlUpdateManyWithoutUserNestedInput
  }

  export type UserNoSqlUncheckedUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionNoSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleNoSqlUpsertWithoutUsersInput = {
    update: XOR<RoleNoSqlUpdateWithoutUsersInput, RoleNoSqlUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleNoSqlCreateWithoutUsersInput, RoleNoSqlUncheckedCreateWithoutUsersInput>
    where?: RoleNoSqlWhereInput
  }

  export type RoleNoSqlUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleNoSqlWhereInput
    data: XOR<RoleNoSqlUpdateWithoutUsersInput, RoleNoSqlUncheckedUpdateWithoutUsersInput>
  }

  export type RoleNoSqlUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutRoleNestedInput
  }

  export type RoleNoSqlUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserNoSqlCreateWithoutSessionsInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleNoSqlCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    created_at?: Date | string
    updated_at?: Date | string
    roles?: UserRoleNoSqlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserNoSqlCreateOrConnectWithoutSessionsInput = {
    where: UserNoSqlWhereUniqueInput
    create: XOR<UserNoSqlCreateWithoutSessionsInput, UserNoSqlUncheckedCreateWithoutSessionsInput>
  }

  export type UserNoSqlUpsertWithoutSessionsInput = {
    update: XOR<UserNoSqlUpdateWithoutSessionsInput, UserNoSqlUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserNoSqlCreateWithoutSessionsInput, UserNoSqlUncheckedCreateWithoutSessionsInput>
    where?: UserNoSqlWhereInput
  }

  export type UserNoSqlUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserNoSqlWhereInput
    data: XOR<UserNoSqlUpdateWithoutSessionsInput, UserNoSqlUncheckedUpdateWithoutSessionsInput>
  }

  export type UserNoSqlUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleNoSqlUpdateManyWithoutUserNestedInput
  }

  export type UserNoSqlUncheckedUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleNoSqlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PermissionNoSqlCreateManyScopeInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    resource_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionNoSqlUpdateWithoutScopeInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceNoSqlUpdateOneRequiredWithoutPermissionsNestedInput
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateWithoutScopeInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateManyWithoutScopeInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionNoSqlCreateManyResourceInput = {
    id?: string
    title?: string | null
    name: string
    desc?: string | null
    scope_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PermissionNoSqlUpdateWithoutResourceInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: ScopeNoSqlUpdateOneRequiredWithoutScopesNestedInput
    permission_roles?: PermissionRoleNoSqlUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateWithoutResourceInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission_roles?: PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionNestedInput
    parent?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildNestedInput
    children?: RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PermissionNoSqlUncheckedUpdateManyWithoutResourceInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    scope_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionRoleNoSqlCreateManyPermissionInput = {
    id?: string
    role_id: string
  }

  export type RelatedPermissionNoSqlCreateManyChildInput = {
    id?: string
    parent_id: string
  }

  export type RelatedPermissionNoSqlCreateManyParentInput = {
    id?: string
    child_id: string
  }

  export type PermissionRoleNoSqlUpdateWithoutPermissionInput = {
    role?: RoleNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleNoSqlUncheckedUpdateWithoutPermissionInput = {
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionRoleNoSqlUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelatedPermissionNoSqlUpdateWithoutChildInput = {
    parent?: PermissionNoSqlUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type RelatedPermissionNoSqlUncheckedUpdateWithoutChildInput = {
    parent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelatedPermissionNoSqlUncheckedUpdateManyWithoutChildInput = {
    parent_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelatedPermissionNoSqlUpdateWithoutParentInput = {
    child?: PermissionNoSqlUpdateOneRequiredWithoutParentNestedInput
  }

  export type RelatedPermissionNoSqlUncheckedUpdateWithoutParentInput = {
    child_id?: StringFieldUpdateOperationsInput | string
  }

  export type RelatedPermissionNoSqlUncheckedUpdateManyWithoutParentInput = {
    child_id?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionRoleNoSqlCreateManyRoleInput = {
    id?: string
    permission_id: string
  }

  export type UserRoleNoSqlCreateManyRoleInput = {
    id?: string
    user_id: string
    uuid: string
  }

  export type PermissionRoleNoSqlUpdateWithoutRoleInput = {
    permission?: PermissionNoSqlUpdateOneRequiredWithoutPermission_rolesNestedInput
  }

  export type PermissionRoleNoSqlUncheckedUpdateWithoutRoleInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionRoleNoSqlUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlUpdateWithoutRoleInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    user?: UserNoSqlUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleNoSqlUncheckedUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlUncheckedUpdateManyWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlCreateManyUserInput = {
    id?: string
    role_id: string
    uuid: string
  }

  export type UserSessionNoSqlCreateManyUserInput = {
    id?: string
    token?: string | null
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserRoleNoSqlUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: RoleNoSqlUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleNoSqlUncheckedUpdateWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleNoSqlUncheckedUpdateManyWithoutUserInput = {
    role_id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionNoSqlUpdateWithoutUserInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionNoSqlUncheckedUpdateWithoutUserInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionNoSqlUncheckedUpdateManyWithoutUserInput = {
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