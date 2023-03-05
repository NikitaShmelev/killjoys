import React from 'react';
import style from './style.css';
// import '../bootstrap/dist/css/bootstrap.css';
// import { Button } from 'bootstrap';
// import Button from 'bootstrap';
// import $ from 'jquery';
import Button from 'react-bootstrap/Button';

const navStyle = {
    display: 'inline-block',
    margin: '10px',
  };

class Header extends React.Component {
  render() {
    const { title, author, date, content } = this.props;
    return (
      <div>
        <Button>
          sss
        </Button>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
                    </a> */}

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Button href="#" className="nav-link px-2 text-secondary">Home</Button></li>
                    <li><Button href="#" className="nav-link px-2 text-white">Features</Button></li>
                    <li><Button href="#" className="nav-link px-2 text-white">Pricing</Button></li>
                    <li><Button href="#" className="nav-link px-2 text-white">FAQs</Button></li>
                    <li><Button href="#" className="nav-link px-2 text-white">About</Button></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
                    </form>

                    <div className="text-end">
                    <Button type="Button" className="btn btn-outline-light me-2">Login</Button>
                    <Button type="Button" className="btn btn-warning">Sign-up</Button>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;