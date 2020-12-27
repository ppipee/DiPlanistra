import React from 'react'

import { renderHook } from '@testing-library/react-hooks'

import useCalendarContext from '.'

describe('useCalendarContext', () => {
	it('should perform useCalendarContext correctly', () => {
		const useContextSpy = jest.spyOn(React, 'useContext')

		renderHook(() => useCalendarContext())

		expect(useContextSpy).toBeCalledTimes(1)
	})
})
