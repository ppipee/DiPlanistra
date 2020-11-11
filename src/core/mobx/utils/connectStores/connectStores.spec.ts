import connectStores from '.'

describe('connectStores', () => {
	it('should perform connect store with target store and return merged stores object', () => {
		const connectStores1Spy = jest.fn()
		class CurrentStageStore1 {
			connectStores = connectStores1Spy
		}

		const connectStores2Spy = jest.fn()
		class CurrentStageStore2 {
			connectStores = connectStores2Spy
		}

		class CurrentStageStore3 {}

		class ParentStore1 {}
		class ParentStore2 {}

		const currentStageStores = {
			currentStageStore1: new CurrentStageStore1(),
			currentStageStore2: new CurrentStageStore2(),
			currentStageStore3: new CurrentStageStore3(),
		}

		const parentStores = {
			parentStore1: new ParentStore1(),
			parentStore2: new ParentStore2(),
		}

		const mergedStores = connectStores(currentStageStores, parentStores)

		expect(mergedStores).toEqual({
			currentStageStore1: new CurrentStageStore1(),
			currentStageStore2: new CurrentStageStore2(),
			currentStageStore3: new CurrentStageStore3(),
			parentStore1: new ParentStore1(),
			parentStore2: new ParentStore2(),
		})

		expect(connectStores1Spy).toBeCalledWith({
			currentStageStore1: new CurrentStageStore1(),
			currentStageStore2: new CurrentStageStore2(),
			currentStageStore3: new CurrentStageStore3(),
			parentStore1: new ParentStore1(),
			parentStore2: new ParentStore2(),
		})

		expect(connectStores2Spy).toBeCalledWith({
			currentStageStore1: new CurrentStageStore1(),
			currentStageStore2: new CurrentStageStore2(),
			currentStageStore3: new CurrentStageStore3(),
			parentStore1: new ParentStore1(),
			parentStore2: new ParentStore2(),
		})
	})
})
