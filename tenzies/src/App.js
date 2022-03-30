import { useState, useEffect } from 'react'
import Dies from './components/Dies'
import Confetti from 'react-confetti'

export default function App() {
	const [state, setState] = useState({ attemp: 0, isFinish: false })
	const [time, setTime] = useState({ start: new Date().getTime(), end: 0 })
	const [now, setNow] = useState(new Date().getTime())
	const [dies, setDies] = useState(allNewDies())

	function allNewDies() {
		const dies = new Array(10).fill({})
		return dies.map((die) => ({
			value: Math.ceil(Math.random() * 6),
			isHold: false,
		}))
	}

	const timeSlot = () => {
		const timeAfter = time.end !== 0 ? time.end : now
		const timeBefore = time.start
		const timeString = new Date(timeAfter - timeBefore).toISOString()
		return timeString.slice(14, 19)
	}

	const bestRecord = () => {
		const recorder = localStorage.getItem('bestRecord')
		const timeString = new Date(+recorder).toISOString()
		return timeString.slice(14, 19)
	}

	const handleHoding = (dIndex) => {
		setDies((dies) =>
			dies.map((die, index) => {
				return index === dIndex ? { ...die, isHold: !die.isHold } : die
			})
		)
	}

	const rollIt = () => {
		setDies((dies) => {
			return dies.map((die) => {
				return die.isHold ? die : { ...die, value: Math.ceil(Math.random() * 6) }
			})
		})

		setState((state) => ({ ...state, attemp: state.attemp + 1 }))
	}

	const resetGame = () => {
		setDies(allNewDies())
		setState({ attemp: 0, isFinish: false })
		setTime((preTime) => ({ start: new Date().getTime(), end: 0 }))
	}

	useEffect(() => {
		const number = dies[0].value
		const allHold = dies.every((die) => die.isHold)
		const allSameNumber = dies.every((die) => die.value === number)
		if (allHold && allSameNumber) {
			const reachedTime = new Date().getTime()
			setState((state) => ({ ...state, isFinish: true }))
			setTime((preTime) => ({ ...preTime, end: reachedTime }))

			const recorder = localStorage.getItem('bestRecord')
			if (!recorder) localStorage.setItem('bestRecord', (reachedTime - time.start).toString())
			else {
				const best =
					+recorder < reachedTime - time.start ? +recorder : reachedTime - time.start
				localStorage.setItem('bestRecord', best.toString())
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dies])

	useEffect(() => {
		setInterval(() => {
			setNow(new Date().getTime())
		}, 1000)
	}, [])

	return (
		<main className='flex flex-center flex-column appframe'>
			{state.isFinish && <Confetti />}
			<div className='recorder'>Best Record: {bestRecord()}</div>
			<div className='flex flex-center flex-column'>
				<h1 className='description'>Tenzies</h1>
				<h3>Attemps: {state.attemp}</h3>
				<h3>Time: {timeSlot()}</h3>
				<p className='description'>
					Roll until all dice are the same. Click each die to freeze it at its current
					value between rolls.
				</p>
			</div>
			<div className='diesContainer flex flex-center flex-column'>
				{dies.map((die, index) => (
					<Dies key={index} {...die} handleClick={() => handleHoding(index)} />
				))}
			</div>
			<button className='roll' onClick={state.isFinish ? resetGame : rollIt}>
				{state.isFinish ? 'Reset Game' : 'Roll'}
			</button>
		</main>
	)
}
