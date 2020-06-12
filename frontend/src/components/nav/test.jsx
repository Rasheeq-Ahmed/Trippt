import React, { Component } from 'react'
import './toggle.css'
import Toggle from './toggleRP'
export class Test extends Component {

    render() {
        return (
            <div className='all'>
               <div className='testing'>
                    <Toggle render={({on, toggle}) => (
                        <div>
                        { on && <h1>Show me</h1>}
                        <button onClick={toggle}>Show/Hide</button>
                        </div>
                    )}/>
                    <Toggle render={({ on, toggle }) => (
                        <div>
                            {on && <nav>nav me</nav>}
                            <button onClick={toggle}>nav</button>
                        </div>
                    )} />


               </div>
            </div>
        )
    }
}

export default Test
