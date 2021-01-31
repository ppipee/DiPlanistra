import React, { useCallback, useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import EmailIcon from 'common/components/icons/EmailIcon'
import LockIcon from 'common/components/icons/LockIcon'
import UserIcon from 'common/components/icons/UserIcon'
import Text from 'common/components/Text'
import { red } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { USERNAME, PASSWORD, EMAIL } from 'modules/user/locale'
import { useUserStore } from 'modules/user/stores/UserStore/context'
import { RegisterDataTypes } from 'modules/user/types'

import RegisterButton from '../RegisterButton'
import RegisterField from '../RegisterField'

import { registerValidateSchema } from './schema'

const RegisterForm = () => {
	const I18n = useI18n()
	const history = useHistory()

	const { register, error } = useUserStore((store) => ({ register: store.register, error: store.error }))

	const { handleSubmit, register: ref, reset, errors, getValues, watch } = useForm<RegisterDataTypes>({
		resolver: yupResolver(registerValidateSchema),
	})
	const { email } = getValues()

	const submit = useCallback(
		async (data: RegisterDataTypes) => {
			await register(data)

			if (!error) {
				reset()
				history.push('/')
			}
		},
		[error, register, reset],
	)

	useEffect(() => {
		return () => {
			reset()
		}
	}, [])

	watch()

	return (
		<Flex $justifyContent="center" $responsive>
			<form onSubmit={handleSubmit(submit)}>
				<Gap $size={spaces(24)} $type="vertical">
					<Gap $size={spaces(16)} $type="vertical">
						{email && (
							<RegisterField
								placeholder={I18n.t(USERNAME)}
								$prefixIcon={UserIcon}
								name="name"
								ref={ref}
								errMsg={errors.name?.message}
								variant={errors.name ? 'error' : 'default'}
							/>
						)}
						<RegisterField
							placeholder={I18n.t(EMAIL)}
							$prefixIcon={EmailIcon}
							name="email"
							ref={ref}
							errMsg={errors.email?.message}
							variant={errors.email ? 'error' : 'default'}
						/>
						<RegisterField
							placeholder={I18n.t(PASSWORD)}
							$prefixIcon={LockIcon}
							name="password"
							type="password"
							ref={ref}
							errMsg={errors.password?.message}
							variant={errors.password ? 'error' : 'default'}
						/>
					</Gap>
					{error && (
						<Text color={red[500]} size={fontSizes(12)}>
							{error.message}
						</Text>
					)}
					<RegisterButton type="submit" />
				</Gap>
			</form>
		</Flex>
	)
}

export default RegisterForm
