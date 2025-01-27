import React from 'react';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-info">
        <span>Phone: +92*********</span>
        <span>Email: <a href="mailto:alizakhn99163@gmail.com">alizakhn99163@gmail.com</a></span>
        <span>
          <a 
            href="https://www.linkedin.com/in/aliza-khan-6b258b28b" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit my LinkedIn
          </a>
        </span>
        <span>
          <a 
            href="https://github.com/ALIZAKHAN63" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit My Github Account
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
