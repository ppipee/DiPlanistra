import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { searchEvents } from 'modules/event/api'
import { EventPreview } from 'modules/event/types'
import { SearchEventQueries } from 'modules/search/types'

class SearchEventStore extends FetchStateStore {
	@observable
	events: EventPreview[]

	@action.bound
	@loading
	async getEvents(queries?: SearchEventQueries) {
		const data = await searchEvents(queries)

		if (!this.error) {
			runInAction(() => {
				this.events = data.events
			})
		}
	}

	@action.bound
	clear() {
		this.events = undefined
	}
}

export default SearchEventStore
