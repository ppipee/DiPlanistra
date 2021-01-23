import React, { useCallback, useEffect, useState } from 'react'

import useToggle from 'common/hooks/useToggle'

import { Container, Ball } from './styled'

type Props = {
	onEnable?: () => void
	onDisable?: () => void
	defaultValue?: boolean
}

const Switch = ({ onEnable, onDisable, defaultValue }: Props) => {
	const [firstAction, setFirstAction] = useState(defaultValue || false)
	const { toggle, isOpen } = useToggle()

	useEffect(() => {
		if (!firstAction) return

		isOpen ? onEnable?.() : onDisable?.()
	}, [isOpen, onEnable, onDisable, firstAction])

	const onToggle = useCallback(() => {
		toggle()

		if (!firstAction) {
			setFirstAction(true)
		}
	}, [firstAction, toggle])

	return (
		<Container onClick={onToggle}>
			<Ball $isOpen={isOpen} />
		</Container>
	)
}

export default Switch
