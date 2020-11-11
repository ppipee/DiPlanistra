import useMatchResolution from 'common/styles/hooks/useMatchResolution'

function useResponsive() {
	const isMobile = useMatchResolution({ max: 'xs' })
	const isDesktop = useMatchResolution({ min: 'lg' })
	const isTablet = useMatchResolution({ max: 'md', min: 'sm' })

	return { isMobile, isDesktop, isTablet }
}

export default useResponsive
