import React, { Component } from 'react';
import styled from 'react-emotion';

class Writer extends Component {
  constructor() {
    super();
    this.state = {
      messageValue: '',
      fromValue: '',
    };
  }

  handleChange = (e) => {
    if (e.target.value.length > 140) return;
    this.setState({
      messageValue: e.target.value
    })
  };

  handleFromChange = (e) => {
    this.setState({
      fromValue: e.target.value
    })
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'enter') e.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleMessageSubmit(this.state.messageValue, this.state.fromValue)
  };

  render() {
    return(
      <MessageForm onSubmit={this.handleSubmit}>
        <MessageFromWho type={'text'}
                        onChange={this.handleFromChange}
                        placeholder={'From: anonymous'}
                        value={this.state.fromValue}/>
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

const MessageForm = styled('form')`
  position: relative;
  box-shadow: 5px 5px 0 black;
`;

const MessageFromWho = styled('input')`
  font-size: 2rem;
  font-family: monospace;
  border: solid black;
  border-width: 2px 2px 0 2px;
  padding: 0.5rem;
  color: black;
  width: 90vw;
  max-width: 100%;
  
  &:hover, &:focus {
    outline: none;
  }
`;

const MessageInput = styled('textarea')`
  font-size: 2rem;
  border-radius: 0;
  border: 2px solid black;
  max-width: 100%;
  padding: 0.5rem 0.5rem 2.5rem 0.5rem;
  display: block;
  height: 85vh;
  width: 90vw;
  
  
  &:hover, &:focus {
    outline: none;
  }
`;

const MessageSubmit = styled('input')`
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

const MessageCharacterCounter = styled('div')`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  font-family: monospace;
  color: rgba(0,0,0,0.6);
`;

export default Writer