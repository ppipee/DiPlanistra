export enum FadeKey {
	Open = 'open',
	Close = 'close',
}

export const COLLAPSE_ANIMATION_VARIANT = {
	[FadeKey.Open]: { opacity: 1, height: 'auto' },
	[FadeKey.Close]: { opacity: 0, height: 0 },
}

export const FADE_ANIMATION_VARIANT = {
	[FadeKey.Open]: { opacity: 1 },
	[FadeKey.Close]: { opacity: 0 },
}
