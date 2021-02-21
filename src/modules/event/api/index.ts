import apiClient from 'core/api'

import eventEndpoint from 'common/endpoints/event'
import meEndpoint from 'common/endpoints/me'

import { SearchEventQueries } from 'modules/search/types'

import { EventPreview, EventDetail } from '../types'

export const searchEvents = (queries: SearchEventQueries) =>
	apiClient.fetch<{ events: EventPreview[] }>({
		method: 'get',
		path: eventEndpoint.events(),
		params: queries,
	})

export const getEvent = (eventId: string) =>
	apiClient.fetch<EventDetail>({
		method: 'get',
		path: eventEndpoint.event(eventId),
	})

export const getFavoriteEvents = () =>
	apiClient.fetch<{ events: EventPreview[] }>({
		method: 'get',
		path: meEndpoint.events(),
	})

export const saveEvent = (eventId: string) =>
	apiClient.fetch<EventPreview | null>({
		method: 'post',
		path: meEndpoint.events(),
		body: {
			eventId,
		},
	})

export const unlikeEvent = (eventId: string) =>
	apiClient.fetch<{ events: EventPreview[] }>({
		method: 'delete',
		path: meEndpoint.event(eventId),
	})
