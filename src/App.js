import React from 'react';
import './App.css';
import Head from './components/Head/Head';
import 'tachyons';
import axios from "axios";
import Auth from './components/auth/auth';
import Mainchat from './Mainchat';
var user1;
class App extends React.Component
{
  state={
    user:'',
    userfound:true
  }

  userentry=(event)=>{
    user1=event.target.value
    console.log(user1);
  }

  userentrydone=()=>
  {
    axios({
      method: "post",
      url: "https://markserver-2.herokuapp.com/setUser",
      data: {
        user: user1
      }
    });
    this.setState({user:user1,userfound:false});
  }
  render()
  {
    return(
      <div>
        <Head className="a"/>
        {this.state.userfound?
        <div>
          <Auth userentry={this.userentry} userentrydone={this.userentrydone}/>
        </div>:
        <div>
          <Mainchat user={this.state.user}/>
        </div>}
        </div>
    );
}
}

export default App;