import { useCallback, MouseEvent } from 'react'

import { DomainValue } from 'common/constants/business'
import useToggle from 'common/hooks/useToggle'

import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'
import { ActivityPlace } from 'modules/trip/types/planner'

export default function useToggleFavoritePlace(publicId: string, domain: DomainValue, isFavorite?: boolean) {
	const { favoritePlaces, saveFavoritePlace, removeFavoritePlace, isLoading } = useFavoritePlaceStore((store) => ({
		favoritePlaces: store.placeMapper[domain] as ActivityPlace[],
		saveFavoritePlace: store.saveFavoritePlace,
		removeFavoritePlace: store.removeFavoritePlace,
		isLoading: store.isActionLoading['saveFavoritePlace'] || store.isActionLoading['removeFavoritePlace'],
	}))

	const _isFavorite = !favoritePlaces
		? isFavorite
		: !!favoritePlaces?.find((place) => place.publicId === publicId)?.isFavorite

	const { toggle, isOpen: isFavoritePlace } = useToggle(_isFavorite)

	const toggleFavorite = useCallback(
		async (event: MouseEvent<HTMLDivElement | SVGElement>) => {
			event.preventDefault()

			toggle()
			isFavoritePlace ? await removeFavoritePlace(publicId, domain) : await saveFavoritePlace(publicId, domain)
		},
		[publicId, saveFavoritePlace, removeFavoritePlace, isFavoritePlace],
	)

	return { isLoading, toggleFavorite, isFavoritePlace }
}
