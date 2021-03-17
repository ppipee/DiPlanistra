import React, { ReactNode } from 'react'

import { DomainValue } from 'common/constants/business'
import useResponsive from 'common/styles/hooks/useResponsive'

import { DomainTabs } from './styled'

type Props = {
	children: ReactNode
	domain: string
}

const DomainTabsMobile = ({ children, domain }: Props) => {
	const { isDesktop } = useResponsive()

	if (isDesktop) return <>{children}</>

	return (
		<DomainTabs domain={Number(domain) as DomainValue} showTrip>
			{children}
		</DomainTabs>
	)
}

export default DomainTabsMobile
