const meEndpoint = {
	favoritePlaces: () => '/me/favoritePlaces',
	favoritePlace: (publicId: string) => `/me/favoritePlaces/${publicId}`,

	bookmarks: () => 'me/bookmarks',
	bookmark: (plannerId: string) => `me/bookmarks/${plannerId}`,

	events: () => 'me/events',
	event: (eventId: string) => `me/events/${eventId}`,

	categories: () => 'me/categories',
}

export default meEndpoint
