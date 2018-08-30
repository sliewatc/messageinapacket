import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components';

import MessageWriter from './routes/MessageWriter';

const PageWrapper = styled.div`
  height: 100vw;
  width: 100%;
  background-color: white;
  color: black;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <PageWrapper>
            <Route exact path={'/'} component={MessageWriter}/>
          </PageWrapper>
        </Router>
      </div>
    );
  }
}

export default App;
