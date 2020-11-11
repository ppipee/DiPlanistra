import { STORAGE_LOCALE_KEY } from 'core/locale/constants'
import { LocaleType } from 'core/locale/types'
import setLocalStorage from 'core/localStorage/setLocalStorage'

export default function setLocaleStorage(locale: LocaleType) {
  setLocalStorage(STORAGE_LOCALE_KEY, locale)
}
