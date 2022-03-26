import face from '../assets/face.png'

export default function Header() {
	return (
		<header className='header'>
			<img src={face} className='header-image' alt='headface' />
			<h2 className='header-title'>Meme Generator</h2>
			<h4 className='header-project'>React Project Practice</h4>
		</header>
	)
}
