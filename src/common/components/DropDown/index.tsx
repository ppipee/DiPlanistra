import React, { ReactElement, ReactText, useCallback, useEffect, useMemo, useState } from 'react'

import { isArray } from 'lodash'

import ArrowDownIcon from 'common/components/icons/ArrowDownIcon'
import useToggle from 'common/hooks/useToggle'
import { black } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces, { AvailableSpaceSizes } from 'common/styles/mixins/spaces'

import Overlay from '../Overlay'

import { DropDownItemProps } from './components/DropDownItem/types'
import { DropDownContainer, DisplayText, DropDownWrapper, DropDownItemContainer } from './styled'
import { DropdownVariant, DropdownVariants, DropdownBorderTypes, DropdownBorders } from './types'

type Props = {
	children: ReactElement<DropDownItemProps> | ReactElement<DropDownItemProps>[]
	value?: ReactText
	defaultValue?: ReactText
	onChange?: (value: ReactText) => void
	maxRow?: number
	withOutlined?: boolean
	placeholder?: string
	variant?: DropdownVariant
	displayCenter?: boolean
	border?: DropdownBorderTypes
}

const GAP_SIZE: Record<DropdownVariants, AvailableSpaceSizes> = {
	small: 4,
	default: 8,
}

const ICON_SIZE: Record<DropdownVariants, number> = {
	small: 12,
	default: 16,
}

const DropDown = ({
	children,
	defaultValue,
	onChange,
	value,
	maxRow,
	withOutlined,
	placeholder,
	displayCenter,
	border = DropdownBorders.Default,
	variant = DropdownVariants.Default,
}: Props) => {
	const [dropDownValue, setValue] = useState<ReactText>(defaultValue)
	const { isOpen, close, toggle } = useToggle()

	useEffect(() => {
		if (!value) return

		setValue(value)
	}, [value])

	const setItem = useCallback(
		(value: ReactText) => {
			setValue(value)
			close()
			onChange?.(value)
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
			active: dropDownValue === options.props.value,
		},
	}))

	return (
		<DropDownWrapper $direction="column">
			<DropDownContainer
				$isOpen={isOpen}
				$alignCenter
				$size={spaces(GAP_SIZE[variant])}
				onClick={toggle}
				$withOutlined={withOutlined}
				$variant={variant}
				$border={border}
			>
				<DisplayText as="div" size={fontSizes(16)} textAlign={displayCenter ? 'center' : 'left'} ellipsis={1}>
					{items[dropDownValue] || placeholder || 'select...'}
				</DisplayText>
				<ArrowDownIcon size={ICON_SIZE[variant]} color={black} />
			</DropDownContainer>
			{isOpen && (
				<DropDownItemContainer
					$border={border}
					$variant={variant}
					$maxRow={maxRow}
					$direction="column"
					$alignItems="stretch"
				>
					{ItemComponents}
				</DropDownItemContainer>
			)}
			<Overlay isOpen={isOpen} onClick={close} transparent />
		</DropDownWrapper>
	)
}

export default DropDown
