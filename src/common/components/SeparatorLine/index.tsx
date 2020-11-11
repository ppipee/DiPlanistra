import React from 'react'

import { gray } from 'common/styles/colors'

import { StyledSeparatorLine } from './styled'
import { SeparatorLineProps } from './types'

const SeparatorLine = ({ color, thickness, spacing, variant, ...props }: SeparatorLineProps) => (
	<StyledSeparatorLine $color={color} $thickness={thickness} $spacing={spacing} $variant={variant} {...props} />
)

SeparatorLine.defaultProps = {
	color: gray[300],
	thickness: '1px',
	variant: 'horizontal',
}

export default SeparatorLine
