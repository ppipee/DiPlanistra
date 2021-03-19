import { useEffect } from 'react'

import { DomainValue } from 'common/constants/business'
import usePassQuery from 'common/hooks/usePassQuery'

import { useFavoriteStore } from 'modules/place/stores/FavoriteStore/context'

export default function useMountFavorite(domain?: DomainValue) {
	const passQuery = usePassQuery()
	const { getFavorite, setDomain, favorites, ...storeProps } = useFavoriteStore((store) => ({
		getFavorite: store.getFavorite,
		setDomain: store.setDomain,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
		favorites: store.favoritesMapper[domain],
	}))

	useEffect(() => {
		if (domain) {
			setDomain(domain)
			passQuery({ params: { category: String(domain) } })
		}
	}, [domain, passQuery])

	useEffect(() => {
		if (!favorites) {
			getFavorite(domain)
		}
	}, [favorites, domain])

	return { favorites, ...storeProps }
}
