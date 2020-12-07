import React from 'react'

import { InputWrapper, PrefixWrapper, SuffixWrapper, InputFieldStyles } from './styled'
import { InputFieldProps } from './types'

const ICON_SIZE = 20

const InputField = ({ $width, $onPrefixClick, $onSuffixClick, $iconColor, ...props }: InputFieldProps) => {
	const PrefixIcon = props.$prefixIcon
	const SuffixIcon = props.$suffixIcon

	return (
		<InputWrapper $width={$width}>
			{(SuffixIcon || props.$suffix) && (
				<SuffixWrapper $clickable={!!$onSuffixClick} onClick={$onSuffixClick}>
					{SuffixIcon && <SuffixIcon color={$iconColor} size={ICON_SIZE} />}
					{props.$suffix}
				</SuffixWrapper>
			)}
			<InputFieldStyles {...props} />
			{(PrefixIcon || props.$prefix) && (
				<PrefixWrapper $clickable={!!$onPrefixClick} onClick={$onPrefixClick}>
					{PrefixIcon && <PrefixIcon color={$iconColor} size={ICON_SIZE} />}
					{props.$prefix}
				</PrefixWrapper>
			)}
		</InputWrapper>
	)
}

export default InputField
