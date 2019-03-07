import React from 'react';

const Send =({oninputChange,onSubmit,val})=>
{
        return (
          <div className="foot">
            <div className="pa4 ">
                                <input
                                    
                                    className=" pill f4 pa2 w-40 "
                                    value={val}
                                    type="text"
                                    onChange={oninputChange}
                                />
              <button className="pill f4 pa2   grow" onClick={onSubmit}>Send</button>
      
            </div>
          </div>
        );

}
export default Send;