import { useContext } from 'react'

import HorizontalTabContext from 'common/components/HorizontalTab/context'

export default function useHorizontalTabContext() {
	return useContext(HorizontalTabContext)
}
