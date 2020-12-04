import React, { HTMLAttributes } from 'react'

import qs from 'qs'

import { mapAPIKey, currentLocale, MAP_ZOOM_DEFAULT } from './config'
import { Map } from './styled'
import { Marker, GoogleMapSizeType } from './types'

interface Props extends HTMLAttributes<HTMLImageElement> {
	center: google.maps.LatLngLiteral
	zoom?: number
	size: GoogleMapSizeType
	markers?: Marker[]
}

const StaticGoogleMap = ({ center: { lat, lng }, markers, size, zoom = MAP_ZOOM_DEFAULT, ...props }: Props) => {
	const mapProperties = qs.stringify({
		center: `${lat},${lng}`,
		key: mapAPIKey,
		language: currentLocale,
		zoom,
		size,
	})

	const markersProperties = markers
		? markers
				.map(
					({ icon, center: { lat: markerLat, lng: MarkerLng } }) =>
						`markers=${icon ? `icon:${icon}` : ''}|${markerLat},${MarkerLng}`,
				)
				.join('&')
		: ''

	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?${mapProperties}&${markersProperties}`

	return <Map src={mapUrl} alt="Google Map" {...props} />
}

export default StaticGoogleMap
