import React from 'react';
import { Link } from 'react-router-dom';


class AttractionShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAttraction(this.props.locationId)
  };


  render(){
    if (!this.props.attraction) {
      return null;
    }
    return(
      <div>{this.props.attraction.name}
        {console.log(this.props)}
      </div>
    )
  }
}

export default AttractionShow;