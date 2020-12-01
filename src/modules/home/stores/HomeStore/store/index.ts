import { action } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import connectStores from 'core/mobx/annotations/connectStores'

import HomeApiStore from 'modules/home/stores/HomeAPIStore/store'

@connectStores(['homeApiStore'])
export default class HomeStore extends FetchStateStore {
	homeApiStore: HomeApiStore

	highlightPlaces: any

	@action.bound
	@loading()
	async getHighlightPlace() {
		const res = await this.homeApiStore.getHighlightPlace()

		this.highlightPlaces = res.data
	}
}
