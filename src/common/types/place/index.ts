export enum CategoryPlace {
	Restaurant = 'restaurant',
	Attraction = 'attraction',
	Hotel = 'hotel',
	Trip = 'trip',
}

export type FacilitiesProps = Record<PlaceFacility, boolean | null | undefined>

export enum PlaceFacility {
	Wifi = 'wifi',
	Toilet = 'toilet',
	WheelchairAccess = 'wheelchairAccess',
	Souvenir = 'souvenir',
	AttractionRestaurant = 'attractionRestaurant',
	Atm = 'atm',
	ParkingType = 'parkingType',
	PetFriendly = 'petFriendly',
	TrueMoneyWallet = 'trueMoneyWallet',
	CreditCardAccept = 'creditCardAccept',
}
