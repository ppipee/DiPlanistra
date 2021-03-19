import FetchStateStore from 'core/api/stores/FetchStateStore'

function actionLoading<Target extends FetchStateStore, Args extends any[]>(
	target: object,
	methodName: string,
	descriptor: PropertyDescriptor,
) {
	const originalMethod = descriptor.value

	descriptor.value = async function (this: Target, ...args: Args) {
		this.actionLoad(methodName)

		try {
			const result = await originalMethod.call(this, ...args)

			this.actionDone(methodName)

			return result
		} catch (error) {
			this.setError(error)
			this.actionDone(methodName)

			throw error
		}
	}

	return descriptor
}

export default actionLoading
