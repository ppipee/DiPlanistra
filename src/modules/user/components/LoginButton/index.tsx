import React, { ButtonHTMLAttributes } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { main } from 'common/styles/colors'

import { LOGIN } from 'modules/user/locale'

const LoginButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const I18n = useI18n()

	return (
		<Button $variant="text" $responsive $color={main[500]} $border="curve" {...props}>
			{I18n.t(LOGIN)}
		</Button>
	)
}

export default LoginButton
