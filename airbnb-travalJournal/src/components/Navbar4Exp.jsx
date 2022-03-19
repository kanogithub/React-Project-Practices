import { Link } from 'react-router-dom'
import logo from '../assets/airbnblog.webp'
import global from '../assets/global.svg'
import style from '../pages/Experiences.module.css'

export default function Navbar4Exp() {
	return (
		<nav>
			<img src={logo} className={style.nav_logo} alt='logo' />
			<div className={style.travelLink}>
				<Link to='/'>
					<img src={global} alt='global_img' />
				</Link>
				<Link to='/'>
					<p>my travel jounal.</p>
				</Link>
			</div>
		</nav>
	)
}
