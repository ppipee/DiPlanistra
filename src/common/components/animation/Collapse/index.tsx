import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { COLLAPSE_ANIMATION_VARIANT, FadeKey } from 'common/animation/fade'

type Props = {
	children: ReactNode
	duration?: number
}

const Collapse = ({ children, duration = 0.3 }: Props) => {
	return (
		<motion.div
			initial={FadeKey.Close}
			exit={FadeKey.Close}
			animate={FadeKey.Open}
			variants={COLLAPSE_ANIMATION_VARIANT}
			transition={{
				default: { duration },
			}}
		>
			{children}
		</motion.div>
	)
}

export default Collapse
