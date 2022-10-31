import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="SHs__footer section__padding">
    <div className="SHs__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="SHs__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="SHs__footer-links">
      <h1 className="SHs__footer-links_logo">
        The SHs
        <hr />
        <p>The SHs TechnoVision <br /> All Rights Reserved</p>
      </h1>
      <div className="SHs__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="SHs__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="SHs__footer-links_div">
        <h4>Get in touch</h4>
        <p>Dravya Bansal</p>
        <p>+(91) 87085-28105</p>
        <p>ac.dravya44409@gmail.com</p>
      </div>
    </div>

    <div className="SHs__footer-copyright">
      <p>&copy; 2021-<script>document.write(new Date().getFullYear())</script> The SHs TechnoVision | All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
