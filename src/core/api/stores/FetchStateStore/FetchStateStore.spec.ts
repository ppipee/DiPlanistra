import { runInAction } from 'mobx'

import { FetchState } from 'core/api/constants'
import FetchStateStore from 'core/api/stores/FetchStateStore'

describe('FetchStateStore', () => {
	describe('initial', () => {
		it('should inital store with state as never and error is undefined and loaded times is 0', () => {
			const fetchStateStore = new FetchStateStore()

			expect(fetchStateStore.state).toBe(FetchState.Never)
			expect(fetchStateStore.error).toBeUndefined()
			expect(fetchStateStore.loadedTimes).toBe(0)
		})
	})

	describe('load', () => {
		it('should set state to fetching', () => {
			const fetchStateStore = new FetchStateStore()

			fetchStateStore.load()
			expect(fetchStateStore.state).toBe(FetchState.Fetching)
		})

		it('should reset error', () => {
			const fetchStateStore = new FetchStateStore()
			runInAction(() => {
				fetchStateStore.error = new Error()
			})

			fetchStateStore.load()

			expect(fetchStateStore.error).toBeUndefined()
		})
	})

	describe('done', () => {
		it('should set state to fetched and increment updating times', () => {
			const fetchStateStore = new FetchStateStore()

			fetchStateStore.done()

			expect(fetchStateStore.state).toBe(FetchState.Fetched)
			expect(fetchStateStore.loadedTimes).toBe(1)
		})
	})

	describe('setError', () => {
		it('should set error to store and set state to error', () => {
			const fetchStateStore = new FetchStateStore()

			fetchStateStore.setError(new Error())

			expect(fetchStateStore.state).toBe(FetchState.Error)
			expect(fetchStateStore.error).toBeDefined()
		})
	})

	describe('reset', () => {
		it('should reset all attribute to initial value', () => {
			const fetchStateStore = new FetchStateStore()

			runInAction(() => {
				fetchStateStore.error = new Error()
				fetchStateStore.loadedTimes = 2
				fetchStateStore.state = FetchState.Error
			})

			fetchStateStore.reset()

			expect(fetchStateStore.error).toBeUndefined()
			expect(fetchStateStore.state).toBe(FetchState.Never)
			expect(fetchStateStore.loadedTimes).toBe(0)
		})
	})

	describe('loading', () => {
		it('should be true if fetching', () => {
			const fetchStateStore = new FetchStateStore()

			runInAction(() => {
				fetchStateStore.state = FetchState.Fetching
			})

			expect(fetchStateStore.loading).toBe(true)
		})

		it('should be false if state is not fetching', () => {
			const fetchStateStore = new FetchStateStore()

			runInAction(() => {
				fetchStateStore.state = FetchState.Error
			})

			expect(fetchStateStore.loading).toBe(false)

			runInAction(() => {
				fetchStateStore.state = FetchState.Fetched
			})

			expect(fetchStateStore.loading).toBe(false)

			runInAction(() => {
				fetchStateStore.state = FetchState.Never
			})

			expect(fetchStateStore.loading).toBe(false)
		})
	})

	describe('fresh', () => {
		it('should be true if loadedTimes is 0', () => {
			const fetchStateStore = new FetchStateStore()

			expect(fetchStateStore.fresh).toBe(true)
		})

		it('should be false if loadedTimes is not 0', () => {
			const fetchStateStore = new FetchStateStore()

			runInAction(() => {
				fetchStateStore.loadedTimes = 2
			})

			expect(fetchStateStore.fresh).toBe(false)
		})
	})
})
