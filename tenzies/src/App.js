import { DiesProvider } from './context/DiesContext'
import ConfettiFramer from './components/ConfettiFramer'
import DiesContainer from './components/DiesContainer'
import TimeCounter from './components/TimeCounter'
import Recorder from './components/Recorder'
import RollButton from './components/RollButton'

export default function App() {
	/** App */
	console.log('App rendered')

	return (
		<DiesProvider>
			<main className='flex flex-center flex-column appframe'>
				<ConfettiFramer />
				<Recorder />
				<div className='flex flex-center flex-column'>
					<h1 className='description'>Tenzies</h1>
					<TimeCounter />
					<p className='description'>
						Roll until all dice are the same. Click each die to freeze it at its current
						value between rolls.
					</p>
				</div>
				<DiesContainer />
				<RollButton />
			</main>
		</DiesProvider>
	)
}
