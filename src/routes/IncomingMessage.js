import React, { Component } from 'react'
import axios from 'axios';
import styled from 'react-emotion';

class IncomingMessage extends Component {
  constructor() {
    super();
    this.state = ({
      incomingFrom: '',
      incomingMessage: '',
    });
  }
  componentDidMount() {
    axios({
      url: '/api/getmessage',
      method: 'GET',
    }).then((resp) => {
      this.setState({
        incomingMessage: decodeURIComponent(resp.data.text),
        incomingFrom: decodeURIComponent(resp.data.from),
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(
      <OutputWrapper>
        <MessageOutput>
            {this.state.incomingMessage}
          <MessageFrom>
            - {this.state.incomingFrom}
          </MessageFrom>
        </MessageOutput>
      </OutputWrapper>
    )
  }
}

const OutputWrapper = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
`;

const MessageFrom = styled('div')`
  width: 100%;
  display: block;
  margin-top: 1rem;
`;

const MessageOutput = styled('div')`
  font-family: monospace;
  font-size: 2rem;
  border-radius: 0;
  border: 2px solid black;
  max-width: 100%;
  padding: 0.5rem 0.5rem 2.5rem 0.5rem;
  display: block;
  height: 90vh;
  width: 90vw;
  box-shadow: 5px 5px 0 black;
  
  &:hover, &:focus {
    outline: none;
  }
`;

export default IncomingMessage;