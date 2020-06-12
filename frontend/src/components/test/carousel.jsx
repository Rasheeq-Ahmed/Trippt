import React, { Component } from 'react'
import Card from './card'
import './carry.css'
import {LOCATIONS} from '../../assets/locations'

class Carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            width:300,
            height:800,
            locations: LOCATIONS
        }

        this.slideLeft = this.slideLeft.bind(this)
        this.slideRight = this.slideRight.bind(this)
    }

    slideLeft() {
        let last = this.state.locations.slice(-1)[0]
        let rest = this.state.locations.slice(0, -1)
        console.log(last)
        console.log(rest)
        let locations = [last, ...rest]
        this.setState({ locations: locations });
    }

    slideRight() {
        let [first, ...rest] = this.state.locations;
        console.log(first)
        console.log(rest)
        let locations = [...rest, first];
        this.setState({ locations: locations });
    }

    renderSlides() {
        const locations = this.state.locations;
        return (
            <div className="slider-items">
                {
                    locations.map((location, index) => {
                        return (
                            <Card location={location} width={this.state.width} height={this.state.height} key={index} />
                        )
                    })
                }
            </div>
        )
    }




    renderNavigation() {
        return (
            <div className="slider-arrows">
                <a className='arrow left'>
                    <button onClick={this.slideLeft}>Left</button>
                </a>
                <a className='arrow right'>
                    <button onClick={this.slideRight}>Right</button>
                </a>

                {/* {console.log(this.state.locations[0])} */}
            </div>
        )
    }



    
    render() {
        return (
            <div className="slider">
                {this.renderNavigation()}
                {this.renderSlides()}
            </div>
        )
    }
}

export default Carousel



// componentDidMount() {
//     let firstCardClone = this.carry.children[0].cloneNode(true);
//     let lastCardClone = this.carry.children[this.carry.children.length - 1].cloneNode(true);

//     this.carry.insertBefore(lastCardClone, this.carry.children[0]);
//     this.carry.append(firstCardClone)

//     this.carry.style.transitionDuration = '0.5s';
//     this.carry.style.transform = `translate(-${350}px)`
// }

// handle_next = () => {
//     if (this.state.currentCard < this.carry.children.length - 1) {
//         let newCurrentCard = this.state.currentCard + 1;

//         this.setState({ currentCard: newCurrentCard }, () => {
//             this.carry.style.transitionDuration = '0.5s';
//             this.carry.style.transform = `translate(-${350 * this.state.currentCard}px)`

//             class card 

//                 if (this.state.currentCard === this.carry.children.length - 1) {
//                 setTimeout(() => {
//                     this.carry.style.transitionDuration = '0.0s';
//                     this.carry.style.transform = `translate(-${350}px)`
//                     this.setState({ currentCard: 1 })
//                 }, 502);
//             }

//         });
//     } else {
//         return;
//     }
// }
// handle_prev = () => {
//     if (this.state.currentCard > 0) {
//         let newCurrentCard = this.state.currentCard - 1;

//         this.setState({ currentCard: newCurrentCard }, () => {
//             this.carry.style.transitionDuration = '0.5s';
//             this.carry.style.transform = `translate(-${350 * this.state.currentCard}px)`

//             if (this.state.currentCard === 0) {
//                 setTimeout(() => {
//                     this.carry.style.transitionDuration = '0.0s';
//                     this.carry.style.transform = `translate(-${350 * (this.carry.children.length - 2)}px)`
//                     this.setState({ currentCard: this.carry.children.length - 2 })
//                 }, 502);
//             }

//         });
//     } else {
//         return;
//     }

// }


    // < div className = 'carry-all' >
    //     <div className="carry-controls">

    //         <button onClick={this.handle_prev}>{"<"}</button>
    //         <button onClick={this.handle_next}>{">"}</button>
    //     </div>
    //     <div className="carry-cont">
    //         <div ref={ref_id => this.carry = ref_id} className="carry">

    //             {LOCATIONS.map((location, index) => {
    //                 return <div>
    //                     <img src={`${location.url}`} alt="" />
    //                 </div>
    //             })}
            

    //         </div>
    //     </div>
    //         </div >