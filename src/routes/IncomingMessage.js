import React, { Component } from 'react'
import axios from 'axios';

class IncomingMessage extends Component {
  componentDidMount() {
    axios({
      url: '/api/getmessage',
      method: 'GET',
    }).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>This is the new message page</div>
    )
  }
}

export default IncomingMessage;