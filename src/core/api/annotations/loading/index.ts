import FetchStateStore from 'core/api/stores/FetchStateStore'

function loading<Target extends FetchStateStore, Args extends any[]>(
	target: object,
	key: string,
	descriptor: PropertyDescriptor,
) {
	const originalMethod = descriptor.value

	descriptor.value = async function (this: Target, ...args: Args) {
		this.load()

		try {
			const result = await originalMethod.call(this, ...args)

			this.done()

			return result
		} catch (error) {
			this.setError(error)

			throw error
		}
	}

	return descriptor
}

export default loading
