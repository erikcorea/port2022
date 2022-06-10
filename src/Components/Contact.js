import React from 'react';
import '../Styling/main.css';

function Contact() {
  return (
    <>
      <h1 className='contact-h1'>CONTACT</h1>
      <div className='button-container'>
        <button className='email-button'><a className="email" href = "mailto: erikcorrea444@gmail.com">EMAIL ME</a></button>
      </div>
      <div className='button-container'>
        <button className='email-button'><a className="email" href ="https://docs.google.com/document/d/1V_qwBwpUjXztFb_fDUlu3GlAA5JotlzC9aCKgcIGqzU/edit?usp=sharing">RESUME</a></button>
      </div>
    </>
  )
}

export default Contact;