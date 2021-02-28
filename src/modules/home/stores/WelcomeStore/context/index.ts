import { createContext } from 'react'

import createUseStoreSelector from 'core/mobx/utils/createUseStoreSelector'

import WelcomeStore from 'modules/home/stores/WelcomeStore/store'

const WelcomeContextStore = createContext<WelcomeStore>(null)

export default WelcomeContextStore

export const useWelcomeStore = createUseStoreSelector(WelcomeContextStore)
