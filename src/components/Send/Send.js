import React from 'react';
import './Send.css';
class Send extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="tc pb4 footer main">
                <input type="text" placeholder="Message.."/>
                <img width="30px" height="30px"  src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png"></img>
            </div>
        );
    }
}

export default Send;