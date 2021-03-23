import React, { ComponentType, useCallback, useEffect, useState } from 'react'

import useToggle from 'common/hooks/useToggle'

import Gap from '../Gap'
import { IconProps } from '../icons/types'

import { Container, Ball } from './styled'

type Props = {
	onEnable?: () => void
	onDisable?: () => void
	defaultValue?: boolean
	enabledIcon?: ComponentType<IconProps>
	disabledIcon?: ComponentType<IconProps>
}

const ICON_SIZE = 20

const Switch = ({ onEnable, onDisable, defaultValue, enabledIcon: EnabledIcon, disabledIcon: DisabledIcon }: Props) => {
	const [firstAction, setFirstAction] = useState(false)
	const { toggle, isOpen } = useToggle(defaultValue || false)

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
		<Container onClick={onToggle} $isOpen={isOpen}>
			<Gap $size="0" $alignItems="center">
				{isOpen && EnabledIcon && <EnabledIcon className="margin-left-4" size={ICON_SIZE} />}
				<Ball $isOpen={isOpen} $haveIcon={!!EnabledIcon && !!DisabledIcon} />
				{!isOpen && DisabledIcon && <DisabledIcon className="margin-left-4" size={ICON_SIZE} />}
			</Gap>
		</Container>
	)
}

export default Switch
