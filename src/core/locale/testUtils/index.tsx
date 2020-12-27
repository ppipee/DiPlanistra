import React, { ReactNode } from 'react'

import LocaleContext from '../context/LocaleContext'
import { Locale } from '../types'

interface WrapperProps {
	children: ReactNode
}

// Any because wrapper type @testing-library/react has invalid wrapper type
export function createI18nWrapper(locale: Locale): any {
	const setLocaleContextSpy = jest.fn()
	return ({ children }: WrapperProps) => (
		<LocaleContext.Provider value={{ locale, setLocaleContext: setLocaleContextSpy }}>
			{children}
		</LocaleContext.Provider>
	)
}
