import React, { Component } from 'react';
import Slide from './slide';
import LeftArrow from './left_arrow';
import RightArrow from './right_arrow';
import './slider.css'


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: this.props.data.length
        };
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }
    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    randomSlide() {
        let length = this.state.length;
        let rand = Math.floor(Math.random() * length);

        this.setState({
            activeIndex: rand
        })
    }

    render() {
        return (
            <div className='slider'>
                <div className='slider-items'>
                    {/* <LeftArrow
                        goToPrevSlide={() => this.goToPrevSlide()}
                    /> */}
                    <div className='slider-text'>
                        <Slide
                            activeIndex={this.state.activeIndex}
                            data={this.props.data}
                        />
                    </div>
                    {/* <RightArrow
                        goToNextSlide={() => this.goToNextSlide()}
                    /> */}
                </div>
                {/* <button onClick={()=> this.randomSlide()}>Random</button> */}
            </div>
        );
    }
}