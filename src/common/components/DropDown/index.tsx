import React, { ReactElement, ReactText, useCallback, useMemo, useState } from 'react'

import { isArray } from 'lodash'

import ArrowDownIcon from 'common/components/icons/ArrowDownIcon'
import useToggle from 'common/hooks/useToggle'
import { black } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import Overlay from '../Overlay'

import { DropDownItemProps } from './components/DropDownItem/types'
import { DropDownContainer, DisplayText, DropDownWrapper, DropDownItemContainer } from './styled'

const ICON_SIZE = 16

type Props = {
	children: ReactElement<DropDownItemProps> | ReactElement<DropDownItemProps>[]
	defaultValue?: ReactText
	onChange?: (value: ReactText) => void
}

const DropDown = ({ children, defaultValue, onChange }: Props) => {
	const [value, setValue] = useState<ReactText>(defaultValue)
	const { isOpen, close, toggle } = useToggle()

	const setItem = useCallback(
		(value: ReactText) => {
			setValue(value)
			close()
			onChange && onChange(value)
		},
		[onChange],
	)

	const arrayChildren = !isArray(children) ? [children] : children
	const items = useMemo(
		() => arrayChildren.reduce((items, options) => ({ ...items, [options.props.value]: options.props.name }), {}),
		[arrayChildren],
	)
	const ItemComponents = arrayChildren.map((options) => ({
		...options,
		props: {
			...options.props,
			setItem,
			active: value === options.props.value,
		},
	}))

	return (
		<DropDownWrapper $direction="column">
			<DropDownContainer $isOpen={isOpen} $alignCenter $size={spaces(8)} onClick={toggle}>
				<DisplayText as="div" textAlign="center" size={fontSizes(16)}>
					{items[value] || 'select...'}
				</DisplayText>
				<ArrowDownIcon size={ICON_SIZE} color={black} />
			</DropDownContainer>
			{isOpen && <DropDownItemContainer $direction="column">{ItemComponents}</DropDownItemContainer>}
			<Overlay isOpen={isOpen} onClick={close} transparent />
		</DropDownWrapper>
	)
}

export default DropDown
