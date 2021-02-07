import { useEffect } from 'react'

import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'

export default function useMountFavoritePlaces() {
	const { getFavoritePlaces, ...storeProps } = useFavoritePlaceStore((store) => ({
		getFavoritePlaces: store.getFavoritePlaces,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
		favoritePlaces: store.favoritePlaces,
	}))

	useEffect(() => {
		getFavoritePlaces()
	}, [])

	return storeProps
}
