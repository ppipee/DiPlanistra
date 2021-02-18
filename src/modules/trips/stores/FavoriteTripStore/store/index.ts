import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { getBookmarkTrips, bookmarkTrip, unlikeTrip } from 'modules/trips/api'
import { PlannerPreview } from 'modules/trips/types/planner'

class FavoriteTripStore extends FetchStateStore {
	@observable
	favoriteTrips: PlannerPreview[]

	@action.bound
	@loading
	async getBookmarkTrips() {
		const { bookmarks } = await getBookmarkTrips()

		if (!this.error) {
			runInAction(() => {
				this.favoriteTrips = bookmarks
			})
		}
	}

	@action.bound
	@actionLoading
	async bookmarkTrip(plannerId: string) {
		const { bookmarks } = await bookmarkTrip(plannerId)

		if (!this.error) {
			runInAction(() => {
				this.favoriteTrips = bookmarks

				return true
			})
		}
	}

	@action.bound
	@actionLoading
	async unlikeTrip(plannerId: string) {
		if (this.favoriteTrips) {
			const favoriteTrips = [...this.favoriteTrips]
			const index = favoriteTrips.findIndex((planner) => planner.id === plannerId)
			favoriteTrips.splice(index, 1)

			this.favoriteTrips = favoriteTrips
		}

		const { bookmarks } = await unlikeTrip(plannerId)

		if (!this.error) {
			runInAction(() => {
				this.favoriteTrips = bookmarks
			})
		}
	}
}

export default FavoriteTripStore
