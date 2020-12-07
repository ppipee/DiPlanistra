import { useCallback, KeyboardEvent } from 'react'

export default function useOnEnter(actions: (() => void)[]) {
	const onEnter = useCallback(
		(e: KeyboardEvent<HTMLInputElement | HTMLFormElement>) => {
			if (e.key !== 'Enter') return

			actions.forEach((action) => action())
		},
		[...actions],
	)

	return onEnter
}
