import React, { useCallback } from 'react'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import { ItemWrapper } from './styled'
import { DropDownItemProps } from './types'

const DropDownItem = ({ setItem, value, active, children, name }: DropDownItemProps) => {
	const onClickItem = useCallback(() => {
		setItem(value)
	}, [value])

	return (
		<ItemWrapper $active={active} onClick={onClickItem} $alignCenter $size={spaces(8)}>
			{children}
			<Text color={active ? gray[700] : gray[900]}>{name}</Text>
		</ItemWrapper>
	)
}

export default DropDownItem
