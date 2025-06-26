
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model LeaveType
 * 
 */
export type LeaveType = $Result.DefaultSelection<Prisma.$LeaveTypePayload>
/**
 * Model LeaveApplication
 * 
 */
export type LeaveApplication = $Result.DefaultSelection<Prisma.$LeaveApplicationPayload>
/**
 * Model LeaveBalance
 * 
 */
export type LeaveBalance = $Result.DefaultSelection<Prisma.$LeaveBalancePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveType`: Exposes CRUD operations for the **LeaveType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveTypes
    * const leaveTypes = await prisma.leaveType.findMany()
    * ```
    */
  get leaveType(): Prisma.LeaveTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveApplication`: Exposes CRUD operations for the **LeaveApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveApplications
    * const leaveApplications = await prisma.leaveApplication.findMany()
    * ```
    */
  get leaveApplication(): Prisma.LeaveApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveBalance`: Exposes CRUD operations for the **LeaveBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveBalances
    * const leaveBalances = await prisma.leaveBalance.findMany()
    * ```
    */
  get leaveBalance(): Prisma.LeaveBalanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Employee: 'Employee',
    LeaveType: 'LeaveType',
    LeaveApplication: 'LeaveApplication',
    LeaveBalance: 'LeaveBalance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "leaveType" | "leaveApplication" | "leaveBalance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      LeaveType: {
        payload: Prisma.$LeaveTypePayload<ExtArgs>
        fields: Prisma.LeaveTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          findFirst: {
            args: Prisma.LeaveTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          findMany: {
            args: Prisma.LeaveTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>[]
          }
          create: {
            args: Prisma.LeaveTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          createMany: {
            args: Prisma.LeaveTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>[]
          }
          delete: {
            args: Prisma.LeaveTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          update: {
            args: Prisma.LeaveTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          deleteMany: {
            args: Prisma.LeaveTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>[]
          }
          upsert: {
            args: Prisma.LeaveTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveTypePayload>
          }
          aggregate: {
            args: Prisma.LeaveTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveType>
          }
          groupBy: {
            args: Prisma.LeaveTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveTypeCountAggregateOutputType> | number
          }
        }
      }
      LeaveApplication: {
        payload: Prisma.$LeaveApplicationPayload<ExtArgs>
        fields: Prisma.LeaveApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          findFirst: {
            args: Prisma.LeaveApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          findMany: {
            args: Prisma.LeaveApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          create: {
            args: Prisma.LeaveApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          createMany: {
            args: Prisma.LeaveApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          delete: {
            args: Prisma.LeaveApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          update: {
            args: Prisma.LeaveApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          deleteMany: {
            args: Prisma.LeaveApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>[]
          }
          upsert: {
            args: Prisma.LeaveApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveApplicationPayload>
          }
          aggregate: {
            args: Prisma.LeaveApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveApplication>
          }
          groupBy: {
            args: Prisma.LeaveApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveApplicationCountAggregateOutputType> | number
          }
        }
      }
      LeaveBalance: {
        payload: Prisma.$LeaveBalancePayload<ExtArgs>
        fields: Prisma.LeaveBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findFirst: {
            args: Prisma.LeaveBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          findMany: {
            args: Prisma.LeaveBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          create: {
            args: Prisma.LeaveBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          createMany: {
            args: Prisma.LeaveBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          delete: {
            args: Prisma.LeaveBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          update: {
            args: Prisma.LeaveBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          deleteMany: {
            args: Prisma.LeaveBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[]
          }
          upsert: {
            args: Prisma.LeaveBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveBalancePayload>
          }
          aggregate: {
            args: Prisma.LeaveBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveBalance>
          }
          groupBy: {
            args: Prisma.LeaveBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveBalanceCountAggregateOutputType> | number
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
    user?: UserOmit
    employee?: EmployeeOmit
    leaveType?: LeaveTypeOmit
    leaveApplication?: LeaveApplicationOmit
    leaveBalance?: LeaveBalanceOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    leaves: number
    leaveBalances: number
    approvedLeaves: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | EmployeeCountOutputTypeCountLeavesArgs
    leaveBalances?: boolean | EmployeeCountOutputTypeCountLeaveBalancesArgs
    approvedLeaves?: boolean | EmployeeCountOutputTypeCountApprovedLeavesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeaveBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountApprovedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
  }


  /**
   * Count Type LeaveTypeCountOutputType
   */

  export type LeaveTypeCountOutputType = {
    applications: number
    balances: number
  }

  export type LeaveTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | LeaveTypeCountOutputTypeCountApplicationsArgs
    balances?: boolean | LeaveTypeCountOutputTypeCountBalancesArgs
  }

  // Custom InputTypes
  /**
   * LeaveTypeCountOutputType without action
   */
  export type LeaveTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveTypeCountOutputType
     */
    select?: LeaveTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaveTypeCountOutputType without action
   */
  export type LeaveTypeCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
  }

  /**
   * LeaveTypeCountOutputType without action
   */
  export type LeaveTypeCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    role: string | null
    dateJoined: Date | null
    status: string | null
    userId: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    role: string | null
    dateJoined: Date | null
    status: string | null
    userId: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    role: number
    dateJoined: number
    status: number
    userId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    role?: true
    dateJoined?: true
    status?: true
    userId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    role?: true
    dateJoined?: true
    status?: true
    userId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    role?: true
    dateJoined?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date
    status: string
    userId: number | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    dateJoined?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
    leaves?: boolean | Employee$leavesArgs<ExtArgs>
    leaveBalances?: boolean | Employee$leaveBalancesArgs<ExtArgs>
    approvedLeaves?: boolean | Employee$approvedLeavesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    dateJoined?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    dateJoined?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | Employee$userArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    role?: boolean
    dateJoined?: boolean
    status?: boolean
    userId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "role" | "dateJoined" | "status" | "userId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
    leaves?: boolean | Employee$leavesArgs<ExtArgs>
    leaveBalances?: boolean | Employee$leaveBalancesArgs<ExtArgs>
    approvedLeaves?: boolean | Employee$approvedLeavesArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Employee$userArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      leaves: Prisma.$LeaveApplicationPayload<ExtArgs>[]
      leaveBalances: Prisma.$LeaveBalancePayload<ExtArgs>[]
      approvedLeaves: Prisma.$LeaveApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      role: string
      dateJoined: Date
      status: string
      userId: number | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Employee$userArgs<ExtArgs> = {}>(args?: Subset<T, Employee$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leaves<T extends Employee$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaveBalances<T extends Employee$leaveBalancesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leaveBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedLeaves<T extends Employee$approvedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$approvedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'String'>
    readonly dateJoined: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.user
   */
  export type Employee$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Employee.leaves
   */
  export type Employee$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    cursor?: LeaveApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * Employee.leaveBalances
   */
  export type Employee$leaveBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    cursor?: LeaveBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * Employee.approvedLeaves
   */
  export type Employee$approvedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    cursor?: LeaveApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model LeaveType
   */

  export type AggregateLeaveType = {
    _count: LeaveTypeCountAggregateOutputType | null
    _avg: LeaveTypeAvgAggregateOutputType | null
    _sum: LeaveTypeSumAggregateOutputType | null
    _min: LeaveTypeMinAggregateOutputType | null
    _max: LeaveTypeMaxAggregateOutputType | null
  }

  export type LeaveTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type LeaveTypeSumAggregateOutputType = {
    id: number | null
  }

  export type LeaveTypeMinAggregateOutputType = {
    id: number | null
    typeName: string | null
    description: string | null
  }

  export type LeaveTypeMaxAggregateOutputType = {
    id: number | null
    typeName: string | null
    description: string | null
  }

  export type LeaveTypeCountAggregateOutputType = {
    id: number
    typeName: number
    description: number
    _all: number
  }


  export type LeaveTypeAvgAggregateInputType = {
    id?: true
  }

  export type LeaveTypeSumAggregateInputType = {
    id?: true
  }

  export type LeaveTypeMinAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
  }

  export type LeaveTypeMaxAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
  }

  export type LeaveTypeCountAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
    _all?: true
  }

  export type LeaveTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveType to aggregate.
     */
    where?: LeaveTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveTypes to fetch.
     */
    orderBy?: LeaveTypeOrderByWithRelationInput | LeaveTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveTypes
    **/
    _count?: true | LeaveTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveTypeMaxAggregateInputType
  }

  export type GetLeaveTypeAggregateType<T extends LeaveTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveType[P]>
      : GetScalarType<T[P], AggregateLeaveType[P]>
  }




  export type LeaveTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveTypeWhereInput
    orderBy?: LeaveTypeOrderByWithAggregationInput | LeaveTypeOrderByWithAggregationInput[]
    by: LeaveTypeScalarFieldEnum[] | LeaveTypeScalarFieldEnum
    having?: LeaveTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveTypeCountAggregateInputType | true
    _avg?: LeaveTypeAvgAggregateInputType
    _sum?: LeaveTypeSumAggregateInputType
    _min?: LeaveTypeMinAggregateInputType
    _max?: LeaveTypeMaxAggregateInputType
  }

  export type LeaveTypeGroupByOutputType = {
    id: number
    typeName: string
    description: string | null
    _count: LeaveTypeCountAggregateOutputType | null
    _avg: LeaveTypeAvgAggregateOutputType | null
    _sum: LeaveTypeSumAggregateOutputType | null
    _min: LeaveTypeMinAggregateOutputType | null
    _max: LeaveTypeMaxAggregateOutputType | null
  }

  type GetLeaveTypeGroupByPayload<T extends LeaveTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveTypeGroupByOutputType[P]>
        }
      >
    >


  export type LeaveTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
    applications?: boolean | LeaveType$applicationsArgs<ExtArgs>
    balances?: boolean | LeaveType$balancesArgs<ExtArgs>
    _count?: boolean | LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveType"]>

  export type LeaveTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
  }, ExtArgs["result"]["leaveType"]>

  export type LeaveTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
  }, ExtArgs["result"]["leaveType"]>

  export type LeaveTypeSelectScalar = {
    id?: boolean
    typeName?: boolean
    description?: boolean
  }

  export type LeaveTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "typeName" | "description", ExtArgs["result"]["leaveType"]>
  export type LeaveTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | LeaveType$applicationsArgs<ExtArgs>
    balances?: boolean | LeaveType$balancesArgs<ExtArgs>
    _count?: boolean | LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaveTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LeaveTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LeaveTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveType"
    objects: {
      applications: Prisma.$LeaveApplicationPayload<ExtArgs>[]
      balances: Prisma.$LeaveBalancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeName: string
      description: string | null
    }, ExtArgs["result"]["leaveType"]>
    composites: {}
  }

  type LeaveTypeGetPayload<S extends boolean | null | undefined | LeaveTypeDefaultArgs> = $Result.GetResult<Prisma.$LeaveTypePayload, S>

  type LeaveTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveTypeCountAggregateInputType | true
    }

  export interface LeaveTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveType'], meta: { name: 'LeaveType' } }
    /**
     * Find zero or one LeaveType that matches the filter.
     * @param {LeaveTypeFindUniqueArgs} args - Arguments to find a LeaveType
     * @example
     * // Get one LeaveType
     * const leaveType = await prisma.leaveType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveTypeFindUniqueArgs>(args: SelectSubset<T, LeaveTypeFindUniqueArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveTypeFindUniqueOrThrowArgs} args - Arguments to find a LeaveType
     * @example
     * // Get one LeaveType
     * const leaveType = await prisma.leaveType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeFindFirstArgs} args - Arguments to find a LeaveType
     * @example
     * // Get one LeaveType
     * const leaveType = await prisma.leaveType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveTypeFindFirstArgs>(args?: SelectSubset<T, LeaveTypeFindFirstArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeFindFirstOrThrowArgs} args - Arguments to find a LeaveType
     * @example
     * // Get one LeaveType
     * const leaveType = await prisma.leaveType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveTypes
     * const leaveTypes = await prisma.leaveType.findMany()
     * 
     * // Get first 10 LeaveTypes
     * const leaveTypes = await prisma.leaveType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveTypeWithIdOnly = await prisma.leaveType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveTypeFindManyArgs>(args?: SelectSubset<T, LeaveTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveType.
     * @param {LeaveTypeCreateArgs} args - Arguments to create a LeaveType.
     * @example
     * // Create one LeaveType
     * const LeaveType = await prisma.leaveType.create({
     *   data: {
     *     // ... data to create a LeaveType
     *   }
     * })
     * 
     */
    create<T extends LeaveTypeCreateArgs>(args: SelectSubset<T, LeaveTypeCreateArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveTypes.
     * @param {LeaveTypeCreateManyArgs} args - Arguments to create many LeaveTypes.
     * @example
     * // Create many LeaveTypes
     * const leaveType = await prisma.leaveType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveTypeCreateManyArgs>(args?: SelectSubset<T, LeaveTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveTypes and returns the data saved in the database.
     * @param {LeaveTypeCreateManyAndReturnArgs} args - Arguments to create many LeaveTypes.
     * @example
     * // Create many LeaveTypes
     * const leaveType = await prisma.leaveType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveTypes and only return the `id`
     * const leaveTypeWithIdOnly = await prisma.leaveType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveType.
     * @param {LeaveTypeDeleteArgs} args - Arguments to delete one LeaveType.
     * @example
     * // Delete one LeaveType
     * const LeaveType = await prisma.leaveType.delete({
     *   where: {
     *     // ... filter to delete one LeaveType
     *   }
     * })
     * 
     */
    delete<T extends LeaveTypeDeleteArgs>(args: SelectSubset<T, LeaveTypeDeleteArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveType.
     * @param {LeaveTypeUpdateArgs} args - Arguments to update one LeaveType.
     * @example
     * // Update one LeaveType
     * const leaveType = await prisma.leaveType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveTypeUpdateArgs>(args: SelectSubset<T, LeaveTypeUpdateArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveTypes.
     * @param {LeaveTypeDeleteManyArgs} args - Arguments to filter LeaveTypes to delete.
     * @example
     * // Delete a few LeaveTypes
     * const { count } = await prisma.leaveType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveTypeDeleteManyArgs>(args?: SelectSubset<T, LeaveTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveTypes
     * const leaveType = await prisma.leaveType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveTypeUpdateManyArgs>(args: SelectSubset<T, LeaveTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveTypes and returns the data updated in the database.
     * @param {LeaveTypeUpdateManyAndReturnArgs} args - Arguments to update many LeaveTypes.
     * @example
     * // Update many LeaveTypes
     * const leaveType = await prisma.leaveType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveTypes and only return the `id`
     * const leaveTypeWithIdOnly = await prisma.leaveType.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveType.
     * @param {LeaveTypeUpsertArgs} args - Arguments to update or create a LeaveType.
     * @example
     * // Update or create a LeaveType
     * const leaveType = await prisma.leaveType.upsert({
     *   create: {
     *     // ... data to create a LeaveType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveType we want to update
     *   }
     * })
     */
    upsert<T extends LeaveTypeUpsertArgs>(args: SelectSubset<T, LeaveTypeUpsertArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeCountArgs} args - Arguments to filter LeaveTypes to count.
     * @example
     * // Count the number of LeaveTypes
     * const count = await prisma.leaveType.count({
     *   where: {
     *     // ... the filter for the LeaveTypes we want to count
     *   }
     * })
    **/
    count<T extends LeaveTypeCountArgs>(
      args?: Subset<T, LeaveTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveTypeAggregateArgs>(args: Subset<T, LeaveTypeAggregateArgs>): Prisma.PrismaPromise<GetLeaveTypeAggregateType<T>>

    /**
     * Group by LeaveType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveTypeGroupByArgs} args - Group by arguments.
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
      T extends LeaveTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveTypeGroupByArgs['orderBy'] }
        : { orderBy?: LeaveTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveType model
   */
  readonly fields: LeaveTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends LeaveType$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, LeaveType$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends LeaveType$balancesArgs<ExtArgs> = {}>(args?: Subset<T, LeaveType$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LeaveType model
   */
  interface LeaveTypeFieldRefs {
    readonly id: FieldRef<"LeaveType", 'Int'>
    readonly typeName: FieldRef<"LeaveType", 'String'>
    readonly description: FieldRef<"LeaveType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaveType findUnique
   */
  export type LeaveTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter, which LeaveType to fetch.
     */
    where: LeaveTypeWhereUniqueInput
  }

  /**
   * LeaveType findUniqueOrThrow
   */
  export type LeaveTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter, which LeaveType to fetch.
     */
    where: LeaveTypeWhereUniqueInput
  }

  /**
   * LeaveType findFirst
   */
  export type LeaveTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter, which LeaveType to fetch.
     */
    where?: LeaveTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveTypes to fetch.
     */
    orderBy?: LeaveTypeOrderByWithRelationInput | LeaveTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveTypes.
     */
    cursor?: LeaveTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveTypes.
     */
    distinct?: LeaveTypeScalarFieldEnum | LeaveTypeScalarFieldEnum[]
  }

  /**
   * LeaveType findFirstOrThrow
   */
  export type LeaveTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter, which LeaveType to fetch.
     */
    where?: LeaveTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveTypes to fetch.
     */
    orderBy?: LeaveTypeOrderByWithRelationInput | LeaveTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveTypes.
     */
    cursor?: LeaveTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveTypes.
     */
    distinct?: LeaveTypeScalarFieldEnum | LeaveTypeScalarFieldEnum[]
  }

  /**
   * LeaveType findMany
   */
  export type LeaveTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter, which LeaveTypes to fetch.
     */
    where?: LeaveTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveTypes to fetch.
     */
    orderBy?: LeaveTypeOrderByWithRelationInput | LeaveTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveTypes.
     */
    cursor?: LeaveTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveTypes.
     */
    skip?: number
    distinct?: LeaveTypeScalarFieldEnum | LeaveTypeScalarFieldEnum[]
  }

  /**
   * LeaveType create
   */
  export type LeaveTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveType.
     */
    data: XOR<LeaveTypeCreateInput, LeaveTypeUncheckedCreateInput>
  }

  /**
   * LeaveType createMany
   */
  export type LeaveTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveTypes.
     */
    data: LeaveTypeCreateManyInput | LeaveTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveType createManyAndReturn
   */
  export type LeaveTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveTypes.
     */
    data: LeaveTypeCreateManyInput | LeaveTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveType update
   */
  export type LeaveTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveType.
     */
    data: XOR<LeaveTypeUpdateInput, LeaveTypeUncheckedUpdateInput>
    /**
     * Choose, which LeaveType to update.
     */
    where: LeaveTypeWhereUniqueInput
  }

  /**
   * LeaveType updateMany
   */
  export type LeaveTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveTypes.
     */
    data: XOR<LeaveTypeUpdateManyMutationInput, LeaveTypeUncheckedUpdateManyInput>
    /**
     * Filter which LeaveTypes to update
     */
    where?: LeaveTypeWhereInput
    /**
     * Limit how many LeaveTypes to update.
     */
    limit?: number
  }

  /**
   * LeaveType updateManyAndReturn
   */
  export type LeaveTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * The data used to update LeaveTypes.
     */
    data: XOR<LeaveTypeUpdateManyMutationInput, LeaveTypeUncheckedUpdateManyInput>
    /**
     * Filter which LeaveTypes to update
     */
    where?: LeaveTypeWhereInput
    /**
     * Limit how many LeaveTypes to update.
     */
    limit?: number
  }

  /**
   * LeaveType upsert
   */
  export type LeaveTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveType to update in case it exists.
     */
    where: LeaveTypeWhereUniqueInput
    /**
     * In case the LeaveType found by the `where` argument doesn't exist, create a new LeaveType with this data.
     */
    create: XOR<LeaveTypeCreateInput, LeaveTypeUncheckedCreateInput>
    /**
     * In case the LeaveType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveTypeUpdateInput, LeaveTypeUncheckedUpdateInput>
  }

  /**
   * LeaveType delete
   */
  export type LeaveTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
    /**
     * Filter which LeaveType to delete.
     */
    where: LeaveTypeWhereUniqueInput
  }

  /**
   * LeaveType deleteMany
   */
  export type LeaveTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveTypes to delete
     */
    where?: LeaveTypeWhereInput
    /**
     * Limit how many LeaveTypes to delete.
     */
    limit?: number
  }

  /**
   * LeaveType.applications
   */
  export type LeaveType$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    cursor?: LeaveApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveType.balances
   */
  export type LeaveType$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    cursor?: LeaveBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveType without action
   */
  export type LeaveTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveType
     */
    select?: LeaveTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveType
     */
    omit?: LeaveTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveTypeInclude<ExtArgs> | null
  }


  /**
   * Model LeaveApplication
   */

  export type AggregateLeaveApplication = {
    _count: LeaveApplicationCountAggregateOutputType | null
    _avg: LeaveApplicationAvgAggregateOutputType | null
    _sum: LeaveApplicationSumAggregateOutputType | null
    _min: LeaveApplicationMinAggregateOutputType | null
    _max: LeaveApplicationMaxAggregateOutputType | null
  }

  export type LeaveApplicationAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    approvedById: number | null
  }

  export type LeaveApplicationSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    approvedById: number | null
  }

  export type LeaveApplicationMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: string | null
    appliedDate: Date | null
    approvedById: number | null
  }

  export type LeaveApplicationMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: string | null
    appliedDate: Date | null
    approvedById: number | null
  }

  export type LeaveApplicationCountAggregateOutputType = {
    id: number
    employeeId: number
    leaveTypeId: number
    startDate: number
    endDate: number
    reason: number
    status: number
    appliedDate: number
    approvedById: number
    _all: number
  }


  export type LeaveApplicationAvgAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    approvedById?: true
  }

  export type LeaveApplicationSumAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    approvedById?: true
  }

  export type LeaveApplicationMinAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    appliedDate?: true
    approvedById?: true
  }

  export type LeaveApplicationMaxAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    appliedDate?: true
    approvedById?: true
  }

  export type LeaveApplicationCountAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    appliedDate?: true
    approvedById?: true
    _all?: true
  }

  export type LeaveApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveApplication to aggregate.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveApplications
    **/
    _count?: true | LeaveApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveApplicationMaxAggregateInputType
  }

  export type GetLeaveApplicationAggregateType<T extends LeaveApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveApplication[P]>
      : GetScalarType<T[P], AggregateLeaveApplication[P]>
  }




  export type LeaveApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveApplicationWhereInput
    orderBy?: LeaveApplicationOrderByWithAggregationInput | LeaveApplicationOrderByWithAggregationInput[]
    by: LeaveApplicationScalarFieldEnum[] | LeaveApplicationScalarFieldEnum
    having?: LeaveApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveApplicationCountAggregateInputType | true
    _avg?: LeaveApplicationAvgAggregateInputType
    _sum?: LeaveApplicationSumAggregateInputType
    _min?: LeaveApplicationMinAggregateInputType
    _max?: LeaveApplicationMaxAggregateInputType
  }

  export type LeaveApplicationGroupByOutputType = {
    id: number
    employeeId: number
    leaveTypeId: number
    startDate: Date
    endDate: Date
    reason: string | null
    status: string
    appliedDate: Date | null
    approvedById: number | null
    _count: LeaveApplicationCountAggregateOutputType | null
    _avg: LeaveApplicationAvgAggregateOutputType | null
    _sum: LeaveApplicationSumAggregateOutputType | null
    _min: LeaveApplicationMinAggregateOutputType | null
    _max: LeaveApplicationMaxAggregateOutputType | null
  }

  type GetLeaveApplicationGroupByPayload<T extends LeaveApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveApplicationGroupByOutputType[P]>
        }
      >
    >


  export type LeaveApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    appliedDate?: boolean
    approvedById?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    appliedDate?: boolean
    approvedById?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    appliedDate?: boolean
    approvedById?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveApplication"]>

  export type LeaveApplicationSelectScalar = {
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    appliedDate?: boolean
    approvedById?: boolean
  }

  export type LeaveApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "leaveTypeId" | "startDate" | "endDate" | "reason" | "status" | "appliedDate" | "approvedById", ExtArgs["result"]["leaveApplication"]>
  export type LeaveApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }
  export type LeaveApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }
  export type LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveApplication$approvedByArgs<ExtArgs>
  }

  export type $LeaveApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveApplication"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      leaveType: Prisma.$LeaveTypePayload<ExtArgs>
      approvedBy: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      leaveTypeId: number
      startDate: Date
      endDate: Date
      reason: string | null
      status: string
      appliedDate: Date | null
      approvedById: number | null
    }, ExtArgs["result"]["leaveApplication"]>
    composites: {}
  }

  type LeaveApplicationGetPayload<S extends boolean | null | undefined | LeaveApplicationDefaultArgs> = $Result.GetResult<Prisma.$LeaveApplicationPayload, S>

  type LeaveApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveApplicationCountAggregateInputType | true
    }

  export interface LeaveApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveApplication'], meta: { name: 'LeaveApplication' } }
    /**
     * Find zero or one LeaveApplication that matches the filter.
     * @param {LeaveApplicationFindUniqueArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveApplicationFindUniqueArgs>(args: SelectSubset<T, LeaveApplicationFindUniqueArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveApplicationFindUniqueOrThrowArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindFirstArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveApplicationFindFirstArgs>(args?: SelectSubset<T, LeaveApplicationFindFirstArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindFirstOrThrowArgs} args - Arguments to find a LeaveApplication
     * @example
     * // Get one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveApplications
     * const leaveApplications = await prisma.leaveApplication.findMany()
     * 
     * // Get first 10 LeaveApplications
     * const leaveApplications = await prisma.leaveApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveApplicationFindManyArgs>(args?: SelectSubset<T, LeaveApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveApplication.
     * @param {LeaveApplicationCreateArgs} args - Arguments to create a LeaveApplication.
     * @example
     * // Create one LeaveApplication
     * const LeaveApplication = await prisma.leaveApplication.create({
     *   data: {
     *     // ... data to create a LeaveApplication
     *   }
     * })
     * 
     */
    create<T extends LeaveApplicationCreateArgs>(args: SelectSubset<T, LeaveApplicationCreateArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveApplications.
     * @param {LeaveApplicationCreateManyArgs} args - Arguments to create many LeaveApplications.
     * @example
     * // Create many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveApplicationCreateManyArgs>(args?: SelectSubset<T, LeaveApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveApplications and returns the data saved in the database.
     * @param {LeaveApplicationCreateManyAndReturnArgs} args - Arguments to create many LeaveApplications.
     * @example
     * // Create many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveApplications and only return the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveApplication.
     * @param {LeaveApplicationDeleteArgs} args - Arguments to delete one LeaveApplication.
     * @example
     * // Delete one LeaveApplication
     * const LeaveApplication = await prisma.leaveApplication.delete({
     *   where: {
     *     // ... filter to delete one LeaveApplication
     *   }
     * })
     * 
     */
    delete<T extends LeaveApplicationDeleteArgs>(args: SelectSubset<T, LeaveApplicationDeleteArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveApplication.
     * @param {LeaveApplicationUpdateArgs} args - Arguments to update one LeaveApplication.
     * @example
     * // Update one LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveApplicationUpdateArgs>(args: SelectSubset<T, LeaveApplicationUpdateArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveApplications.
     * @param {LeaveApplicationDeleteManyArgs} args - Arguments to filter LeaveApplications to delete.
     * @example
     * // Delete a few LeaveApplications
     * const { count } = await prisma.leaveApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveApplicationDeleteManyArgs>(args?: SelectSubset<T, LeaveApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveApplicationUpdateManyArgs>(args: SelectSubset<T, LeaveApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveApplications and returns the data updated in the database.
     * @param {LeaveApplicationUpdateManyAndReturnArgs} args - Arguments to update many LeaveApplications.
     * @example
     * // Update many LeaveApplications
     * const leaveApplication = await prisma.leaveApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveApplications and only return the `id`
     * const leaveApplicationWithIdOnly = await prisma.leaveApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveApplication.
     * @param {LeaveApplicationUpsertArgs} args - Arguments to update or create a LeaveApplication.
     * @example
     * // Update or create a LeaveApplication
     * const leaveApplication = await prisma.leaveApplication.upsert({
     *   create: {
     *     // ... data to create a LeaveApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveApplication we want to update
     *   }
     * })
     */
    upsert<T extends LeaveApplicationUpsertArgs>(args: SelectSubset<T, LeaveApplicationUpsertArgs<ExtArgs>>): Prisma__LeaveApplicationClient<$Result.GetResult<Prisma.$LeaveApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationCountArgs} args - Arguments to filter LeaveApplications to count.
     * @example
     * // Count the number of LeaveApplications
     * const count = await prisma.leaveApplication.count({
     *   where: {
     *     // ... the filter for the LeaveApplications we want to count
     *   }
     * })
    **/
    count<T extends LeaveApplicationCountArgs>(
      args?: Subset<T, LeaveApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveApplicationAggregateArgs>(args: Subset<T, LeaveApplicationAggregateArgs>): Prisma.PrismaPromise<GetLeaveApplicationAggregateType<T>>

    /**
     * Group by LeaveApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveApplicationGroupByArgs} args - Group by arguments.
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
      T extends LeaveApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveApplicationGroupByArgs['orderBy'] }
        : { orderBy?: LeaveApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveApplication model
   */
  readonly fields: LeaveApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leaveType<T extends LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaveTypeDefaultArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends LeaveApplication$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, LeaveApplication$approvedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveApplication model
   */
  interface LeaveApplicationFieldRefs {
    readonly id: FieldRef<"LeaveApplication", 'Int'>
    readonly employeeId: FieldRef<"LeaveApplication", 'Int'>
    readonly leaveTypeId: FieldRef<"LeaveApplication", 'Int'>
    readonly startDate: FieldRef<"LeaveApplication", 'DateTime'>
    readonly endDate: FieldRef<"LeaveApplication", 'DateTime'>
    readonly reason: FieldRef<"LeaveApplication", 'String'>
    readonly status: FieldRef<"LeaveApplication", 'String'>
    readonly appliedDate: FieldRef<"LeaveApplication", 'DateTime'>
    readonly approvedById: FieldRef<"LeaveApplication", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeaveApplication findUnique
   */
  export type LeaveApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication findUniqueOrThrow
   */
  export type LeaveApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication findFirst
   */
  export type LeaveApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveApplications.
     */
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication findFirstOrThrow
   */
  export type LeaveApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplication to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveApplications.
     */
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication findMany
   */
  export type LeaveApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LeaveApplications to fetch.
     */
    where?: LeaveApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveApplications to fetch.
     */
    orderBy?: LeaveApplicationOrderByWithRelationInput | LeaveApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveApplications.
     */
    cursor?: LeaveApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveApplications.
     */
    skip?: number
    distinct?: LeaveApplicationScalarFieldEnum | LeaveApplicationScalarFieldEnum[]
  }

  /**
   * LeaveApplication create
   */
  export type LeaveApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveApplication.
     */
    data: XOR<LeaveApplicationCreateInput, LeaveApplicationUncheckedCreateInput>
  }

  /**
   * LeaveApplication createMany
   */
  export type LeaveApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveApplications.
     */
    data: LeaveApplicationCreateManyInput | LeaveApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveApplication createManyAndReturn
   */
  export type LeaveApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveApplications.
     */
    data: LeaveApplicationCreateManyInput | LeaveApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveApplication update
   */
  export type LeaveApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveApplication.
     */
    data: XOR<LeaveApplicationUpdateInput, LeaveApplicationUncheckedUpdateInput>
    /**
     * Choose, which LeaveApplication to update.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication updateMany
   */
  export type LeaveApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveApplications.
     */
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LeaveApplications to update
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to update.
     */
    limit?: number
  }

  /**
   * LeaveApplication updateManyAndReturn
   */
  export type LeaveApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * The data used to update LeaveApplications.
     */
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LeaveApplications to update
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveApplication upsert
   */
  export type LeaveApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveApplication to update in case it exists.
     */
    where: LeaveApplicationWhereUniqueInput
    /**
     * In case the LeaveApplication found by the `where` argument doesn't exist, create a new LeaveApplication with this data.
     */
    create: XOR<LeaveApplicationCreateInput, LeaveApplicationUncheckedCreateInput>
    /**
     * In case the LeaveApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveApplicationUpdateInput, LeaveApplicationUncheckedUpdateInput>
  }

  /**
   * LeaveApplication delete
   */
  export type LeaveApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
    /**
     * Filter which LeaveApplication to delete.
     */
    where: LeaveApplicationWhereUniqueInput
  }

  /**
   * LeaveApplication deleteMany
   */
  export type LeaveApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveApplications to delete
     */
    where?: LeaveApplicationWhereInput
    /**
     * Limit how many LeaveApplications to delete.
     */
    limit?: number
  }

  /**
   * LeaveApplication.approvedBy
   */
  export type LeaveApplication$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LeaveApplication without action
   */
  export type LeaveApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveApplication
     */
    select?: LeaveApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveApplication
     */
    omit?: LeaveApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveApplicationInclude<ExtArgs> | null
  }


  /**
   * Model LeaveBalance
   */

  export type AggregateLeaveBalance = {
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  export type LeaveBalanceAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    year: number | null
    totalAllocated: number | null
    totalUsed: number | null
    totalRemaining: number | null
  }

  export type LeaveBalanceSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    year: number | null
    totalAllocated: number | null
    totalUsed: number | null
    totalRemaining: number | null
  }

  export type LeaveBalanceMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    year: number | null
    totalAllocated: number | null
    totalUsed: number | null
    totalRemaining: number | null
  }

  export type LeaveBalanceMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    leaveTypeId: number | null
    year: number | null
    totalAllocated: number | null
    totalUsed: number | null
    totalRemaining: number | null
  }

  export type LeaveBalanceCountAggregateOutputType = {
    id: number
    employeeId: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
    _all: number
  }


  export type LeaveBalanceAvgAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    year?: true
    totalAllocated?: true
    totalUsed?: true
    totalRemaining?: true
  }

  export type LeaveBalanceSumAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    year?: true
    totalAllocated?: true
    totalUsed?: true
    totalRemaining?: true
  }

  export type LeaveBalanceMinAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    year?: true
    totalAllocated?: true
    totalUsed?: true
    totalRemaining?: true
  }

  export type LeaveBalanceMaxAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    year?: true
    totalAllocated?: true
    totalUsed?: true
    totalRemaining?: true
  }

  export type LeaveBalanceCountAggregateInputType = {
    id?: true
    employeeId?: true
    leaveTypeId?: true
    year?: true
    totalAllocated?: true
    totalUsed?: true
    totalRemaining?: true
    _all?: true
  }

  export type LeaveBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalance to aggregate.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveBalances
    **/
    _count?: true | LeaveBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type GetLeaveBalanceAggregateType<T extends LeaveBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveBalance[P]>
      : GetScalarType<T[P], AggregateLeaveBalance[P]>
  }




  export type LeaveBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveBalanceWhereInput
    orderBy?: LeaveBalanceOrderByWithAggregationInput | LeaveBalanceOrderByWithAggregationInput[]
    by: LeaveBalanceScalarFieldEnum[] | LeaveBalanceScalarFieldEnum
    having?: LeaveBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveBalanceCountAggregateInputType | true
    _avg?: LeaveBalanceAvgAggregateInputType
    _sum?: LeaveBalanceSumAggregateInputType
    _min?: LeaveBalanceMinAggregateInputType
    _max?: LeaveBalanceMaxAggregateInputType
  }

  export type LeaveBalanceGroupByOutputType = {
    id: number
    employeeId: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
    _count: LeaveBalanceCountAggregateOutputType | null
    _avg: LeaveBalanceAvgAggregateOutputType | null
    _sum: LeaveBalanceSumAggregateOutputType | null
    _min: LeaveBalanceMinAggregateOutputType | null
    _max: LeaveBalanceMaxAggregateOutputType | null
  }

  type GetLeaveBalanceGroupByPayload<T extends LeaveBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>
        }
      >
    >


  export type LeaveBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    year?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    totalRemaining?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    year?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    totalRemaining?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    year?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    totalRemaining?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveBalance"]>

  export type LeaveBalanceSelectScalar = {
    id?: boolean
    employeeId?: boolean
    leaveTypeId?: boolean
    year?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    totalRemaining?: boolean
  }

  export type LeaveBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "leaveTypeId" | "year" | "totalAllocated" | "totalUsed" | "totalRemaining", ExtArgs["result"]["leaveBalance"]>
  export type LeaveBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }
  export type LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    leaveType?: boolean | LeaveTypeDefaultArgs<ExtArgs>
  }

  export type $LeaveBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveBalance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      leaveType: Prisma.$LeaveTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      leaveTypeId: number
      year: number
      totalAllocated: number
      totalUsed: number
      totalRemaining: number
    }, ExtArgs["result"]["leaveBalance"]>
    composites: {}
  }

  type LeaveBalanceGetPayload<S extends boolean | null | undefined | LeaveBalanceDefaultArgs> = $Result.GetResult<Prisma.$LeaveBalancePayload, S>

  type LeaveBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveBalanceCountAggregateInputType | true
    }

  export interface LeaveBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveBalance'], meta: { name: 'LeaveBalance' } }
    /**
     * Find zero or one LeaveBalance that matches the filter.
     * @param {LeaveBalanceFindUniqueArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveBalanceFindUniqueArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveBalanceFindUniqueOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveBalanceFindFirstArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindFirstOrThrowArgs} args - Arguments to find a LeaveBalance
     * @example
     * // Get one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany()
     * 
     * // Get first 10 LeaveBalances
     * const leaveBalances = await prisma.leaveBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveBalanceFindManyArgs>(args?: SelectSubset<T, LeaveBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveBalance.
     * @param {LeaveBalanceCreateArgs} args - Arguments to create a LeaveBalance.
     * @example
     * // Create one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.create({
     *   data: {
     *     // ... data to create a LeaveBalance
     *   }
     * })
     * 
     */
    create<T extends LeaveBalanceCreateArgs>(args: SelectSubset<T, LeaveBalanceCreateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveBalances.
     * @param {LeaveBalanceCreateManyArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveBalanceCreateManyArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveBalances and returns the data saved in the database.
     * @param {LeaveBalanceCreateManyAndReturnArgs} args - Arguments to create many LeaveBalances.
     * @example
     * // Create many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveBalance.
     * @param {LeaveBalanceDeleteArgs} args - Arguments to delete one LeaveBalance.
     * @example
     * // Delete one LeaveBalance
     * const LeaveBalance = await prisma.leaveBalance.delete({
     *   where: {
     *     // ... filter to delete one LeaveBalance
     *   }
     * })
     * 
     */
    delete<T extends LeaveBalanceDeleteArgs>(args: SelectSubset<T, LeaveBalanceDeleteArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveBalance.
     * @param {LeaveBalanceUpdateArgs} args - Arguments to update one LeaveBalance.
     * @example
     * // Update one LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveBalanceUpdateArgs>(args: SelectSubset<T, LeaveBalanceUpdateArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveBalances.
     * @param {LeaveBalanceDeleteManyArgs} args - Arguments to filter LeaveBalances to delete.
     * @example
     * // Delete a few LeaveBalances
     * const { count } = await prisma.leaveBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveBalanceDeleteManyArgs>(args?: SelectSubset<T, LeaveBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveBalanceUpdateManyArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveBalances and returns the data updated in the database.
     * @param {LeaveBalanceUpdateManyAndReturnArgs} args - Arguments to update many LeaveBalances.
     * @example
     * // Update many LeaveBalances
     * const leaveBalance = await prisma.leaveBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveBalances and only return the `id`
     * const leaveBalanceWithIdOnly = await prisma.leaveBalance.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveBalance.
     * @param {LeaveBalanceUpsertArgs} args - Arguments to update or create a LeaveBalance.
     * @example
     * // Update or create a LeaveBalance
     * const leaveBalance = await prisma.leaveBalance.upsert({
     *   create: {
     *     // ... data to create a LeaveBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveBalance we want to update
     *   }
     * })
     */
    upsert<T extends LeaveBalanceUpsertArgs>(args: SelectSubset<T, LeaveBalanceUpsertArgs<ExtArgs>>): Prisma__LeaveBalanceClient<$Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceCountArgs} args - Arguments to filter LeaveBalances to count.
     * @example
     * // Count the number of LeaveBalances
     * const count = await prisma.leaveBalance.count({
     *   where: {
     *     // ... the filter for the LeaveBalances we want to count
     *   }
     * })
    **/
    count<T extends LeaveBalanceCountArgs>(
      args?: Subset<T, LeaveBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveBalanceAggregateArgs>(args: Subset<T, LeaveBalanceAggregateArgs>): Prisma.PrismaPromise<GetLeaveBalanceAggregateType<T>>

    /**
     * Group by LeaveBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveBalanceGroupByArgs} args - Group by arguments.
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
      T extends LeaveBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveBalanceGroupByArgs['orderBy'] }
        : { orderBy?: LeaveBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveBalance model
   */
  readonly fields: LeaveBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leaveType<T extends LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaveTypeDefaultArgs<ExtArgs>>): Prisma__LeaveTypeClient<$Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveBalance model
   */
  interface LeaveBalanceFieldRefs {
    readonly id: FieldRef<"LeaveBalance", 'Int'>
    readonly employeeId: FieldRef<"LeaveBalance", 'Int'>
    readonly leaveTypeId: FieldRef<"LeaveBalance", 'Int'>
    readonly year: FieldRef<"LeaveBalance", 'Int'>
    readonly totalAllocated: FieldRef<"LeaveBalance", 'Int'>
    readonly totalUsed: FieldRef<"LeaveBalance", 'Int'>
    readonly totalRemaining: FieldRef<"LeaveBalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeaveBalance findUnique
   */
  export type LeaveBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findUniqueOrThrow
   */
  export type LeaveBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance findFirst
   */
  export type LeaveBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findFirstOrThrow
   */
  export type LeaveBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalance to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveBalances.
     */
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance findMany
   */
  export type LeaveBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter, which LeaveBalances to fetch.
     */
    where?: LeaveBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveBalances to fetch.
     */
    orderBy?: LeaveBalanceOrderByWithRelationInput | LeaveBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveBalances.
     */
    cursor?: LeaveBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveBalances.
     */
    skip?: number
    distinct?: LeaveBalanceScalarFieldEnum | LeaveBalanceScalarFieldEnum[]
  }

  /**
   * LeaveBalance create
   */
  export type LeaveBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveBalance.
     */
    data: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
  }

  /**
   * LeaveBalance createMany
   */
  export type LeaveBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveBalance createManyAndReturn
   */
  export type LeaveBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveBalances.
     */
    data: LeaveBalanceCreateManyInput | LeaveBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance update
   */
  export type LeaveBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveBalance.
     */
    data: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
    /**
     * Choose, which LeaveBalance to update.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance updateMany
   */
  export type LeaveBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
  }

  /**
   * LeaveBalance updateManyAndReturn
   */
  export type LeaveBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * The data used to update LeaveBalances.
     */
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyInput>
    /**
     * Filter which LeaveBalances to update
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveBalance upsert
   */
  export type LeaveBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveBalance to update in case it exists.
     */
    where: LeaveBalanceWhereUniqueInput
    /**
     * In case the LeaveBalance found by the `where` argument doesn't exist, create a new LeaveBalance with this data.
     */
    create: XOR<LeaveBalanceCreateInput, LeaveBalanceUncheckedCreateInput>
    /**
     * In case the LeaveBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveBalanceUpdateInput, LeaveBalanceUncheckedUpdateInput>
  }

  /**
   * LeaveBalance delete
   */
  export type LeaveBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
    /**
     * Filter which LeaveBalance to delete.
     */
    where: LeaveBalanceWhereUniqueInput
  }

  /**
   * LeaveBalance deleteMany
   */
  export type LeaveBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveBalances to delete
     */
    where?: LeaveBalanceWhereInput
    /**
     * Limit how many LeaveBalances to delete.
     */
    limit?: number
  }

  /**
   * LeaveBalance without action
   */
  export type LeaveBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveBalance
     */
    select?: LeaveBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveBalance
     */
    omit?: LeaveBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveBalanceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    role: 'role',
    dateJoined: 'dateJoined',
    status: 'status',
    userId: 'userId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const LeaveTypeScalarFieldEnum: {
    id: 'id',
    typeName: 'typeName',
    description: 'description'
  };

  export type LeaveTypeScalarFieldEnum = (typeof LeaveTypeScalarFieldEnum)[keyof typeof LeaveTypeScalarFieldEnum]


  export const LeaveApplicationScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    leaveTypeId: 'leaveTypeId',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    appliedDate: 'appliedDate',
    approvedById: 'approvedById'
  };

  export type LeaveApplicationScalarFieldEnum = (typeof LeaveApplicationScalarFieldEnum)[keyof typeof LeaveApplicationScalarFieldEnum]


  export const LeaveBalanceScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    leaveTypeId: 'leaveTypeId',
    year: 'year',
    totalAllocated: 'totalAllocated',
    totalUsed: 'totalUsed',
    totalRemaining: 'totalRemaining'
  };

  export type LeaveBalanceScalarFieldEnum = (typeof LeaveBalanceScalarFieldEnum)[keyof typeof LeaveBalanceScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    dateJoined?: DateTimeFilter<"Employee"> | Date | string
    status?: StringFilter<"Employee"> | string
    userId?: IntNullableFilter<"Employee"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    leaves?: LeaveApplicationListRelationFilter
    leaveBalances?: LeaveBalanceListRelationFilter
    approvedLeaves?: LeaveApplicationListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dateJoined?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    leaves?: LeaveApplicationOrderByRelationAggregateInput
    leaveBalances?: LeaveBalanceOrderByRelationAggregateInput
    approvedLeaves?: LeaveApplicationOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    userId?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    role?: StringFilter<"Employee"> | string
    dateJoined?: DateTimeFilter<"Employee"> | Date | string
    status?: StringFilter<"Employee"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    leaves?: LeaveApplicationListRelationFilter
    leaveBalances?: LeaveBalanceListRelationFilter
    approvedLeaves?: LeaveApplicationListRelationFilter
  }, "id" | "email" | "userId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dateJoined?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    role?: StringWithAggregatesFilter<"Employee"> | string
    dateJoined?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    status?: StringWithAggregatesFilter<"Employee"> | string
    userId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
  }

  export type LeaveTypeWhereInput = {
    AND?: LeaveTypeWhereInput | LeaveTypeWhereInput[]
    OR?: LeaveTypeWhereInput[]
    NOT?: LeaveTypeWhereInput | LeaveTypeWhereInput[]
    id?: IntFilter<"LeaveType"> | number
    typeName?: StringFilter<"LeaveType"> | string
    description?: StringNullableFilter<"LeaveType"> | string | null
    applications?: LeaveApplicationListRelationFilter
    balances?: LeaveBalanceListRelationFilter
  }

  export type LeaveTypeOrderByWithRelationInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrderInput | SortOrder
    applications?: LeaveApplicationOrderByRelationAggregateInput
    balances?: LeaveBalanceOrderByRelationAggregateInput
  }

  export type LeaveTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaveTypeWhereInput | LeaveTypeWhereInput[]
    OR?: LeaveTypeWhereInput[]
    NOT?: LeaveTypeWhereInput | LeaveTypeWhereInput[]
    typeName?: StringFilter<"LeaveType"> | string
    description?: StringNullableFilter<"LeaveType"> | string | null
    applications?: LeaveApplicationListRelationFilter
    balances?: LeaveBalanceListRelationFilter
  }, "id">

  export type LeaveTypeOrderByWithAggregationInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: LeaveTypeCountOrderByAggregateInput
    _avg?: LeaveTypeAvgOrderByAggregateInput
    _max?: LeaveTypeMaxOrderByAggregateInput
    _min?: LeaveTypeMinOrderByAggregateInput
    _sum?: LeaveTypeSumOrderByAggregateInput
  }

  export type LeaveTypeScalarWhereWithAggregatesInput = {
    AND?: LeaveTypeScalarWhereWithAggregatesInput | LeaveTypeScalarWhereWithAggregatesInput[]
    OR?: LeaveTypeScalarWhereWithAggregatesInput[]
    NOT?: LeaveTypeScalarWhereWithAggregatesInput | LeaveTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaveType"> | number
    typeName?: StringWithAggregatesFilter<"LeaveType"> | string
    description?: StringNullableWithAggregatesFilter<"LeaveType"> | string | null
  }

  export type LeaveApplicationWhereInput = {
    AND?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    OR?: LeaveApplicationWhereInput[]
    NOT?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    id?: IntFilter<"LeaveApplication"> | number
    employeeId?: IntFilter<"LeaveApplication"> | number
    leaveTypeId?: IntFilter<"LeaveApplication"> | number
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringNullableFilter<"LeaveApplication"> | string | null
    status?: StringFilter<"LeaveApplication"> | string
    appliedDate?: DateTimeNullableFilter<"LeaveApplication"> | Date | string | null
    approvedById?: IntNullableFilter<"LeaveApplication"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    leaveType?: XOR<LeaveTypeScalarRelationFilter, LeaveTypeWhereInput>
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type LeaveApplicationOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedDate?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    leaveType?: LeaveTypeOrderByWithRelationInput
    approvedBy?: EmployeeOrderByWithRelationInput
  }

  export type LeaveApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    OR?: LeaveApplicationWhereInput[]
    NOT?: LeaveApplicationWhereInput | LeaveApplicationWhereInput[]
    employeeId?: IntFilter<"LeaveApplication"> | number
    leaveTypeId?: IntFilter<"LeaveApplication"> | number
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringNullableFilter<"LeaveApplication"> | string | null
    status?: StringFilter<"LeaveApplication"> | string
    appliedDate?: DateTimeNullableFilter<"LeaveApplication"> | Date | string | null
    approvedById?: IntNullableFilter<"LeaveApplication"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    leaveType?: XOR<LeaveTypeScalarRelationFilter, LeaveTypeWhereInput>
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type LeaveApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedDate?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    _count?: LeaveApplicationCountOrderByAggregateInput
    _avg?: LeaveApplicationAvgOrderByAggregateInput
    _max?: LeaveApplicationMaxOrderByAggregateInput
    _min?: LeaveApplicationMinOrderByAggregateInput
    _sum?: LeaveApplicationSumOrderByAggregateInput
  }

  export type LeaveApplicationScalarWhereWithAggregatesInput = {
    AND?: LeaveApplicationScalarWhereWithAggregatesInput | LeaveApplicationScalarWhereWithAggregatesInput[]
    OR?: LeaveApplicationScalarWhereWithAggregatesInput[]
    NOT?: LeaveApplicationScalarWhereWithAggregatesInput | LeaveApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaveApplication"> | number
    employeeId?: IntWithAggregatesFilter<"LeaveApplication"> | number
    leaveTypeId?: IntWithAggregatesFilter<"LeaveApplication"> | number
    startDate?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaveApplication"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"LeaveApplication"> | string | null
    status?: StringWithAggregatesFilter<"LeaveApplication"> | string
    appliedDate?: DateTimeNullableWithAggregatesFilter<"LeaveApplication"> | Date | string | null
    approvedById?: IntNullableWithAggregatesFilter<"LeaveApplication"> | number | null
  }

  export type LeaveBalanceWhereInput = {
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    id?: IntFilter<"LeaveBalance"> | number
    employeeId?: IntFilter<"LeaveBalance"> | number
    leaveTypeId?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    totalAllocated?: IntFilter<"LeaveBalance"> | number
    totalUsed?: IntFilter<"LeaveBalance"> | number
    totalRemaining?: IntFilter<"LeaveBalance"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    leaveType?: XOR<LeaveTypeScalarRelationFilter, LeaveTypeWhereInput>
  }

  export type LeaveBalanceOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    leaveType?: LeaveTypeOrderByWithRelationInput
  }

  export type LeaveBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    OR?: LeaveBalanceWhereInput[]
    NOT?: LeaveBalanceWhereInput | LeaveBalanceWhereInput[]
    employeeId?: IntFilter<"LeaveBalance"> | number
    leaveTypeId?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    totalAllocated?: IntFilter<"LeaveBalance"> | number
    totalUsed?: IntFilter<"LeaveBalance"> | number
    totalRemaining?: IntFilter<"LeaveBalance"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    leaveType?: XOR<LeaveTypeScalarRelationFilter, LeaveTypeWhereInput>
  }, "id">

  export type LeaveBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
    _count?: LeaveBalanceCountOrderByAggregateInput
    _avg?: LeaveBalanceAvgOrderByAggregateInput
    _max?: LeaveBalanceMaxOrderByAggregateInput
    _min?: LeaveBalanceMinOrderByAggregateInput
    _sum?: LeaveBalanceSumOrderByAggregateInput
  }

  export type LeaveBalanceScalarWhereWithAggregatesInput = {
    AND?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    OR?: LeaveBalanceScalarWhereWithAggregatesInput[]
    NOT?: LeaveBalanceScalarWhereWithAggregatesInput | LeaveBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaveBalance"> | number
    employeeId?: IntWithAggregatesFilter<"LeaveBalance"> | number
    leaveTypeId?: IntWithAggregatesFilter<"LeaveBalance"> | number
    year?: IntWithAggregatesFilter<"LeaveBalance"> | number
    totalAllocated?: IntWithAggregatesFilter<"LeaveBalance"> | number
    totalUsed?: IntWithAggregatesFilter<"LeaveBalance"> | number
    totalRemaining?: IntWithAggregatesFilter<"LeaveBalance"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    employee?: EmployeeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    user?: UserCreateNestedOneWithoutEmployeeInput
    leaves?: LeaveApplicationCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    userId?: number | null
    leaves?: LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutEmployeeNestedInput
    leaves?: LeaveApplicationUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    leaves?: LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    userId?: number | null
  }

  export type EmployeeUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveTypeCreateInput = {
    typeName: string
    description?: string | null
    applications?: LeaveApplicationCreateNestedManyWithoutLeaveTypeInput
    balances?: LeaveBalanceCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeUncheckedCreateInput = {
    id?: number
    typeName: string
    description?: string | null
    applications?: LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeUpdateInput = {
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput
    balances?: LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput
  }

  export type LeaveTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput
    balances?: LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput
  }

  export type LeaveTypeCreateManyInput = {
    id?: number
    typeName: string
    description?: string | null
  }

  export type LeaveTypeUpdateManyMutationInput = {
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveApplicationCreateInput = {
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutLeavesInput
    leaveType: LeaveTypeCreateNestedOneWithoutApplicationsInput
    approvedBy?: EmployeeCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveApplicationUncheckedCreateInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveApplicationUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutLeavesNestedInput
    leaveType?: LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput
    approvedBy?: EmployeeUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveApplicationCreateManyInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveApplicationUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveBalanceCreateInput = {
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
    employee: EmployeeCreateNestedOneWithoutLeaveBalancesInput
    leaveType: LeaveTypeCreateNestedOneWithoutBalancesInput
  }

  export type LeaveBalanceUncheckedCreateInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveBalanceUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
    employee?: EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput
    leaveType?: LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type LeaveBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceCreateManyInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveBalanceUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
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

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeaveApplicationListRelationFilter = {
    every?: LeaveApplicationWhereInput
    some?: LeaveApplicationWhereInput
    none?: LeaveApplicationWhereInput
  }

  export type LeaveBalanceListRelationFilter = {
    every?: LeaveBalanceWhereInput
    some?: LeaveBalanceWhereInput
    none?: LeaveBalanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaveApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dateJoined?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dateJoined?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dateJoined?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type LeaveTypeCountOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
  }

  export type LeaveTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LeaveTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
  }

  export type LeaveTypeMinOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
  }

  export type LeaveTypeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type LeaveTypeScalarRelationFilter = {
    is?: LeaveTypeWhereInput
    isNot?: LeaveTypeWhereInput
  }

  export type LeaveApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    approvedById?: SortOrder
  }

  export type LeaveApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    approvedById?: SortOrder
  }

  export type LeaveApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    approvedById?: SortOrder
  }

  export type LeaveApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    approvedById?: SortOrder
  }

  export type LeaveApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    approvedById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LeaveBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
  }

  export type LeaveBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
  }

  export type LeaveBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
  }

  export type LeaveBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
  }

  export type LeaveBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    leaveTypeId?: SortOrder
    year?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    totalRemaining?: SortOrder
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveApplicationCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput> | LeaveApplicationCreateWithoutEmployeeInput[] | LeaveApplicationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutEmployeeInput | LeaveApplicationCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveApplicationCreateManyEmployeeInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type LeaveBalanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput> | LeaveBalanceCreateWithoutEmployeeInput[] | LeaveBalanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutEmployeeInput | LeaveBalanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveBalanceCreateManyEmployeeInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveApplicationCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput> | LeaveApplicationCreateWithoutApprovedByInput[] | LeaveApplicationUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutApprovedByInput | LeaveApplicationCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveApplicationCreateManyApprovedByInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput> | LeaveApplicationCreateWithoutEmployeeInput[] | LeaveApplicationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutEmployeeInput | LeaveApplicationCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveApplicationCreateManyEmployeeInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput> | LeaveBalanceCreateWithoutEmployeeInput[] | LeaveBalanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutEmployeeInput | LeaveBalanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveBalanceCreateManyEmployeeInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveApplicationUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput> | LeaveApplicationCreateWithoutApprovedByInput[] | LeaveApplicationUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutApprovedByInput | LeaveApplicationCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveApplicationCreateManyApprovedByInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveApplicationUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput> | LeaveApplicationCreateWithoutEmployeeInput[] | LeaveApplicationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutEmployeeInput | LeaveApplicationCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput | LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveApplicationCreateManyEmployeeInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput | LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput | LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type LeaveBalanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput> | LeaveBalanceCreateWithoutEmployeeInput[] | LeaveBalanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutEmployeeInput | LeaveBalanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput | LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveBalanceCreateManyEmployeeInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput | LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput | LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveApplicationUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput> | LeaveApplicationCreateWithoutApprovedByInput[] | LeaveApplicationUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutApprovedByInput | LeaveApplicationCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutApprovedByInput | LeaveApplicationUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveApplicationCreateManyApprovedByInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutApprovedByInput | LeaveApplicationUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutApprovedByInput | LeaveApplicationUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput> | LeaveApplicationCreateWithoutEmployeeInput[] | LeaveApplicationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutEmployeeInput | LeaveApplicationCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput | LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveApplicationCreateManyEmployeeInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput | LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput | LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput> | LeaveBalanceCreateWithoutEmployeeInput[] | LeaveBalanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutEmployeeInput | LeaveBalanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput | LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveBalanceCreateManyEmployeeInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput | LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput | LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput> | LeaveApplicationCreateWithoutApprovedByInput[] | LeaveApplicationUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutApprovedByInput | LeaveApplicationCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutApprovedByInput | LeaveApplicationUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveApplicationCreateManyApprovedByInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutApprovedByInput | LeaveApplicationUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutApprovedByInput | LeaveApplicationUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type LeaveApplicationCreateNestedManyWithoutLeaveTypeInput = {
    create?: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | LeaveApplicationCreateWithoutLeaveTypeInput[] | LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[]
    createMany?: LeaveApplicationCreateManyLeaveTypeInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type LeaveBalanceCreateNestedManyWithoutLeaveTypeInput = {
    create?: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | LeaveBalanceCreateWithoutLeaveTypeInput[] | LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[]
    createMany?: LeaveBalanceCreateManyLeaveTypeInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | LeaveApplicationCreateWithoutLeaveTypeInput[] | LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[]
    createMany?: LeaveApplicationCreateManyLeaveTypeInputEnvelope
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
  }

  export type LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | LeaveBalanceCreateWithoutLeaveTypeInput[] | LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[]
    createMany?: LeaveBalanceCreateManyLeaveTypeInputEnvelope
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | LeaveApplicationCreateWithoutLeaveTypeInput[] | LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput | LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput[]
    createMany?: LeaveApplicationCreateManyLeaveTypeInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput | LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput | LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | LeaveBalanceCreateWithoutLeaveTypeInput[] | LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput | LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput[]
    createMany?: LeaveBalanceCreateManyLeaveTypeInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput | LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput | LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput> | LeaveApplicationCreateWithoutLeaveTypeInput[] | LeaveApplicationUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveApplicationCreateOrConnectWithoutLeaveTypeInput | LeaveApplicationCreateOrConnectWithoutLeaveTypeInput[]
    upsert?: LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput | LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput[]
    createMany?: LeaveApplicationCreateManyLeaveTypeInputEnvelope
    set?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    disconnect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    delete?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    connect?: LeaveApplicationWhereUniqueInput | LeaveApplicationWhereUniqueInput[]
    update?: LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput | LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput[]
    updateMany?: LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput | LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput[]
    deleteMany?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | LeaveBalanceCreateWithoutLeaveTypeInput[] | LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[]
    connectOrCreate?: LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[]
    upsert?: LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput | LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput[]
    createMany?: LeaveBalanceCreateManyLeaveTypeInputEnvelope
    set?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    disconnect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    delete?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    connect?: LeaveBalanceWhereUniqueInput | LeaveBalanceWhereUniqueInput[]
    update?: LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput | LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput[]
    updateMany?: LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput | LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput[]
    deleteMany?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutLeavesInput = {
    create?: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeavesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type LeaveTypeCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<LeaveTypeCreateWithoutApplicationsInput, LeaveTypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: LeaveTypeCreateOrConnectWithoutApplicationsInput
    connect?: LeaveTypeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutApprovedLeavesInput = {
    create?: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApprovedLeavesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeeUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeavesInput
    upsert?: EmployeeUpsertWithoutLeavesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeavesInput, EmployeeUpdateWithoutLeavesInput>, EmployeeUncheckedUpdateWithoutLeavesInput>
  }

  export type LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<LeaveTypeCreateWithoutApplicationsInput, LeaveTypeUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: LeaveTypeCreateOrConnectWithoutApplicationsInput
    upsert?: LeaveTypeUpsertWithoutApplicationsInput
    connect?: LeaveTypeWhereUniqueInput
    update?: XOR<XOR<LeaveTypeUpdateToOneWithWhereWithoutApplicationsInput, LeaveTypeUpdateWithoutApplicationsInput>, LeaveTypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type EmployeeUpdateOneWithoutApprovedLeavesNestedInput = {
    create?: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApprovedLeavesInput
    upsert?: EmployeeUpsertWithoutApprovedLeavesInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutApprovedLeavesInput, EmployeeUpdateWithoutApprovedLeavesInput>, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type EmployeeCreateNestedOneWithoutLeaveBalancesInput = {
    create?: XOR<EmployeeCreateWithoutLeaveBalancesInput, EmployeeUncheckedCreateWithoutLeaveBalancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveBalancesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type LeaveTypeCreateNestedOneWithoutBalancesInput = {
    create?: XOR<LeaveTypeCreateWithoutBalancesInput, LeaveTypeUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: LeaveTypeCreateOrConnectWithoutBalancesInput
    connect?: LeaveTypeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeaveBalancesInput, EmployeeUncheckedCreateWithoutLeaveBalancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveBalancesInput
    upsert?: EmployeeUpsertWithoutLeaveBalancesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeaveBalancesInput, EmployeeUpdateWithoutLeaveBalancesInput>, EmployeeUncheckedUpdateWithoutLeaveBalancesInput>
  }

  export type LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<LeaveTypeCreateWithoutBalancesInput, LeaveTypeUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: LeaveTypeCreateOrConnectWithoutBalancesInput
    upsert?: LeaveTypeUpsertWithoutBalancesInput
    connect?: LeaveTypeWhereUniqueInput
    update?: XOR<XOR<LeaveTypeUpdateToOneWithWhereWithoutBalancesInput, LeaveTypeUpdateWithoutBalancesInput>, LeaveTypeUncheckedUpdateWithoutBalancesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutUserInput = {
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    leaves?: LeaveApplicationCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    leaves?: LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    leaves?: LeaveApplicationUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    leaves?: LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserCreateWithoutEmployeeInput = {
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: number
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveApplicationCreateWithoutEmployeeInput = {
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    leaveType: LeaveTypeCreateNestedOneWithoutApplicationsInput
    approvedBy?: EmployeeCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveApplicationUncheckedCreateWithoutEmployeeInput = {
    id?: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveApplicationCreateOrConnectWithoutEmployeeInput = {
    where: LeaveApplicationWhereUniqueInput
    create: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveApplicationCreateManyEmployeeInputEnvelope = {
    data: LeaveApplicationCreateManyEmployeeInput | LeaveApplicationCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveBalanceCreateWithoutEmployeeInput = {
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
    leaveType: LeaveTypeCreateNestedOneWithoutBalancesInput
  }

  export type LeaveBalanceUncheckedCreateWithoutEmployeeInput = {
    id?: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveBalanceCreateOrConnectWithoutEmployeeInput = {
    where: LeaveBalanceWhereUniqueInput
    create: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveBalanceCreateManyEmployeeInputEnvelope = {
    data: LeaveBalanceCreateManyEmployeeInput | LeaveBalanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveApplicationCreateWithoutApprovedByInput = {
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutLeavesInput
    leaveType: LeaveTypeCreateNestedOneWithoutApplicationsInput
  }

  export type LeaveApplicationUncheckedCreateWithoutApprovedByInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
  }

  export type LeaveApplicationCreateOrConnectWithoutApprovedByInput = {
    where: LeaveApplicationWhereUniqueInput
    create: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveApplicationCreateManyApprovedByInputEnvelope = {
    data: LeaveApplicationCreateManyApprovedByInput | LeaveApplicationCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveApplicationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveApplicationWhereUniqueInput
    update: XOR<LeaveApplicationUpdateWithoutEmployeeInput, LeaveApplicationUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveApplicationCreateWithoutEmployeeInput, LeaveApplicationUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveApplicationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveApplicationWhereUniqueInput
    data: XOR<LeaveApplicationUpdateWithoutEmployeeInput, LeaveApplicationUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveApplicationUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveApplicationScalarWhereInput
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LeaveApplicationScalarWhereInput = {
    AND?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
    OR?: LeaveApplicationScalarWhereInput[]
    NOT?: LeaveApplicationScalarWhereInput | LeaveApplicationScalarWhereInput[]
    id?: IntFilter<"LeaveApplication"> | number
    employeeId?: IntFilter<"LeaveApplication"> | number
    leaveTypeId?: IntFilter<"LeaveApplication"> | number
    startDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    endDate?: DateTimeFilter<"LeaveApplication"> | Date | string
    reason?: StringNullableFilter<"LeaveApplication"> | string | null
    status?: StringFilter<"LeaveApplication"> | string
    appliedDate?: DateTimeNullableFilter<"LeaveApplication"> | Date | string | null
    approvedById?: IntNullableFilter<"LeaveApplication"> | number | null
  }

  export type LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveBalanceWhereUniqueInput
    update: XOR<LeaveBalanceUpdateWithoutEmployeeInput, LeaveBalanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveBalanceCreateWithoutEmployeeInput, LeaveBalanceUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveBalanceWhereUniqueInput
    data: XOR<LeaveBalanceUpdateWithoutEmployeeInput, LeaveBalanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveBalanceScalarWhereInput
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LeaveBalanceScalarWhereInput = {
    AND?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    OR?: LeaveBalanceScalarWhereInput[]
    NOT?: LeaveBalanceScalarWhereInput | LeaveBalanceScalarWhereInput[]
    id?: IntFilter<"LeaveBalance"> | number
    employeeId?: IntFilter<"LeaveBalance"> | number
    leaveTypeId?: IntFilter<"LeaveBalance"> | number
    year?: IntFilter<"LeaveBalance"> | number
    totalAllocated?: IntFilter<"LeaveBalance"> | number
    totalUsed?: IntFilter<"LeaveBalance"> | number
    totalRemaining?: IntFilter<"LeaveBalance"> | number
  }

  export type LeaveApplicationUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveApplicationWhereUniqueInput
    update: XOR<LeaveApplicationUpdateWithoutApprovedByInput, LeaveApplicationUncheckedUpdateWithoutApprovedByInput>
    create: XOR<LeaveApplicationCreateWithoutApprovedByInput, LeaveApplicationUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveApplicationUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveApplicationWhereUniqueInput
    data: XOR<LeaveApplicationUpdateWithoutApprovedByInput, LeaveApplicationUncheckedUpdateWithoutApprovedByInput>
  }

  export type LeaveApplicationUpdateManyWithWhereWithoutApprovedByInput = {
    where: LeaveApplicationScalarWhereInput
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type LeaveApplicationCreateWithoutLeaveTypeInput = {
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutLeavesInput
    approvedBy?: EmployeeCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveApplicationUncheckedCreateWithoutLeaveTypeInput = {
    id?: number
    employeeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveApplicationCreateOrConnectWithoutLeaveTypeInput = {
    where: LeaveApplicationWhereUniqueInput
    create: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput>
  }

  export type LeaveApplicationCreateManyLeaveTypeInputEnvelope = {
    data: LeaveApplicationCreateManyLeaveTypeInput | LeaveApplicationCreateManyLeaveTypeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveBalanceCreateWithoutLeaveTypeInput = {
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
    employee: EmployeeCreateNestedOneWithoutLeaveBalancesInput
  }

  export type LeaveBalanceUncheckedCreateWithoutLeaveTypeInput = {
    id?: number
    employeeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveBalanceCreateOrConnectWithoutLeaveTypeInput = {
    where: LeaveBalanceWhereUniqueInput
    create: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput>
  }

  export type LeaveBalanceCreateManyLeaveTypeInputEnvelope = {
    data: LeaveBalanceCreateManyLeaveTypeInput | LeaveBalanceCreateManyLeaveTypeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveApplicationUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: LeaveApplicationWhereUniqueInput
    update: XOR<LeaveApplicationUpdateWithoutLeaveTypeInput, LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput>
    create: XOR<LeaveApplicationCreateWithoutLeaveTypeInput, LeaveApplicationUncheckedCreateWithoutLeaveTypeInput>
  }

  export type LeaveApplicationUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: LeaveApplicationWhereUniqueInput
    data: XOR<LeaveApplicationUpdateWithoutLeaveTypeInput, LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput>
  }

  export type LeaveApplicationUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: LeaveApplicationScalarWhereInput
    data: XOR<LeaveApplicationUpdateManyMutationInput, LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeInput>
  }

  export type LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: LeaveBalanceWhereUniqueInput
    update: XOR<LeaveBalanceUpdateWithoutLeaveTypeInput, LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput>
    create: XOR<LeaveBalanceCreateWithoutLeaveTypeInput, LeaveBalanceUncheckedCreateWithoutLeaveTypeInput>
  }

  export type LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: LeaveBalanceWhereUniqueInput
    data: XOR<LeaveBalanceUpdateWithoutLeaveTypeInput, LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput>
  }

  export type LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: LeaveBalanceScalarWhereInput
    data: XOR<LeaveBalanceUpdateManyMutationInput, LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeInput>
  }

  export type EmployeeCreateWithoutLeavesInput = {
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    user?: UserCreateNestedOneWithoutEmployeeInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutLeavesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    userId?: number | null
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutLeavesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
  }

  export type LeaveTypeCreateWithoutApplicationsInput = {
    typeName: string
    description?: string | null
    balances?: LeaveBalanceCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeUncheckedCreateWithoutApplicationsInput = {
    id?: number
    typeName: string
    description?: string | null
    balances?: LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeCreateOrConnectWithoutApplicationsInput = {
    where: LeaveTypeWhereUniqueInput
    create: XOR<LeaveTypeCreateWithoutApplicationsInput, LeaveTypeUncheckedCreateWithoutApplicationsInput>
  }

  export type EmployeeCreateWithoutApprovedLeavesInput = {
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    user?: UserCreateNestedOneWithoutEmployeeInput
    leaves?: LeaveApplicationCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutApprovedLeavesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    userId?: number | null
    leaves?: LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput
    leaveBalances?: LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutApprovedLeavesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
  }

  export type EmployeeUpsertWithoutLeavesInput = {
    update: XOR<EmployeeUpdateWithoutLeavesInput, EmployeeUncheckedUpdateWithoutLeavesInput>
    create: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeavesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeavesInput, EmployeeUncheckedUpdateWithoutLeavesInput>
  }

  export type EmployeeUpdateWithoutLeavesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type LeaveTypeUpsertWithoutApplicationsInput = {
    update: XOR<LeaveTypeUpdateWithoutApplicationsInput, LeaveTypeUncheckedUpdateWithoutApplicationsInput>
    create: XOR<LeaveTypeCreateWithoutApplicationsInput, LeaveTypeUncheckedCreateWithoutApplicationsInput>
    where?: LeaveTypeWhereInput
  }

  export type LeaveTypeUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: LeaveTypeWhereInput
    data: XOR<LeaveTypeUpdateWithoutApplicationsInput, LeaveTypeUncheckedUpdateWithoutApplicationsInput>
  }

  export type LeaveTypeUpdateWithoutApplicationsInput = {
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput
  }

  export type LeaveTypeUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput
  }

  export type EmployeeUpsertWithoutApprovedLeavesInput = {
    update: XOR<EmployeeUpdateWithoutApprovedLeavesInput, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
    create: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutApprovedLeavesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutApprovedLeavesInput, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type EmployeeUpdateWithoutApprovedLeavesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutEmployeeNestedInput
    leaves?: LeaveApplicationUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutApprovedLeavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    leaves?: LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput
    leaveBalances?: LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutLeaveBalancesInput = {
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    user?: UserCreateNestedOneWithoutEmployeeInput
    leaves?: LeaveApplicationCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutLeaveBalancesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: string
    dateJoined: Date | string
    status: string
    userId?: number | null
    leaves?: LeaveApplicationUncheckedCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveApplicationUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutLeaveBalancesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeaveBalancesInput, EmployeeUncheckedCreateWithoutLeaveBalancesInput>
  }

  export type LeaveTypeCreateWithoutBalancesInput = {
    typeName: string
    description?: string | null
    applications?: LeaveApplicationCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeUncheckedCreateWithoutBalancesInput = {
    id?: number
    typeName: string
    description?: string | null
    applications?: LeaveApplicationUncheckedCreateNestedManyWithoutLeaveTypeInput
  }

  export type LeaveTypeCreateOrConnectWithoutBalancesInput = {
    where: LeaveTypeWhereUniqueInput
    create: XOR<LeaveTypeCreateWithoutBalancesInput, LeaveTypeUncheckedCreateWithoutBalancesInput>
  }

  export type EmployeeUpsertWithoutLeaveBalancesInput = {
    update: XOR<EmployeeUpdateWithoutLeaveBalancesInput, EmployeeUncheckedUpdateWithoutLeaveBalancesInput>
    create: XOR<EmployeeCreateWithoutLeaveBalancesInput, EmployeeUncheckedCreateWithoutLeaveBalancesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeaveBalancesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeaveBalancesInput, EmployeeUncheckedUpdateWithoutLeaveBalancesInput>
  }

  export type EmployeeUpdateWithoutLeaveBalancesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutEmployeeNestedInput
    leaves?: LeaveApplicationUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeaveBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    leaves?: LeaveApplicationUncheckedUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveApplicationUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type LeaveTypeUpsertWithoutBalancesInput = {
    update: XOR<LeaveTypeUpdateWithoutBalancesInput, LeaveTypeUncheckedUpdateWithoutBalancesInput>
    create: XOR<LeaveTypeCreateWithoutBalancesInput, LeaveTypeUncheckedCreateWithoutBalancesInput>
    where?: LeaveTypeWhereInput
  }

  export type LeaveTypeUpdateToOneWithWhereWithoutBalancesInput = {
    where?: LeaveTypeWhereInput
    data: XOR<LeaveTypeUpdateWithoutBalancesInput, LeaveTypeUncheckedUpdateWithoutBalancesInput>
  }

  export type LeaveTypeUpdateWithoutBalancesInput = {
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: LeaveApplicationUpdateManyWithoutLeaveTypeNestedInput
  }

  export type LeaveTypeUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applications?: LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeNestedInput
  }

  export type LeaveApplicationCreateManyEmployeeInput = {
    id?: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveBalanceCreateManyEmployeeInput = {
    id?: number
    leaveTypeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveApplicationCreateManyApprovedByInput = {
    id?: number
    employeeId: number
    leaveTypeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
  }

  export type LeaveApplicationUpdateWithoutEmployeeInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveType?: LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput
    approvedBy?: EmployeeUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveApplicationUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveBalanceUpdateWithoutEmployeeInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
    leaveType?: LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type LeaveBalanceUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveApplicationUpdateWithoutApprovedByInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutLeavesNestedInput
    leaveType?: LeaveTypeUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type LeaveApplicationUncheckedUpdateWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    leaveTypeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveApplicationCreateManyLeaveTypeInput = {
    id?: number
    employeeId: number
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status: string
    appliedDate?: Date | string | null
    approvedById?: number | null
  }

  export type LeaveBalanceCreateManyLeaveTypeInput = {
    id?: number
    employeeId: number
    year: number
    totalAllocated: number
    totalUsed: number
    totalRemaining: number
  }

  export type LeaveApplicationUpdateWithoutLeaveTypeInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutLeavesNestedInput
    approvedBy?: EmployeeUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveApplicationUncheckedUpdateWithoutLeaveTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveApplicationUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaveBalanceUpdateWithoutLeaveTypeInput = {
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
    employee?: EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput
  }

  export type LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    totalRemaining?: IntFieldUpdateOperationsInput | number
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