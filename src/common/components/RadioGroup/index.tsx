import React, { ChangeEvent, useCallback } from 'react'

import { isEqual } from 'lodash'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import { GapTypeProps } from '../Gap/types'

import { RadioGroupProps } from './types'

// all of value must be string or number only!

const RadioGroup = ({ type = GapTypeProps.Vertical, value, children, onChange }: RadioGroupProps) => {
	const checkActiveState = useCallback((radioValue?: string | number) => isEqual(value, radioValue), [value])

	const selectRadio = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			let value: string | number = event.target.value

			if (!isNaN(Number(value))) {
				value = Number(value)
			}

			onChange(value)
		},
		[onChange],
	)

	return (
		<Gap $type={type} $size={spaces(4)}>
			{children.map((option) => ({
				...option,
				props: {
					...option.props,
					checked: checkActiveState(option.props.value),
					onChange: selectRadio,
				},
			}))}
		</Gap>
	)
}

export default RadioGroup
