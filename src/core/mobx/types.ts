export type Store = Record<string, any>

export type StoreConstructor = new () => Store

export type StoreMapper = Record<string, Store>

export type StoreConstructorMapper = Record<string, StoreConstructor>
