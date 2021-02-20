import isEventsPath from '../isEventsPath'
import isPlacesPath from '../isPlacesPath'
import isTripsPath from '../isTripsPath'

export default function isSearchPath(pathname: string): boolean {
	const isSearchPath = isPlacesPath(pathname) || isTripsPath(pathname) || isEventsPath(pathname)

	return isSearchPath
}
