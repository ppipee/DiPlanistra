export const DEFAULT_RETRY_TIMES = 3
export const TOKEN_KEY = 'token.di-planistra'

export enum RequestType {
	Json = 'json',
}

export type RequestMethodType = RequestMethod | 'get' | 'post' | 'put' | 'patch' | 'delete'

export enum RequestMethod {
	Get = 'get',
	Post = 'post',
	Put = 'put',
	Patch = 'patch',
	Delete = 'delete',
}

export const UPDATING_METHODS: RequestMethodType[] = [RequestMethod.Post, RequestMethod.Put, RequestMethod.Patch]

export enum Header {
	ContentType = 'content-type',
}

export enum ContentType {
	UrlEncodedForm = 'application/x-www-form-urlencoded',
	Json = 'application/json',
	Multipart = 'multipart/form-data',
}

export enum FetchState {
	Never,
	Fetching,
	Fetched,
	Error,
}
