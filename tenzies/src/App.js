import { useState, useEffect } from 'react'
import Dies from './components/Dies'
import Confetti from 'react-confetti'

export default function App() {
	const [state, setState] = useState({ attemp: 0, isFinish: false })
	const [dies, setDies] = useState(allNewDies())

	function allNewDies() {
		const dies = new Array(10).fill({})
		return dies.map((die) => ({
			value: Math.ceil(Math.random() * 6),
			isHold: false,
		}))
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
	}

	useEffect(() => {
		const number = dies[0].value
		const allHold = dies.every((die) => die.isHold)
		const allSameNumber = dies.every((die) => die.value === number)
		if (allHold && allSameNumber) setState((state) => ({ ...state, isFinish: true }))
	}, [dies])

	return (
		<main className='flex flex-center flex-column'>
			{state.isFinish && <Confetti />}
			<div className='flex flex-center flex-column'>
				<h1 className='description'>Tenzies</h1>
				<h3>Attemps: {state.attemp}</h3>
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
