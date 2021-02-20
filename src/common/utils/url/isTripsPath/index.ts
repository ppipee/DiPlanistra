export default function isTripsPath(pathname: string) {
	const tripsPathRegex = /^\/trips$/

	return tripsPathRegex.test(pathname)
}
