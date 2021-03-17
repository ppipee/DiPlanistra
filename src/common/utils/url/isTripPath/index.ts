export default function isTripPath(pathname: string) {
	const tripPathRegex = /^\/trips\/\w+$/

	return tripPathRegex.test(pathname)
}
