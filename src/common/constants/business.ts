export enum DomainValue {
	UNKNOWN = 0,
	FOOD = 1,
	BEAUTY = 2,
	HOTEL = 3,
	ATTRACTION = 4,
	TRIP = 99,
}

export enum DealCollectionGroupValue {
	VOUCHER = 1,
	NEIGHBORHOOD = 2,
	WELCOME_EVOUCHER_CATEGORIES = 4,
}

export const DomainName = {
	[DomainValue.UNKNOWN]: 'ALL',
	[DomainValue.FOOD]: 'RESTAURANT',
	[DomainValue.BEAUTY]: 'BEAUTY',
	[DomainValue.HOTEL]: 'HOTEL',
	[DomainValue.ATTRACTION]: 'ATTRACTION',
}

export const DOMAIN_ICON = {
	[DomainValue.FOOD]: 'black-restaurant',
	[DomainValue.BEAUTY]: 'black-beauty',
	[DomainValue.HOTEL]: 'black-hotel',
	[DomainValue.ATTRACTION]: 'black-attraction',
}

export const NearbySection = {
	FOOD: 'NEARBY_RESTAURANT',
	HOTEL: 'NEARBY_HOTEL',
	ATTRACTION: 'NEARBY_ATTRACTION',
}

export const ParkingType = {
	None: 0,
	Street: 1,
	Valet: 2,
	ParkingLot: 3,
}

export const WifiType = {
	NoWifi: 0,
	FreeWifi: 1,
	WifiAvailable: 2,
}

export const Suitables = [
	'group-of-friends',
	'family-or-kids',
	'couples',
	'parties',
	'business-talk',
	'very-hungry',
	'cheap',
	'something-quick',
]

export const ContactFormSteps = {
	DOMAIN_SELECTION: 'DOMAIN_SELECTION',
	SHOW_CONTACT_FORM: 'SHOW_CONTACT_FORM',
}

export const ContactFormTypes = {
	ALL: 1,
	CLAIM_BUSINESS: 2,
}

export const DEFAULT_PAGE_SIZE = 20

export const NumberOfDomain = 9

export const CONTACT_FORM_DOMAINS = {
	FOOD: 1,
	FOOD_CHAIN: 2,
	FOOD_NO_STORE_FRONT: 3,
	BEAUTY: 4,
	BEAUTY_CHAIN: 5,
	BRAND: 6,
	AGENCY: 7,
	HOTEL: 8,
	ATTRACTION: 9,
}

export const AdTabTypes = {
	overview: 0,
	free_features: 1,
	advertising: 2,
	media_kit: 3,
}

export const MenuTypes = {
	LISTS: 1,
	PHOTOS: 2,
}

export const NEARBY_SECTION_TYPE = {
	BUSINESS: 'business',
	SEE_ALL: 'see_all',
}

export const BUSINESSES_TRACK_EVENT = {
	IMPRESS: 'businesses_impress',
	CLICK: 'businesses_click',
}

export const SCREEN_NAME = {
	BUSINESS: 'business',
	BUSINESSES: 'businesses',
}

export const FILTER_NAME = {
	HOTEL_STAR: 'star',
	FACILITIES: 'facilities',
	CATEGORY_FOODS: 'category_foods',
	CATEGORY_BEAUTYS: 'category_beautys',
	CATEGORY_HOTELS: 'category_hotels',
	CATEGORY_ATTRACTIONS: 'category_attractions',
	MORE_FILTER_RESTAURANT: 'more_filter_restaurant',
	MORE_FILTER_ATTRACTION: 'more_filter_attraction',
	STAYING_DATE: 'staying_date',
	DOMAIN: 'domain',
	NEIGHBORHOOD: 'neighborhood',
}

export const TRACK_FB_EVENT_NAME = {
	DO_FILTER: 'businesses_dofilter',
	OPEN_FILTER: 'businesses_openfiltering',
	THEME_CARD_CLICK: 'theme_card_click',
	THEME_CARD_IMPRESS: 'theme_card_impress',
	BUSINESSES_CLICK: 'businesses_click',
	BUSINESSES_IMPRESS: 'businesses_impress',
	BUSINESS_TAG_CLICK: 'business_tag_click',
	NEARBY_TOP_IMPRESS: 'top_nearby_business_impress',
	NEARBY_TOP_CLICK: 'top_nearby_business_click',
	SEARCH_NEARBY_BUSINESS_CLICK: 'nearby_business_range_click',
	SEARCH_NEARBY_BUSINESS_IMPRESS: 'nearby_business_range_impress',
	NEAR_ME_FILTER_CLICK: 'near_me_filter_click',
	NEAR_ME_FILTER_IMPRESS: 'near_me_filter_impress',
}

export const TRACK_EVENT_LABEL = {
	NEAR_ME: 'nearMe',
	LIST_VIEW: 'listView',
	NEAR_BY: 'nearBy',
	SUGGESTED: 'suggested',
	EATIGO: 'eatigo',
	DEAL: 'deal',
	DELIVERY: 'delivery',
	BRAND_STORY: 'brandstory',
	TASTE_TALK: 'tasteTalk',
}

export const SEARCH_RESULT_ITEMS = {
	DISPLAY_ADS: 1,
	MAXIMUM_DISPLAY_RECOMMENDED_BUSINESS: 2,
}

export const ACTION_POSITION = {
	TOP_BAR: 'top_bar',
	CONTENT: 'content',
	CONTENT_BUBBLE: 'content_bubble',
}

export const BUSINESSES_SEARCH_RESULT_PATHS = ['businesses', 'restaurants', 'attractions', 'hotels']

export const ACTION_SOURCE = {
	ORGANIC: 'organic',
	LISTING_ADS: 'listingAds',
}

export const TASTE_TALK = {
	TITLE: 'Taste Talk',
	REVIEWER: 'Wongnai Editor',
}
