import React from 'react'

import { InputWrapper, IconWrapper, InputFieldStyles } from './styled'
import { InputFieldProps } from './types'

const ICON_SIZE = 20

const InputField = ({ $width, $onIconClick, ...props }: InputFieldProps) => {
	const Icon = props.$icon

	return (
		<InputWrapper $width={$width}>
			<InputFieldStyles {...props} />
			{Icon && (
				<IconWrapper $clickable={!!$onIconClick}>
					<Icon size={ICON_SIZE} onClick={$onIconClick} />
				</IconWrapper>
			)}
		</InputWrapper>
	)
}

export default InputField
