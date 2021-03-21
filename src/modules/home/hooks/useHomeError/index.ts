import { useHomeStore } from 'modules/home/stores/HomeStore/context'
import { useWelcomeStore } from 'modules/home/stores/WelcomeStore/context'
import { useNearbyPositionStore } from 'modules/place/stores/NearbyPositionStore/context'

export default function useHomeError() {
	const homeError = useHomeStore((store) => store.error)
	const nearByPositionError = useNearbyPositionStore((store) => store.error)
	const welcomeError = useWelcomeStore((store) => store.error)

	return homeError || nearByPositionError || welcomeError
}
