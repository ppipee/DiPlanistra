import { TOKEN_KEY } from 'core/api/constants'
import setLocalStorage from 'core/localStorage/setLocalStorage'

export default function setUserToken(token: string) {
	setLocalStorage(TOKEN_KEY, token)
}
