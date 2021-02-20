export default function isPlacesPath(pathname: string) {
	const placesPathRegex = /^\/places$/

	return placesPathRegex.test(pathname)
}
