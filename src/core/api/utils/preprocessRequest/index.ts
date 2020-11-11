import { AxiosRequestConfig } from 'axios'

import { RequestType } from 'core/api/constants'
import preprocessFormRequest from 'core/api/utils/preprocessFormRequest'
import preprocessMultipartFormDataRequest from 'core/api/utils/preprocessMultipartFormDataRequest'

function preprocessRequest<Body extends object>(type: RequestType, request: AxiosRequestConfig, body: Body) {
	switch (type) {
		case RequestType.Form:
			preprocessFormRequest(request, body)
			break
		case RequestType.Multipart:
			preprocessMultipartFormDataRequest(request, body)
			break
		default:
			request.data = body
			break
	}
}

export default preprocessRequest
