import HomeContextStore from './context'
import HomeStore from './store'

const HomeStoreConfig = {
	class: HomeStore,
	StoreContext: HomeContextStore,
}

export default HomeStoreConfig
