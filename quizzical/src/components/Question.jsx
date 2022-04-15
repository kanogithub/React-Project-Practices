import uuid from 'react-uuid'
import SelectButton from './SelectButton'
import { useQuizContext } from '../context/QuizContext'

function Question(props) {
	const { dispatch } = useQuizContext()

	const toggleAnser = (anserItem, anserIndex) => {
		const newAnsers = props.ansers.map((originAnser, index) => {
			return index === anserIndex
				? { ...anserItem, selected: true }
				: { ...originAnser, selected: false }
		})

		dispatch({
			type: 'UPDATE_SELECTION',
			payload: {
				questionIndex: props.index,
				newAnsers,
			},
		})
	}

	return (
		<div>
			<h3 className='quiz-title' dangerouslySetInnerHTML={{ __html: props.question }}></h3>
			<div className='quiz-ansers'>
				{props.ansers.map((anser, anserIndex) => (
					<SelectButton
						key={uuid()}
						{...anser}
						handleClick={() => toggleAnser(anser, anserIndex)}
						show={props.show}></SelectButton>
				))}
			</div>
			<div className='liner'></div>
		</div>
	)
}

export default Question
