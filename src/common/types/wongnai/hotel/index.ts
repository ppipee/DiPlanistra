export interface HotelFacility {
	key: string
	value: string
	name?: string
	remark: string
}

export interface HotelInformation {
	checkIn: string
	checkOut: string
	extraBedPolicy: {
		value?: string
		remark?: string
	}
	childrenFriendly: {
		value?: string
		remark?: string
	}
	starRating?: number
	mainFacilities: HotelFacility[]
	internetFacilities: HotelFacility[]
	parkingFacilities: HotelFacility[]
	foodAndDrinkFacilities: HotelFacility[]
	petFacilities: HotelFacility[]
	transportationFacilities: HotelFacility[]
	inRoomFacilities: HotelFacility[]
	serviceFacilities: HotelFacility[]
	generalFacilities: HotelFacility[]
	businessFacilities: HotelFacility[]
	activityFacilities: HotelFacility[]
	poolFacilities: HotelFacility[]
	sportFacilities: HotelFacility[]
	beautyFacilities: HotelFacility[]
}
