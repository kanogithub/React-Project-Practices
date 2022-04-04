import { useMemo } from 'react'
import { useDiesContext } from '../context/DiesContext'

function RollButton() {
	const { isFinish, resetGame, rollIt } = useDiesContext()

	return useMemo(() => {
		/** RollButton */
		console.log('Button Rendered')

		return (
			<button className='roll' onClick={isFinish ? resetGame : rollIt}>
				{isFinish ? 'Reset Game' : 'Roll'}
			</button>
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFinish])
}

export default RollButton
