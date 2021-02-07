import apiClient from 'core/api'
import { Params } from 'core/router/types'

import meEndpoint from 'common/endpoints/me'
import placeEndpoints from 'common/endpoints/place'
import { Page } from 'common/types/wongnai/page'

import { Place, PlacePreview } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/trips/types/planner'

import { Review } from '../types/review'

export const getPlaces = (params?: Params) =>
	apiClient.fetch<{ page: Page<PlacePreview> }>({
		method: 'get',
		path: placeEndpoints.places(),
		params,
	})

export const getPlace = (publicId: string) =>
	apiClient.fetch<Place>({
		method: 'get',
		path: placeEndpoints.place(publicId),
	})

export const getPlaceReviews = (publicId: string, params?: Params) =>
	apiClient.fetch<{ page: Page<Review> }>({
		method: 'get',
		path: placeEndpoints.placeReviews(publicId),
		params,
	})

export const getFavoritePlaces = () =>
	apiClient.fetch<{ favoritePlaces: ActivityPlace[] }>({
		method: 'get',
		path: meEndpoint.favoritePlaces(),
	})

export const removeFavoritePlace = (publicId: string) =>
	apiClient.fetch<{ favoritePlaces: ActivityPlace[] }>({
		method: 'delete',
		path: meEndpoint.favoritePlace(publicId),
	})

export const saveFavoritePlace = (publicId: string) =>
	apiClient.fetch<{ favoritePlaces: ActivityPlace[] }>({
		method: 'post',
		path: meEndpoint.favoritePlaces(),
		body: {
			publicId,
		},
	})