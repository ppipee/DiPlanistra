import { useCallback, MouseEvent } from 'react'

import useToggle from 'common/hooks/useToggle'

import { useFavoriteEventStore } from 'modules/event/stores/FavoriteEventStore/context'

export default function useToggleFavoriteEvent(eventId: string, isFavorite?: boolean) {
	const { favoriteEvents, saveEvent, unlikeEvent, isLoading } = useFavoriteEventStore((store) => ({
		favoriteEvents: store.favoriteEvents,
		saveEvent: store.saveEvent,
		unlikeEvent: store.unlikeEvent,
		isLoading: store.isActionLoading['saveEvent'] || store.isActionLoading['unlikeEvent'],
	}))

	const _isFavorite = isFavorite || favoriteEvents?.find((event) => event.eventId === eventId)?.isFavorite

	const { toggle, isOpen: isFavoriteState } = useToggle(_isFavorite)

	const toggleFavorite = useCallback(
		async (event: MouseEvent<HTMLDivElement | SVGElement>) => {
			event.preventDefault()

			toggle()
			isFavoriteState ? await unlikeEvent(eventId) : await saveEvent(eventId)
		},
		[eventId, saveEvent, unlikeEvent, isFavoriteState],
	)

	return { isLoading, toggleFavorite, isFavorite: isFavoriteState }
}
