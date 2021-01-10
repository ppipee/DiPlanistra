import { action, observable, runInAction } from 'mobx'

import loading from 'core/api/annotations/loading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

import { Page } from 'common/types/wongnai/page'

import { getPlace, getPlaceReviews } from 'modules/place/api'
import { Place } from 'modules/place/types/place'
import { Review } from 'modules/place/types/review'

class PlaceStore extends FetchStateStore {
	@observable
	place: Place

	@observable
	reviewsPage: Page<Review>

	@observable
	reviews: Review[]

	async onMount({ params: { placeId } }: MountParams) {
		this.getPlace(placeId)
		this.getPlaceReviews(placeId)
	}

	@action
	onUnMount() {
		this.place = undefined
		this.reviews = undefined
		this.reviewsPage = undefined
	}

	@action
	@loading
	async getPlace(placeId: string) {
		const place = await getPlace(placeId)

		if (!this.error) {
			runInAction(() => {
				this.place = place
			})
		}
	}

	@action
	@loading
	async getPlaceReviews(placeId: string) {
		const reviewsPage = await getPlaceReviews(placeId, {
			'page.size': 6,
			'page.number': 1,
		})

		if (!this.error) {
			runInAction(() => {
				this.reviewsPage = reviewsPage.page
				this.reviews = reviewsPage.page.entities
			})
		}
	}
}

export default PlaceStore
