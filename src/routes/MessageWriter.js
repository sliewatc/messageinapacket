import React, { Component } from 'react';
import styled from 'styled-components';

const WriterWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class MessageWriter extends Component {
  render() {
    return(
      <WriterWrapper>Writing wrapper here</WriterWrapper>
    );
  }
}

export default MessageWriter;