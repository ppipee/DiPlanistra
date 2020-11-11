import { Context, useContext } from 'react'

import { useObserver } from 'mobx-react'

function createUseStoreSelector<Store>(context: Context<Store>) {
	return function useStore<Values>(dataSelector: (store: Store) => Values) {
		const store = useContext(context)

		return useObserver(() => dataSelector(store))
	}
}

export default createUseStoreSelector
