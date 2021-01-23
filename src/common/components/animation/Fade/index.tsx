import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { FadeKey, FADE_ANIMATION_VARIANT } from 'common/animation/fade'

type Props = {
	children: ReactNode
}

const Fade = ({ children }: Props) => {
	return (
		<motion.div initial={FadeKey.Close} exit={FadeKey.Close} animate={FadeKey.Open} variants={FADE_ANIMATION_VARIANT}>
			{children}
		</motion.div>
	)
}

export default Fade
