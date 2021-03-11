import apiClient from 'core/api'
import { Params } from 'core/router/types'

import { DomainValue } from 'common/constants/business'
import meEndpoint from 'common/endpoints/me'
import placeEndpoints from 'common/endpoints/place'
import { Page } from 'common/types/wongnai/page'

import { EventPreview } from 'modules/event/types'
import { Place, PlacePreview } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/trip/types/planner'

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

export const getFavorite = (domain?: DomainValue) =>
	apiClient.fetch<{ favoritePlaces?: ActivityPlace[]; events?: EventPreview[] }>({
		method: 'get',
		path: meEndpoint.favorite(),
		params: {
			domain,
		},
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
