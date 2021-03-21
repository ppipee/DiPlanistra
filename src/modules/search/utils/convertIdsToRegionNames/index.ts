import { CITIES } from 'modules/root/components/ViewGroupSelector/constant'

export default function convertIdsToRegionNames(regions: number[]) {
	const regionNames: string[] = []

	regions.forEach((regionId) => {
		const city = CITIES.find((city) => city.id === regionId)

		if (city) {
			regionNames.push(city.name)
		}
	})

	return regionNames
}
