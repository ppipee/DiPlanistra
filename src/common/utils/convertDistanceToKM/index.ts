export default function convertDistanceToKM(distance: number) {
	const distanceKM = distance / 1000

	return `${distanceKM.toFixed(2)}`
}
