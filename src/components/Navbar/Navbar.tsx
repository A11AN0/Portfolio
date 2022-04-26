import React from "react";
import "./Navbar.scss";

const Navbar = (props: any) => {
    //prop, true if navbar is extended, false if not
    const { setIsNavExtended, pageInViewport } = props;

    //Procedure to set
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    };

    //Procedure to set isNavExtended
    const handleNavMouseEvent = (event: React.MouseEvent<HTMLInputElement>) => {
        const windowWidth = getWindowDimensions().width;
        if (windowWidth < 768) {
            setIsNavExtended(false);
            return;
        }

        const e = event.type;
        e === "mouseenter" && setIsNavExtended(true);
        e === "mouseleave" && setIsNavExtended(false);
    };

    //Procedure to set the colour of elements within the navbar depending on pageInViewport
    const handleIconColour = (iconPage: string) => {
        if (iconPage !== pageInViewport) return "notCurrent";
        return "current";
    };

    //Procedure to set the colour of elements within the navbar depending on pageInViewport
    const windowScroller = (distance: number) => {
        window.scrollTo({
            top: distance * window.innerHeight,
            behavior: "smooth",
        });
    };

    const scrollToPage = (pageIcon: string) => {
        switch (pageIcon) {
            case "intro":
                windowScroller(0);
                break;
            case "aboutMe":
                windowScroller(1);
                break;
            case "myProjects":
                windowScroller(2);
                break;
            case "contactMe":
                windowScroller(3);
                break;

            default:
                return;
        }
    };

    return (
        <nav
            className="navbar"
            onMouseEnter={handleNavMouseEvent}
            onMouseLeave={handleNavMouseEvent}
        >
            <ul className="navbar-nav">
                <li className="logo">
                    <span
                        className={`nav-link ${handleIconColour("intro")}`}
                        onClick={() => {
                            scrollToPage("intro");
                        }}
                    >
                        <span className="link-text logo-text">Allan.O</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </li>

                <li className="nav-item">
                    <span
                        className={`nav-link ${handleIconColour("aboutMe")}`}
                        onClick={() => {
                            scrollToPage("aboutMe");
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="cat"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-cat fa-w-16 fa-9x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className="link-text">About Me</span>
                    </span>
                </li>
                <li className="nav-item">
                    <span
                        className={`nav-link ${handleIconColour("myProjects")}`}
                        onClick={() => {
                            scrollToPage("myProjects");
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="alien-monster"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
                        >
                            <g className="fa-group">
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className="link-text">My Projects</span>
                    </span>
                </li>
                <li className="nav-item">
                    <span
                        className={`nav-link ${handleIconColour("contactMe")}`}
                        onClick={() => {
                            scrollToPage("contactMe");
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="space-station-moon-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className="link-text">Contact Me</span>
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
