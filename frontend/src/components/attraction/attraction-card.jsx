import React from 'react'
import {Link} from 'react-router-dom'
import '../test/carry.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {

        if (!this.props.attraction || !this.props.attraction.photo) {
            return null;
        }
        {console.log(this.props.tripId)}
        let {key, activeIndex, attraction} = this.props
        return (
          <div
            className="card"
            style={{
              backgroundImage: `url(${this.props.attraction.photo.images.large.url})`,
            }}
          >
            <Link
              to={
                this.props.tripId
                  ? `/attraction/${attraction.location_id}/${attraction.name}/${this.props.tripId}`
                  : `/attraction/${attraction.location_id}/${attraction.name}`
              }
            >
              <div className="card-link ">
              <p className='card-att-name'>{this.props.attraction.name}</p>

              </div>

              {/* <Link to={`/attraction/${this.props.attraction.location_id}/${this.props.attraction.name}`}>Click</Link> */}
            </Link>
          </div>
        );
    }
}


export default Card;
