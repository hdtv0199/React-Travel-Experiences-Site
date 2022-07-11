import React from 'react'
import locationData from '../data'

const Main = (props) =>{
        return(
            <div className="main-content">
                <img className="titleImg" src={`images/${props.destination.titleImg}`} />
                <div className="destination-content">
                    <div className="location">
                        <img className="pin-icon" src="images/pin-icon.png"/>
                        <span className="location-name">{props.destination.location}</span>
                        <a className="mapsUrl" href={props.destination.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="destination-title">{props.destination.title}</h2>
                    <p className="date-range">{props.destination.startDate} - {props.destination.endDate}</p>
                    <p className="destination-description">{props.destination.description}</p>
                </div>
            </div>
        )
}

export default Main
