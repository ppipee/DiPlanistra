import { ReactText } from 'react'

const meEndpoint = {
	favoritePlaces: () => '/me/favoritePlaces',
	favoritePlace: (publicId: ReactText) => `/me/favoritePlaces/${publicId}`,
}

export default meEndpoint
