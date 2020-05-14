import React from 'react';


class Attraction extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAttractions(295424, 'Dubai')
  }

  

  render(){

    if (!this.props.attractions) {
      return null;
    }

    return(
      <div>
      <div>{console.log(this.props.attractions.slice(0,10))}</div>
      {/* <div>
        {this.props.attractions.slice(0,10).map((place, idx) => (
          <div key={idx}>
            <li>{place.name}</li>
          </div>
        ))}
      </div> */}
      <div>
        {this.props.attractions[0].photo.images[0].large}
      </div>
      </div>
      )
  }
}

export default Attraction