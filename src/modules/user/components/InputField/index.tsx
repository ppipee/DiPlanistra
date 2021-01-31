import React, { forwardRef, Ref } from 'react'

import InputForm, { InputFormProps } from 'common/components/form/InputForm'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'

const INPUT_WIDTH = '280px'

const InputField = forwardRef((props: InputFormProps, ref: Ref<HTMLInputElement>) => {
	return (
		<InputForm
			{...props}
			borderVariant="outlined"
			fieldStyle={{
				$background: 'transparent',
				$borderColor: white,
				$borderRadius: Borders.Curve,
				$color: white,
				...props.fieldStyle,
			}}
			$width={INPUT_WIDTH}
			ref={ref}
		/>
	)
})

export default InputField
