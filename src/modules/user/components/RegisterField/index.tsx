import React, { forwardRef, Ref } from 'react'

import { InputFormProps } from 'common/components/form/InputForm'
import { gray } from 'common/styles/colors'

import InputField from '../InputField'

import { InputWrapper } from './styled'

const RegisterField = forwardRef((props: InputFormProps, ref: Ref<HTMLInputElement>) => {
	return (
		<InputWrapper>
			<InputField
				{...props}
				fieldStyle={{
					$borderColor: gray[700],
					$color: gray[700],
				}}
				$iconColor={gray[700]}
				ref={ref}
			/>
		</InputWrapper>
	)
})

export default RegisterField
