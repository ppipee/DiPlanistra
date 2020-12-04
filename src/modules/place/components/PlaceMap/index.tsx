import React from 'react'

import StaticGoogleMap from 'common/components/StaticGoogleMap'
import RestaurantPin from 'common/components/StaticGoogleMap/Marker/RestaurantPin.png'
import { GoogleMapSize } from 'common/components/StaticGoogleMap/types'
import { LatLng } from 'common/types/wongnai/common'

import { MapWrapper } from './styled'

type Props = LatLng

const PlaceMap = ({ lat, lng }: Props) => {
	const center = {
		lat,
		lng,
	}

	const markers = [
		{
			center,
			icon: RestaurantPin,
		},
	]

	return (
		<MapWrapper>
			<StaticGoogleMap center={center} size={GoogleMapSize.thumbnail} markers={markers} zoom={15} />
		</MapWrapper>
	)
}

export default PlaceMap
