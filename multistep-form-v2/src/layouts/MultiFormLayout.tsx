import { ReactElement, useState } from 'react'

interface Props {
	children: ReactElement[]
	currentIndex: number
}

const MultiFormLayout = ({ children, currentIndex }: Props) => {
	const useIndex = () => {
		if (currentIndex <= 0) return 0
		if (currentIndex >= children.length - 1) return children.length - 1
		return currentIndex
	}

	return <>{children[useIndex()]}</>
}

export default MultiFormLayout
