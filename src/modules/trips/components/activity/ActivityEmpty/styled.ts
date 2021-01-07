import styled from 'styled-components'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Borders from 'common/styles/mixins/borders'

export const Container = styled(ResponsiveBlock)`
	border-radius: ${Borders.Extra};
	width: 100%;
`
