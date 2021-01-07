import { AttractionInformation, Category, WorkingHourStatus } from 'common/types/wongnai/business'
import { LatLng } from 'common/types/wongnai/common'
import { BasicPhoto } from 'common/types/wongnai/image'

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
	writer: string // should replace with User
	rating: number
	shared: number
	isPublic?: boolean
	createAt?: Date
	updateAt?: Date
}

export type PlannerPreview = Omit<Planner, 'planners' | 'style'>

export interface PlannerInfo {
	day: number
	title?: string
	description?: string
	activities: ActivityPlan[]
}

export interface ActivityPlan {
	id?: string
	hour: ActivityHour
	place: ActivityPlace
	memo?: string
	distance?: number
}

export interface EditActivity {
	hour: ActivityHour
	placeId: string // publicId
	memo?: string
	distance?: number
}

export interface ActivityPlace {
	publicId: string
	name: string
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
	categories: Category[]
	rating: number
	priceRange?: number // phase3
	workingHoursStatus: WorkingHourStatus
	entryFee?: AttractionInformation['entryFee']
}

export interface ActivityHour {
	from: string
	to: string
}

export interface PlannerStyle {
	coverPhoto?: string
	showCover?: boolean
}

export enum PlannerMode {
	Edit = 'edit',
	View = 'view',
}
