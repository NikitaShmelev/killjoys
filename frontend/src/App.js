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
         data: null,
    }
  }

  componentDidMount = () => {
    if (!this.state.data) {
      const data = fetchHomePage();
      this.setState({data});
    }
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