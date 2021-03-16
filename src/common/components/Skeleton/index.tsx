import { Property } from 'csstype'
import BaseSkeleton from 'react-loading-skeleton'
import styled from 'styled-components'

type Props = {
	$radius?: Property.BorderRadius
}

const Skeleton = styled(BaseSkeleton)<Props>`
	border-radius: ${({ $radius = 0 }) => $radius};
`

export default Skeleton
