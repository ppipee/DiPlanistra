import React from 'react'

import TextAreaField from 'common/components/field/TextAreaField'
import { TextAreaFieldProps } from 'common/components/field/TextAreaField/types'
import FormTemplate from 'common/components/form/FormTemplate'
import { FormTemplateProps } from 'common/components/form/FormTemplate/types'

export type TextAreaFormProps = TextAreaFieldProps & FormTemplateProps

const TextAreaForm = ({ errMsg, label, ...props }: TextAreaFormProps) => (
	<FormTemplate variant={props.variant} errMsg={errMsg} label={label}>
		<TextAreaField as="textarea" {...props} />
	</FormTemplate>
)

export default TextAreaForm
