import React from 'react';
import './ContactMe.scss';

const ContactMe = () => {
    return (
        <section className="contact-me">
            <h1 className="contact-me__title" id="contact">
                Contact Me.
            </h1>
            <div className="contact-me__text">
              "Whether it's business in the front, or a party in the back..end, <u>let's work together</u>"
            </div>
            <div className="contact-me__symbol-container">
              <a href="https://www.linkedin.com/in/allan-odunga-309710212" target="_blank" rel="noreferrer">hi</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">hi</a>
              <a href="https://github.com/A11AN0" target="_blank" rel="noreferrer">hi</a>
              <a href="https://www.serebii.net/" target="_blank" rel="noreferrer">hi</a>
            </div>

        </section>
    )
}

export default ContactMe;
