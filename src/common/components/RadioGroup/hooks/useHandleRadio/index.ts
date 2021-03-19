import { useCallback, useEffect, useState } from 'react'

export default function useHandleRadio(
	defaultValue: string | number,
	actions: ((value: string | number) => void)[] = [],
) {
	const [radioValue, setValue] = useState(defaultValue)

	const handleRadio = useCallback(
		(value: string | number) => {
			setValue(value)

			actions.map((action) => action(value))
		},
		[...actions],
	)

	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	return { radioValue, setValue, onChange: handleRadio }
}
