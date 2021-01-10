import { ReactText } from 'react'

const placeEndpoints = {
	places: () => '/places',
	place: (publicId: ReactText) => `/places/${publicId}`,
	placeReviews: (publicId: ReactText) => `/places/${publicId}/reviews`,
}

export default placeEndpoints
