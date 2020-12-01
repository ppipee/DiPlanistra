import { useHomeContext } from '../../stores/HomeStore/context/index'

export const useHighlightPlace = () => {
	const highlightPlace = useHomeContext()

	return highlightPlace
}
