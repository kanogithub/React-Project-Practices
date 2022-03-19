import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './assets/data'

function App() {
	const cardList = data.map((item, index, array) => {
		const showHr = index < array.length - 1
		return (
			<>
				<Card {...item} />
				{showHr && <hr />}
			</>
		)
	})

	return (
		<div className='travel-list'>
			<Navbar />
			<div className='container'>{cardList}</div>
		</div>
	)
}

export default App
