import React, { Component } from 'react'
import './toggle.css'
import Toggle from './toggle-RPC'
import Board from '../user/boards'
import Card from '../user/card'

export class Test extends Component {

    render() {
        return (
            <div className='all'>
               <div className='testing'>
                <Board id='board-1' className="board">
                    <Card id='card-1' className='carD' draggable='true'>
                        <p>Card one</p>
                    </Card>
                </Board>
                <Board id='board-2' className="board">
                    <Card id='card-2' className='carD' draggable='true'>
                        <p>Card two</p>
                    </Card>
                </Board>

                

                    {/* <Toggle>
                       { ({on, toggle}) => (
                            <div>
                            { on && <h1>Show me</h1>}
                            <button onClick={toggle}>Show/Hide</button>
                            </div>
                        )}
                    </Toggle>  */}
               </div>
            </div>
        )
    }
}

export default Test
