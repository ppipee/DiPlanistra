import React, { ReactNode } from 'react'

interface Props {
	mock: string
	onClick?: () => void
}

export const MockComponentA = ({ mock }: Props) => <div>{`I'm ${mock} A`}</div>

export const MockComponentB = ({ mock }: Props) => <div>{`I'm ${mock} B`}</div>

export const MockComponentC = ({ children }: { children: ReactNode }) => <span>{children}</span>

const MockComponentDefault = ({ mock, onClick }: Props) => <div onClick={onClick}>{`I'm default ${mock}`}</div>

export default MockComponentDefault
