import { DEFAULT_LOCALE, STORAGE_LOCALE_KEY } from 'core/locale/constants'
import { LocaleType } from 'core/locale/types'
import getLocalStorage from 'core/localStorage/getLocalStorage'

export default function getCurrentLocale() {
  const locale: LocaleType =
    getLocalStorage(STORAGE_LOCALE_KEY) || DEFAULT_LOCALE

  return locale
}
