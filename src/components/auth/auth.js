import React from 'react';
import './auth.css';
const auth=({userentry,userentrydone,error})=>{
    return(
        <div className="tc pt7">
            <p className="color-white">{error}</p>
            <input className="pill" type="text" onChange={userentry} placeholder="Enter Name"/><br></br>
            <button className="pill" onClick={userentrydone}>Chat!!</button>
            
        </div>
    );
}

export default auth;