import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import { createI18nWrapper } from 'core/locale/testUtils'
import { Locale } from 'core/locale/types'

import * as CardControllerType from '.'

describe('Test CardController', () => {
	const MOCK_DATE = {
		startDate: new Date(2020, 5, 1),
		endDate: new Date(2020, 5, 5),
	}
	const MOCK_CONTROLLER_INDEX = 1

	const selectDateRangeSpy = jest.fn()
	const useDateRangeContextSpy = jest.fn()
	const selectControllerSpy = jest.fn()
	const setDateSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/context', () => ({
		useDateRangeContext: useDateRangeContextSpy,
	}))
	jest.doMock('common/components/DateRangePicker/utils/selectDateRange', () => selectDateRangeSpy)

	const { default: CardController } = require('.') as typeof CardControllerType

	beforeEach(() => {
		selectDateRangeSpy.mockReturnValue({})
		useDateRangeContextSpy.mockReturnValue({
			date: { ...MOCK_DATE },
			setDate: setDateSpy,
			selectController: selectControllerSpy,
		})
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render CardController with TH text correctly', () => {
		const { getByText } = render(
			<CardController name={['เมื่อวานนี้', 'Yesterday']} type="month" index={MOCK_CONTROLLER_INDEX} />,
			{
				wrapper: createI18nWrapper(Locale.th),
			},
		)

		expect(getByText('เมื่อวานนี้')).toBeDefined()
	})

	it('should render CardController with EN text correctly', () => {
		const { getByText } = render(
			<CardController name={['เมื่อวานนี้', 'Yesterday']} type="month" index={MOCK_CONTROLLER_INDEX} />,
			{
				wrapper: createI18nWrapper(Locale.en),
			},
		)

		expect(getByText('Yesterday')).toBeDefined()
	})

	it('should perform selectRange correctly', () => {
		selectDateRangeSpy.mockReturnValue({
			startDate: new Date(2020, 5, 2),
			endDate: new Date(2020, 5, 5),
		})

		const { container } = render(
			<CardController name={['เมื่อวานนี้', 'Yesterday']} type="month" index={MOCK_CONTROLLER_INDEX} />,
			{
				wrapper: createI18nWrapper(Locale.th),
			},
		)

		fireEvent.click(container.firstChild)

		expect(setDateSpy).toBeCalledTimes(1)
		expect(setDateSpy).toBeCalledWith({
			startDate: new Date(2020, 5, 2),
			endDate: new Date(2020, 5, 5),
		})

		expect(selectControllerSpy).toBeCalledTimes(1)
	})

	it('should render CardController with active style', () => {
		selectDateRangeSpy.mockReturnValue({ ...MOCK_DATE })

		const { container } = render(
			<CardController name={['เมื่อวานนี้', 'Yesterday']} type="month" index={MOCK_CONTROLLER_INDEX} />,
			{
				wrapper: createI18nWrapper(Locale.th),
			},
		)

		expect(selectControllerSpy).toBeCalledTimes(1)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CardController without active style', () => {
		selectDateRangeSpy.mockReturnValue({})

		const { container } = render(
			<CardController name={['เมื่อวานนี้', 'Yesterday']} type="month" index={MOCK_CONTROLLER_INDEX} />,
			{
				wrapper: createI18nWrapper(Locale.th),
			},
		)

		expect(selectControllerSpy).not.toBeCalled()
		expect(container.firstChild).toMatchSnapshot()
	})
})
