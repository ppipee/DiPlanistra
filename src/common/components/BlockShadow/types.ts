export enum Shadow {
	Default = 'default',
	Hard = 'hard',
	Block = 'block',
}

type ShadowType = Shadow | 'default' | 'hard' | 'block'

export interface BlockShadowProps {
	$variant?: ShadowType
}
