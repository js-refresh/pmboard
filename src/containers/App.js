import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import Tickets from './Tickets';
import Header from '../components/Header/Header';
import Header1 from '../components/Header/Header1';
import Header2 from '../components/Header/Header2';
import Header3 from '../components/Header/Header3';
import Header4 from '../components/Header/Header4';
import Progress from '../components/Progress/Progress';
// import ProgressBar from 'react-bootstrap/ProgressBar'




const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;



const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    const lanes = [
      { id: 1, title: 'To Do'},
      { id: 2, title: 'In Progress'},
      { id: 3, title: 'Review'},
      { id: 4, title: 'Done'},
    ]
    
    return (
      <>
        <Header />
        <Progress />
        {/* <ProgressBar animated now={45} /> */}

        <GlobalStyle />

        <Header1 />
        <AppWrapper>
          <Board lanes={lanes} dataSource={'../../assets/data.json'} />
          <Tickets dataSource={'../../assets/data.json'} />
        </AppWrapper>

        <Header2 />
        <AppWrapper>
          <Board lanes={lanes} dataSource={'../../assets/data2.json'} />
          <Tickets dataSource={'../../assets/data2.json'} />
        </AppWrapper>

        <Header3 />
        <AppWrapper>
          <Board lanes={lanes} dataSource={'../../assets/data3.json'} />
          <Tickets dataSource={'../../assets/data3.json'} />
        </AppWrapper>

        <Header4 />
        <AppWrapper>
          <Board lanes={lanes} dataSource={'../../assets/data4.json'} />
          <Tickets dataSource={'../../assets/data4.json'} />
        </AppWrapper>
      </>
    );
  }
}

export default App;
