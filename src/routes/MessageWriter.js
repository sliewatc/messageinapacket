import React, { Component } from 'react';
import styled from 'styled-components';
import Writer from '../components/Writer';

const WriterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class MessageWriter extends Component {
  render() {
    return(
      <WriterWrapper>
        <Writer/>
      </WriterWrapper>
    );
  }
}

export default MessageWriter;