import { useCallback, useState } from 'react'

import { VariantType } from 'common/components/field/FieldStyle/types'

export default function useVariantSwitching(initialVariant: VariantType = 'default') {
	const [variant, setVariant] = useState<VariantType>(initialVariant)
	const handleSwitching = useCallback((isSuccess?: boolean) => {
		switch (isSuccess) {
			case true:
				setVariant('success')
				break
			case false:
				setVariant('error')
				break
			default:
				setVariant('default')
				break
		}
	}, [])
	return { variant, setVariant, handleSwitching }
}
