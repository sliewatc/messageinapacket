import React, { Component } from 'react';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components';

import MessageWriter from './routes/MessageWriter'
import IncomingMessage from './routes/IncomingMessage'

const MessageWriterRouted = withRouter(MessageWriter);
const IncomingMessageRouted = withRouter(IncomingMessage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <PageWrapper>
            <Route exact path={'/'} component={MessageWriterRouted}/>
            <Route exact path={'/incoming'} component={IncomingMessageRouted}/>
          </PageWrapper>
        </Router>
      </div>
    );
  }
}

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  color: black;
`;

export default App;
