import { useEffect } from 'react'

import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import useResponsive from 'common/styles/hooks/useResponsive'

import useDomain from 'modules/search/hooks/useDomain'

export default function useDomainTabMobile() {
	const { isDesktop } = useResponsive()
	const passQuery = useDomain()

	const tabContext = useHorizontalTabContext()

	useEffect(() => {
		if (isDesktop || !tabContext) return

		const { activeTab: domain } = tabContext
		passQuery(domain)
	}, [tabContext?.activeTab, passQuery])
}
