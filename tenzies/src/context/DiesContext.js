import { createContext, useContext, useState, useEffect } from 'react'

const DiesContext = createContext()

export const useDiesContext = () => useContext(DiesContext)

export const DiesProvider = ({ children }) => {
	const [time, setTime] = useState({ start: new Date().getTime(), end: 0 })
	const [attemp, setAttemp] = useState({ attemp: 0, isFinish: false })
	const [dies, setDies] = useState(allNewDies())
	const [bestRecord, setBestRecord] = useState(getBestRecord())

	function allNewDies() {
		const dies = new Array(10).fill({})
		return dies.map((die) => ({
			value: Math.ceil(Math.random() * 6),
			isHold: false,
		}))
	}

	function getBestRecord() {
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

		setAttemp((state) => ({ ...state, attemp: state.attemp + 1 }))
	}

	const completeGame = (reachedTime) => {
		setAttemp((state) => ({ ...state, isFinish: true }))
		setTime((preTime) => ({ ...preTime, end: reachedTime }))
	}

	const resetGame = () => {
		setDies(allNewDies())
		setAttemp({ attemp: 0, isFinish: false })
		setTime({ start: new Date().getTime(), end: 0 })
	}

	useEffect(() => {
		const number = dies[0].value
		const allHold = dies.every((die) => die.isHold)
		const allSameNumber = dies.every((die) => die.value === number)
		if (allHold && allSameNumber) {
			const reachedTime = new Date().getTime()

			completeGame(reachedTime)

			const recorder = localStorage.getItem('bestRecord')
			if (!recorder) localStorage.setItem('bestRecord', (reachedTime - time.start).toString())
			else {
				const best =
					+recorder < reachedTime - time.start ? +recorder : reachedTime - time.start
				localStorage.setItem('bestRecord', best.toString())
			}

			setBestRecord(getBestRecord())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dies])

	return (
		<DiesContext.Provider
			value={{
				time,
				attemp,
				dies,
				bestRecord,
				isFinish: attemp.isFinish,
				resetGame,
				completeGame,
				rollIt,
				handleHoding,
			}}>
			{children}
		</DiesContext.Provider>
	)
}

export default DiesContext
