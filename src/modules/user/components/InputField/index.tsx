import React from 'react'

import InputForm, { InputFormProps } from 'common/components/form/InputForm'
import { white } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'

const INPUT_WIDTH = '280px'

const InputField = (props: InputFormProps) => {
	return (
		<InputForm
			{...props}
			borderVariant="outlined"
			fieldStyle={{ $background: 'transparent', $borderColor: white, $borderRadius: Borders.Curve, $color: white }}
			$width={INPUT_WIDTH}
		/>
	)
}

export default InputField
