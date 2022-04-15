import { useContext, createContext, useState } from 'react'

const SpinnerContext = createContext()

export const useSpinnerContext = () => useContext(SpinnerContext)

export default function SpinnerProvider({ children }) {
	const [loading, setLoading] = useState(false)

	return (
		<SpinnerContext.Provider value={{ loading, setLoading }}>
			{children}
		</SpinnerContext.Provider>
	)
}
