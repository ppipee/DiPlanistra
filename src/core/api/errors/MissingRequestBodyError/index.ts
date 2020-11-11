class MissingRequestBodyError extends Error {
	constructor() {
		super('Missing Request Body')
	}
}

export default MissingRequestBodyError
