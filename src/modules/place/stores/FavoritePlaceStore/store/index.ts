import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { getFavoritePlaces, saveFavoritePlace, removeFavoritePlace } from 'modules/place/api'
import { ActivityPlace } from 'modules/trips/types/planner'

class FavoritePlaceStore extends FetchStateStore {
	@observable
	favoritePlaces: ActivityPlace[]

	@action.bound
	@loading
	async getFavoritePlaces() {
		const { favoritePlaces } = await getFavoritePlaces()

		if (!this.error) {
			runInAction(() => {
				this.favoritePlaces = favoritePlaces
			})
		}
	}

	@action.bound
	@actionLoading
	async saveFavoritePlace(publicId: string) {
		const { favoritePlaces } = await saveFavoritePlace(publicId)

		if (!this.error) {
			runInAction(() => {
				this.favoritePlaces = favoritePlaces

				return true
			})
		}
	}

	@action.bound
	@actionLoading
	async removeFavoritePlace(publicId: string) {
		if (this.favoritePlaces) {
			const favoritePlaces = [...this.favoritePlaces]
			const index = favoritePlaces.findIndex((place) => place.publicId === publicId)
			favoritePlaces.splice(index, 1)

			this.favoritePlaces = favoritePlaces
		}

		const { favoritePlaces } = await removeFavoritePlace(publicId)

		if (!this.error) {
			runInAction(() => {
				this.favoritePlaces = favoritePlaces
			})
		}
	}
}

export default FavoritePlaceStore
