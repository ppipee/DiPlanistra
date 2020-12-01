export default function convertDistance(distance: number) {
	const distanceKM = distance / 1000

	return `${distanceKM.toFixed(2)} km`
}
