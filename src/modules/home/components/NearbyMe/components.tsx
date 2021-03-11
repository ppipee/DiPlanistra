import React, { useEffect } from 'react'
import { useCallback } from 'react'

import { useGeolocation } from 'react-use'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import { DomainValue } from 'common/constants/business'

import NearByPosition from 'modules/place/components/NearByPosition'
import { useNearbyPositionStore } from 'modules/place/stores/NearbyPositionStore/context'
import { DISTANCE_KM } from 'modules/search/constants'
import { ME } from 'modules/user/locale'

const DISTANCE = DISTANCE_KM * 10

const NearbyMeComponent = () => {
	const I18n = useI18n()
	const { regions } = useQuery()
	const { latitude, longitude } = useGeolocation()
	const { nearbyMe, getNearbyPosition, isLoading } = useNearbyPositionStore((store) => ({
		nearbyMe: store.nearbyPosition,
		getNearbyPosition: store.getNearbyPosition,
		isLoading: store.isLoading,
	}))

	const getNearbyMe = useCallback(
		(domain?: DomainValue) => {
			getNearbyPosition(domain, latitude, longitude, DISTANCE, regions)
		},
		[latitude, longitude, regions],
	)

	useEffect(() => {
		if (!latitude || !longitude) return

		getNearbyMe()
	}, [latitude, longitude])

	if (!latitude || !longitude) return null

	return <NearByPosition nearbyPlace={nearbyMe} nearby={I18n.t(ME)} loading={isLoading} getPlaces={getNearbyMe} />
}

export default NearbyMeComponent
