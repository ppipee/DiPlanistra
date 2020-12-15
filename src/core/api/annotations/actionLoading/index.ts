import FetchStateStore from 'core/api/stores/FetchStateStore'

function actionLoading<Target extends FetchStateStore, Args extends any[]>() {
	return function (target: object, methodName: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value

		descriptor.value = async function (this: Target, ...args: Args) {
			this.actionLoad(methodName)

			try {
				const result = originalMethod.call(this, ...args)

				if (result) {
					this.actionDone(methodName)

					return [result, false]
				}

				const isLoading = this.isActionLoading(methodName)

				return [undefined, isLoading]
			} catch (error) {
				this.setError(error)

				throw error
			}
		}

		return descriptor
	}
}

export default actionLoading
