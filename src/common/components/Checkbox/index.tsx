import React, { ReactNode, InputHTMLAttributes } from 'react'

import CorrectIcon from 'common/components/icons/CorrectIcon'
import Position from 'common/components/Position'
import { white } from 'common/styles/colors'

import { HiddenCheckbox, Label, LabelText, CheckboxInput } from './styled'
import { getInputColorState } from './utils'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: ReactNode
	align?: string
	disabled?: boolean
	checked?: boolean
	value: string
}

const ICON_SIZE = 14

const Checkbox = ({ label, align = 'center', disabled, checked = false, ...rest }: CheckboxProps) => {
	const checkboxProps = {
		checked,
		disabled,
		...rest,
	}

	return (
		<Label $align={align} $disabled={disabled}>
			<HiddenCheckbox type="checkbox" {...checkboxProps} />
			<CheckboxInput $checked={checked}>
				{checked && (
					<Position $position="absolute" $center>
						<CorrectIcon size={ICON_SIZE} color={white} />
					</Position>
				)}
			</CheckboxInput>
			<LabelText $color={getInputColorState(disabled, checked)}>{label}</LabelText>
		</Label>
	)
}

export default Checkbox
