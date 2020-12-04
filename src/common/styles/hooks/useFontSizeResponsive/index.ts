import fontSizes from 'common/styles/mixins/fontSizes'

import useResponsive from '../useResponsive'

export default function useFontSizeResponsive() {
	const { isDesktop } = useResponsive()

	let textSizes = { titleSize: fontSizes(20), detailSize: fontSizes(16), highlightSize: fontSizes(24) }

	if (!isDesktop) {
		textSizes = { titleSize: fontSizes(18), detailSize: fontSizes(14), highlightSize: fontSizes(20) }
	}

	return textSizes
}
