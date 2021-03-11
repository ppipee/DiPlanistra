import { useCallback } from 'react'

import { Store } from 'core/mobx/types'

export default function useUnMountStores() {
	const unMountStores = useCallback((stores: Record<string, Store>) => {
		Object.values(stores).forEach((store) => {
			const onUnMount = store.onUnMount

			if (onUnMount) {
				store.onUnMount()
			}
		})
	}, [])

	return unMountStores
}
