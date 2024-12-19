import MapMarker from '../images/path.png'
import './Entry.css'

function Entry ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
    return(
        <article className='journal-entry'>
            <div className='main-image-container'>
                <img className='main-image' src={imageUrl} alt={title} />
            </div>
            <div className='info-container'>
                <div className='info-flex'>
                    <img className='marker' src={MapMarker} alt="map marker icon"/>
                    <span className='country'>{location}</span>
                    <a className='map-link' href={googleMapsUrl}>View on Google Maps</a>
                </div>
            <div className='entry-title'>{title}</div>
            <div className='trip-date'><p>{startDate} - {endDate}</p></div>
            <div className='entry-text'><p>{description}</p></div>
            </div>

        </article>
    )
}

export default Entry