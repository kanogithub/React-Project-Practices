import { Link } from 'react-router-dom'
import global from '../assets/global.svg'
import logo from '../assets/airbnblog.webp'
import style from '../pages/Travel.module.css'

function Navbar() {
	return (
		<div className={style.nav}>
			<Link to='/exper' className={style.logo}>
				<img src={logo} alt='logo' />
			</Link>
			<img src={global} alt='global_img' />
			<p>my travel jounal.</p>
		</div>
	)
}

export default Navbar
