import React from 'react';

export default function Footer(props) {
    return (
        <div className="App-footer">
            &copy; {props.author}
        </div>
    )
}