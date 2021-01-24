import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

import { LOGIN_ROUTE, REGISTER_ROUTE } from './paths'

const userRoute = [
	{
		path: LOGIN_ROUTE,
		exact: true,
		component: LoginPage,
	},
	{
		path: REGISTER_ROUTE,
		exact: true,
		component: RegisterPage,
	},
]

export default userRoute
