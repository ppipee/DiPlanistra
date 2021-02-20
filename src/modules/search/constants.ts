import { DomainValue } from 'common/constants/business'
import { ALL_VALUE } from 'common/constants/selector'

import { DistanceFilterType } from './types'

export enum PlaceDomain {
	Food = 'food',
	Attraction = 'attraction',
	Hotel = 'hotel',
	Trip = 'trip',
}

export const PLACE_DOMAIN_VALUE: Record<PlaceDomain, number> = {
	food: 1,
	hotel: 3,
	attraction: 4,
	trip: 99,
}

export const DISTANCE_KM = 0.62
export const DEFAULT_DISTANCE: DistanceFilterType = 500
export const DEFAULT_CATEGORIES = ALL_VALUE
export const DEFAULT_RATING = -1
export const DEFAULT_PLACE_DOMAIN = DomainValue.ATTRACTION
export const DEFAULT_REGIONS = 9681
export const DEFAULT_TRIP_SORT_BY = ''

export const DISTANCES_MAPPER = {
	500: DISTANCE_KM * 0.5,
	1000: DISTANCE_KM * 1,
	2000: DISTANCE_KM * 2,
	3000: DISTANCE_KM * 3,
	5000: DISTANCE_KM * 5,
}

export enum TRIP_SORT_BY_VALUE {
	'view' = 'view',
	'like' = 'bookmark',
}

export const RATING_VALUE = {
	'3.5': '1',
	'4.0': '2',
}

export enum FoodCategory {
	Nationality = 'nationality',
	FoodType = 'foodType',
	BusinessType = 'businessType',
	Restaurant = 'restaurant',
	CoffeeDessert = 'coffeeDessert',
}

export const FoodCategoryValue: Record<FoodCategory, number> = {
	nationality: 1,
	foodType: 2,
	businessType: 3,
	restaurant: 9,
	coffeeDessert: 10,
}

export enum HotelCategory {
	HotelResort = 'hotelResort',
	GuestHouse = 'guestHouse',
	HomeStay = 'homeStay',
	Hostel = 'hostel',
	NationalPark = 'nationalPark',
	Villa = 'villa',
	Other = 'other',
}

export const HotelCategoryValue: Record<HotelCategory, number> = {
	hotelResort: 3001,
	guestHouse: 3002,
	homeStay: 3003,
	hostel: 3004,
	nationalPark: 3005,
	villa: 3006,
	other: 3007,
}

export enum AttractionCategory {
	Shopping = 'shopping',
	Sea = 'sea',
	Activities = 'activities',
	Historical = 'historical',
	Museum = 'museum',
	Building = 'building',
	Local = 'local',
	AmusementPark = 'amusementPark',
	Nature = 'nature',
	Transportation = 'transportation',
}

export const AttractionDomainValue: Record<AttractionCategory, number> = {
	shopping: 4000,
	sea: 4005,
	activities: 4100,
	historical: 4150,
	museum: 4200,
	building: 4250,
	local: 4300,
	amusementPark: 4350,
	nature: 4400,
	transportation: 4450,
}

// Food Category

// Hotel Category

// Attraction Category

export enum ShoppingCategory {
	ShoppingMall = 'shoppingMall',
	FloatingMarket = 'floatingMarket',
	StreetMarket = 'streetMarket',
	SouvenirShop = 'souvenirShop',
	Supermarket = 'supermarket',
}

export const ShoppingCategoryValue: Record<ShoppingCategory, number> = {
	shoppingMall: 4001,
	floatingMarket: 4002,
	streetMarket: 4004,
	souvenirShop: 4007,
	supermarket: 4008,
}

export enum SeaCategory {
	Island = 'island',
	Beach = 'beach',
}

export const SeaCategoryValue: Record<SeaCategory, number> = {
	island: 4051,
	beach: 4052,
}

export enum ActivitiesCategory {
	Adventure = 'adventure',
	Stadium = 'stadium',
	BoardGame = 'boardGame',
	Cinema = 'cinema',
	Workshop = 'workshop',
	Shop = 'show',
}

export const ActivitiesCategoryValue: Record<ActivitiesCategory, number> = {
	adventure: 4104,
	stadium: 4107,
	boardGame: 4108,
	cinema: 4109,
	workshop: 4110,
	show: 4111,
}

export enum HistoricalCategory {
	Palace = 'palace',
	Temple = 'temple',
	Church = 'church',
	Mosque = 'mosque',
	Shrine = 'shrine',
	HistoricalSite = 'historicalSite',
	ReligiousSite = 'religiousSite',
}

export const HistoricalCategoryValue: Record<HistoricalCategory, number> = {
	palace: 4151,
	temple: 4152,
	church: 4161,
	mosque: 4162,
	shrine: 4164,
	historicalSite: 4167,
	religiousSite: 4168,
}

export enum MuseamCategory {
	ArtGalleries = 'artGalleries',
	Museam = 'museam',
	LearningCenter = 'learningCenter',
	CulterCenter = 'cultureCenter',
	Library = 'library',
}

export const MuseamCategoryValue: Record<MuseamCategory, number> = {
	artGalleries: 4201,
	museam: 4202,
	learningCenter: 4204,
	cultureCenter: 4205,
	library: 4206,
}

export enum BuildingCategory {
	Bridge = 'bridge',
	Street = 'street',
	University = 'university',
	Landmark = 'landmark',
	Monument = 'monument',
}

export const BuildingCategoryValue: Record<BuildingCategory, number> = {
	bridge: 4253,
	street: 4256,
	university: 4258,
	landmark: 4260,
	monument: 4261,
}

export enum LocalCategory {
	Community = 'community',
	LifeMuseam = 'lifeMuseam',
	IndigenousPeople = 'indigenousPeople',
	ConservedHouse = 'conservedHouse',
}

export const LocalCategoryValue: Record<LocalCategory, number> = {
	community: 4301,
	lifeMuseam: 4302,
	indigenousPeople: 4303,
	conservedHouse: 4304,
}
