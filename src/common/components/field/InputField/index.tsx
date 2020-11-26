import React from 'react'

import { InputWrapper, PrefixWrapper, SuffixWrapper, InputFieldStyles } from './styled'
import { InputFieldProps } from './types'

const ICON_SIZE = 20

const InputField = ({ $width, $prefixClickable, $suffixClickable, $iconColor, ...props }: InputFieldProps) => {
	const PrefixIcon = props.$prefixIcon
	const SuffixIcon = props.$suffixIcon

	return (
		<InputWrapper $width={$width}>
			{(SuffixIcon || props.$suffix) && (
				<SuffixWrapper $clickable={!!$suffixClickable}>
					{SuffixIcon && <SuffixIcon color={$iconColor} size={ICON_SIZE} />}
					{props.$suffix}
				</SuffixWrapper>
			)}
			<InputFieldStyles {...props} />
			{(PrefixIcon || props.$prefix) && (
				<PrefixWrapper $clickable={!!$prefixClickable}>
					{PrefixIcon && <PrefixIcon color={$iconColor} size={ICON_SIZE} />}
					{props.$prefix}
				</PrefixWrapper>
			)}
		</InputWrapper>
	)
}

export default InputField
