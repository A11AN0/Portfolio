import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Intro from "./pages/Intro";
import MyProjects from "./pages/MyProjects";

const App = () => {
    const [isNavExtended, setIsNavExtended] = useState(false);

    //For the navbar display upon scroll
    const [pageInViewPort, setPageInViewport] = useState("intro");

    return (
        <>
            <Navbar
                setIsNavExtended={setIsNavExtended}
                pageInViewport={pageInViewPort}
            />
            <Intro
                isNavExtended={isNavExtended}
                setPageInViewport={setPageInViewport}
            />
            <AboutMe
                isNavExtended={isNavExtended}
                setPageInViewport={setPageInViewport}
            />
            <MyProjects
                isNavExtended={isNavExtended}
                setPageInViewport={setPageInViewport}
            />
            <ContactMe
                isNavExtended={isNavExtended}
                setPageInViewport={setPageInViewport}
            />
        </>
    );
};

export default App;

/* 
Setup
1. Change title in public/index.html
2. Rename src/App.js => App.jsx
3. Clear out code from return in App.js
4. Clear out code from App.css
5. Add global reset to index.css
6. Install sass
7. Rename App.css => App.module.scss & change import
*/
