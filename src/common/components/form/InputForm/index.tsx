import React, { forwardRef, Ref } from 'react'

import InputField from 'common/components/field/InputField'
import { InputFieldProps } from 'common/components/field/InputField/types'
import FormTemplate from 'common/components/form/FormTemplate'

import { FormTemplateProps } from '../FormTemplate/types'

export type InputFormProps = FormTemplateProps & InputFieldProps

const InputForm = forwardRef(({ errMsg, label, ...props }: InputFormProps, ref: Ref<HTMLInputElement>) => (
	<FormTemplate variant={props.variant} errMsg={errMsg} label={label}>
		<InputField {...props} ref={ref} />
	</FormTemplate>
))

export default InputForm
