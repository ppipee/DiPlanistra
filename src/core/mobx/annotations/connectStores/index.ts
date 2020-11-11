function connectStores<Store>(storeNames: string[]) {
	return function connect(StoreClass: new () => Store) {
		StoreClass.prototype.connectStores = function (inputStores: Record<string, any>[]) {
			for (const storeName of storeNames) {
				this[storeName] = inputStores[storeName]
			}
		}
	}
}

export default connectStores
