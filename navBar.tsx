import * as React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './navBar.scss';
function NavBar(props) {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar className="nav-bar" bg="light" expand="true">
      <Navbar.Brand href="#">
        <img
          className="logo"
          src="https://github.com/AlfonsoB/react-form-contact-us-5-Alfonso/blob/main/images/MHV2.png?raw=true"
        />
      </Navbar.Brand>
      <div className="nav-links">
        <NavLink className="nav-link-1" onClick={() => handleButtonClick('/')}>
          {props.contactButton}
        </NavLink>
        <NavLink
          className="nav-link-2"
          onClick={() => handleButtonClick('/search')}
        >
          {props.searchButton}
        </NavLink>
      </div>
    </Navbar>
  );
}

export default NavBar;
