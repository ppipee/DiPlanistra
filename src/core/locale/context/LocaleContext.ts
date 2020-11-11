import { createContext, useContext } from 'react'

import { LocaleType } from '../types'

export interface LocaleContextProps {
	locale: LocaleType
	setLocaleContext: (locale: LocaleType) => void
}

const LocaleContext = createContext<LocaleContextProps>(null)

export default LocaleContext

export const useLocaleContext = () => useContext(LocaleContext)
