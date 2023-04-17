import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import ContactPage from './pages/contactPage';
import SearchPage from './pages/searchPage';
import NavBar from './navBar';
import Footer from './footer';
import Switch from 'react-bootstrap/esm/Switch';

export default function App() {
  return (
    <div className="container">
      <NavBar
        brandName="MHVillage"
        contactButton="Contact"
        searchButton="Search"
      />
      <Switch>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Switch>
      <Footer />
    </div>
  );
}
