import React from 'react';
import './Card.css';
const Card=(props)=>
{
        if (props.cuser===props.msgob.user)
        {
                return( 
                        <div className="pl4 pt2d">
                        <div className="pill flex fr">
                        {props.msgob.msg}
                        </div>
                </div>);
        }
        else
        {
                return (
                  <div className="pl4 pt2d">
                    <div className="pill flex fl">
                      <b>
                        {props.msgob.user}</b>
                        {" : "}
                        {props.msgob.msg}
                    </div>
                  </div>
                );
        }

}
export default Card;