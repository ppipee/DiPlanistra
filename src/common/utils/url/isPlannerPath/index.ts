export default function isPlannerPath(pathname: string) {
	const plannersPathRegex = /^\/planners\/\w+$/

	return plannersPathRegex.test(pathname)
}
