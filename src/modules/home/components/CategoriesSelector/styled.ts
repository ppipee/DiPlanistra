import styled from 'styled-components'

import Gap from 'common/components/Gap'

const MODAL_MAX_HEIGHT = '55vh'

export const CategoriesGroupsContainer = styled(Gap)`
	overflow-y: auto;
	overflow-x: hidden;
	max-height: ${MODAL_MAX_HEIGHT};
`
