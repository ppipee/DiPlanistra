import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import qs from 'qs'

import { DEFAULT_LOCALE } from 'core/locale/constants'
import { useLocaleContext } from 'core/locale/context/LocaleContext'
import { LocaleType } from 'core/locale/types'
import setLocaleStorage from 'core/locale/utils/setLocaleStorage'

export default function useSetLocale() {
  const history = useHistory()
  const { setLocaleContext } = useLocaleContext()

  const setLocale = useCallback(
    (locale: LocaleType = DEFAULT_LOCALE) => {
      const { origin, pathname, search } = window.location
      const query = qs.parse(search.replace('?', ''))

      query.locale = locale
      history.push(`${origin}${pathname}`, { query: qs.stringify(query) })

      setLocaleStorage(locale)
      setLocaleContext(locale)
    },
    [history, setLocaleContext]
  )

  return setLocale
}
