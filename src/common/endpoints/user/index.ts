import { ReactText } from 'react'

const userEndpoint = {
	user: (userId: ReactText) => `/users/${userId}`,
	users: () => '/users',

	login: () => '/users/login',
	register: () => '/users/register',
}

export default userEndpoint
