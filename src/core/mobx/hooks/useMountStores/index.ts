import { useCallback } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { Store } from 'core/mobx/types'
import useQuery from 'core/router/hooks/useQuery'

export default function useMountStores() {
	const params = useParams()
	const query = useQuery()
	const location = useLocation()

	const mountStores = useCallback(async (stores: Record<string, Store>) => {
		await Promise.all(
			Object.values(stores).map((store) => {
				const onMount = store.onMount

				if (onMount) {
					store.onMount({ params, query, location })
				}
			}),
		)
	}, [])

	return mountStores
}
