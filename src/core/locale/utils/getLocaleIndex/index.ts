import { LOCALE_LIST, DEFAULT_LOCALE_INDEX } from 'core/locale/constants'
import { LocaleType } from 'core/locale/types'

export default function getLocaleIndex(locale: LocaleType) {
  return LOCALE_LIST.includes(locale)
    ? LOCALE_LIST.indexOf(locale)
    : DEFAULT_LOCALE_INDEX
}
