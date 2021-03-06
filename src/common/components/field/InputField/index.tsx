import React, { forwardRef, Ref } from 'react'

import { InputWrapper, PrefixWrapper, SuffixWrapper, InputFieldStyles } from './styled'
import { InputFieldProps } from './types'

const ICON_SIZE = 20

const InputField = forwardRef(
	({ $width, $onPrefixClick, $onSuffixClick, $iconColor, ...props }: InputFieldProps, ref: Ref<HTMLInputElement>) => {
		const PrefixIcon = props.$prefixIcon
		const SuffixIcon = props.$suffixIcon

		return (
			<InputWrapper $width={$width}>
				{(PrefixIcon || props.$prefix) && (
					<PrefixWrapper $clickable={!!$onPrefixClick} onClick={$onPrefixClick}>
						{PrefixIcon && <PrefixIcon color={$iconColor} size={ICON_SIZE} />}
						{props.$prefix}
					</PrefixWrapper>
				)}
				<InputFieldStyles {...props} ref={ref} />
				{(SuffixIcon || props.$suffix) && (
					<SuffixWrapper $clickable={!!$onSuffixClick} onClick={$onSuffixClick}>
						{SuffixIcon && <SuffixIcon color={$iconColor} size={ICON_SIZE} />}
						{props.$suffix}
					</SuffixWrapper>
				)}
			</InputWrapper>
		)
	},
)

export default InputField
