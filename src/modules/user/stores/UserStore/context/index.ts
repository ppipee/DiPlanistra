import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import UserStore from 'modules/user/stores/UserStore/store'

const UserContextStore = createContext<UserStore>(null)

export default UserContextStore

export const useUserStore = createUseStoreSelector(UserContextStore)
