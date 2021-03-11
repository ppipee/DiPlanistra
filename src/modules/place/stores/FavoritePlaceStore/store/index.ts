import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import FetchStateStore from 'core/api/stores/FetchStateStore'

import { DomainValue } from 'common/constants/business'

import { saveFavoritePlace, removeFavoritePlace } from 'modules/place/api'
import { ActivityPlace } from 'modules/trip/types/planner'

class FavoritePlaceStore extends FetchStateStore {
	@observable
	attractions: ActivityPlace[]

	@observable
	restaurants: ActivityPlace[]

	@observable
	hotels: ActivityPlace[]

	@action.bound
	@actionLoading
	async saveFavoritePlace(publicId: string, domain: DomainValue) {
		const { favoritePlaces } = await saveFavoritePlace(publicId)

		if (!this.error) {
			runInAction(() => {
				this.setFavoritePlaces(favoritePlaces, domain)

				return true
			})
		}
	}

	get placeMapper() {
		return {
			[DomainValue.ATTRACTION]: this.attractions,
			[DomainValue.FOOD]: this.restaurants,
			[DomainValue.HOTEL]: this.hotels,
		}
	}

	@action
	setFavoritePlaces(favoritePlaces: ActivityPlace[], domain: DomainValue) {
		switch (domain) {
			case DomainValue.ATTRACTION:
				this.attractions = favoritePlaces
				break
			case DomainValue.FOOD:
				this.restaurants = favoritePlaces
				break
			case DomainValue.HOTEL:
				this.hotels = favoritePlaces
				break
		}
	}

	@action.bound
	@actionLoading
	async removeFavoritePlace(publicId: string, domain: DomainValue) {
		const places = this.placeMapper[domain]

		if (places) {
			const favoritePlaces = [...places]
			const index = favoritePlaces.findIndex((place) => place.publicId === publicId)
			favoritePlaces.splice(index, 1)

			this.setFavoritePlaces(favoritePlaces, domain)
		}

		const { favoritePlaces } = await removeFavoritePlace(publicId)

		if (!this.error) {
			this.setFavoritePlaces(favoritePlaces, domain)
		}
	}
}

export default FavoritePlaceStore
