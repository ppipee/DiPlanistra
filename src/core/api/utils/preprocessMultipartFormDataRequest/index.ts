import { AxiosRequestConfig } from 'axios'
import set from 'lodash/set'

import { Header, ContentType } from 'core/api/constants'

function preprocessMultipartFormDataRequest<Body extends object>(request: AxiosRequestConfig, body: Body) {
	set(request, ['headers', Header.ContentType], ContentType.Multipart)
	const formData = new FormData()

	Object.keys(body).forEach(key => {
		formData.append(key, body[key])
	})

	request.data = formData
}

export default preprocessMultipartFormDataRequest
