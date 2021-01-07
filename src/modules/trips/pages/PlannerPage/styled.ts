import styled from 'styled-components'

import BaseContainer from 'common/components/BaseContainer'
import Block from 'common/components/Block'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

const SUB_CONTAINER_WIDTH = '320px'

export const MainContainer = styled(BaseContainer)`
	flex: 1;
`

export const SubContainer = styled.div`
	width: ${SUB_CONTAINER_WIDTH};
`

export const EditorBlock = styled(Block)`
	height: fit-content;
`

export const ButtonContainer = styled(BaseContainer)`
	box-sizing: border-box;
	border-top: 1px solid ${gray[100]};
	margin-top: ${spaces(48)};
`
