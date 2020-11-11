import qs from 'qs'

function serializeParams<Params extends object>(params: Params) {
	return qs.stringify(params, { arrayFormat: 'repeat' })
}

export default serializeParams
