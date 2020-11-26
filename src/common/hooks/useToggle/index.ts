import { useState, useCallback } from 'react'

function useToggle(defaultValue: boolean = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)
	const toggle = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen])
	const close = useCallback(() => setIsOpen(false), [])
	const open = useCallback(() => setIsOpen(true), [])

	return { isOpen, open, close, toggle }
}

export default useToggle
