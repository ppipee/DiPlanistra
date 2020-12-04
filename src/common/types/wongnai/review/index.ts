import { NameValue, Time } from '../common'
import { BasicPhoto } from '../image'

export interface Review {
	id: number
	summary: string
	description: string
	rating: number
	reviewedTime: Time
	lastUpdatedTime: Time
	numberOfPhotos: number
	photos: BasicPhoto[]
	previewPhotos: BasicPhoto[]
	reviewerProfile: ReviewerProfile
	numberOfComments: number
	date: string
	spendingHour: NameValue<number>
	priceRange?: NameValue<number>
	activities?: string[]
	numberOfViews: number
	numberOfHelpfulVotes: number
}

export interface ReviewerProfile {
	id: string
	gid: string
	name: string
	profilePicture: BasicPhoto
	aboutMe: string
}
