import React, { Component } from 'react'
import CARD from  './card'
import { LOCATIONS } from "../../assets/locations";

class Deck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cards: [],
            locations: this.props.locations,
            // locations:  
        }

        

        this.animation_in_progress = false;
    }
    
    componentDidMount() {
        let new_cards = [];
        let center = {
            x: parseFloat(this.deck.style.width) / 2,
            y: parseFloat(this.deck.style.height) / 2
        }
        let total_number_of_cards = 5;
        let middle_card_by_index = Math.floor(total_number_of_cards /2);
        let new_x = 0;
        let new_y = 0;
        let newzIndex = 0;
        let new_scale = 1;
// 300 is the WIDTH OF THE CARD
       
        for (let i = 0; i < 5; i++) {
          if (i < middle_card_by_index) {
            //left side of deck
            //order cards
            //400 is the distance between cards
            new_x = center.x - 400 * (middle_card_by_index - i);
            new_y = center.y;

            //cascade the cards
            // new_x = new_x +((300) * (middle_card_by_index -i));

            //zIndex Cards
            newzIndex = i;

            //SCALE Cards
            new_scale = Math.pow(0.95, middle_card_by_index - i);
          } else {
            //right side of deck
            //order cards
            new_x = center.x + 400 * (i - middle_card_by_index);
            new_y = center.y;

            //cascade the cards
            // new_x = new_x - ((1 * 300) * (i -middle_card_by_index));

            //zIndex Cards
            newzIndex = i * -1.0;

            //SCALE Cards
            new_scale = Math.pow(0.95, i - middle_card_by_index);
          }
          new_cards.push(
            <CARD
              location={this.state.locations[i]}
              color={colors[i]}
              x={new_x}
              y={new_y}
              zIndex={i === middle_card_by_index ? 100 : newzIndex}
              scale={new_scale}
            />
          );
        }

        this.setState({cards: new_cards});
    }


    handle_next = () => {
        if (!this.animation_in_progress) {

        
        this.animation_in_progress = true;

        // Shift cards to left
        let last_cards_left = this.deck.children[this.deck.children.length -1].style.left;
        let last_cards_zIndex = this.deck.children[this.deck.children.length -1].style.zIndex;
        let last_cards_transform = this.deck.children[this.deck.children.length -1].style.transform;



        for (let i = this.deck.children.length -1; i > 0; i--) {
            this.deck.children[i].style.transitionDuration = '1.0s';
            this.deck.children[i].style.left = this.deck.children[i-1].style.left
            this.deck.children[i].style.zIndex = this.deck.children[i-1].style.zIndex
            this.deck.children[i].style.transform = this.deck.children[i-1].style.transform
        }

        //special case
          this.deck.children[0].style.transitionDuration = '0.2s';
          this.deck.children[0].style.transform = `translate(-50%,-50%) scale(0) `;

            setTimeout(() =>{
                this.deck.children[0].style.transitionDuration = "0s";
                this.deck.children[0].style.left = last_cards_left;
                this.deck.children[0].style.zIndex = last_cards_zIndex;
               
               this.deck.appendChild(this.deck.children[0])
               
                setTimeout(() =>{
                    this.deck.children[this.deck.children.length-1].style.transitionDuration = "0.2s";
                    this.deck.children[this.deck.children.length-1].style.transform = last_cards_transform;
                    this.animation_in_progress = false;
                }, 100)

            },200)
          } else {
              return true;
          }

    }

    handle_previous = () => {
    if (!this.animation_in_progress) {

        
        this.animation_in_progress = true;

        // Shift cards to left
        let first_cards_left = this.deck.children[0].style.left;
        let first_cards_zIndex = this.deck.children[0].style.zIndex;
        let first_cards_transform = this.deck.children[0].style.transform;



        for (let i = 0; i < this.deck.children.length - 1; i++) {
          this.deck.children[i].style.transitionDuration = "1.0s";
          this.deck.children[i].style.left = this.deck.children[
            i + 1
          ].style.left;
          this.deck.children[i].style.zIndex = this.deck.children[
            i + 1
          ].style.zIndex;
          this.deck.children[i].style.transform = this.deck.children[
            i + 1
          ].style.transform;
        }

        //special case
          this.deck.children[this.deck.children.length-1].style.transitionDuration = '0.1s';
          this.deck.children[this.deck.children.length-1].style.transform = `translate(-50%,-50%) scale(0) `;

            setTimeout(() =>{
                this.deck.children[this.deck.children.length-1].style.transitionDuration = "0s";
                this.deck.children[this.deck.children.length-1].style.left = first_cards_left;
                this.deck.children[this.deck.children.length-1].style.zIndex = first_cards_zIndex;
               
               this.deck.insertBefore(this.deck.children[this.deck.children.length-1], this.deck.children[0])
               
                setTimeout(() =>{
                    this.deck.children[0].style.transitionDuration = "0.2s";
                    this.deck.children[0].style.transform = first_cards_transform;
                    this.animation_in_progress = false;
                }, 100)

            },200)
          } else {
              return true;
          }

    }


    render() {
        // {console.log(this.state)}

        return (
          <div className='deck-all'>
            <div className="carry-controls">
            <button onClick={this.handle_previous}>Previous</button>
            <button onClick={this.handle_next}>Next</button>
            </div>
            <div ref={(ref_id) => (this.deck = ref_id)} style={styles.deck}>
              {this.state.cards}
            </div>
          </div>
        );
    } 
}

    const colors = [
        'red',
        'blue',
        'green',
        'purple',
        'white',
        'orange',
        'pink',
        'grey',
        'yellow'
    ]


    const styles = {
      deck: {
        position: "absolute",
        top: "0",
        // left: "100%",
        // transform: "translate(-50%, -50%)",
        height: "300px",
        width: "300px",
        backgroundColor: "green",
        // overflow: "hidden"
      },
    };


export default React.memo(Deck);
