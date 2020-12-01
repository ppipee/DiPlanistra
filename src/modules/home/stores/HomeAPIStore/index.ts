import HomeApiContextStore from './context'
import HomeApiStore from './store'

const HomeApiStoreConfig = {
	class: HomeApiStore,
	StoreContext: HomeApiContextStore,
}

export default HomeApiStoreConfig
