import { useContext, createContext, useReducer } from 'react'
import QuizReducer from './QuizReducer'

const QuizContext = createContext()

export const useQuizContext = () => useContext(QuizContext)

export function QuizProvider({ children }) {
	const initialState = [
		{
			question: '',
			ansers: [],
		},
	]

	const [state, dispatch] = useReducer(QuizReducer, initialState)

	return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
}

export default QuizProvider
