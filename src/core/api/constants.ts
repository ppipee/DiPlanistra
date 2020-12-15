export const DEFAULT_RETRY_TIMES = 3

export enum RequestType {
	Json = 'json',
}

export enum RequestMethod {
	Get = 'get',
	Post = 'post',
	Put = 'put',
	Patch = 'patch',
	Delete = 'delete',
}

export const UPDATING_METHODS = [RequestMethod.Post, RequestMethod.Put, RequestMethod.Patch]

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
