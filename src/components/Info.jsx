import { HiMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

function Info() {
	return (
		<div className='info'>
			<h2>Teng-Wei Huang</h2>
			<p>Web Developer</p>
			<a className='my-website' href='https://kanogithub.netlify.app/'>
				<p>My website</p>
			</a>
			<div className='social-link'>
				<a href='mailto:linkano.teck@gmail.com' className='email'>
					<HiMail />
					Email
				</a>
				<a href='https://www.linkedin.com/in/tengwei-huang-15a8a620a/' className='linkedin'>
					<FaLinkedin />
					LinkedIn
				</a>
			</div>
		</div>
	)
}

export default Info
