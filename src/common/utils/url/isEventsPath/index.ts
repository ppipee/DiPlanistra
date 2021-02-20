export default function isEventsPath(pathname: string) {
	const eventsPathRegex = /^\/events$/

	return eventsPathRegex.test(pathname)
}
