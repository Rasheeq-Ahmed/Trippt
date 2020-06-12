import React, { Component } from 'react'
import Card from './card'
import './carry.css'
import {LOCATIONS} from '../../assets/locations'

class Carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentCard: 1,
             locations: LOCATIONS
        }
    }


    componentDidMount() {
        let firstCardClone = this.carry.children[0].cloneNode(true);
        let lastCardClone = this.carry.children[this.carry.children.length - 1 ].cloneNode(true);

        this.carry.insertBefore(lastCardClone, this.carry.children[0]);
        this.carry.append(firstCardClone)

        this.carry.style.transitionDuration = '0.5s';
        this.carry.style.transform = `translate(-${350}px)`
    }

    handle_next = () => {
        if (this.state.currentCard < this.carry.children.length - 1) {
            let newCurrentCard = this.state.currentCard + 1;
    
            this.setState({currentCard: newCurrentCard}, () => {
                this.carry.style.transitionDuration = '0.5s';
                this.carry.style.transform = `translate(-${350 * this.state.currentCard}px)`
                
                if (this.state.currentCard === this.carry.children.length - 1) {
                    setTimeout(() => {
                        this.carry.style.transitionDuration = '0.0s';
                        this.carry.style.transform = `translate(-${350}px)`
                        this.setState({currentCard: 1})
                    }, 502);
                }
           
            });
        } else {
            return;
        }
    }
    handle_prev = () => {
        if (this.state.currentCard > 0) {
            let newCurrentCard = this.state.currentCard - 1;

            this.setState({ currentCard: newCurrentCard }, () => {
                this.carry.style.transitionDuration = '0.5s';
                this.carry.style.transform = `translate(-${350 * this.state.currentCard}px)`

                if (this.state.currentCard === 0) {
                    setTimeout(() => {
                        this.carry.style.transitionDuration = '0.0s';
                        this.carry.style.transform = `translate(-${350 * (this.carry.children.length- 2)}px)`
                        this.setState({ currentCard: this.carry.children.length - 2 })
                    }, 502);
                }

            });
        } else {
            return;
        }

    }
    
    render() {
        return (
            <div className='carry-all'>
                <div className="carry-controls">

                    <button onClick={this.handle_prev}>{"<"}</button>
                    <button onClick={this.handle_next}>{">"}</button>
                </div>
                <div className="carry-cont">
                    <div ref={ref_id => this.carry = ref_id} className="carry">
                        <Card locations={this.state.locations}/>
                        <Card card_num='1'/>
                        <Card card_num='2'/>
                        <Card card_num='3'/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
