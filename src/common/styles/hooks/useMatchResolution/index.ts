import { useMemo } from 'react'

import { useMediaQuery } from 'react-responsive'

import { ScreenName, LowerBreakPoints, BreakPoints } from 'common/styles/utils/viewport/screenSizes'

export interface Setting {
	only?: ScreenName
	max?: ScreenName
	min?: ScreenName
}

function useMatchResolution(setting: Setting) {
	const querySetting = useMemo(() => {
		const { only, max, min } = setting
		const minScreen = only || min
		const maxScreen = only || max

		return {
			minWidth: minScreen ? LowerBreakPoints[minScreen] : undefined,
			maxWidth: maxScreen ? BreakPoints[maxScreen] : undefined,
		}
	}, [setting])

	const isMatch = useMediaQuery(querySetting)

	return isMatch
}

export default useMatchResolution
