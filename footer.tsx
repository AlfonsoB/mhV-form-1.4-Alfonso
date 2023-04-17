import * as React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.facebook.com">
          <FaFacebook size={24} className="mx-3" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter size={24} className="mx-3" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram size={24} className="mx-3" />
        </a>
      </div>
    </div>
  );
}
