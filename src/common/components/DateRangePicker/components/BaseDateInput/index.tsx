import React from 'react'

import InputForm, { InputFormProps } from 'common/components/form/InputForm'
import CalendarIcon from 'common/components/icons/CalendarIcon'
import { gray } from 'common/styles/colors'

const BaseDateInput = (props: InputFormProps) => {
	return <InputForm readOnly $suffixIcon={CalendarIcon} color={gray[500]} {...props} />
}

export default BaseDateInput
