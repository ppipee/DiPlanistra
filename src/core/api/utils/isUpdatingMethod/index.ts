import { RequestMethodType, UPDATING_METHODS } from 'core/api/constants'

function isUpdatingMethod(method: RequestMethodType) {
	return UPDATING_METHODS.includes(method)
}

export default isUpdatingMethod
