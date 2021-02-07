import { useCallback, MouseEvent } from 'react'

import useToggle from 'common/hooks/useToggle'

import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'

export default function useToggleFavoritePlace(publicId: string, isFavorite?: boolean) {
	const { favoritePlaces, saveFavoritePlace, removeFavoritePlace, isLoading } = useFavoritePlaceStore((store) => ({
		favoritePlaces: store.favoritePlaces,
		saveFavoritePlace: store.saveFavoritePlace,
		removeFavoritePlace: store.removeFavoritePlace,
		isLoading: store.isActionLoading['saveFavoritePlace'] || store.isActionLoading['removeFavoritePlace'],
	}))

	const _isFavorite = isFavorite || favoritePlaces?.find((place) => place.publicId === publicId)?.isFavorite

	const { toggle, isOpen: isFavoritePlace } = useToggle(_isFavorite)

	const toggleFavorite = useCallback(
		async (event: MouseEvent<HTMLDivElement | SVGElement>) => {
			event.preventDefault()

			toggle()
			isFavoritePlace ? await removeFavoritePlace(publicId) : await saveFavoritePlace(publicId)
		},
		[publicId, saveFavoritePlace, removeFavoritePlace, isFavoritePlace],
	)

	return { isLoading, toggleFavorite, isFavoritePlace }
}
