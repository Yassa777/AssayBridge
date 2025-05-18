
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
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model DDPCRRun
 * 
 */
export type DDPCRRun = $Result.DefaultSelection<Prisma.$DDPCRRunPayload>
/**
 * Model SterilityResult
 * 
 */
export type SterilityResult = $Result.DefaultSelection<Prisma.$SterilityResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QCStatus: {
  PENDING: 'PENDING',
  PASS: 'PASS',
  FAIL: 'FAIL'
};

export type QCStatus = (typeof QCStatus)[keyof typeof QCStatus]


export const SampleType: {
  SYNTHETIC: 'SYNTHETIC',
  PATIENT: 'PATIENT',
  QC_CTRL: 'QC_CTRL'
};

export type SampleType = (typeof SampleType)[keyof typeof SampleType]


export const SterilityMethod: {
  DIRECT_INOCULATION: 'DIRECT_INOCULATION',
  MEMBRANE_FILTRATION: 'MEMBRANE_FILTRATION'
};

export type SterilityMethod = (typeof SterilityMethod)[keyof typeof SterilityMethod]


export const SterilityMedia: {
  FTM: 'FTM',
  SCDM: 'SCDM'
};

export type SterilityMedia = (typeof SterilityMedia)[keyof typeof SterilityMedia]


export const SterilityOutcome: {
  PASS: 'PASS',
  CONTAMINATED: 'CONTAMINATED'
};

export type SterilityOutcome = (typeof SterilityOutcome)[keyof typeof SterilityOutcome]

}

export type QCStatus = $Enums.QCStatus

export const QCStatus: typeof $Enums.QCStatus

export type SampleType = $Enums.SampleType

export const SampleType: typeof $Enums.SampleType

export type SterilityMethod = $Enums.SterilityMethod

export const SterilityMethod: typeof $Enums.SterilityMethod

export type SterilityMedia = $Enums.SterilityMedia

export const SterilityMedia: typeof $Enums.SterilityMedia

export type SterilityOutcome = $Enums.SterilityOutcome

