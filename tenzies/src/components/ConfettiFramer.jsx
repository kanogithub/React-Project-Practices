import { useMemo } from 'react'
import Confetti from 'react-confetti'
import { useDiesContext } from '../context/DiesContext'

function ConfettiFramer() {
	const { attemp } = useDiesContext()

	return useMemo(() => {
		/** Confetti */
		console.log('Confetti', attemp)

		return attemp.isFinish && <Confetti />
	}, [attemp])
}

export default ConfettiFramer
