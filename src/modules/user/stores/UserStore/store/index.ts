import { action } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import setUserToken from 'core/api/utils/setUserToken'

import { login, register } from 'modules/user/api'
import { LoginDataTypes, RegisterDataTypes, User } from 'modules/user/types'

class LoginStore extends FetchStateStore {
	user: User

	@action.bound
	@actionLoading
	async login(loginData: LoginDataTypes) {
		const data = await login(loginData)

		if (!this.error) {
			this.setUser(data)
		}
	}

	@action.bound
	@actionLoading
	async register(registerData: RegisterDataTypes) {
		const data = await register(registerData)

		if (!this.error) {
			this.setUser(data)
		}
	}

	@action
	setUser({ user, token }: { user: User; token: string }) {
		this.user = user
		setUserToken(token)
	}
}

export default LoginStore
