import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { white } from 'common/styles/colors'
import { Spaces } from 'common/styles/mixins/spaces'

export const Container = styled(Gap).attrs({
	$type: 'vertical',
	$size: Spaces[6],
})`
	width: 100vw;
	background-color: ${white};
	padding: ${Spaces[8]};
`
