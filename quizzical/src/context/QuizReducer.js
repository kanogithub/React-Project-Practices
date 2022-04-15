// In convention this function must handles state, action as arguments
const quizReducer = (state, { type, payload }) => {
	switch (type) {
		case 'GET_QUIZS':
			return [...payload]

		case 'RESET_GAME':
			return [...payload]

		case 'UPDATE_SELECTION':
			const { questionIndex, newAnsers } = payload
			const newState = state.map((question, index) => {
				return questionIndex === index
					? { question: question.question, ansers: newAnsers }
					: question
			})
			return [...newState]

		default:
			return state
	}
}

export default quizReducer
