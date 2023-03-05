import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHomePage } from './endpoints/homepage';
// import { connect } from 'redux';


const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const navStyle = {
  display: 'inline-block',
  margin: '10px',
};


class App extends React.Component {

  constructor(props){  
    super(props);  
    this.state = {  
         data: null,
    }
  }

  componentDidMount = () => {
    if (!this.state.data) {
      const data = fetchHomePage();
      this.setState({data});
    }
  }

  makeHomePageRequest = async () => {
    // axios.get(HOME_PAGE_ENDPOINT, this.state).then((response) => {
    //   console.log(response.get_json())
    // });
    // try {
    //   const response = await fetch(HOME_PAGE_ENDPOINT);
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  renderPageheader = () => {
    return (
      <div>
        <header style={headerStyle}>
        <h1>My Website Header</h1>
        <nav style={navStyle}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      </div>
    );
  }

  render() {

    return (
      <div className="App">
        {this.renderPageheader()}
        <header className="App-header">
          <button>call</button>
        </header>
      </div>
    );
  }
}

export default App;