const QUIZ_API = process.env.REACT_APP_QUIZ_API

export const fetchQuiz = async () => {
	const data = await fetch(QUIZ_API)

	const results = await data.json()

	const quizs = results.results.map((res) => {
		const quiz = {}
		quiz.question = res.question
		quiz.ansers = res.incorrect_answers.map((incorrect) => {
			return {
				value: incorrect,
				isAnser: false,
				selected: false,
			}
		})
		quiz.ansers.push({
			value: res.correct_answer,
			isAnser: true,
			selected: false,
		})
		quiz.ansers = quiz.ansers.reduce((list, anser) => {
			const arrayLength = list.length + 1
			const index = Math.floor(Math.random() * arrayLength)
			list.splice(index, 0, anser)

			return list
		}, [])

		return quiz
	})

	return quizs
}
