import hero from '../assets/hero.webp'
import style from '../pages/Experiences.module.css'

export default function Hero() {
	return (
		<section className={style.hero}>
			<img src={hero} className={style.hero_photo} alt='hero' />
			<h1 className={style.hero_header}>Online Experiences</h1>
			<p className={style.hero_text}>
				Join unique interactive activities led by one-of-a-kind hosts—all without leaving
				home.
			</p>
		</section>
	)
}
