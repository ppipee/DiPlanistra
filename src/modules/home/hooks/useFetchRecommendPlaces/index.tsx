import { useEffect } from 'react'

import { isNil } from 'lodash'

import { useWelcomeStore } from 'modules/home/stores/WelcomeStore/context'
import { useUserStore } from 'modules/user/stores/UserStore/context'

export default function useFetchRecommendPlaces() {
	const { isLoading, recommendPlaces, getRecommendPlaces } = useWelcomeStore((store) => ({
		isLoading: store.isActionLoading['getRecommendPlaces'],
		recommendPlaces: store.recommendPlaces,
		getRecommendPlaces: store.getRecommendPlaces,
	}))
	const placeCategories = useUserStore((store) => store.user?.placeCategories)

	useEffect(() => {
		if (!isNil(placeCategories)) {
			getRecommendPlaces(placeCategories)
		}
	}, [placeCategories])

	return { isLoading, recommendPlaces }
}
