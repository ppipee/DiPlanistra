export interface BusinessStatistic {
	numberOfBookmarks: number
	numberOfPhotos: number
	rating: number
	numberOfReviews: number
	showRating: boolean
	numberOfRatings: number
	numberOfVideos: number
	numberOfUserPhotos?: number
	numberOfEditorialReviews?: number
	numberOfSponsoredReviews?: number
	numberOfCheckins?: number
	numberOfMarkAsBeenHeres?: number
	numberOfUniqueCheckins?: number
	featuredRating?: number
	numberOfFavouriteMenus?: number
	numberOfDistinctDeals?: number
	numberOfVisibleDeals?: number
	ratingDistribution?: RatingDistribution
}

export interface RatingDistribution {
	one: number
	two: number
	three: number
	four: number
	five: number
}
