import FetchStateStore from 'core/api/stores/FetchStateStore'
import { MountParams } from 'core/mobx/types'

class PlaceStore extends FetchStateStore {
	onInit(stores: any) {
		// console.log('place init', stores)
	}

	onMount({ params, query }: MountParams) {
		// console.log('place mount', params, query)
	}

	onUnMount() {
		// console.log('place unmount')
	}
}

export default PlaceStore
