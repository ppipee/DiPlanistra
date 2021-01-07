export enum FadeKey {
	Open = 'open',
	Close = 'close',
}

export const COLLAPSE_ANIMATION_VARIANT = {
	[FadeKey.Open]: { opacity: 1, height: 'auto', width: '100%' },
	[FadeKey.Close]: { opacity: 0, height: 0, width: '100%' },
}

export const FADE_ANIMATION_VARIANT = {
	[FadeKey.Open]: { opacity: 1 },
	[FadeKey.Close]: { opacity: 0 },
}
