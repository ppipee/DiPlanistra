import styled, { css } from 'styled-components'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

type SubGroupProps = {
	$withHeader?: boolean
}

export const SubGroupContainer = styled(Gap)<SubGroupProps>`
	${({ $withHeader }) =>
		$withHeader &&
		css`
			padding-left: ${spaces(12)};
		`}
`