export const SterilityOutcome: typeof $Enums.SterilityOutcome

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Batches
 * const batches = await prisma.batch.findMany()
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
   * // Fetch zero or more Batches
   * const batches = await prisma.batch.findMany()
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
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dDPCRRun`: Exposes CRUD operations for the **DDPCRRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DDPCRRuns
    * const dDPCRRuns = await prisma.dDPCRRun.findMany()
    * ```
    */
  get dDPCRRun(): Prisma.DDPCRRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sterilityResult`: Exposes CRUD operations for the **SterilityResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SterilityResults
    * const sterilityResults = await prisma.sterilityResult.findMany()
    * ```
    */
  get sterilityResult(): Prisma.SterilityResultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Batch: 'Batch',
    DDPCRRun: 'DDPCRRun',
    SterilityResult: 'SterilityResult'
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
      modelProps: "batch" | "dDPCRRun" | "sterilityResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      DDPCRRun: {
        payload: Prisma.$DDPCRRunPayload<ExtArgs>
        fields: Prisma.DDPCRRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DDPCRRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DDPCRRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          findFirst: {
            args: Prisma.DDPCRRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DDPCRRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          findMany: {
            args: Prisma.DDPCRRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>[]
          }
          create: {
            args: Prisma.DDPCRRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          createMany: {
            args: Prisma.DDPCRRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DDPCRRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>[]
          }
          delete: {
            args: Prisma.DDPCRRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          update: {
            args: Prisma.DDPCRRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          deleteMany: {
            args: Prisma.DDPCRRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DDPCRRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DDPCRRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>[]
          }
          upsert: {
            args: Prisma.DDPCRRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DDPCRRunPayload>
          }
          aggregate: {
            args: Prisma.DDPCRRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDDPCRRun>
          }
          groupBy: {
            args: Prisma.DDPCRRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<DDPCRRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.DDPCRRunCountArgs<ExtArgs>
            result: $Utils.Optional<DDPCRRunCountAggregateOutputType> | number
          }
        }
      }
      SterilityResult: {
        payload: Prisma.$SterilityResultPayload<ExtArgs>
        fields: Prisma.SterilityResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SterilityResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SterilityResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          findFirst: {
            args: Prisma.SterilityResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SterilityResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          findMany: {
            args: Prisma.SterilityResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>[]
          }
          create: {
            args: Prisma.SterilityResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          createMany: {
            args: Prisma.SterilityResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SterilityResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>[]
          }
          delete: {
            args: Prisma.SterilityResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          update: {
            args: Prisma.SterilityResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          deleteMany: {
            args: Prisma.SterilityResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SterilityResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SterilityResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>[]
          }
          upsert: {
            args: Prisma.SterilityResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SterilityResultPayload>
          }
          aggregate: {
            args: Prisma.SterilityResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSterilityResult>
          }
          groupBy: {
            args: Prisma.SterilityResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<SterilityResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.SterilityResultCountArgs<ExtArgs>
            result: $Utils.Optional<SterilityResultCountAggregateOutputType> | number
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
    batch?: BatchOmit
    dDPCRRun?: DDPCRRunOmit
    sterilityResult?: SterilityResultOmit
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
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    ddpcrRuns: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ddpcrRuns?: boolean | BatchCountOutputTypeCountDdpcrRunsArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountDdpcrRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DDPCRRunWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    label: string | null
    status: $Enums.QCStatus | null
    createdAt: Date | null
    summaryMarkdown: string | null
    summarisedAt: Date | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    label: string | null
    status: $Enums.QCStatus | null
    createdAt: Date | null
    summaryMarkdown: string | null
    summarisedAt: Date | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    label: number
    status: number
    createdAt: number
    summaryMarkdown: number
    summarisedAt: number
    _all: number
  }


  export type BatchMinAggregateInputType = {
    id?: true
    label?: true
    status?: true
    createdAt?: true
    summaryMarkdown?: true
    summarisedAt?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    label?: true
    status?: true
    createdAt?: true
    summaryMarkdown?: true
    summarisedAt?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    label?: true
    status?: true
    createdAt?: true
    summaryMarkdown?: true
    summarisedAt?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    label: string
    status: $Enums.QCStatus
    createdAt: Date
    summaryMarkdown: string | null
    summarisedAt: Date | null
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    status?: boolean
    createdAt?: boolean
    summaryMarkdown?: boolean
    summarisedAt?: boolean
    ddpcrRuns?: boolean | Batch$ddpcrRunsArgs<ExtArgs>
    sterilityResult?: boolean | Batch$sterilityResultArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    status?: boolean
    createdAt?: boolean
    summaryMarkdown?: boolean
    summarisedAt?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    status?: boolean
    createdAt?: boolean
    summaryMarkdown?: boolean
    summarisedAt?: boolean
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    label?: boolean
    status?: boolean
    createdAt?: boolean
    summaryMarkdown?: boolean
    summarisedAt?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "status" | "createdAt" | "summaryMarkdown" | "summarisedAt", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ddpcrRuns?: boolean | Batch$ddpcrRunsArgs<ExtArgs>
    sterilityResult?: boolean | Batch$sterilityResultArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      ddpcrRuns: Prisma.$DDPCRRunPayload<ExtArgs>[]
      sterilityResult: Prisma.$SterilityResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      status: $Enums.QCStatus
      createdAt: Date
      summaryMarkdown: string | null
      summarisedAt: Date | null
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ddpcrRuns<T extends Batch$ddpcrRunsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$ddpcrRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sterilityResult<T extends Batch$sterilityResultArgs<ExtArgs> = {}>(args?: Subset<T, Batch$sterilityResultArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly label: FieldRef<"Batch", 'String'>
    readonly status: FieldRef<"Batch", 'QCStatus'>
    readonly createdAt: FieldRef<"Batch", 'DateTime'>
    readonly summaryMarkdown: FieldRef<"Batch", 'String'>
    readonly summarisedAt: FieldRef<"Batch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.ddpcrRuns
   */
  export type Batch$ddpcrRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    where?: DDPCRRunWhereInput
    orderBy?: DDPCRRunOrderByWithRelationInput | DDPCRRunOrderByWithRelationInput[]
    cursor?: DDPCRRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DDPCRRunScalarFieldEnum | DDPCRRunScalarFieldEnum[]
  }

  /**
   * Batch.sterilityResult
   */
  export type Batch$sterilityResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    where?: SterilityResultWhereInput
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model DDPCRRun
   */

  export type AggregateDDPCRRun = {
    _count: DDPCRRunCountAggregateOutputType | null
    _avg: DDPCRRunAvgAggregateOutputType | null
    _sum: DDPCRRunSumAggregateOutputType | null
    _min: DDPCRRunMinAggregateOutputType | null
    _max: DDPCRRunMaxAggregateOutputType | null
  }

  export type DDPCRRunAvgAggregateOutputType = {
    positives: number | null
    negatives: number | null
    totalDroplets: number | null
    copiesPerUl: number | null
  }

  export type DDPCRRunSumAggregateOutputType = {
    positives: number | null
    negatives: number | null
    totalDroplets: number | null
    copiesPerUl: number | null
  }

  export type DDPCRRunMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    sampleLabel: string | null
    target: string | null
    kit: string | null
    sampleType: $Enums.SampleType | null
    templateUsed: boolean | null
    enzymeAdded: boolean | null
    spikeIn: string | null
    positives: number | null
    negatives: number | null
    totalDroplets: number | null
    copiesPerUl: number | null
    pass: boolean | null
    runAt: Date | null
  }

  export type DDPCRRunMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    sampleLabel: string | null
    target: string | null
    kit: string | null
    sampleType: $Enums.SampleType | null
    templateUsed: boolean | null
    enzymeAdded: boolean | null
    spikeIn: string | null
    positives: number | null
    negatives: number | null
    totalDroplets: number | null
    copiesPerUl: number | null
    pass: boolean | null
    runAt: Date | null
  }

  export type DDPCRRunCountAggregateOutputType = {
    id: number
    batchId: number
    sampleLabel: number
    target: number
    kit: number
    sampleType: number
    templateUsed: number
    enzymeAdded: number
    spikeIn: number
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: number
    runAt: number
    _all: number
  }


  export type DDPCRRunAvgAggregateInputType = {
    positives?: true
    negatives?: true
    totalDroplets?: true
    copiesPerUl?: true
  }

  export type DDPCRRunSumAggregateInputType = {
    positives?: true
    negatives?: true
    totalDroplets?: true
    copiesPerUl?: true
  }

  export type DDPCRRunMinAggregateInputType = {
    id?: true
    batchId?: true
    sampleLabel?: true
    target?: true
    kit?: true
    sampleType?: true
    templateUsed?: true
    enzymeAdded?: true
    spikeIn?: true
    positives?: true
    negatives?: true
    totalDroplets?: true
    copiesPerUl?: true
    pass?: true
    runAt?: true
  }

  export type DDPCRRunMaxAggregateInputType = {
    id?: true
    batchId?: true
    sampleLabel?: true
    target?: true
    kit?: true
    sampleType?: true
    templateUsed?: true
    enzymeAdded?: true
    spikeIn?: true
    positives?: true
    negatives?: true
    totalDroplets?: true
    copiesPerUl?: true
    pass?: true
    runAt?: true
  }

  export type DDPCRRunCountAggregateInputType = {
    id?: true
    batchId?: true
    sampleLabel?: true
    target?: true
    kit?: true
    sampleType?: true
    templateUsed?: true
    enzymeAdded?: true
    spikeIn?: true
    positives?: true
    negatives?: true
    totalDroplets?: true
    copiesPerUl?: true
    pass?: true
    runAt?: true
    _all?: true
  }

  export type DDPCRRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DDPCRRun to aggregate.
     */
    where?: DDPCRRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DDPCRRuns to fetch.
     */
    orderBy?: DDPCRRunOrderByWithRelationInput | DDPCRRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DDPCRRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DDPCRRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DDPCRRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DDPCRRuns
    **/
    _count?: true | DDPCRRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DDPCRRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DDPCRRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DDPCRRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DDPCRRunMaxAggregateInputType
  }

  export type GetDDPCRRunAggregateType<T extends DDPCRRunAggregateArgs> = {
        [P in keyof T & keyof AggregateDDPCRRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDDPCRRun[P]>
      : GetScalarType<T[P], AggregateDDPCRRun[P]>
  }




  export type DDPCRRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DDPCRRunWhereInput
    orderBy?: DDPCRRunOrderByWithAggregationInput | DDPCRRunOrderByWithAggregationInput[]
    by: DDPCRRunScalarFieldEnum[] | DDPCRRunScalarFieldEnum
    having?: DDPCRRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DDPCRRunCountAggregateInputType | true
    _avg?: DDPCRRunAvgAggregateInputType
    _sum?: DDPCRRunSumAggregateInputType
    _min?: DDPCRRunMinAggregateInputType
    _max?: DDPCRRunMaxAggregateInputType
  }

  export type DDPCRRunGroupByOutputType = {
    id: string
    batchId: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date
    _count: DDPCRRunCountAggregateOutputType | null
    _avg: DDPCRRunAvgAggregateOutputType | null
    _sum: DDPCRRunSumAggregateOutputType | null
    _min: DDPCRRunMinAggregateOutputType | null
    _max: DDPCRRunMaxAggregateOutputType | null
  }

  type GetDDPCRRunGroupByPayload<T extends DDPCRRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DDPCRRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DDPCRRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DDPCRRunGroupByOutputType[P]>
            : GetScalarType<T[P], DDPCRRunGroupByOutputType[P]>
        }
      >
    >


  export type DDPCRRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    sampleLabel?: boolean
    target?: boolean
    kit?: boolean
    sampleType?: boolean
    templateUsed?: boolean
    enzymeAdded?: boolean
    spikeIn?: boolean
    positives?: boolean
    negatives?: boolean
    totalDroplets?: boolean
    copiesPerUl?: boolean
    pass?: boolean
    runAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dDPCRRun"]>

  export type DDPCRRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    sampleLabel?: boolean
    target?: boolean
    kit?: boolean
    sampleType?: boolean
    templateUsed?: boolean
    enzymeAdded?: boolean
    spikeIn?: boolean
    positives?: boolean
    negatives?: boolean
    totalDroplets?: boolean
    copiesPerUl?: boolean
    pass?: boolean
    runAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dDPCRRun"]>

  export type DDPCRRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    sampleLabel?: boolean
    target?: boolean
    kit?: boolean
    sampleType?: boolean
    templateUsed?: boolean
    enzymeAdded?: boolean
    spikeIn?: boolean
    positives?: boolean
    negatives?: boolean
    totalDroplets?: boolean
    copiesPerUl?: boolean
    pass?: boolean
    runAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dDPCRRun"]>

  export type DDPCRRunSelectScalar = {
    id?: boolean
    batchId?: boolean
    sampleLabel?: boolean
    target?: boolean
    kit?: boolean
    sampleType?: boolean
    templateUsed?: boolean
    enzymeAdded?: boolean
    spikeIn?: boolean
    positives?: boolean
    negatives?: boolean
    totalDroplets?: boolean
    copiesPerUl?: boolean
    pass?: boolean
    runAt?: boolean
  }

  export type DDPCRRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "sampleLabel" | "target" | "kit" | "sampleType" | "templateUsed" | "enzymeAdded" | "spikeIn" | "positives" | "negatives" | "totalDroplets" | "copiesPerUl" | "pass" | "runAt", ExtArgs["result"]["dDPCRRun"]>
  export type DDPCRRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type DDPCRRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type DDPCRRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }

  export type $DDPCRRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DDPCRRun"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      sampleLabel: string
      target: string
      kit: string
      sampleType: $Enums.SampleType
      templateUsed: boolean
      enzymeAdded: boolean
      spikeIn: string | null
      positives: number
      negatives: number
      totalDroplets: number
      copiesPerUl: number
      pass: boolean
      runAt: Date
    }, ExtArgs["result"]["dDPCRRun"]>
    composites: {}
  }

  type DDPCRRunGetPayload<S extends boolean | null | undefined | DDPCRRunDefaultArgs> = $Result.GetResult<Prisma.$DDPCRRunPayload, S>

  type DDPCRRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DDPCRRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DDPCRRunCountAggregateInputType | true
    }

  export interface DDPCRRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DDPCRRun'], meta: { name: 'DDPCRRun' } }
    /**
     * Find zero or one DDPCRRun that matches the filter.
     * @param {DDPCRRunFindUniqueArgs} args - Arguments to find a DDPCRRun
     * @example
     * // Get one DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DDPCRRunFindUniqueArgs>(args: SelectSubset<T, DDPCRRunFindUniqueArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DDPCRRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DDPCRRunFindUniqueOrThrowArgs} args - Arguments to find a DDPCRRun
     * @example
     * // Get one DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DDPCRRunFindUniqueOrThrowArgs>(args: SelectSubset<T, DDPCRRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DDPCRRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunFindFirstArgs} args - Arguments to find a DDPCRRun
     * @example
     * // Get one DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DDPCRRunFindFirstArgs>(args?: SelectSubset<T, DDPCRRunFindFirstArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DDPCRRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunFindFirstOrThrowArgs} args - Arguments to find a DDPCRRun
     * @example
     * // Get one DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DDPCRRunFindFirstOrThrowArgs>(args?: SelectSubset<T, DDPCRRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DDPCRRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DDPCRRuns
     * const dDPCRRuns = await prisma.dDPCRRun.findMany()
     * 
     * // Get first 10 DDPCRRuns
     * const dDPCRRuns = await prisma.dDPCRRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dDPCRRunWithIdOnly = await prisma.dDPCRRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DDPCRRunFindManyArgs>(args?: SelectSubset<T, DDPCRRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DDPCRRun.
     * @param {DDPCRRunCreateArgs} args - Arguments to create a DDPCRRun.
     * @example
     * // Create one DDPCRRun
     * const DDPCRRun = await prisma.dDPCRRun.create({
     *   data: {
     *     // ... data to create a DDPCRRun
     *   }
     * })
     * 
     */
    create<T extends DDPCRRunCreateArgs>(args: SelectSubset<T, DDPCRRunCreateArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DDPCRRuns.
     * @param {DDPCRRunCreateManyArgs} args - Arguments to create many DDPCRRuns.
     * @example
     * // Create many DDPCRRuns
     * const dDPCRRun = await prisma.dDPCRRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DDPCRRunCreateManyArgs>(args?: SelectSubset<T, DDPCRRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DDPCRRuns and returns the data saved in the database.
     * @param {DDPCRRunCreateManyAndReturnArgs} args - Arguments to create many DDPCRRuns.
     * @example
     * // Create many DDPCRRuns
     * const dDPCRRun = await prisma.dDPCRRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DDPCRRuns and only return the `id`
     * const dDPCRRunWithIdOnly = await prisma.dDPCRRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DDPCRRunCreateManyAndReturnArgs>(args?: SelectSubset<T, DDPCRRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DDPCRRun.
     * @param {DDPCRRunDeleteArgs} args - Arguments to delete one DDPCRRun.
     * @example
     * // Delete one DDPCRRun
     * const DDPCRRun = await prisma.dDPCRRun.delete({
     *   where: {
     *     // ... filter to delete one DDPCRRun
     *   }
     * })
     * 
     */
    delete<T extends DDPCRRunDeleteArgs>(args: SelectSubset<T, DDPCRRunDeleteArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DDPCRRun.
     * @param {DDPCRRunUpdateArgs} args - Arguments to update one DDPCRRun.
     * @example
     * // Update one DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DDPCRRunUpdateArgs>(args: SelectSubset<T, DDPCRRunUpdateArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DDPCRRuns.
     * @param {DDPCRRunDeleteManyArgs} args - Arguments to filter DDPCRRuns to delete.
     * @example
     * // Delete a few DDPCRRuns
     * const { count } = await prisma.dDPCRRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DDPCRRunDeleteManyArgs>(args?: SelectSubset<T, DDPCRRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DDPCRRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DDPCRRuns
     * const dDPCRRun = await prisma.dDPCRRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DDPCRRunUpdateManyArgs>(args: SelectSubset<T, DDPCRRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DDPCRRuns and returns the data updated in the database.
     * @param {DDPCRRunUpdateManyAndReturnArgs} args - Arguments to update many DDPCRRuns.
     * @example
     * // Update many DDPCRRuns
     * const dDPCRRun = await prisma.dDPCRRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DDPCRRuns and only return the `id`
     * const dDPCRRunWithIdOnly = await prisma.dDPCRRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends DDPCRRunUpdateManyAndReturnArgs>(args: SelectSubset<T, DDPCRRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DDPCRRun.
     * @param {DDPCRRunUpsertArgs} args - Arguments to update or create a DDPCRRun.
     * @example
     * // Update or create a DDPCRRun
     * const dDPCRRun = await prisma.dDPCRRun.upsert({
     *   create: {
     *     // ... data to create a DDPCRRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DDPCRRun we want to update
     *   }
     * })
     */
    upsert<T extends DDPCRRunUpsertArgs>(args: SelectSubset<T, DDPCRRunUpsertArgs<ExtArgs>>): Prisma__DDPCRRunClient<$Result.GetResult<Prisma.$DDPCRRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DDPCRRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunCountArgs} args - Arguments to filter DDPCRRuns to count.
     * @example
     * // Count the number of DDPCRRuns
     * const count = await prisma.dDPCRRun.count({
     *   where: {
     *     // ... the filter for the DDPCRRuns we want to count
     *   }
     * })
    **/
    count<T extends DDPCRRunCountArgs>(
      args?: Subset<T, DDPCRRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DDPCRRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DDPCRRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DDPCRRunAggregateArgs>(args: Subset<T, DDPCRRunAggregateArgs>): Prisma.PrismaPromise<GetDDPCRRunAggregateType<T>>

    /**
     * Group by DDPCRRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DDPCRRunGroupByArgs} args - Group by arguments.
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
      T extends DDPCRRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DDPCRRunGroupByArgs['orderBy'] }
        : { orderBy?: DDPCRRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DDPCRRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDDPCRRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DDPCRRun model
   */
  readonly fields: DDPCRRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DDPCRRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DDPCRRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DDPCRRun model
   */
  interface DDPCRRunFieldRefs {
    readonly id: FieldRef<"DDPCRRun", 'String'>
    readonly batchId: FieldRef<"DDPCRRun", 'String'>
    readonly sampleLabel: FieldRef<"DDPCRRun", 'String'>
    readonly target: FieldRef<"DDPCRRun", 'String'>
    readonly kit: FieldRef<"DDPCRRun", 'String'>
    readonly sampleType: FieldRef<"DDPCRRun", 'SampleType'>
    readonly templateUsed: FieldRef<"DDPCRRun", 'Boolean'>
    readonly enzymeAdded: FieldRef<"DDPCRRun", 'Boolean'>
    readonly spikeIn: FieldRef<"DDPCRRun", 'String'>
    readonly positives: FieldRef<"DDPCRRun", 'Int'>
    readonly negatives: FieldRef<"DDPCRRun", 'Int'>
    readonly totalDroplets: FieldRef<"DDPCRRun", 'Int'>
    readonly copiesPerUl: FieldRef<"DDPCRRun", 'Float'>
    readonly pass: FieldRef<"DDPCRRun", 'Boolean'>
    readonly runAt: FieldRef<"DDPCRRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DDPCRRun findUnique
   */
  export type DDPCRRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter, which DDPCRRun to fetch.
     */
    where: DDPCRRunWhereUniqueInput
  }

  /**
   * DDPCRRun findUniqueOrThrow
   */
  export type DDPCRRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter, which DDPCRRun to fetch.
     */
    where: DDPCRRunWhereUniqueInput
  }

  /**
   * DDPCRRun findFirst
   */
  export type DDPCRRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter, which DDPCRRun to fetch.
     */
    where?: DDPCRRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DDPCRRuns to fetch.
     */
    orderBy?: DDPCRRunOrderByWithRelationInput | DDPCRRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DDPCRRuns.
     */
    cursor?: DDPCRRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DDPCRRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DDPCRRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DDPCRRuns.
     */
    distinct?: DDPCRRunScalarFieldEnum | DDPCRRunScalarFieldEnum[]
  }

  /**
   * DDPCRRun findFirstOrThrow
   */
  export type DDPCRRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter, which DDPCRRun to fetch.
     */
    where?: DDPCRRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DDPCRRuns to fetch.
     */
    orderBy?: DDPCRRunOrderByWithRelationInput | DDPCRRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DDPCRRuns.
     */
    cursor?: DDPCRRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DDPCRRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DDPCRRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DDPCRRuns.
     */
    distinct?: DDPCRRunScalarFieldEnum | DDPCRRunScalarFieldEnum[]
  }

  /**
   * DDPCRRun findMany
   */
  export type DDPCRRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter, which DDPCRRuns to fetch.
     */
    where?: DDPCRRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DDPCRRuns to fetch.
     */
    orderBy?: DDPCRRunOrderByWithRelationInput | DDPCRRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DDPCRRuns.
     */
    cursor?: DDPCRRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DDPCRRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DDPCRRuns.
     */
    skip?: number
    distinct?: DDPCRRunScalarFieldEnum | DDPCRRunScalarFieldEnum[]
  }

  /**
   * DDPCRRun create
   */
  export type DDPCRRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * The data needed to create a DDPCRRun.
     */
    data: XOR<DDPCRRunCreateInput, DDPCRRunUncheckedCreateInput>
  }

  /**
   * DDPCRRun createMany
   */
  export type DDPCRRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DDPCRRuns.
     */
    data: DDPCRRunCreateManyInput | DDPCRRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DDPCRRun createManyAndReturn
   */
  export type DDPCRRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * The data used to create many DDPCRRuns.
     */
    data: DDPCRRunCreateManyInput | DDPCRRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DDPCRRun update
   */
  export type DDPCRRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * The data needed to update a DDPCRRun.
     */
    data: XOR<DDPCRRunUpdateInput, DDPCRRunUncheckedUpdateInput>
    /**
     * Choose, which DDPCRRun to update.
     */
    where: DDPCRRunWhereUniqueInput
  }

  /**
   * DDPCRRun updateMany
   */
  export type DDPCRRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DDPCRRuns.
     */
    data: XOR<DDPCRRunUpdateManyMutationInput, DDPCRRunUncheckedUpdateManyInput>
    /**
     * Filter which DDPCRRuns to update
     */
    where?: DDPCRRunWhereInput
    /**
     * Limit how many DDPCRRuns to update.
     */
    limit?: number
  }

  /**
   * DDPCRRun updateManyAndReturn
   */
  export type DDPCRRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * The data used to update DDPCRRuns.
     */
    data: XOR<DDPCRRunUpdateManyMutationInput, DDPCRRunUncheckedUpdateManyInput>
    /**
     * Filter which DDPCRRuns to update
     */
    where?: DDPCRRunWhereInput
    /**
     * Limit how many DDPCRRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DDPCRRun upsert
   */
  export type DDPCRRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * The filter to search for the DDPCRRun to update in case it exists.
     */
    where: DDPCRRunWhereUniqueInput
    /**
     * In case the DDPCRRun found by the `where` argument doesn't exist, create a new DDPCRRun with this data.
     */
    create: XOR<DDPCRRunCreateInput, DDPCRRunUncheckedCreateInput>
    /**
     * In case the DDPCRRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DDPCRRunUpdateInput, DDPCRRunUncheckedUpdateInput>
  }

  /**
   * DDPCRRun delete
   */
  export type DDPCRRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
    /**
     * Filter which DDPCRRun to delete.
     */
    where: DDPCRRunWhereUniqueInput
  }

  /**
   * DDPCRRun deleteMany
   */
  export type DDPCRRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DDPCRRuns to delete
     */
    where?: DDPCRRunWhereInput
    /**
     * Limit how many DDPCRRuns to delete.
     */
    limit?: number
  }

  /**
   * DDPCRRun without action
   */
  export type DDPCRRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DDPCRRun
     */
    select?: DDPCRRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DDPCRRun
     */
    omit?: DDPCRRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DDPCRRunInclude<ExtArgs> | null
  }


  /**
   * Model SterilityResult
   */

  export type AggregateSterilityResult = {
    _count: SterilityResultCountAggregateOutputType | null
    _avg: SterilityResultAvgAggregateOutputType | null
    _sum: SterilityResultSumAggregateOutputType | null
    _min: SterilityResultMinAggregateOutputType | null
    _max: SterilityResultMaxAggregateOutputType | null
  }

  export type SterilityResultAvgAggregateOutputType = {
    incubationHours: number | null
  }

  export type SterilityResultSumAggregateOutputType = {
    incubationHours: number | null
  }

  export type SterilityResultMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    method: $Enums.SterilityMethod | null
    media: $Enums.SterilityMedia | null
    incubationHours: number | null
    outcome: $Enums.SterilityOutcome | null
    observedAt: Date | null
  }

  export type SterilityResultMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    method: $Enums.SterilityMethod | null
    media: $Enums.SterilityMedia | null
    incubationHours: number | null
    outcome: $Enums.SterilityOutcome | null
    observedAt: Date | null
  }

  export type SterilityResultCountAggregateOutputType = {
    id: number
    batchId: number
    method: number
    media: number
    incubationHours: number
    outcome: number
    observedAt: number
    _all: number
  }


  export type SterilityResultAvgAggregateInputType = {
    incubationHours?: true
  }

  export type SterilityResultSumAggregateInputType = {
    incubationHours?: true
  }

  export type SterilityResultMinAggregateInputType = {
    id?: true
    batchId?: true
    method?: true
    media?: true
    incubationHours?: true
    outcome?: true
    observedAt?: true
  }

  export type SterilityResultMaxAggregateInputType = {
    id?: true
    batchId?: true
    method?: true
    media?: true
    incubationHours?: true
    outcome?: true
    observedAt?: true
  }

  export type SterilityResultCountAggregateInputType = {
    id?: true
    batchId?: true
    method?: true
    media?: true
    incubationHours?: true
    outcome?: true
    observedAt?: true
    _all?: true
  }

  export type SterilityResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilityResult to aggregate.
     */
    where?: SterilityResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilityResults to fetch.
     */
    orderBy?: SterilityResultOrderByWithRelationInput | SterilityResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SterilityResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SterilityResults
    **/
    _count?: true | SterilityResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SterilityResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SterilityResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SterilityResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SterilityResultMaxAggregateInputType
  }

  export type GetSterilityResultAggregateType<T extends SterilityResultAggregateArgs> = {
        [P in keyof T & keyof AggregateSterilityResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSterilityResult[P]>
      : GetScalarType<T[P], AggregateSterilityResult[P]>
  }




  export type SterilityResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SterilityResultWhereInput
    orderBy?: SterilityResultOrderByWithAggregationInput | SterilityResultOrderByWithAggregationInput[]
    by: SterilityResultScalarFieldEnum[] | SterilityResultScalarFieldEnum
    having?: SterilityResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SterilityResultCountAggregateInputType | true
    _avg?: SterilityResultAvgAggregateInputType
    _sum?: SterilityResultSumAggregateInputType
    _min?: SterilityResultMinAggregateInputType
    _max?: SterilityResultMaxAggregateInputType
  }

  export type SterilityResultGroupByOutputType = {
    id: string
    batchId: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date
    _count: SterilityResultCountAggregateOutputType | null
    _avg: SterilityResultAvgAggregateOutputType | null
    _sum: SterilityResultSumAggregateOutputType | null
    _min: SterilityResultMinAggregateOutputType | null
    _max: SterilityResultMaxAggregateOutputType | null
  }

  type GetSterilityResultGroupByPayload<T extends SterilityResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SterilityResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SterilityResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SterilityResultGroupByOutputType[P]>
            : GetScalarType<T[P], SterilityResultGroupByOutputType[P]>
        }
      >
    >


  export type SterilityResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    method?: boolean
    media?: boolean
    incubationHours?: boolean
    outcome?: boolean
    observedAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sterilityResult"]>

  export type SterilityResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    method?: boolean
    media?: boolean
    incubationHours?: boolean
    outcome?: boolean
    observedAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sterilityResult"]>

  export type SterilityResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    method?: boolean
    media?: boolean
    incubationHours?: boolean
    outcome?: boolean
    observedAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sterilityResult"]>

  export type SterilityResultSelectScalar = {
    id?: boolean
    batchId?: boolean
    method?: boolean
    media?: boolean
    incubationHours?: boolean
    outcome?: boolean
    observedAt?: boolean
  }

  export type SterilityResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "method" | "media" | "incubationHours" | "outcome" | "observedAt", ExtArgs["result"]["sterilityResult"]>
  export type SterilityResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type SterilityResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type SterilityResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }

  export type $SterilityResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SterilityResult"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      method: $Enums.SterilityMethod
      media: $Enums.SterilityMedia
      incubationHours: number
      outcome: $Enums.SterilityOutcome
      observedAt: Date
    }, ExtArgs["result"]["sterilityResult"]>
    composites: {}
  }

  type SterilityResultGetPayload<S extends boolean | null | undefined | SterilityResultDefaultArgs> = $Result.GetResult<Prisma.$SterilityResultPayload, S>

  type SterilityResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SterilityResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SterilityResultCountAggregateInputType | true
    }

  export interface SterilityResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SterilityResult'], meta: { name: 'SterilityResult' } }
    /**
     * Find zero or one SterilityResult that matches the filter.
     * @param {SterilityResultFindUniqueArgs} args - Arguments to find a SterilityResult
     * @example
     * // Get one SterilityResult
     * const sterilityResult = await prisma.sterilityResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SterilityResultFindUniqueArgs>(args: SelectSubset<T, SterilityResultFindUniqueArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SterilityResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SterilityResultFindUniqueOrThrowArgs} args - Arguments to find a SterilityResult
     * @example
     * // Get one SterilityResult
     * const sterilityResult = await prisma.sterilityResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SterilityResultFindUniqueOrThrowArgs>(args: SelectSubset<T, SterilityResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilityResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultFindFirstArgs} args - Arguments to find a SterilityResult
     * @example
     * // Get one SterilityResult
     * const sterilityResult = await prisma.sterilityResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SterilityResultFindFirstArgs>(args?: SelectSubset<T, SterilityResultFindFirstArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SterilityResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultFindFirstOrThrowArgs} args - Arguments to find a SterilityResult
     * @example
     * // Get one SterilityResult
     * const sterilityResult = await prisma.sterilityResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SterilityResultFindFirstOrThrowArgs>(args?: SelectSubset<T, SterilityResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SterilityResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SterilityResults
     * const sterilityResults = await prisma.sterilityResult.findMany()
     * 
     * // Get first 10 SterilityResults
     * const sterilityResults = await prisma.sterilityResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sterilityResultWithIdOnly = await prisma.sterilityResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SterilityResultFindManyArgs>(args?: SelectSubset<T, SterilityResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SterilityResult.
     * @param {SterilityResultCreateArgs} args - Arguments to create a SterilityResult.
     * @example
     * // Create one SterilityResult
     * const SterilityResult = await prisma.sterilityResult.create({
     *   data: {
     *     // ... data to create a SterilityResult
     *   }
     * })
     * 
     */
    create<T extends SterilityResultCreateArgs>(args: SelectSubset<T, SterilityResultCreateArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SterilityResults.
     * @param {SterilityResultCreateManyArgs} args - Arguments to create many SterilityResults.
     * @example
     * // Create many SterilityResults
     * const sterilityResult = await prisma.sterilityResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SterilityResultCreateManyArgs>(args?: SelectSubset<T, SterilityResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SterilityResults and returns the data saved in the database.
     * @param {SterilityResultCreateManyAndReturnArgs} args - Arguments to create many SterilityResults.
     * @example
     * // Create many SterilityResults
     * const sterilityResult = await prisma.sterilityResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SterilityResults and only return the `id`
     * const sterilityResultWithIdOnly = await prisma.sterilityResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SterilityResultCreateManyAndReturnArgs>(args?: SelectSubset<T, SterilityResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SterilityResult.
     * @param {SterilityResultDeleteArgs} args - Arguments to delete one SterilityResult.
     * @example
     * // Delete one SterilityResult
     * const SterilityResult = await prisma.sterilityResult.delete({
     *   where: {
     *     // ... filter to delete one SterilityResult
     *   }
     * })
     * 
     */
    delete<T extends SterilityResultDeleteArgs>(args: SelectSubset<T, SterilityResultDeleteArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SterilityResult.
     * @param {SterilityResultUpdateArgs} args - Arguments to update one SterilityResult.
     * @example
     * // Update one SterilityResult
     * const sterilityResult = await prisma.sterilityResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SterilityResultUpdateArgs>(args: SelectSubset<T, SterilityResultUpdateArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SterilityResults.
     * @param {SterilityResultDeleteManyArgs} args - Arguments to filter SterilityResults to delete.
     * @example
     * // Delete a few SterilityResults
     * const { count } = await prisma.sterilityResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SterilityResultDeleteManyArgs>(args?: SelectSubset<T, SterilityResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SterilityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SterilityResults
     * const sterilityResult = await prisma.sterilityResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SterilityResultUpdateManyArgs>(args: SelectSubset<T, SterilityResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SterilityResults and returns the data updated in the database.
     * @param {SterilityResultUpdateManyAndReturnArgs} args - Arguments to update many SterilityResults.
     * @example
     * // Update many SterilityResults
     * const sterilityResult = await prisma.sterilityResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SterilityResults and only return the `id`
     * const sterilityResultWithIdOnly = await prisma.sterilityResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends SterilityResultUpdateManyAndReturnArgs>(args: SelectSubset<T, SterilityResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SterilityResult.
     * @param {SterilityResultUpsertArgs} args - Arguments to update or create a SterilityResult.
     * @example
     * // Update or create a SterilityResult
     * const sterilityResult = await prisma.sterilityResult.upsert({
     *   create: {
     *     // ... data to create a SterilityResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SterilityResult we want to update
     *   }
     * })
     */
    upsert<T extends SterilityResultUpsertArgs>(args: SelectSubset<T, SterilityResultUpsertArgs<ExtArgs>>): Prisma__SterilityResultClient<$Result.GetResult<Prisma.$SterilityResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SterilityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultCountArgs} args - Arguments to filter SterilityResults to count.
     * @example
     * // Count the number of SterilityResults
     * const count = await prisma.sterilityResult.count({
     *   where: {
     *     // ... the filter for the SterilityResults we want to count
     *   }
     * })
    **/
    count<T extends SterilityResultCountArgs>(
      args?: Subset<T, SterilityResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SterilityResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SterilityResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SterilityResultAggregateArgs>(args: Subset<T, SterilityResultAggregateArgs>): Prisma.PrismaPromise<GetSterilityResultAggregateType<T>>

    /**
     * Group by SterilityResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SterilityResultGroupByArgs} args - Group by arguments.
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
      T extends SterilityResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SterilityResultGroupByArgs['orderBy'] }
        : { orderBy?: SterilityResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SterilityResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSterilityResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SterilityResult model
   */
  readonly fields: SterilityResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SterilityResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SterilityResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SterilityResult model
   */
  interface SterilityResultFieldRefs {
    readonly id: FieldRef<"SterilityResult", 'String'>
    readonly batchId: FieldRef<"SterilityResult", 'String'>
    readonly method: FieldRef<"SterilityResult", 'SterilityMethod'>
    readonly media: FieldRef<"SterilityResult", 'SterilityMedia'>
    readonly incubationHours: FieldRef<"SterilityResult", 'Int'>
    readonly outcome: FieldRef<"SterilityResult", 'SterilityOutcome'>
    readonly observedAt: FieldRef<"SterilityResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SterilityResult findUnique
   */
  export type SterilityResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter, which SterilityResult to fetch.
     */
    where: SterilityResultWhereUniqueInput
  }

  /**
   * SterilityResult findUniqueOrThrow
   */
  export type SterilityResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter, which SterilityResult to fetch.
     */
    where: SterilityResultWhereUniqueInput
  }

  /**
   * SterilityResult findFirst
   */
  export type SterilityResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter, which SterilityResult to fetch.
     */
    where?: SterilityResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilityResults to fetch.
     */
    orderBy?: SterilityResultOrderByWithRelationInput | SterilityResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilityResults.
     */
    cursor?: SterilityResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilityResults.
     */
    distinct?: SterilityResultScalarFieldEnum | SterilityResultScalarFieldEnum[]
  }

  /**
   * SterilityResult findFirstOrThrow
   */
  export type SterilityResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter, which SterilityResult to fetch.
     */
    where?: SterilityResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilityResults to fetch.
     */
    orderBy?: SterilityResultOrderByWithRelationInput | SterilityResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SterilityResults.
     */
    cursor?: SterilityResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SterilityResults.
     */
    distinct?: SterilityResultScalarFieldEnum | SterilityResultScalarFieldEnum[]
  }

  /**
   * SterilityResult findMany
   */
  export type SterilityResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter, which SterilityResults to fetch.
     */
    where?: SterilityResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SterilityResults to fetch.
     */
    orderBy?: SterilityResultOrderByWithRelationInput | SterilityResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SterilityResults.
     */
    cursor?: SterilityResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SterilityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SterilityResults.
     */
    skip?: number
    distinct?: SterilityResultScalarFieldEnum | SterilityResultScalarFieldEnum[]
  }

  /**
   * SterilityResult create
   */
  export type SterilityResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * The data needed to create a SterilityResult.
     */
    data: XOR<SterilityResultCreateInput, SterilityResultUncheckedCreateInput>
  }

  /**
   * SterilityResult createMany
   */
  export type SterilityResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SterilityResults.
     */
    data: SterilityResultCreateManyInput | SterilityResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SterilityResult createManyAndReturn
   */
  export type SterilityResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * The data used to create many SterilityResults.
     */
    data: SterilityResultCreateManyInput | SterilityResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SterilityResult update
   */
  export type SterilityResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * The data needed to update a SterilityResult.
     */
    data: XOR<SterilityResultUpdateInput, SterilityResultUncheckedUpdateInput>
    /**
     * Choose, which SterilityResult to update.
     */
    where: SterilityResultWhereUniqueInput
  }

  /**
   * SterilityResult updateMany
   */
  export type SterilityResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SterilityResults.
     */
    data: XOR<SterilityResultUpdateManyMutationInput, SterilityResultUncheckedUpdateManyInput>
    /**
     * Filter which SterilityResults to update
     */
    where?: SterilityResultWhereInput
    /**
     * Limit how many SterilityResults to update.
     */
    limit?: number
  }

  /**
   * SterilityResult updateManyAndReturn
   */
  export type SterilityResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * The data used to update SterilityResults.
     */
    data: XOR<SterilityResultUpdateManyMutationInput, SterilityResultUncheckedUpdateManyInput>
    /**
     * Filter which SterilityResults to update
     */
    where?: SterilityResultWhereInput
    /**
     * Limit how many SterilityResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SterilityResult upsert
   */
  export type SterilityResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * The filter to search for the SterilityResult to update in case it exists.
     */
    where: SterilityResultWhereUniqueInput
    /**
     * In case the SterilityResult found by the `where` argument doesn't exist, create a new SterilityResult with this data.
     */
    create: XOR<SterilityResultCreateInput, SterilityResultUncheckedCreateInput>
    /**
     * In case the SterilityResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SterilityResultUpdateInput, SterilityResultUncheckedUpdateInput>
  }

  /**
   * SterilityResult delete
   */
  export type SterilityResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
    /**
     * Filter which SterilityResult to delete.
     */
    where: SterilityResultWhereUniqueInput
  }

  /**
   * SterilityResult deleteMany
   */
  export type SterilityResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SterilityResults to delete
     */
    where?: SterilityResultWhereInput
    /**
     * Limit how many SterilityResults to delete.
     */
    limit?: number
  }

  /**
   * SterilityResult without action
   */
  export type SterilityResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SterilityResult
     */
    select?: SterilityResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SterilityResult
     */
    omit?: SterilityResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SterilityResultInclude<ExtArgs> | null
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


  export const BatchScalarFieldEnum: {
    id: 'id',
    label: 'label',
    status: 'status',
    createdAt: 'createdAt',
    summaryMarkdown: 'summaryMarkdown',
    summarisedAt: 'summarisedAt'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const DDPCRRunScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    sampleLabel: 'sampleLabel',
    target: 'target',
    kit: 'kit',
    sampleType: 'sampleType',
    templateUsed: 'templateUsed',
    enzymeAdded: 'enzymeAdded',
    spikeIn: 'spikeIn',
    positives: 'positives',
    negatives: 'negatives',
    totalDroplets: 'totalDroplets',
    copiesPerUl: 'copiesPerUl',
    pass: 'pass',
    runAt: 'runAt'
  };

  export type DDPCRRunScalarFieldEnum = (typeof DDPCRRunScalarFieldEnum)[keyof typeof DDPCRRunScalarFieldEnum]


  export const SterilityResultScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    method: 'method',
    media: 'media',
    incubationHours: 'incubationHours',
    outcome: 'outcome',
    observedAt: 'observedAt'
  };

  export type SterilityResultScalarFieldEnum = (typeof SterilityResultScalarFieldEnum)[keyof typeof SterilityResultScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'QCStatus'
   */
  export type EnumQCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QCStatus'>
    


  /**
   * Reference to a field of type 'QCStatus[]'
   */
  export type ListEnumQCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QCStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SampleType'
   */
  export type EnumSampleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SampleType'>
    


  /**
   * Reference to a field of type 'SampleType[]'
   */
  export type ListEnumSampleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SampleType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SterilityMethod'
   */
  export type EnumSterilityMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityMethod'>
    


  /**
   * Reference to a field of type 'SterilityMethod[]'
   */
  export type ListEnumSterilityMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityMethod[]'>
    


  /**
   * Reference to a field of type 'SterilityMedia'
   */
  export type EnumSterilityMediaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityMedia'>
    


  /**
   * Reference to a field of type 'SterilityMedia[]'
   */
  export type ListEnumSterilityMediaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityMedia[]'>
    


  /**
   * Reference to a field of type 'SterilityOutcome'
   */
  export type EnumSterilityOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityOutcome'>
    


  /**
   * Reference to a field of type 'SterilityOutcome[]'
   */
  export type ListEnumSterilityOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SterilityOutcome[]'>
    
  /**
   * Deep Input Types
   */


  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    label?: StringFilter<"Batch"> | string
    status?: EnumQCStatusFilter<"Batch"> | $Enums.QCStatus
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    summaryMarkdown?: StringNullableFilter<"Batch"> | string | null
    summarisedAt?: DateTimeNullableFilter<"Batch"> | Date | string | null
    ddpcrRuns?: DDPCRRunListRelationFilter
    sterilityResult?: XOR<SterilityResultNullableScalarRelationFilter, SterilityResultWhereInput> | null
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    summaryMarkdown?: SortOrderInput | SortOrder
    summarisedAt?: SortOrderInput | SortOrder
    ddpcrRuns?: DDPCRRunOrderByRelationAggregateInput
    sterilityResult?: SterilityResultOrderByWithRelationInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    label?: StringFilter<"Batch"> | string
    status?: EnumQCStatusFilter<"Batch"> | $Enums.QCStatus
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    summaryMarkdown?: StringNullableFilter<"Batch"> | string | null
    summarisedAt?: DateTimeNullableFilter<"Batch"> | Date | string | null
    ddpcrRuns?: DDPCRRunListRelationFilter
    sterilityResult?: XOR<SterilityResultNullableScalarRelationFilter, SterilityResultWhereInput> | null
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    summaryMarkdown?: SortOrderInput | SortOrder
    summarisedAt?: SortOrderInput | SortOrder
    _count?: BatchCountOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    label?: StringWithAggregatesFilter<"Batch"> | string
    status?: EnumQCStatusWithAggregatesFilter<"Batch"> | $Enums.QCStatus
    createdAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    summaryMarkdown?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    summarisedAt?: DateTimeNullableWithAggregatesFilter<"Batch"> | Date | string | null
  }

  export type DDPCRRunWhereInput = {
    AND?: DDPCRRunWhereInput | DDPCRRunWhereInput[]
    OR?: DDPCRRunWhereInput[]
    NOT?: DDPCRRunWhereInput | DDPCRRunWhereInput[]
    id?: StringFilter<"DDPCRRun"> | string
    batchId?: StringFilter<"DDPCRRun"> | string
    sampleLabel?: StringFilter<"DDPCRRun"> | string
    target?: StringFilter<"DDPCRRun"> | string
    kit?: StringFilter<"DDPCRRun"> | string
    sampleType?: EnumSampleTypeFilter<"DDPCRRun"> | $Enums.SampleType
    templateUsed?: BoolFilter<"DDPCRRun"> | boolean
    enzymeAdded?: BoolFilter<"DDPCRRun"> | boolean
    spikeIn?: StringNullableFilter<"DDPCRRun"> | string | null
    positives?: IntFilter<"DDPCRRun"> | number
    negatives?: IntFilter<"DDPCRRun"> | number
    totalDroplets?: IntFilter<"DDPCRRun"> | number
    copiesPerUl?: FloatFilter<"DDPCRRun"> | number
    pass?: BoolFilter<"DDPCRRun"> | boolean
    runAt?: DateTimeFilter<"DDPCRRun"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }

  export type DDPCRRunOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    sampleLabel?: SortOrder
    target?: SortOrder
    kit?: SortOrder
    sampleType?: SortOrder
    templateUsed?: SortOrder
    enzymeAdded?: SortOrder
    spikeIn?: SortOrderInput | SortOrder
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
    pass?: SortOrder
    runAt?: SortOrder
    batch?: BatchOrderByWithRelationInput
  }

  export type DDPCRRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchId?: string
    AND?: DDPCRRunWhereInput | DDPCRRunWhereInput[]
    OR?: DDPCRRunWhereInput[]
    NOT?: DDPCRRunWhereInput | DDPCRRunWhereInput[]
    sampleLabel?: StringFilter<"DDPCRRun"> | string
    target?: StringFilter<"DDPCRRun"> | string
    kit?: StringFilter<"DDPCRRun"> | string
    sampleType?: EnumSampleTypeFilter<"DDPCRRun"> | $Enums.SampleType
    templateUsed?: BoolFilter<"DDPCRRun"> | boolean
    enzymeAdded?: BoolFilter<"DDPCRRun"> | boolean
    spikeIn?: StringNullableFilter<"DDPCRRun"> | string | null
    positives?: IntFilter<"DDPCRRun"> | number
    negatives?: IntFilter<"DDPCRRun"> | number
    totalDroplets?: IntFilter<"DDPCRRun"> | number
    copiesPerUl?: FloatFilter<"DDPCRRun"> | number
    pass?: BoolFilter<"DDPCRRun"> | boolean
    runAt?: DateTimeFilter<"DDPCRRun"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }, "id" | "batchId">

  export type DDPCRRunOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    sampleLabel?: SortOrder
    target?: SortOrder
    kit?: SortOrder
    sampleType?: SortOrder
    templateUsed?: SortOrder
    enzymeAdded?: SortOrder
    spikeIn?: SortOrderInput | SortOrder
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
    pass?: SortOrder
    runAt?: SortOrder
    _count?: DDPCRRunCountOrderByAggregateInput
    _avg?: DDPCRRunAvgOrderByAggregateInput
    _max?: DDPCRRunMaxOrderByAggregateInput
    _min?: DDPCRRunMinOrderByAggregateInput
    _sum?: DDPCRRunSumOrderByAggregateInput
  }

  export type DDPCRRunScalarWhereWithAggregatesInput = {
    AND?: DDPCRRunScalarWhereWithAggregatesInput | DDPCRRunScalarWhereWithAggregatesInput[]
    OR?: DDPCRRunScalarWhereWithAggregatesInput[]
    NOT?: DDPCRRunScalarWhereWithAggregatesInput | DDPCRRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DDPCRRun"> | string
    batchId?: StringWithAggregatesFilter<"DDPCRRun"> | string
    sampleLabel?: StringWithAggregatesFilter<"DDPCRRun"> | string
    target?: StringWithAggregatesFilter<"DDPCRRun"> | string
    kit?: StringWithAggregatesFilter<"DDPCRRun"> | string
    sampleType?: EnumSampleTypeWithAggregatesFilter<"DDPCRRun"> | $Enums.SampleType
    templateUsed?: BoolWithAggregatesFilter<"DDPCRRun"> | boolean
    enzymeAdded?: BoolWithAggregatesFilter<"DDPCRRun"> | boolean
    spikeIn?: StringNullableWithAggregatesFilter<"DDPCRRun"> | string | null
    positives?: IntWithAggregatesFilter<"DDPCRRun"> | number
    negatives?: IntWithAggregatesFilter<"DDPCRRun"> | number
    totalDroplets?: IntWithAggregatesFilter<"DDPCRRun"> | number
    copiesPerUl?: FloatWithAggregatesFilter<"DDPCRRun"> | number
    pass?: BoolWithAggregatesFilter<"DDPCRRun"> | boolean
    runAt?: DateTimeWithAggregatesFilter<"DDPCRRun"> | Date | string
  }

  export type SterilityResultWhereInput = {
    AND?: SterilityResultWhereInput | SterilityResultWhereInput[]
    OR?: SterilityResultWhereInput[]
    NOT?: SterilityResultWhereInput | SterilityResultWhereInput[]
    id?: StringFilter<"SterilityResult"> | string
    batchId?: StringFilter<"SterilityResult"> | string
    method?: EnumSterilityMethodFilter<"SterilityResult"> | $Enums.SterilityMethod
    media?: EnumSterilityMediaFilter<"SterilityResult"> | $Enums.SterilityMedia
    incubationHours?: IntFilter<"SterilityResult"> | number
    outcome?: EnumSterilityOutcomeFilter<"SterilityResult"> | $Enums.SterilityOutcome
    observedAt?: DateTimeFilter<"SterilityResult"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }

  export type SterilityResultOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    method?: SortOrder
    media?: SortOrder
    incubationHours?: SortOrder
    outcome?: SortOrder
    observedAt?: SortOrder
    batch?: BatchOrderByWithRelationInput
  }

  export type SterilityResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchId?: string
    AND?: SterilityResultWhereInput | SterilityResultWhereInput[]
    OR?: SterilityResultWhereInput[]
    NOT?: SterilityResultWhereInput | SterilityResultWhereInput[]
    method?: EnumSterilityMethodFilter<"SterilityResult"> | $Enums.SterilityMethod
    media?: EnumSterilityMediaFilter<"SterilityResult"> | $Enums.SterilityMedia
    incubationHours?: IntFilter<"SterilityResult"> | number
    outcome?: EnumSterilityOutcomeFilter<"SterilityResult"> | $Enums.SterilityOutcome
    observedAt?: DateTimeFilter<"SterilityResult"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
  }, "id" | "batchId">

  export type SterilityResultOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    method?: SortOrder
    media?: SortOrder
    incubationHours?: SortOrder
    outcome?: SortOrder
    observedAt?: SortOrder
    _count?: SterilityResultCountOrderByAggregateInput
    _avg?: SterilityResultAvgOrderByAggregateInput
    _max?: SterilityResultMaxOrderByAggregateInput
    _min?: SterilityResultMinOrderByAggregateInput
    _sum?: SterilityResultSumOrderByAggregateInput
  }

  export type SterilityResultScalarWhereWithAggregatesInput = {
    AND?: SterilityResultScalarWhereWithAggregatesInput | SterilityResultScalarWhereWithAggregatesInput[]
    OR?: SterilityResultScalarWhereWithAggregatesInput[]
    NOT?: SterilityResultScalarWhereWithAggregatesInput | SterilityResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SterilityResult"> | string
    batchId?: StringWithAggregatesFilter<"SterilityResult"> | string
    method?: EnumSterilityMethodWithAggregatesFilter<"SterilityResult"> | $Enums.SterilityMethod
    media?: EnumSterilityMediaWithAggregatesFilter<"SterilityResult"> | $Enums.SterilityMedia
    incubationHours?: IntWithAggregatesFilter<"SterilityResult"> | number
    outcome?: EnumSterilityOutcomeWithAggregatesFilter<"SterilityResult"> | $Enums.SterilityOutcome
    observedAt?: DateTimeWithAggregatesFilter<"SterilityResult"> | Date | string
  }

  export type BatchCreateInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    ddpcrRuns?: DDPCRRunCreateNestedManyWithoutBatchInput
    sterilityResult?: SterilityResultCreateNestedOneWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    ddpcrRuns?: DDPCRRunUncheckedCreateNestedManyWithoutBatchInput
    sterilityResult?: SterilityResultUncheckedCreateNestedOneWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddpcrRuns?: DDPCRRunUpdateManyWithoutBatchNestedInput
    sterilityResult?: SterilityResultUpdateOneWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddpcrRuns?: DDPCRRunUncheckedUpdateManyWithoutBatchNestedInput
    sterilityResult?: SterilityResultUncheckedUpdateOneWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DDPCRRunCreateInput = {
    id?: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
    batch: BatchCreateNestedOneWithoutDdpcrRunsInput
  }

  export type DDPCRRunUncheckedCreateInput = {
    id?: string
    batchId: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
  }

  export type DDPCRRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutDdpcrRunsNestedInput
  }

  export type DDPCRRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DDPCRRunCreateManyInput = {
    id?: string
    batchId: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
  }

  export type DDPCRRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DDPCRRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilityResultCreateInput = {
    id?: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date | string
    batch: BatchCreateNestedOneWithoutSterilityResultInput
  }

  export type SterilityResultUncheckedCreateInput = {
    id?: string
    batchId: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date | string
  }

  export type SterilityResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutSterilityResultNestedInput
  }

  export type SterilityResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilityResultCreateManyInput = {
    id?: string
    batchId: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date | string
  }

  export type SterilityResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilityResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumQCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QCStatus | EnumQCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQCStatusFilter<$PrismaModel> | $Enums.QCStatus
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

  export type DDPCRRunListRelationFilter = {
    every?: DDPCRRunWhereInput
    some?: DDPCRRunWhereInput
    none?: DDPCRRunWhereInput
  }

  export type SterilityResultNullableScalarRelationFilter = {
    is?: SterilityResultWhereInput | null
    isNot?: SterilityResultWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DDPCRRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    summaryMarkdown?: SortOrder
    summarisedAt?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    summaryMarkdown?: SortOrder
    summarisedAt?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    summaryMarkdown?: SortOrder
    summarisedAt?: SortOrder
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

  export type EnumQCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QCStatus | EnumQCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQCStatusWithAggregatesFilter<$PrismaModel> | $Enums.QCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQCStatusFilter<$PrismaModel>
    _max?: NestedEnumQCStatusFilter<$PrismaModel>
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

  export type EnumSampleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SampleType | EnumSampleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSampleTypeFilter<$PrismaModel> | $Enums.SampleType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type DDPCRRunCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    sampleLabel?: SortOrder
    target?: SortOrder
    kit?: SortOrder
    sampleType?: SortOrder
    templateUsed?: SortOrder
    enzymeAdded?: SortOrder
    spikeIn?: SortOrder
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
    pass?: SortOrder
    runAt?: SortOrder
  }

  export type DDPCRRunAvgOrderByAggregateInput = {
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
  }

  export type DDPCRRunMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    sampleLabel?: SortOrder
    target?: SortOrder
    kit?: SortOrder
    sampleType?: SortOrder
    templateUsed?: SortOrder
    enzymeAdded?: SortOrder
    spikeIn?: SortOrder
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
    pass?: SortOrder
    runAt?: SortOrder
  }

  export type DDPCRRunMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    sampleLabel?: SortOrder
    target?: SortOrder
    kit?: SortOrder
    sampleType?: SortOrder
    templateUsed?: SortOrder
    enzymeAdded?: SortOrder
    spikeIn?: SortOrder
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
    pass?: SortOrder
    runAt?: SortOrder
  }

  export type DDPCRRunSumOrderByAggregateInput = {
    positives?: SortOrder
    negatives?: SortOrder
    totalDroplets?: SortOrder
    copiesPerUl?: SortOrder
  }

  export type EnumSampleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SampleType | EnumSampleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSampleTypeWithAggregatesFilter<$PrismaModel> | $Enums.SampleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSampleTypeFilter<$PrismaModel>
    _max?: NestedEnumSampleTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSterilityMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMethod | EnumSterilityMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMethodFilter<$PrismaModel> | $Enums.SterilityMethod
  }

  export type EnumSterilityMediaFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMedia | EnumSterilityMediaFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMediaFilter<$PrismaModel> | $Enums.SterilityMedia
  }

  export type EnumSterilityOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityOutcome | EnumSterilityOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityOutcomeFilter<$PrismaModel> | $Enums.SterilityOutcome
  }

  export type SterilityResultCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    method?: SortOrder
    media?: SortOrder
    incubationHours?: SortOrder
    outcome?: SortOrder
    observedAt?: SortOrder
  }

  export type SterilityResultAvgOrderByAggregateInput = {
    incubationHours?: SortOrder
  }

  export type SterilityResultMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    method?: SortOrder
    media?: SortOrder
    incubationHours?: SortOrder
    outcome?: SortOrder
    observedAt?: SortOrder
  }

  export type SterilityResultMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    method?: SortOrder
    media?: SortOrder
    incubationHours?: SortOrder
    outcome?: SortOrder
    observedAt?: SortOrder
  }

  export type SterilityResultSumOrderByAggregateInput = {
    incubationHours?: SortOrder
  }

  export type EnumSterilityMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMethod | EnumSterilityMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMethodWithAggregatesFilter<$PrismaModel> | $Enums.SterilityMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityMethodFilter<$PrismaModel>
    _max?: NestedEnumSterilityMethodFilter<$PrismaModel>
  }

  export type EnumSterilityMediaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMedia | EnumSterilityMediaFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMediaWithAggregatesFilter<$PrismaModel> | $Enums.SterilityMedia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityMediaFilter<$PrismaModel>
    _max?: NestedEnumSterilityMediaFilter<$PrismaModel>
  }

  export type EnumSterilityOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityOutcome | EnumSterilityOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.SterilityOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityOutcomeFilter<$PrismaModel>
    _max?: NestedEnumSterilityOutcomeFilter<$PrismaModel>
  }

  export type DDPCRRunCreateNestedManyWithoutBatchInput = {
    create?: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput> | DDPCRRunCreateWithoutBatchInput[] | DDPCRRunUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: DDPCRRunCreateOrConnectWithoutBatchInput | DDPCRRunCreateOrConnectWithoutBatchInput[]
    createMany?: DDPCRRunCreateManyBatchInputEnvelope
    connect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
  }

  export type SterilityResultCreateNestedOneWithoutBatchInput = {
    create?: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
    connectOrCreate?: SterilityResultCreateOrConnectWithoutBatchInput
    connect?: SterilityResultWhereUniqueInput
  }

  export type DDPCRRunUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput> | DDPCRRunCreateWithoutBatchInput[] | DDPCRRunUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: DDPCRRunCreateOrConnectWithoutBatchInput | DDPCRRunCreateOrConnectWithoutBatchInput[]
    createMany?: DDPCRRunCreateManyBatchInputEnvelope
    connect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
  }

  export type SterilityResultUncheckedCreateNestedOneWithoutBatchInput = {
    create?: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
    connectOrCreate?: SterilityResultCreateOrConnectWithoutBatchInput
    connect?: SterilityResultWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumQCStatusFieldUpdateOperationsInput = {
    set?: $Enums.QCStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DDPCRRunUpdateManyWithoutBatchNestedInput = {
    create?: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput> | DDPCRRunCreateWithoutBatchInput[] | DDPCRRunUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: DDPCRRunCreateOrConnectWithoutBatchInput | DDPCRRunCreateOrConnectWithoutBatchInput[]
    upsert?: DDPCRRunUpsertWithWhereUniqueWithoutBatchInput | DDPCRRunUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: DDPCRRunCreateManyBatchInputEnvelope
    set?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    disconnect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    delete?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    connect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    update?: DDPCRRunUpdateWithWhereUniqueWithoutBatchInput | DDPCRRunUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: DDPCRRunUpdateManyWithWhereWithoutBatchInput | DDPCRRunUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: DDPCRRunScalarWhereInput | DDPCRRunScalarWhereInput[]
  }

  export type SterilityResultUpdateOneWithoutBatchNestedInput = {
    create?: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
    connectOrCreate?: SterilityResultCreateOrConnectWithoutBatchInput
    upsert?: SterilityResultUpsertWithoutBatchInput
    disconnect?: SterilityResultWhereInput | boolean
    delete?: SterilityResultWhereInput | boolean
    connect?: SterilityResultWhereUniqueInput
    update?: XOR<XOR<SterilityResultUpdateToOneWithWhereWithoutBatchInput, SterilityResultUpdateWithoutBatchInput>, SterilityResultUncheckedUpdateWithoutBatchInput>
  }

  export type DDPCRRunUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput> | DDPCRRunCreateWithoutBatchInput[] | DDPCRRunUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: DDPCRRunCreateOrConnectWithoutBatchInput | DDPCRRunCreateOrConnectWithoutBatchInput[]
    upsert?: DDPCRRunUpsertWithWhereUniqueWithoutBatchInput | DDPCRRunUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: DDPCRRunCreateManyBatchInputEnvelope
    set?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    disconnect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    delete?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    connect?: DDPCRRunWhereUniqueInput | DDPCRRunWhereUniqueInput[]
    update?: DDPCRRunUpdateWithWhereUniqueWithoutBatchInput | DDPCRRunUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: DDPCRRunUpdateManyWithWhereWithoutBatchInput | DDPCRRunUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: DDPCRRunScalarWhereInput | DDPCRRunScalarWhereInput[]
  }

  export type SterilityResultUncheckedUpdateOneWithoutBatchNestedInput = {
    create?: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
    connectOrCreate?: SterilityResultCreateOrConnectWithoutBatchInput
    upsert?: SterilityResultUpsertWithoutBatchInput
    disconnect?: SterilityResultWhereInput | boolean
    delete?: SterilityResultWhereInput | boolean
    connect?: SterilityResultWhereUniqueInput
    update?: XOR<XOR<SterilityResultUpdateToOneWithWhereWithoutBatchInput, SterilityResultUpdateWithoutBatchInput>, SterilityResultUncheckedUpdateWithoutBatchInput>
  }

  export type BatchCreateNestedOneWithoutDdpcrRunsInput = {
    create?: XOR<BatchCreateWithoutDdpcrRunsInput, BatchUncheckedCreateWithoutDdpcrRunsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutDdpcrRunsInput
    connect?: BatchWhereUniqueInput
  }

  export type EnumSampleTypeFieldUpdateOperationsInput = {
    set?: $Enums.SampleType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BatchUpdateOneRequiredWithoutDdpcrRunsNestedInput = {
    create?: XOR<BatchCreateWithoutDdpcrRunsInput, BatchUncheckedCreateWithoutDdpcrRunsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutDdpcrRunsInput
    upsert?: BatchUpsertWithoutDdpcrRunsInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutDdpcrRunsInput, BatchUpdateWithoutDdpcrRunsInput>, BatchUncheckedUpdateWithoutDdpcrRunsInput>
  }

  export type BatchCreateNestedOneWithoutSterilityResultInput = {
    create?: XOR<BatchCreateWithoutSterilityResultInput, BatchUncheckedCreateWithoutSterilityResultInput>
    connectOrCreate?: BatchCreateOrConnectWithoutSterilityResultInput
    connect?: BatchWhereUniqueInput
  }

  export type EnumSterilityMethodFieldUpdateOperationsInput = {
    set?: $Enums.SterilityMethod
  }

  export type EnumSterilityMediaFieldUpdateOperationsInput = {
    set?: $Enums.SterilityMedia
  }

  export type EnumSterilityOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.SterilityOutcome
  }

  export type BatchUpdateOneRequiredWithoutSterilityResultNestedInput = {
    create?: XOR<BatchCreateWithoutSterilityResultInput, BatchUncheckedCreateWithoutSterilityResultInput>
    connectOrCreate?: BatchCreateOrConnectWithoutSterilityResultInput
    upsert?: BatchUpsertWithoutSterilityResultInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutSterilityResultInput, BatchUpdateWithoutSterilityResultInput>, BatchUncheckedUpdateWithoutSterilityResultInput>
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

  export type NestedEnumQCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QCStatus | EnumQCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQCStatusFilter<$PrismaModel> | $Enums.QCStatus
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

  export type NestedEnumQCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QCStatus | EnumQCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QCStatus[] | ListEnumQCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQCStatusWithAggregatesFilter<$PrismaModel> | $Enums.QCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQCStatusFilter<$PrismaModel>
    _max?: NestedEnumQCStatusFilter<$PrismaModel>
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

  export type NestedEnumSampleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SampleType | EnumSampleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSampleTypeFilter<$PrismaModel> | $Enums.SampleType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumSampleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SampleType | EnumSampleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SampleType[] | ListEnumSampleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSampleTypeWithAggregatesFilter<$PrismaModel> | $Enums.SampleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSampleTypeFilter<$PrismaModel>
    _max?: NestedEnumSampleTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSterilityMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMethod | EnumSterilityMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMethodFilter<$PrismaModel> | $Enums.SterilityMethod
  }

  export type NestedEnumSterilityMediaFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMedia | EnumSterilityMediaFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMediaFilter<$PrismaModel> | $Enums.SterilityMedia
  }

  export type NestedEnumSterilityOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityOutcome | EnumSterilityOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityOutcomeFilter<$PrismaModel> | $Enums.SterilityOutcome
  }

  export type NestedEnumSterilityMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMethod | EnumSterilityMethodFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMethod[] | ListEnumSterilityMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMethodWithAggregatesFilter<$PrismaModel> | $Enums.SterilityMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityMethodFilter<$PrismaModel>
    _max?: NestedEnumSterilityMethodFilter<$PrismaModel>
  }

  export type NestedEnumSterilityMediaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityMedia | EnumSterilityMediaFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityMedia[] | ListEnumSterilityMediaFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityMediaWithAggregatesFilter<$PrismaModel> | $Enums.SterilityMedia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityMediaFilter<$PrismaModel>
    _max?: NestedEnumSterilityMediaFilter<$PrismaModel>
  }

  export type NestedEnumSterilityOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SterilityOutcome | EnumSterilityOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SterilityOutcome[] | ListEnumSterilityOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSterilityOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.SterilityOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSterilityOutcomeFilter<$PrismaModel>
    _max?: NestedEnumSterilityOutcomeFilter<$PrismaModel>
  }

  export type DDPCRRunCreateWithoutBatchInput = {
    id?: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
  }

  export type DDPCRRunUncheckedCreateWithoutBatchInput = {
    id?: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
  }

  export type DDPCRRunCreateOrConnectWithoutBatchInput = {
    where: DDPCRRunWhereUniqueInput
    create: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput>
  }

  export type DDPCRRunCreateManyBatchInputEnvelope = {
    data: DDPCRRunCreateManyBatchInput | DDPCRRunCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type SterilityResultCreateWithoutBatchInput = {
    id?: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date | string
  }

  export type SterilityResultUncheckedCreateWithoutBatchInput = {
    id?: string
    method: $Enums.SterilityMethod
    media: $Enums.SterilityMedia
    incubationHours: number
    outcome: $Enums.SterilityOutcome
    observedAt: Date | string
  }

  export type SterilityResultCreateOrConnectWithoutBatchInput = {
    where: SterilityResultWhereUniqueInput
    create: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
  }

  export type DDPCRRunUpsertWithWhereUniqueWithoutBatchInput = {
    where: DDPCRRunWhereUniqueInput
    update: XOR<DDPCRRunUpdateWithoutBatchInput, DDPCRRunUncheckedUpdateWithoutBatchInput>
    create: XOR<DDPCRRunCreateWithoutBatchInput, DDPCRRunUncheckedCreateWithoutBatchInput>
  }

  export type DDPCRRunUpdateWithWhereUniqueWithoutBatchInput = {
    where: DDPCRRunWhereUniqueInput
    data: XOR<DDPCRRunUpdateWithoutBatchInput, DDPCRRunUncheckedUpdateWithoutBatchInput>
  }

  export type DDPCRRunUpdateManyWithWhereWithoutBatchInput = {
    where: DDPCRRunScalarWhereInput
    data: XOR<DDPCRRunUpdateManyMutationInput, DDPCRRunUncheckedUpdateManyWithoutBatchInput>
  }

  export type DDPCRRunScalarWhereInput = {
    AND?: DDPCRRunScalarWhereInput | DDPCRRunScalarWhereInput[]
    OR?: DDPCRRunScalarWhereInput[]
    NOT?: DDPCRRunScalarWhereInput | DDPCRRunScalarWhereInput[]
    id?: StringFilter<"DDPCRRun"> | string
    batchId?: StringFilter<"DDPCRRun"> | string
    sampleLabel?: StringFilter<"DDPCRRun"> | string
    target?: StringFilter<"DDPCRRun"> | string
    kit?: StringFilter<"DDPCRRun"> | string
    sampleType?: EnumSampleTypeFilter<"DDPCRRun"> | $Enums.SampleType
    templateUsed?: BoolFilter<"DDPCRRun"> | boolean
    enzymeAdded?: BoolFilter<"DDPCRRun"> | boolean
    spikeIn?: StringNullableFilter<"DDPCRRun"> | string | null
    positives?: IntFilter<"DDPCRRun"> | number
    negatives?: IntFilter<"DDPCRRun"> | number
    totalDroplets?: IntFilter<"DDPCRRun"> | number
    copiesPerUl?: FloatFilter<"DDPCRRun"> | number
    pass?: BoolFilter<"DDPCRRun"> | boolean
    runAt?: DateTimeFilter<"DDPCRRun"> | Date | string
  }

  export type SterilityResultUpsertWithoutBatchInput = {
    update: XOR<SterilityResultUpdateWithoutBatchInput, SterilityResultUncheckedUpdateWithoutBatchInput>
    create: XOR<SterilityResultCreateWithoutBatchInput, SterilityResultUncheckedCreateWithoutBatchInput>
    where?: SterilityResultWhereInput
  }

  export type SterilityResultUpdateToOneWithWhereWithoutBatchInput = {
    where?: SterilityResultWhereInput
    data: XOR<SterilityResultUpdateWithoutBatchInput, SterilityResultUncheckedUpdateWithoutBatchInput>
  }

  export type SterilityResultUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SterilityResultUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumSterilityMethodFieldUpdateOperationsInput | $Enums.SterilityMethod
    media?: EnumSterilityMediaFieldUpdateOperationsInput | $Enums.SterilityMedia
    incubationHours?: IntFieldUpdateOperationsInput | number
    outcome?: EnumSterilityOutcomeFieldUpdateOperationsInput | $Enums.SterilityOutcome
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateWithoutDdpcrRunsInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    sterilityResult?: SterilityResultCreateNestedOneWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutDdpcrRunsInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    sterilityResult?: SterilityResultUncheckedCreateNestedOneWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutDdpcrRunsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutDdpcrRunsInput, BatchUncheckedCreateWithoutDdpcrRunsInput>
  }

  export type BatchUpsertWithoutDdpcrRunsInput = {
    update: XOR<BatchUpdateWithoutDdpcrRunsInput, BatchUncheckedUpdateWithoutDdpcrRunsInput>
    create: XOR<BatchCreateWithoutDdpcrRunsInput, BatchUncheckedCreateWithoutDdpcrRunsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutDdpcrRunsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutDdpcrRunsInput, BatchUncheckedUpdateWithoutDdpcrRunsInput>
  }

  export type BatchUpdateWithoutDdpcrRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sterilityResult?: SterilityResultUpdateOneWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutDdpcrRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sterilityResult?: SterilityResultUncheckedUpdateOneWithoutBatchNestedInput
  }

  export type BatchCreateWithoutSterilityResultInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    ddpcrRuns?: DDPCRRunCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutSterilityResultInput = {
    id?: string
    label: string
    status?: $Enums.QCStatus
    createdAt?: Date | string
    summaryMarkdown?: string | null
    summarisedAt?: Date | string | null
    ddpcrRuns?: DDPCRRunUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutSterilityResultInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutSterilityResultInput, BatchUncheckedCreateWithoutSterilityResultInput>
  }

  export type BatchUpsertWithoutSterilityResultInput = {
    update: XOR<BatchUpdateWithoutSterilityResultInput, BatchUncheckedUpdateWithoutSterilityResultInput>
    create: XOR<BatchCreateWithoutSterilityResultInput, BatchUncheckedCreateWithoutSterilityResultInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutSterilityResultInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutSterilityResultInput, BatchUncheckedUpdateWithoutSterilityResultInput>
  }

  export type BatchUpdateWithoutSterilityResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddpcrRuns?: DDPCRRunUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutSterilityResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: EnumQCStatusFieldUpdateOperationsInput | $Enums.QCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryMarkdown?: NullableStringFieldUpdateOperationsInput | string | null
    summarisedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddpcrRuns?: DDPCRRunUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type DDPCRRunCreateManyBatchInput = {
    id?: string
    sampleLabel: string
    target: string
    kit: string
    sampleType: $Enums.SampleType
    templateUsed: boolean
    enzymeAdded: boolean
    spikeIn?: string | null
    positives: number
    negatives: number
    totalDroplets: number
    copiesPerUl: number
    pass: boolean
    runAt: Date | string
  }

  export type DDPCRRunUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DDPCRRunUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DDPCRRunUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sampleLabel?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    kit?: StringFieldUpdateOperationsInput | string
    sampleType?: EnumSampleTypeFieldUpdateOperationsInput | $Enums.SampleType
    templateUsed?: BoolFieldUpdateOperationsInput | boolean
    enzymeAdded?: BoolFieldUpdateOperationsInput | boolean
    spikeIn?: NullableStringFieldUpdateOperationsInput | string | null
    positives?: IntFieldUpdateOperationsInput | number
    negatives?: IntFieldUpdateOperationsInput | number
    totalDroplets?: IntFieldUpdateOperationsInput | number
    copiesPerUl?: FloatFieldUpdateOperationsInput | number
    pass?: BoolFieldUpdateOperationsInput | boolean
    runAt?: DateTimeFieldUpdateOperationsInput | Date | string
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