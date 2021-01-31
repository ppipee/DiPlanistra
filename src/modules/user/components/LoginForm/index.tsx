import React, { useCallback, useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import EmailIcon from 'common/components/icons/EmailIcon'
import LockIcon from 'common/components/icons/LockIcon'
import Text from 'common/components/Text'
import { red, white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { PASSWORD, EMAIL } from 'modules/user/locale'
import { useUserStore } from 'modules/user/stores/UserStore/context'
import { LoginDataTypes } from 'modules/user/types'

import InputField from '../InputField'
import LoginButton from '../LoginButton'

import { loginValidateSchema } from './schema'

const LoginForm = () => {
	const I18n = useI18n()
	const history = useHistory()

	const { handleSubmit, register, reset, errors } = useForm<LoginDataTypes>({
		resolver: yupResolver(loginValidateSchema),
	})
	const { login, error } = useUserStore((store) => ({ login: store.login, error: store.error }))

	const submit = useCallback(
		async (data: LoginDataTypes) => {
			await login(data)

			if (!error) {
				reset()
				history.push('/')
			}
		},
		[error, login, reset],
	)

	useEffect(() => {
		return () => {
			reset()
		}
	}, [])

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Gap $size={spaces(24)} $type="vertical">
				<Gap $size={spaces(16)} $type="vertical">
					<InputField
						placeholder={I18n.t(EMAIL)}
						$prefixIcon={EmailIcon}
						$iconColor={white}
						name="email"
						ref={register}
						errMsg={errors.email?.message}
						variant={errors.email ? 'error' : 'default'}
					/>
					<InputField
						placeholder={I18n.t(PASSWORD)}
						$prefixIcon={LockIcon}
						$iconColor={white}
						name="password"
						type="password"
						ref={register}
						errMsg={errors.password?.message}
						variant={errors.password ? 'error' : 'default'}
					/>
				</Gap>
				{error && (
					<Text color={red[500]} size={fontSizes(12)}>
						{error.message}
					</Text>
				)}
				<LoginButton type="submit" />
			</Gap>
		</form>
	)
}

export default LoginForm
