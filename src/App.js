import React from 'react';
import Routes from './components/Routes.js';
import './App.css';
import Mainpage from './components/Mainpage.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Mainpage></Mainpage>
{/*<Routes></Routes>*/}
      </React.Fragment>
    );
  }
}
export default App;