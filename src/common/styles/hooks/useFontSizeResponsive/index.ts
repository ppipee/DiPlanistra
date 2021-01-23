import fontSizes from 'common/styles/mixins/fontSizes'

import useResponsive from '../useResponsive'

interface TextType {
	titleSize: string
	detailSize: string
	highlightSize: string
	largeSize: string
}

export default function useFontSizeResponsive() {
	const { isDesktop } = useResponsive()

	let textSizes = {}

	if (isDesktop) {
		textSizes = {
			titleSize: fontSizes(20),
			detailSize: fontSizes(16),
			highlightSize: fontSizes(24),
			largeSize: fontSizes(32),
		}
	} else {
		textSizes = {
			titleSize: fontSizes(18),
			detailSize: fontSizes(14),
			highlightSize: fontSizes(20),
			largeSize: fontSizes(24),
		}
	}

	return textSizes as TextType
}
