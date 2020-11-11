import { observable, action, computed } from 'mobx'

import { FetchState } from 'core/api/constants'

class FetchStateStore {
	@observable
	state: FetchState = FetchState.Never

	@observable
	loadedTimes = 0

	@observable
	error?: Error

	@action.bound
	load() {
		this.state = FetchState.Fetching
		this.error = undefined
	}

	@action.bound
	done() {
		this.loadedTimes++
		this.state = FetchState.Fetched
	}

	@action.bound
	setError(error: Error) {
		this.state = FetchState.Error
		this.error = error
	}

	@action.bound
	reset() {
		this.state = FetchState.Never
		this.error = undefined
		this.loadedTimes = 0
	}

	@computed
	get loading() {
		return this.state === FetchState.Fetching
	}

	@computed
	get fresh() {
		return this.loadedTimes === 0
	}
}

export default FetchStateStore
