import { action, observable, runInAction } from 'mobx'

import actionLoading from 'core/api/annotations/actionLoading'
import FetchStateStore from 'core/api/stores/FetchStateStore'
import getUserToken from 'core/api/utils/getUserToken'
import setUserToken from 'core/api/utils/setUserToken'

import { getMe, login, register } from 'modules/user/api'
import { LoginDataTypes, RegisterDataTypes, User } from 'modules/user/types'

class LoginStore extends FetchStateStore {
	@observable
	user: User

	onMount() {
		const { token } = getUserToken()

		if (token) {
			this.getMe()
		}
	}

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

	@action.bound
	@actionLoading
	async getMe() {
		const user = await getMe()

		if (!this.error) {
			runInAction(() => {
				this.user = user
			})
		}
	}
}

export default LoginStore
