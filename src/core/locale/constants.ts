import { Locale, LocaleType } from './types'

export const LOCALE_LIST: LocaleType[] = [Locale.th, Locale.en]

export const DEFAULT_LOCALE = Locale.th

export const DEFAULT_LOCALE_INDEX = LOCALE_LIST.indexOf(DEFAULT_LOCALE)

export const STORAGE_LOCALE_KEY = 'bcbk-2020.locale'
