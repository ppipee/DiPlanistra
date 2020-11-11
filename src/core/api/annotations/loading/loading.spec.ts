import FetchStateStore from 'core/api/stores/FetchStateStore'

import loading from '.'

describe('loading', () => {
	const argsSpy = jest.fn()

	class MockStore extends FetchStateStore {
		@loading()
		getSomething() {
			return Promise.resolve('something')
		}

		@loading()
		async doSomethingWrong() {
			throw new Error('Something Wrong')
		}

		@loading()
		callWithMultipleArgs(arg1: string, arg2: number) {
			argsSpy(arg1, arg2)
		}
	}

	afterEach(() => {
		argsSpy.mockReset()
	})

	it('should perform load when start method and done after method performed', async () => {
		const store = new MockStore()
		const loadSpy = jest.spyOn(store, 'load')
		const doneSpy = jest.spyOn(store, 'done')

		const promise = store.getSomething()
		expect(loadSpy).toBeCalledTimes(1)
		expect(doneSpy).not.toBeCalled()

		const result = await promise

		expect(loadSpy).toBeCalledTimes(1)
		expect(doneSpy).toBeCalledTimes(1)
		expect(result).toBe('something')
	})

	it('should perform load when start and collect error if error', async () => {
		const store = new MockStore()
		const loadSpy = jest.spyOn(store, 'load')
		const setErrorSpy = jest.spyOn(store, 'setError')

		const promise = store.doSomethingWrong()
		expect(loadSpy).toBeCalledTimes(1)
		expect(setErrorSpy).not.toBeCalled()

		let error: Error
		try {
			await promise
		} catch (e) {
			error = e
		}

		expect(error).toBeDefined()
		expect(store.error).toBe(error)
		expect(loadSpy).toBeCalledTimes(1)
		expect(setErrorSpy).toBeCalledTimes(1)
	})

	it('should perform with args correctly', () => {
		const store = new MockStore()

		store.callWithMultipleArgs('try', 1)

		expect(argsSpy).toBeCalledWith('try', 1)
	})
})
