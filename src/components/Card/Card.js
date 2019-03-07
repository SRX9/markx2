import React from 'react';
import './Card.css';
const Card=(props)=>
{
        if(props.msgob.msg==="$$$" && props.cuser!==props.msgob.msg)
        {
                return (
                        <div className="pl4 pt2d tc center">
                                <div className="pill1 flex">
                                        <b>{props.msgob.user}</b>  joined.
                                </div>
                        </div>);
        }
        else{

        if (props.cuser===props.msgob.user)
        {
                return( 
                        <div className="pl4 pt2d">
                        <div className="pills flex fr">
                        {props.msgob.msg}
                        </div>
                </div>);
        }
        else
        {
                return (
                  <div className="pl4 pt2d">
                    <div className="pillr flex fl">
                        <b>{props.msgob.user}</b>
                        {" : "}
                        {props.msgob.msg}
                    </div>
                  </div>
                );
        }
}

}
export default Card;