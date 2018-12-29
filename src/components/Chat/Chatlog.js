import React from 'react';
import {msgarr} from '../data';
import Card from '../Card/Card';
class Chatlog extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }

    render() {
        return(
                <div class="flex flex-column fr">
                { msgarr.map((msg) => <Card key={msg} msg={msg} />) }
                </div>
            );
    }
}

export default Chatlog;