import { useFavoriteEventStore } from 'modules/event/stores/FavoriteEventStore/context'
import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'
import { useUserStore } from 'modules/user/stores/UserStore/context'

export default function useRootError() {
	const userError = useUserStore((store) => store.error)
	const favoritePlaceError = useFavoritePlaceStore((store) => store.error)
	const favoriteEventError = useFavoriteEventStore((store) => store.error)

	return userError || favoriteEventError || favoritePlaceError
}
