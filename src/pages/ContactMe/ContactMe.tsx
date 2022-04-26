import React, { useRef, useEffect } from "react";
import "./ContactMe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useInViewport } from "react-in-viewport";

const ContactMe = (props: any) => {
    const { setPageInViewport } = props;
    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const viewPortAnchor: any = useRef();
    const { inViewport } = useInViewport(viewPortAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setPageInViewport("contactMe");
    }, [inViewport, setPageInViewport]);
    return (
        <section className="contact-me">
            <h1 className="contact-me__title my-projects__shift">
                Contact Me.
            </h1>
            <div className="contact-me__content my-projects__shift">
                <div className="contact-me__content__portrait"></div>
                <div className="contact-me__content__text" ref={viewPortAnchor}>
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
