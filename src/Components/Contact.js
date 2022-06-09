import React from 'react';
import '../Styling/main.css';

function Contact() {
  return (
    <>
      <h1 className='contact-h1'>CONTACT</h1>
      <div className='button-container'>
        <button className='email-button'><a className="email" href = "mailto: erikcorrea444@gmail.com">email me</a></button>
      </div>
    </>
  )
}

export default Contact;