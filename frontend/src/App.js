import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HOME_PAGE_ENDPOINT } from './endpoints/homepage';
// import axios from '../axios';

class App extends React.Component {
  makeHomePageRequest = async () => {
    // axios.get(HOME_PAGE_ENDPOINT, this.state).then((response) => {
    //   console.log(response.get_json())
    // });
    try {
      const response = await fetch(HOME_PAGE_ENDPOINT);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.makeHomePageRequest}>call</button>
        </header>
      </div>
    );
  }
}

export default App;