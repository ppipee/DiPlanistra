import React, { ReactNode, useState, useEffect } from 'react'

import { DEFAULT_LOCALE } from 'core/locale/constants'
import LocaleContext from 'core/locale/context/LocaleContext'
import { LocaleType } from 'core/locale/types'
import setLocaleStorage from 'core/locale/utils/setLocaleStorage'
import useQuery from 'core/router/hooks/useQuery'

type Props = {
  locale?: LocaleType
  children: ReactNode
}

const LocaleProvider = ({
  locale: routerLocale = DEFAULT_LOCALE,
  children,
}: Props) => {
  const [locale, setLocale] = useState(routerLocale)
  const { locale: localeQuery } = useQuery<LocaleType>()

  useEffect(() => {
    if (!localeQuery) return

    setLocale(localeQuery)
    setLocaleStorage(localeQuery)
  }, [localeQuery])

  return (
    <LocaleContext.Provider value={{ locale, setLocaleContext: setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
