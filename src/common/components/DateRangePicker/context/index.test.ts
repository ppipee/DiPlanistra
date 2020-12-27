import React from 'react'

import { renderHook } from '@testing-library/react-hooks'

import { useDateRangeContext } from '.'

describe('useDateRangeContext', () => {
	it('should perform useDateRangeContext correctly', () => {
		const useContextSpy = jest.spyOn(React, 'useContext')

		renderHook(() => useDateRangeContext())

		expect(useContextSpy).toBeCalledTimes(1)
	})
})
