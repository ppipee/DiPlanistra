import { omit } from 'lodash'
import { observable, action, computed } from 'mobx'

import { FetchState } from 'core/api/constants'

class FetchStateStore {
	@observable
	state: FetchState = FetchState.Never

	@observable
	actionsState: Record<string, FetchState> = {}

	@observable
	loadingTimes = 0

	@observable
	loadedTimes = 0

	@observable
	error?: Error

	@action.bound
	load() {
		this.loadingTimes++
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
		this.loadedTimes++
		this.state = FetchState.Error
		this.error = error
	}

	@action.bound
	reset() {
		this.state = FetchState.Never
		this.error = undefined
		this.loadingTimes = 0
		this.loadedTimes = 0
	}

	@computed
	get isLoading() {
		return this.state === FetchState.Fetching || this.loadingTimes > this.loadedTimes
	}

	@computed
	get isFresh() {
		return this.loadedTimes === 0
	}

	@action.bound
	actionLoad(methodName: string) {
		this.actionsState = { ...this.actionsState, [methodName]: FetchState.Fetching }
		this.error = undefined
	}

	@action.bound
	actionDone(methodName: string) {
		this.actionsState = { ...this.actionsState, [methodName]: FetchState.Fetched }
		this.actionsState = omit(this.actionsState, methodName)
	}

	@computed
	get isActionLoading() {
		const actionsLoading = Object.keys(this.actionsState).reduce(
			(actionsLoading, state) => ({
				...actionsLoading,
				[state]: this.actionsState[state] === FetchState.Fetching,
			}),
			{},
		)

		return actionsLoading
	}
}

export default FetchStateStore
