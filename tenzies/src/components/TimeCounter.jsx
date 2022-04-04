import { useState, useEffect, useMemo } from 'react'
import { useDiesContext } from '../context/DiesContext'

function TimeCounter() {
	const { time } = useDiesContext()
	const [now, setNow] = useState(new Date().getTime())

	useEffect(() => {
		setInterval(() => {
			setNow(new Date().getTime())
		}, 1000)
	}, [])

	const timeSlot = () => {
		const timeAfter = time.end !== 0 ? time.end : now
		const timeBefore = time.start
		const timeString = new Date(timeAfter - timeBefore).toISOString()
		return timeString.slice(14, 19)
	}

	return useMemo(() => {
		/** Timer */
		console.log('Timer Rnedered')

		return (
			<div>
				<h3>Time: {timeSlot()}</h3>
			</div>
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [time, now])
}

export default TimeCounter
