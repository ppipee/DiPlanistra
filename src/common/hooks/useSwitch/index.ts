import { useState, useCallback } from 'react'

function useSwitch(defaultValue: boolean = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)
	const open = useCallback(() => setIsOpen(true), [setIsOpen])
	const close = useCallback(() => setIsOpen(false), [setIsOpen])

	return { isOpen, open, close }
}

export default useSwitch
