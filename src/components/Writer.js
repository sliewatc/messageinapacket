import React, { Component } from 'react';
import styled from 'styled-components';

class Writer extends Component {
  constructor() {
    super();
    this.state = {
      messageValue: '',
    };
  }

  handleChange = (e) => {
    if (e.target.value.length > 140) return;
    this.setState({
      messageValue: e.target.value
    })
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'enter') e.preventDefault();
  };

  handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!this.state.messageValue) return;
    let messageToPost = encodeURIComponent(this.state.messageValue);
    console.log('message sending');
    console.log(messageToPost);
  };

  render() {
    return(
      <MessageForm onSubmit={this.handleMessageSubmit}>
        <MessageFromWho type={'text'}
                     placeholder={'From: anonymous'}/>
        <MessageInput placeholder={'Write your message'}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}
                      value={this.state.messageValue}>
        </MessageInput>
        <MessageCharacterCounter>{this.state.messageValue.length} / 140</MessageCharacterCounter>
        <MessageSubmit type={'submit'}
                       value={'Send it!'}/>
      </MessageForm>
    )
  }
}

const MessageForm = styled.form`
  position: relative;
  box-shadow: 5px 5px 0 black;
`;

const MessageFromWho = styled.input`
  font-size: 2rem;
  font-family: monospace;
  border: solid black;
  border-width: 2px 2px 0 2px;
  padding: 0.5rem;
  color: black;
  width: 90vw;
  max-width: 100%;
`;

const MessageInput = styled.textarea`
  font-size: 2rem;
  border-radius: 0;
  border: 2px solid black;
  max-width: 100%;
  padding: 0.5rem 0.5rem 2.5rem 0.5rem;
  display: block;
  height: 80vh;
  width: 90vw;
  
  &:hover, &:focus {
    outline: none;
  }
`;

const MessageSubmit = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
  outline: none;
  font-size: 2rem;
  font-family: monospace;
  padding: 0.5rem;
  background: none;
  border: solid black;
  border-width: 2px 0 0 2px;
  transition: 0.25s ease;
  
  &:hover, &:focus {
    background: black;
    color: white;
  }
`;

const MessageCharacterCounter = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-family: monospace;
  color: rgba(0,0,0,0.6);
`;

export default Writer