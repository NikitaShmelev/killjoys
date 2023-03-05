import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHomePage } from './endpoints/homepage';
// import { connect } from 'redux';
import CoursesComponent from './components/courses';
import Header from './components/header';
import CoursePreview from './components/CoursePreview/CoursePreview.jsx'
import CourseSet from './components/CourseSet/CourseSet.jsx';





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
    fetchHomePage().then(
      (response) => {
        debugger;
        this.setState({data: response.data});

      }
    );
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <Header>
        </Header>
        {/* <CoursesComponent
        courses={this.state.data || []}
        >
          
        </CoursesComponent> */}
        <CourseSet/>
        
      </div>
    );
  }
}

export default App;