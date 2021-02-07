import { useCallback } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { Store } from 'core/mobx/types'
import useQuery from 'core/router/hooks/useQuery'

export default function useMountStores(stores: Record<string, Store>) {
	const params = useParams()
	const query = useQuery()
	const location = useLocation()

	const mountStores = useCallback(() => {
		Object.values(stores).forEach((store) => {
			const onMount = store.onMount

			if (onMount) {
				store.onMount({ params, query, location })
			}
		})
	}, [stores])

	return mountStores
}