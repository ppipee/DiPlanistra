import React from 'react'

import { useForm } from 'react-hook-form'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import LockIcon from 'common/components/icons/LockIcon'
import UserIcon from 'common/components/icons/UserIcon'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import { PASSWORD, USERNAME } from 'modules/user/locale'

import InputField from '../InputField'
import LoginButton from '../LoginButton'

const LoginForm = () => {
	const I18n = useI18n()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { handleSubmit, register, reset } = useForm()

	return (
		<Gap $size={spaces(24)} $type="vertical">
			<Gap $size={spaces(16)} $type="vertical">
				<InputField placeholder={I18n.t(USERNAME)} $prefixIcon={UserIcon} $iconColor={white} />
				<InputField placeholder={I18n.t(PASSWORD)} $prefixIcon={LockIcon} $iconColor={white} />
			</Gap>
			<LoginButton />
		</Gap>
	)
}

export default LoginForm
