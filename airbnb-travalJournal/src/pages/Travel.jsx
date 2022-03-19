import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from '../assets/data'
import style from './Travel.module.css'

function Travel() {
	const cardList = data.map((item, index, array) => {
		const showHr = index < array.length - 1
		return (
			<div key={`div-${index}`}>
				<Card {...item} />
				{showHr && <hr />}
			</div>
		)
	})

	return (
		<div className={style.travel_list}>
			<Navbar />
			<div className={style.container}>{cardList}</div>
		</div>
	)
}

export default Travel
