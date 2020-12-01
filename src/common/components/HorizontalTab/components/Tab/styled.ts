import styled, { css } from 'styled-components'

import Flex from 'common/components/Flex'
import { gray, green, main } from 'common/styles/colors'
import Borders from 'common/styles/mixins/borders'
import { media } from 'common/styles/utils/viewport'

type TabStyleProps = {
	$active?: boolean
	$activeIndex?: number
	$index?: number
}

export const TabContainer = styled.div<TabStyleProps>`
	box-sizing: border-box;
	position: relative;
	transition: color 0.2s;
	cursor: pointer;

	&:hover {
		color: ${green[700]};
		svg {
			color: ${green[700]};
		}
	}

	${media.md`
    &:hover{
			color: ${main[500]};
			svg {
				color: ${main[500]};
			}
    }
  `}

	${({ $active }) =>
		$active
			? css`
					color: ${main[500]};
					svg {
						color: ${main[500]};
					}
			  `
			: css`
					color: ${gray[700]};
					svg {
						color: ${gray[700]};
					}
			  `};
`

export const TabLine = styled.div<TabStyleProps>`
	bottom: 0;
	position: absolute;
	left: 0;
	background-color: ${main[500]};
	transition: all linear 0.15s;
	height: 3px;
	border-radius: ${Borders.Small};
	transform: translateX(calc((-100%) * ${({ $index, $activeIndex }) => $index - $activeIndex}));
	right: 0;
	width: 0;

	${({ $active }) =>
		$active &&
		css`
			transform: translateX(0);
			width: auto;
		`};
`

export const TabElement = styled(Flex)`
	height: 100%;
`
