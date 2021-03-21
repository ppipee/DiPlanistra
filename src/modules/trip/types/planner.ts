import { LatLng } from 'common/types/wongnai/common'
import { BasicPhoto } from 'common/types/wongnai/image'

import { AttractionInformation, Category, Domain, WorkingHourStatus } from 'modules/place/types/place'
import { BaseUser } from 'modules/user/types'

import { PlannerState } from '../constants'

export interface InitPlanner {
	name: string
	startDate: Date
	endDate: Date
}

export interface Planner extends InitPlanner {
	id?: string
	dateLength: number
	planners: PlannerInfo[]
	style: PlannerStyle
	writer: BaseUser
	rating: number
	shared: number
	isPublic: boolean
	createAt: Date
	updateAt: Date
	isOwner: boolean
	isBookmark: boolean
	numberOfViews: number
	numberOfBookmarks: number
	state: PlannerState
	regions?: number[]
}

export interface PlannerPreview extends Omit<Planner, 'planners'> {
	planners: PlannerShortInfo[]
}

export interface PlannerInfo {
	day: number
	title?: string
	description?: string
	activities?: ActivityPlan[]
}

export interface PlannerShortInfo extends Omit<PlannerInfo, 'activities'> {
	day: number
	title?: string
	description?: string
	activities: string
}

export interface ActivityPlan {
	id?: string
	hour: ActivityHour
	place: ActivityPlace
	memo?: string
	distance?: string
	duration?: string
}

export interface EditActivity {
	id?: string
	hour: ActivityHour
	placeId: string // publicId
	memo?: string
}

export interface ActivityPlace {
	id?: string
	publicId: string
	name: string
	domain: Domain
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
	categories: Category[]
	rating: number
	priceRange?: number // phase3
	workingHoursStatus: WorkingHourStatus
	entryFee?: AttractionInformation['entryFee']
	isFavorite?: boolean
	numberOfReviews: number
}

export interface ActivityHour {
	from: string
	to: string
}

export interface PlannerStyle {
	coverPhoto?: string
	showCover?: boolean
}
