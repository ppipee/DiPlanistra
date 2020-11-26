export enum Shadow {
	Default = 'default',
	Hard = 'hard',
}

type ShadowType = Shadow | Shadow.Default | Shadow.Hard

export interface BlockShadowProps {
	$variant?: ShadowType
}
