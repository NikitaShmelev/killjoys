import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHomePage } from './endpoints/homepage';
// import { connect } from 'redux';
import CoursesComponent from './components/courses';
import Header from './components/header';


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
      data: [
        {
            "id": 1,
            "name": "Nikita",
        },
        {
            "id": 2,
            "name": "Vova",
        },
        {
            "id": 3,
            "name": "Glib",
        }
    ]}
  }

  componentDidMount = () => {
    if (!this.state.data) {
      const data = fetchHomePage();
      this.setState({data});
    }
  }


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
        <Header>
          
        </Header>
        <header className="App-header">
          <button>call</button>
        </header>
      </div>
    );
  }
}

export default App;