import React, { ReactNode, InputHTMLAttributes } from 'react'

import { HiddenRadio, Label, LabelText, RadioInput } from './styled'
import { getInputColorState } from './utils'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label: ReactNode
	align?: string
	disabled?: boolean
	checked?: boolean
	value: string | number
}

const Radio = ({ label, align = 'center', disabled, checked = false, ...rest }: RadioProps) => {
	const radioProps = {
		checked,
		disabled,
		...rest,
	}

	return (
		<Label $align={align} $disabled={disabled}>
			<HiddenRadio type="radio" {...radioProps} />
			<RadioInput $checked={checked} />
			<LabelText $color={getInputColorState(disabled, checked)}>{label}</LabelText>
		</Label>
	)
}

export default Radio
