import React from 'react'

import TextAreaField from 'components/field/TextAreaField'
import { TextAreaFieldProps } from 'components/field/TextAreaField/types'
import FormTemplate from 'components/form/FormTemplate'
import { FormTemplateProps } from 'components/form/FormTemplate/types'

export type TextAreaFormProps = TextAreaFieldProps & FormTemplateProps

const TextAreaForm = ({ errMsg, label, ...props }: TextAreaFormProps) => (
	<FormTemplate variant={props.variant} errMsg={errMsg} label={label}>
		<TextAreaField as="textarea" {...props} />
	</FormTemplate>
)

export default TextAreaForm
