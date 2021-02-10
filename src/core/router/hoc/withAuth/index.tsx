import React from 'react'
import { ComponentType } from 'react'

import { useHistory } from 'react-router-dom'

import getUserToken from 'core/api/utils/getUserToken'

import { LOGIN_ROUTE } from 'modules/user/routes/paths'

export default function withAuth<Props>(Component: ComponentType) {
	const { token } = getUserToken()

	const WrapperComponent = (props: Props) => {
		const history = useHistory()

		if (!token) {
			history.push(LOGIN_ROUTE)
		}

		return <Component {...(props || {})} />
	}

	return WrapperComponent
}
