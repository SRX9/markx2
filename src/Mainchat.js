import React, { Component } from 'react';
import './App.css';
import Chatlog from './components/Chat/Chatlog';
import Send from './components/Send/Send';
import 'tachyons';
import axios from "axios";

class Mainchat extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            input: '',
            imageurl: null,
            chan: false,
            val: '',
            msgarr: [],
            user:'',
            cuser:''
        }
    }
    componentWillMount() {
        this.setState({ cuser: this.props.user });
    }
    async componentDidMount() 
    {
        try {
            setInterval(async () => {
                axios
                  .get(
                    "https://markserver-1.herokuapp.com/getmsg",
                    {
                      params: {
                        user: this.state.cuser
                      }
                    }
                  )
                  .then(res => {
                    if (res.data.length !== 0) {
                      console.log(res.data);
                      var initial = [...this.state.msgarr];
                      var final = initial.concat(res.data);
                      if (initial.length !== final.length) {
                        this.setState({ msgarr: final });
                      } else {
                        console.log("nothing send");
                      }
                    } else {
                      console.log("not send anything");
                    }
                  });
            }, 1000);
        } catch (e) {
            console.log(e);
        }

    }
    oninputChange = (event) => {
        if (event.target.value === "") {

            return
        }
        this.setState({ input: event.target.value, val: event.target.value, chan: true });
    }

    onSubmit = () => {
        if (this.state.input === "") {
            return
        }
        axios({
          method: "post",
          url: "https://markserver-1.herokuapp.com/sendmsg",
          data: {
            msg: this.state.input,
            user: this.state.cuser
          }
        });
        var ias = [...this.state.msgarr];

        ias.push({ msg: this.state.input, user: this.state.cuser });

        if (this.state.chan) {
            this.setState({ msgarr: ias, chan: false, val: '' });
        }
        else {
            return
        }
    }
    render() {
        return (
            <div>
                <div className="ph7">
                    <Chatlog className="med" cuser={this.state.cuser} msgarr={this.state.msgarr} />
                </div>
                <div>
                    <Send className="foot center" val={this.state.val} oninputChange={this.oninputChange} onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default Mainchat;
