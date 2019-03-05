import React from 'react';
import './App.css';
import Head from './components/Head/Head';
import 'tachyons';
import axios from "axios";
import Auth from './components/auth/auth';
import Mainchat from './Mainchat';
var user;
class App extends React.Component
{
    state={
      user:'',
      userfound:true,
      error:''
    }

  userentry=(event)=>{
    user=event.target.value
    console.log(user);
  }

  userentrydone=()=>
  {
    this.setState({user:user});
    axios
      .get("https://markserver-1.herokuapp.com/checkforuser", {
        params: {
          user: user
        }
      })
      .then(res => {
        console.log(res.data.ispresent);
        if (res.data.ispresent) {
          this.setState({ userfound: false });
        } else {
          this.setState({ error: "Wrong Info!!" });
        }
      });
  }
  render()
  {
    return(
      <div>
        <Head className="a"/>
        {this.state.userfound?
        <div>
          <Auth userentry={this.userentry} error={this.state.error} userentrydone={this.userentrydone}/>
        </div>:
        <div>
          <Mainchat user={this.state.user}/>
        </div>}
        </div>
    );
}
}

export default App;