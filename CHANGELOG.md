# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-23

### Added

- A series of typeguard built on the `typeof` operator. Taken originally from `@infra-blocks/types`,
but adapted so it is clear they only check using the `typeof` operator. They include:
  - `isTypeofBigint`, which returns whether `value is bigint`.
  - `isTypeofBoolean`, which returns whether `value is boolean`.  
  - `isTypeofFunction`, which returns whether `value is Function`.  
  - `isTypeofNumber`, which returns whether `value is number`.
  - `isTypeofObject`, which returns whether `value is object | null`. This peculiarity is part
  of the language, as `typeof null === "object"`.
  - `isTypeofSymbol`, which returns whether `value is symbol`.
  - `isTypeofUndefined`, which returns whether `value is undefined`. Note that this is
  provided for uniformity's sake. In reality, an equality check is much more common:
  `isTypeofUndefined(v) === (v === undefined)`.

## [0.1.0] - 2026-03-11

### Added

- The `not` type guard/predicate utility that reverses a type guard/predicate. Unlike
a standard predicate negation, the `not` utility is also a type guard that is able to
store more information. When provided with a type guard, the returned type guard asserts
that the value provided **excludes** the type narrowed by the original type guard.
For example, if `typeGuard` returns `value is "toto"`. The `not(typeGuard)` returns
a type guard as such: `<T>(value: T): value is Exclude<T, "toto">`.
- The `isNotNull` predicate, built on top of `not`.
- The `isDefined` predicate, built on top of `not`.
- `ifDefined` conditional function that forwards a value to a function only if that
value is **not** `undefined`. It's generally shorter than a ternary operator.
- `ifNotNull`, the `null` equivalent of `ifDefined`.
- `ifNotNil`, the `null | undefined` equivalent of `ifDefined`.

[0.2.0]: https://github.com/infra-blocks/ts-toolkit/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/infra-blocks/ts-toolkit/releases/tag/v0.1.0
