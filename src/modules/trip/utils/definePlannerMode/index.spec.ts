import { PlannerMode } from 'modules/trip/types/store'

import definePlannerMode from '.'

describe('definePlannerMode', () => {
	it('should return EditMode', () => {
		expect(definePlannerMode('/me/planners/abcsesse1we')).toBe(PlannerMode.Edit)
		expect(definePlannerMode('/me/planners/1234asdgasd1')).toBe(PlannerMode.Edit)
	})

	it('should return ViewMode', () => {
		expect(definePlannerMode('/trip/abcsesse1we')).toBe(PlannerMode.View)
		expect(definePlannerMode('/trip/1234asdgasd1')).toBe(PlannerMode.View)
	})

	it('should return default mode if path name not exist in whitelist', () => {
		// this impossible because router should redirect to other page
		expect(definePlannerMode('/me/planners/abcsesse1we/sasd')).toBe(PlannerMode.View)
	})
})
