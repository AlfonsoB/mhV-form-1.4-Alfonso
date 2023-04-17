import * as React from 'react';
import './contactPage.scss';
import SearchForm from './searchForm';

export default function searchPage() {
  return (
    <div className="contact-page">
      <div className="card">
        <SearchForm />
      </div>
    </div>
  );
}
