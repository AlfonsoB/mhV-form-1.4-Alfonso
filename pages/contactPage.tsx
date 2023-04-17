import * as React from 'react';
import './contactPage.scss';
import ContactForm from './contactForm';

export default function contactPage() {
  return (
    <div className="contact-page">
      <div className="card">
        <ContactForm />
      </div>
    </div>
  );
}
