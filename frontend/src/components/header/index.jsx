import React from 'react';
import style from './style.css'

const navStyle = {
    display: 'inline-block',
    margin: '10px',
  };

class Header extends React.Component {
  render() {
    const { title, author, date, content } = this.props;
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <header class="p-3 text-bg-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
                    </a> */}

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><button href="#" class="nav-link px-2 text-secondary">Home</button></li>
                    <li><button href="#" class="nav-link px-2 text-white">Features</button></li>
                    <li><button href="#" class="nav-link px-2 text-white">Pricing</button></li>
                    <li><button href="#" class="nav-link px-2 text-white">FAQs</button></li>
                    <li><button href="#" class="nav-link px-2 text-white">About</button></li>
                    </ul>

                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
                    </form>

                    <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;