import React from 'react'
import Card from './components/Card'
import avatar from './assets/profilePhoto.jpg'
import Info from './components/Info'
import Interests from './components/Interests'
import About from './components/About'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Card>
				<div className='avatar'>
					<img src={avatar} alt='avatar' />
				</div>
				<div className='card-body'>
					<Info />
					<About />
					<Interests />
				</div>
				<Footer />
			</Card>
		</>
	)
}

export default App
