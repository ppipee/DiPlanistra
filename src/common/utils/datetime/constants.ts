export const SEC_MS = 1000

export const MINUTE_SEC = 60

export const HOUR_MINUTE = 60

export const DAY_HOUR = 24

export const MINUTE_MS = MINUTE_SEC * SEC_MS

export const HOUR_MS = MINUTE_MS * HOUR_MINUTE

export const DAY_MS = HOUR_MS * DAY_HOUR

export enum Month {
	Jan = 0,
	Feb = 1,
	Mar = 2,
	Apr = 3,
	May = 4,
	Jun = 5,
	Jul = 6,
	Aug = 7,
	Sep = 8,
	Oct = 9,
	Nov = 10,
	Dec = 11,
}

export enum Day {
	Mon = 1,
	Tue = 2,
	Wed = 3,
	Thu = 4,
	Fri = 5,
	Sat = 6,
	Sun = 0,
}

export const NUMBER_OF_DAY_IN_WEEK = 7
export const MONTH_IN_A_YEAR = 12
