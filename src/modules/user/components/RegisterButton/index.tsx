import React, { ButtonHTMLAttributes } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { green, main } from 'common/styles/colors'

import { REGISTER } from 'modules/user/locale'

const RegisterButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const I18n = useI18n()

	return (
		<Button $responsive $color={main[500]} $secondaryColor={green[500]} $border="curve" {...props}>
			{I18n.t(REGISTER)}
		</Button>
	)
}

export default RegisterButton
