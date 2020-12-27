import { TOKEN_KEY } from 'core/api/constants'
import getLocalStorage from 'core/localStorage/getLocalStorage'

export default function getUserToken() {
	const headerKey = 'Authorization'

	const token = getLocalStorage(TOKEN_KEY)

	return { headerKey, token }
}
