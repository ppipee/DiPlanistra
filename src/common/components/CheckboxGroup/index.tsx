import React, { ChangeEvent, useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Checkbox from 'common/components/Checkbox'
import Gap from 'common/components/Gap'
import { GapTypeProps } from 'common/components/Gap/types'
import { ALL_VALUE } from 'common/constants/selector'
import { LOCALE_ALL } from 'common/locale'
import spaces from 'common/styles/mixins/spaces'

import { SubGroupContainer } from './styled'
import { CheckboxGroupProps } from './types'

const CheckboxGroup = ({
	type = GapTypeProps.Vertical,
	values,
	children,
	onChange,
	withAllSelector,
	allValue = ALL_VALUE,
	label,
}: CheckboxGroupProps) => {
	const radioValues = children.length > 0 ? children.map((option) => option.props.value) : [allValue]

	const I18n = useI18n()
	const checkActiveState = useCallback(
		(checkboxValue?: string) => values.includes(checkboxValue) && radioValues.length !== values.length,
		[values],
	)

	const selectRadio = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value

			onChange(value, radioValues)
		},
		[onChange, children],
	)

	return (
		<Gap $type={type} $size={spaces(4)}>
			{withAllSelector && (
				<Checkbox
					checked={checkActiveState(allValue) || (radioValues.length !== 0 && radioValues.length === values.length)}
					onChange={selectRadio}
					label={label || I18n.t(LOCALE_ALL)}
					value={allValue}
				/>
			)}
			<SubGroupContainer $type={type} $size={spaces(4)} $withHeader={withAllSelector}>
				{children.map((option) => ({
					...option,
					props: {
						...option.props,
						checked: checkActiveState(option.props.value),
						onChange: selectRadio,
					},
				}))}
			</SubGroupContainer>
		</Gap>
	)
}

export default CheckboxGroup
