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
    fetchHomePage().then(
      (response) => {
        debugger;
        console.log(response.data)
        this.setState({data: response.data});

      }
    );
  }


  render() {
    return (
      <div className="App">
        <Header>
        </Header>
        <CoursesComponent
        courses={this.state.data || []}
        >
          
        </CoursesComponent>
        <header className="App-header">
          <button>call</button>
        </header>
      </div>
    );
  }
}

export default App;