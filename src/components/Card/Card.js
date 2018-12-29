import React from 'react';
import './Card.css';
class Card extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return( 
        <div className="pr4 pt2d">
        <div className="pill flex fr">
             {this.props.msg}
             
          </div>
        </div>);
    }
}
export default Card;