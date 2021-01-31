import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { COLLAPSE_ANIMATION_VARIANT, FadeKey } from 'common/animation/fade'
import { FieldProps } from 'common/components/field/FieldStyle/types'

import { ErrorText, FieldContainer, LabelText } from './styled'
import { FormTemplateProps } from './types'

export interface Props extends FormTemplateProps, FieldProps {
	children: ReactNode
	className?: string
}

const FormTemplate = ({ children, className, errMsg = '', label = '', variant = 'default' }: Props) => (
	<FieldContainer className={className}>
		{label && <LabelText>{label}</LabelText>}
		{children}
		{!!errMsg && variant === 'error' && (
			<motion.div
				initial={FadeKey.Close}
				exit={FadeKey.Close}
				animate={FadeKey.Open}
				variants={COLLAPSE_ANIMATION_VARIANT}
				transition={{
					default: { duration: 0.1 },
				}}
			>
				<ErrorText>{errMsg}</ErrorText>
			</motion.div>
		)}
	</FieldContainer>
)

export default FormTemplate
