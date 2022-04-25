import React from "react";
import "./ContactMe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactMe = (props: any) => {
    return (
        <section className="contact-me" id="contact">
            <h1 className="contact-me__title my-projects__shift">
                Contact Me.
            </h1>
            <div className="contact-me__content my-projects__shift">
                <div className="contact-me__content__portrait"></div>
                <div className="contact-me__content__text">
                    "Whether it's business in the front, or a party in the
                    back..end, <u>let's work together</u>"
                </div>
                <div className="contact-me__content__symbol-container">
                    <a
                        href="https://www.linkedin.com/in/allan-odunga-309710212/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-me__content__symbol-container__link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/A11AN0"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-me__content__symbol-container__link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="mailto:matrixboston7613@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-me__content__symbol-container__link"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
