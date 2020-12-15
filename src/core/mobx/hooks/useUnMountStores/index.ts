import { useCallback } from 'react'

import { Store } from 'core/mobx/types'

export default function useUnMountStores(stores: Record<string, Store>) {
	const unMountStores = useCallback(() => {
		Object.values(stores).forEach((store) => {
			const onUnMount = store.onUnMount

			if (onUnMount) {
				onUnMount()
			}
		})
	}, [stores])

	return unMountStores
}
