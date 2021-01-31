import UserContextStore from './context'
import UserStore from './store'

const UserStoreConfig = {
	store: UserStore,
	StoreContext: UserContextStore,
}

export default UserStoreConfig
