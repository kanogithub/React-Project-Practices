import locationIcon from '../assets/location.svg'

function Card(props) {
	const { description, endDate, googleMapsUrl, imageUrl, location, startDate, title } = props

	return (
		<div className='card'>
			<img src={imageUrl} alt='card-figure'></img>
			<div className='details'>
				<div className='location'>
					<img src={locationIcon} alt='location-icon' />
					<span className='city'>{location}</span>
					<a href={googleMapsUrl} target='_blank' rel='noopener noreferrer'>
						View on Google Maps
					</a>
				</div>
				<h2 className='title'>{title}</h2>
				<div className='start-end'>
					{startDate} - {endDate}
				</div>
				<p className='desc'>{description}</p>
			</div>
		</div>
	)
}

export default Card
