export enum GoogleMapSize {
	fullMobileScreen = '800x600',
	thumbnail = '400x300',
}

export type GoogleMapSizeType = GoogleMapSize | '400x300' | '800x600'

export interface Marker {
	icon?: string
	center: google.maps.LatLngLiteral
}
