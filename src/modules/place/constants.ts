import { DomainValue } from 'common/constants/business'

import { ATTRACTION, FOOD, HOTEL, ATTRACTION_TITLE, EVENT_TITLE, FOOD_TITLE, HOTEL_TITLE, TRIP_TITLE } from './locale'

export const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export const CATEGORY_TITLES_LOCALE = {
	[DomainValue.ATTRACTION]: ATTRACTION,
	[DomainValue.FOOD]: FOOD,
	[DomainValue.HOTEL]: HOTEL,
}

export const SEARCH_TITLES_LOCALE = {
	[DomainValue.ATTRACTION]: ATTRACTION_TITLE,
	[DomainValue.FOOD]: FOOD_TITLE,
	[DomainValue.HOTEL]: HOTEL_TITLE,
	[DomainValue.EVENT]: EVENT_TITLE,
	[DomainValue.TRIP]: TRIP_TITLE,
}
