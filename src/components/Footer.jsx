import {
	FaGithubSquare,
	FaInstagramSquare,
	FaFacebookSquare,
	FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
	return (
		<div className='footer flex-center'>
			<a href='https://twitter.com/kano_tw_dev'>
				<FaTwitterSquare />
			</a>
			<a href='https://www.facebook.com/linkano.fb'>
				<FaFacebookSquare />
			</a>
			<a href='https://www.instagram.com/twhuang34/'>
				<FaInstagramSquare />
			</a>
			<a href='https://twitter.com/kano_tw_dev'>
				<FaGithubSquare />
			</a>
		</div>
	)
}

export default Footer
