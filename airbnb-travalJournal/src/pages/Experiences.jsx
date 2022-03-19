import { useEffect } from 'react'
import Navbar from '../components/Navbar4Exp'
import Hero from '../components/Hero4Exp'
import Card from '../components/Card4Exp'
import data from '../assets/data2'
import style from './Experiences.module.css'

export default function App() {
	const cards = data.map((item) => {
		return <Card key={item.id} {...item} />
	})

	useEffect(() => {
		const cardList = document.getElementById('cards_list')
		let defaultX = null
		let preMouseX = null
		let setListMove = false

		cardList.addEventListener('mousedown', (e) => {
			defaultX = cardList.scrollLeft
			preMouseX = e.clientX
			setListMove = true
		})

		document.addEventListener('mousemove', (e) => {
			if (setListMove) {
				const setPosition = e.clientX - preMouseX
				cardList.scrollLeft = defaultX - setPosition
			}
		})

		document.addEventListener('mouseup', () => {
			setListMove = false
		})
	}, [])

	return (
		<div className={style.exper}>
			<Navbar />
			<Hero />
			<section className={style.cards_list} id='cards_list'>
				{cards}
			</section>
		</div>
	)
}
