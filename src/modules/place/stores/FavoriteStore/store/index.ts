import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { DomainValue } from 'common/constants/business'

import FavoriteEventStore from 'modules/event/stores/FavoriteEventStore/store'
import { getFavorite } from 'modules/place/api'
import FavoritePlaceStore from 'modules/place/stores/FavoritePlaceStore/store'

type Stores = {
	favoritePlaceStore: FavoritePlaceStore
	favoriteEventStore: FavoriteEventStore
}

class FavoriteStore extends FetchStateStore {
	@observable
	domain = DomainValue.ATTRACTION

	@observable
	favoritePlaceStore: FavoritePlaceStore

	@observable
	favoriteEventStore: FavoriteEventStore

	@action
	onInit({ favoriteEventStore, favoritePlaceStore }: Stores) {
		this.favoriteEventStore = favoriteEventStore
		this.favoritePlaceStore = favoritePlaceStore
	}

	@action.bound
	setDomain(domain: DomainValue) {
		this.domain = domain
	}

	@action.bound
	@loading
	async getFavorite(domain?: DomainValue) {
		const { favoritePlaces, events } = await getFavorite(domain || this.domain)

		if (!this.error) {
			runInAction(() => {
				if (favoritePlaces) {
					switch (this.domain) {
						case DomainValue.ATTRACTION:
							this.favoritePlaceStore.attractions = favoritePlaces
							break
						case DomainValue.FOOD:
							this.favoritePlaceStore.restaurants = favoritePlaces
							break
						case DomainValue.HOTEL:
							this.favoritePlaceStore.hotels = favoritePlaces
							break
					}
				}
				if (events) {
					this.favoriteEventStore.favoriteEvents = events
				}
			})
		}
	}

	@action
	onUnMount() {
		this.domain = DomainValue.ATTRACTION
	}

	@action.bound
	unlike() {
		if (this.domain === DomainValue.EVENT) {
			return this.favoriteEventStore.unlikeEvent
		}

		return this.favoritePlaceStore.removeFavoritePlace
	}

	get favoritesMapper() {
		const mapper = {
			[DomainValue.ATTRACTION]: this.favoritePlaceStore.attractions,
			[DomainValue.FOOD]: this.favoritePlaceStore.restaurants,
			[DomainValue.HOTEL]: this.favoritePlaceStore.hotels,
			[DomainValue.EVENT]: this.favoriteEventStore.favoriteEvents,
		}

		return mapper
	}
}

export default FavoriteStore
