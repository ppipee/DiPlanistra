import React from 'react'

import InputField from 'common/components/field/InputField'
import { InputFieldProps } from 'common/components/field/InputField/types'
import FormTemplate from 'common/components/form/FormTemplate'

import { FormTemplateProps } from '../FormTemplate/types'

export type InputFormProps = FormTemplateProps & InputFieldProps

const InputForm = ({ errMsg, label, ...props }: InputFormProps) => (
	<FormTemplate variant={props.variant} errMsg={errMsg} label={label}>
		<InputField {...props} />
	</FormTemplate>
)

export default InputForm
