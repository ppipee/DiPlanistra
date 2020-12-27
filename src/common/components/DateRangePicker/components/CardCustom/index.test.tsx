import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import { createI18nWrapper } from 'core/locale/testUtils'
import { Locale } from 'core/locale/types'

import { PICKER_CUSTOM_INDEX } from 'common/components/DateRangePicker/constants'

import * as CardCustomType from '.'

describe('Test CardCustom', () => {
	const useDateRangeContextSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/context', () => ({
		useDateRangeContext: useDateRangeContextSpy,
	}))

	const { default: CardCustom } = require('.') as typeof CardCustomType

	afterEach(() => {
		jest.resetAllMocks()
	})

	beforeEach(() => {
		useDateRangeContextSpy.mockReturnValue({
			date: {},
			isSelected: PICKER_CUSTOM_INDEX,
		})
	})

	it('should render CardCustom with TH text correctly', () => {
		const { getByText } = render(<CardCustom />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		expect(getByText('กำหนดเอง')).toBeDefined()
	})

	it('should render CardCustom with EN text correctly', () => {
		const { getByText } = render(<CardCustom />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(getByText('Custom')).toBeDefined()
	})

	it('should render with active styled', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: {
				startDate: new Date(2020, 5, 1),
			},
			isSelected: PICKER_CUSTOM_INDEX,
		})

		const { container } = render(<CardCustom />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render without active styled', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: {
				startDate: new Date(2020, 5, 1),
			},
			isSelected: PICKER_CUSTOM_INDEX,
		})

		const { container } = render(<CardCustom />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(container.firstChild).toMatchSnapshot()
	})
})
