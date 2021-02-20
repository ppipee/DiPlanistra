import { useCallback, MouseEvent } from 'react'

import useToggle from 'common/hooks/useToggle'

import { useFavoriteTripStore } from 'modules/trip/stores/FavoriteTripStore/context'

export default function useToggleBookmark(plannerId: string, isBookmark?: boolean) {
	const { favoriteTrips, bookmarkTrip, unlikeTrip, isLoading } = useFavoriteTripStore((store) => ({
		favoriteTrips: store.favoriteTrips,
		bookmarkTrip: store.bookmarkTrip,
		unlikeTrip: store.unlikeTrip,
		isLoading: store.isActionLoading['bookmarkTrip'] || store.isActionLoading['unlikeTrip'],
	}))

	const _isBookmark = isBookmark || favoriteTrips?.find((trip) => trip.id === plannerId)?.isBookmark

	const { toggle, isOpen: isBookmarkState } = useToggle(_isBookmark)

	const toggleFavorite = useCallback(
		async (event: MouseEvent<HTMLDivElement | SVGElement>) => {
			event.preventDefault()

			toggle()
			isBookmarkState ? await unlikeTrip(plannerId) : await bookmarkTrip(plannerId)
		},
		[plannerId, bookmarkTrip, unlikeTrip, isBookmarkState],
	)

	return { isLoading, toggleFavorite, isBookmark: isBookmarkState }
}
