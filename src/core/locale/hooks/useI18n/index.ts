import { useCallback } from 'react'

import useLocale from 'core/locale/hooks/useLocale'
import translate from 'core/locale/translate'

export default function useI18n() {
  const locale = useLocale()

  const t = useCallback(
    (messages: string[], args?: Record<string, any>) =>
      translate(messages, locale, args),
    [locale]
  )

  return { t, locale }
}
