
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
 * Model ProductType
 * 
 */
export type ProductType = $Result.DefaultSelection<Prisma.$ProductTypePayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model StockMaterial
 * 
 */
export type StockMaterial = $Result.DefaultSelection<Prisma.$StockMaterialPayload>
/**
 * Model Packaging
 * 
 */
export type Packaging = $Result.DefaultSelection<Prisma.$PackagingPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductFormular
 * 
 */
export type ProductFormular = $Result.DefaultSelection<Prisma.$ProductFormularPayload>
/**
 * Model ProductionPlan
 * 
 */
export type ProductionPlan = $Result.DefaultSelection<Prisma.$ProductionPlanPayload>
/**
 * Model Production
 * 
 */
export type Production = $Result.DefaultSelection<Prisma.$ProductionPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMaterial`: Exposes CRUD operations for the **StockMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMaterials
    * const stockMaterials = await prisma.stockMaterial.findMany()
    * ```
    */
  get stockMaterial(): Prisma.StockMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packaging`: Exposes CRUD operations for the **Packaging** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packagings
    * const packagings = await prisma.packaging.findMany()
    * ```
    */
  get packaging(): Prisma.PackagingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productFormular`: Exposes CRUD operations for the **ProductFormular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductFormulars
    * const productFormulars = await prisma.productFormular.findMany()
    * ```
    */
  get productFormular(): Prisma.ProductFormularDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionPlan`: Exposes CRUD operations for the **ProductionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionPlans
    * const productionPlans = await prisma.productionPlan.findMany()
    * ```
    */
  get productionPlan(): Prisma.ProductionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.production`: Exposes CRUD operations for the **Production** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productions
    * const productions = await prisma.production.findMany()
    * ```
    */
  get production(): Prisma.ProductionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    ProductType: 'ProductType',
    Material: 'Material',
    StockMaterial: 'StockMaterial',
    Packaging: 'Packaging',
    Product: 'Product',
    ProductFormular: 'ProductFormular',
    ProductionPlan: 'ProductionPlan',
    Production: 'Production'
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
      modelProps: "user" | "productType" | "material" | "stockMaterial" | "packaging" | "product" | "productFormular" | "productionPlan" | "production"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProductType: {
        payload: Prisma.$ProductTypePayload<ExtArgs>
        fields: Prisma.ProductTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findFirst: {
            args: Prisma.ProductTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findMany: {
            args: Prisma.ProductTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>[]
          }
          create: {
            args: Prisma.ProductTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          createMany: {
            args: Prisma.ProductTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          update: {
            args: Prisma.ProductTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          deleteMany: {
            args: Prisma.ProductTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          aggregate: {
            args: Prisma.ProductTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductType>
          }
          groupBy: {
            args: Prisma.ProductTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductTypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductTypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MaterialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MaterialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      StockMaterial: {
        payload: Prisma.$StockMaterialPayload<ExtArgs>
        fields: Prisma.StockMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          findFirst: {
            args: Prisma.StockMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          findMany: {
            args: Prisma.StockMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>[]
          }
          create: {
            args: Prisma.StockMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          createMany: {
            args: Prisma.StockMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          update: {
            args: Prisma.StockMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          deleteMany: {
            args: Prisma.StockMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMaterialPayload>
          }
          aggregate: {
            args: Prisma.StockMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMaterial>
          }
          groupBy: {
            args: Prisma.StockMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMaterialGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StockMaterialFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StockMaterialAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StockMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<StockMaterialCountAggregateOutputType> | number
          }
        }
      }
      Packaging: {
        payload: Prisma.$PackagingPayload<ExtArgs>
        fields: Prisma.PackagingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackagingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackagingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          findFirst: {
            args: Prisma.PackagingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackagingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          findMany: {
            args: Prisma.PackagingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>[]
          }
          create: {
            args: Prisma.PackagingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          createMany: {
            args: Prisma.PackagingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackagingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          update: {
            args: Prisma.PackagingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          deleteMany: {
            args: Prisma.PackagingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackagingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackagingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagingPayload>
          }
          aggregate: {
            args: Prisma.PackagingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackaging>
          }
          groupBy: {
            args: Prisma.PackagingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackagingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PackagingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PackagingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PackagingCountArgs<ExtArgs>
            result: $Utils.Optional<PackagingCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductFormular: {
        payload: Prisma.$ProductFormularPayload<ExtArgs>
        fields: Prisma.ProductFormularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFormularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFormularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          findFirst: {
            args: Prisma.ProductFormularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFormularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          findMany: {
            args: Prisma.ProductFormularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>[]
          }
          create: {
            args: Prisma.ProductFormularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          createMany: {
            args: Prisma.ProductFormularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductFormularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          update: {
            args: Prisma.ProductFormularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          deleteMany: {
            args: Prisma.ProductFormularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductFormularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductFormularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFormularPayload>
          }
          aggregate: {
            args: Prisma.ProductFormularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductFormular>
          }
          groupBy: {
            args: Prisma.ProductFormularGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductFormularGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductFormularFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductFormularAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductFormularCountArgs<ExtArgs>
            result: $Utils.Optional<ProductFormularCountAggregateOutputType> | number
          }
        }
      }
      ProductionPlan: {
        payload: Prisma.$ProductionPlanPayload<ExtArgs>
        fields: Prisma.ProductionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          findFirst: {
            args: Prisma.ProductionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          findMany: {
            args: Prisma.ProductionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>[]
          }
          create: {
            args: Prisma.ProductionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          createMany: {
            args: Prisma.ProductionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          update: {
            args: Prisma.ProductionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          deleteMany: {
            args: Prisma.ProductionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPlanPayload>
          }
          aggregate: {
            args: Prisma.ProductionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionPlan>
          }
          groupBy: {
            args: Prisma.ProductionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionPlanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductionPlanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductionPlanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionPlanCountAggregateOutputType> | number
          }
        }
      }
      Production: {
        payload: Prisma.$ProductionPayload<ExtArgs>
        fields: Prisma.ProductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findFirst: {
            args: Prisma.ProductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findMany: {
            args: Prisma.ProductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          create: {
            args: Prisma.ProductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          createMany: {
            args: Prisma.ProductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          update: {
            args: Prisma.ProductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          deleteMany: {
            args: Prisma.ProductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          aggregate: {
            args: Prisma.ProductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduction>
          }
          groupBy: {
            args: Prisma.ProductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProductionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProductionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProductionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    productType?: ProductTypeOmit
    material?: MaterialOmit
    stockMaterial?: StockMaterialOmit
    packaging?: PackagingOmit
    product?: ProductOmit
    productFormular?: ProductFormularOmit
    productionPlan?: ProductionPlanOmit
    production?: ProductionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductTypeCountOutputType
   */

  export type ProductTypeCountOutputType = {
    Product: number
  }

  export type ProductTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductTypeCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTypeCountOutputType
     */
    select?: ProductTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    StockMaterial: number
    ProductFormular: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StockMaterial?: boolean | MaterialCountOutputTypeCountStockMaterialArgs
    ProductFormular?: boolean | MaterialCountOutputTypeCountProductFormularArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountStockMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProductFormularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFormularWhereInput
  }


  /**
   * Count Type PackagingCountOutputType
   */

  export type PackagingCountOutputType = {
    Product: number
  }

  export type PackagingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | PackagingCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * PackagingCountOutputType without action
   */
  export type PackagingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagingCountOutputType
     */
    select?: PackagingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackagingCountOutputType without action
   */
  export type PackagingCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductFormular: number
    ProductionPlan: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductFormular?: boolean | ProductCountOutputTypeCountProductFormularArgs
    ProductionPlan?: boolean | ProductCountOutputTypeCountProductionPlanArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductFormularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFormularWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductionPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionPlanWhereInput
  }


  /**
   * Count Type ProductionPlanCountOutputType
   */

  export type ProductionPlanCountOutputType = {
    Production: number
  }

  export type ProductionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Production?: boolean | ProductionPlanCountOutputTypeCountProductionArgs
  }

  // Custom InputTypes
  /**
   * ProductionPlanCountOutputType without action
   */
  export type ProductionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlanCountOutputType
     */
    select?: ProductionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionPlanCountOutputType without action
   */
  export type ProductionPlanCountOutputTypeCountProductionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    level: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    level: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    level: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    level?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    level?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    level?: true
    status?: true
    createAt?: true
    updateAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    password: string
    level: string
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    username?: boolean
    password?: boolean
    level?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    level?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "level" | "status" | "createAt" | "updateAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      level: string
      status: string
      createAt: Date | null
      updateAt: Date | null
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }


  /**
   * Model ProductType
   */

  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductTypeCountAggregateOutputType = {
    id: number
    name: number
    remark: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductTypeMinAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductTypeCountAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithAggregationInput | ProductTypeOrderByWithAggregationInput[]
    by: ProductTypeScalarFieldEnum[] | ProductTypeScalarFieldEnum
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }

  export type ProductTypeGroupByOutputType = {
    id: string
    name: string
    remark: string | null
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: ProductTypeCountAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    Product?: boolean | ProductType$ProductArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productType"]>



  export type ProductTypeSelectScalar = {
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "remark" | "status" | "createAt" | "updateAt", ExtArgs["result"]["productType"]>
  export type ProductTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductType$ProductArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductType"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      remark: string | null
      status: string
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["productType"]>
    composites: {}
  }

  type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeDefaultArgs> = $Result.GetResult<Prisma.$ProductTypePayload, S>

  type ProductTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductType'], meta: { name: 'ProductType' } }
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTypeFindUniqueArgs>(args: SelectSubset<T, ProductTypeFindUniqueArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTypeFindFirstArgs>(args?: SelectSubset<T, ProductTypeFindFirstArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTypeWithIdOnly = await prisma.productType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductTypeFindManyArgs>(args?: SelectSubset<T, ProductTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
     */
    create<T extends ProductTypeCreateArgs>(args: SelectSubset<T, ProductTypeCreateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTypes.
     * @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     * @example
     * // Create many ProductTypes
     * const productType = await prisma.productType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTypeCreateManyArgs>(args?: SelectSubset<T, ProductTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
     */
    delete<T extends ProductTypeDeleteArgs>(args: SelectSubset<T, ProductTypeDeleteArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTypeUpdateArgs>(args: SelectSubset<T, ProductTypeUpdateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTypeDeleteManyArgs>(args?: SelectSubset<T, ProductTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTypeUpdateManyArgs>(args: SelectSubset<T, ProductTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
     */
    upsert<T extends ProductTypeUpsertArgs>(args: SelectSubset<T, ProductTypeUpsertArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * @param {ProductTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productType = await prisma.productType.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductTypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductType.
     * @param {ProductTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productType = await prisma.productType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductTypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
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
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductType model
   */
  readonly fields: ProductTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductType$ProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductType model
   */
  interface ProductTypeFieldRefs {
    readonly id: FieldRef<"ProductType", 'String'>
    readonly name: FieldRef<"ProductType", 'String'>
    readonly remark: FieldRef<"ProductType", 'String'>
    readonly status: FieldRef<"ProductType", 'String'>
    readonly createAt: FieldRef<"ProductType", 'DateTime'>
    readonly updateAt: FieldRef<"ProductType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductType findUnique
   */
  export type ProductTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findFirst
   */
  export type ProductTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }

  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTypes.
     */
    data: ProductTypeCreateManyInput | ProductTypeCreateManyInput[]
  }

  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to update.
     */
    limit?: number
  }

  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }

  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to delete.
     */
    limit?: number
  }

  /**
   * ProductType findRaw
   */
  export type ProductTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductType aggregateRaw
   */
  export type ProductTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductType.Product
   */
  export type ProductType$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductType without action
   */
  export type ProductTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    price: number | null
  }

  export type MaterialSumAggregateOutputType = {
    price: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    price: number | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unit: string | null
    price: number | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    price: number
    remark: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    price?: true
  }

  export type MaterialSumAggregateInputType = {
    price?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    price?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    price?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    price?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    unit: string
    price: number
    remark: string | null
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    StockMaterial?: boolean | Material$StockMaterialArgs<ExtArgs>
    ProductFormular?: boolean | Material$ProductFormularArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>



  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "price" | "remark" | "status" | "createAt" | "updateAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    StockMaterial?: boolean | Material$StockMaterialArgs<ExtArgs>
    ProductFormular?: boolean | Material$ProductFormularArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      StockMaterial: Prisma.$StockMaterialPayload<ExtArgs>[]
      ProductFormular: Prisma.$ProductFormularPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      unit: string
      price: number
      remark: string | null
      status: string
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * @param {MaterialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const material = await prisma.material.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MaterialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Material.
     * @param {MaterialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const material = await prisma.material.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MaterialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    StockMaterial<T extends Material$StockMaterialArgs<ExtArgs> = {}>(args?: Subset<T, Material$StockMaterialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductFormular<T extends Material$ProductFormularArgs<ExtArgs> = {}>(args?: Subset<T, Material$ProductFormularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly unit: FieldRef<"Material", 'String'>
    readonly price: FieldRef<"Material", 'Int'>
    readonly remark: FieldRef<"Material", 'String'>
    readonly status: FieldRef<"Material", 'String'>
    readonly createAt: FieldRef<"Material", 'DateTime'>
    readonly updateAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material findRaw
   */
  export type MaterialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Material aggregateRaw
   */
  export type MaterialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Material.StockMaterial
   */
  export type Material$StockMaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    where?: StockMaterialWhereInput
    orderBy?: StockMaterialOrderByWithRelationInput | StockMaterialOrderByWithRelationInput[]
    cursor?: StockMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMaterialScalarFieldEnum | StockMaterialScalarFieldEnum[]
  }

  /**
   * Material.ProductFormular
   */
  export type Material$ProductFormularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    where?: ProductFormularWhereInput
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    cursor?: ProductFormularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFormularScalarFieldEnum | ProductFormularScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model StockMaterial
   */

  export type AggregateStockMaterial = {
    _count: StockMaterialCountAggregateOutputType | null
    _avg: StockMaterialAvgAggregateOutputType | null
    _sum: StockMaterialSumAggregateOutputType | null
    _min: StockMaterialMinAggregateOutputType | null
    _max: StockMaterialMaxAggregateOutputType | null
  }

  export type StockMaterialAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type StockMaterialSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type StockMaterialMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    price: number | null
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StockMaterialMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    price: number | null
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StockMaterialCountAggregateOutputType = {
    id: number
    materialId: number
    quantity: number
    price: number
    remark: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type StockMaterialAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type StockMaterialSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type StockMaterialMinAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    price?: true
    remark?: true
    createAt?: true
    updateAt?: true
  }

  export type StockMaterialMaxAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    price?: true
    remark?: true
    createAt?: true
    updateAt?: true
  }

  export type StockMaterialCountAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    price?: true
    remark?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type StockMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMaterial to aggregate.
     */
    where?: StockMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMaterials to fetch.
     */
    orderBy?: StockMaterialOrderByWithRelationInput | StockMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMaterials
    **/
    _count?: true | StockMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaterialMaxAggregateInputType
  }

  export type GetStockMaterialAggregateType<T extends StockMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMaterial[P]>
      : GetScalarType<T[P], AggregateStockMaterial[P]>
  }




  export type StockMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMaterialWhereInput
    orderBy?: StockMaterialOrderByWithAggregationInput | StockMaterialOrderByWithAggregationInput[]
    by: StockMaterialScalarFieldEnum[] | StockMaterialScalarFieldEnum
    having?: StockMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMaterialCountAggregateInputType | true
    _avg?: StockMaterialAvgAggregateInputType
    _sum?: StockMaterialSumAggregateInputType
    _min?: StockMaterialMinAggregateInputType
    _max?: StockMaterialMaxAggregateInputType
  }

  export type StockMaterialGroupByOutputType = {
    id: string
    materialId: string
    quantity: number
    price: number
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
    _count: StockMaterialCountAggregateOutputType | null
    _avg: StockMaterialAvgAggregateOutputType | null
    _sum: StockMaterialSumAggregateOutputType | null
    _min: StockMaterialMinAggregateOutputType | null
    _max: StockMaterialMaxAggregateOutputType | null
  }

  type GetStockMaterialGroupByPayload<T extends StockMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], StockMaterialGroupByOutputType[P]>
        }
      >
    >


  export type StockMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    price?: boolean
    remark?: boolean
    createAt?: boolean
    updateAt?: boolean
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMaterial"]>



  export type StockMaterialSelectScalar = {
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    price?: boolean
    remark?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type StockMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materialId" | "quantity" | "price" | "remark" | "createAt" | "updateAt", ExtArgs["result"]["stockMaterial"]>
  export type StockMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $StockMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMaterial"
    objects: {
      Material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      quantity: number
      price: number
      remark: string | null
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["stockMaterial"]>
    composites: {}
  }

  type StockMaterialGetPayload<S extends boolean | null | undefined | StockMaterialDefaultArgs> = $Result.GetResult<Prisma.$StockMaterialPayload, S>

  type StockMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMaterialCountAggregateInputType | true
    }

  export interface StockMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMaterial'], meta: { name: 'StockMaterial' } }
    /**
     * Find zero or one StockMaterial that matches the filter.
     * @param {StockMaterialFindUniqueArgs} args - Arguments to find a StockMaterial
     * @example
     * // Get one StockMaterial
     * const stockMaterial = await prisma.stockMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMaterialFindUniqueArgs>(args: SelectSubset<T, StockMaterialFindUniqueArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMaterialFindUniqueOrThrowArgs} args - Arguments to find a StockMaterial
     * @example
     * // Get one StockMaterial
     * const stockMaterial = await prisma.stockMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialFindFirstArgs} args - Arguments to find a StockMaterial
     * @example
     * // Get one StockMaterial
     * const stockMaterial = await prisma.stockMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMaterialFindFirstArgs>(args?: SelectSubset<T, StockMaterialFindFirstArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialFindFirstOrThrowArgs} args - Arguments to find a StockMaterial
     * @example
     * // Get one StockMaterial
     * const stockMaterial = await prisma.stockMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMaterials
     * const stockMaterials = await prisma.stockMaterial.findMany()
     * 
     * // Get first 10 StockMaterials
     * const stockMaterials = await prisma.stockMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMaterialWithIdOnly = await prisma.stockMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMaterialFindManyArgs>(args?: SelectSubset<T, StockMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMaterial.
     * @param {StockMaterialCreateArgs} args - Arguments to create a StockMaterial.
     * @example
     * // Create one StockMaterial
     * const StockMaterial = await prisma.stockMaterial.create({
     *   data: {
     *     // ... data to create a StockMaterial
     *   }
     * })
     * 
     */
    create<T extends StockMaterialCreateArgs>(args: SelectSubset<T, StockMaterialCreateArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMaterials.
     * @param {StockMaterialCreateManyArgs} args - Arguments to create many StockMaterials.
     * @example
     * // Create many StockMaterials
     * const stockMaterial = await prisma.stockMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMaterialCreateManyArgs>(args?: SelectSubset<T, StockMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockMaterial.
     * @param {StockMaterialDeleteArgs} args - Arguments to delete one StockMaterial.
     * @example
     * // Delete one StockMaterial
     * const StockMaterial = await prisma.stockMaterial.delete({
     *   where: {
     *     // ... filter to delete one StockMaterial
     *   }
     * })
     * 
     */
    delete<T extends StockMaterialDeleteArgs>(args: SelectSubset<T, StockMaterialDeleteArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMaterial.
     * @param {StockMaterialUpdateArgs} args - Arguments to update one StockMaterial.
     * @example
     * // Update one StockMaterial
     * const stockMaterial = await prisma.stockMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMaterialUpdateArgs>(args: SelectSubset<T, StockMaterialUpdateArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMaterials.
     * @param {StockMaterialDeleteManyArgs} args - Arguments to filter StockMaterials to delete.
     * @example
     * // Delete a few StockMaterials
     * const { count } = await prisma.stockMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMaterialDeleteManyArgs>(args?: SelectSubset<T, StockMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMaterials
     * const stockMaterial = await prisma.stockMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMaterialUpdateManyArgs>(args: SelectSubset<T, StockMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockMaterial.
     * @param {StockMaterialUpsertArgs} args - Arguments to update or create a StockMaterial.
     * @example
     * // Update or create a StockMaterial
     * const stockMaterial = await prisma.stockMaterial.upsert({
     *   create: {
     *     // ... data to create a StockMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMaterial we want to update
     *   }
     * })
     */
    upsert<T extends StockMaterialUpsertArgs>(args: SelectSubset<T, StockMaterialUpsertArgs<ExtArgs>>): Prisma__StockMaterialClient<$Result.GetResult<Prisma.$StockMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMaterials that matches the filter.
     * @param {StockMaterialFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const stockMaterial = await prisma.stockMaterial.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StockMaterialFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StockMaterial.
     * @param {StockMaterialAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const stockMaterial = await prisma.stockMaterial.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StockMaterialAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StockMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialCountArgs} args - Arguments to filter StockMaterials to count.
     * @example
     * // Count the number of StockMaterials
     * const count = await prisma.stockMaterial.count({
     *   where: {
     *     // ... the filter for the StockMaterials we want to count
     *   }
     * })
    **/
    count<T extends StockMaterialCountArgs>(
      args?: Subset<T, StockMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMaterialAggregateArgs>(args: Subset<T, StockMaterialAggregateArgs>): Prisma.PrismaPromise<GetStockMaterialAggregateType<T>>

    /**
     * Group by StockMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMaterialGroupByArgs} args - Group by arguments.
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
      T extends StockMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMaterialGroupByArgs['orderBy'] }
        : { orderBy?: StockMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMaterial model
   */
  readonly fields: StockMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StockMaterial model
   */
  interface StockMaterialFieldRefs {
    readonly id: FieldRef<"StockMaterial", 'String'>
    readonly materialId: FieldRef<"StockMaterial", 'String'>
    readonly quantity: FieldRef<"StockMaterial", 'Int'>
    readonly price: FieldRef<"StockMaterial", 'Int'>
    readonly remark: FieldRef<"StockMaterial", 'String'>
    readonly createAt: FieldRef<"StockMaterial", 'DateTime'>
    readonly updateAt: FieldRef<"StockMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMaterial findUnique
   */
  export type StockMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter, which StockMaterial to fetch.
     */
    where: StockMaterialWhereUniqueInput
  }

  /**
   * StockMaterial findUniqueOrThrow
   */
  export type StockMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter, which StockMaterial to fetch.
     */
    where: StockMaterialWhereUniqueInput
  }

  /**
   * StockMaterial findFirst
   */
  export type StockMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter, which StockMaterial to fetch.
     */
    where?: StockMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMaterials to fetch.
     */
    orderBy?: StockMaterialOrderByWithRelationInput | StockMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMaterials.
     */
    cursor?: StockMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMaterials.
     */
    distinct?: StockMaterialScalarFieldEnum | StockMaterialScalarFieldEnum[]
  }

  /**
   * StockMaterial findFirstOrThrow
   */
  export type StockMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter, which StockMaterial to fetch.
     */
    where?: StockMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMaterials to fetch.
     */
    orderBy?: StockMaterialOrderByWithRelationInput | StockMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMaterials.
     */
    cursor?: StockMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMaterials.
     */
    distinct?: StockMaterialScalarFieldEnum | StockMaterialScalarFieldEnum[]
  }

  /**
   * StockMaterial findMany
   */
  export type StockMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter, which StockMaterials to fetch.
     */
    where?: StockMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMaterials to fetch.
     */
    orderBy?: StockMaterialOrderByWithRelationInput | StockMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMaterials.
     */
    cursor?: StockMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMaterials.
     */
    skip?: number
    distinct?: StockMaterialScalarFieldEnum | StockMaterialScalarFieldEnum[]
  }

  /**
   * StockMaterial create
   */
  export type StockMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMaterial.
     */
    data: XOR<StockMaterialCreateInput, StockMaterialUncheckedCreateInput>
  }

  /**
   * StockMaterial createMany
   */
  export type StockMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMaterials.
     */
    data: StockMaterialCreateManyInput | StockMaterialCreateManyInput[]
  }

  /**
   * StockMaterial update
   */
  export type StockMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMaterial.
     */
    data: XOR<StockMaterialUpdateInput, StockMaterialUncheckedUpdateInput>
    /**
     * Choose, which StockMaterial to update.
     */
    where: StockMaterialWhereUniqueInput
  }

  /**
   * StockMaterial updateMany
   */
  export type StockMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMaterials.
     */
    data: XOR<StockMaterialUpdateManyMutationInput, StockMaterialUncheckedUpdateManyInput>
    /**
     * Filter which StockMaterials to update
     */
    where?: StockMaterialWhereInput
    /**
     * Limit how many StockMaterials to update.
     */
    limit?: number
  }

  /**
   * StockMaterial upsert
   */
  export type StockMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMaterial to update in case it exists.
     */
    where: StockMaterialWhereUniqueInput
    /**
     * In case the StockMaterial found by the `where` argument doesn't exist, create a new StockMaterial with this data.
     */
    create: XOR<StockMaterialCreateInput, StockMaterialUncheckedCreateInput>
    /**
     * In case the StockMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMaterialUpdateInput, StockMaterialUncheckedUpdateInput>
  }

  /**
   * StockMaterial delete
   */
  export type StockMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
    /**
     * Filter which StockMaterial to delete.
     */
    where: StockMaterialWhereUniqueInput
  }

  /**
   * StockMaterial deleteMany
   */
  export type StockMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMaterials to delete
     */
    where?: StockMaterialWhereInput
    /**
     * Limit how many StockMaterials to delete.
     */
    limit?: number
  }

  /**
   * StockMaterial findRaw
   */
  export type StockMaterialFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * StockMaterial aggregateRaw
   */
  export type StockMaterialAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * StockMaterial without action
   */
  export type StockMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMaterial
     */
    select?: StockMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMaterial
     */
    omit?: StockMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMaterialInclude<ExtArgs> | null
  }


  /**
   * Model Packaging
   */

  export type AggregatePackaging = {
    _count: PackagingCountAggregateOutputType | null
    _min: PackagingMinAggregateOutputType | null
    _max: PackagingMaxAggregateOutputType | null
  }

  export type PackagingMinAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PackagingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PackagingCountAggregateOutputType = {
    id: number
    name: number
    remark: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PackagingMinAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type PackagingMaxAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type PackagingCountAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PackagingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packaging to aggregate.
     */
    where?: PackagingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packagings to fetch.
     */
    orderBy?: PackagingOrderByWithRelationInput | PackagingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackagingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packagings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packagings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packagings
    **/
    _count?: true | PackagingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackagingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackagingMaxAggregateInputType
  }

  export type GetPackagingAggregateType<T extends PackagingAggregateArgs> = {
        [P in keyof T & keyof AggregatePackaging]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackaging[P]>
      : GetScalarType<T[P], AggregatePackaging[P]>
  }




  export type PackagingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackagingWhereInput
    orderBy?: PackagingOrderByWithAggregationInput | PackagingOrderByWithAggregationInput[]
    by: PackagingScalarFieldEnum[] | PackagingScalarFieldEnum
    having?: PackagingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackagingCountAggregateInputType | true
    _min?: PackagingMinAggregateInputType
    _max?: PackagingMaxAggregateInputType
  }

  export type PackagingGroupByOutputType = {
    id: string
    name: string
    remark: string | null
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: PackagingCountAggregateOutputType | null
    _min: PackagingMinAggregateOutputType | null
    _max: PackagingMaxAggregateOutputType | null
  }

  type GetPackagingGroupByPayload<T extends PackagingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackagingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackagingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackagingGroupByOutputType[P]>
            : GetScalarType<T[P], PackagingGroupByOutputType[P]>
        }
      >
    >


  export type PackagingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    Product?: boolean | Packaging$ProductArgs<ExtArgs>
    _count?: boolean | PackagingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packaging"]>



  export type PackagingSelectScalar = {
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type PackagingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "remark" | "status" | "createAt" | "updateAt", ExtArgs["result"]["packaging"]>
  export type PackagingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Packaging$ProductArgs<ExtArgs>
    _count?: boolean | PackagingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PackagingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Packaging"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      remark: string | null
      status: string
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["packaging"]>
    composites: {}
  }

  type PackagingGetPayload<S extends boolean | null | undefined | PackagingDefaultArgs> = $Result.GetResult<Prisma.$PackagingPayload, S>

  type PackagingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackagingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackagingCountAggregateInputType | true
    }

  export interface PackagingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Packaging'], meta: { name: 'Packaging' } }
    /**
     * Find zero or one Packaging that matches the filter.
     * @param {PackagingFindUniqueArgs} args - Arguments to find a Packaging
     * @example
     * // Get one Packaging
     * const packaging = await prisma.packaging.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackagingFindUniqueArgs>(args: SelectSubset<T, PackagingFindUniqueArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Packaging that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackagingFindUniqueOrThrowArgs} args - Arguments to find a Packaging
     * @example
     * // Get one Packaging
     * const packaging = await prisma.packaging.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackagingFindUniqueOrThrowArgs>(args: SelectSubset<T, PackagingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packaging that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingFindFirstArgs} args - Arguments to find a Packaging
     * @example
     * // Get one Packaging
     * const packaging = await prisma.packaging.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackagingFindFirstArgs>(args?: SelectSubset<T, PackagingFindFirstArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Packaging that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingFindFirstOrThrowArgs} args - Arguments to find a Packaging
     * @example
     * // Get one Packaging
     * const packaging = await prisma.packaging.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackagingFindFirstOrThrowArgs>(args?: SelectSubset<T, PackagingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packagings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packagings
     * const packagings = await prisma.packaging.findMany()
     * 
     * // Get first 10 Packagings
     * const packagings = await prisma.packaging.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packagingWithIdOnly = await prisma.packaging.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackagingFindManyArgs>(args?: SelectSubset<T, PackagingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Packaging.
     * @param {PackagingCreateArgs} args - Arguments to create a Packaging.
     * @example
     * // Create one Packaging
     * const Packaging = await prisma.packaging.create({
     *   data: {
     *     // ... data to create a Packaging
     *   }
     * })
     * 
     */
    create<T extends PackagingCreateArgs>(args: SelectSubset<T, PackagingCreateArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packagings.
     * @param {PackagingCreateManyArgs} args - Arguments to create many Packagings.
     * @example
     * // Create many Packagings
     * const packaging = await prisma.packaging.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackagingCreateManyArgs>(args?: SelectSubset<T, PackagingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Packaging.
     * @param {PackagingDeleteArgs} args - Arguments to delete one Packaging.
     * @example
     * // Delete one Packaging
     * const Packaging = await prisma.packaging.delete({
     *   where: {
     *     // ... filter to delete one Packaging
     *   }
     * })
     * 
     */
    delete<T extends PackagingDeleteArgs>(args: SelectSubset<T, PackagingDeleteArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Packaging.
     * @param {PackagingUpdateArgs} args - Arguments to update one Packaging.
     * @example
     * // Update one Packaging
     * const packaging = await prisma.packaging.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackagingUpdateArgs>(args: SelectSubset<T, PackagingUpdateArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packagings.
     * @param {PackagingDeleteManyArgs} args - Arguments to filter Packagings to delete.
     * @example
     * // Delete a few Packagings
     * const { count } = await prisma.packaging.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackagingDeleteManyArgs>(args?: SelectSubset<T, PackagingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packagings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packagings
     * const packaging = await prisma.packaging.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackagingUpdateManyArgs>(args: SelectSubset<T, PackagingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Packaging.
     * @param {PackagingUpsertArgs} args - Arguments to update or create a Packaging.
     * @example
     * // Update or create a Packaging
     * const packaging = await prisma.packaging.upsert({
     *   create: {
     *     // ... data to create a Packaging
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Packaging we want to update
     *   }
     * })
     */
    upsert<T extends PackagingUpsertArgs>(args: SelectSubset<T, PackagingUpsertArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packagings that matches the filter.
     * @param {PackagingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const packaging = await prisma.packaging.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PackagingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Packaging.
     * @param {PackagingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const packaging = await prisma.packaging.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PackagingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Packagings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingCountArgs} args - Arguments to filter Packagings to count.
     * @example
     * // Count the number of Packagings
     * const count = await prisma.packaging.count({
     *   where: {
     *     // ... the filter for the Packagings we want to count
     *   }
     * })
    **/
    count<T extends PackagingCountArgs>(
      args?: Subset<T, PackagingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackagingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Packaging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackagingAggregateArgs>(args: Subset<T, PackagingAggregateArgs>): Prisma.PrismaPromise<GetPackagingAggregateType<T>>

    /**
     * Group by Packaging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagingGroupByArgs} args - Group by arguments.
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
      T extends PackagingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackagingGroupByArgs['orderBy'] }
        : { orderBy?: PackagingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackagingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackagingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Packaging model
   */
  readonly fields: PackagingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Packaging.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackagingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Packaging$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Packaging$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Packaging model
   */
  interface PackagingFieldRefs {
    readonly id: FieldRef<"Packaging", 'String'>
    readonly name: FieldRef<"Packaging", 'String'>
    readonly remark: FieldRef<"Packaging", 'String'>
    readonly status: FieldRef<"Packaging", 'String'>
    readonly createAt: FieldRef<"Packaging", 'DateTime'>
    readonly updateAt: FieldRef<"Packaging", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Packaging findUnique
   */
  export type PackagingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter, which Packaging to fetch.
     */
    where: PackagingWhereUniqueInput
  }

  /**
   * Packaging findUniqueOrThrow
   */
  export type PackagingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter, which Packaging to fetch.
     */
    where: PackagingWhereUniqueInput
  }

  /**
   * Packaging findFirst
   */
  export type PackagingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter, which Packaging to fetch.
     */
    where?: PackagingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packagings to fetch.
     */
    orderBy?: PackagingOrderByWithRelationInput | PackagingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packagings.
     */
    cursor?: PackagingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packagings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packagings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packagings.
     */
    distinct?: PackagingScalarFieldEnum | PackagingScalarFieldEnum[]
  }

  /**
   * Packaging findFirstOrThrow
   */
  export type PackagingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter, which Packaging to fetch.
     */
    where?: PackagingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packagings to fetch.
     */
    orderBy?: PackagingOrderByWithRelationInput | PackagingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packagings.
     */
    cursor?: PackagingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packagings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packagings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packagings.
     */
    distinct?: PackagingScalarFieldEnum | PackagingScalarFieldEnum[]
  }

  /**
   * Packaging findMany
   */
  export type PackagingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter, which Packagings to fetch.
     */
    where?: PackagingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packagings to fetch.
     */
    orderBy?: PackagingOrderByWithRelationInput | PackagingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packagings.
     */
    cursor?: PackagingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packagings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packagings.
     */
    skip?: number
    distinct?: PackagingScalarFieldEnum | PackagingScalarFieldEnum[]
  }

  /**
   * Packaging create
   */
  export type PackagingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * The data needed to create a Packaging.
     */
    data: XOR<PackagingCreateInput, PackagingUncheckedCreateInput>
  }

  /**
   * Packaging createMany
   */
  export type PackagingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packagings.
     */
    data: PackagingCreateManyInput | PackagingCreateManyInput[]
  }

  /**
   * Packaging update
   */
  export type PackagingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * The data needed to update a Packaging.
     */
    data: XOR<PackagingUpdateInput, PackagingUncheckedUpdateInput>
    /**
     * Choose, which Packaging to update.
     */
    where: PackagingWhereUniqueInput
  }

  /**
   * Packaging updateMany
   */
  export type PackagingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packagings.
     */
    data: XOR<PackagingUpdateManyMutationInput, PackagingUncheckedUpdateManyInput>
    /**
     * Filter which Packagings to update
     */
    where?: PackagingWhereInput
    /**
     * Limit how many Packagings to update.
     */
    limit?: number
  }

  /**
   * Packaging upsert
   */
  export type PackagingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * The filter to search for the Packaging to update in case it exists.
     */
    where: PackagingWhereUniqueInput
    /**
     * In case the Packaging found by the `where` argument doesn't exist, create a new Packaging with this data.
     */
    create: XOR<PackagingCreateInput, PackagingUncheckedCreateInput>
    /**
     * In case the Packaging was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackagingUpdateInput, PackagingUncheckedUpdateInput>
  }

  /**
   * Packaging delete
   */
  export type PackagingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    /**
     * Filter which Packaging to delete.
     */
    where: PackagingWhereUniqueInput
  }

  /**
   * Packaging deleteMany
   */
  export type PackagingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packagings to delete
     */
    where?: PackagingWhereInput
    /**
     * Limit how many Packagings to delete.
     */
    limit?: number
  }

  /**
   * Packaging findRaw
   */
  export type PackagingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Packaging aggregateRaw
   */
  export type PackagingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Packaging.Product
   */
  export type Packaging$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Packaging without action
   */
  export type PackagingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    packagingId: string | null
    productTypeId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    remark: string | null
    status: string | null
    packagingId: string | null
    productTypeId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    remark: number
    status: number
    packagingId: number
    productTypeId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    packagingId?: true
    productTypeId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    packagingId?: true
    productTypeId?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    remark?: true
    status?: true
    packagingId?: true
    productTypeId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    remark: string | null
    status: string
    packagingId: string | null
    productTypeId: string | null
    createAt: Date | null
    updateAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    packagingId?: boolean
    productTypeId?: boolean
    createAt?: boolean
    updateAt?: boolean
    ProductFormular?: boolean | Product$ProductFormularArgs<ExtArgs>
    Packaging?: boolean | Product$PackagingArgs<ExtArgs>
    ProductType?: boolean | Product$ProductTypeArgs<ExtArgs>
    ProductionPlan?: boolean | Product$ProductionPlanArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    remark?: boolean
    status?: boolean
    packagingId?: boolean
    productTypeId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "remark" | "status" | "packagingId" | "productTypeId" | "createAt" | "updateAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductFormular?: boolean | Product$ProductFormularArgs<ExtArgs>
    Packaging?: boolean | Product$PackagingArgs<ExtArgs>
    ProductType?: boolean | Product$ProductTypeArgs<ExtArgs>
    ProductionPlan?: boolean | Product$ProductionPlanArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ProductFormular: Prisma.$ProductFormularPayload<ExtArgs>[]
      Packaging: Prisma.$PackagingPayload<ExtArgs> | null
      ProductType: Prisma.$ProductTypePayload<ExtArgs> | null
      ProductionPlan: Prisma.$ProductionPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      remark: string | null
      status: string
      packagingId: string | null
      productTypeId: string | null
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * @param {ProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const product = await prisma.product.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Product.
     * @param {ProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const product = await prisma.product.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductFormular<T extends Product$ProductFormularArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductFormularArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Packaging<T extends Product$PackagingArgs<ExtArgs> = {}>(args?: Subset<T, Product$PackagingArgs<ExtArgs>>): Prisma__PackagingClient<$Result.GetResult<Prisma.$PackagingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProductType<T extends Product$ProductTypeArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductTypeArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProductionPlan<T extends Product$ProductionPlanArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductionPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly remark: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly packagingId: FieldRef<"Product", 'String'>
    readonly productTypeId: FieldRef<"Product", 'String'>
    readonly createAt: FieldRef<"Product", 'DateTime'>
    readonly updateAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product findRaw
   */
  export type ProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Product aggregateRaw
   */
  export type ProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Product.ProductFormular
   */
  export type Product$ProductFormularArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    where?: ProductFormularWhereInput
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    cursor?: ProductFormularWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFormularScalarFieldEnum | ProductFormularScalarFieldEnum[]
  }

  /**
   * Product.Packaging
   */
  export type Product$PackagingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Packaging
     */
    select?: PackagingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Packaging
     */
    omit?: PackagingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagingInclude<ExtArgs> | null
    where?: PackagingWhereInput
  }

  /**
   * Product.ProductType
   */
  export type Product$ProductTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    where?: ProductTypeWhereInput
  }

  /**
   * Product.ProductionPlan
   */
  export type Product$ProductionPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    where?: ProductionPlanWhereInput
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    cursor?: ProductionPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductFormular
   */

  export type AggregateProductFormular = {
    _count: ProductFormularCountAggregateOutputType | null
    _avg: ProductFormularAvgAggregateOutputType | null
    _sum: ProductFormularSumAggregateOutputType | null
    _min: ProductFormularMinAggregateOutputType | null
    _max: ProductFormularMaxAggregateOutputType | null
  }

  export type ProductFormularAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductFormularSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductFormularMinAggregateOutputType = {
    id: string | null
    productId: string | null
    materialId: string | null
    quantity: number | null
    status: string | null
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductFormularMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    materialId: string | null
    quantity: number | null
    status: string | null
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductFormularCountAggregateOutputType = {
    id: number
    productId: number
    materialId: number
    quantity: number
    status: number
    remark: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductFormularAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductFormularSumAggregateInputType = {
    quantity?: true
  }

  export type ProductFormularMinAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
    quantity?: true
    status?: true
    remark?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductFormularMaxAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
    quantity?: true
    status?: true
    remark?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductFormularCountAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
    quantity?: true
    status?: true
    remark?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductFormularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFormular to aggregate.
     */
    where?: ProductFormularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFormulars to fetch.
     */
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductFormularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFormulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFormulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductFormulars
    **/
    _count?: true | ProductFormularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductFormularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductFormularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductFormularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductFormularMaxAggregateInputType
  }

  export type GetProductFormularAggregateType<T extends ProductFormularAggregateArgs> = {
        [P in keyof T & keyof AggregateProductFormular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductFormular[P]>
      : GetScalarType<T[P], AggregateProductFormular[P]>
  }




  export type ProductFormularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFormularWhereInput
    orderBy?: ProductFormularOrderByWithAggregationInput | ProductFormularOrderByWithAggregationInput[]
    by: ProductFormularScalarFieldEnum[] | ProductFormularScalarFieldEnum
    having?: ProductFormularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductFormularCountAggregateInputType | true
    _avg?: ProductFormularAvgAggregateInputType
    _sum?: ProductFormularSumAggregateInputType
    _min?: ProductFormularMinAggregateInputType
    _max?: ProductFormularMaxAggregateInputType
  }

  export type ProductFormularGroupByOutputType = {
    id: string
    productId: string
    materialId: string
    quantity: number
    status: string
    remark: string | null
    createAt: Date | null
    updateAt: Date | null
    _count: ProductFormularCountAggregateOutputType | null
    _avg: ProductFormularAvgAggregateOutputType | null
    _sum: ProductFormularSumAggregateOutputType | null
    _min: ProductFormularMinAggregateOutputType | null
    _max: ProductFormularMaxAggregateOutputType | null
  }

  type GetProductFormularGroupByPayload<T extends ProductFormularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductFormularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductFormularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductFormularGroupByOutputType[P]>
            : GetScalarType<T[P], ProductFormularGroupByOutputType[P]>
        }
      >
    >


  export type ProductFormularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    materialId?: boolean
    quantity?: boolean
    status?: boolean
    remark?: boolean
    createAt?: boolean
    updateAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFormular"]>



  export type ProductFormularSelectScalar = {
    id?: boolean
    productId?: boolean
    materialId?: boolean
    quantity?: boolean
    status?: boolean
    remark?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductFormularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "materialId" | "quantity" | "status" | "remark" | "createAt" | "updateAt", ExtArgs["result"]["productFormular"]>
  export type ProductFormularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ProductFormularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductFormular"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      Material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      materialId: string
      quantity: number
      status: string
      remark: string | null
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["productFormular"]>
    composites: {}
  }

  type ProductFormularGetPayload<S extends boolean | null | undefined | ProductFormularDefaultArgs> = $Result.GetResult<Prisma.$ProductFormularPayload, S>

  type ProductFormularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFormularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductFormularCountAggregateInputType | true
    }

  export interface ProductFormularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductFormular'], meta: { name: 'ProductFormular' } }
    /**
     * Find zero or one ProductFormular that matches the filter.
     * @param {ProductFormularFindUniqueArgs} args - Arguments to find a ProductFormular
     * @example
     * // Get one ProductFormular
     * const productFormular = await prisma.productFormular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFormularFindUniqueArgs>(args: SelectSubset<T, ProductFormularFindUniqueArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductFormular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFormularFindUniqueOrThrowArgs} args - Arguments to find a ProductFormular
     * @example
     * // Get one ProductFormular
     * const productFormular = await prisma.productFormular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFormularFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFormularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductFormular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularFindFirstArgs} args - Arguments to find a ProductFormular
     * @example
     * // Get one ProductFormular
     * const productFormular = await prisma.productFormular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFormularFindFirstArgs>(args?: SelectSubset<T, ProductFormularFindFirstArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductFormular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularFindFirstOrThrowArgs} args - Arguments to find a ProductFormular
     * @example
     * // Get one ProductFormular
     * const productFormular = await prisma.productFormular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFormularFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFormularFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductFormulars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductFormulars
     * const productFormulars = await prisma.productFormular.findMany()
     * 
     * // Get first 10 ProductFormulars
     * const productFormulars = await prisma.productFormular.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productFormularWithIdOnly = await prisma.productFormular.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFormularFindManyArgs>(args?: SelectSubset<T, ProductFormularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductFormular.
     * @param {ProductFormularCreateArgs} args - Arguments to create a ProductFormular.
     * @example
     * // Create one ProductFormular
     * const ProductFormular = await prisma.productFormular.create({
     *   data: {
     *     // ... data to create a ProductFormular
     *   }
     * })
     * 
     */
    create<T extends ProductFormularCreateArgs>(args: SelectSubset<T, ProductFormularCreateArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductFormulars.
     * @param {ProductFormularCreateManyArgs} args - Arguments to create many ProductFormulars.
     * @example
     * // Create many ProductFormulars
     * const productFormular = await prisma.productFormular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductFormularCreateManyArgs>(args?: SelectSubset<T, ProductFormularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductFormular.
     * @param {ProductFormularDeleteArgs} args - Arguments to delete one ProductFormular.
     * @example
     * // Delete one ProductFormular
     * const ProductFormular = await prisma.productFormular.delete({
     *   where: {
     *     // ... filter to delete one ProductFormular
     *   }
     * })
     * 
     */
    delete<T extends ProductFormularDeleteArgs>(args: SelectSubset<T, ProductFormularDeleteArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductFormular.
     * @param {ProductFormularUpdateArgs} args - Arguments to update one ProductFormular.
     * @example
     * // Update one ProductFormular
     * const productFormular = await prisma.productFormular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductFormularUpdateArgs>(args: SelectSubset<T, ProductFormularUpdateArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductFormulars.
     * @param {ProductFormularDeleteManyArgs} args - Arguments to filter ProductFormulars to delete.
     * @example
     * // Delete a few ProductFormulars
     * const { count } = await prisma.productFormular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductFormularDeleteManyArgs>(args?: SelectSubset<T, ProductFormularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFormulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductFormulars
     * const productFormular = await prisma.productFormular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductFormularUpdateManyArgs>(args: SelectSubset<T, ProductFormularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductFormular.
     * @param {ProductFormularUpsertArgs} args - Arguments to update or create a ProductFormular.
     * @example
     * // Update or create a ProductFormular
     * const productFormular = await prisma.productFormular.upsert({
     *   create: {
     *     // ... data to create a ProductFormular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductFormular we want to update
     *   }
     * })
     */
    upsert<T extends ProductFormularUpsertArgs>(args: SelectSubset<T, ProductFormularUpsertArgs<ExtArgs>>): Prisma__ProductFormularClient<$Result.GetResult<Prisma.$ProductFormularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductFormulars that matches the filter.
     * @param {ProductFormularFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productFormular = await prisma.productFormular.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductFormularFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductFormular.
     * @param {ProductFormularAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productFormular = await prisma.productFormular.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductFormularAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductFormulars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularCountArgs} args - Arguments to filter ProductFormulars to count.
     * @example
     * // Count the number of ProductFormulars
     * const count = await prisma.productFormular.count({
     *   where: {
     *     // ... the filter for the ProductFormulars we want to count
     *   }
     * })
    **/
    count<T extends ProductFormularCountArgs>(
      args?: Subset<T, ProductFormularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductFormularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductFormular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductFormularAggregateArgs>(args: Subset<T, ProductFormularAggregateArgs>): Prisma.PrismaPromise<GetProductFormularAggregateType<T>>

    /**
     * Group by ProductFormular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFormularGroupByArgs} args - Group by arguments.
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
      T extends ProductFormularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductFormularGroupByArgs['orderBy'] }
        : { orderBy?: ProductFormularGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductFormularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductFormularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductFormular model
   */
  readonly fields: ProductFormularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductFormular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductFormularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductFormular model
   */
  interface ProductFormularFieldRefs {
    readonly id: FieldRef<"ProductFormular", 'String'>
    readonly productId: FieldRef<"ProductFormular", 'String'>
    readonly materialId: FieldRef<"ProductFormular", 'String'>
    readonly quantity: FieldRef<"ProductFormular", 'Float'>
    readonly status: FieldRef<"ProductFormular", 'String'>
    readonly remark: FieldRef<"ProductFormular", 'String'>
    readonly createAt: FieldRef<"ProductFormular", 'DateTime'>
    readonly updateAt: FieldRef<"ProductFormular", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductFormular findUnique
   */
  export type ProductFormularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter, which ProductFormular to fetch.
     */
    where: ProductFormularWhereUniqueInput
  }

  /**
   * ProductFormular findUniqueOrThrow
   */
  export type ProductFormularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter, which ProductFormular to fetch.
     */
    where: ProductFormularWhereUniqueInput
  }

  /**
   * ProductFormular findFirst
   */
  export type ProductFormularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter, which ProductFormular to fetch.
     */
    where?: ProductFormularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFormulars to fetch.
     */
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFormulars.
     */
    cursor?: ProductFormularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFormulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFormulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFormulars.
     */
    distinct?: ProductFormularScalarFieldEnum | ProductFormularScalarFieldEnum[]
  }

  /**
   * ProductFormular findFirstOrThrow
   */
  export type ProductFormularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter, which ProductFormular to fetch.
     */
    where?: ProductFormularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFormulars to fetch.
     */
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFormulars.
     */
    cursor?: ProductFormularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFormulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFormulars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFormulars.
     */
    distinct?: ProductFormularScalarFieldEnum | ProductFormularScalarFieldEnum[]
  }

  /**
   * ProductFormular findMany
   */
  export type ProductFormularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter, which ProductFormulars to fetch.
     */
    where?: ProductFormularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFormulars to fetch.
     */
    orderBy?: ProductFormularOrderByWithRelationInput | ProductFormularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductFormulars.
     */
    cursor?: ProductFormularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFormulars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFormulars.
     */
    skip?: number
    distinct?: ProductFormularScalarFieldEnum | ProductFormularScalarFieldEnum[]
  }

  /**
   * ProductFormular create
   */
  export type ProductFormularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductFormular.
     */
    data: XOR<ProductFormularCreateInput, ProductFormularUncheckedCreateInput>
  }

  /**
   * ProductFormular createMany
   */
  export type ProductFormularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductFormulars.
     */
    data: ProductFormularCreateManyInput | ProductFormularCreateManyInput[]
  }

  /**
   * ProductFormular update
   */
  export type ProductFormularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductFormular.
     */
    data: XOR<ProductFormularUpdateInput, ProductFormularUncheckedUpdateInput>
    /**
     * Choose, which ProductFormular to update.
     */
    where: ProductFormularWhereUniqueInput
  }

  /**
   * ProductFormular updateMany
   */
  export type ProductFormularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductFormulars.
     */
    data: XOR<ProductFormularUpdateManyMutationInput, ProductFormularUncheckedUpdateManyInput>
    /**
     * Filter which ProductFormulars to update
     */
    where?: ProductFormularWhereInput
    /**
     * Limit how many ProductFormulars to update.
     */
    limit?: number
  }

  /**
   * ProductFormular upsert
   */
  export type ProductFormularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductFormular to update in case it exists.
     */
    where: ProductFormularWhereUniqueInput
    /**
     * In case the ProductFormular found by the `where` argument doesn't exist, create a new ProductFormular with this data.
     */
    create: XOR<ProductFormularCreateInput, ProductFormularUncheckedCreateInput>
    /**
     * In case the ProductFormular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductFormularUpdateInput, ProductFormularUncheckedUpdateInput>
  }

  /**
   * ProductFormular delete
   */
  export type ProductFormularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
    /**
     * Filter which ProductFormular to delete.
     */
    where: ProductFormularWhereUniqueInput
  }

  /**
   * ProductFormular deleteMany
   */
  export type ProductFormularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFormulars to delete
     */
    where?: ProductFormularWhereInput
    /**
     * Limit how many ProductFormulars to delete.
     */
    limit?: number
  }

  /**
   * ProductFormular findRaw
   */
  export type ProductFormularFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductFormular aggregateRaw
   */
  export type ProductFormularAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductFormular without action
   */
  export type ProductFormularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFormular
     */
    select?: ProductFormularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFormular
     */
    omit?: ProductFormularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFormularInclude<ExtArgs> | null
  }


  /**
   * Model ProductionPlan
   */

  export type AggregateProductionPlan = {
    _count: ProductionPlanCountAggregateOutputType | null
    _avg: ProductionPlanAvgAggregateOutputType | null
    _sum: ProductionPlanSumAggregateOutputType | null
    _min: ProductionPlanMinAggregateOutputType | null
    _max: ProductionPlanMaxAggregateOutputType | null
  }

  export type ProductionPlanAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionPlanSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionPlanMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    productId: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductionPlanMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    productId: string | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductionPlanCountAggregateOutputType = {
    id: number
    quantity: number
    productId: number
    remark: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductionPlanAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductionPlanSumAggregateInputType = {
    quantity?: true
  }

  export type ProductionPlanMinAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductionPlanMaxAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductionPlanCountAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionPlan to aggregate.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionPlans
    **/
    _count?: true | ProductionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionPlanMaxAggregateInputType
  }

  export type GetProductionPlanAggregateType<T extends ProductionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionPlan[P]>
      : GetScalarType<T[P], AggregateProductionPlan[P]>
  }




  export type ProductionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionPlanWhereInput
    orderBy?: ProductionPlanOrderByWithAggregationInput | ProductionPlanOrderByWithAggregationInput[]
    by: ProductionPlanScalarFieldEnum[] | ProductionPlanScalarFieldEnum
    having?: ProductionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionPlanCountAggregateInputType | true
    _avg?: ProductionPlanAvgAggregateInputType
    _sum?: ProductionPlanSumAggregateInputType
    _min?: ProductionPlanMinAggregateInputType
    _max?: ProductionPlanMaxAggregateInputType
  }

  export type ProductionPlanGroupByOutputType = {
    id: string
    quantity: number
    productId: string
    remark: string | null
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: ProductionPlanCountAggregateOutputType | null
    _avg: ProductionPlanAvgAggregateOutputType | null
    _sum: ProductionPlanSumAggregateOutputType | null
    _min: ProductionPlanMinAggregateOutputType | null
    _max: ProductionPlanMaxAggregateOutputType | null
  }

  type GetProductionPlanGroupByPayload<T extends ProductionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionPlanGroupByOutputType[P]>
        }
      >
    >


  export type ProductionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    productId?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Production?: boolean | ProductionPlan$ProductionArgs<ExtArgs>
    _count?: boolean | ProductionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionPlan"]>



  export type ProductionPlanSelectScalar = {
    id?: boolean
    quantity?: boolean
    productId?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "productId" | "remark" | "status" | "createAt" | "updateAt", ExtArgs["result"]["productionPlan"]>
  export type ProductionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Production?: boolean | ProductionPlan$ProductionArgs<ExtArgs>
    _count?: boolean | ProductionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionPlan"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      Production: Prisma.$ProductionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      productId: string
      remark: string | null
      status: string
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["productionPlan"]>
    composites: {}
  }

  type ProductionPlanGetPayload<S extends boolean | null | undefined | ProductionPlanDefaultArgs> = $Result.GetResult<Prisma.$ProductionPlanPayload, S>

  type ProductionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionPlanCountAggregateInputType | true
    }

  export interface ProductionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionPlan'], meta: { name: 'ProductionPlan' } }
    /**
     * Find zero or one ProductionPlan that matches the filter.
     * @param {ProductionPlanFindUniqueArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionPlanFindUniqueArgs>(args: SelectSubset<T, ProductionPlanFindUniqueArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionPlanFindUniqueOrThrowArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindFirstArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionPlanFindFirstArgs>(args?: SelectSubset<T, ProductionPlanFindFirstArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindFirstOrThrowArgs} args - Arguments to find a ProductionPlan
     * @example
     * // Get one ProductionPlan
     * const productionPlan = await prisma.productionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionPlans
     * const productionPlans = await prisma.productionPlan.findMany()
     * 
     * // Get first 10 ProductionPlans
     * const productionPlans = await prisma.productionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionPlanWithIdOnly = await prisma.productionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionPlanFindManyArgs>(args?: SelectSubset<T, ProductionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionPlan.
     * @param {ProductionPlanCreateArgs} args - Arguments to create a ProductionPlan.
     * @example
     * // Create one ProductionPlan
     * const ProductionPlan = await prisma.productionPlan.create({
     *   data: {
     *     // ... data to create a ProductionPlan
     *   }
     * })
     * 
     */
    create<T extends ProductionPlanCreateArgs>(args: SelectSubset<T, ProductionPlanCreateArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionPlans.
     * @param {ProductionPlanCreateManyArgs} args - Arguments to create many ProductionPlans.
     * @example
     * // Create many ProductionPlans
     * const productionPlan = await prisma.productionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionPlanCreateManyArgs>(args?: SelectSubset<T, ProductionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductionPlan.
     * @param {ProductionPlanDeleteArgs} args - Arguments to delete one ProductionPlan.
     * @example
     * // Delete one ProductionPlan
     * const ProductionPlan = await prisma.productionPlan.delete({
     *   where: {
     *     // ... filter to delete one ProductionPlan
     *   }
     * })
     * 
     */
    delete<T extends ProductionPlanDeleteArgs>(args: SelectSubset<T, ProductionPlanDeleteArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionPlan.
     * @param {ProductionPlanUpdateArgs} args - Arguments to update one ProductionPlan.
     * @example
     * // Update one ProductionPlan
     * const productionPlan = await prisma.productionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionPlanUpdateArgs>(args: SelectSubset<T, ProductionPlanUpdateArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionPlans.
     * @param {ProductionPlanDeleteManyArgs} args - Arguments to filter ProductionPlans to delete.
     * @example
     * // Delete a few ProductionPlans
     * const { count } = await prisma.productionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionPlanDeleteManyArgs>(args?: SelectSubset<T, ProductionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionPlans
     * const productionPlan = await prisma.productionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionPlanUpdateManyArgs>(args: SelectSubset<T, ProductionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductionPlan.
     * @param {ProductionPlanUpsertArgs} args - Arguments to update or create a ProductionPlan.
     * @example
     * // Update or create a ProductionPlan
     * const productionPlan = await prisma.productionPlan.upsert({
     *   create: {
     *     // ... data to create a ProductionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionPlan we want to update
     *   }
     * })
     */
    upsert<T extends ProductionPlanUpsertArgs>(args: SelectSubset<T, ProductionPlanUpsertArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionPlans that matches the filter.
     * @param {ProductionPlanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const productionPlan = await prisma.productionPlan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductionPlanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProductionPlan.
     * @param {ProductionPlanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const productionPlan = await prisma.productionPlan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductionPlanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProductionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanCountArgs} args - Arguments to filter ProductionPlans to count.
     * @example
     * // Count the number of ProductionPlans
     * const count = await prisma.productionPlan.count({
     *   where: {
     *     // ... the filter for the ProductionPlans we want to count
     *   }
     * })
    **/
    count<T extends ProductionPlanCountArgs>(
      args?: Subset<T, ProductionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionPlanAggregateArgs>(args: Subset<T, ProductionPlanAggregateArgs>): Prisma.PrismaPromise<GetProductionPlanAggregateType<T>>

    /**
     * Group by ProductionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionPlanGroupByArgs} args - Group by arguments.
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
      T extends ProductionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionPlanGroupByArgs['orderBy'] }
        : { orderBy?: ProductionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionPlan model
   */
  readonly fields: ProductionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Production<T extends ProductionPlan$ProductionArgs<ExtArgs> = {}>(args?: Subset<T, ProductionPlan$ProductionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductionPlan model
   */
  interface ProductionPlanFieldRefs {
    readonly id: FieldRef<"ProductionPlan", 'String'>
    readonly quantity: FieldRef<"ProductionPlan", 'Float'>
    readonly productId: FieldRef<"ProductionPlan", 'String'>
    readonly remark: FieldRef<"ProductionPlan", 'String'>
    readonly status: FieldRef<"ProductionPlan", 'String'>
    readonly createAt: FieldRef<"ProductionPlan", 'DateTime'>
    readonly updateAt: FieldRef<"ProductionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductionPlan findUnique
   */
  export type ProductionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan findUniqueOrThrow
   */
  export type ProductionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan findFirst
   */
  export type ProductionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionPlans.
     */
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan findFirstOrThrow
   */
  export type ProductionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter, which ProductionPlan to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionPlans.
     */
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan findMany
   */
  export type ProductionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter, which ProductionPlans to fetch.
     */
    where?: ProductionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionPlans to fetch.
     */
    orderBy?: ProductionPlanOrderByWithRelationInput | ProductionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionPlans.
     */
    cursor?: ProductionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionPlans.
     */
    skip?: number
    distinct?: ProductionPlanScalarFieldEnum | ProductionPlanScalarFieldEnum[]
  }

  /**
   * ProductionPlan create
   */
  export type ProductionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionPlan.
     */
    data: XOR<ProductionPlanCreateInput, ProductionPlanUncheckedCreateInput>
  }

  /**
   * ProductionPlan createMany
   */
  export type ProductionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionPlans.
     */
    data: ProductionPlanCreateManyInput | ProductionPlanCreateManyInput[]
  }

  /**
   * ProductionPlan update
   */
  export type ProductionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionPlan.
     */
    data: XOR<ProductionPlanUpdateInput, ProductionPlanUncheckedUpdateInput>
    /**
     * Choose, which ProductionPlan to update.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan updateMany
   */
  export type ProductionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionPlans.
     */
    data: XOR<ProductionPlanUpdateManyMutationInput, ProductionPlanUncheckedUpdateManyInput>
    /**
     * Filter which ProductionPlans to update
     */
    where?: ProductionPlanWhereInput
    /**
     * Limit how many ProductionPlans to update.
     */
    limit?: number
  }

  /**
   * ProductionPlan upsert
   */
  export type ProductionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionPlan to update in case it exists.
     */
    where: ProductionPlanWhereUniqueInput
    /**
     * In case the ProductionPlan found by the `where` argument doesn't exist, create a new ProductionPlan with this data.
     */
    create: XOR<ProductionPlanCreateInput, ProductionPlanUncheckedCreateInput>
    /**
     * In case the ProductionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionPlanUpdateInput, ProductionPlanUncheckedUpdateInput>
  }

  /**
   * ProductionPlan delete
   */
  export type ProductionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
    /**
     * Filter which ProductionPlan to delete.
     */
    where: ProductionPlanWhereUniqueInput
  }

  /**
   * ProductionPlan deleteMany
   */
  export type ProductionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionPlans to delete
     */
    where?: ProductionPlanWhereInput
    /**
     * Limit how many ProductionPlans to delete.
     */
    limit?: number
  }

  /**
   * ProductionPlan findRaw
   */
  export type ProductionPlanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductionPlan aggregateRaw
   */
  export type ProductionPlanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProductionPlan.Production
   */
  export type ProductionPlan$ProductionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    cursor?: ProductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * ProductionPlan without action
   */
  export type ProductionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionPlan
     */
    select?: ProductionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionPlan
     */
    omit?: ProductionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Production
   */

  export type AggregateProduction = {
    _count: ProductionCountAggregateOutputType | null
    _avg: ProductionAvgAggregateOutputType | null
    _sum: ProductionSumAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  export type ProductionAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionSumAggregateOutputType = {
    quantity: number | null
  }

  export type ProductionMinAggregateOutputType = {
    id: string | null
    productionPlanId: string | null
    quantity: number | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductionMaxAggregateOutputType = {
    id: string | null
    productionPlanId: string | null
    quantity: number | null
    remark: string | null
    status: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ProductionCountAggregateOutputType = {
    id: number
    productionPlanId: number
    quantity: number
    remark: number
    status: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ProductionAvgAggregateInputType = {
    quantity?: true
  }

  export type ProductionSumAggregateInputType = {
    quantity?: true
  }

  export type ProductionMinAggregateInputType = {
    id?: true
    productionPlanId?: true
    quantity?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductionMaxAggregateInputType = {
    id?: true
    productionPlanId?: true
    quantity?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
  }

  export type ProductionCountAggregateInputType = {
    id?: true
    productionPlanId?: true
    quantity?: true
    remark?: true
    status?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ProductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Production to aggregate.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productions
    **/
    _count?: true | ProductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionMaxAggregateInputType
  }

  export type GetProductionAggregateType<T extends ProductionAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction[P]>
      : GetScalarType<T[P], AggregateProduction[P]>
  }




  export type ProductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithAggregationInput | ProductionOrderByWithAggregationInput[]
    by: ProductionScalarFieldEnum[] | ProductionScalarFieldEnum
    having?: ProductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionCountAggregateInputType | true
    _avg?: ProductionAvgAggregateInputType
    _sum?: ProductionSumAggregateInputType
    _min?: ProductionMinAggregateInputType
    _max?: ProductionMaxAggregateInputType
  }

  export type ProductionGroupByOutputType = {
    id: string
    productionPlanId: string
    quantity: number
    remark: string | null
    status: string
    createAt: Date | null
    updateAt: Date | null
    _count: ProductionCountAggregateOutputType | null
    _avg: ProductionAvgAggregateOutputType | null
    _sum: ProductionSumAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  type GetProductionGroupByPayload<T extends ProductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionGroupByOutputType[P]>
        }
      >
    >


  export type ProductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productionPlanId?: boolean
    quantity?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    ProductionPlan?: boolean | ProductionPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>



  export type ProductionSelectScalar = {
    id?: boolean
    productionPlanId?: boolean
    quantity?: boolean
    remark?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ProductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productionPlanId" | "quantity" | "remark" | "status" | "createAt" | "updateAt", ExtArgs["result"]["production"]>
  export type ProductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductionPlan?: boolean | ProductionPlanDefaultArgs<ExtArgs>
  }

  export type $ProductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Production"
    objects: {
      ProductionPlan: Prisma.$ProductionPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productionPlanId: string
      quantity: number
      remark: string | null
      status: string
      createAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["production"]>
    composites: {}
  }

  type ProductionGetPayload<S extends boolean | null | undefined | ProductionDefaultArgs> = $Result.GetResult<Prisma.$ProductionPayload, S>

  type ProductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionCountAggregateInputType | true
    }

  export interface ProductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Production'], meta: { name: 'Production' } }
    /**
     * Find zero or one Production that matches the filter.
     * @param {ProductionFindUniqueArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionFindUniqueArgs>(args: SelectSubset<T, ProductionFindUniqueArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Production that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionFindUniqueOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionFindFirstArgs>(args?: SelectSubset<T, ProductionFindFirstArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productions
     * const productions = await prisma.production.findMany()
     * 
     * // Get first 10 Productions
     * const productions = await prisma.production.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionWithIdOnly = await prisma.production.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionFindManyArgs>(args?: SelectSubset<T, ProductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Production.
     * @param {ProductionCreateArgs} args - Arguments to create a Production.
     * @example
     * // Create one Production
     * const Production = await prisma.production.create({
     *   data: {
     *     // ... data to create a Production
     *   }
     * })
     * 
     */
    create<T extends ProductionCreateArgs>(args: SelectSubset<T, ProductionCreateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productions.
     * @param {ProductionCreateManyArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const production = await prisma.production.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionCreateManyArgs>(args?: SelectSubset<T, ProductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Production.
     * @param {ProductionDeleteArgs} args - Arguments to delete one Production.
     * @example
     * // Delete one Production
     * const Production = await prisma.production.delete({
     *   where: {
     *     // ... filter to delete one Production
     *   }
     * })
     * 
     */
    delete<T extends ProductionDeleteArgs>(args: SelectSubset<T, ProductionDeleteArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Production.
     * @param {ProductionUpdateArgs} args - Arguments to update one Production.
     * @example
     * // Update one Production
     * const production = await prisma.production.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionUpdateArgs>(args: SelectSubset<T, ProductionUpdateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productions.
     * @param {ProductionDeleteManyArgs} args - Arguments to filter Productions to delete.
     * @example
     * // Delete a few Productions
     * const { count } = await prisma.production.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionDeleteManyArgs>(args?: SelectSubset<T, ProductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productions
     * const production = await prisma.production.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionUpdateManyArgs>(args: SelectSubset<T, ProductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Production.
     * @param {ProductionUpsertArgs} args - Arguments to update or create a Production.
     * @example
     * // Update or create a Production
     * const production = await prisma.production.upsert({
     *   create: {
     *     // ... data to create a Production
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production we want to update
     *   }
     * })
     */
    upsert<T extends ProductionUpsertArgs>(args: SelectSubset<T, ProductionUpsertArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productions that matches the filter.
     * @param {ProductionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const production = await prisma.production.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProductionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Production.
     * @param {ProductionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const production = await prisma.production.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProductionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCountArgs} args - Arguments to filter Productions to count.
     * @example
     * // Count the number of Productions
     * const count = await prisma.production.count({
     *   where: {
     *     // ... the filter for the Productions we want to count
     *   }
     * })
    **/
    count<T extends ProductionCountArgs>(
      args?: Subset<T, ProductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionAggregateArgs>(args: Subset<T, ProductionAggregateArgs>): Prisma.PrismaPromise<GetProductionAggregateType<T>>

    /**
     * Group by Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionGroupByArgs} args - Group by arguments.
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
      T extends ProductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionGroupByArgs['orderBy'] }
        : { orderBy?: ProductionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Production model
   */
  readonly fields: ProductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Production.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductionPlan<T extends ProductionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductionPlanDefaultArgs<ExtArgs>>): Prisma__ProductionPlanClient<$Result.GetResult<Prisma.$ProductionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Production model
   */
  interface ProductionFieldRefs {
    readonly id: FieldRef<"Production", 'String'>
    readonly productionPlanId: FieldRef<"Production", 'String'>
    readonly quantity: FieldRef<"Production", 'Float'>
    readonly remark: FieldRef<"Production", 'String'>
    readonly status: FieldRef<"Production", 'String'>
    readonly createAt: FieldRef<"Production", 'DateTime'>
    readonly updateAt: FieldRef<"Production", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Production findUnique
   */
  export type ProductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findUniqueOrThrow
   */
  export type ProductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findFirst
   */
  export type ProductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findFirstOrThrow
   */
  export type ProductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findMany
   */
  export type ProductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Productions to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production create
   */
  export type ProductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to create a Production.
     */
    data: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
  }

  /**
   * Production createMany
   */
  export type ProductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productions.
     */
    data: ProductionCreateManyInput | ProductionCreateManyInput[]
  }

  /**
   * Production update
   */
  export type ProductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to update a Production.
     */
    data: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
    /**
     * Choose, which Production to update.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production updateMany
   */
  export type ProductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productions.
     */
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyInput>
    /**
     * Filter which Productions to update
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to update.
     */
    limit?: number
  }

  /**
   * Production upsert
   */
  export type ProductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The filter to search for the Production to update in case it exists.
     */
    where: ProductionWhereUniqueInput
    /**
     * In case the Production found by the `where` argument doesn't exist, create a new Production with this data.
     */
    create: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
    /**
     * In case the Production was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
  }

  /**
   * Production delete
   */
  export type ProductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter which Production to delete.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production deleteMany
   */
  export type ProductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productions to delete
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to delete.
     */
    limit?: number
  }

  /**
   * Production findRaw
   */
  export type ProductionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Production aggregateRaw
   */
  export type ProductionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Production without action
   */
  export type ProductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    level: 'level',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    remark: 'remark',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    price: 'price',
    remark: 'remark',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const StockMaterialScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    quantity: 'quantity',
    price: 'price',
    remark: 'remark',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type StockMaterialScalarFieldEnum = (typeof StockMaterialScalarFieldEnum)[keyof typeof StockMaterialScalarFieldEnum]


  export const PackagingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    remark: 'remark',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PackagingScalarFieldEnum = (typeof PackagingScalarFieldEnum)[keyof typeof PackagingScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    remark: 'remark',
    status: 'status',
    packagingId: 'packagingId',
    productTypeId: 'productTypeId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductFormularScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    materialId: 'materialId',
    quantity: 'quantity',
    status: 'status',
    remark: 'remark',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductFormularScalarFieldEnum = (typeof ProductFormularScalarFieldEnum)[keyof typeof ProductFormularScalarFieldEnum]


  export const ProductionPlanScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    productId: 'productId',
    remark: 'remark',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductionPlanScalarFieldEnum = (typeof ProductionPlanScalarFieldEnum)[keyof typeof ProductionPlanScalarFieldEnum]


  export const ProductionScalarFieldEnum: {
    id: 'id',
    productionPlanId: 'productionPlanId',
    quantity: 'quantity',
    remark: 'remark',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ProductionScalarFieldEnum = (typeof ProductionScalarFieldEnum)[keyof typeof ProductionScalarFieldEnum]


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    level?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    level?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    level?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProductTypeWhereInput = {
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    id?: StringFilter<"ProductType"> | string
    name?: StringFilter<"ProductType"> | string
    remark?: StringNullableFilter<"ProductType"> | string | null
    status?: StringFilter<"ProductType"> | string
    createAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    Product?: ProductListRelationFilter
  }

  export type ProductTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type ProductTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    name?: StringFilter<"ProductType"> | string
    remark?: StringNullableFilter<"ProductType"> | string | null
    status?: StringFilter<"ProductType"> | string
    createAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductType"> | Date | string | null
    Product?: ProductListRelationFilter
  }, "id">

  export type ProductTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    OR?: ProductTypeScalarWhereWithAggregatesInput[]
    NOT?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductType"> | string
    name?: StringWithAggregatesFilter<"ProductType"> | string
    remark?: StringNullableWithAggregatesFilter<"ProductType"> | string | null
    status?: StringWithAggregatesFilter<"ProductType"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"ProductType"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"ProductType"> | Date | string | null
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    unit?: StringFilter<"Material"> | string
    price?: IntFilter<"Material"> | number
    remark?: StringNullableFilter<"Material"> | string | null
    status?: StringFilter<"Material"> | string
    createAt?: DateTimeNullableFilter<"Material"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Material"> | Date | string | null
    StockMaterial?: StockMaterialListRelationFilter
    ProductFormular?: ProductFormularListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    StockMaterial?: StockMaterialOrderByRelationAggregateInput
    ProductFormular?: ProductFormularOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    name?: StringFilter<"Material"> | string
    unit?: StringFilter<"Material"> | string
    price?: IntFilter<"Material"> | number
    remark?: StringNullableFilter<"Material"> | string | null
    status?: StringFilter<"Material"> | string
    createAt?: DateTimeNullableFilter<"Material"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Material"> | Date | string | null
    StockMaterial?: StockMaterialListRelationFilter
    ProductFormular?: ProductFormularListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    unit?: StringWithAggregatesFilter<"Material"> | string
    price?: IntWithAggregatesFilter<"Material"> | number
    remark?: StringNullableWithAggregatesFilter<"Material"> | string | null
    status?: StringWithAggregatesFilter<"Material"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"Material"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Material"> | Date | string | null
  }

  export type StockMaterialWhereInput = {
    AND?: StockMaterialWhereInput | StockMaterialWhereInput[]
    OR?: StockMaterialWhereInput[]
    NOT?: StockMaterialWhereInput | StockMaterialWhereInput[]
    id?: StringFilter<"StockMaterial"> | string
    materialId?: StringFilter<"StockMaterial"> | string
    quantity?: IntFilter<"StockMaterial"> | number
    price?: IntFilter<"StockMaterial"> | number
    remark?: StringNullableFilter<"StockMaterial"> | string | null
    createAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
    Material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type StockMaterialOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Material?: MaterialOrderByWithRelationInput
  }

  export type StockMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMaterialWhereInput | StockMaterialWhereInput[]
    OR?: StockMaterialWhereInput[]
    NOT?: StockMaterialWhereInput | StockMaterialWhereInput[]
    materialId?: StringFilter<"StockMaterial"> | string
    quantity?: IntFilter<"StockMaterial"> | number
    price?: IntFilter<"StockMaterial"> | number
    remark?: StringNullableFilter<"StockMaterial"> | string | null
    createAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
    Material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type StockMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: StockMaterialCountOrderByAggregateInput
    _avg?: StockMaterialAvgOrderByAggregateInput
    _max?: StockMaterialMaxOrderByAggregateInput
    _min?: StockMaterialMinOrderByAggregateInput
    _sum?: StockMaterialSumOrderByAggregateInput
  }

  export type StockMaterialScalarWhereWithAggregatesInput = {
    AND?: StockMaterialScalarWhereWithAggregatesInput | StockMaterialScalarWhereWithAggregatesInput[]
    OR?: StockMaterialScalarWhereWithAggregatesInput[]
    NOT?: StockMaterialScalarWhereWithAggregatesInput | StockMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMaterial"> | string
    materialId?: StringWithAggregatesFilter<"StockMaterial"> | string
    quantity?: IntWithAggregatesFilter<"StockMaterial"> | number
    price?: IntWithAggregatesFilter<"StockMaterial"> | number
    remark?: StringNullableWithAggregatesFilter<"StockMaterial"> | string | null
    createAt?: DateTimeNullableWithAggregatesFilter<"StockMaterial"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"StockMaterial"> | Date | string | null
  }

  export type PackagingWhereInput = {
    AND?: PackagingWhereInput | PackagingWhereInput[]
    OR?: PackagingWhereInput[]
    NOT?: PackagingWhereInput | PackagingWhereInput[]
    id?: StringFilter<"Packaging"> | string
    name?: StringFilter<"Packaging"> | string
    remark?: StringNullableFilter<"Packaging"> | string | null
    status?: StringFilter<"Packaging"> | string
    createAt?: DateTimeNullableFilter<"Packaging"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Packaging"> | Date | string | null
    Product?: ProductListRelationFilter
  }

  export type PackagingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type PackagingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackagingWhereInput | PackagingWhereInput[]
    OR?: PackagingWhereInput[]
    NOT?: PackagingWhereInput | PackagingWhereInput[]
    name?: StringFilter<"Packaging"> | string
    remark?: StringNullableFilter<"Packaging"> | string | null
    status?: StringFilter<"Packaging"> | string
    createAt?: DateTimeNullableFilter<"Packaging"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Packaging"> | Date | string | null
    Product?: ProductListRelationFilter
  }, "id">

  export type PackagingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PackagingCountOrderByAggregateInput
    _max?: PackagingMaxOrderByAggregateInput
    _min?: PackagingMinOrderByAggregateInput
  }

  export type PackagingScalarWhereWithAggregatesInput = {
    AND?: PackagingScalarWhereWithAggregatesInput | PackagingScalarWhereWithAggregatesInput[]
    OR?: PackagingScalarWhereWithAggregatesInput[]
    NOT?: PackagingScalarWhereWithAggregatesInput | PackagingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Packaging"> | string
    name?: StringWithAggregatesFilter<"Packaging"> | string
    remark?: StringNullableWithAggregatesFilter<"Packaging"> | string | null
    status?: StringWithAggregatesFilter<"Packaging"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"Packaging"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Packaging"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    remark?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    packagingId?: StringNullableFilter<"Product"> | string | null
    productTypeId?: StringNullableFilter<"Product"> | string | null
    createAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    ProductFormular?: ProductFormularListRelationFilter
    Packaging?: XOR<PackagingNullableScalarRelationFilter, PackagingWhereInput> | null
    ProductType?: XOR<ProductTypeNullableScalarRelationFilter, ProductTypeWhereInput> | null
    ProductionPlan?: ProductionPlanListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    packagingId?: SortOrder
    productTypeId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ProductFormular?: ProductFormularOrderByRelationAggregateInput
    Packaging?: PackagingOrderByWithRelationInput
    ProductType?: ProductTypeOrderByWithRelationInput
    ProductionPlan?: ProductionPlanOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    remark?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    packagingId?: StringNullableFilter<"Product"> | string | null
    productTypeId?: StringNullableFilter<"Product"> | string | null
    createAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    ProductFormular?: ProductFormularListRelationFilter
    Packaging?: XOR<PackagingNullableScalarRelationFilter, PackagingWhereInput> | null
    ProductType?: XOR<ProductTypeNullableScalarRelationFilter, ProductTypeWhereInput> | null
    ProductionPlan?: ProductionPlanListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    packagingId?: SortOrder
    productTypeId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    remark?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: StringWithAggregatesFilter<"Product"> | string
    packagingId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productTypeId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type ProductFormularWhereInput = {
    AND?: ProductFormularWhereInput | ProductFormularWhereInput[]
    OR?: ProductFormularWhereInput[]
    NOT?: ProductFormularWhereInput | ProductFormularWhereInput[]
    id?: StringFilter<"ProductFormular"> | string
    productId?: StringFilter<"ProductFormular"> | string
    materialId?: StringFilter<"ProductFormular"> | string
    quantity?: FloatFilter<"ProductFormular"> | number
    status?: StringFilter<"ProductFormular"> | string
    remark?: StringNullableFilter<"ProductFormular"> | string | null
    createAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type ProductFormularOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
    Material?: MaterialOrderByWithRelationInput
  }

  export type ProductFormularWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductFormularWhereInput | ProductFormularWhereInput[]
    OR?: ProductFormularWhereInput[]
    NOT?: ProductFormularWhereInput | ProductFormularWhereInput[]
    productId?: StringFilter<"ProductFormular"> | string
    materialId?: StringFilter<"ProductFormular"> | string
    quantity?: FloatFilter<"ProductFormular"> | number
    status?: StringFilter<"ProductFormular"> | string
    remark?: StringNullableFilter<"ProductFormular"> | string | null
    createAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type ProductFormularOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductFormularCountOrderByAggregateInput
    _avg?: ProductFormularAvgOrderByAggregateInput
    _max?: ProductFormularMaxOrderByAggregateInput
    _min?: ProductFormularMinOrderByAggregateInput
    _sum?: ProductFormularSumOrderByAggregateInput
  }

  export type ProductFormularScalarWhereWithAggregatesInput = {
    AND?: ProductFormularScalarWhereWithAggregatesInput | ProductFormularScalarWhereWithAggregatesInput[]
    OR?: ProductFormularScalarWhereWithAggregatesInput[]
    NOT?: ProductFormularScalarWhereWithAggregatesInput | ProductFormularScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductFormular"> | string
    productId?: StringWithAggregatesFilter<"ProductFormular"> | string
    materialId?: StringWithAggregatesFilter<"ProductFormular"> | string
    quantity?: FloatWithAggregatesFilter<"ProductFormular"> | number
    status?: StringWithAggregatesFilter<"ProductFormular"> | string
    remark?: StringNullableWithAggregatesFilter<"ProductFormular"> | string | null
    createAt?: DateTimeNullableWithAggregatesFilter<"ProductFormular"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"ProductFormular"> | Date | string | null
  }

  export type ProductionPlanWhereInput = {
    AND?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    OR?: ProductionPlanWhereInput[]
    NOT?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    id?: StringFilter<"ProductionPlan"> | string
    quantity?: FloatFilter<"ProductionPlan"> | number
    productId?: StringFilter<"ProductionPlan"> | string
    remark?: StringNullableFilter<"ProductionPlan"> | string | null
    status?: StringFilter<"ProductionPlan"> | string
    createAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Production?: ProductionListRelationFilter
  }

  export type ProductionPlanOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
    Production?: ProductionOrderByRelationAggregateInput
  }

  export type ProductionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    OR?: ProductionPlanWhereInput[]
    NOT?: ProductionPlanWhereInput | ProductionPlanWhereInput[]
    quantity?: FloatFilter<"ProductionPlan"> | number
    productId?: StringFilter<"ProductionPlan"> | string
    remark?: StringNullableFilter<"ProductionPlan"> | string | null
    status?: StringFilter<"ProductionPlan"> | string
    createAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Production?: ProductionListRelationFilter
  }, "id">

  export type ProductionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductionPlanCountOrderByAggregateInput
    _avg?: ProductionPlanAvgOrderByAggregateInput
    _max?: ProductionPlanMaxOrderByAggregateInput
    _min?: ProductionPlanMinOrderByAggregateInput
    _sum?: ProductionPlanSumOrderByAggregateInput
  }

  export type ProductionPlanScalarWhereWithAggregatesInput = {
    AND?: ProductionPlanScalarWhereWithAggregatesInput | ProductionPlanScalarWhereWithAggregatesInput[]
    OR?: ProductionPlanScalarWhereWithAggregatesInput[]
    NOT?: ProductionPlanScalarWhereWithAggregatesInput | ProductionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionPlan"> | string
    quantity?: FloatWithAggregatesFilter<"ProductionPlan"> | number
    productId?: StringWithAggregatesFilter<"ProductionPlan"> | string
    remark?: StringNullableWithAggregatesFilter<"ProductionPlan"> | string | null
    status?: StringWithAggregatesFilter<"ProductionPlan"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"ProductionPlan"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"ProductionPlan"> | Date | string | null
  }

  export type ProductionWhereInput = {
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    id?: StringFilter<"Production"> | string
    productionPlanId?: StringFilter<"Production"> | string
    quantity?: FloatFilter<"Production"> | number
    remark?: StringNullableFilter<"Production"> | string | null
    status?: StringFilter<"Production"> | string
    createAt?: DateTimeNullableFilter<"Production"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Production"> | Date | string | null
    ProductionPlan?: XOR<ProductionPlanScalarRelationFilter, ProductionPlanWhereInput>
  }

  export type ProductionOrderByWithRelationInput = {
    id?: SortOrder
    productionPlanId?: SortOrder
    quantity?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    ProductionPlan?: ProductionPlanOrderByWithRelationInput
  }

  export type ProductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    productionPlanId?: StringFilter<"Production"> | string
    quantity?: FloatFilter<"Production"> | number
    remark?: StringNullableFilter<"Production"> | string | null
    status?: StringFilter<"Production"> | string
    createAt?: DateTimeNullableFilter<"Production"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Production"> | Date | string | null
    ProductionPlan?: XOR<ProductionPlanScalarRelationFilter, ProductionPlanWhereInput>
  }, "id">

  export type ProductionOrderByWithAggregationInput = {
    id?: SortOrder
    productionPlanId?: SortOrder
    quantity?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ProductionCountOrderByAggregateInput
    _avg?: ProductionAvgOrderByAggregateInput
    _max?: ProductionMaxOrderByAggregateInput
    _min?: ProductionMinOrderByAggregateInput
    _sum?: ProductionSumOrderByAggregateInput
  }

  export type ProductionScalarWhereWithAggregatesInput = {
    AND?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    OR?: ProductionScalarWhereWithAggregatesInput[]
    NOT?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Production"> | string
    productionPlanId?: StringWithAggregatesFilter<"Production"> | string
    quantity?: FloatWithAggregatesFilter<"Production"> | number
    remark?: StringNullableWithAggregatesFilter<"Production"> | string | null
    status?: StringWithAggregatesFilter<"Production"> | string
    createAt?: DateTimeNullableWithAggregatesFilter<"Production"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Production"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    level?: string
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    level?: string
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    password: string
    level?: string
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product?: ProductCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUncheckedCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product?: ProductUncheckedCreateNestedManyWithoutProductTypeInput
  }

  export type ProductTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUncheckedUpdateManyWithoutProductTypeNestedInput
  }

  export type ProductTypeCreateManyInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    StockMaterial?: StockMaterialCreateNestedManyWithoutMaterialInput
    ProductFormular?: ProductFormularCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    StockMaterial?: StockMaterialUncheckedCreateNestedManyWithoutMaterialInput
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StockMaterial?: StockMaterialUpdateManyWithoutMaterialNestedInput
    ProductFormular?: ProductFormularUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StockMaterial?: StockMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type MaterialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaterialUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialCreateInput = {
    id?: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Material: MaterialCreateNestedOneWithoutStockMaterialInput
  }

  export type StockMaterialUncheckedCreateInput = {
    id?: string
    materialId: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type StockMaterialUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Material?: MaterialUpdateOneRequiredWithoutStockMaterialNestedInput
  }

  export type StockMaterialUncheckedUpdateInput = {
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialCreateManyInput = {
    id?: string
    materialId: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type StockMaterialUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialUncheckedUpdateManyInput = {
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackagingCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product?: ProductCreateNestedManyWithoutPackagingInput
  }

  export type PackagingUncheckedCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product?: ProductUncheckedCreateNestedManyWithoutPackagingInput
  }

  export type PackagingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateManyWithoutPackagingNestedInput
  }

  export type PackagingUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUncheckedUpdateManyWithoutPackagingNestedInput
  }

  export type PackagingCreateManyInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type PackagingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackagingUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularCreateNestedManyWithoutProductInput
    Packaging?: PackagingCreateNestedOneWithoutProductInput
    ProductType?: ProductTypeCreateNestedOneWithoutProductInput
    ProductionPlan?: ProductionPlanCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutProductInput
    ProductionPlan?: ProductionPlanUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUpdateManyWithoutProductNestedInput
    Packaging?: PackagingUpdateOneWithoutProductNestedInput
    ProductType?: ProductTypeUpdateOneWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularCreateInput = {
    id?: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductFormularInput
    Material: MaterialCreateNestedOneWithoutProductFormularInput
  }

  export type ProductFormularUncheckedCreateInput = {
    id?: string
    productId: string
    materialId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductFormularNestedInput
    Material?: MaterialUpdateOneRequiredWithoutProductFormularNestedInput
  }

  export type ProductFormularUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularCreateManyInput = {
    id?: string
    productId: string
    materialId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionPlanCreateInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductionPlanInput
    Production?: ProductionCreateNestedManyWithoutProductionPlanInput
  }

  export type ProductionPlanUncheckedCreateInput = {
    id?: string
    quantity: number
    productId: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Production?: ProductionUncheckedCreateNestedManyWithoutProductionPlanInput
  }

  export type ProductionPlanUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductionPlanNestedInput
    Production?: ProductionUpdateManyWithoutProductionPlanNestedInput
  }

  export type ProductionPlanUncheckedUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Production?: ProductionUncheckedUpdateManyWithoutProductionPlanNestedInput
  }

  export type ProductionPlanCreateManyInput = {
    id?: string
    quantity: number
    productId: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionPlanUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionPlanUncheckedUpdateManyInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionCreateInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductionPlan: ProductionPlanCreateNestedOneWithoutProductionInput
  }

  export type ProductionUncheckedCreateInput = {
    id?: string
    productionPlanId: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductionPlan?: ProductionPlanUpdateOneRequiredWithoutProductionNestedInput
  }

  export type ProductionUncheckedUpdateInput = {
    productionPlanId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionCreateManyInput = {
    id?: string
    productionPlanId: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionUncheckedUpdateManyInput = {
    productionPlanId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    isSet?: boolean
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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

  export type StockMaterialListRelationFilter = {
    every?: StockMaterialWhereInput
    some?: StockMaterialWhereInput
    none?: StockMaterialWhereInput
  }

  export type ProductFormularListRelationFilter = {
    every?: ProductFormularWhereInput
    some?: ProductFormularWhereInput
    none?: ProductFormularWhereInput
  }

  export type StockMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductFormularOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type StockMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StockMaterialAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type StockMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StockMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StockMaterialSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type PackagingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PackagingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PackagingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PackagingNullableScalarRelationFilter = {
    is?: PackagingWhereInput | null
    isNot?: PackagingWhereInput | null
  }

  export type ProductTypeNullableScalarRelationFilter = {
    is?: ProductTypeWhereInput | null
    isNot?: ProductTypeWhereInput | null
  }

  export type ProductionPlanListRelationFilter = {
    every?: ProductionPlanWhereInput
    some?: ProductionPlanWhereInput
    none?: ProductionPlanWhereInput
  }

  export type ProductionPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    packagingId?: SortOrder
    productTypeId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    packagingId?: SortOrder
    productTypeId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    packagingId?: SortOrder
    productTypeId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductFormularCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFormularAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductFormularMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFormularMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFormularSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type ProductionListRelationFilter = {
    every?: ProductionWhereInput
    some?: ProductionWhereInput
    none?: ProductionWhereInput
  }

  export type ProductionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionPlanAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionPlanSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductionPlanScalarRelationFilter = {
    is?: ProductionPlanWhereInput
    isNot?: ProductionPlanWhereInput
  }

  export type ProductionCountOrderByAggregateInput = {
    id?: SortOrder
    productionPlanId?: SortOrder
    quantity?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ProductionMaxOrderByAggregateInput = {
    id?: SortOrder
    productionPlanId?: SortOrder
    quantity?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionMinOrderByAggregateInput = {
    id?: SortOrder
    productionPlanId?: SortOrder
    quantity?: SortOrder
    remark?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductionSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ProductCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput> | ProductCreateWithoutProductTypeInput[] | ProductUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductTypeInput | ProductCreateOrConnectWithoutProductTypeInput[]
    createMany?: ProductCreateManyProductTypeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProductTypeInput = {
    create?: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput> | ProductCreateWithoutProductTypeInput[] | ProductUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductTypeInput | ProductCreateOrConnectWithoutProductTypeInput[]
    createMany?: ProductCreateManyProductTypeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ProductUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput> | ProductCreateWithoutProductTypeInput[] | ProductUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductTypeInput | ProductCreateOrConnectWithoutProductTypeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductTypeInput | ProductUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: ProductCreateManyProductTypeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductTypeInput | ProductUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductTypeInput | ProductUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProductTypeNestedInput = {
    create?: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput> | ProductCreateWithoutProductTypeInput[] | ProductUncheckedCreateWithoutProductTypeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProductTypeInput | ProductCreateOrConnectWithoutProductTypeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProductTypeInput | ProductUpsertWithWhereUniqueWithoutProductTypeInput[]
    createMany?: ProductCreateManyProductTypeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProductTypeInput | ProductUpdateWithWhereUniqueWithoutProductTypeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProductTypeInput | ProductUpdateManyWithWhereWithoutProductTypeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StockMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput> | StockMaterialCreateWithoutMaterialInput[] | StockMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockMaterialCreateOrConnectWithoutMaterialInput | StockMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: StockMaterialCreateManyMaterialInputEnvelope
    connect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
  }

  export type ProductFormularCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput> | ProductFormularCreateWithoutMaterialInput[] | ProductFormularUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutMaterialInput | ProductFormularCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductFormularCreateManyMaterialInputEnvelope
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
  }

  export type StockMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput> | StockMaterialCreateWithoutMaterialInput[] | StockMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockMaterialCreateOrConnectWithoutMaterialInput | StockMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: StockMaterialCreateManyMaterialInputEnvelope
    connect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
  }

  export type ProductFormularUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput> | ProductFormularCreateWithoutMaterialInput[] | ProductFormularUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutMaterialInput | ProductFormularCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductFormularCreateManyMaterialInputEnvelope
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StockMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput> | StockMaterialCreateWithoutMaterialInput[] | StockMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockMaterialCreateOrConnectWithoutMaterialInput | StockMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: StockMaterialUpsertWithWhereUniqueWithoutMaterialInput | StockMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StockMaterialCreateManyMaterialInputEnvelope
    set?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    disconnect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    delete?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    connect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    update?: StockMaterialUpdateWithWhereUniqueWithoutMaterialInput | StockMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StockMaterialUpdateManyWithWhereWithoutMaterialInput | StockMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StockMaterialScalarWhereInput | StockMaterialScalarWhereInput[]
  }

  export type ProductFormularUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput> | ProductFormularCreateWithoutMaterialInput[] | ProductFormularUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutMaterialInput | ProductFormularCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductFormularUpsertWithWhereUniqueWithoutMaterialInput | ProductFormularUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductFormularCreateManyMaterialInputEnvelope
    set?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    disconnect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    delete?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    update?: ProductFormularUpdateWithWhereUniqueWithoutMaterialInput | ProductFormularUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductFormularUpdateManyWithWhereWithoutMaterialInput | ProductFormularUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
  }

  export type StockMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput> | StockMaterialCreateWithoutMaterialInput[] | StockMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockMaterialCreateOrConnectWithoutMaterialInput | StockMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: StockMaterialUpsertWithWhereUniqueWithoutMaterialInput | StockMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StockMaterialCreateManyMaterialInputEnvelope
    set?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    disconnect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    delete?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    connect?: StockMaterialWhereUniqueInput | StockMaterialWhereUniqueInput[]
    update?: StockMaterialUpdateWithWhereUniqueWithoutMaterialInput | StockMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StockMaterialUpdateManyWithWhereWithoutMaterialInput | StockMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StockMaterialScalarWhereInput | StockMaterialScalarWhereInput[]
  }

  export type ProductFormularUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput> | ProductFormularCreateWithoutMaterialInput[] | ProductFormularUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutMaterialInput | ProductFormularCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductFormularUpsertWithWhereUniqueWithoutMaterialInput | ProductFormularUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductFormularCreateManyMaterialInputEnvelope
    set?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    disconnect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    delete?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    update?: ProductFormularUpdateWithWhereUniqueWithoutMaterialInput | ProductFormularUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductFormularUpdateManyWithWhereWithoutMaterialInput | ProductFormularUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutStockMaterialInput = {
    create?: XOR<MaterialCreateWithoutStockMaterialInput, MaterialUncheckedCreateWithoutStockMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStockMaterialInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutStockMaterialNestedInput = {
    create?: XOR<MaterialCreateWithoutStockMaterialInput, MaterialUncheckedCreateWithoutStockMaterialInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStockMaterialInput
    upsert?: MaterialUpsertWithoutStockMaterialInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutStockMaterialInput, MaterialUpdateWithoutStockMaterialInput>, MaterialUncheckedUpdateWithoutStockMaterialInput>
  }

  export type ProductCreateNestedManyWithoutPackagingInput = {
    create?: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput> | ProductCreateWithoutPackagingInput[] | ProductUncheckedCreateWithoutPackagingInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingInput | ProductCreateOrConnectWithoutPackagingInput[]
    createMany?: ProductCreateManyPackagingInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutPackagingInput = {
    create?: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput> | ProductCreateWithoutPackagingInput[] | ProductUncheckedCreateWithoutPackagingInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingInput | ProductCreateOrConnectWithoutPackagingInput[]
    createMany?: ProductCreateManyPackagingInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutPackagingNestedInput = {
    create?: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput> | ProductCreateWithoutPackagingInput[] | ProductUncheckedCreateWithoutPackagingInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingInput | ProductCreateOrConnectWithoutPackagingInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPackagingInput | ProductUpsertWithWhereUniqueWithoutPackagingInput[]
    createMany?: ProductCreateManyPackagingInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPackagingInput | ProductUpdateWithWhereUniqueWithoutPackagingInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPackagingInput | ProductUpdateManyWithWhereWithoutPackagingInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutPackagingNestedInput = {
    create?: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput> | ProductCreateWithoutPackagingInput[] | ProductUncheckedCreateWithoutPackagingInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPackagingInput | ProductCreateOrConnectWithoutPackagingInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPackagingInput | ProductUpsertWithWhereUniqueWithoutPackagingInput[]
    createMany?: ProductCreateManyPackagingInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPackagingInput | ProductUpdateWithWhereUniqueWithoutPackagingInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPackagingInput | ProductUpdateManyWithWhereWithoutPackagingInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductFormularCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput> | ProductFormularCreateWithoutProductInput[] | ProductFormularUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutProductInput | ProductFormularCreateOrConnectWithoutProductInput[]
    createMany?: ProductFormularCreateManyProductInputEnvelope
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
  }

  export type PackagingCreateNestedOneWithoutProductInput = {
    create?: XOR<PackagingCreateWithoutProductInput, PackagingUncheckedCreateWithoutProductInput>
    connectOrCreate?: PackagingCreateOrConnectWithoutProductInput
    connect?: PackagingWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type ProductionPlanCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput> | ProductionPlanCreateWithoutProductInput[] | ProductionPlanUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductInput | ProductionPlanCreateOrConnectWithoutProductInput[]
    createMany?: ProductionPlanCreateManyProductInputEnvelope
    connect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
  }

  export type ProductFormularUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput> | ProductFormularCreateWithoutProductInput[] | ProductFormularUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutProductInput | ProductFormularCreateOrConnectWithoutProductInput[]
    createMany?: ProductFormularCreateManyProductInputEnvelope
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
  }

  export type ProductionPlanUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput> | ProductionPlanCreateWithoutProductInput[] | ProductionPlanUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductInput | ProductionPlanCreateOrConnectWithoutProductInput[]
    createMany?: ProductionPlanCreateManyProductInputEnvelope
    connect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
  }

  export type ProductFormularUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput> | ProductFormularCreateWithoutProductInput[] | ProductFormularUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutProductInput | ProductFormularCreateOrConnectWithoutProductInput[]
    upsert?: ProductFormularUpsertWithWhereUniqueWithoutProductInput | ProductFormularUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFormularCreateManyProductInputEnvelope
    set?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    disconnect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    delete?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    update?: ProductFormularUpdateWithWhereUniqueWithoutProductInput | ProductFormularUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFormularUpdateManyWithWhereWithoutProductInput | ProductFormularUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
  }

  export type PackagingUpdateOneWithoutProductNestedInput = {
    create?: XOR<PackagingCreateWithoutProductInput, PackagingUncheckedCreateWithoutProductInput>
    connectOrCreate?: PackagingCreateOrConnectWithoutProductInput
    upsert?: PackagingUpsertWithoutProductInput
    disconnect?: boolean
    delete?: PackagingWhereInput | boolean
    connect?: PackagingWhereUniqueInput
    update?: XOR<XOR<PackagingUpdateToOneWithWhereWithoutProductInput, PackagingUpdateWithoutProductInput>, PackagingUncheckedUpdateWithoutProductInput>
  }

  export type ProductTypeUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductInput
    upsert?: ProductTypeUpsertWithoutProductInput
    disconnect?: boolean
    delete?: ProductTypeWhereInput | boolean
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutProductInput, ProductTypeUpdateWithoutProductInput>, ProductTypeUncheckedUpdateWithoutProductInput>
  }

  export type ProductionPlanUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput> | ProductionPlanCreateWithoutProductInput[] | ProductionPlanUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductInput | ProductionPlanCreateOrConnectWithoutProductInput[]
    upsert?: ProductionPlanUpsertWithWhereUniqueWithoutProductInput | ProductionPlanUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductionPlanCreateManyProductInputEnvelope
    set?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    disconnect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    delete?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    connect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    update?: ProductionPlanUpdateWithWhereUniqueWithoutProductInput | ProductionPlanUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductionPlanUpdateManyWithWhereWithoutProductInput | ProductionPlanUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductionPlanScalarWhereInput | ProductionPlanScalarWhereInput[]
  }

  export type ProductFormularUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput> | ProductFormularCreateWithoutProductInput[] | ProductFormularUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFormularCreateOrConnectWithoutProductInput | ProductFormularCreateOrConnectWithoutProductInput[]
    upsert?: ProductFormularUpsertWithWhereUniqueWithoutProductInput | ProductFormularUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFormularCreateManyProductInputEnvelope
    set?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    disconnect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    delete?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    connect?: ProductFormularWhereUniqueInput | ProductFormularWhereUniqueInput[]
    update?: ProductFormularUpdateWithWhereUniqueWithoutProductInput | ProductFormularUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFormularUpdateManyWithWhereWithoutProductInput | ProductFormularUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
  }

  export type ProductionPlanUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput> | ProductionPlanCreateWithoutProductInput[] | ProductionPlanUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductInput | ProductionPlanCreateOrConnectWithoutProductInput[]
    upsert?: ProductionPlanUpsertWithWhereUniqueWithoutProductInput | ProductionPlanUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductionPlanCreateManyProductInputEnvelope
    set?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    disconnect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    delete?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    connect?: ProductionPlanWhereUniqueInput | ProductionPlanWhereUniqueInput[]
    update?: ProductionPlanUpdateWithWhereUniqueWithoutProductInput | ProductionPlanUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductionPlanUpdateManyWithWhereWithoutProductInput | ProductionPlanUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductionPlanScalarWhereInput | ProductionPlanScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductFormularInput = {
    create?: XOR<ProductCreateWithoutProductFormularInput, ProductUncheckedCreateWithoutProductFormularInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductFormularInput
    connect?: ProductWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutProductFormularInput = {
    create?: XOR<MaterialCreateWithoutProductFormularInput, MaterialUncheckedCreateWithoutProductFormularInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductFormularInput
    connect?: MaterialWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutProductFormularNestedInput = {
    create?: XOR<ProductCreateWithoutProductFormularInput, ProductUncheckedCreateWithoutProductFormularInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductFormularInput
    upsert?: ProductUpsertWithoutProductFormularInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductFormularInput, ProductUpdateWithoutProductFormularInput>, ProductUncheckedUpdateWithoutProductFormularInput>
  }

  export type MaterialUpdateOneRequiredWithoutProductFormularNestedInput = {
    create?: XOR<MaterialCreateWithoutProductFormularInput, MaterialUncheckedCreateWithoutProductFormularInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductFormularInput
    upsert?: MaterialUpsertWithoutProductFormularInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProductFormularInput, MaterialUpdateWithoutProductFormularInput>, MaterialUncheckedUpdateWithoutProductFormularInput>
  }

  export type ProductCreateNestedOneWithoutProductionPlanInput = {
    create?: XOR<ProductCreateWithoutProductionPlanInput, ProductUncheckedCreateWithoutProductionPlanInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionPlanInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductionCreateNestedManyWithoutProductionPlanInput = {
    create?: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput> | ProductionCreateWithoutProductionPlanInput[] | ProductionUncheckedCreateWithoutProductionPlanInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProductionPlanInput | ProductionCreateOrConnectWithoutProductionPlanInput[]
    createMany?: ProductionCreateManyProductionPlanInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type ProductionUncheckedCreateNestedManyWithoutProductionPlanInput = {
    create?: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput> | ProductionCreateWithoutProductionPlanInput[] | ProductionUncheckedCreateWithoutProductionPlanInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProductionPlanInput | ProductionCreateOrConnectWithoutProductionPlanInput[]
    createMany?: ProductionCreateManyProductionPlanInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProductionPlanNestedInput = {
    create?: XOR<ProductCreateWithoutProductionPlanInput, ProductUncheckedCreateWithoutProductionPlanInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductionPlanInput
    upsert?: ProductUpsertWithoutProductionPlanInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductionPlanInput, ProductUpdateWithoutProductionPlanInput>, ProductUncheckedUpdateWithoutProductionPlanInput>
  }

  export type ProductionUpdateManyWithoutProductionPlanNestedInput = {
    create?: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput> | ProductionCreateWithoutProductionPlanInput[] | ProductionUncheckedCreateWithoutProductionPlanInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProductionPlanInput | ProductionCreateOrConnectWithoutProductionPlanInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutProductionPlanInput | ProductionUpsertWithWhereUniqueWithoutProductionPlanInput[]
    createMany?: ProductionCreateManyProductionPlanInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutProductionPlanInput | ProductionUpdateWithWhereUniqueWithoutProductionPlanInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutProductionPlanInput | ProductionUpdateManyWithWhereWithoutProductionPlanInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type ProductionUncheckedUpdateManyWithoutProductionPlanNestedInput = {
    create?: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput> | ProductionCreateWithoutProductionPlanInput[] | ProductionUncheckedCreateWithoutProductionPlanInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutProductionPlanInput | ProductionCreateOrConnectWithoutProductionPlanInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutProductionPlanInput | ProductionUpsertWithWhereUniqueWithoutProductionPlanInput[]
    createMany?: ProductionCreateManyProductionPlanInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutProductionPlanInput | ProductionUpdateWithWhereUniqueWithoutProductionPlanInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutProductionPlanInput | ProductionUpdateManyWithWhereWithoutProductionPlanInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type ProductionPlanCreateNestedOneWithoutProductionInput = {
    create?: XOR<ProductionPlanCreateWithoutProductionInput, ProductionPlanUncheckedCreateWithoutProductionInput>
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductionInput
    connect?: ProductionPlanWhereUniqueInput
  }

  export type ProductionPlanUpdateOneRequiredWithoutProductionNestedInput = {
    create?: XOR<ProductionPlanCreateWithoutProductionInput, ProductionPlanUncheckedCreateWithoutProductionInput>
    connectOrCreate?: ProductionPlanCreateOrConnectWithoutProductionInput
    upsert?: ProductionPlanUpsertWithoutProductionInput
    connect?: ProductionPlanWhereUniqueInput
    update?: XOR<XOR<ProductionPlanUpdateToOneWithWhereWithoutProductionInput, ProductionPlanUpdateWithoutProductionInput>, ProductionPlanUncheckedUpdateWithoutProductionInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type ProductCreateWithoutProductTypeInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularCreateNestedManyWithoutProductInput
    Packaging?: PackagingCreateNestedOneWithoutProductInput
    ProductionPlan?: ProductionPlanCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductTypeInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutProductInput
    ProductionPlan?: ProductionPlanUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput>
  }

  export type ProductCreateManyProductTypeInputEnvelope = {
    data: ProductCreateManyProductTypeInput | ProductCreateManyProductTypeInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProductTypeInput, ProductUncheckedUpdateWithoutProductTypeInput>
    create: XOR<ProductCreateWithoutProductTypeInput, ProductUncheckedCreateWithoutProductTypeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProductTypeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProductTypeInput, ProductUncheckedUpdateWithoutProductTypeInput>
  }

  export type ProductUpdateManyWithWhereWithoutProductTypeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductTypeInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    remark?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    packagingId?: StringNullableFilter<"Product"> | string | null
    productTypeId?: StringNullableFilter<"Product"> | string | null
    createAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type StockMaterialCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type StockMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type StockMaterialCreateOrConnectWithoutMaterialInput = {
    where: StockMaterialWhereUniqueInput
    create: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type StockMaterialCreateManyMaterialInputEnvelope = {
    data: StockMaterialCreateManyMaterialInput | StockMaterialCreateManyMaterialInput[]
  }

  export type ProductFormularCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductFormularInput
  }

  export type ProductFormularUncheckedCreateWithoutMaterialInput = {
    id?: string
    productId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularCreateOrConnectWithoutMaterialInput = {
    where: ProductFormularWhereUniqueInput
    create: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput>
  }

  export type ProductFormularCreateManyMaterialInputEnvelope = {
    data: ProductFormularCreateManyMaterialInput | ProductFormularCreateManyMaterialInput[]
  }

  export type StockMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: StockMaterialWhereUniqueInput
    update: XOR<StockMaterialUpdateWithoutMaterialInput, StockMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<StockMaterialCreateWithoutMaterialInput, StockMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type StockMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: StockMaterialWhereUniqueInput
    data: XOR<StockMaterialUpdateWithoutMaterialInput, StockMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type StockMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: StockMaterialScalarWhereInput
    data: XOR<StockMaterialUpdateManyMutationInput, StockMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type StockMaterialScalarWhereInput = {
    AND?: StockMaterialScalarWhereInput | StockMaterialScalarWhereInput[]
    OR?: StockMaterialScalarWhereInput[]
    NOT?: StockMaterialScalarWhereInput | StockMaterialScalarWhereInput[]
    id?: StringFilter<"StockMaterial"> | string
    materialId?: StringFilter<"StockMaterial"> | string
    quantity?: IntFilter<"StockMaterial"> | number
    price?: IntFilter<"StockMaterial"> | number
    remark?: StringNullableFilter<"StockMaterial"> | string | null
    createAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"StockMaterial"> | Date | string | null
  }

  export type ProductFormularUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProductFormularWhereUniqueInput
    update: XOR<ProductFormularUpdateWithoutMaterialInput, ProductFormularUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProductFormularCreateWithoutMaterialInput, ProductFormularUncheckedCreateWithoutMaterialInput>
  }

  export type ProductFormularUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProductFormularWhereUniqueInput
    data: XOR<ProductFormularUpdateWithoutMaterialInput, ProductFormularUncheckedUpdateWithoutMaterialInput>
  }

  export type ProductFormularUpdateManyWithWhereWithoutMaterialInput = {
    where: ProductFormularScalarWhereInput
    data: XOR<ProductFormularUpdateManyMutationInput, ProductFormularUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProductFormularScalarWhereInput = {
    AND?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
    OR?: ProductFormularScalarWhereInput[]
    NOT?: ProductFormularScalarWhereInput | ProductFormularScalarWhereInput[]
    id?: StringFilter<"ProductFormular"> | string
    productId?: StringFilter<"ProductFormular"> | string
    materialId?: StringFilter<"ProductFormular"> | string
    quantity?: FloatFilter<"ProductFormular"> | number
    status?: StringFilter<"ProductFormular"> | string
    remark?: StringNullableFilter<"ProductFormular"> | string | null
    createAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductFormular"> | Date | string | null
  }

  export type MaterialCreateWithoutStockMaterialInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutStockMaterialInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutStockMaterialInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutStockMaterialInput, MaterialUncheckedCreateWithoutStockMaterialInput>
  }

  export type MaterialUpsertWithoutStockMaterialInput = {
    update: XOR<MaterialUpdateWithoutStockMaterialInput, MaterialUncheckedUpdateWithoutStockMaterialInput>
    create: XOR<MaterialCreateWithoutStockMaterialInput, MaterialUncheckedCreateWithoutStockMaterialInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutStockMaterialInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutStockMaterialInput, MaterialUncheckedUpdateWithoutStockMaterialInput>
  }

  export type MaterialUpdateWithoutStockMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutStockMaterialInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ProductCreateWithoutPackagingInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularCreateNestedManyWithoutProductInput
    ProductType?: ProductTypeCreateNestedOneWithoutProductInput
    ProductionPlan?: ProductionPlanCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPackagingInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutProductInput
    ProductionPlan?: ProductionPlanUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPackagingInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput>
  }

  export type ProductCreateManyPackagingInputEnvelope = {
    data: ProductCreateManyPackagingInput | ProductCreateManyPackagingInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutPackagingInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutPackagingInput, ProductUncheckedUpdateWithoutPackagingInput>
    create: XOR<ProductCreateWithoutPackagingInput, ProductUncheckedCreateWithoutPackagingInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutPackagingInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutPackagingInput, ProductUncheckedUpdateWithoutPackagingInput>
  }

  export type ProductUpdateManyWithWhereWithoutPackagingInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutPackagingInput>
  }

  export type ProductFormularCreateWithoutProductInput = {
    id?: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Material: MaterialCreateNestedOneWithoutProductFormularInput
  }

  export type ProductFormularUncheckedCreateWithoutProductInput = {
    id?: string
    materialId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularCreateOrConnectWithoutProductInput = {
    where: ProductFormularWhereUniqueInput
    create: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput>
  }

  export type ProductFormularCreateManyProductInputEnvelope = {
    data: ProductFormularCreateManyProductInput | ProductFormularCreateManyProductInput[]
  }

  export type PackagingCreateWithoutProductInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type PackagingUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type PackagingCreateOrConnectWithoutProductInput = {
    where: PackagingWhereUniqueInput
    create: XOR<PackagingCreateWithoutProductInput, PackagingUncheckedCreateWithoutProductInput>
  }

  export type ProductTypeCreateWithoutProductInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductTypeUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductTypeCreateOrConnectWithoutProductInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
  }

  export type ProductionPlanCreateWithoutProductInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Production?: ProductionCreateNestedManyWithoutProductionPlanInput
  }

  export type ProductionPlanUncheckedCreateWithoutProductInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Production?: ProductionUncheckedCreateNestedManyWithoutProductionPlanInput
  }

  export type ProductionPlanCreateOrConnectWithoutProductInput = {
    where: ProductionPlanWhereUniqueInput
    create: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput>
  }

  export type ProductionPlanCreateManyProductInputEnvelope = {
    data: ProductionPlanCreateManyProductInput | ProductionPlanCreateManyProductInput[]
  }

  export type ProductFormularUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductFormularWhereUniqueInput
    update: XOR<ProductFormularUpdateWithoutProductInput, ProductFormularUncheckedUpdateWithoutProductInput>
    create: XOR<ProductFormularCreateWithoutProductInput, ProductFormularUncheckedCreateWithoutProductInput>
  }

  export type ProductFormularUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductFormularWhereUniqueInput
    data: XOR<ProductFormularUpdateWithoutProductInput, ProductFormularUncheckedUpdateWithoutProductInput>
  }

  export type ProductFormularUpdateManyWithWhereWithoutProductInput = {
    where: ProductFormularScalarWhereInput
    data: XOR<ProductFormularUpdateManyMutationInput, ProductFormularUncheckedUpdateManyWithoutProductInput>
  }

  export type PackagingUpsertWithoutProductInput = {
    update: XOR<PackagingUpdateWithoutProductInput, PackagingUncheckedUpdateWithoutProductInput>
    create: XOR<PackagingCreateWithoutProductInput, PackagingUncheckedCreateWithoutProductInput>
    where?: PackagingWhereInput
  }

  export type PackagingUpdateToOneWithWhereWithoutProductInput = {
    where?: PackagingWhereInput
    data: XOR<PackagingUpdateWithoutProductInput, PackagingUncheckedUpdateWithoutProductInput>
  }

  export type PackagingUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackagingUncheckedUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeUpsertWithoutProductInput = {
    update: XOR<ProductTypeUpdateWithoutProductInput, ProductTypeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductTypeCreateWithoutProductInput, ProductTypeUncheckedCreateWithoutProductInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutProductInput, ProductTypeUncheckedUpdateWithoutProductInput>
  }

  export type ProductTypeUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductTypeUncheckedUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionPlanUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductionPlanWhereUniqueInput
    update: XOR<ProductionPlanUpdateWithoutProductInput, ProductionPlanUncheckedUpdateWithoutProductInput>
    create: XOR<ProductionPlanCreateWithoutProductInput, ProductionPlanUncheckedCreateWithoutProductInput>
  }

  export type ProductionPlanUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductionPlanWhereUniqueInput
    data: XOR<ProductionPlanUpdateWithoutProductInput, ProductionPlanUncheckedUpdateWithoutProductInput>
  }

  export type ProductionPlanUpdateManyWithWhereWithoutProductInput = {
    where: ProductionPlanScalarWhereInput
    data: XOR<ProductionPlanUpdateManyMutationInput, ProductionPlanUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductionPlanScalarWhereInput = {
    AND?: ProductionPlanScalarWhereInput | ProductionPlanScalarWhereInput[]
    OR?: ProductionPlanScalarWhereInput[]
    NOT?: ProductionPlanScalarWhereInput | ProductionPlanScalarWhereInput[]
    id?: StringFilter<"ProductionPlan"> | string
    quantity?: FloatFilter<"ProductionPlan"> | number
    productId?: StringFilter<"ProductionPlan"> | string
    remark?: StringNullableFilter<"ProductionPlan"> | string | null
    status?: StringFilter<"ProductionPlan"> | string
    createAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"ProductionPlan"> | Date | string | null
  }

  export type ProductCreateWithoutProductFormularInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Packaging?: PackagingCreateNestedOneWithoutProductInput
    ProductType?: ProductTypeCreateNestedOneWithoutProductInput
    ProductionPlan?: ProductionPlanCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductFormularInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductionPlan?: ProductionPlanUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductFormularInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductFormularInput, ProductUncheckedCreateWithoutProductFormularInput>
  }

  export type MaterialCreateWithoutProductFormularInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    StockMaterial?: StockMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutProductFormularInput = {
    id?: string
    name: string
    unit: string
    price: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    StockMaterial?: StockMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutProductFormularInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProductFormularInput, MaterialUncheckedCreateWithoutProductFormularInput>
  }

  export type ProductUpsertWithoutProductFormularInput = {
    update: XOR<ProductUpdateWithoutProductFormularInput, ProductUncheckedUpdateWithoutProductFormularInput>
    create: XOR<ProductCreateWithoutProductFormularInput, ProductUncheckedCreateWithoutProductFormularInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductFormularInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductFormularInput, ProductUncheckedUpdateWithoutProductFormularInput>
  }

  export type ProductUpdateWithoutProductFormularInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Packaging?: PackagingUpdateOneWithoutProductNestedInput
    ProductType?: ProductTypeUpdateOneWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductFormularInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductionPlan?: ProductionPlanUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MaterialUpsertWithoutProductFormularInput = {
    update: XOR<MaterialUpdateWithoutProductFormularInput, MaterialUncheckedUpdateWithoutProductFormularInput>
    create: XOR<MaterialCreateWithoutProductFormularInput, MaterialUncheckedCreateWithoutProductFormularInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProductFormularInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProductFormularInput, MaterialUncheckedUpdateWithoutProductFormularInput>
  }

  export type MaterialUpdateWithoutProductFormularInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StockMaterial?: StockMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProductFormularInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    StockMaterial?: StockMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ProductCreateWithoutProductionPlanInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularCreateNestedManyWithoutProductInput
    Packaging?: PackagingCreateNestedOneWithoutProductInput
    ProductType?: ProductTypeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductionPlanInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
    ProductFormular?: ProductFormularUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductionPlanInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductionPlanInput, ProductUncheckedCreateWithoutProductionPlanInput>
  }

  export type ProductionCreateWithoutProductionPlanInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionUncheckedCreateWithoutProductionPlanInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionCreateOrConnectWithoutProductionPlanInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput>
  }

  export type ProductionCreateManyProductionPlanInputEnvelope = {
    data: ProductionCreateManyProductionPlanInput | ProductionCreateManyProductionPlanInput[]
  }

  export type ProductUpsertWithoutProductionPlanInput = {
    update: XOR<ProductUpdateWithoutProductionPlanInput, ProductUncheckedUpdateWithoutProductionPlanInput>
    create: XOR<ProductCreateWithoutProductionPlanInput, ProductUncheckedCreateWithoutProductionPlanInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductionPlanInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductionPlanInput, ProductUncheckedUpdateWithoutProductionPlanInput>
  }

  export type ProductUpdateWithoutProductionPlanInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUpdateManyWithoutProductNestedInput
    Packaging?: PackagingUpdateOneWithoutProductNestedInput
    ProductType?: ProductTypeUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductionPlanInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductionUpsertWithWhereUniqueWithoutProductionPlanInput = {
    where: ProductionWhereUniqueInput
    update: XOR<ProductionUpdateWithoutProductionPlanInput, ProductionUncheckedUpdateWithoutProductionPlanInput>
    create: XOR<ProductionCreateWithoutProductionPlanInput, ProductionUncheckedCreateWithoutProductionPlanInput>
  }

  export type ProductionUpdateWithWhereUniqueWithoutProductionPlanInput = {
    where: ProductionWhereUniqueInput
    data: XOR<ProductionUpdateWithoutProductionPlanInput, ProductionUncheckedUpdateWithoutProductionPlanInput>
  }

  export type ProductionUpdateManyWithWhereWithoutProductionPlanInput = {
    where: ProductionScalarWhereInput
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyWithoutProductionPlanInput>
  }

  export type ProductionScalarWhereInput = {
    AND?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    OR?: ProductionScalarWhereInput[]
    NOT?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    id?: StringFilter<"Production"> | string
    productionPlanId?: StringFilter<"Production"> | string
    quantity?: FloatFilter<"Production"> | number
    remark?: StringNullableFilter<"Production"> | string | null
    status?: StringFilter<"Production"> | string
    createAt?: DateTimeNullableFilter<"Production"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Production"> | Date | string | null
  }

  export type ProductionPlanCreateWithoutProductionInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductionPlanInput
  }

  export type ProductionPlanUncheckedCreateWithoutProductionInput = {
    id?: string
    quantity: number
    productId: string
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionPlanCreateOrConnectWithoutProductionInput = {
    where: ProductionPlanWhereUniqueInput
    create: XOR<ProductionPlanCreateWithoutProductionInput, ProductionPlanUncheckedCreateWithoutProductionInput>
  }

  export type ProductionPlanUpsertWithoutProductionInput = {
    update: XOR<ProductionPlanUpdateWithoutProductionInput, ProductionPlanUncheckedUpdateWithoutProductionInput>
    create: XOR<ProductionPlanCreateWithoutProductionInput, ProductionPlanUncheckedCreateWithoutProductionInput>
    where?: ProductionPlanWhereInput
  }

  export type ProductionPlanUpdateToOneWithWhereWithoutProductionInput = {
    where?: ProductionPlanWhereInput
    data: XOR<ProductionPlanUpdateWithoutProductionInput, ProductionPlanUncheckedUpdateWithoutProductionInput>
  }

  export type ProductionPlanUpdateWithoutProductionInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductionPlanNestedInput
  }

  export type ProductionPlanUncheckedUpdateWithoutProductionInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyProductTypeInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    packagingId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductUpdateWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUpdateManyWithoutProductNestedInput
    Packaging?: PackagingUpdateOneWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    packagingId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialCreateManyMaterialInput = {
    id?: string
    quantity: number
    price: number
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularCreateManyMaterialInput = {
    id?: string
    productId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type StockMaterialUpdateWithoutMaterialInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialUncheckedUpdateWithoutMaterialInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockMaterialUncheckedUpdateManyWithoutMaterialInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularUpdateWithoutMaterialInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductFormularNestedInput
  }

  export type ProductFormularUncheckedUpdateWithoutMaterialInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularUncheckedUpdateManyWithoutMaterialInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyPackagingInput = {
    id?: string
    name: string
    remark?: string | null
    status?: string
    productTypeId?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductUpdateWithoutPackagingInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUpdateManyWithoutProductNestedInput
    ProductType?: ProductTypeUpdateOneWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPackagingInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductFormular?: ProductFormularUncheckedUpdateManyWithoutProductNestedInput
    ProductionPlan?: ProductionPlanUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutPackagingInput = {
    name?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    productTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularCreateManyProductInput = {
    id?: string
    materialId: string
    quantity: number
    status?: string
    remark?: string | null
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionPlanCreateManyProductInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductFormularUpdateWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Material?: MaterialUpdateOneRequiredWithoutProductFormularNestedInput
  }

  export type ProductFormularUncheckedUpdateWithoutProductInput = {
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductFormularUncheckedUpdateManyWithoutProductInput = {
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionPlanUpdateWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Production?: ProductionUpdateManyWithoutProductionPlanNestedInput
  }

  export type ProductionPlanUncheckedUpdateWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Production?: ProductionUncheckedUpdateManyWithoutProductionPlanNestedInput
  }

  export type ProductionPlanUncheckedUpdateManyWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionCreateManyProductionPlanInput = {
    id?: string
    quantity: number
    remark?: string | null
    status?: string
    createAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ProductionUpdateWithoutProductionPlanInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionUncheckedUpdateWithoutProductionPlanInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductionUncheckedUpdateManyWithoutProductionPlanInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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