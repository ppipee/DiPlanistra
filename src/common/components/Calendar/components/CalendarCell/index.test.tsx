import React from 'react'

import 'jest-styled-components'
import { render, fireEvent } from '@testing-library/react'

import { CalendarCellVariant } from 'common/components//Calendar/types'

import * as CalendarCellType from '.'

describe('Test CalendarCell', () => {
	let DEFAULT_DATE: Date
	const useCellStyleSpy = jest.fn()
	const useDateHoverSpy = jest.fn()
	const useSelectDateSpy = jest.fn()
	const useCalendarContextSpy = jest.fn()
	const selectDateSpy = jest.fn()
	const mouseEnterSpy = jest.fn()
	const mouseLeaveSpy = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCellStyle', () => useCellStyleSpy)
	jest.doMock('common/components/Calendar/hooks/useDateHover', () => useDateHoverSpy)
	jest.doMock('common/components/Calendar/hooks/useSelectDate', () => useSelectDateSpy)
	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)

	const { default: CalendarCell } = require('.') as typeof CalendarCellType

	afterEach(() => {
		jest.resetAllMocks()
	})

	beforeEach(() => {
		DEFAULT_DATE = new Date(2020, 11, 1)
		useCellStyleSpy.mockReturnValue({
			$inBetween: false,
			$selected: false,
			$variant: 'currentMonth' as CalendarCellVariant,
			$isFirstCell: false,
			$isLastCell: false,
		})
		useSelectDateSpy.mockReturnValue(selectDateSpy)
		useDateHoverSpy.mockReturnValue({
			mouseEnter: mouseEnterSpy,
			mouseLeave: mouseLeaveSpy,
		})
		useCalendarContextSpy.mockReturnValue({
			isDateSelectable: () => true,
		})
	})

	it('should render CalendarCell with number value', () => {
		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)

		expect(useCellStyleSpy).toBeCalledTimes(1)
		expect(useSelectDateSpy).toBeCalledTimes(1)
		expect(useDateHoverSpy).toBeCalledTimes(1)
		expect(useCalendarContextSpy).toBeCalledTimes(1)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with null value', () => {
		const { container } = render(<CalendarCell date={null} index={1} />)

		expect(useCellStyleSpy).toBeCalledTimes(1)
		expect(useSelectDateSpy).toBeCalledTimes(1)
		expect(useDateHoverSpy).toBeCalledTimes(1)
		expect(useCalendarContextSpy).toBeCalledTimes(1)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with hover and inBetween styled', () => {
		useCellStyleSpy.mockReturnValue({
			$inBetween: true,
			$selected: false,
			$variant: 'currentMonth' as CalendarCellVariant,
			$isFirstCell: false,
			$isLastCell: false,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with hover styled for first cell on row', () => {
		useCellStyleSpy.mockReturnValue({
			$inBetween: true,
			$selected: false,
			$variant: 'currentMonth' as CalendarCellVariant,
			$isFirstCell: true,
			$isLastCell: false,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={0} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with hover styled for last cell on row', () => {
		useCellStyleSpy.mockReturnValue({
			$inBetween: true,
			$selected: false,
			$variant: 'currentMonth' as CalendarCellVariant,
			$isFirstCell: false,
			$isLastCell: true,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with currentMonth variant', () => {
		useCellStyleSpy.mockReturnValue({
			$variant: 'currentMonth' as CalendarCellVariant,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with otherMonth variant', () => {
		useCellStyleSpy.mockReturnValue({
			$variant: 'otherMonth' as CalendarCellVariant,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarCell with currentDate date variant', () => {
		useCellStyleSpy.mockReturnValue({
			$variant: 'currentDate' as CalendarCellVariant,
		})

		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should perform onClick correctly', () => {
		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)

		fireEvent.click(container.firstChild.firstChild)

		expect(selectDateSpy).toBeCalledTimes(1)
		expect(selectDateSpy).toBeCalledWith(DEFAULT_DATE)
	})

	it('should perform mouseEnter correctly', () => {
		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)

		fireEvent.mouseEnter(container.firstChild.firstChild)

		expect(mouseEnterSpy).toBeCalledTimes(1)
		expect(mouseEnterSpy).toBeCalledWith(DEFAULT_DATE)
	})

	it('should perform mouseLeave correctly', () => {
		const { container } = render(<CalendarCell date={DEFAULT_DATE} index={1} />)

		fireEvent.mouseLeave(container.firstChild.firstChild)

		expect(mouseLeaveSpy).toBeCalledTimes(1)
	})
})
