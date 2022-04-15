import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className='home'>
			<h1 className='title'>Quizzical</h1>
			<p>Five Quiz with multi-selections</p>
			<Link to='/quiz' className='btn start-quiz'>
				Start quiz
			</Link>
		</div>
	)
}

export default Home
