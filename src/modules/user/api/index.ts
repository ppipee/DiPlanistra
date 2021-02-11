import apiClient from 'core/api'

import userEndpoint from 'common/endpoints/user'

import { LoginDataTypes, RegisterDataTypes, User } from '../types'

export const login = (loginData: LoginDataTypes) =>
	apiClient.fetch<{ user: User; token: string }>({
		method: 'post',
		path: userEndpoint.login(),
		params: loginData,
	})

export const register = (registerData: RegisterDataTypes) =>
	apiClient.fetch<{ user: User; token: string }>({
		method: 'post',
		path: userEndpoint.register(),
		body: registerData,
	})

export const getMe = () =>
	apiClient.fetch<User>({
		method: 'get',
		path: userEndpoint.me(),
	})
