import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { getFavoriteEvents, saveEvent, unlikeEvent } from 'modules/event/api'
import { EventPreview } from 'modules/event/types'

class FavoriteEventStore extends FetchStateStore {
	@observable
	favoriteEvents: EventPreview[]

	@action.bound
	@loading
	async getFavoriteEvents() {
		const { events } = await getFavoriteEvents()

		if (!this.error) {
			runInAction(() => {
				this.favoriteEvents = events
			})
		}
	}

	@action.bound
	@actionLoading
	async saveEvent(eventId: string) {
		const event = await saveEvent(eventId)

		if (!this.error && event) {
			runInAction(() => {
				if (this.favoriteEvents) {
					this.favoriteEvents = [...this.favoriteEvents, event]
				}

				return true
			})
		}

		return false
	}

	@action.bound
	@actionLoading
	async unlikeEvent(eventId: string) {
		const { events } = await unlikeEvent(eventId)

		if (!this.error) {
			runInAction(() => {
				this.favoriteEvents = events
			})
		}
	}
}

export default FavoriteEventStore
