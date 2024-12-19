import { useState } from 'react';
import MapMarker from '../images/path.png'
import './Entry.css'

function Entry ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {

    const [isExpanded, setIsExpanded] = useState(false);
    const maxCharacters = 150;
    const truncatedDescription =
    description.length > maxCharacters && !isExpanded
      ? `${description.slice(0, maxCharacters)} `
      : description;

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
            <div className='entry-text'>
                <p>{truncatedDescription}{' '}
                    {description.length > maxCharacters && (
                        <span
                            className="toggle-description"
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{ color: 'black', cursor: 'pointer', textDecoration: 'none' }}
                            >
                            {isExpanded ? ' Show Less' : '...'}
                        </span>
          )}</p></div>
            </div>

        </article>
    )
}

export default Entry