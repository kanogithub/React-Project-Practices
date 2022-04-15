import { useQuizContext } from '../context/QuizContext'
function Score() {
	const { state } = useQuizContext()
	const correct = state.filter((question) => {
		const ansers = question.ansers
		return ansers.filter((anser) => anser.isAnser && anser.selected).length
	})

	return <div className='score'>You scored {correct.length}/5 correct answers</div>
}

export default Score
