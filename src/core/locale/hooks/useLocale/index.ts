import { useLocaleContext } from 'core/locale/context/LocaleContext'

export default function useLocale() {
  const localeContext = useLocaleContext()

  return localeContext.locale
}
