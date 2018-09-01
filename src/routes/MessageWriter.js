import React, { Component } from 'react';
import styled from 'styled-components';
import Writer from '../components/Writer';
import axios from 'axios';

class MessageWriter extends Component {
  handleMessageSubmit = (message, from) => {
    if (!message) return;
    let messageToPost = encodeURIComponent(message);
    console.log(messageToPost);

    axios({
      url: '/api/sendmessage',
      method: 'PUT',
      data: {
        from,
        message: messageToPost,
      }
    }).then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        this.props.history.push('/incoming')
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  render() {
    return(
      <WriterWrapper>
        <Writer handleMessageSubmit={this.handleMessageSubmit}/>
      </WriterWrapper>
    );
  }
}

const WriterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MessageWriter;