const eventEndpoint = {
	events: () => '/events',
	event: (eventId: string) => `/events/${eventId}`,
}

export default eventEndpoint
