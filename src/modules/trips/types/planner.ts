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
	planner: PlannerInfo[]
	style: PlannerStyle
	writer: string
	rating: number
	shared: number
	isPublic?: boolean
	createAt?: Date
	updateAt?: Date
}

export type PlannerPreview = Omit<Planner, 'planner' | 'style'>

export interface PlannerInfo {
	day: number
	title?: string
	description?: string
	activities: ActivityPlan[]
}

export interface ActivityPlan {
	hour: ActivityHour
	place: PlannerPlace
}

export interface PlannerPlace {
	placeId: string
	name: string
	coordinate: LatLng
	defaultPhoto: BasicPhoto
	mainPhoto: BasicPhoto
}

export interface ActivityHour {
	from: string
	to: string
}

export interface PlannerStyle {
	coverPhoto?: string
	showCover?: boolean
}
