import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { DEFAULT_LOCALE } from 'core/locale/constants'
import { useLocaleContext } from 'core/locale/context/LocaleContext'
import { LocaleType } from 'core/locale/types'
import setLocaleStorage from 'core/locale/utils/setLocaleStorage'

import usePassQuery from 'common/hooks/usePassQuery'

export default function useSetLocale() {
	const history = useHistory()
	const passQuery = usePassQuery()
	const { setLocaleContext } = useLocaleContext()

	const setLocale = useCallback(
		(locale: LocaleType = DEFAULT_LOCALE) => {
			const location = history.location.pathname
			passQuery({ params: { locale }, targetUrl: location })

			setLocaleStorage(locale)
			setLocaleContext(locale)
		},
		[history, setLocaleContext],
	)

	return setLocale
}
