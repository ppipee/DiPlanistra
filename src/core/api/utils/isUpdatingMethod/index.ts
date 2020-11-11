import { RequestMethod, UPDATING_METHODS } from 'core/api/constants'

function isUpdatingMethod(method: RequestMethod) {
	return UPDATING_METHODS.includes(method)
}

export default isUpdatingMethod
