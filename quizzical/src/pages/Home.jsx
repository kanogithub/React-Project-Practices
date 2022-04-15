import { Link } from 'react-router-dom'
import { useQuizContext } from '../context/QuizContext'
import { useSpinnerContext } from '../context/SpinnerContext'
import { fetchQuiz } from '../context/QuizActions'

function Home() {
	const { dispatch } = useQuizContext()
	const { setLoading } = useSpinnerContext()

	const startGame = () => {
		setLoading(true)
		fetchQuiz().then((result) => {
			dispatch({ type: 'GET_QUIZS', payload: result })
			setLoading(false)
		})
	}

	return (
		<div className='home'>
			<h1 className='title'>Quizzical</h1>
			<p>Five Quiz with Multiple Choice</p>
			<Link to='/quiz' className='btn btn-start-quiz' onClick={startGame}>
				Start quiz
			</Link>
		</div>
	)
}

export default Home
