import locationIcon from '../assets/location.svg'
import style from '../pages/Travel.module.css'

function Card(props) {
	const { description, endDate, googleMapsUrl, imageUrl, location, startDate, title } = props

	return (
		<div className={style.card}>
			<img src={imageUrl} alt='card-figure'></img>
			<div className={style.details}>
				<div className={style.location}>
					<img src={locationIcon} alt='location-icon' />
					<span className={style.city}>{location}</span>
					<a href={googleMapsUrl} target='_blank' rel='noopener noreferrer'>
						View on Google Maps
					</a>
				</div>
				<h2 className={style.title}>{title}</h2>
				<div className={style.start_end}>
					{startDate} - {endDate}
				</div>
				<p className={style.desc}>{description}</p>
			</div>
		</div>
	)
}

export default Card
