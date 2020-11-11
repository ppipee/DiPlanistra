import { RequestMethod } from 'core/api/constants'
import MissingRequestBodyError from 'core/api/errors/MissingRequestBodyError'
import isUpdatingMethod from 'core/api/utils/isUpdatingMethod'

function verifyUpdatingRequirement<Body extends object>(method: RequestMethod, body?: Body) {
	if (isUpdatingMethod(method)) {
		if (!body) {
			throw new MissingRequestBodyError()
		}
		return true
	}
	return false
}

export default verifyUpdatingRequirement
