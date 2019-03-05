import React from 'react';
import Card from '../Card/Card';
import './chat.css'
const Chatlog =(props)=>{
  return(    
          <div 
            className=" q  a  c pa3 "
            >
            {props.msgarr.map((msgob,index) => (
              <Card className="pa4" cuser={props.cuser} msgob={props.msgarr[props.msgarr.length-1-index]} key={msgob.msg}/>
            ))}
          </div>
        );
}

export default Chatlog;