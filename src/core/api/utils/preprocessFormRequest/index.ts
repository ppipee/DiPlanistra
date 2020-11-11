import { AxiosRequestConfig } from 'axios'
import set from 'lodash/set'
import qs from 'qs'

import { Header, ContentType } from 'core/api/constants'

function preprocessFormRequest<Body extends object>(request: AxiosRequestConfig, body: Body) {
	set(request, ['headers', Header.ContentType], ContentType.UrlEncodedForm)
	request.data = qs.stringify(body, { allowDots: true })
}

export default preprocessFormRequest
