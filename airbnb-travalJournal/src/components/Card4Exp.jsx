import style from '../pages/Experiences.module.css'
import star from '../assets/star.webp'

export default function Card(props) {
	let badgeText
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE'
	}

	return (
		<div className={style.card}>
			{badgeText && <div className={style.card_badge}>{badgeText}</div>}
			<img
				src={`./images/${props.coverImg}`}
				className={style.card_image}
				alt='card-img'
				draggable='false'
			/>
			<div className={style.card_stats}>
				<img src={star} className={style.card_star} alt='card-star' />
				<span>{props.stats.rating}</span>
				<span className={style.gray}>({props.stats.reviewCount})</span>
				<span className={style.gray}>•</span>
				<span className={style.gray}>{props.location}</span>
			</div>
			<p className={style.card_title}>{props.title}</p>
			<p className={style.card_price}>
				<span className={style.bold}>From {props.price}</span> / person
			</p>
		</div>
	)
}
