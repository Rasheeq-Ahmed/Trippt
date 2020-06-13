import React, { Component } from 'react'
import './toggle.css'
import Toggle from './toggle-RPC'
export class Test extends Component {

    render() {
        return (
            <div className='all'>
               <div className='testing'>
                    <Toggle>
                       { ({on, toggle}) => (
                            <div>
                            { on && <h1>Show me</h1>}
                            <button onClick={toggle}>Show/Hide</button>
                            </div>
                        )}
                    </Toggle> 
               </div>
            </div>
        )
    }
}

export default Test
