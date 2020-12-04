export type FontWeight = 'bold' | 'normal' | 500 | 600

export type FontStyle = 'normal' | 'italic'

export type FontFormat = 'woff2' | 'woff' | 'truetype'

export interface FontSource {
	src: string
	format: FontFormat
}

export interface FontSetting {
	weight: FontWeight
	style: FontStyle
	sources: FontSource[]
}
