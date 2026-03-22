export const TEST_VALUES = {
  bigint: 42n,
  boolean: false,
  function: () => "toto",
  number: 42,
  null: null,
  object: {},
  string: "42",
  symbol: Symbol("toto"),
  undefined: undefined,
} as const;
