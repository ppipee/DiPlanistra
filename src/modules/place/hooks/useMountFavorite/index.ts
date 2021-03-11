import { useEffect } from 'react'

import { DomainValue } from 'common/constants/business'

import { useFavoriteStore } from 'modules/place/stores/FavoriteStore/context'

export default function useMountFavorite(domain?: DomainValue) {
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
		}
	}, [domain])

	useEffect(() => {
		if (!favorites) {
			getFavorite()
		}
	}, [favorites])

	return { favorites, ...storeProps }
}
