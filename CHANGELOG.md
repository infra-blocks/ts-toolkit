# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-04-18

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

[0.1.0]: https://github.com/infra-blocks/ts-toolkit/releases/tag/v0.1.0
