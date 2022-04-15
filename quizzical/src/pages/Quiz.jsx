import { useState } from 'react'
import Question from '../components/Question'
import Score from '../components/Score'
import { useQuizContext } from '../context/QuizContext'
import { useSpinnerContext } from '../context/SpinnerContext'
import { fetchQuiz } from '../context/QuizActions'

function Quiz() {
	const [showAnser, setShowAnser] = useState(false)
	const { state, dispatch } = useQuizContext()
	const { setLoading } = useSpinnerContext()

	const handleShowAnser = () => setShowAnser(true)

	const resetGame = () => {
		setLoading(true)
		fetchQuiz().then((result) => {
			dispatch({ type: 'RESET_GAME', payload: result })
			setShowAnser(false)
			setLoading(false)
		})
	}

	return (
		<div className='quiz-list'>
			{state.map((question, index) => (
				<Question key={index} {...question} index={index} show={showAnser}></Question>
			))}
			<div className='quiz-control'>
				{showAnser && <Score />}
				<button className='btn-anser' onClick={showAnser ? resetGame : handleShowAnser}>
					{showAnser ? 'Play again' : 'Check answers'}
				</button>
			</div>
		</div>
	)
}

export default Quiz
