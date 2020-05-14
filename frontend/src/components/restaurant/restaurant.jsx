import React from 'react';


class Restaurant extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.getRestaurants(295424, 'Dubai')
  // }

  render(){
    if (!this.props.restaurants) {
      return null;
    }

    return(
      <div>
        <div>
          Hello
          {console.log(this.props)}
        </div>
      </div>
      )
  }
}

export default Restaurant;