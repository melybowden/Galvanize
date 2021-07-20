import React from 'react'

export default function Body(props) {

    function clicked() {
        console.log("Clicked!")
    }

    return (
        <div className="App-body" >
            <h1 style={{textAlign: 'left'}}>A triathlon consists of:</h1>
            <ol style={{textAlign: 'left'}}>
                {props.tri.map(event => <li key={event.id}>A {event.dist} mi {event.type} {event.icon}</li>)}
            </ol>
            <div>
                <h2 style={{textAlign: 'center'}}>Testing Flex Containers</h2>
                <ul className="flex-container">
                    {props.tri.map(event=><li className="flexbox" key={event.id} style={{color: event.color}}>{event.icon}</li>)}
                </ul>
            </div>
            <div style={{textAlign: 'center', backgroundColor: 'lightgray'}}>
            <h1>Testing Buttons</h1>
            <h3>Buttons log to console</h3>
            </div>
            <div className="flex-container">
                <button onClick={props.fun}>Parent function passing test button</button>
                <button onClick={clicked}>Child function button</button>
            </div>
        </div>
    )
}