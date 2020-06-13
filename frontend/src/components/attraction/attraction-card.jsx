import React from 'react'
import '../test/carry.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        const getPhotos = (photos) => {
            for (var key in photos) {
                if (key === "images") {
                    return photos[key];
                }
            }
        }

        const getImages = (obj) => {
            for (var key in obj) {
                if (key === "large") {
                    return obj[key]
                }
            }
        }

        const getUrl = (obj) => {
            for (var key in obj) {
                if (key === 'url') {
                    return obj[key]
                }
            }
        }
        if (!this.props.attraction) {
            return null;
        }
        return (
            <div className='card' style={{
                backgroundImage: `url(${getUrl(
                    getImages(getPhotos(this.props.attraction.photo))
                )})`
            }}>
                {/* <Link className='city-link' to={`/attractions/${this.props.attraction.locationId}/${this.props.location.location}`}> */}
                <h1 className='card-city'>{this.props.attraction.name}</h1>
                {/* </Link> */}
                {/* <button className={user ? "btn-show" : ""}
                                    onClick={() => createTrip({ location: this.props.location.location, locationId: this.props.location.locationId })}
                                >Add To My Trips </button> */}
            </div>
        )
    }
}


export default Card;
