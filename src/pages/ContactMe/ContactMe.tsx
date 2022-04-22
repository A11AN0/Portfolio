import React from "react";
import "./ContactMe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
