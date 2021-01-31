import styled from 'styled-components'

import { Shadow } from 'common/components/BlockShadow/types'
import Borders from 'common/styles/mixins/borders'

export const InputWrapper = styled.div`
	box-shadow: ${Shadow.Default};
	border-radius: ${Borders.Curve};
`
