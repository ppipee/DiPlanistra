import React from 'react'

import { render } from '@testing-library/react'

import useI18n from '../hooks/useI18n'
import { Locale } from '../types'

import { createI18nWrapper } from '.'

describe('createI18nWrapper', () => {
	const DICT = ['ภาษาไทย', 'English']
	const MockComponent = () => {
		const I18n = useI18n()
		return <h1>{I18n.t(DICT)}</h1>
	}

	function expectRenderMatchResult(locale: Locale, result: string) {
		const wrapper = createI18nWrapper(locale)
		const { getByText } = render(<MockComponent />, {
			wrapper,
		})

		expect(getByText(result)).toBeDefined()
	}

	it('should translate correctly', () => {
		expectRenderMatchResult(Locale.th, 'ภาษาไทย')
		expectRenderMatchResult(Locale.en, 'English')
	})
})
